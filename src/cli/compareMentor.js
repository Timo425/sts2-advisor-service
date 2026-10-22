// Compare Spire Mentor's picks with this advisor's, from Spire Mentor's run logs.
//
// Spire Mentor (tfriedel/spire-mentor) writes one workbench run log per advisor
// session: every decision's full state (deck, relics, offered cards), its advice
// and the human's pick. This replays each card reward and shop through
// gradeCardOfferings on the SAME deck, so both engines judge the same moment --
// no deck cache, no second live watcher.
//
//   node src/cli/compareMentor.js                  # newest seed in MENTOR_LOG_DIR
//   node src/cli/compareMentor.js --seed YKJDA5SCMX
//   node src/cli/compareMentor.js a.jsonl b.jsonl  # explicit run logs
//   ... --out notes/mentor-YKJDA5SCMX.md           # also write the report
//
// Spire Mentor's percentages are its run policy's pick probabilities, not
// grades, so the comparison is top pick vs top pick. Who is right on a
// disagreement is settled by the run, not by either engine.

import fs from 'node:fs';
import path from 'node:path';
import { gradeCardOfferings, gradeRelicOfferings, gradeRemovalForDeck, getCatalogVersion } from '../advisor/shunraiAdapter.js';

const DEFAULT_LOG_DIR = '/media/timo/Storage/Repositories/spire-mentor/sts2-pycli/logs';
const LOG_DIR = process.env.MENTOR_LOG_DIR ?? DEFAULT_LOG_DIR;
// Same threshold live.js uses: best offered below this means "skip".
const SKIP_THRESHOLD = 2.5;

function parseArgs(argv) {
  const out = { files: [], seed: null, outPath: null };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--seed') out.seed = argv[++i];
    else if (a === '--out') out.outPath = argv[++i];
    else out.files.push(a);
  }
  return out;
}

// Run logs are named <yyyymmdd_hhmmss>_<Character>_<SEED>.jsonl; one run spans
// several files when the advisor restarted mid-run.
function resolveFiles({ files, seed }) {
  if (files.length) return files;
  const all = fs.readdirSync(LOG_DIR).filter(f => /^\d{8}_\d{6}_.+\.jsonl$/.test(f)).sort();
  if (!all.length) throw new Error(`no run logs in ${LOG_DIR}`);
  const want = seed ?? all.at(-1).replace(/\.jsonl$/, '').split('_').at(-1);
  return all.filter(f => f.endsWith(`_${want}.jsonl`)).map(f => path.join(LOG_DIR, f));
}

function readRecords(file) {
  return fs.readFileSync(file, 'utf8').split('\n').filter(Boolean).map(l => JSON.parse(l));
}

// One entry per card_reward / shop state: the state, the last advice given on
// it and the human's action. Combat plays are kept to see how picks played out.
function collect(files) {
  const decisions = [];
  const plays = []; // { order, floor, cardId }
  let character = null;
  let order = 0;
  for (const file of files) {
    let current = null;
    let floor = null;
    for (const rec of readRecords(file)) {
      order++;
      const d = rec.data ?? {};
      if (rec.type === 'meta' && d.character) character = d.character;
      if (rec.type === 'state') {
        if (d.floor != null) floor = d.floor;
        current = null;
        if (d.decision === 'card_reward' || d.decision === 'shop') {
          current = { file: path.basename(file), order, floor: d.floor, state: d, advice: null, action: null };
          decisions.push(current);
        }
      } else if (rec.type === 'mcts' && current) {
        current.advice = d.advice ?? null;
      } else if (rec.type === 'action') {
        // Last action wins: closing the screen logs a skip, and reopening it
        // does not always log a fresh state before the real pick.
        if (current && d.decision_type === current.state.decision) current.action = d;
        const m = /played (\S+)/.exec(d.label ?? '');
        if (d.action === 'card_play' && m) plays.push({ order, floor, cardId: m[1] });
      }
    }
  }
  return { character, decisions: dedupe(decisions), plays };
}

// One screen can be logged several times: an advisor restart re-sends it, and
// closing a card reward to look at the map logs a "skip" before the screen
// reopens (in a new card order). The last visit with an action is the real pick.
function dedupe(decisions) {
  const byKey = new Map();
  for (const dec of decisions) {
    const s = dec.state;
    const offered = (s.cards ?? []).map(c => c.id).sort().join(',');
    const key = `${s.decision}|${s.floor}|${s.player?.deck_size}|${s.player?.gold}|${offered}`;
    const prev = byKey.get(key);
    if (!prev || dec.action || !prev.action) byKey.set(key, dec);
  }
  return [...byKey.values()].sort((a, b) => a.order - b.order);
}

