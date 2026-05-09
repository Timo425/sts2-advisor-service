import { loadCodexBetaLatest } from './codexLoader.js';
import { loadShunraiDb } from './shunraiLoader.js';
import { cardRenames, relicRenames } from './renameMap.js';
import { localCardAnnotations, localRelicAnnotations } from './localAnnotations.js';

const PICKABLE_COLORS = new Set([
  'ironclad', 'silent', 'defect', 'regent', 'necrobinder', 'colorless',
]);

function lookupCardAnnotation(db, codexCard) {
  const { id, color } = codexCard;
  if (db.cards[color]?.[id]) return db.cards[color][id];
  const rename = cardRenames[id];
  if (rename) {
    const bucket = rename.shunraiBucket ?? color;
    if (db.cards[bucket]?.[rename.shunraiId]) return db.cards[bucket][rename.shunraiId];
  }
  // Fall back to our local annotations layer for cards Shunrai doesn't cover.
  if (localCardAnnotations[id]) return localCardAnnotations[id];
  return null;
}

function lookupRelicAnnotation(db, codexRelic) {
  if (db.relics[codexRelic.id]) return db.relics[codexRelic.id];
  const renamed = relicRenames[codexRelic.id];
  if (renamed && db.relics[renamed]) return db.relics[renamed];
  if (localRelicAnnotations[codexRelic.id]) return localRelicAnnotations[codexRelic.id];
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
