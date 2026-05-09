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
// Full name index across ALL spire-codex card colors (incl. event/curse/token/status),
// used by findCardsInText so event-flavour-text can be scanned for cards that aren't
// in our pickable-only canonical catalog (e.g. Exterminate, Squash — color: 'event').
let allCardNames = null;

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
  // Load full codex card list (all colors) for text-matching purposes.
  const fullCodex = loadCodexBetaLatest();
  allCardNames = fullCodex.cards
    .filter(c => c.name && c.id)
    .map(c => ({ name: c.name, id: c.id }));
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
    return {
      codexId: codexId ?? null,
      name: friendly,
      annotated: codexId ? cardAnnotated(codexId) : false,
      ...result,
    };
  });

  return { deckAnalysis: da, grades };
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
    if (r) candidates.push(r);
  }
  candidates.sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
  return {
    deckAnalysis: da,
    candidates,
    bestTarget: candidates[0] ?? null,
  };
}

// Find any spire-codex card names mentioned in a free-text passage (e.g. an event
// option description like "Add Exterminate to your Deck"). Used to grade card-
// pickup events that aren't structured as card_select state. Word-boundary
// case-sensitive match — STS card names are always capitalized in-game.
// Scans ALL codex card colors (event/curse/token/status included), since event
// rewards routinely add cards from those pools to the deck.
export function findCardsInText(text) {
  init();
  if (!text || !allCardNames) return [];
  const out = [];
  const seen = new Set();
  for (const { name, id } of allCardNames) {
    if (seen.has(name)) continue;
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = new RegExp(`\\b${escaped}\\b`);
    if (pattern.test(text)) {
      seen.add(name);
      out.push({ name, codexId: id });
    }
  }
  return out;
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
      return { codexId: codexId ?? null, name: '?', annotated: false, result: null };
    }
    const result = ctx.scoreRelic(friendly, character, da, deckCards);
    return {
      codexId: codexId ?? null,
      name: friendly,
      annotated: codexId ? relicAnnotated(codexId) : false,
      result,
    };
  });

  return { deckAnalysis: da, grades };
}