const pct = (p) => `${Math.round((p ?? 0) * 100)}%`;
const deckIdsOf = (state) => (state.player?.deck ?? []).map(c => c.id).filter(Boolean);
const relicIdsOf = (state) => (state.player?.relics ?? []).map(r => r?.id ?? r).filter(Boolean);

function shunraiReasons(g, n = 3) {
  const all = [...(g.synReasons ?? []), ...(g.antiReasons ?? [])];
  return all.slice(0, n);
}

function compareCardReward(dec, character) {
  const s = dec.state;
  const offered = (s.cards ?? []).map(c => ({ id: c.id, name: c.name }));
  const { grades } = gradeCardOfferings({
    character, deckIds: deckIdsOf(s), offered, floor: s.floor ?? 1, equippedRelics: relicIdsOf(s),
  });
  const ranked = grades.map((g, i) => ({ ...g, offerIndex: i })).sort((a, b) => (b.finalScore ?? 0) - (a.finalScore ?? 0));
  const shunraiSkip = (ranked[0]?.finalScore ?? 0) < SKIP_THRESHOLD;
  const shunraiPick = shunraiSkip ? 'skip' : ranked[0]?.offerIndex;

  const options = dec.advice?.options ?? [];
  const best = options.find(o => o.is_best);
  const mentorPick = !best ? null : (best.action === 'skip' || best.label === 'skip') ? 'skip' : best.index;

  // Match the pick by its label: a reopened screen reshuffles the cards, so
  // the logged index can point into an order no state record holds.
  const act = dec.action;
  const byLabel = (s.cards ?? []).findIndex(c => c.name === act?.label);
  const humanPick = !act ? null
    : act.action === 'skip' || act.args?.index === null ? 'skip'
    : byLabel >= 0 ? byLabel
    : act.args?.index ?? null;

  const nameOf = (pick) => pick === 'skip' ? 'skip' : pick == null ? '?' : (s.cards?.[pick]?.name ?? `#${pick}`);
  const mentorProb = (i) => options.find(o => o.index === i && o.action !== 'skip')?.visit_share;
  return {
    kind: 'card_reward',
    floor: s.floor,
    hp: `${s.player?.hp}/${s.player?.max_hp}`,
    deckSize: s.player?.deck_size,
    agree: mentorPick != null && mentorPick === shunraiPick,
    mentor: nameOf(mentorPick),
    shunrai: nameOf(shunraiPick),
    human: nameOf(humanPick),
    humanCardId: typeof humanPick === 'number' ? s.cards?.[humanPick]?.id : null,
    rows: ranked.map(g => ({
      name: g.name,
      grade: g.finalGrade ?? '?',
      score: (g.finalScore ?? 0).toFixed(2),
      mentor: pct(mentorProb(g.offerIndex)),
      reasons: shunraiReasons(g),
    })),
    mentorSkip: pct(options.find(o => o.action === 'skip' || o.label === 'skip')?.visit_share),
    note: dec.advice?.note ?? '',
    deck: deckIdsOf(s),
  };
}

function compareShop(dec, character) {
  const s = dec.state;
  const deckIds = deckIdsOf(s);
  const equippedRelics = relicIdsOf(s);
  const cards = (s.cards ?? []).filter(c => c.is_stocked !== false).map(c => ({ id: c.id, name: c.name, price: c.cost }));
  const relics = (s.relics ?? []).filter(r => r.is_stocked !== false).map(r => ({ id: r.id, name: r.name, price: r.cost }));
  const topCard = cards.length
    ? gradeCardOfferings({ character, deckIds, offered: cards, floor: s.floor ?? 1, equippedRelics }).grades
      .sort((a, b) => (b.finalScore ?? 0) - (a.finalScore ?? 0))[0]
    : null;
  const topRelic = relics.length
    ? gradeRelicOfferings({ character, deckIds, offered: relics }).grades
      .sort((a, b) => (b.result?.finalScore ?? 0) - (a.result?.finalScore ?? 0))[0]
    : null;
  const removal = s.card_removal_cost != null ? gradeRemovalForDeck({ character, deckIds, equippedRelics }).bestTarget : null;
  const best = (dec.advice?.options ?? []).find(o => o.is_best);
  return {
    kind: 'shop',
    floor: s.floor,
    hp: `${s.player?.hp}/${s.player?.max_hp}`,
    gold: s.player?.gold,
    mentor: best ? `${best.label} (${pct(best.visit_share)})` : '?',
    shunraiCard: topCard ? `${topCard.name} ${topCard.finalGrade ?? '?'} ${(topCard.finalScore ?? 0).toFixed(2)}` : '-',
    shunraiRelic: topRelic ? `${topRelic.name} ${topRelic.result?.finalGrade ?? '?'}` : '-',
    shunraiRemove: removal ? `${removal.name} ${removal.grade ?? '?'}` : '-',
    human: dec.action?.label ?? '?',
  };
}

