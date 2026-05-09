import { loadCodexBetaLatest } from './codexLoader.js';
import { loadShunraiDb } from './shunraiLoader.js';
import { cardRenames, relicRenames } from './renameMap.js';
import { localCardAnnotations, localRelicAnnotations } from './localAnnotations.js';

const PICKABLE_COLORS = new Set([
  'ironclad', 'silent', 'defect', 'regent', 'necrobinder', 'colorless',
]);

// Local annotations override Shunrai's entries. This lets us:
//   1. Annotate cards/relics Shunrai doesn't cover (post-snapshot additions).
//   2. Patch incorrect upstream entries without editing the vendored file.
// To keep Shunrai's exact behavior for an entry, just don't add a local override.

function lookupCardAnnotation(db, codexCard) {
  const { id, color } = codexCard;
  if (localCardAnnotations[id]) return localCardAnnotations[id];
  if (db.cards[color]?.[id]) return db.cards[color][id];
  const rename = cardRenames[id];
  if (rename) {
    const bucket = rename.shunraiBucket ?? color;
    if (db.cards[bucket]?.[rename.shunraiId]) return db.cards[bucket][rename.shunraiId];
  }
  return null;
}

function lookupRelicAnnotation(db, codexRelic) {
  if (localRelicAnnotations[codexRelic.id]) return localRelicAnnotations[codexRelic.id];
  if (db.relics[codexRelic.id]) return db.relics[codexRelic.id];
  const renamed = relicRenames[codexRelic.id];
  if (renamed && db.relics[renamed]) return db.relics[renamed];
  return null;
}

export function buildCanonicalCatalog() {
  const codex = loadCodexBetaLatest();
  const db = loadShunraiDb();

  const cards = codex.cards
    .filter(c => PICKABLE_COLORS.has(c.color))
    .map(codexCard => ({
      codex: codexCard,
      annotation: lookupCardAnnotation(db, codexCard),
    }));

  const relics = codex.relics.map(codexRelic => ({
    codex: codexRelic,
    annotation: lookupRelicAnnotation(db, codexRelic),
  }));

  const potions = codex.potions.map(p => ({ codex: p, annotation: null }));

  return { version: codex.version, cards, relics, potions };
}
