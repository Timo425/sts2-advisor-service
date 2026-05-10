import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import vm from 'node:vm';
import { buildCanonicalCatalog } from '../data/canonicalLoader.js';
import { loadCodexBetaLatest } from '../data/codexLoader.js';
import { localCardAnnotations, localRelicAnnotations } from '../data/localAnnotations.js';

const here = dirname(fileURLToPath(import.meta.url));
const dbPath = join(here, '..', 'vendor', 'db.js');
const logicPath = join(here, '..', 'vendor', 'logic.js');

let ctx = null;
let catalog = null;
let cardById = null;
let relicById = null;
// Full id-keyed index across ALL spire-codex card colors (incl. event/curse/token/status),
// used by findCardsInText (event-flavour-text scanning) and gradeUpgradePriorities
// (upgrade field lookup for cards that aren't in our pickable-only canonical catalog).
let allCardsById = null;

function applyLocalOverridesToContext(_ctx, _catalog) {
  // db.js declares `const DB = {...}` at script top level — that's a script-scope
  // binding, not on contextified globalThis, so we can't mutate via _ctx.DB.
  // Instead, hand the overrides over and run a small script inside the context
  // that mutates DB through its lexical scope.
  const cardOverrides = [];
  for (const e of _catalog.cards) {
    const ann = localCardAnnotations[e.codex.id];
    if (!ann) continue;
    cardOverrides.push({ color: e.codex.color, id: e.codex.id, ann });
  }
  const relicOverrides = Object.entries(localRelicAnnotations).map(([id, ann]) => ({ id, ann }));

  _ctx.__cardOverrides = cardOverrides;
  _ctx.__relicOverrides = relicOverrides;
  vm.runInContext(`
    for (const o of __cardOverrides) {
      if (!DB.cards[o.color]) DB.cards[o.color] = {};
      DB.cards[o.color][o.id] = o.ann;
    }
    for (const o of __relicOverrides) {
      DB.relics[o.id] = o.ann;
    }
    if (typeof ensureDbNames === 'function') ensureDbNames();
    // Clean up the helper bindings.
    delete globalThis.__cardOverrides;
    delete globalThis.__relicOverrides;
  `, _ctx);
}

function init() {
  if (ctx) return;
  const dbSrc = readFileSync(dbPath, 'utf8');
  const logicSrc = readFileSync(logicPath, 'utf8');
  ctx = vm.createContext({});
  vm.runInContext(dbSrc + '\n' + logicSrc, ctx);

  catalog = buildCanonicalCatalog();
  // Patch the in-vm DB so logic.js's scoring sees our local overrides
  // (otherwise overrides only affect canonicalLoader's "annotated?" view).
  applyLocalOverridesToContext(ctx, catalog);
  cardById = new Map(catalog.cards.map(e => [e.codex.id, e]));
  relicById = new Map(catalog.relics.map(e => [e.codex.id, e]));
  // Load full codex card list (all colors) for text-matching + upgrade lookups.
  const fullCodex = loadCodexBetaLatest();
  allCardsById = new Map(
    fullCodex.cards.filter(c => c.id && c.name).map(c => [c.id, c])
  );
}

function cardFriendlyName(codexId) {
  return cardById.get(codexId)?.codex?.name ?? codexId;
}
function relicFriendlyName(codexId) {
  return relicById.get(codexId)?.codex?.name ?? codexId;
}
function cardAnnotated(codexId) {
  const e = cardById.get(codexId);
  if (e) return e.annotation != null;
  // Unknown to codex — could be a friendly name that logic.js will resolve on its own.
  return false;
}
function relicAnnotated(codexId) {
  return relicById.get(codexId)?.annotation != null;
}

// Accepts a canonical ID, a friendly name, or an object with {name|id}.
// Returns the shape logic.js expects: { name: "..." }.
function toDeckCard(item) {
  if (!item) return null;
  if (typeof item === 'string') {
    const e = cardById.get(item);
    return { name: e?.codex?.name ?? item };
  }
  if (typeof item === 'object') {
    if (item.name) return { name: item.name };
    if (item.id) {
      const e = cardById.get(item.id);
      return { name: e?.codex?.name ?? item.id };
    }
  }
  return null;
}

