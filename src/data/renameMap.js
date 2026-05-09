// Translation between spire-codex canonical IDs and Shunrai db.js keys.
// When a codex card/relic ID differs from Shunrai's (rename, per-character split, etc.)
// the mapping goes here.
//
// Direction: codex_id -> { shunraiId, shunraiBucket? }
// shunraiBucket is one of 'ironclad' | 'silent' | 'defect' | 'regent' | 'necrobinder' | 'colorless'
// when Shunrai keeps the card in a different bucket than codex's color
// (e.g. STRIKE_IRONCLAD -> ironclad.STRIKE).
// shunraiBucket is unnecessary for relics (Shunrai's relics are a flat dict).

export const cardRenames = {
  // Per-character Strike/Defend rename (Shunrai keeps them as plain 'STRIKE' / 'DEFEND')
  STRIKE_IRONCLAD: { shunraiId: 'STRIKE', shunraiBucket: 'ironclad' },
  DEFEND_IRONCLAD: { shunraiId: 'DEFEND', shunraiBucket: 'ironclad' },
  STRIKE_SILENT: { shunraiId: 'STRIKE', shunraiBucket: 'silent' },
  DEFEND_SILENT: { shunraiId: 'DEFEND', shunraiBucket: 'silent' },
  STRIKE_DEFECT: { shunraiId: 'STRIKE', shunraiBucket: 'defect' },
  DEFEND_DEFECT: { shunraiId: 'DEFEND', shunraiBucket: 'defect' },
  STRIKE_REGENT: { shunraiId: 'STRIKE', shunraiBucket: 'regent' },
  DEFEND_REGENT: { shunraiId: 'DEFEND', shunraiBucket: 'regent' },
  STRIKE_NECROBINDER: { shunraiId: 'STRIKE', shunraiBucket: 'necrobinder' },
  DEFEND_NECROBINDER: { shunraiId: 'DEFEND', shunraiBucket: 'necrobinder' },

  // Individual renames (verified 2026-05-09 v0.105.1 vs Shunrai 2026-03-31)
  HYPERBEAM: { shunraiId: 'HYPER_BEAM' },        // defect
  PATTER: { shunraiId: 'PATTERN' },              // regent
  THE_SCYTHE: { shunraiId: 'SCYTHE' },           // necrobinder
};

export const relicRenames = {
  FAKE_ANCHOR: 'ANCHOR_EV',
  FAKE_BLOOD_VIAL: 'BLOOD_VIAL_EV',
  FAKE_HAPPY_FLOWER: 'HAPPY_FLOWER_EV',
  FAKE_LEES_WAFFLE: 'LEES_WAFFLE_EV',
  FAKE_MANGO: 'MANGO_EV',
  FAKE_MERCHANTS_RUG: 'THE_MERCHANTS_RUG_EV',
  FAKE_ORICHALCUM: 'ORICHALCUM_EV',
  FAKE_SNECKO_EYE: 'SNECKO_EYE_EV',
  FAKE_STRIKE_DUMMY: 'STRIKE_DUMMY_EV',
  FAKE_VENERABLE_TEA_SET: 'VENERABLE_TEA_SET_EV',
  CHOSEN_CHEESE: 'THE_CHOSEN_CHEESE',
};
