// Local annotations for cards/relics that Shunrai's vendored db.js doesn't cover.
// Keyed by spire-codex canonical ID. Same shape as Shunrai's own entries so they
// drop straight into logic.js without conversion.
//
// Add an entry here whenever a graded screen shows "(ungraded)" for a card or relic
// you've actually played with. Use Shunrai's tag vocabulary (self_damage, scaling,
// exhaust, vulnerable, draw, block, ethereal, ...) so logic.js's archetype/synergy
// detection can use it.

export const localCardAnnotations = {
  // Ironclad — added in v0.103+ post-Shunrai-snapshot.

  NOT_YET: {
    id: 'Not Yet',
    tier: 'B',
    builds: ['self_damage', 'any'],
    syn: ['self_damage', 'block'],
    anti: [],
    notes: 'Heal 10 HP for 2 energy. Strong in self-damage builds (Bloodletting / Offering / Feed) where HP loss compounds. Generic-but-decent sustain elsewhere. Upgrades to 13 HP.',
    mech: ['heal'],
    role: 'defense',
  },

  BREAK: {
    id: 'Break',
    tier: 'S',
    builds: ['any', 'vulnerable'],
    syn: ['damage', 'vulnerable'],
    anti: [],
    notes: '20 damage + 5 Vulnerable for 1 energy (Ancient). Outlier-rate value — Vulnerable amplifies all your other attacks against the same target. Upgrades to 30 damage + 7 Vulnerable.',
    mech: ['damage', 'vulnerable'],
    role: 'payoff',
  },

  TANK: {
    id: 'Tank',
    tier: 'C',
    builds: ['any'],
    syn: [],
    anti: [],
    notes: 'Power: take double damage; allies take half. Singleplayer: just 2× incoming damage to you, harshly punishing in most decks. Multiplayer: strong on a frontline tank with fragile co-op allies. Upgrades to 0-cost. Default rating assumes singleplayer.',
    mech: ['double_damage'],
    role: 'utility',
  },

  // Necrobinder — added in v0.103+ post-Shunrai-snapshot.

  CALL_OF_THE_VOID: {
    id: 'Call of the Void',
    tier: 'B',
    builds: ['any'],
    syn: ['draw', 'exhaust'],
    anti: [],
    notes: 'Power: at the start of your turn, add 1 random card (any class) to your hand. The card gains Ethereal. Variance-heavy but free value when it lands. Pairs with exhaust payoffs since Ethereal cards exhaust if unplayed. Upgrade adds Innate.',
    mech: ['card_gain', 'ethereal', 'random'],
    role: 'generator',
  },
};

export const localRelicAnnotations = {
  // Override: Shunrai's Anchor entry has a +5 scoreEffects bonus on tags
  // ['block', 'strength'], which (a) is too large — saturates every offering
  // to S — and (b) wrongly includes 'strength' (Anchor gives a flat 10 block
  // at combat start; it doesn't scale strength or attacks at all).
  ANCHOR: {
    id: 'Anchor',
    tier: 'S',
    char: 'any',
    rarity: 'common',
    syn: ['block'],
    builds: ['any'],
    notes: 'Start each combat with 10 Block. Free Block every fight, regardless of build.',
    // No scoreEffects: the 10 block is fixed and doesn't scale any card class.
  },

  // Add ancient relics from v0.103+ as they show up in real runs:
  //   FISHING_ROD, HEFTY_TABLET, KALEIDOSCOPE, NEOWS_BONES, NEOWS_TALISMAN,
  //   PHIAL_HOLSTER, SILKEN_TRESS, WINGED_BOOTS
};
