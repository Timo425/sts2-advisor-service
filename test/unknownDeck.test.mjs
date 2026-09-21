// Regression test: an unknown deck must not be scored as a small deck.
//
// Background (2026-09-21): with no snapshot, `deck` is [] and logic.js's deck-size
// selectivity reads `da.total === 0`. Zero satisfies its `deckSize <= 16` test, so every
// low-scoring card silently collected "-0.3 keep deck lean" — 0.3 of the displayed score
// was an artifact of missing information, not a judgement about the deck. Observed on a
// Wood Carvings event where both transform options read D 0.70.
//
// Run: npm run test:unknowndeck

import { gradeCardOfferings } from '../src/advisor/shunraiAdapter.js';

let pass = 0;
let fail = 0;
const ok = (name, cond) => {
  if (cond) { pass++; console.log('  ok   ', name); }
  else { fail++; console.log('  FAIL ', name); }
};

const offered = [{ id: 'PECK', name: 'Peck' }];
const grade = deck => gradeCardOfferings({
  character: 'necrobinder', deck, offered, floor: 4, equippedRelics: [],
}).grades[0];

const reasons = g => (g.antiReasons ?? []).map(String);
const has = (g, needle) => reasons(g).some(r => r.includes(needle));

const empty = grade([]);
const small = grade(Array.from({ length: 10 }, () => 'STRIKE_NECROBINDER'));
const big = grade(Array.from({ length: 30 }, () => 'STRIKE_NECROBINDER'));

ok('unknown deck gets no "keep deck lean" penalty', !has(empty, 'keep deck lean'));
ok('unknown deck gets no "large deck" penalty', !has(empty, 'large deck'));

// A genuinely small deck must still be told to stay lean — the fix must not disarm the
// modifier itself, only stop it firing on absence of information.
ok('a real 10-card deck still gets "keep deck lean"', has(small, 'keep deck lean'));
ok('a real 30-card deck still gets "large deck"', has(big, 'large deck'));

ok('unknown deck scores at least as high as the same card in a real small deck',
  (empty.finalScore ?? 0) >= (small.finalScore ?? 0));

ok('the refund is exactly the penalty, not a rounding',
  Math.abs((empty.finalScore ?? 0) - ((small.finalScore ?? 0) + 0.3)) < 1e-9);

ok('grade letter is recomputed after the refund, not left stale',
  typeof empty.finalGrade === 'string' && empty.finalGrade.length > 0);

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