// How a taken card played out: plays after it was picked, and in how many floors.
function playedOut(cardId, afterOrder, plays) {
  if (!cardId) return null;
  const later = plays.filter(p => p.cardId === cardId && p.order > afterOrder);
  return { plays: later.length, floors: new Set(later.map(p => p.floor)).size };
}

function render({ character, files, rows, plays }) {
  const rewards = rows.filter(r => r.kind === 'card_reward');
  const shops = rows.filter(r => r.kind === 'shop');
  const disagreements = rewards.filter(r => !r.agree);
  const lines = [];
  lines.push(`# Spire Mentor vs Shunrai advisor — ${character}`);
  lines.push('');
  lines.push(`Logs: ${files.map(f => path.basename(f)).join(', ')}  `);
  lines.push(`Catalog: spire-codex ${getCatalogVersion()}. Mentor % = run-policy pick probability, not a grade.`);
  lines.push('');
  lines.push(`**Card rewards:** ${rewards.length}, top pick agrees on ${rewards.length - disagreements.length}, disagrees on ${disagreements.length}.`);
  lines.push('');
  lines.push('| Floor | HP | Mentor | Shunrai | You took | Agree |');
  lines.push('|---|---|---|---|---|---|');
  for (const r of rewards) lines.push(`| ${r.floor} | ${r.hp} | ${r.mentor} | ${r.shunrai} | ${r.human} | ${r.agree ? 'yes' : '**no**'} |`);
  for (const r of disagreements) {
    lines.push('');
    lines.push(`## Floor ${r.floor} — Mentor: ${r.mentor}, Shunrai: ${r.shunrai}`);
    lines.push('');
    lines.push(`**Deck state:** ${r.deckSize} cards, HP ${r.hp}: ${r.deck.join(', ')}`);
    lines.push('');
    lines.push('| Card | Shunrai | Mentor |');
    lines.push('|---|---|---|');
    for (const c of r.rows) lines.push(`| ${c.name} | ${c.grade} ${c.score} | ${c.mentor} |`);
    lines.push(`| skip | (below ${SKIP_THRESHOLD}) | ${r.mentorSkip} |`);
    lines.push('');
    for (const c of r.rows.filter(c => c.reasons.length)) lines.push(`- Shunrai on ${c.name}: ${c.reasons.join(' · ')}`);
    lines.push(`- Mentor: ${r.note}`);
    const out = r.playedOut;
    lines.push(`**You took:** ${r.human}${out ? ` — played ${out.plays}× over ${out.floors} later floor(s)` : ''}`);
    lines.push('**What played out:** _(fill in)_');
  }
  if (shops.length) {
    lines.push('');
    lines.push('## Shops');
    lines.push('');
    lines.push('| Floor | Gold | Mentor best | Shunrai card | Shunrai relic | Shunrai remove | You |');
    lines.push('|---|---|---|---|---|---|---|');
    for (const s of shops) lines.push(`| ${s.floor} | ${s.gold} | ${s.mentor} | ${s.shunraiCard} | ${s.shunraiRelic} | ${s.shunraiRemove} | ${s.human} |`);
  }
  lines.push('');
  lines.push(`_${plays.length} card plays in the logs._`);
  return lines.join('\n');
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const files = resolveFiles(args);
  const { character: rawCharacter, decisions, plays } = collect(files);
  const character = (rawCharacter ?? '').replace(/^The\s+/i, '').toLowerCase();
  if (!character) throw new Error('no character in the run logs (meta record missing)');
  const rows = decisions.map(dec => {
    const row = dec.state.decision === 'shop' ? compareShop(dec, character) : compareCardReward(dec, character);
    if (row.kind === 'card_reward') row.playedOut = playedOut(row.humanCardId, dec.order, plays);
    return row;
  });
  const report = render({ character, files, rows, plays });
  console.log(report);
  if (args.outPath) {
    fs.writeFileSync(args.outPath, report + '\n');
    console.error(`wrote ${args.outPath}`);
  }
}

main();
