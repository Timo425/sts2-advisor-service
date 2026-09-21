// Regression tests for the deck snapshot cache.
//
// Background (2026-09-21): a card reward on floor 2 of a Necrobinder run was graded
// against a 16-card Ironclad deck cached at floor 11 from a run four months earlier.
// `reportCardReward` feeds the same cache object to both the scorer and the
// "deck N (cached @ floor F)" label, so the label was telling the truth — the grade
// really was deck-blind. These tests pin the guards added in response.
//
// Run: npm run test:deckcache
//
// The cache dir is redirected to a temp directory *before* deckCache.js is imported —
// it resolves its path at module load and eagerly reads the file. Without this the
// clear() calls below delete the snapshot belonging to a real run.

import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const tmp = mkdtempSync(join(tmpdir(), 'deckcache-test-'));
process.env.DECK_CACHE_DIR = tmp;
process.on('exit', () => { try { rmSync(tmp, { recursive: true, force: true }); } catch {} });

const { updateFromCombat, getSnapshot, getSnapshotFor, clear } = await import('../src/lib/deckCache.js');

let pass = 0;
let fail = 0;
const ok = (name, cond) => {
  if (cond) { pass++; console.log('  ok   ', name); }
  else { fail++; console.log('  FAIL ', name); }
};
const deck = n => Array.from({ length: n }, (_, i) => `CARD_${i}`);

// --- existing behaviour that must not regress ---

clear();
updateFromCombat({ character: 'necrobinder', floor: 2, deckCards: deck(12), stable: true });
ok('stable sample is stored', getSnapshot()?.deckCards.length === 12);

updateFromCombat({ character: 'necrobinder', floor: 2, deckCards: deck(9), stable: true });
ok('a shrink on the same floor is rejected (mid-resolution guard)', getSnapshot()?.deckCards.length === 12);

updateFromCombat({ character: 'necrobinder', floor: 2, deckCards: deck(13), stable: true });
ok('growth on the same floor is accepted (statuses added by enemies)', getSnapshot()?.deckCards.length === 13);

// --- provisional samples: let short fights leave something behind ---

clear();
const stored = updateFromCombat({ character: 'necrobinder', floor: 2, deckCards: deck(10), stable: false });
ok('provisional sample is stored when nothing better exists', stored !== null && getSnapshot()?.stable === false);

updateFromCombat({ character: 'necrobinder', floor: 2, deckCards: deck(10), stable: true });
ok('a later stable tick upgrades a provisional snapshot', getSnapshot()?.stable === true);

updateFromCombat({ character: 'necrobinder', floor: 2, deckCards: deck(10), stable: false });
ok('provisional never displaces a stable sample of equal size', getSnapshot()?.stable === true);

// --- cross-run rejection: the actual bug ---

clear();
updateFromCombat({ character: 'ironclad', floor: 11, deckCards: deck(16), stable: true });

ok('a different character is rejected for grading',
  getSnapshotFor({ character: 'necrobinder', floor: 2 }) === null);

ok('a cached floor ahead of the live floor means an older run, rejected',
  getSnapshotFor({ character: 'ironclad', floor: 2 }) === null);

ok('same run, later floor, is accepted',
  getSnapshotFor({ character: 'ironclad', floor: 14 })?.deckCards.length === 16);

ok('same floor is accepted',
  getSnapshotFor({ character: 'ironclad', floor: 11 }) !== null);

ok('getSnapshot still returns the raw cache, so the UI can explain what it ignored',
  getSnapshot()?.character === 'ironclad');

clear();
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