function toFriendlyName(item) {
  if (!item) return null;
  if (typeof item === 'string') {
    return cardById.get(item)?.codex?.name ?? item;
  }
  if (typeof item === 'object') {
    if (item.id) return cardById.get(item.id)?.codex?.name ?? item.name ?? item.id;
    if (item.name) return item.name;
  }
  return null;
}

function relicToFriendlyName(item) {
  if (!item) return null;
  if (typeof item === 'string') return relicById.get(item)?.codex?.name ?? item;
  if (typeof item === 'object') {
    if (item.id) return relicById.get(item.id)?.codex?.name ?? item.name ?? item.id;
    if (item.name) return item.name;
  }
  return null;
}

export function getCatalogVersion() {
  init();
  return catalog.version;
}

// Generic deck normalization — accepts canonical IDs, friendly names, or
// {name|id} objects (e.g. straight from STS2MCP).
function normalizeDeck(deck) {
  return (deck ?? []).map(toDeckCard).filter(Boolean);
}

export function analyzeDeck(character, deck) {
  init();
  return ctx.analyzeDeck(character, normalizeDeck(deck));
}

export function gradeCardOfferings({
  character,
  deck = [],
  offered = [],
  floor = 1,
  encounter = 'normal',
  equippedRelics = [],
  // backward compatibility: deckIds, offeredIds, equippedRelicIds
  deckIds, offeredIds, equippedRelicIds,
}) {
  init();
  const deckCards = normalizeDeck(deck.length ? deck : (deckIds ?? []));
  const offeredItems = offered.length ? offered : (offeredIds ?? []);
  const relicNames = (equippedRelics.length ? equippedRelics : (equippedRelicIds ?? []))
    .map(relicToFriendlyName).filter(Boolean);
  const act = floor <= 17 ? 1 : floor <= 34 ? 2 : floor <= 50 ? 3 : 4;
  const da = ctx.analyzeDeck(character, deckCards);

  const grades = offeredItems.map(item => {
    const friendly = toFriendlyName(item);
    const result = ctx.scoreCard(
      friendly,
      character,
      da,
      floor,
      act,
      deckCards,
      encounter,
      relicNames,
    );
    const codexId = typeof item === 'string' ? item : item?.id;
    // Pull the functional role from the in-vm DB so the UI can show it inline.
    const data = ctx.getCard(character, friendly);
    const role = data ? (data.role ?? ctx.getFunctionalRole(data) ?? 'utility') : null;
    // Annotation source — for trust signaling in the UI.
    //   'local'   = our localCardAnnotations entry (post-snapshot or override)
    //   'shunrai' = vendored Shunrai db.cards entry (logic.js's getCard found it)
    //   'none'    = no annotation; logic.js fell back to "Unknown card" C/2 default
    let source;
    if (codexId && localCardAnnotations[codexId]) source = 'local';
    else if (data) source = 'shunrai';
    else source = 'none';

    // T2: extra dupe penalty for high-cost cards. logic.js's base dupe penalty
    // (-0.8, scaled ×1.4 for 2+ owned) ignores cost. A 2nd Bludgeon (3-cost) is
    // strictly more punishing than a 2nd Strike (1-cost) because of the energy
    // bottleneck. Stack on top of logic.js's penalty.
    applyHighCostDupePenalty(result, codexId, friendly, deckCards);

    return {
      codexId: codexId ?? null,
      name: friendly,
      annotated: codexId ? cardAnnotated(codexId) : false,
      role,
      source,
      ...result,
    };
  });

  return { deckAnalysis: da, grades };
}

function applyHighCostDupePenalty(result, codexId, friendly, deckCards) {
  if (!result || result.finalScore == null || !codexId) return;
  const codexCard = allCardsById?.get(codexId);
  if (!codexCard) return;
  const cost = parseInt(codexCard.cost, 10);
  if (!Number.isFinite(cost) || cost < 2) return;

  // Match by normalized name, ignoring upgrade suffix (Strike and Strike+ are
  // the same card identity for dupe purposes).
  const dupeKey = (n) => ctx.norm(String(n ?? '')).replace(/\+$/, '');
  const targetKey = dupeKey(friendly);
  const owned = deckCards.filter(c => dupeKey(c.name) === targetKey).length;
  if (owned === 0) return;

  // cost 2 → modest extra; cost 3+ → severe (Bludgeon scenario).
  const penalty = cost === 2 ? -0.5 : -1.5;
  result.finalScore = result.finalScore + penalty;
  result.finalGrade = scoreToGrade(result.finalScore);
  result.antiReasons = [
    ...(result.antiReasons ?? []),
    `${penalty.toFixed(1)} ${cost}-cost card — extra dupe penalty (energy bottleneck)`,
  ];
}

