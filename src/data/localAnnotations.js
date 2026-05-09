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

  // Override: Shunrai's Whetstone has scoreEffects {tags:['damage'], bonus:0.2}
  // that persistently boosts attack cards — but the upgrade-2-attacks effect is
  // one-time-on-pickup and after that the relic does nothing. The bonus is small
  // but incorrect (visible on every attack offering even floors after pickup).
  WHETSTONE: {
    id: 'Whetstone',
    tier: 'A',
    char: 'any',
    rarity: 'common',
    syn: ['upgrade'],
    builds: ['any'],
    notes: 'Upgrade 2 random Attacks on pickup. One-time effect — zero ongoing combat impact.',
    // No scoreEffects: post-pickup the relic does nothing.
  },

  // Override: Shunrai's Horn Cleat has scoreEffects {tags:['block','strength'], bonus:5}
  // — same pattern as the Anchor bug. The relic gives a flat 14 block on turn 2;
  // doesn't scale block or strength cards at all.
  HORN_CLEAT: {
    id: 'Horn Cleat',
    tier: 'B',
    char: 'any',
    rarity: 'common',
    syn: ['block'],
    builds: ['any'],
    notes: 'Gain 14 Block at start of Turn 2. Free defensive value, fixed amount.',
    // No scoreEffects: the 14 block is fixed and doesn't scale any card class.
  },

  // Override: Shunrai's Archaic Tooth is tier B, but the effect — transform a
  // starter card into an "ancient" version — is essentially a free S-tier card
  // swap. Bash → Break (1-cost 20 dmg + 5 Vulnerable, vs Bash's 2-cost 8 dmg + 2
  // Vulnerable) is a colossal upgrade, and the Strike/Defend ancient versions
  // are similarly outsized. Should rate alongside Whetstone (tier A) at minimum,
  // but the magnitude is more S than A.
  ARCHAIC_TOOTH: {
    id: 'Archaic Tooth',
    tier: 'S',
    char: 'any',
    rarity: 'ancient',
    syn: [],
    builds: ['any'],
    notes: 'Transform a starter card into an ancient version (e.g. Bash → Break). Effectively a free S-tier card swap; one of the strongest one-time-pickup effects.',
    // No scoreEffects: one-time effect.
  },

  // Override: Shunrai's Precarious Shears is tier B with builds locked to
  // ['sly','claw']. Card removal is one of STS's highest-value resources
  // regardless of build — two removals for 13 HP is comparable to ~150g of
  // shop services plus a meaningful deck-shape improvement. Should rate A,
  // and the build restriction is wrong (removal helps almost any deck;
  // arguably conflicts with Sly/Discard which wants card volume).
  PRECARIOUS_SHEARS: {
    id: 'Precarious Shears',
    tier: 'A',
    char: 'any',
    rarity: 'ancient',
    syn: [],
    builds: ['any'],
    notes: 'Remove 2 cards from deck for 13 HP. Card removal is among the highest-value resources in STS; two-for-13-HP is an excellent rate, especially in Act 1 with starter basics to cut.',
    // No scoreEffects: one-time effect.
  },

  // Override: Shunrai's Captain's Wheel has scoreEffects {tags:['block'], bonus:0.4}.
  // Same fixed-defensive-resource pattern — gives 18 block on turn 3, doesn't scale
  // block cards in your deck. The "more block helps you survive to turn 3" connection
  // is too indirect to justify a persistent per-card boost.
  CAPTAINS_WHEEL: {
    id: "Captain's Wheel",
    tier: 'A',
    char: 'any',
    rarity: 'rare',
    syn: ['block'],
    builds: ['any'],
    notes: 'Gain 18 Block at start of Turn 3. Strong in long fights (elites, bosses); less impactful in fights ending earlier.',
    // No scoreEffects: the 18 block is fixed and doesn't scale block cards.
  },

  // Add ancient relics from v0.103+ as they show up in real runs:
  //   FISHING_ROD, HEFTY_TABLET, KALEIDOSCOPE, NEOWS_BONES, NEOWS_TALISMAN,
  //   PHIAL_HOLSTER, SILKEN_TRESS, WINGED_BOOTS
};
