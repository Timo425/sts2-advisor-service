// Live watcher: polls STS2MCP, caches deck during combat, auto-grades at decision screens.
// Run with: npm run live  (or: node src/cli/live.js)

import {
  mapCharacter,
  extractDeckFromCombatState,
  hasCombatPiles,
  isDecisionState,
  extractOfferedCards,
  extractOfferedRelics,
  extractEquippedRelicIds,
  extractRemovalService,
} from '../lib/stsmcpAdapter.js';
import { updateFromCombat, getSnapshot } from '../lib/deckCache.js';
import { gradeCardOfferings, gradeRelicOfferings, gradeRemovalForDeck } from '../advisor/shunraiAdapter.js';

// Match Shunrai-style canonical ID format (uppercase, _-separated, no punctuation).
const nameKey = (s) => (s ?? '').toString().toUpperCase().replace(/\+$/, '').replace(/[\s\-]/g, '_').replace(/[^A-Z0-9_]/g, '');

// ── Output formatting ──────────────────────────────────────────────────────────
// ANSI colors gated on TTY + NO_COLOR convention.
const useColor = process.stdout.isTTY && !process.env.NO_COLOR;
const ansi = (code, s) => useColor ? `\x1b[${code}m${s}\x1b[0m` : s;
const bold = (s) => ansi('1', s);
const dim = (s) => ansi('2', s);
const green = (s) => ansi('32', s);
const red = (s) => ansi('31', s);
const cyan = (s) => ansi('36', s);
const TIER = {
  S: (s) => ansi('1;33', s),  // gold
  A: (s) => ansi('1;36', s),  // bright cyan
  B: (s) => ansi('1;34', s),  // bright blue
  C: (s) => ansi('32', s),    // green
  D: (s) => ansi('33', s),    // yellow
  F: (s) => ansi('31', s),    // red
};
const tierColor = (g) => (TIER[g] ?? ((s) => s));

// Each Shunrai reason looks like "[◈|▲|▼] [+|-]N.N body". Pull out the leading
// score so we can sort by magnitude and align the score in a fixed column.
function parseReason(text) {
  let s = String(text ?? '');
  let marker = '';
  const markerMatch = s.match(/^([◈▲▼])\s*/);
  if (markerMatch) { marker = markerMatch[1]; s = s.slice(markerMatch[0].length); }
  const numMatch = s.match(/^([+-]?[\d.]+)\s*/);
  let val = 0;
  if (numMatch) { val = parseFloat(numMatch[1]) || 0; s = s.slice(numMatch[0].length); }
  return { val, marker, body: s };
}

function fmtScoreCell(val) {
  const sign = val >= 0 ? '+' : '';
  return (sign + val.toFixed(1)).padStart(5);
}

const STS2MCP_URL = process.env.STS2MCP_URL ?? 'http://localhost:15526/api/v1/singleplayer';
// Default 3s — STS2MCP's GET /singleplayer auto-opens shop inventory and treasure
// chests as a side effect of querying state, which can re-trigger the in-game UI
// after the user dismisses it. 3s gives the user enough time to leave a screen
// before our next poll re-fires the auto-open.
const POLL_MS = Number(process.env.POLL_MS ?? 3000);

let lastStateType = null;
let lastFloor = null;
let lastDecisionFingerprint = null;
let lastDeckCachedAtFloor = null;
let firstRelicCheck = true;
let lastRelicIds = new Set();

const stamp = () => new Date().toISOString().slice(11, 19);