// Evaluate every card in the deck as a removal candidate; return them sorted by
// score (highest first). The top entry is what Shunrai's web tool calls "the best
// removal target" — if you bought the shop's card-removal service, this is what
// you'd cut and what the service is worth.
export function gradeRemovalForDeck({
  character,
  deck = [],
  equippedRelics = [],
  deckIds, equippedRelicIds,
}) {
  init();
  const deckCards = normalizeDeck(deck.length ? deck : (deckIds ?? []));
  const relicNames = (equippedRelics.length ? equippedRelics : (equippedRelicIds ?? []))
    .map(relicToFriendlyName).filter(Boolean);
  const da = ctx.analyzeDeck(character, deckCards);

  const seen = new Set();
  const candidates = [];
  for (const c of deckCards) {
    if (!c?.name || seen.has(c.name)) continue;
    seen.add(c.name);
    const r = ctx.scoreRemoval(c.name, character, da, deckCards, relicNames);
    if (!r) continue;
    // Patch: Shunrai's scoreRemoval flags basic Strike/Defend at S 5.00 regardless of
    // upgrade level. Upgraded basics are still cuttable, but materially more useful
    // than unupgraded copies — drop their priority so the unupgraded version is cut first.
    if (isUpgradedBasic(c.name)) {
      const original = r.score ?? 0;
      r.score = Math.max(0, original - 1.7);
      r.grade = scoreToGrade(r.score);
      const tag = '[upgraded — cut unupgraded basics first]';
      r.reason = r.reason ? `${r.reason} ${tag}` : tag;
    }
    candidates.push(r);
  }
  candidates.sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
  return {
    deckAnalysis: da,
    candidates,
    bestTarget: candidates[0] ?? null,
  };
}

// Mirror of logic.js's SCORE_GRADE table; used when post-processing scores.
function scoreToGrade(s) {
  if (s >= 4.5) return 'S';
  if (s >= 3.5) return 'A';
  if (s >= 2.5) return 'B';
  if (s >= 1.5) return 'C';
  if (s >= 0.5) return 'D';
  return 'F';
}

const STRIKE_EXCEPTIONS = ['shining', 'solar', 'pommel', 'perfected', 'ashen', 'leading', 'setup'];
function isUpgradedBasic(cardName) {
  if (!cardName) return false;
  const lower = String(cardName).toLowerCase();
  if (!lower.endsWith('+')) return false;
  const stripped = lower.slice(0, -1).trim();
  if (stripped === 'defend') return true;
  if (stripped.includes('strike') && !STRIKE_EXCEPTIONS.some(x => stripped.includes(x))) return true;
  return false;
}

// Find any spire-codex card names mentioned in a free-text passage (e.g. an event
// option description like "Add Exterminate to your Deck"). Used to grade card-
// pickup events that aren't structured as card_select state. Word-boundary
// case-sensitive match — STS card names are always capitalized in-game.
// Scans ALL codex card colors (event/curse/token/status included), since event
// rewards routinely add cards from those pools to the deck.
export function findCardsInText(text) {
  init();
  if (!text || !allCardsById) return [];
  const out = [];
  const seen = new Set();
  for (const c of allCardsById.values()) {
    const name = c.name;
    if (!name || seen.has(name)) continue;
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = new RegExp(`\\b${escaped}\\b`);
    if (pattern.test(text)) {
      seen.add(name);
      out.push({ name, codexId: c.id });
    }
  }
  return out;
}

