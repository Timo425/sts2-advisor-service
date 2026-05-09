import { gradeCardOfferings, getCatalogVersion } from '../advisor/shunraiAdapter.js';

// Mid Act 1 ironclad deck
const character = 'ironclad';
const deckIds = [
  'STRIKE_IRONCLAD', 'STRIKE_IRONCLAD', 'STRIKE_IRONCLAD', 'STRIKE_IRONCLAD', 'STRIKE_IRONCLAD',
  'DEFEND_IRONCLAD', 'DEFEND_IRONCLAD', 'DEFEND_IRONCLAD', 'DEFEND_IRONCLAD',
  'BASH',
  'BLOODLETTING', 'HEADBUTT', 'BATTLE_TRANCE',
];
const offeredIds = ['FEED', 'OFFERING', 'BREAK'];
const floor = 8;

console.log(`spire-codex ${getCatalogVersion()}`);
console.log(`character: ${character}, floor: ${floor} (act ${floor <= 17 ? 1 : floor <= 34 ? 2 : 3})`);
console.log(`deck (${deckIds.length} cards): ${deckIds.join(', ')}`);
console.log(`offered: ${offeredIds.join(', ')}`);
console.log();

const { deckAnalysis, grades } = gradeCardOfferings({
  character,
  deckIds,
  offeredIds,
  floor,
});

console.log('=== Deck analysis ===');
if (deckAnalysis.detected?.length) {
  console.log('Detected archetypes:');
  for (const { arch, strength } of deckAnalysis.detected) {
    console.log(`  ${arch.name?.padEnd(28) ?? arch.id} strength=${strength.toFixed(2)}`);
  }
} else {
  console.log('  (no archetypes detected yet)');
}

console.log();
console.log('=== Card grades ===');
for (const g of grades) {
  const flag = g.annotated ? ' ' : '*';
  const grade = g.finalGrade ?? g.base ?? '?';
  const score = (g.finalScore ?? 0).toFixed(2);
  console.log(`  ${flag} ${g.name.padEnd(20)} ${grade}  score=${score}  ${g.notes ?? ''}`);
  for (const r of (g.synReasons ?? [])) console.log(`      + ${r}`);
  for (const r of (g.antiReasons ?? [])) console.log(`      - ${r}`);
}
console.log();
console.log('  * = ungraded (no Shunrai annotation; default C / score=2 from logic.js fallback)');