async function fetchState() {
  try {
    const res = await fetch(STS2MCP_URL, { signal: AbortSignal.timeout(2500) });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

function fmtPrice(price, canAfford) {
  if (price == null) return '';
  const txt = `${price}g`;
  return canAfford ? '  ' + dim(txt) : '  ' + red(txt + ' (costly)');
}

function fmtCard(g, options = {}) {
  const { isBest = false, price = null, canAfford = true } = options;
  const grade = g.finalGrade ?? g.base ?? '?';
  const score = (g.finalScore ?? 0).toFixed(2);
  const name = g.name ?? g.codexId ?? '?';
  const ungraded = g.annotated ? '' : dim('  (ungraded)');
  const marker = isBest ? cyan(bold('▶')) : ' ';
  const priceStr = fmtPrice(price, canAfford);

  const head = `${marker} ${tierColor(grade)(grade)} ${score.padStart(5)}  ${bold(name)}${ungraded}${priceStr}`;
  const lines = [head];

  if (g.notes && g.notes !== 'Unknown card') {
    lines.push(`           ${dim(g.notes)}`);
  }

  const reasons = [];
  for (const r of (g.synReasons ?? [])) reasons.push({ ...parseReason(r), kind: 'syn' });
  for (const r of (g.antiReasons ?? [])) reasons.push({ ...parseReason(r), kind: 'anti' });
  reasons.sort((a, b) => Math.abs(b.val) - Math.abs(a.val));

  for (const r of reasons) {
    const colorize = r.kind === 'syn' ? green : red;
    const cell = fmtScoreCell(r.val);
    const marker = r.marker ? `${r.marker} ` : '';
    lines.push(`           ${colorize(cell)}  ${marker}${r.body}`);
  }
  return lines.join('\n');
}

function fmtRelic(g, options = {}) {
  const { isBest = false, price = null, canAfford = true } = options;
  const r = g.result;
  const name = g.name ?? '?';
  const ungraded = g.annotated ? '' : dim('  (ungraded)');
  const marker = isBest ? cyan(bold('▶')) : ' ';
  const priceStr = fmtPrice(price, canAfford);
  if (!r) return `${marker} ${dim('?')}      ${bold(name)}${ungraded}${priceStr}`;
  const grade = r.finalGrade ?? r.base ?? '?';
  const score = (r.finalScore ?? 0).toFixed(2);
  const head = `${marker} ${tierColor(grade)(grade)} ${score.padStart(5)}  ${bold(name)}${ungraded}${priceStr}`;
  const lines = [head];
  if (r.notes) lines.push(`           ${dim(r.notes)}`);
  return lines.join('\n');
}

// Pick the best-scoring item; flag skip when can_skip and best is filler-tier.
const SKIP_THRESHOLD = 2.5;
function pickBest(items, getScore, { canSkip = false, affordableOnly = false, getAfford = null } = {}) {
  if (!items.length) return { picks: [], skip: false, all: [] };
  let pool = items;
  if (affordableOnly && getAfford) pool = items.filter(getAfford);
  if (!pool.length) return { picks: [], skip: false, all: items };
  const sorted = [...pool].sort((a, b) => (getScore(b) ?? 0) - (getScore(a) ?? 0));
  const bestScore = getScore(sorted[0]) ?? 0;
  const tied = sorted.filter(s => Math.abs((getScore(s) ?? 0) - bestScore) < 0.01);
  const skip = canSkip && bestScore < SKIP_THRESHOLD;
  return { picks: tied, skip, all: sorted };
}

function fmtPickLine(label, picks, getName, getGradeScore) {
  if (!picks.length) return null;
  if (picks.length === 1) {
    const p = picks[0];
    const { grade, score } = getGradeScore(p);
    return `   ${cyan(bold('▶ ' + label + ':'))} ${tierColor(grade)(grade)} ${score.toFixed(2)}  ${bold(getName(p))}`;
  }
  const names = picks.map(getName).join(' / ');
  const { grade, score } = getGradeScore(picks[0]);
  return `   ${cyan(bold('▶ ' + label + ':'))} ${tierColor(grade)(grade)} ${score.toFixed(2)}  ${bold(names)}  ${dim('(tied)')}`;
}

function fmtSkipLine(reason) {
  return `   ${cyan(bold('▶ Skip'))}  ${dim(reason)}`;
}

function fmtHeader(label, state) {
  const floor = state?.run?.floor ?? '?';
  const character = mapCharacter(state?.player?.character) ?? '?';
  return `\n${dim('───')} ${cyan(stamp())} ${bold(label)} ${dim('· floor ' + floor + ' · ' + character)}`;
}

function fmtDeckLine(cache, deckAnalysis) {
  const parts = [];
  if (cache) parts.push(`deck ${cache.deckCards.length} (cached @ floor ${cache.floor})`);
  else parts.push(red('no deck snapshot yet'));
  if (deckAnalysis?.detected?.length) {
    const arches = deckAnalysis.detected.map(d => `${d.arch.name ?? d.arch.id}(${d.strength.toFixed(2)})`).join(' · ');
    parts.push(`archetypes: ${arches}`);
  }
  return `   ${dim(parts.join('   '))}`;
}

function reportCardReward(state) {
  const character = mapCharacter(state?.player?.character);
  const floor = state?.run?.floor ?? 1;
  const offered = extractOfferedCards(state);
  const equippedRelics = extractEquippedRelicIds(state);
  const canSkip = state?.card_reward?.can_skip ?? false;
  const cache = getSnapshot();
  const deck = cache?.deckCards ?? [];

  const { deckAnalysis, grades } = gradeCardOfferings({
    character, deck, offered, floor, equippedRelics,
  });

  const rec = pickBest(grades, g => g.finalScore, { canSkip });
  const bestSet = new Set(rec.picks);
  const sorted = [...grades].sort((a, b) => (b.finalScore ?? 0) - (a.finalScore ?? 0));

  console.log(fmtHeader(`CARD REWARD (${offered.length} offered)`, state));
  console.log(fmtDeckLine(cache, deckAnalysis));
  if (rec.skip) {
    console.log(fmtSkipLine(`best offered is only ${rec.all[0].finalGrade} ${(rec.all[0].finalScore ?? 0).toFixed(2)} — keep deck lean.`));
  } else {
    const line = fmtPickLine('Pick', rec.picks, g => g.name, g => ({ grade: g.finalGrade ?? '?', score: g.finalScore ?? 0 }));
    if (line) console.log(line);
  }
  console.log();
  for (const g of sorted) {
    console.log(fmtCard(g, { isBest: bestSet.has(g) }));
  }
}

function reportShop(state) {
  const character = mapCharacter(state?.player?.character);
  const floor = state?.run?.floor ?? 1;
  const offered = extractOfferedCards(state);
  const offeredRelics = extractOfferedRelics(state);
  const equippedRelics = extractEquippedRelicIds(state);
  const removal = extractRemovalService(state);
  const cache = getSnapshot();
  const deck = cache?.deckCards ?? [];

  console.log(fmtHeader('SHOP', state));
  console.log(fmtDeckLine(cache, undefined));

  if (offered.length) {
    console.log(`\n  ${bold('CARDS')}`);
    const { grades } = gradeCardOfferings({ character, deck, offered, floor, equippedRelics });
    const sorted = [...grades].sort((a, b) => (b.finalScore ?? 0) - (a.finalScore ?? 0));
    for (const g of sorted) {
      const offer = offered.find(o => o.id === g.codexId);
      console.log(fmtCard(g, { price: offer?.price, canAfford: offer?.can_afford }));
    }
  }
  if (offeredRelics.length) {
    console.log(`\n  ${bold('RELICS')}`);
    const { grades } = gradeRelicOfferings({ character, deck, offered: offeredRelics });
    const sorted = [...grades].sort((a, b) => (b.result?.finalScore ?? 0) - (a.result?.finalScore ?? 0));
    for (const g of sorted) {
      const offer = offeredRelics.find(o => o.id === g.codexId);
      console.log(fmtRelic(g, { price: offer?.price, canAfford: offer?.can_afford }));
    }
  }
  const potionItems = (state.shop?.items ?? []).filter(it => it.category === 'potion' && it.is_stocked);
  if (potionItems.length) {
    console.log(`\n  ${bold('POTIONS')}`);
    for (const p of potionItems) {
      const head = `  ${dim('?')}      ${bold(p.potion_name ?? p.potion_id ?? '?')}${dim('  (ungraded)')}${fmtPrice(p.price, p.can_afford)}`;
      console.log(head);
    }
  }
  if (removal) {
    console.log(`\n  ${bold('REMOVAL')} ${fmtPrice(removal.price, removal.can_afford)}`);
    if (!cache || deck.length === 0) {
      console.log(`     ${dim('needs deck snapshot to grade — best target unknown.')}`);
    } else {
      const { bestTarget, candidates } = gradeRemovalForDeck({ character, deck, equippedRelics });
      if (bestTarget) {
        const grade = bestTarget.grade ?? '?';
        const score = (bestTarget.score ?? 0).toFixed(2);
        console.log(`     best: ${tierColor(grade)(grade)} ${score.padStart(5)}  ${bold(bestTarget.name)}`);
        if (bestTarget.reason) console.log(`           ${dim(bestTarget.reason)}`);
        const more = candidates.slice(1, 4).filter(c => (c.score ?? 0) >= 2);
        for (const c of more) {
          const g2 = c.grade ?? '?';
          const sc = (c.score ?? 0).toFixed(2);
          console.log(`     also: ${tierColor(g2)(g2)} ${sc.padStart(5)}  ${c.name}`);
        }
      }
    }
  }
}

function reportCardSelect(state) {
  const cs = state.card_select ?? {};
  const screenType = cs.screen_type ?? '?';
  const prompt = cs.prompt ?? '';
  const cards = cs.cards ?? [];
  const character = mapCharacter(state?.player?.character);
  const floor = state?.run?.floor ?? 1;
  const cache = getSnapshot();
  const deck = cache?.deckCards ?? [];

  console.log(fmtHeader(`CARD SELECT (${screenType})`, state));
  if (prompt) console.log(`   ${dim(prompt)}`);
  if (!cards.length) return;

  // Decide whether these are offered cards (add to deck) or deck cards (act on).
  // - transform/upgrade are deck actions by definition.
  // - choose is offered by definition.
  // - simple_select/select are ambiguous (Brain Leech vs shop-removal target picker etc.):
  //   if a deck cache is available, classify by deck membership.
  let isOffering;
  if (screenType === 'transform' || screenType === 'upgrade') {
    isOffering = false;
  } else if (screenType === 'choose') {
    isOffering = true;
  } else if (deck.length > 0) {
    const deckKeys = new Set(deck.map(c => nameKey(c.name)));
    const inDeckCount = cards.filter(c => deckKeys.has(nameKey(c.id ?? c.name))).length;
    isOffering = (inDeckCount / cards.length) < 0.5;
  } else {
    isOffering = true;  // no cache — events are far more common than removal pickers, default to offering
  }

  if (isOffering) {
    const offered = cards.map(c => ({ id: c.id, name: c.name }));
    const equippedRelics = extractEquippedRelicIds(state);
    const { deckAnalysis, grades } = gradeCardOfferings({ character, deck, offered, floor, equippedRelics });
    // can_skip isn't reliably surfaced for card_select offerings — be conservative and don't recommend skip.
    const rec = pickBest(grades, g => g.finalScore, { canSkip: false });
    const bestSet = new Set(rec.picks);
    const sorted = [...grades].sort((a, b) => (b.finalScore ?? 0) - (a.finalScore ?? 0));
    console.log(fmtDeckLine(cache, deckAnalysis));
    const line = fmtPickLine('Pick', rec.picks, g => g.name, g => ({ grade: g.finalGrade ?? '?', score: g.finalScore ?? 0 }));
    if (line) console.log(line);
    console.log();
    for (const g of sorted) {
      console.log(fmtCard(g, { isBest: bestSet.has(g) }));
    }
  } else if (screenType === 'select' || screenType === 'simple_select') {
    // Picker over your own deck cards (e.g. shop removal target) — rank by removal value.
    const equippedRelics = extractEquippedRelicIds(state);
    const { candidates } = gradeRemovalForDeck({ character, deck, equippedRelics });
    const offeredKeys = new Set(cards.map(c => nameKey(c.id ?? c.name)));
    const matches = candidates.filter(c => offeredKeys.has(nameKey(c.name)));
    matches.sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
    console.log(`   ${bold('removal targets ranked:')}`);
    console.log();
    for (const c of matches) {
      const grade = c.grade ?? '?';
      const score = (c.score ?? 0).toFixed(2);
      console.log(`  ${tierColor(grade)(grade)} ${score.padStart(5)}  ${bold(c.name ?? '?')}`);
      if (c.reason) console.log(`           ${dim(c.reason)}`);
    }
  } else {
    // transform / upgrade: list only — distinct scoring logic not yet implemented.
    for (const c of cards) {
      const cost = c.cost != null ? `(${c.cost}) ` : '';
      console.log(`     ${cost}${c.name ?? c.id ?? '?'}`);
    }
    console.log(`   ${dim(`(no grades — '${screenType}' deck-action scoring not implemented yet)`)}`);
  }
}

function reportRelicChoice(state) {
  const character = mapCharacter(state?.player?.character);
  const floor = state?.run?.floor ?? 1;
  const offeredRelics = extractOfferedRelics(state);
  const canSkip = state?.relic_select?.can_skip ?? state?.treasure?.can_skip ?? false;
  const cache = getSnapshot();
  const deck = cache?.deckCards ?? [];

  const { grades } = gradeRelicOfferings({ character, deck, offered: offeredRelics });
  const rec = pickBest(grades, g => g.result?.finalScore, { canSkip });
  const bestSet = new Set(rec.picks);
  const sorted = [...grades].sort((a, b) => (b.result?.finalScore ?? 0) - (a.result?.finalScore ?? 0));

  console.log(fmtHeader(`${state.state_type.toUpperCase()} (${offeredRelics.length} relics)`, state));
  console.log(fmtDeckLine(cache, undefined));
  if (rec.skip) {
    const top = rec.all[0]?.result;
    console.log(fmtSkipLine(`best offered is only ${top?.finalGrade ?? '?'} ${(top?.finalScore ?? 0).toFixed(2)}.`));
  } else {
    const line = fmtPickLine('Pick', rec.picks, g => g.name, g => ({ grade: g.result?.finalGrade ?? '?', score: g.result?.finalScore ?? 0 }));
    if (line) console.log(line);
  }
  console.log();
  for (const g of sorted) {
    console.log(fmtRelic(g, { isBest: bestSet.has(g) }));
  }
}

// A small fingerprint of what's offered on a decision screen — re-print only when this changes.
function decisionFingerprint(state) {
  const t = state.state_type;
  if (t === 'card_reward') {
    return 'card_reward|' + (state.card_reward?.cards ?? []).map(c => c.id).sort().join(',');
  }
  if (t === 'shop') {
    const cards = (state.shop?.items ?? []).filter(it => it.is_stocked).map(it => `${it.category}:${it.card_id ?? it.relic_id ?? it.potion_id ?? 'x'}`).sort().join(',');
    return 'shop|' + cards;
  }
  if (t === 'relic_select') return 'relic_select|' + (state.relic_select?.relics ?? []).map(r => r.id).sort().join(',');
  if (t === 'treasure') return 'treasure|' + (state.treasure?.relics ?? []).map(r => r.id).sort().join(',');
  if (t === 'card_select') {
    const cs = state.card_select ?? {};
    return `card_select|${cs.screen_type}|${(cs.cards ?? []).map(c => c.id ?? c.name).sort().join(',')}`;
  }
  return t;
}

async function tick() {
  const state = await fetchState();
  if (!state) return;

  const stateType = state.state_type;
  const floor = state?.run?.floor ?? null;

  // Relic tracking — first poll establishes baseline, subsequent polls announce additions.
  // Tier shown for context; absence of the ▶ marker means it's informational, not advice.
  const relicList = state?.player?.relics ?? [];
  const currentRelicIds = new Set(relicList.map(r => r.id).filter(Boolean));
  const character = mapCharacter(state?.player?.character);
  const cache = getSnapshot();
  const deck = cache?.deckCards ?? [];

  if (firstRelicCheck) {
    firstRelicCheck = false;
    if (relicList.length && character) {
      console.log(`[${stamp()}] ${dim(`relics in play (${relicList.length}):`)}`);
      const offered = relicList.map(r => ({ id: r.id, name: r.name }));
      const { grades } = gradeRelicOfferings({ character, deck, offered });
      // Sort highest-tier first for at-a-glance scanning.
      const sorted = [...grades].sort((a, b) => (b.result?.finalScore ?? 0) - (a.result?.finalScore ?? 0));
      for (const g of sorted) {
        console.log(fmtRelic(g));
      }
    }
  } else if (character) {
    for (const id of currentRelicIds) {
      if (!lastRelicIds.has(id)) {
        const r = relicList.find(rr => rr.id === id);
        const offered = [{ id: r.id, name: r.name }];
        const { grades } = gradeRelicOfferings({ character, deck, offered });
        console.log(`[${stamp()}] ${dim('new relic:')}`);
        console.log(fmtRelic(grades[0]));
      }
    }
  }
  lastRelicIds = currentRelicIds;

  // Combat snapshot — capture deck only on stable ticks (player play phase),
  // otherwise we can sample mid-card-resolution and miss cards in transit.
  if (hasCombatPiles(state) && state?.battle?.is_play_phase === true && state?.battle?.turn === 'player') {
    const character = mapCharacter(state?.player?.character);
    const deckCards = extractDeckFromCombatState(state);
    if (deckCards && deckCards.length) {
      updateFromCombat({ character, floor: floor ?? 0, deckCards });
      if (lastDeckCachedAtFloor !== floor) {
        console.log(`[${stamp()}] deck snapshot captured: ${deckCards.length} cards at floor ${floor}`);
        lastDeckCachedAtFloor = floor;
      }
    }
  }

  // Surface state transitions
  const stateChanged = stateType !== lastStateType;
  if (stateChanged) {
    console.log(`[${stamp()}] state: ${lastStateType ?? '(start)'} -> ${stateType}  floor=${floor ?? '?'}`);
    lastStateType = stateType;
    lastFloor = floor;
    lastDecisionFingerprint = null;
  }

  // Decision-state grading — print only when the offering itself changes
  if (isDecisionState(stateType)) {
    const fp = decisionFingerprint(state);
    if (fp !== lastDecisionFingerprint) {
      lastDecisionFingerprint = fp;
      if (stateType === 'card_reward') reportCardReward(state);
      else if (stateType === 'shop') reportShop(state);
      else if (stateType === 'relic_select' || stateType === 'treasure') reportRelicChoice(state);
      else if (stateType === 'card_select') reportCardSelect(state);
    }
  }
}

console.log(`STS2 advisor live watcher`);
console.log(`  polling: ${STS2MCP_URL} every ${POLL_MS}ms`);
console.log(`  Ctrl-C to exit`);

const restored = getSnapshot();
if (restored) {
  const minsAgo = Math.round((Date.now() - (restored.capturedAt ?? 0)) / 60000);
  console.log(`  loaded snapshot from disk: ${restored.deckCards.length} ${restored.character} cards (floor ${restored.floor}, ${minsAgo}m ago)`);
}
console.log();

setInterval(tick, POLL_MS);
tick();
