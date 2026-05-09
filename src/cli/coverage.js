import { buildCanonicalCatalog } from '../data/canonicalLoader.js';

const cat = buildCanonicalCatalog();

console.log(`Canonical catalog @ spire-codex ${cat.version}`);
console.log();

const byColor = {};
for (const e of cat.cards) {
  const c = e.codex.color;
  byColor[c] ??= { total: 0, annotated: 0 };
  byColor[c].total++;
  if (e.annotation) byColor[c].annotated++;
}

console.log('Cards by character (annotated / total):');
const order = ['ironclad', 'silent', 'defect', 'regent', 'necrobinder', 'colorless'];
let totT = 0, totA = 0;
for (const color of order) {
  const v = byColor[color];
  if (!v) continue;
  totT += v.total;
  totA += v.annotated;
  const pct = ((v.annotated / v.total) * 100).toFixed(0).padStart(3);
  console.log(`  ${color.padEnd(14)} ${String(v.annotated).padStart(3)}/${String(v.total).padEnd(3)}  (${pct}%)`);
}
console.log(`  ${'TOTAL'.padEnd(14)} ${String(totA).padStart(3)}/${String(totT).padEnd(3)}  (${((totA/totT)*100).toFixed(0).padStart(3)}%)`);

const rTotal = cat.relics.length;
const rAnnotated = cat.relics.filter(e => e.annotation).length;
console.log();
console.log(`Relics:  ${rAnnotated}/${rTotal}  (${((rAnnotated/rTotal)*100).toFixed(0)}%)`);

console.log();
console.log(`Potions: 0/${cat.potions.length}  (Shunrai db has no potion annotations)`);

const unCards = cat.cards.filter(e => !e.annotation);
const unRelics = cat.relics.filter(e => !e.annotation);

if (unCards.length) {
  console.log();
  console.log(`Unannotated cards (${unCards.length}):`);
  for (const e of unCards) {
    console.log(`  ${e.codex.color.padEnd(14)} ${e.codex.id.padEnd(35)} ${e.codex.name.padEnd(28)} ${e.codex.rarity ?? '?'}`);
  }
}

if (unRelics.length) {
  console.log();
  console.log(`Unannotated relics (${unRelics.length}):`);
  for (const e of unRelics) {
    console.log(`  ${e.codex.id.padEnd(35)} ${e.codex.name.padEnd(28)} ${e.codex.rarity ?? '?'}  pool=${e.codex.pool ?? '?'}`);
  }
}