// Rank cards on an upgrade screen by their value-to-upgrade. Each card's score
// is its tier-as-a-card-in-current-deck (high-tier cards are played more so
// upgrading them has more impact), plus a bonus for transformative upgrade
// effects (energy cost reduction, gaining Innate, etc.) sourced from
// spire-codex's `upgrade` field.
export function gradeUpgradePriorities({
  character,
  deck = [],
  equippedRelics = [],
  candidateCards = [],
  floor = 1,
  encounter = 'normal',
}) {
  init();
  const deckCards = normalizeDeck(deck);
  const relicNames = (equippedRelics ?? []).map(relicToFriendlyName).filter(Boolean);
  const da = ctx.analyzeDeck(character, deckCards);
  const act = floor <= 17 ? 1 : floor <= 34 ? 2 : floor <= 50 ? 3 : 4;

  const results = candidateCards.map(card => {
    const friendly = card.name ?? toFriendlyName(card);
    const codexId = card.id ?? null;
    const codexCard = codexId ? allCardsById.get(codexId) : null;

    // Base score: how good is this card in the current deck context.
    const scoreResult = ctx.scoreCard(friendly, character, da, floor, act, deckCards, encounter, relicNames);
    const baseScore = scoreResult?.finalScore ?? 0;
    const data = ctx.getCard(character, friendly);
    const role = data ? (data.role ?? ctx.getFunctionalRole(data) ?? 'utility') : null;

    // Upgrade bonuses: transformative changes that unlock new behaviour.
    const upgrade = codexCard?.upgrade ?? null;
    let upgradeBonus = 0;
    const reasons = [];

    if (upgrade) {
      // Energy cost reduction is the most impactful upgrade type (more plays per turn).
      if (typeof upgrade.cost === 'number' && codexCard.cost != null) {
        const costNow = parseInt(codexCard.cost, 10);
        const costAfter = upgrade.cost;
        if (Number.isFinite(costNow) && costAfter < costNow) {
          const bonus = Math.min(2.0, (costNow - costAfter) * 1.5);
          upgradeBonus += bonus;
          reasons.push(`+${bonus.toFixed(1)} cost ${costNow} → ${costAfter}`);
        }
      }
      // Innate gain: comparable to a permanent draw advantage on turn 1.
      if (upgrade.add_innate === true) {
        upgradeBonus += 0.6;
        reasons.push('+0.6 gains Innate');
      }
      // Exhaust removal (some upgrades drop the Exhaust keyword) — significant for repeat plays.
      if (upgrade.remove_exhaust === true) {
        upgradeBonus += 1.0;
        reasons.push('+1.0 loses Exhaust');
      }
      // Ethereal removal — same reasoning as exhaust removal for retained value.
      if (upgrade.remove_ethereal === true) {
        upgradeBonus += 0.8;
        reasons.push('+0.8 loses Ethereal');
      }
    }

    const totalScore = baseScore + upgradeBonus;
    return {
      codexId,
      name: friendly,
      role,
      baseScore,
      upgradeBonus,
      totalScore,
      grade: scoreToGrade(totalScore),
      reasons,
      hasUpgradeData: upgrade != null,
    };
  });

  results.sort((a, b) => b.totalScore - a.totalScore);
  return results;
}

// Count cards in the deck by their functional role. Mirrors how scoreCard
// counts engines / generators / payoffs internally for role-balance reasoning.
export function analyzeDeckComposition(character, deck) {
  init();
  const deckCards = normalizeDeck(deck);
  const counts = { engine: 0, generator: 0, payoff: 0, defense: 0, setup: 0, utility: 0, unknown: 0 };
  for (const c of deckCards) {
    const d = ctx.getCard(character, c.name);
    if (!d) { counts.unknown++; continue; }
    const role = d.role ?? ctx.getFunctionalRole(d) ?? 'utility';
    counts[role] = (counts[role] ?? 0) + 1;
  }
  return counts;
}

export function gradeRelicOfferings({
  character,
  deck = [],
  offered = [],
  deckIds, offeredRelicIds,
}) {
  init();
  const deckCards = normalizeDeck(deck.length ? deck : (deckIds ?? []));
  const offeredItems = offered.length ? offered : (offeredRelicIds ?? []);
  const da = ctx.analyzeDeck(character, deckCards);

  const grades = offeredItems.map(item => {
    const friendly = relicToFriendlyName(item);
    const codexId = typeof item === 'string' ? item : item?.id;
    if (!friendly) {
      return { codexId: codexId ?? null, name: '?', annotated: false, source: 'none', result: null };
    }
    const result = ctx.scoreRelic(friendly, character, da, deckCards);
    // scoreRelic returns null when DB.relics[key] is missing — that's the no-annotation case.
    let source;
    if (codexId && localRelicAnnotations[codexId]) source = 'local';
    else if (result) source = 'shunrai';
    else source = 'none';
    return {
      codexId: codexId ?? null,
      name: friendly,
      annotated: codexId ? relicAnnotated(codexId) : false,
      source,
      result,
    };
  });

  return { deckAnalysis: da, grades };
}
