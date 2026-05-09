import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import vm from 'node:vm';
import { buildCanonicalCatalog } from '../data/canonicalLoader.js';

const here = dirname(fileURLToPath(import.meta.url));
const dbPath = join(here, '..', 'vendor', 'db.js');
const logicPath = join(here, '..', 'vendor', 'logic.js');

let ctx = null;
let catalog = null;
let cardById = null;
let relicById = null;

function init() {
  if (ctx) return;
  const dbSrc = readFileSync(dbPath, 'utf8');
  const logicSrc = readFileSync(logicPath, 'utf8');
  ctx = vm.createContext({});
  vm.runInContext(dbSrc + '\n' + logicSrc, ctx);

  catalog = buildCanonicalCatalog();
  cardById = new Map(catalog.cards.map(e => [e.codex.id, e]));
  relicById = new Map(catalog.relics.map(e => [e.codex.id, e]));
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
