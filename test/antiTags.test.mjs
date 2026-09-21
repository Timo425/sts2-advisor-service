// Regression test: a card must not be anti-synergistic with its own build.
//
// Background (2026-09-21): logic.js applies -0.7 "actively hurts your <tag> cards" when an
// offered card's `anti` contains a tag the deck holds 2+ of. Several vendored entries list
// a tag in both `builds`/`syn` and `anti`, so a core build card penalised itself for
// belonging to the build it defines. Observed on a floor-9 Necrobinder reward where Rattle
// showed "+0.8 core Osty / Summon card" and "-0.7 actively hurts your osty cards" together.
//
// Run: npm run test:antitags

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { gradeCardOfferings } from '../src/advisor/shunraiAdapter.js';
import { localCardAnnotations } from '../src/data/localAnnotations.js';

let pass = 0;
let fail = 0;
const ok = (name, cond) => {
  if (cond) { pass++; console.log('  ok   ', name); }
  else { fail++; console.log('  FAIL ', name); }
};

// An Osty/Summon deck carrying two doom cards — enough for unionCount('doom') >= 2, so the
// legitimate anti-doom penalty should still fire while the bogus anti-osty one must not.
const deck = [
  'STRIKE_NECROBINDER', 'STRIKE_NECROBINDER', 'STRIKE_NECROBINDER',
  'DEFEND_NECROBINDER', 'DEFEND_NECROBINDER',
  'POKE', 'HIGH_FIVE', 'SIC_EM', 'FETCH', 'BONE_SHARDS',
  'SCOURGE', 'DELAY', 'RATTLE',
];

const hurts = (id, tag) => {
  const { grades } = gradeCardOfferings({
    character: 'necrobinder', deck, offered: [{ id, name: id }], floor: 9, equippedRelics: [],
  });
  return (grades[0].antiReasons ?? []).some(r => String(r).includes(`actively hurts your ${tag}`));
};

ok('Rattle no longer hurts the osty cards it is built around', !hurts('RATTLE', 'osty'));
ok('Devour Life no longer hurts osty', !hurts('DEVOUR_LIFE', 'osty'));
ok('Dirge no longer hurts osty', !hurts('DIRGE', 'osty'));

// The mechanism itself must survive — these are genuine cross-build conflicts, not
// self-contradictions, and removing them would be over-correcting.
ok('a real cross-build conflict still fires (Bone Shards vs doom)', hurts('BONE_SHARDS', 'doom'));
ok('Devour Life still flags doom', hurts('DEVOUR_LIFE', 'doom'));

// Canary over the vendored data. Seven entries still list a tag in both `builds`/`syn` and
// `anti`; they were left alone because the card text doesn't settle which side is wrong.
// If this count moves — a re-vendor, or someone fixing more of them — take another look.
const here = dirname(fileURLToPath(import.meta.url));
const raw = readFileSync(join(here, '..', 'src', 'vendor', 'db.js'), 'utf8');
const DB = JSON.parse(raw.slice(raw.indexOf('{'), raw.lastIndexOf('}') + 1));

const contradictions = [];
for (const [color, cards] of Object.entries(DB.cards)) {
  for (const [id, c] of Object.entries(cards)) {
    const eff = localCardAnnotations[id] ?? c;
    const anti = new Set(eff.anti ?? []);
    const own = new Set([...(eff.syn ?? []), ...(eff.builds ?? [])]);
    if ([...anti].some(t => own.has(t))) contradictions.push(`${color}/${id}`);
  }
}

ok(`exactly 7 known self-contradictions remain (found ${contradictions.length}: ${contradictions.join(', ')})`,
  contradictions.length === 7);

ok('none of the three fixed cards is still contradictory',
  !contradictions.some(x => /RATTLE|DEVOUR_LIFE|DIRGE/.test(x)));

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
