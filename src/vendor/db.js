const DB = {
  "cards": {
    "ironclad": {
      "BLOODLETTING": {
        "id": "Bloodletting",
        "tier": "S",
        "builds": [
          "self_damage"
        ],
        "syn": [
          "self_damage",
          "scaling",
          "exhaust",
          "blood"
        ],
        "anti": [],
        "notes": "0-cost reusable energy. Core enabler. Pairs with Rupture for free Strength.",
        "mech": [
          "self_damage",
          "energy_gain",
          "blood"
        ],
        "role": "generator"
      },
      "STONE_ARMOR": {
        "id": "Stone Armor",
        "tier": "A",
        "builds": [
          "block"
        ],
        "syn": [
          "block",
          "plating",
          "juggernaut",
          "scaling"
        ],
        "anti": [],
        "notes": "Provides Plating for passive Block every turn. Strong in Block decks and excellent with Juggernaut since repeated block triggers damage.",
        "mech": [
          "plating",
          "block_scaling",
          "persistent_scaling"
        ],
        "role": "engine"
      },
      "HEADBUTT": {
        "id": "Headbutt",
        "tier": "S",
        "builds": [
          "any"
        ],
        "syn": [
          "damage",
          "scaling"
        ],
        "anti": [],
        "notes": "9 damage + puts card on top of draw. Replay your best card every turn.",
        "mech": [
          "card_retrieve"
        ],
        "role": "engine"
      },
      "BATTLE_TRANCE": {
        "id": "Battle Trance",
        "tier": "S",
        "builds": [
          "any"
        ],
        "syn": [
          "draw",
          "scaling"
        ],
        "anti": [],
        "notes": "0-cost draw 3. Restriction rarely matters. Sets up combo turns.",
        "mech": [
          "draw"
        ],
        "role": "generator"
      },
      "FEED": {
        "id": "Feed",
        "tier": "S",
        "builds": [
          "self_damage",
          "any"
        ],
        "syn": [
          "scaling",
          "damage",
          "self_damage"
        ],
        "anti": [],
        "notes": "Permanent max HP on kill. Snowballs hard. Especially valuable in Bloodletting builds where HP loss is flat — more max HP means more room to work with.",
        "mech": [
          "permanent_scaling"
        ],
        "role": "generator"
      },
      "OFFERING": {
        "id": "Offering",
        "tier": "S",
        "builds": [
          "self_damage",
          "exhaust"
        ],
        "syn": [
          "self_damage",
          "draw",
          "scaling",
          "blood"
        ],
        "anti": [],
        "notes": "Lose 6 HP, draw 3, gain 2 energy. Enables explosive turns. Triggers Rupture.",
        "mech": [
          "self_damage",
          "draw",
          "energy_gain",
          "blood"
        ],
        "role": "generator"
      },
      "INFLAME": {
        "id": "Inflame",
        "tier": "A",
        "builds": [
          "strength"
        ],
        "syn": [
          "strength",
          "scaling",
          "damage"
        ],
        "anti": [],
        "notes": "Permanent +2 Strength. Improves every attack for the rest of the fight. Near-auto-pick.",
        "mech": [
          "permanent_scaling",
          "strength"
        ],
        "role": "engine"
      },
      "GRAPPLE": {
        "id": "Grapple",
        "tier": "A",
        "builds": [
          "block"
        ],
        "syn": [
          "block",
          "damage",
          "scaling"
        ],
        "anti": [],
        "notes": "Converts Block to damage. Makes block builds threatening. S-tier in Barricade decks.",
        "mech": [
          "block_conversion"
        ],
        "role": "payoff"
      },
      "COLOSSUS": {
        "id": "Colossus",
        "tier": "S",
        "builds": [
          "block",
          "strike"
        ],
        "syn": [
          "block",
          "strength",
          "scaling",
          "strike"
        ],
        "anti": [],
        "notes": "New STS2 card. Strong permanent scaling for block/strength builds.",
        "mech": [
          "permanent_scaling",
          "strike",
          "block"
        ],
        "role": "defense"
      },
      "UNMOVABLE": {
        "id": "Unmovable",
        "tier": "S",
        "builds": [
          "block"
        ],
        "syn": [
          "block",
          "scaling"
        ],
        "anti": [
          "exhaust",
          "self_damage"
        ],
        "notes": "New STS2 card. Powerful block engine.",
        "mech": [
          "block"
        ],
        "role": "engine"
      },
      "EXPECT_A_FIGHT": {
        "id": "Expect A Fight",
        "tier": "S",
        "builds": [
          "strike"
        ],
        "syn": [
          "damage",
          "draw",
          "scaling",
          "strike",
          "energy_gain"
        ],
        "anti": [],
        "notes": "Excellent Strike support. Extra Energy helps play Perfected Strike and attack chains in the same turn.",
        "mech": [
          "energy_gain",
          "conditional",
          "strike"
        ],
        "role": "generator"
      },
      "BARRICADE": {
        "id": "Barricade",
        "tier": "A",
        "builds": [
          "block"
        ],
        "syn": [
          "block",
          "scaling"
        ],
        "anti": [],
        "notes": "Block persists. Stack massive defense. Combines with Juggernaut, Body Slam, Grapple.",
        "mech": [
          "block_retain"
        ],
        "role": "engine"
      },
      "RUPTURE": {
        "id": "Rupture",
        "tier": "A",
        "builds": [
          "self_damage",
          "strength"
        ],
        "syn": [
          "self_damage",
          "strength",
          "scaling",
          "blood"
        ],
        "anti": [],
        "notes": "Gain 1 Strength when you lose HP. Stacks with copies. Bloodletting = free Strength every turn.",
        "mech": [
          "strength",
          "self_damage_payoff",
          "blood"
        ],
        "role": "engine"
      },
      "BRAND": {
        "id": "Brand",
        "tier": "A",
        "builds": [
          "exhaust",
          "self_damage",
          "strength"
        ],
        "syn": [
          "exhaust",
          "self_damage",
          "strength",
          "blood"
        ],
        "anti": [],
        "notes": "Exhaust + Strength synergy. Core of exhaust-strength combo builds.",
        "mech": [
          "exhaust",
          "strength",
          "blood"
        ],
        "role": "generator"
      },
      "DARK_EMBRACE": {
        "id": "Dark Embrace",
        "tier": "A",
        "builds": [
          "exhaust"
        ],
        "syn": [
          "exhaust",
          "draw"
        ],
        "anti": [],
        "notes": "Draw a card when any card is exhausted. Central for exhaust builds.",
        "mech": [
          "exhaust_payoff",
          "draw",
          "exhaust_synergy"
        ],
        "role": "engine"
      },
      "FEEL_NO_PAIN": {
        "id": "Feel No Pain",
        "tier": "A",
        "builds": [
          "exhaust",
          "block"
        ],
        "syn": [
          "exhaust",
          "block"
        ],
        "anti": [],
        "notes": "Block per exhaust. Turns deck-thinning into consistent defense. Works with Corruption.",
        "mech": [
          "exhaust_payoff",
          "block",
          "exhaust_synergy"
        ],
        "role": "engine"
      },
      "BURNING_PACT": {
        "id": "Burning Pact",
        "tier": "A",
        "builds": [
          "exhaust",
          "any"
        ],
        "syn": [
          "exhaust",
          "draw"
        ],
        "anti": [],
        "notes": "Exhaust a card, draw 2. Best cantrip for thinning deck and maintaining hand.",
        "mech": [
          "exhaust",
          "draw"
        ],
        "role": "generator"
      },
      "IMPERVIOUS": {
        "id": "Impervious",
        "tier": "A",
        "builds": [
          "block"
        ],
        "syn": [
          "block",
          "exhaust"
        ],
        "anti": [],
        "notes": "2-cost 30 block exhaust. Huge early number. Skip once infinite assembled.",
        "mech": [
          "block",
          "exhaust"
        ],
        "role": "defense"
      },
      "PILLAGE": {
        "id": "Pillage",
        "tier": "A",
        "builds": [
          "strength",
          "any"
        ],
        "syn": [
          "damage",
          "scaling"
        ],
        "anti": [],
        "notes": "High damage that generates gold. Efficient in strength builds.",
        "mech": [
          "damage"
        ],
        "role": "generator"
      },
      "PYRE": {
        "id": "Pyre",
        "tier": "A",
        "builds": [
          "strike"
        ],
        "syn": [
          "self_damage",
          "exhaust",
          "damage",
          "strike",
          "energy_gain"
        ],
        "anti": [],
        "notes": "Nuke your hand for massive damage. Powerful burst in exhaust decks.",
        "mech": [
          "exhaust",
          "damage",
          "self_damage",
          "strike",
          "energy_gain"
        ],
        "role": "generator"
      },
      "TAUNT": {
        "id": "Taunt",
        "tier": "A",
        "builds": [
          "block",
          "strike"
        ],
        "syn": [
          "block",
          "vulnerable",
          "weak",
          "strike"
        ],
        "anti": [],
        "notes": "Flexible setup card for Block and Strike. Upgraded Vulnerable makes it especially good with heavy-hitting follow-ups.",
        "mech": [
          "block",
          "debuff",
          "strike"
        ],
        "role": "generator"
      },
      "SECOND_WIND": {
        "id": "Second Wind",
        "tier": "A",
        "builds": [
          "exhaust",
          "block"
        ],
        "syn": [
          "exhaust",
          "block"
        ],
        "anti": [],
        "notes": "Exhaust non-attacks for block. Powerful in skill-heavy decks with Dark Embrace.",
        "mech": [
          "exhaust",
          "block"
        ],
        "role": "generator"
      },
      "SPITE": {
        "id": "Spite",
        "tier": "A",
        "builds": [
          "self_damage",
          "exhaust"
        ],
        "syn": [
          "self_damage",
          "exhaust",
          "scaling",
          "blood"
        ],
        "anti": [],
        "notes": "Draw a card when you lose HP. Pairs with Bloodletting for explosive turns.",
        "mech": [
          "self_damage_payoff",
          "draw",
          "blood"
        ],
        "role": "payoff"
      },
      "EVIL_EYE": {
        "id": "Evil Eye",
        "tier": "A",
        "builds": [
          "exhaust"
        ],
        "syn": [
          "vulnerable",
          "damage"
        ],
        "anti": [],
        "notes": "Applies Vulnerable. Amplifies all damage from attacks.",
        "mech": [
          "debuff",
          "vulnerable"
        ],
        "role": "payoff"
      },
      "CRIMSON_MANTLE": {
        "id": "Crimson Mantle",
        "tier": "A",
        "builds": [
          "self_damage",
          "block"
        ],
        "syn": [
          "self_damage",
          "block",
          "scaling",
          "blood"
        ],
        "anti": [],
        "notes": "Converts HP loss into block. Strong in self-damage builds.",
        "mech": [
          "self_damage_payoff",
          "block",
          "blood"
        ],
        "role": "payoff"
      },
      "FLAME_BARRIER": {
        "id": "Flame Barrier",
        "tier": "A",
        "builds": [
          "block"
        ],
        "syn": [
          "block",
          "damage"
        ],
        "anti": [],
        "notes": "Block + retaliatory damage. Good tempo and damage mitigation.",
        "mech": [
          "block",
          "damage"
        ],
        "role": "defense"
      },
      "VICIOUS": {
        "id": "Vicious",
        "tier": "A",
        "builds": [
          "any"
        ],
        "syn": [
          "vulnerable",
          "damage",
          "scaling"
        ],
        "anti": [
          "exhaust"
        ],
        "notes": "Passive 25% amp on Vulnerable targets. Strong with any Vulnerable application.",
        "mech": [
          "vulnerable_payoff",
          "scaling"
        ],
        "role": "payoff"
      },
      "AGGRESSION": {
        "id": "Aggression",
        "tier": "A",
        "builds": [
          "exhaust"
        ],
        "syn": [
          "draw",
          "scaling",
          "exhaust"
        ],
        "anti": [],
        "notes": "Free upgraded Attack every turn. Strong in exhaust/scaling decks.",
        "mech": [
          "draw",
          "exhaust"
        ],
        "role": "generator"
      },
      "PRIMAL_FORCE": {
        "id": "Primal Force",
        "tier": "A",
        "builds": [
          "strength",
          "any"
        ],
        "syn": [
          "damage",
          "strength"
        ],
        "anti": [
          "exhaust"
        ],
        "notes": "0-cost transform attacks into Giant Rock (16 damage). Carries Act 1. Less relevant after engine assembled.",
        "mech": [
          "damage",
          "zero_cost"
        ],
        "role": "payoff"
      },
      "THRASH": {
        "id": "Thrash",
        "tier": "A",
        "builds": [
          "strength",
          "exhaust"
        ],
        "syn": [
          "damage",
          "strength",
          "scaling"
        ],
        "anti": [],
        "notes": "Scales with attacks played this turn. Good in attack-heavy strength builds.",
        "mech": [
          "damage",
          "conditional"
        ],
        "role": "payoff"
      },
      "STOKE": {
        "id": "Stoke",
        "tier": "A",
        "builds": [
          "exhaust"
        ],
        "syn": [
          "exhaust",
          "damage",
          "self_damage"
        ],
        "anti": [
          "strength",
          "self_damage"
        ],
        "notes": "Exhaust synergy. Strong in exhaust-based builds.",
        "mech": [
          "exhaust",
          "damage"
        ],
        "role": "engine"
      },
      "HEMOKINESIS": {
        "id": "Hemokinesis",
        "tier": "B",
        "builds": [
          "self_damage",
          "strength"
        ],
        "syn": [
          "self_damage",
          "damage",
          "blood"
        ],
        "anti": [],
        "notes": "High damage at HP cost. Pairs with Rupture/Bloodletting. Good elite killer.",
        "mech": [
          "self_damage",
          "damage",
          "blood"
        ],
        "role": "generator"
      },
      "ASHEN_STRIKE": {
        "id": "Ashen Strike",
        "tier": "B",
        "builds": [
          "exhaust"
        ],
        "syn": [
          "exhaust",
          "damage"
        ],
        "anti": [],
        "notes": "High damage with exhaust synergy. Strong in exhaust-heavy decks.",
        "mech": [
          "exhaust",
          "damage",
          "finisher"
        ],
        "role": "payoff"
      },
      "WHIRLWIND": {
        "id": "Whirlwind",
        "tier": "B",
        "builds": [
          "strength"
        ],
        "syn": [
          "damage",
          "aoe",
          "strength"
        ],
        "anti": [],
        "notes": "Energy-scaling AoE. Best with Strength or energy relics.",
        "mech": [
          "damage",
          "aoe"
        ],
        "role": "payoff"
      },
      "BODY_SLAM": {
        "id": "Body Slam",
        "tier": "B",
        "builds": [
          "block",
          "exhaust"
        ],
        "syn": [
          "block",
          "damage"
        ],
        "anti": [
          "self_damage"
        ],
        "notes": "Damage = block. Best with Barricade or high-block decks. Also strong in Exhaust builds with Feel No Pain providing block. Upgraded is 0-cost.",
        "mech": [
          "block_conversion",
          "damage"
        ],
        "role": "payoff"
      },
      "BLOOD_WALL": {
        "id": "Blood Wall",
        "tier": "B",
        "builds": [
          "self_damage",
          "block"
        ],
        "syn": [
          "self_damage",
          "block",
          "blood"
        ],
        "anti": [],
        "notes": "Big block at HP cost. Good in self-damage builds with Rupture.",
        "mech": [
          "self_damage",
          "block",
          "blood"
        ],
        "role": "generator"
      },
      "JUGGERNAUT": {
        "id": "Juggernaut",
        "tier": "B",
        "builds": [
          "block",
          "exhaust"
        ],
        "syn": [
          "block",
          "stone_armor",
          "damage",
          "exhaust"
        ],
        "anti": [],
        "notes": "Deal 5 damage whenever you gain Block. Main damage dealer in Block builds. Also excellent in Exhaust builds with Feel No Pain — every exhaust triggers block which triggers Juggernaut.",
        "mech": [
          "block_payoff",
          "damage"
        ],
        "role": "payoff"
      },
      "TRUE_GRIT": {
        "id": "True Grit",
        "tier": "B",
        "builds": [
          "exhaust",
          "block"
        ],
        "syn": [
          "exhaust",
          "block"
        ],
        "anti": [],
        "notes": "Block + random exhaust. Helps thin deck while defending. Triggers Feel No Pain.",
        "mech": [
          "exhaust",
          "block"
        ],
        "role": "generator"
      },
      "IRON_WAVE": {
        "id": "Iron Wave",
        "tier": "D",
        "builds": [
          "any"
        ],
        "syn": [
          "damage",
          "block"
        ],
        "anti": [],
        "notes": "Balanced attack and block. Consistent early tempo.",
        "mech": [
          "damage",
          "block"
        ],
        "role": "generator"
      },
      "STOMP": {
        "id": "Stomp",
        "tier": "B",
        "builds": [
          "strength"
        ],
        "syn": [
          "damage",
          "multi_hit",
          "vulnerable"
        ],
        "anti": [],
        "notes": "Multi-hit that benefits from Vulnerable and Strength.",
        "mech": [
          "damage",
          "multi_hit"
        ],
        "role": "payoff"
      },
      "BLUDGEON": {
        "id": "Bludgeon",
        "tier": "B",
        "builds": [
          "strength"
        ],
        "syn": [
          "strength",
          "damage"
        ],
        "anti": [],
        "notes": "3-cost 32 damage. Big hit for act 1 with Bloodletting energy.",
        "mech": [
          "damage"
        ],
        "role": "payoff"
      },
      "BREAKTHROUGH": {
        "id": "Breakthrough",
        "tier": "B",
        "builds": [
          "self_damage",
          "strike"
        ],
        "syn": [
          "damage",
          "aoe",
          "strike",
          "blood"
        ],
        "anti": [],
        "notes": "Useful early AoE that slots into Blood and Strike lists. Efficient coverage in multi-enemy fights.",
        "mech": [
          "damage",
          "aoe",
          "strike",
          "self_damage"
        ],
        "role": "generator"
      },
      "INFERNAL_BLADE": {
        "id": "Infernal Blade",
        "tier": "B",
        "builds": [
          "exhaust"
        ],
        "syn": [
          "exhaust",
          "damage"
        ],
        "anti": [],
        "notes": "Exhaust synergy attack.",
        "mech": [
          "exhaust",
          "damage"
        ],
        "role": "generator"
      },
      "JUGGLING": {
        "id": "Juggling",
        "tier": "B",
        "builds": [
          "strength"
        ],
        "syn": [
          "damage",
          "multi_hit",
          "strength"
        ],
        "anti": [
          "exhaust",
          "block"
        ],
        "notes": "Multi-hit attack, scales with Strength.",
        "mech": [
          "damage",
          "multi_hit"
        ],
        "role": "generator"
      },
      "SHRUG_IT_OFF": {
        "id": "Shrug It Off",
        "tier": "B",
        "builds": [
          "block",
          "any"
        ],
        "syn": [
          "block",
          "draw"
        ],
        "anti": [],
        "notes": "1-cost block + draw. Consistent defense with hand refill.",
        "mech": [
          "block",
          "draw"
        ],
        "role": "defense"
      },
      "DISMANTLE": {
        "id": "Dismantle",
        "tier": "B",
        "builds": [
          "exhaust"
        ],
        "syn": [
          "exhaust",
          "scaling"
        ],
        "anti": [],
        "notes": "Exhaust attack synergy.",
        "mech": [
          "exhaust",
          "exhaust_synergy"
        ],
        "role": "engine"
      },
      "POMMEL_STRIKE": {
        "id": "Pommel Strike",
        "tier": "B",
        "builds": [
          "strike"
        ],
        "syn": [
          "damage",
          "draw",
          "strike"
        ],
        "anti": [],
        "notes": "Solid Strike support card. Draw keeps aggressive decks moving and pairs well with Perfected Strike lines.",
        "mech": [
          "damage",
          "draw",
          "strike"
        ],
        "role": "generator"
      },
      "MOLTEN_FIST": {
        "id": "Molten Fist",
        "tier": "B",
        "builds": [
          "strength"
        ],
        "syn": [
          "damage",
          "strength"
        ],
        "anti": [
          "exhaust",
          "self_damage",
          "block"
        ],
        "notes": "Strength synergy attack.",
        "mech": [
          "damage",
          "strength"
        ],
        "role": "engine"
      },
      "PERFECTED_STRIKE": {
        "id": "Perfected Strike",
        "tier": "B",
        "builds": [
          "strike"
        ],
        "syn": [
          "damage",
          "strike",
          "strike_scaling"
        ],
        "anti": [
          "exhaust",
          "block"
        ],
        "notes": "Core Strike payoff. Its value comes from keeping enough Strike-tag cards without overfilling your deck.",
        "mech": [
          "damage",
          "conditional",
          "strike",
          "strike_scaling"
        ],
        "role": "payoff"
      },
      "CORRUPTION": {
        "id": "Corruption",
        "tier": "B",
        "builds": [
          "exhaust"
        ],
        "syn": [
          "exhaust",
          "scaling"
        ],
        "anti": [
          "block"
        ],
        "notes": "All skills cost 0 and exhaust. Enables massive turns with Dark Embrace + Feel No Pain.",
        "mech": [
          "exhaust",
          "zero_cost_enabler",
          "exhaust_synergy"
        ],
        "role": "engine"
      },
      "DEMON_FORM": {
        "id": "Demon Form",
        "tier": "B",
        "builds": [
          "strength"
        ],
        "syn": [
          "strength",
          "scaling"
        ],
        "anti": [],
        "notes": "Best passive Strength generation. +2 Strength every turn snowballs hard. Expensive at 3 Energy but game-winning once set up.",
        "mech": [
          "strength",
          "permanent_scaling"
        ],
        "role": "engine"
      },
      "BASH": {
        "id": "Bash",
        "tier": "C",
        "builds": [
          "strike"
        ],
        "syn": [
          "vulnerable",
          "strike"
        ],
        "anti": [],
        "notes": "Starter. 2-cost Vulnerable. Useful early but outclassed later.",
        "mech": [
          "vulnerable",
          "debuff",
          "strike"
        ],
        "role": "generator"
      },
      "ANGER": {
        "id": "Anger",
        "tier": "B",
        "builds": [
          "strike"
        ],
        "syn": [
          "damage",
          "exhaust",
          "strike"
        ],
        "anti": [
          "exhaust"
        ],
        "notes": "Self-replicates — can flood deck. Take sparingly.",
        "mech": [
          "damage",
          "strike"
        ],
        "role": "generator"
      },
      "THUNDERCLAP": {
        "id": "Thunderclap",
        "tier": "C",
        "builds": [
          "strength",
          "strike"
        ],
        "syn": [
          "damage",
          "aoe",
          "vulnerable",
          "strike"
        ],
        "anti": [],
        "notes": "AoE + Vulnerable. Helps control groups early.",
        "mech": [
          "damage",
          "aoe",
          "vulnerable",
          "strike"
        ],
        "role": "generator"
      },
      "HEAVY_BLADE": {
        "id": "Heavy Blade",
        "tier": "C",
        "builds": [
          "strength"
        ],
        "syn": [
          "strength",
          "damage"
        ],
        "anti": [],
        "notes": "Only good with high Strength. Build-specific.",
        "mech": [
          "damage",
          "strength"
        ],
        "role": "payoff"
      },
      "UPPERCUT": {
        "id": "Uppercut",
        "tier": "B",
        "builds": [
          "strength",
          "strike"
        ],
        "syn": [
          "vulnerable",
          "weak",
          "damage",
          "strike"
        ],
        "anti": [],
        "notes": "Weak + Vulnerable tempo card. Solid but not outstanding.",
        "mech": [
          "debuff",
          "vulnerable",
          "weak",
          "strike"
        ],
        "role": "generator"
      },
      "ARMAMENTS": {
        "id": "Armaments",
        "tier": "C",
        "builds": [
          "block"
        ],
        "syn": [
          "block"
        ],
        "anti": [],
        "notes": "Block + upgrade. Too slow.",
        "mech": [
          "block"
        ],
        "role": "defense"
      },
      "CLOTHESLINE": {
        "id": "Clothesline",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "damage",
          "weak"
        ],
        "anti": [],
        "notes": "Decent tempo. Applies Weak.",
        "mech": [
          "damage",
          "weak"
        ],
        "role": "generator"
      },
      "WILD_STRIKE": {
        "id": "Wild Strike",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "damage"
        ],
        "anti": [
          "exhaust"
        ],
        "notes": "Adds wound to deck. Usually avoid.",
        "mech": [
          "damage"
        ],
        "role": "generator"
      },
      "DROPKICK": {
        "id": "Dropkick",
        "tier": "C",
        "builds": [
          "strength",
          "strike"
        ],
        "syn": [
          "damage",
          "vulnerable",
          "strike"
        ],
        "anti": [],
        "notes": "Good with Vulnerable setup. Energy refund on hit.",
        "mech": [
          "damage",
          "conditional",
          "energy_gain",
          "strike"
        ],
        "role": "generator"
      },
      "RAMPAGE": {
        "id": "Rampage",
        "tier": "C",
        "builds": [
          "strength"
        ],
        "syn": [
          "damage",
          "strength"
        ],
        "anti": [],
        "notes": "Scales each play. OK in strength builds.",
        "mech": [
          "damage",
          "scaling"
        ],
        "role": "payoff"
      },
      "SEVER_SOUL": {
        "id": "Sever Soul",
        "tier": "C",
        "builds": [
          "exhaust"
        ],
        "syn": [
          "exhaust",
          "damage"
        ],
        "anti": [],
        "notes": "Exhaust all skills then attack. Synergy with exhaust payoffs.",
        "mech": [
          "exhaust",
          "damage"
        ],
        "role": "generator"
      },
      "CLASH": {
        "id": "Clash",
        "tier": "D",
        "builds": [
          "any"
        ],
        "syn": [
          "damage"
        ],
        "anti": [
          "block",
          "exhaust",
          "self_damage"
        ],
        "notes": "Only playable with no skills in hand. Extremely restrictive.",
        "mech": [
          "damage",
          "conditional"
        ],
        "role": "payoff"
      },
      "SEARING_BLOW": {
        "id": "Searing Blow",
        "tier": "D",
        "builds": [
          "any"
        ],
        "syn": [
          "damage"
        ],
        "anti": [],
        "notes": "Needs multiple upgrades to be good. Usually not worth it.",
        "mech": [
          "damage"
        ],
        "role": "payoff"
      },
      "MANGLE": {
        "id": "Mangle",
        "tier": "D",
        "builds": [
          "any"
        ],
        "syn": [
          "damage",
          "debuff"
        ],
        "anti": [],
        "notes": "Wounds pollute your deck. Usually skip.",
        "mech": [],
        "role": "generator"
      },
      "CASCADE": {
        "id": "Cascade",
        "tier": "D",
        "builds": [
          "any"
        ],
        "syn": [
          "exhaust",
          "damage"
        ],
        "anti": [],
        "notes": "Completely random. Not reliable.",
        "mech": [],
        "role": "generator"
      },
      "STRIKE": {
        "id": "Strike",
        "tier": "D",
        "builds": [],
        "syn": [
          "damage"
        ],
        "anti": [],
        "notes": "Starter. Replace when possible.",
        "mech": [
          "damage"
        ]
      },
      "DEFEND": {
        "id": "Defend",
        "tier": "D",
        "builds": [],
        "syn": [
          "block"
        ],
        "anti": [],
        "notes": "Starter. Replace when possible.",
        "mech": [
          "block"
        ]
      },
      "LIMIT_BREAK": {
        "id": "Limit Break",
        "tier": "A",
        "builds": [
          "strength"
        ],
        "syn": [
          "strength",
          "scaling"
        ],
        "anti": [],
        "notes": "Double your current Strength. Upgraded: no longer Exhausts. Exponential scaling in strength builds.",
        "mech": [
          "strength",
          "permanent_scaling"
        ],
        "role": "generator"
      },
      "SWORD_BOOMERANG": {
        "id": "Sword Boomerang",
        "tier": "C",
        "builds": [
          "strength"
        ],
        "syn": [
          "strength",
          "damage",
          "multi_hit"
        ],
        "anti": [],
        "notes": "Deal 3 damage 3 times to random enemies. Each hit benefits from Strength. Great multi-hit.",
        "mech": [
          "damage",
          "multi_hit"
        ],
        "role": "payoff"
      },
      "TWIN_STRIKE": {
        "id": "Twin Strike",
        "tier": "C",
        "builds": [
          "strength",
          "strike"
        ],
        "syn": [
          "strength",
          "damage",
          "multi_hit",
          "strike"
        ],
        "anti": [],
        "notes": "Deal 5 damage twice. Each hit benefits from Strength.",
        "mech": [
          "damage",
          "multi_hit",
          "strike"
        ],
        "role": "payoff"
      },
      "SPOT_WEAKNESS": {
        "id": "Spot Weakness",
        "tier": "A",
        "builds": [
          "strength"
        ],
        "syn": [
          "strength",
          "scaling"
        ],
        "anti": [],
        "notes": "If enemy intends to attack, gain 3 Strength. Reliable scaling in most fights.",
        "mech": [
          "strength",
          "conditional"
        ],
        "role": "engine"
      },
      "FLEX": {
        "id": "Flex",
        "tier": "B",
        "builds": [
          "strength"
        ],
        "syn": [
          "strength",
          "scaling"
        ],
        "anti": [],
        "notes": "Gain 2 Strength, lose it at end of turn. Good with Artifact. Pairs with Heavy Blade for huge turns.",
        "mech": [
          "strength"
        ],
        "role": "generator"
      },
      "REAPER": {
        "id": "Reaper",
        "tier": "A",
        "builds": [
          "strength",
          "self_damage"
        ],
        "syn": [
          "strength",
          "damage",
          "self_damage",
          "blood",
          "aoe"
        ],
        "anti": [],
        "notes": "Deal damage to ALL enemies, heal for unblocked damage. Massive heal in strength builds.",
        "mech": [
          "damage",
          "aoe",
          "blood"
        ],
        "role": "payoff"
      },
      "ENTRENCH": {
        "id": "Entrench",
        "tier": "A",
        "builds": [
          "block"
        ],
        "syn": [
          "block",
          "scaling"
        ],
        "anti": [],
        "notes": "Double your current Block. In Barricade builds this becomes absurd.",
        "mech": [
          "block",
          "scaling"
        ],
        "role": "generator"
      },
      "BRUTALITY": {
        "id": "Brutality",
        "tier": "B",
        "builds": [
          "self_damage"
        ],
        "syn": [
          "self_damage",
          "draw",
          "scaling",
          "blood"
        ],
        "anti": [],
        "notes": "At the start of turn, lose 1 HP and draw 1 card. Consistent self-damage for Rupture.",
        "mech": [
          "self_damage",
          "draw",
          "passive",
          "blood"
        ],
        "role": "generator"
      },
      "DOUBLE_TAP": {
        "id": "Double Tap",
        "tier": "A",
        "builds": [
          "strength"
        ],
        "syn": [
          "strength",
          "damage",
          "scaling"
        ],
        "anti": [],
        "notes": "Next Attack plays twice. Nuclear damage with Whirlwind or heavy hits late game.",
        "mech": [
          "card_doubler",
          "damage"
        ],
        "role": "payoff"
      },
      "FIEND_FIRE": {
        "id": "Fiend Fire",
        "tier": "C",
        "builds": [
          "exhaust"
        ],
        "syn": [
          "exhaust",
          "damage",
          "scaling"
        ],
        "anti": [],
        "notes": "Exhaust hand, deal 7 damage per card. With Dark Embrace = draw them all back.",
        "mech": [
          "exhaust",
          "damage",
          "finisher"
        ],
        "role": "payoff"
      },
      "IMMOLATE": {
        "id": "Immolate",
        "tier": "B",
        "builds": [
          "exhaust",
          "strength"
        ],
        "syn": [
          "exhaust",
          "damage",
          "aoe"
        ],
        "anti": [],
        "notes": "Deal 21 damage to ALL, add Burn to discard. AoE payoff with exhaust synergy.",
        "mech": [
          "damage",
          "aoe",
          "exhaust"
        ],
        "role": "payoff"
      },
      "SHOCKWAVE": {
        "id": "Shockwave",
        "tier": "B",
        "builds": [
          "block",
          "strike"
        ],
        "syn": [
          "weak",
          "vulnerable",
          "block"
        ],
        "anti": [],
        "notes": "Apply 3 Weak and Vulnerable to ALL enemies. Exhaust. Strong setup card.",
        "mech": [
          "debuff",
          "weak",
          "vulnerable",
          "aoe",
          "exhaust"
        ],
        "role": "generator"
      },
      "INTIMIDATE": {
        "id": "Intimidate",
        "tier": "B",
        "builds": [
          "block"
        ],
        "syn": [
          "weak",
          "block"
        ],
        "anti": [],
        "notes": "Apply 1 Weak to ALL enemies. Exhaust. Good debuff setup.",
        "mech": [
          "weak",
          "aoe",
          "exhaust"
        ],
        "role": "generator"
      },
      "DISARM": {
        "id": "Disarm",
        "tier": "B",
        "builds": [
          "block"
        ],
        "syn": [
          "block",
          "scaling",
          "weak"
        ],
        "anti": [],
        "notes": "Enemy loses 2 Strength. Exhaust. Reduces incoming damage significantly.",
        "mech": [
          "debuff",
          "exhaust",
          "weak"
        ],
        "role": "defense"
      },
      "POWER_THROUGH": {
        "id": "Power Through",
        "tier": "C",
        "builds": [
          "exhaust",
          "block"
        ],
        "syn": [
          "block",
          "exhaust"
        ],
        "anti": [
          "strength"
        ],
        "notes": "Add 2 Wounds, gain 15 Block. Exhaust synergy but pollutes deck.",
        "mech": [
          "block",
          "exhaust"
        ],
        "role": "generator"
      },
      "COMBUST": {
        "id": "Combust",
        "tier": "B",
        "builds": [
          "self_damage",
          "exhaust"
        ],
        "syn": [
          "self_damage",
          "damage",
          "blood",
          "aoe"
        ],
        "anti": [],
        "notes": "Each turn lose 1 HP and deal 5 damage to ALL enemies. Passive AoE with self-damage synergy.",
        "mech": [
          "self_damage",
          "damage",
          "aoe",
          "passive",
          "blood"
        ],
        "role": "payoff"
      },
      "RAGE": {
        "id": "Rage",
        "tier": "B",
        "builds": [
          "strength",
          "strike"
        ],
        "syn": [
          "block",
          "attack_chain",
          "strength",
          "strike"
        ],
        "anti": [],
        "notes": "Attack-chain block engine. Best in Strike and Strength decks that play multiple attacks per turn.",
        "mech": [
          "attack_trigger",
          "block_scaling",
          "strike"
        ],
        "role": "engine"
      },
      "FIGHT_ME": {
        "id": "Fight Me!",
        "tier": "B",
        "builds": [
          "strength",
          "strike"
        ],
        "syn": [
          "strength",
          "multi_hit",
          "strike"
        ],
        "anti": [],
        "notes": "Strength generator attached to multi-hit damage. Strong in Strength and Strike shells, but the enemy Strength matters in longer fights.",
        "mech": [
          "damage",
          "multi_hit",
          "strength",
          "enemy_strength",
          "strike"
        ],
        "role": "generator"
      },
      "CONFLAGRATION": {
        "id": "Conflagration",
        "tier": "A",
        "builds": [
          "strike"
        ],
        "syn": [
          "damage",
          "aoe",
          "attack_chain",
          "strike"
        ],
        "anti": [],
        "notes": "Attack-chain AoE finisher. Much stronger after you have already played other attacks this turn.",
        "mech": [
          "damage",
          "aoe",
          "per_attack_payoff",
          "strike"
        ],
        "role": "payoff"
      },
      "CRUELTY": {
        "id": "Cruelty",
        "tier": "A",
        "builds": [
          "strike"
        ],
        "syn": [
          "vulnerable",
          "strike",
          "scaling"
        ],
        "anti": [],
        "notes": "Persistent Vulnerable scaler. Rewards decks that repeatedly apply Vulnerable and cash in with big Strike turns.",
        "mech": [
          "vulnerable_payoff",
          "persistent_scaling",
          "strike"
        ],
        "role": "engine"
      },
      "CINDER": {
        "id": "Cinder",
        "tier": "C",
        "builds": [
          "exhaust"
        ],
        "syn": [
          "exhaust",
          "damage"
        ],
        "anti": [
          "strength",
          "block",
          "self_damage"
        ],
        "notes": "17 damage + exhausts the top card of your draw pile randomly. In exhaust builds that's free value — damage AND triggers Dark Embrace/Feel No Pain/Charon's Ashes. Outside exhaust builds, skip — random exile of your best card is too risky.",
        "mech": [
          "damage",
          "exhaust"
        ],
        "role": "generator"
      },
      "HAVOC": {
        "id": "Havoc",
        "tier": "D",
        "builds": [
          "exhaust"
        ],
        "syn": [
          "exhaust"
        ],
        "anti": [
          "strength",
          "block",
          "self_damage"
        ],
        "notes": "Play AND exhaust the top card of your draw pile — you don't choose. In exhaust builds the exhaust trigger fires regardless, but the random play is too unreliable to sequence around. Easy skip in most situations. Upgraded it's playable in dedicated exhaust decks.",
        "mech": [
          "exhaust",
          "random_play"
        ],
        "role": "generator"
      },
      "SETUP_STRIKE": {
        "id": "Setup Strike",
        "tier": "C",
        "builds": [
          "strength"
        ],
        "syn": [
          "strength",
          "damage",
          "multi_hit"
        ],
        "anti": [
          "exhaust",
          "block"
        ],
        "notes": "7 damage + 2 Strength THIS TURN ONLY — not permanent. Play it first, then follow with attacks that turn to benefit from the +2 Strength. Shines with multi-hit attacks (each hit gains +2) or Heavy Blade (3x Strength scaling = +6 bonus). Weak in isolation and useless if you can't chain attacks after it.",
        "mech": [
          "damage",
          "strength",
          "conditional"
        ],
        "role": "generator"
      },
      "TREMBLE": {
        "id": "Tremble",
        "tier": "C",
        "builds": [
          "strength",
          "strike",
          "any"
        ],
        "syn": [
          "vulnerable",
          "damage"
        ],
        "anti": [
          "exhaust",
          "block"
        ],
        "notes": "Apply 2 Vulnerable. 0 cost setup card. Enables Ironclad Vulnerable payoffs and amplifies big Strike nukes like Perfected Strike.",
        "mech": [
          "vulnerable",
          "debuff",
          "zero_cost"
        ],
        "role": "generator"
      },
      "BULLY": {
        "id": "Bully",
        "tier": "C",
        "builds": [
          "strength",
          "any"
        ],
        "syn": [
          "vulnerable",
          "damage",
          "scaling"
        ],
        "anti": [
          "exhaust",
          "block"
        ],
        "notes": "Deal 4 + 2 per Vulnerable stack on enemy. With 3 stacks = 10 damage. With 5 stacks = 14 damage. Scales well in dedicated Vulnerable builds with Tremble/Uppercut/Taunt stacking stacks, but underwhelming without setup. Pair with Thunderclap for multi-enemy Vulnerable into Bully payoff.",
        "mech": [
          "damage",
          "vulnerable_payoff",
          "scaling"
        ],
        "role": "payoff"
      },
      "DEMONIC_SHIELD": {
        "id": "Demonic Shield",
        "tier": "D",
        "builds": [
          "any"
        ],
        "syn": [
          "block"
        ],
        "anti": [],
        "notes": "Co-op only card — gives another player Block equal to yours. Costs 1 HP. Useless in solo play. Only relevant in multiplayer sessions.",
        "mech": [
          "block",
          "co_op"
        ],
        "role": "support"
      },
      "DOMINATE": {
        "id": "Dominate",
        "tier": "C",
        "builds": [
          "strength"
        ],
        "syn": [
          "strength",
          "vulnerable",
          "scaling"
        ],
        "anti": [
          "exhaust",
          "block"
        ],
        "notes": "Gain 1 Strength for each Vulnerable on the enemy. Exhaust. Converts Vulnerable stacks directly into permanent Strength — use after stacking 3+ Vulnerable for a big burst of scaling. Once per fight but the Strength is permanent. Essential in Vulnerable-into-Strength builds for boss fights.",
        "mech": [
          "strength",
          "vulnerable_payoff",
          "exhaust"
        ],
        "role": "generator"
      },
      "DRUM_OF_BATTLE": {
        "id": "Drum of Battle",
        "tier": "C",
        "builds": [
          "exhaust"
        ],
        "syn": [
          "exhaust",
          "draw",
          "scaling"
        ],
        "anti": [
          "strength",
          "block",
          "self_damage"
        ],
        "notes": "Draw 2 on play, then passively exhausts top card of draw pile every turn start. In exhaust builds this is a free trigger every turn — fires Dark Embrace, Feel No Pain, Charon's Ashes, Forgotten Ritual all passively. Outside exhaust builds the random exile of your best cards is genuinely dangerous.",
        "mech": [
          "draw",
          "exhaust",
          "passive"
        ],
        "role": "engine"
      },
      "FORGOTTEN_RITUAL": {
        "id": "Forgotten Ritual",
        "tier": "A",
        "builds": [
          "exhaust"
        ],
        "syn": [
          "exhaust",
          "energy_gain",
          "scaling"
        ],
        "anti": [
          "strength",
          "block",
          "self_damage"
        ],
        "notes": "If you Exhausted a card this turn, gain 3 energy — free, no cost. With Corruption making every skill exhaust, this is guaranteed 3 free energy every turn. Foundational to Ironclad infinite loops. One of the key reasons exhaust builds can chain turns indefinitely.",
        "mech": [
          "energy_gain",
          "exhaust",
          "conditional"
        ],
        "role": "payoff"
      },
      "HOWL_FROM_BEYOND": {
        "id": "Howl from Beyond",
        "tier": "C",
        "builds": [
          "exhaust",
          "any"
        ],
        "syn": [
          "exhaust",
          "damage",
          "aoe",
          "scaling"
        ],
        "anti": [],
        "notes": "Deal 16 AoE, then it plays itself from the Exhaust Pile every turn start for FREE. After the initial play you get 16 free AoE every single turn for the rest of the fight. Each replay also exhausts, triggering Dark Embrace/Feel No Pain/Charon's Ashes/Forgotten Ritual passively every turn.",
        "mech": [
          "damage",
          "aoe",
          "exhaust",
          "passive",
          "recursive"
        ],
        "role": "payoff"
      },
      "INFERNO": {
        "id": "Inferno",
        "tier": "A",
        "builds": [
          "self_damage"
        ],
        "syn": [
          "self_damage",
          "damage",
          "aoe",
          "scaling"
        ],
        "anti": [
          "block",
          "exhaust"
        ],
        "notes": "Power: start of turn lose 1 HP = 6 AoE. But also triggers on EVERY instance of HP loss on your turn — Bloodletting = 6 more AoE, Brand = 6 more AoE, Offering = 6 more AoE. Multiple Inferno copies stack: 2 Infernos = 12 AoE per HP loss. Core engine of self-damage builds.",
        "mech": [
          "self_damage",
          "damage",
          "aoe",
          "passive"
        ],
        "role": "engine"
      },
      "STAMPEDE": {
        "id": "Stampede",
        "tier": "C",
        "builds": [
          "strength",
          "any"
        ],
        "syn": [
          "damage",
          "scaling"
        ],
        "anti": [
          "exhaust",
          "block"
        ],
        "notes": "Power: at end of turn, 1 random Attack from hand plays against a random enemy for free. Free extra attack every turn. Best with cheap high-value attacks you want to keep in hand. Anger is the dream — fires for free AND copies itself. Targets randomly so less reliable against bosses.",
        "mech": [
          "damage",
          "passive",
          "random_play"
        ],
        "role": "generator"
      },
      "UNRELENTING": {
        "id": "Unrelenting",
        "tier": "B",
        "builds": [
          "strength",
          "any"
        ],
        "syn": [
          "damage",
          "scaling",
          "energy_gain"
        ],
        "anti": [
          "exhaust",
          "block"
        ],
        "notes": "Deal 12 damage. The next Attack you play costs 0. Strong chaining card — play Unrelenting into any expensive attack for a free follow-up. Best with Bludgeon (3-cost becomes free), Heavy Blade (2-cost becomes free), or Whirlwind (becomes free but still uses all remaining energy).",
        "mech": [
          "damage",
          "cost_reduction"
        ],
        "role": "generator"
      },
      "HELLRAISER": {
        "id": "Hellraiser",
        "tier": "C",
        "builds": [
          "strength",
          "strike"
        ],
        "syn": [
          "damage",
          "scaling"
        ],
        "anti": [
          "exhaust",
          "block",
          "self_damage"
        ],
        "notes": "Power: whenever you DRAW a card containing \"Strike\" it auto-plays for free. Defines the Strike build — stack Strikes + draw cards and watch them chain. Battle Trance draws 3 = 3 free Strikes. Pommel Strike triggers it AND draws a card = potential infinite chain. Anger fires and replicates itself. Every Strike in your deck becomes a free auto-attack.",
        "mech": [
          "damage",
          "passive",
          "conditional"
        ],
        "role": "engine"
      },
      "ONE_TWO_PUNCH": {
        "id": "One-Two Punch",
        "tier": "B",
        "builds": [
          "strength",
          "any"
        ],
        "syn": [
          "damage",
          "scaling",
          "multi_hit"
        ],
        "anti": [
          "exhaust"
        ],
        "notes": "This turn, your next Attack plays an extra time. Basically Double Tap but as a Skill — plays twice per fight in skill-heavy decks and exhausts with Corruption. Use before your biggest hit: Reaper doubles AoE + heal, Whirlwind doubles all energy hits, Howl from Beyond doubles the AoE.",
        "mech": [
          "card_doubler",
          "damage"
        ],
        "role": "generator"
      },
      "PACTS_END": {
        "id": "Pact's End",
        "tier": "C",
        "builds": [
          "exhaust"
        ],
        "syn": [
          "exhaust",
          "damage",
          "aoe"
        ],
        "anti": [
          "strength",
          "block",
          "self_damage"
        ],
        "notes": "Can only be played with 3+ cards in Exhaust Pile — Deal 17 AoE. 0 Energy cost. In exhaust builds the condition is trivially met by turn 2-3. Effectively free massive AoE once your exhaust engine is running. Skip without exhaust support.",
        "mech": [
          "damage",
          "aoe",
          "zero_cost",
          "conditional"
        ],
        "role": "payoff"
      },
      "TEAR_ASUNDER": {
        "id": "Tear Asunder",
        "tier": "B",
        "builds": [
          "self_damage"
        ],
        "syn": [
          "self_damage",
          "damage",
          "scaling",
          "multi_hit"
        ],
        "anti": [
          "block",
          "exhaust"
        ],
        "notes": "Deal 5 damage + 5 more for each time you lost HP this combat. Early game it's a weak hit, but with Bloodletting/Brutality/Offering spammed throughout a fight it scales to massive damage — 8 HP losses = 45 damage for 2 energy. Pure self-damage payoff that gets stronger the more you feed the self-damage engine.",
        "mech": [
          "damage",
          "multi_hit",
          "scaling",
          "self_damage_payoff"
        ],
        "role": "payoff"
      }
    },
    "silent": {
      "ADRENALINE": {
        "id": "Adrenaline",
        "tier": "S",
        "builds": [
          "any"
        ],
        "syn": [
          "draw",
          "scaling"
        ],
        "anti": [],
        "notes": "0-cost: gain 1 energy, draw 2. One of the best 0-cost cards in the game period — pure resource generation with no downside.",
        "mech": [
          "draw",
          "energy_gain",
          "zero_cost"
        ],
        "role": "generator"
      },
      "WELL_LAID_PLANS": {
        "id": "Well-Laid Plans",
        "tier": "S",
        "builds": [
          "sly"
        ],
        "syn": [
          "discard",
          "sly",
          "scaling"
        ],
        "anti": [
          "poison",
          "shiv"
        ],
        "notes": "At the end of your turn, Retain up to 1 card. Hold your best Sly payoff or combo piece for next turn. Enables setting up turns in advance — retain a Reflex, Tactician, or Burst for guaranteed access.",
        "mech": [
          "retain",
          "combo_enabler"
        ],
        "role": "engine"
      },
      "CALCULATED_GAMBLE": {
        "id": "Calculated Gamble",
        "tier": "S",
        "builds": [
          "sly"
        ],
        "syn": [
          "discard",
          "sly",
          "draw"
        ],
        "anti": [
          "poison"
        ],
        "notes": "0-cost: discard hand, draw same amount. Huge Sly enabler.",
        "mech": [
          "discard",
          "draw",
          "zero_cost",
          "sly_enabler"
        ],
        "role": "generator"
      },
      "NOXIOUS_FUMES": {
        "id": "Noxious Fumes",
        "tier": "A",
        "builds": [
          "poison"
        ],
        "syn": [
          "poison",
          "scaling"
        ],
        "anti": [
          "sly",
          "shiv"
        ],
        "notes": "Passive poison every turn on ALL enemies. Play it and just block while they die.",
        "mech": [
          "poison",
          "passive_damage"
        ],
        "role": "engine"
      },
      "ACCURACY": {
        "id": "Accuracy",
        "tier": "B",
        "builds": [
          "shiv"
        ],
        "syn": [
          "shiv",
          "shiv_synergy",
          "damage",
          "scaling"
        ],
        "anti": [
          "sly",
          "poison"
        ],
        "notes": "Shivs deal 4 additional damage. Each copy stacks. In Shiv build with Infinite Blades, every passive Shiv goes from 4 to 8+ damage. Needs Shiv generators to be online first.",
        "mech": [
          "shiv_amplify",
          "scaling",
          "stackable"
        ],
        "role": "engine"
      },
      "BURST": {
        "id": "Burst",
        "tier": "B",
        "builds": [
          "sly",
          "poison",
          "shiv"
        ],
        "syn": [
          "sly",
          "poison",
          "shiv",
          "skill_synergy"
        ],
        "anti": [
          "shiv"
        ],
        "notes": "This turn, your next Skill is played an extra time. Most Poison applicators are Skills — Burst+Noxious Fumes applies double Poison stacks, Burst+Deadly Poison double stacks, Burst+Haze double AoE Poison. Also doubles Calculated Gamble for double hand refresh and double Sly triggers. Only works on Skills, not Powers or Attacks.",
        "mech": [
          "skill_doubler",
          "combo_enabler"
        ],
        "role": "engine"
      },
      "INFINITE_BLADES": {
        "id": "Infinite Blades",
        "tier": "C",
        "builds": [
          "shiv"
        ],
        "syn": [
          "shiv",
          "shiv_synergy",
          "scaling"
        ],
        "anti": [
          "sly",
          "poison"
        ],
        "notes": "At start of turn, add a Shiv to hand. Passive free Shiv every turn — feeds Accuracy, Finisher, After Image permanently. Engine for Shiv builds but needs payoffs to matter.",
        "mech": [
          "shiv_generator",
          "passive"
        ],
        "role": "engine"
      },
      "REFLEX": {
        "id": "Reflex",
        "tier": "S",
        "builds": [
          "sly"
        ],
        "syn": [
          "sly",
          "draw"
        ],
        "anti": [
          "poison",
          "shiv"
        ],
        "notes": "3-cost, but has Sly - discard it for free draw 2. Never play it manually.",
        "mech": [
          "sly",
          "draw"
        ],
        "role": "payoff"
      },
      "TACTICIAN": {
        "id": "Tactician",
        "tier": "A",
        "builds": [
          "sly"
        ],
        "syn": [
          "sly",
          "scaling"
        ],
        "anti": [
          "poison",
          "shiv"
        ],
        "notes": "3-cost, but Sly = discard it for free energy. Core Sly enabler.",
        "mech": [
          "sly",
          "energy_gain"
        ],
        "role": "payoff"
      },
      "BLADE_DANCE": {
        "id": "Blade Dance",
        "tier": "B",
        "builds": [
          "shiv"
        ],
        "syn": [
          "shiv",
          "shiv_synergy",
          "damage"
        ],
        "anti": [
          "sly",
          "poison"
        ],
        "notes": "Generate 3 Shivs. Now Exhaust. At 3 Shivs = 12+ damage minimum.",
        "mech": [
          "shiv_generator",
          "exhaust"
        ],
        "role": "generator"
      },
      "CLOAK_AND_DAGGER": {
        "id": "Cloak And Dagger",
        "tier": "B",
        "builds": [
          "shiv",
          "any"
        ],
        "syn": [
          "shiv",
          "shiv_synergy",
          "block"
        ],
        "anti": [],
        "notes": "1 Shiv + block. Flexible card that works in any deck.",
        "mech": [
          "shiv_generator",
          "block"
        ],
        "role": "generator"
      },
      "KNIFE_TRAP": {
        "id": "Knife Trap",
        "tier": "B",
        "builds": [
          "shiv"
        ],
        "syn": [
          "shiv",
          "shiv_synergy",
          "damage"
        ],
        "anti": [],
        "notes": "Incredible finisher in shiv builds. Can play 15-20 Shivs in later turns.",
        "mech": [
          "shiv_generator",
          "scaling"
        ],
        "role": "generator"
      },
      "DEADLY_POISON": {
        "id": "Deadly Poison",
        "tier": "C",
        "builds": [
          "poison"
        ],
        "syn": [
          "poison"
        ],
        "anti": [
          "sly",
          "shiv"
        ],
        "notes": "Primary poison stacker. Reliable early application.",
        "mech": [
          "poison"
        ],
        "role": "generator"
      },
      "POISONED_STAB": {
        "id": "Poisoned Stab",
        "tier": "C",
        "builds": [
          "poison"
        ],
        "syn": [
          "poison",
          "damage"
        ],
        "anti": [
          "sly",
          "shiv"
        ],
        "notes": "Damage + poison. Efficient dual-purpose card.",
        "mech": [
          "poison",
          "damage"
        ],
        "role": "generator"
      },
      "BOUNCING_FLASK": {
        "id": "Bouncing Flask",
        "tier": "C",
        "builds": [
          "poison"
        ],
        "syn": [
          "poison",
          "aoe"
        ],
        "anti": [
          "sly",
          "shiv"
        ],
        "notes": "Spreads poison to all enemies. Key for multi-enemy rooms.",
        "mech": [
          "poison",
          "aoe"
        ],
        "role": "generator"
      },
      "HAZE": {
        "id": "Haze",
        "tier": "B",
        "builds": [
          "sly",
          "poison"
        ],
        "syn": [
          "sly",
          "poison",
          "aoe"
        ],
        "anti": [],
        "notes": "Sly + applies 4 poison to ALL enemies. Insane value when discarded free.",
        "mech": [
          "sly",
          "poison",
          "aoe"
        ],
        "role": "payoff"
      },
      "ACCELERANT": {
        "id": "Accelerant",
        "tier": "C",
        "builds": [
          "poison"
        ],
        "syn": [
          "poison",
          "scaling"
        ],
        "anti": [
          "sly",
          "shiv"
        ],
        "notes": "Poison is triggered 1 additional time each turn. With Accelerant active, enemies take poison damage twice per turn instead of once — effectively doubles poison DPS without increasing stacks. Stack multiple copies for 3x, 4x triggers.",
        "mech": [
          "poison_amplify",
          "scaling"
        ],
        "role": "engine"
      },
      "ACROBATICS": {
        "id": "Acrobatics",
        "tier": "S",
        "builds": [
          "sly",
          "any"
        ],
        "syn": [
          "sly",
          "draw",
          "discard"
        ],
        "anti": [],
        "notes": "Draw 3, discard 1. Excellent cycling and Sly enabler.",
        "mech": [
          "draw",
          "discard",
          "sly_enabler"
        ],
        "role": "generator"
      },
      "PREPARED": {
        "id": "Prepared",
        "tier": "A",
        "builds": [
          "sly",
          "any"
        ],
        "syn": [
          "sly",
          "draw",
          "discard"
        ],
        "anti": [],
        "notes": "Draw 1, discard 1 (0-cost). Efficient Sly trigger.",
        "mech": [
          "draw",
          "discard",
          "sly_enabler",
          "zero_cost"
        ],
        "role": "generator"
      },
      "ENVENOM": {
        "id": "Envenom",
        "tier": "A",
        "builds": [
          "poison",
          "shiv"
        ],
        "syn": [
          "poison",
          "shiv_synergy"
        ],
        "anti": [],
        "notes": "Attacks apply 1 poison. Synergizes Shiv + Poison builds.",
        "mech": [
          "poison",
          "passive"
        ],
        "role": "engine"
      },
      "FINISHER": {
        "id": "Finisher",
        "tier": "B",
        "builds": [
          "shiv"
        ],
        "syn": [
          "shiv",
          "shiv_synergy",
          "damage",
          "scaling"
        ],
        "anti": [
          "sly",
          "poison"
        ],
        "notes": "Damage per attack played this turn. With Shiv spam = massive single-target.",
        "mech": [
          "shiv_payoff",
          "damage",
          "scaling"
        ],
        "role": "payoff"
      },
      "MIRAGE": {
        "id": "Mirage",
        "tier": "B",
        "builds": [
          "poison"
        ],
        "syn": [
          "poison",
          "block"
        ],
        "anti": [],
        "notes": "Block = total poison on all enemies. Insane defensive value in poison decks.",
        "mech": [
          "poison_payoff",
          "block",
          "exhaust"
        ],
        "role": "payoff"
      },
      "BLUR": {
        "id": "Blur",
        "tier": "A",
        "builds": [
          "any"
        ],
        "syn": [
          "block",
          "scaling"
        ],
        "anti": [],
        "notes": "Gain 5 Block. Block is not removed at start of next turn. Persistent block — better than Defend in most situations. Pairs with Barricade-equivalent effects.",
        "mech": [
          "block",
          "retain"
        ],
        "role": "generator"
      },
      "DAGGER_THROW": {
        "id": "Dagger Throw",
        "tier": "A",
        "builds": [
          "sly",
          "any"
        ],
        "syn": [
          "sly",
          "draw",
          "discard",
          "damage"
        ],
        "anti": [],
        "notes": "Deal 9 damage. Draw 1 card. Discard 1 card. Sly enabler — the discard triggers any Sly card in hand for free while dealing solid damage. Cycles your deck. 9 damage + draw + Sly activation for 1 energy is excellent value.",
        "mech": [
          "damage",
          "draw",
          "discard",
          "sly_enabler"
        ],
        "role": "generator"
      },
      "DASH": {
        "id": "Dash",
        "tier": "B",
        "builds": [
          "any"
        ],
        "syn": [
          "block",
          "damage"
        ],
        "anti": [],
        "notes": "Solid block + damage. Reliable all-rounder.",
        "mech": [
          "block",
          "damage"
        ],
        "role": "generator"
      },
      "SURVIVOR": {
        "id": "Survivor",
        "tier": "A",
        "builds": [
          "sly",
          "any"
        ],
        "syn": [
          "sly",
          "block",
          "discard"
        ],
        "anti": [],
        "notes": "Starting deck card with Sly. Block + discard = free Sly trigger. Your first Sly activator.",
        "mech": [
          "sly",
          "block",
          "discard"
        ],
        "role": "generator"
      },
      "EXPERTISE": {
        "id": "Expertise",
        "tier": "B",
        "builds": [
          "sly",
          "any"
        ],
        "syn": [
          "draw",
          "sly"
        ],
        "anti": [],
        "notes": "Draw up to 6 cards. Fills hand for Sly triggers.",
        "mech": [
          "draw"
        ],
        "role": "generator"
      },
      "BUBBLE_BUBBLE": {
        "id": "Bubble Bubble",
        "tier": "C",
        "builds": [
          "poison"
        ],
        "syn": [
          "poison",
          "scaling"
        ],
        "anti": [],
        "notes": "If the enemy has Poison, apply 9 Poison. Conditional but extremely efficient — 9 Poison for 1 energy if any Poison is already on target. Requires just 1 stack to activate. Twisted Funnel relic makes it work from turn 1.",
        "mech": [
          "poison_amplify"
        ],
        "role": "generator"
      },
      "BACKSTAB": {
        "id": "Backstab",
        "tier": "D",
        "builds": [
          "any"
        ],
        "syn": [
          "damage"
        ],
        "anti": [],
        "notes": "Innate. Free damage in opening hand. Always starts combat.",
        "mech": [
          "damage",
          "innate"
        ],
        "role": "generator"
      },
      "FAN_OF_KNIVES": {
        "id": "Fan Of Knives",
        "tier": "B",
        "builds": [
          "shiv",
          "any"
        ],
        "syn": [
          "shiv",
          "shiv_synergy",
          "aoe"
        ],
        "anti": [],
        "notes": "Shivs now hit ALL enemies. Add 4 Shivs into your Hand. Dual effect — permanently makes all Shivs AoE AND generates 4 Shivs immediately. With Accuracy, those 4 Shivs hit all enemies for 8+ damage each. Core multi-enemy Shiv card.",
        "mech": [
          "shiv_generator",
          "shiv_buff",
          "aoe",
          "passive"
        ],
        "role": "generator"
      },
      "SNAKEBITE": {
        "id": "Snakebite",
        "tier": "D",
        "builds": [
          "poison"
        ],
        "syn": [
          "poison",
          "damage"
        ],
        "anti": [
          "sly",
          "shiv"
        ],
        "notes": "Retain. Apply 7 Poison. Retained so you can hold it until optimal moment. 7 Poison is a solid stack. The Retain makes it more flexible — hold it for a turn when you have room.",
        "mech": [
          "poison",
          "retain"
        ],
        "role": "generator"
      },
      "FOOTWORK": {
        "id": "Footwork",
        "tier": "A",
        "builds": [
          "any"
        ],
        "syn": [
          "dexterity",
          "block"
        ],
        "anti": [],
        "notes": "Permanent +1 Dexterity. Every block card gains +1 block for the rest of combat, permanently. Stacks with copies. S-tier because it fundamentally upgrades your entire defensive suite.",
        "mech": [
          "dexterity",
          "permanent_scaling"
        ],
        "role": "engine"
      },
      "OUTMANEUVER": {
        "id": "Outmaneuver",
        "tier": "B",
        "builds": [
          "any"
        ],
        "syn": [
          "block"
        ],
        "anti": [],
        "notes": "Block + draw.",
        "mech": [
          "block",
          "draw"
        ],
        "role": "generator"
      },
      "SKEWER": {
        "id": "Skewer",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "damage",
          "scaling"
        ],
        "anti": [],
        "notes": "X-cost attack. Good energy dump.",
        "mech": [
          "damage",
          "scaling"
        ],
        "role": "payoff"
      },
      "FOLLOW_THROUGH": {
        "id": "Follow Through",
        "tier": "B",
        "builds": [
          "shiv",
          "any"
        ],
        "syn": [
          "aoe",
          "weak",
          "damage",
          "tracking_synergy"
        ],
        "anti": [],
        "notes": "Deal 6 damage to ALL enemies. If the last card you played this turn was a Skill, apply 1 Weak to ALL enemies. Consistent AoE Weak application in Skill-heavy builds. Synergizes with Tracking — apply Weak then Tracking doubles all attack damage.",
        "mech": [
          "damage",
          "aoe",
          "weak",
          "conditional"
        ],
        "role": "payoff"
      },
      "LEG_SWEEP": {
        "id": "Leg Sweep",
        "tier": "B",
        "builds": [
          "any"
        ],
        "syn": [
          "block",
          "weak"
        ],
        "anti": [],
        "notes": "Block + Weak. Dual-purpose defense.",
        "mech": [
          "block",
          "weak"
        ],
        "role": "generator"
      },
      "SHADOWMELD": {
        "id": "Shadowmeld",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "block",
          "dexterity",
          "scaling"
        ],
        "anti": [],
        "notes": "Double your Block gain this turn. NOT fixed block — it doubles ALL block you gain this turn from any source. With Footwork active and multiple block cards, this can generate 30+ block in one turn. Best in block-heavy turns.",
        "mech": [
          "block_doubler",
          "conditional"
        ],
        "role": "payoff"
      },
      "PREDATOR": {
        "id": "Predator",
        "tier": "B",
        "builds": [
          "any"
        ],
        "syn": [
          "damage",
          "draw"
        ],
        "anti": [],
        "notes": "Deal 15 damage. Next turn, draw 2 cards. Strong single-target damage with delayed draw payoff. 15 damage is above-average for 1 energy. The next-turn draw helps maintain hand quality in any build.",
        "mech": [
          "damage",
          "draw"
        ],
        "role": "generator"
      },
      "RICOCHET": {
        "id": "Ricochet",
        "tier": "B",
        "builds": [
          "sly"
        ],
        "syn": [
          "sly",
          "damage"
        ],
        "anti": [
          "poison",
          "shiv"
        ],
        "notes": "Sly multi-hit.",
        "mech": [
          "sly",
          "damage"
        ],
        "role": "payoff"
      },
      "FLICK_FLACK": {
        "id": "Flick Flack",
        "tier": "B",
        "builds": [
          "sly"
        ],
        "syn": [
          "sly",
          "damage",
          "aoe"
        ],
        "anti": [
          "poison",
          "shiv"
        ],
        "notes": "Sly AoE.",
        "mech": [
          "sly",
          "damage",
          "aoe"
        ],
        "role": "payoff"
      },
      "UNTOUCHABLE": {
        "id": "Untouchable",
        "tier": "A",
        "builds": [
          "sly"
        ],
        "syn": [
          "sly",
          "block"
        ],
        "anti": [
          "poison",
          "shiv"
        ],
        "notes": "Sly block.",
        "mech": [
          "sly",
          "block"
        ],
        "role": "payoff"
      },
      "ASSASSINATE": {
        "id": "Assassinate",
        "tier": "A",
        "builds": [
          "any"
        ],
        "syn": [
          "vulnerable",
          "damage",
          "innate"
        ],
        "anti": [],
        "notes": "Innate. Deal 10 damage. Apply 1 Vulnerable. Exhaust. Always in opening hand — guaranteed 10 damage plus 1 Vulnerable on turn 1. The Vulnerable amplifies follow-up attacks. Exhausts so never clogs deck.",
        "mech": [
          "damage",
          "vulnerable",
          "innate",
          "exhaust"
        ],
        "role": "payoff"
      },
      "DISTRACTION": {
        "id": "Distraction",
        "tier": "C",
        "builds": [
          "sly"
        ],
        "syn": [
          "discard",
          "sly"
        ],
        "anti": [
          "poison",
          "shiv"
        ],
        "notes": "Discard enabler. OK in sly builds.",
        "mech": [
          "discard",
          "sly_enabler"
        ],
        "role": "generator"
      },
      "NIGHTMARE": {
        "id": "Nightmare",
        "tier": "C",
        "builds": [
          "sly",
          "any"
        ],
        "syn": [
          "sly",
          "scaling",
          "combo_enabler"
        ],
        "anti": [],
        "notes": "Choose a card. Next turn, add 3 copies of that card into your Hand. Exhaust. Triple a key card — 3x Accelerant means Poison triggers 4 times per turn, 3x Reflex draws 6 cards for free, 3x Tactician gives 3 free energy, 3x Wraith Form = 6 turns of Intangible.",
        "mech": [],
        "role": "engine"
      },
      "MASTER_PLANNER": {
        "id": "Master Planner",
        "tier": "B",
        "builds": [
          "sly",
          "any"
        ],
        "syn": [
          "sly",
          "discard"
        ],
        "anti": [],
        "notes": "When you play a Skill, it gains Sly. Permanent passive — every Skill you play becomes a Sly card. Play Calculated Gamble, it becomes Sly and triggers immediately on discard. Works on every Skill every turn. Far more powerful than a one-time hand buff.",
        "mech": [
          "sly_granter",
          "passive",
          "permanent"
        ],
        "role": "engine"
      },
      "STRIKE": {
        "id": "Strike",
        "tier": "D",
        "builds": [],
        "syn": [
          "damage"
        ],
        "anti": [],
        "notes": "Starter attack. Replace ASAP.",
        "mech": [
          "damage"
        ]
      },
      "DEFEND": {
        "id": "Defend",
        "tier": "D",
        "builds": [],
        "syn": [
          "block"
        ],
        "anti": [],
        "notes": "Starter block. Replace ASAP.",
        "mech": [
          "block"
        ]
      },
      "GRAND_FINALE": {
        "id": "Grand Finale",
        "tier": "D",
        "builds": [
          "any"
        ],
        "syn": [],
        "anti": [
          "poison",
          "shiv",
          "sly"
        ],
        "notes": "Nearly impossible to trigger consistently.",
        "mech": [],
        "role": "payoff"
      },
      "TOOLS_OF_THE_TRADE": {
        "id": "Tools Of The Trade",
        "tier": "S",
        "builds": [
          "sly"
        ],
        "syn": [
          "sly",
          "discard",
          "draw",
          "scaling"
        ],
        "anti": [
          "poison",
          "shiv"
        ],
        "notes": "At start of turn, discard 1 and draw 1. Free Sly triggers every turn passively.",
        "mech": [
          "sly_enabler",
          "discard",
          "draw",
          "passive"
        ],
        "role": "engine"
      },
      "HAND_TRICK": {
        "id": "Hand Trick",
        "tier": "B",
        "builds": [
          "sly",
          "shiv",
          "poison"
        ],
        "syn": [
          "sly",
          "shiv",
          "poison",
          "block"
        ],
        "anti": [],
        "notes": "Gain 7 Block. Add Sly to a Skill in your Hand this turn. Gives ANY Skill the Sly keyword for this turn — if you discard it, it plays for free. Land it on Burst for a free next-skill-plays-twice, or Adrenaline for free energy+draw. PCGamesN calls this incredible for hybrid builds.",
        "mech": [
          "block",
          "sly_granter",
          "conditional",
          "hybrid_enabler"
        ],
        "role": "engine"
      },
      "CALTROPS": {
        "id": "Caltrops",
        "tier": "B",
        "builds": [
          "any"
        ],
        "syn": [
          "damage",
          "block"
        ],
        "anti": [],
        "notes": "Apply 3 Thorns. Passive damage when hit. Decent in defensive builds.",
        "mech": [
          "passive",
          "damage"
        ],
        "role": "generator"
      },
      "STORM_OF_STEEL": {
        "id": "Storm Of Steel",
        "tier": "B",
        "builds": [
          "shiv",
          "sly"
        ],
        "syn": [
          "shiv",
          "sly",
          "discard",
          "shiv_synergy"
        ],
        "anti": [
          "sly",
          "poison"
        ],
        "notes": "Discard your Hand. Add 1 Shiv into your Hand for each card discarded. Double payoff — discarding triggers ALL Sly cards in hand for free, THEN you get Shivs equal to hand size. With 6 cards = 6 free Sly triggers + 6 Shivs.",
        "mech": [
          "shiv_generator",
          "discard",
          "exhaust"
        ],
        "role": "generator"
      },
      "PIERCING_WAIL": {
        "id": "Piercing Wail",
        "tier": "S",
        "builds": [
          "any"
        ],
        "syn": [
          "debuff",
          "damage_reduction",
          "aoe"
        ],
        "anti": [],
        "notes": "ALL enemies lose 6 Strength this turn. Exhaust. Massive AoE Strength reduction — cuts all enemy damage by 6 for their next attack. Not Weak, not permanent, but 6 Strength gone is enormous against hard-hitting enemies and bosses.",
        "mech": [
          "strength_reduction",
          "aoe",
          "exhaust"
        ],
        "role": "generator"
      },
      "ANTICIPATE": {
        "id": "Anticipate",
        "tier": "D",
        "builds": [
          "any"
        ],
        "syn": [
          "block",
          "dexterity",
          "scaling"
        ],
        "anti": [],
        "notes": "Gain 3 Dexterity this turn. Temporary burst defense — 3 Dex with several block cards in hand is huge. Excellent with Footwork already active since the two stack. Best in turns where you're playing many block cards.",
        "mech": [
          "dexterity",
          "temporary",
          "conditional"
        ],
        "role": "generator"
      },
      "BACKFLIP": {
        "id": "Backflip",
        "tier": "B",
        "builds": [
          "any"
        ],
        "syn": [
          "block",
          "draw",
          "sly"
        ],
        "anti": [],
        "notes": "Gain 5 Block. Draw 2 cards. Efficient at everything — defense and cycling in one card. Block benefits from Footwork Dex. The Draw 2 finds Sly triggers or more combo pieces. Core early defensive pickup for any Silent build.",
        "mech": [
          "block",
          "draw"
        ],
        "role": "generator"
      },
      "DAGGER_SPRAY": {
        "id": "Dagger Spray",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "aoe",
          "damage",
          "poison"
        ],
        "anti": [],
        "notes": "Deal 4 damage to ALL enemies twice. Silent's only common AoE attack — niche but useful in multi-enemy rooms. Each hit triggers Envenom separately for 2 Poison stacks per enemy per cast.",
        "mech": [
          "damage",
          "aoe",
          "multi_hit"
        ],
        "role": "generator"
      },
      "DEFLECT": {
        "id": "Deflect",
        "tier": "D",
        "builds": [
          "any"
        ],
        "syn": [
          "block"
        ],
        "anti": [],
        "notes": "Gain 4 Block. Pure block with no secondary effect. Strictly worse than every other Silent block card — Backflip draws 2, Dash has higher block, Blur retains, Dodge and Roll spreads across 2 turns. Only take if desperate early.",
        "mech": [
          "block"
        ],
        "role": "generator"
      },
      "DODGE_AND_ROLL": {
        "id": "Dodge And Roll",
        "tier": "D",
        "builds": [
          "any"
        ],
        "syn": [
          "block",
          "dexterity",
          "scaling"
        ],
        "anti": [],
        "notes": "Gain 4 Block. Next turn, gain 4 Block. 8 total block for 1 energy spread over 2 turns — very efficient. Both block instances benefit from Footwork's Dexterity. The delayed second block is passive safety. Great mid-game pick with at least one Footwork.",
        "mech": [
          "block",
          "delayed_block"
        ],
        "role": "generator"
      },
      "LEADING_STRIKE": {
        "id": "Leading Strike",
        "tier": "B",
        "builds": [
          "shiv"
        ],
        "syn": [
          "shiv",
          "damage"
        ],
        "anti": [
          "poison",
          "sly"
        ],
        "notes": "Deal 7 damage. Add 1 Shiv to your Hand. Shiv build support — deals solid damage while generating a Shiv that immediately benefits from Accuracy. The Shiv also triggers Envenom and After Image when played.",
        "mech": [
          "damage",
          "shiv_generator"
        ],
        "role": "generator"
      },
      "SLICE": {
        "id": "Slice",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "damage",
          "sly"
        ],
        "anti": [],
        "notes": "Deal 6 damage. 0-cost attack — fires for free with Sly discards and triggers After Image and Nunchaku. Purely filler otherwise. Worth keeping only in Sly/Shiv builds where playing many 0-cost cards matters for Speedster or After Image procs.",
        "mech": [
          "damage",
          "zero_cost"
        ],
        "role": "generator"
      },
      "SUCKER_PUNCH": {
        "id": "Sucker Punch",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "damage",
          "weak"
        ],
        "anti": [],
        "notes": "Deal 8 damage. Apply 1 Weak. Decent early tempo — damage plus a Weak stack. 1 Weak reduces enemy damage by 25% for a turn. Outclassed mid-game by better debuff options like Leg Sweep and Piercing Wail.",
        "mech": [
          "damage",
          "weak"
        ],
        "role": "generator"
      },
      "ESCAPE_PLAN": {
        "id": "Escape Plan",
        "tier": "A",
        "builds": [
          "sly",
          "any"
        ],
        "syn": [
          "block",
          "draw",
          "sly"
        ],
        "anti": [],
        "notes": "Draw 1 card. If you draw a Skill, gain 3 Block. In skill-heavy Silent decks almost always triggers — draw a skill and get 3 free block. Chains with Sly since the drawn Skill might have Sly. Steam community confirms it as core in cycling builds.",
        "mech": [
          "draw",
          "block",
          "conditional"
        ],
        "role": "generator"
      },
      "EXPOSE": {
        "id": "Expose",
        "tier": "A",
        "builds": [
          "any"
        ],
        "syn": [
          "vulnerable",
          "damage",
          "poison"
        ],
        "anti": [],
        "notes": "Remove all Artifact and Block from the enemy. Apply 2 Vulnerable. Exhaust. Removes Artifact — the hard counter to all Silent debuff builds. Also strips all enemy Block and applies 2 Vulnerable. Crucial for Poison and Shiv builds against Artifact bosses.",
        "mech": [
          "artifact_removal",
          "vulnerable",
          "block_removal",
          "exhaust"
        ],
        "role": "generator"
      },
      "FLANKING": {
        "id": "Flanking",
        "tier": "D",
        "builds": [
          "any"
        ],
        "syn": [],
        "anti": [],
        "notes": "The enemy takes double damage from other players this turn. CO-OP ONLY card — completely useless in solo play. Only relevant in multiplayer runs where other players deal damage. Skip in every solo encounter.",
        "mech": [
          "coop_only",
          "damage_multiplier"
        ],
        "role": "generator"
      },
      "FLECHETTES": {
        "id": "Flechettes",
        "tier": "B",
        "builds": [
          "sly",
          "shiv"
        ],
        "syn": [
          "sly",
          "damage",
          "scaling"
        ],
        "anti": [
          "poison"
        ],
        "notes": "Deal 5 damage for each Skill in your Hand. Damage scales with how many Skills you're holding — Well-Laid Plans retaining Skills makes this hit harder. Master Planner giving all Skills Sly means you'll hold many Skills before discarding. Can hit for 20-40+ damage in a loaded hand.",
        "mech": [
          "damage",
          "per_skill_in_hand",
          "scaling"
        ],
        "role": "payoff"
      },
      "ABRASIVE": {
        "id": "Abrasive",
        "tier": "A",
        "builds": [
          "sly",
          "any"
        ],
        "syn": [
          "sly",
          "dexterity",
          "thorns",
          "scaling"
        ],
        "anti": [],
        "notes": "Sly. Gain 1 Dexterity. Gain 4 Thorns. When discarded for free: costs 0 AND permanently gains 1 Dex + 4 Thorns. Stack multiple copies via Sly chains for massive Thorns and permanent Dex scaling. Works in any build that discards.",
        "mech": [
          "sly",
          "dexterity",
          "thorns",
          "permanent_scaling"
        ],
        "role": "engine"
      },
      "BLADE_OF_INK": {
        "id": "Blade Of Ink",
        "tier": "D",
        "builds": [
          "shiv"
        ],
        "syn": [
          "shiv_synergy",
          "damage",
          "strength"
        ],
        "anti": [
          "poison",
          "sly"
        ],
        "notes": "This turn, whenever you play an Attack, gain 2 Strength this turn. Temporary Strength per attack — in a 10-Shiv turn that's 20 temporary Strength boosting all hits. Highly conditional and build-specific, fades at turn end.",
        "mech": [
          "strength",
          "temporary",
          "per_attack_payoff"
        ],
        "role": "generator"
      },
      "BULLET_TIME": {
        "id": "Bullet Time",
        "tier": "B",
        "builds": [
          "sly",
          "shiv"
        ],
        "syn": [
          "sly",
          "shiv",
          "zero_cost"
        ],
        "anti": [],
        "notes": "You cannot draw additional cards this turn. ALL cards in your Hand are free to play this turn. Play your entire hand for 0 energy — but you can't draw more. Best when hand is already full of Sly cards or Shivs. Pairs with Well-Laid Plans to set up a big hand.",
        "mech": [
          "zero_cost_enabler",
          "hand_free",
          "no_draw"
        ],
        "role": "engine"
      },
      "CORROSIVE_WAVE": {
        "id": "Corrosive Wave",
        "tier": "A",
        "builds": [
          "poison",
          "sly"
        ],
        "syn": [
          "poison",
          "sly",
          "draw",
          "aoe"
        ],
        "anti": [],
        "notes": "Whenever you draw a card this turn, apply 3 Poison to ALL enemies. Draw 4 cards in one turn = 12 Poison to all enemies for free. Stacks explosively with Acrobatics, Expertise, Backflip. Natural fit in draw-heavy Sly builds doubling as Poison AoE.",
        "mech": [
          "poison",
          "aoe",
          "per_draw_payoff",
          "passive"
        ],
        "role": "generator"
      },
      "ECHOING_SLASH": {
        "id": "Echoing Slash",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "aoe",
          "damage"
        ],
        "anti": [],
        "notes": "Deal 10 damage to ALL enemies. Repeat this effect for each enemy killed. Solid base AoE that chains on kills — clearing a weak enemy repeats the 10 AoE on survivors. Most valuable in multi-enemy rooms.",
        "mech": [
          "damage",
          "aoe",
          "on_kill_repeat"
        ],
        "role": "payoff"
      },
      "MALAISE": {
        "id": "Malaise",
        "tier": "A",
        "builds": [
          "any"
        ],
        "syn": [
          "weak",
          "debuff",
          "scaling"
        ],
        "anti": [],
        "notes": "Enemy loses X Strength. Apply X Weak. Exhaust. At 2 energy: -2 Strength permanently and 2 Weak. Strips enemy damage scaling AND amplifies your own damage simultaneously. Works in every Silent archetype — universally powerful debuff.",
        "mech": [
          "strength_reduction",
          "weak",
          "exhaust",
          "scaling"
        ],
        "role": "generator"
      },
      "MURDER": {
        "id": "Murder",
        "tier": "C",
        "builds": [
          "sly",
          "any"
        ],
        "syn": [
          "draw",
          "damage",
          "scaling",
          "sly"
        ],
        "anti": [],
        "notes": "Deal 1 damage. Deals 1 additional damage for each card drawn this combat. Scales with TOTAL cards drawn all combat — by late fight with 50+ cards drawn this is 50+ damage for 1 energy. Weak early, devastating late.",
        "mech": [
          "damage",
          "scaling",
          "per_combat_draw"
        ],
        "role": "payoff"
      },
      "SERPENT_FORM": {
        "id": "Serpent Form",
        "tier": "C",
        "builds": [
          "sly",
          "shiv",
          "any"
        ],
        "syn": [
          "sly",
          "shiv",
          "damage",
          "passive"
        ],
        "anti": [],
        "notes": "Whenever you play a card, deal 4 damage to a random enemy. In high-card Sly or Shiv turns: 8 cards played = 32 passive damage. Hits random enemies so unreliable in multi-enemy, but in single-target fights it adds up quickly.",
        "mech": [
          "damage",
          "passive",
          "per_card_payoff",
          "random"
        ],
        "role": "engine"
      },
      "SHADOW_STEP": {
        "id": "Shadow Step",
        "tier": "D",
        "builds": [
          "sly",
          "shiv"
        ],
        "syn": [
          "sly",
          "shiv",
          "discard",
          "damage"
        ],
        "anti": [],
        "notes": "Discard your Hand. Next turn, Attacks deal double damage. Discarding triggers ALL Sly cards in hand for free — then next turn every Shiv and attack hits for double. Setup card requiring a strong follow-up turn.",
        "mech": [
          "discard",
          "sly_trigger",
          "damage_multiplier",
          "next_turn"
        ],
        "role": "engine"
      },
      "SNEAKY": {
        "id": "Sneaky",
        "tier": "D",
        "builds": [
          "any"
        ],
        "syn": [],
        "anti": [],
        "notes": "Sly. Whenever another player attacks an enemy, gain 1 Block. Coop-only card — completely useless in single player. In multiplayer gains block whenever a teammate attacks. Skip in solo runs.",
        "mech": [
          "coop",
          "block",
          "sly"
        ],
        "role": "generator"
      },
      "TRACKING": {
        "id": "Tracking",
        "tier": "A",
        "builds": [
          "any"
        ],
        "syn": [
          "weak",
          "damage",
          "scaling"
        ],
        "anti": [],
        "notes": "Weak enemies take double damage from Attacks. Permanent multiplier — with Piercing Wail, Malaise, Leg Sweep, or Sucker Punch applying Weak, every attack deals double damage for the rest of combat. Pairs with literally every attack card Silent has.",
        "mech": [
          "damage_multiplier",
          "weak_synergy",
          "passive",
          "permanent"
        ],
        "role": "engine"
      },
      "SUPPRESS": {
        "id": "Suppress",
        "tier": "A",
        "builds": [
          "any"
        ],
        "syn": [
          "weak",
          "damage",
          "innate"
        ],
        "anti": [],
        "notes": "Innate. Deal 11 damage. Apply 3 Weak. Exhaust. Ancient card — always in opening hand, guaranteed 3 Weak turn 1 plus solid damage. Exhausts so never clogs deck. 3 Weak is a powerful debuff that pairs with Tracking for double damage.",
        "mech": [
          "damage",
          "weak",
          "innate",
          "exhaust"
        ],
        "role": "generator"
      },
      "WRAITH_FORM": {
        "id": "Wraith Form",
        "tier": "S",
        "builds": [
          "any"
        ],
        "syn": [
          "intangible",
          "survival"
        ],
        "anti": [
          "dexterity",
          "block"
        ],
        "notes": "Gain 2 Intangible. At the start of your turn, lose 1 Dexterity. Intangible reduces ALL damage to 1 for 2 turns — effectively immune. Downside: lose Dex each turn, so block scales down. Play late in combat or with no Footwork investment. Game-winning in boss fights.",
        "mech": [
          "intangible",
          "dexterity_loss",
          "survival"
        ],
        "role": "engine"
      },
      "NEUTRALIZE": {
        "id": "Neutralize",
        "tier": "D",
        "builds": [
          "any"
        ],
        "syn": [
          "weak",
          "damage"
        ],
        "anti": [],
        "notes": "Deal 3 damage. Apply 1 Weak. Basic starter card — low damage, single Weak stack. Only useful very early Act 1 as a debuff source. Remove once better Weak options like Leg Sweep or Malaise appear.",
        "mech": [
          "damage",
          "weak"
        ],
        "role": "generator"
      },
      "HIDDEN_DAGGERS": {
        "id": "Hidden Daggers",
        "tier": "C",
        "builds": [
          "shiv",
          "sly"
        ],
        "syn": [
          "shiv",
          "sly",
          "discard"
        ],
        "anti": [],
        "notes": "Discard 2 cards. Add 2 Shivs into your Hand. Discards 2 cards triggering Sly effects for free AND generates 2 Shivs. Core Shiv+Sly hybrid card.",
        "mech": [
          "discard",
          "shiv_generator",
          "sly_trigger"
        ],
        "role": "generator"
      },
      "MEMENTO_MORI": {
        "id": "Memento Mori",
        "tier": "C",
        "builds": [
          "sly"
        ],
        "syn": [
          "sly",
          "discard",
          "damage"
        ],
        "anti": [
          "poison",
          "shiv"
        ],
        "notes": "Deal 8 damage. Deals 4 additional damage for each card discarded this turn. In a Sly turn with 5 discards = 28 total damage for 1 energy. Scales with discard volume.",
        "mech": [
          "damage",
          "per_discard_payoff"
        ],
        "role": "payoff"
      },
      "OUTBREAK": {
        "id": "Outbreak",
        "tier": "C",
        "builds": [
          "poison"
        ],
        "syn": [
          "poison",
          "aoe"
        ],
        "anti": [
          "sly",
          "shiv"
        ],
        "notes": "Every 3 times you apply Poison, deal 11 damage to ALL enemies. Passive AoE trigger in Poison builds. With Noxious Fumes + Envenom applying stacks constantly, fires multiple times per fight.",
        "mech": [
          "poison",
          "aoe",
          "passive",
          "conditional"
        ],
        "role": "payoff"
      },
      "PHANTOM_BLADES": {
        "id": "Phantom Blades",
        "tier": "D",
        "builds": [
          "shiv"
        ],
        "syn": [
          "shiv",
          "shiv_synergy"
        ],
        "anti": [],
        "notes": "Shivs gain Retain. The first Shiv you play each turn deals 9 additional damage. Retained Shivs persist between turns and first Shiv hits much harder. Niche — requires established Shiv engine.",
        "mech": [
          "shiv_synergy",
          "retain",
          "damage_boost"
        ],
        "role": "engine"
      },
      "PINPOINT": {
        "id": "Pinpoint",
        "tier": "A",
        "builds": [
          "sly",
          "shiv",
          "any"
        ],
        "syn": [
          "sly",
          "damage",
          "skills_in_hand"
        ],
        "anti": [],
        "notes": "Deal 17 damage. Costs 1 less for each Skill played this turn. After 3 Skills played costs 0 for 17 damage. In Sly turns playing many Skills this can be free repeatedly.",
        "mech": [
          "damage",
          "cost_reduction",
          "conditional"
        ],
        "role": "payoff"
      },
      "POUNCE": {
        "id": "Pounce",
        "tier": "C",
        "builds": [
          "sly",
          "any"
        ],
        "syn": [
          "sly",
          "damage",
          "energy"
        ],
        "anti": [],
        "notes": "Deal 12 damage. The next Skill you play costs 0. 12 damage plus makes next Skill free — enables a free Burst, Noxious Fumes, or Calculated Gamble. Solid combo enabler.",
        "mech": [
          "damage",
          "cost_reduction",
          "combo_enabler"
        ],
        "role": "generator"
      },
      "PRECISE_CUT": {
        "id": "Precise Cut",
        "tier": "B",
        "builds": [
          "sly",
          "shiv"
        ],
        "syn": [
          "sly",
          "discard",
          "damage"
        ],
        "anti": [],
        "notes": "Deal 13 damage. Deals 2 less damage for each other card in your Hand. Best after a big Sly discard turn with few cards remaining — 13 damage for 1 energy. Sequence after Calculated Gamble for full value.",
        "mech": [
          "damage",
          "per_hand_scaling",
          "conditional"
        ],
        "role": "payoff"
      },
      "SPEEDSTER": {
        "id": "Speedster",
        "tier": "C",
        "builds": [
          "sly",
          "any"
        ],
        "syn": [
          "draw",
          "aoe",
          "damage",
          "sly"
        ],
        "anti": [],
        "notes": "Whenever you draw a card during your turn, deal 2 damage to ALL enemies. Silent draws constantly — Acrobatics draws 3 (6 AoE), Expertise draws 4+ (8+ AoE). In full draw turns this is massive passive AoE.",
        "mech": [
          "passive",
          "aoe",
          "per_draw_payoff"
        ],
        "role": "engine"
      },
      "STRANGLE": {
        "id": "Strangle",
        "tier": "C",
        "builds": [
          "sly",
          "any"
        ],
        "syn": [
          "sly",
          "damage",
          "scaling"
        ],
        "anti": [],
        "notes": "Deal 8 damage. Whenever you play a card this turn, the enemy loses 2 HP. HP loss bypasses Block. In a Sly turn playing 8 cards = 16 HP drain + 8 damage = 24 total ignoring armor.",
        "mech": [
          "damage",
          "hp_drain",
          "per_card_payoff",
          "block_bypass"
        ],
        "role": "payoff"
      },
      "UP_MY_SLEEVE": {
        "id": "Up My Sleeve",
        "tier": "C",
        "builds": [
          "shiv"
        ],
        "syn": [
          "shiv",
          "shiv_synergy",
          "scaling"
        ],
        "anti": [
          "poison",
          "sly"
        ],
        "notes": "Add 3 Shivs into your Hand. Reduce this card's cost by 1. Generates 3 Shivs and gets cheaper every cast — eventually free. No exhaust unlike Blade Dance, so reusable every turn.",
        "mech": [
          "shiv_generator",
          "cost_reduction",
          "scaling"
        ],
        "role": "generator"
      },
      "THE_HUNT": {
        "id": "The Hunt",
        "tier": "S",
        "builds": [
          "any"
        ],
        "syn": [
          "damage",
          "card_reward"
        ],
        "anti": [],
        "notes": "Deal 10 damage. If Fatal, gain an additional card reward. Exhaust. killing an enemy mid-combat gives an extra card reward. With Silent's multiple attacks per turn, landing kills is consistent. Exhausts so no clutter.",
        "mech": [
          "damage",
          "on_kill_reward",
          "exhaust"
        ],
        "role": "payoff"
      },
      "AFTERIMAGE": {
        "id": "Afterimage",
        "tier": "A",
        "builds": [
          "shiv",
          "sly",
          "any"
        ],
        "syn": [
          "shiv",
          "sly",
          "block",
          "scaling"
        ],
        "anti": [],
        "notes": "Whenever you play a card, gain 1 Block. Passive block engine in any build — in Shiv spam turns playing 10 cards = 10 free Block. In Sly chains each triggered Sly card also procs Afterimage. Universal engine.",
        "mech": [
          "block",
          "passive",
          "per_card_payoff"
        ],
        "role": "engine"
      }
    },
    "defect": {
      "ECHO_FORM": {
        "id": "Echo Form",
        "tier": "S",
        "builds": [
          "any"
        ],
        "syn": [
          "orb",
          "scaling",
          "focus"
        ],
        "anti": [],
        "notes": "Best power in the game. Plays first card twice every turn. Always take.",
        "mech": [
          "card_doubler",
          "permanent_scaling"
        ],
        "role": "engine"
      },
      "DEFRAGMENT": {
        "id": "Defragment",
        "tier": "S",
        "builds": [
          "orb"
        ],
        "syn": [
          "orb",
          "focus",
          "scaling"
        ],
        "anti": [
          "claw"
        ],
        "notes": "Permanent Focus. Makes every orb more powerful. Take as many as possible.",
        "mech": [
          "focus",
          "permanent_scaling"
        ],
        "role": "engine"
      },
      "ALL_FOR_ONE": {
        "id": "All for One",
        "tier": "C",
        "builds": [
          "claw"
        ],
        "syn": [
          "zero_cost",
          "claw",
          "scaling"
        ],
        "anti": [
          "orb",
          "focus"
        ],
        "notes": "Plays all 0-cost from discard pile. Cornerstone of Claw builds. One card = full combo turn.",
        "mech": [
          "zero_cost",
          "claw_payoff",
          "combo_enabler"
        ],
        "role": "engine"
      },
      "CLAW": {
        "id": "Claw",
        "tier": "D",
        "builds": [
          "claw"
        ],
        "syn": [
          "zero_cost",
          "claw",
          "scaling"
        ],
        "anti": [
          "orb",
          "focus"
        ],
        "notes": "0-cost, gains +2 per Claw played. Core of Claw build. Stack as many as possible.",
        "mech": [
          "zero_cost",
          "claw",
          "scaling"
        ],
        "role": "generator"
      },
      "BIASED_COGNITION": {
        "id": "Biased Cognition",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "syn": [
          "orb",
          "focus",
          "scaling"
        ],
        "anti": [],
        "notes": "Gain 4 Focus. Each turn, lose 1 Focus. B-tier — enormous immediate Focus boost (4 Focus = +4 to all Orb effects). Decays 1 per turn but still potent. With Loop maintaining orbs, still very strong.",
        "mech": [
          "focus",
          "passive",
          "scaling"
        ],
        "role": "engine"
      },
      "UPROAR": {
        "id": "Uproar",
        "tier": "D",
        "builds": [
          "any"
        ],
        "syn": [
          "damage",
          "scaling"
        ],
        "anti": [],
        "notes": "Deal 5 twice, play random attack from draw pile. Often chains into more attacks. Highlighted by multiple guides.",
        "mech": [
          "damage",
          "chain"
        ],
        "role": "payoff"
      },
      "COOLHEADED": {
        "id": "Coolheaded",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "syn": [
          "frost",
          "orb",
          "draw",
          "block"
        ],
        "anti": [],
        "notes": "Channel frost + draw. Upgraded draws 2. Strong in any Defect deck.",
        "mech": [
          "frost",
          "draw",
          "orb_channel"
        ],
        "role": "generator"
      },
      "BARRAGE": {
        "id": "Barrage",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "syn": [
          "orb",
          "damage",
          "multi_hit"
        ],
        "anti": [],
        "notes": "Hits per orb slot. More slots = more hits. Strong in focus builds.",
        "mech": [
          "damage",
          "multi_hit",
          "orb_payoff"
        ],
        "role": "payoff"
      },
      "BALL_LIGHTNING": {
        "id": "Ball Lightning",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "syn": [
          "lightning",
          "orb"
        ],
        "anti": [],
        "notes": "Channel lightning + damage. Core of lightning builds.",
        "mech": [
          "lightning",
          "orb_channel",
          "damage"
        ],
        "role": "generator"
      },
      "COLD_SNAP": {
        "id": "Cold Snap",
        "tier": "C",
        "builds": [
          "orb"
        ],
        "syn": [
          "frost",
          "orb",
          "block"
        ],
        "anti": [],
        "notes": "Channel frost + damage. Core of frost/block builds.",
        "mech": [
          "frost",
          "orb_channel",
          "damage"
        ],
        "role": "generator"
      },
      "GLACIER": {
        "id": "Glacier",
        "tier": "S",
        "builds": [
          "orb"
        ],
        "syn": [
          "frost",
          "orb",
          "block"
        ],
        "anti": [],
        "notes": "Channel 2 Frost + block. Excellent defensive orb card.",
        "mech": [
          "frost",
          "orb_channel",
          "block"
        ],
        "role": "generator"
      },
      "DARKNESS": {
        "id": "Darkness",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "syn": [
          "dark",
          "orb",
          "scaling"
        ],
        "anti": [],
        "notes": "Channel dark + upgrade it. Dark orbs accumulate massive damage.",
        "mech": [
          "dark",
          "orb_channel",
          "scaling"
        ],
        "role": "generator"
      },
      "CAPACITOR": {
        "id": "Capacitor",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "syn": [
          "orb",
          "focus",
          "scaling"
        ],
        "anti": [
          "claw"
        ],
        "notes": "More orb slots. More passive effects per turn. Pairs great with Focus.",
        "mech": [
          "orb_slots",
          "scaling"
        ],
        "role": "generator"
      },
      "COMPILE_DRIVER": {
        "id": "Compile Driver",
        "tier": "B",
        "builds": [
          "claw",
          "orb"
        ],
        "syn": [
          "zero_cost",
          "claw",
          "draw"
        ],
        "anti": [],
        "notes": "Damage + draw cards per orb type. Key draw engine for both builds.",
        "mech": [
          "draw",
          "damage"
        ],
        "role": "payoff"
      },
      "SCRAPE": {
        "id": "Scrape",
        "tier": "C",
        "builds": [
          "claw"
        ],
        "syn": [
          "zero_cost",
          "claw",
          "draw"
        ],
        "anti": [
          "orb"
        ],
        "notes": "Draw cards and discard non-attacks. Cycling for claw builds.",
        "mech": [
          "draw",
          "discard"
        ],
        "role": "generator"
      },
      "GO_FOR_THE_EYES": {
        "id": "Go for the Eyes",
        "tier": "B",
        "builds": [
          "claw",
          "any"
        ],
        "syn": [
          "zero_cost",
          "claw",
          "weak"
        ],
        "anti": [
          "orb"
        ],
        "notes": "0-cost weak application. Core of claw builds.",
        "mech": [
          "zero_cost",
          "weak",
          "claw"
        ],
        "role": "generator"
      },
      "FTL": {
        "id": "FTL",
        "tier": "B",
        "builds": [
          "claw"
        ],
        "syn": [
          "zero_cost",
          "claw",
          "draw"
        ],
        "anti": [
          "orb"
        ],
        "notes": "0-cost attack that draws. Essential for cycling in claw builds.",
        "mech": [
          "zero_cost",
          "draw",
          "claw"
        ],
        "role": "generator"
      },
      "MULTICAST": {
        "id": "Multi-Cast",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "syn": [
          "orb",
          "evoke",
          "scaling"
        ],
        "anti": [],
        "notes": "Evoke orbs multiple times. Massive damage with Dark or Lightning orbs.",
        "mech": [
          "evoke",
          "orb_payoff"
        ],
        "role": "payoff"
      },
      "DUALCAST": {
        "id": "Dualcast",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "syn": [
          "orb",
          "evoke",
          "lightning"
        ],
        "anti": [],
        "notes": "Evoke first orb twice. Great for Dark orb payoffs.",
        "mech": [
          "evoke",
          "orb_payoff"
        ],
        "role": "payoff"
      },
      "SUPERCRITICAL": {
        "id": "Supercritical",
        "tier": "S",
        "builds": [
          "orb"
        ],
        "syn": [
          "focus",
          "orb",
          "scaling"
        ],
        "anti": [],
        "notes": "2 Focus burst for big damage turns.",
        "mech": [
          "focus",
          "scaling"
        ],
        "role": "generator"
      },
      "BUFFER": {
        "id": "Buffer",
        "tier": "A",
        "builds": [
          "orb",
          "any"
        ],
        "syn": [
          "block",
          "scaling"
        ],
        "anti": [],
        "notes": "Prevent HP loss once. Strong defensive option.",
        "mech": [
          "block",
          "damage_prevention"
        ],
        "role": "payoff"
      },
      "REBOUND": {
        "id": "Rebound",
        "tier": "B",
        "builds": [
          "orb",
          "any"
        ],
        "syn": [
          "orb",
          "scaling"
        ],
        "anti": [],
        "notes": "Puts played card on top of draw. Useful for cycling key cards.",
        "mech": [
          "card_retrieve"
        ],
        "role": "generator"
      },
      "STORM": {
        "id": "Storm",
        "tier": "C",
        "builds": [
          "orb"
        ],
        "syn": [
          "orb",
          "lightning",
          "power"
        ],
        "anti": [],
        "notes": "Whenever you play a Power, Channel 1 Lightning. C-tier — generates Lightning passively for each Power. In Power-heavy builds, good Lightning generation.",
        "mech": [
          "orb_channel",
          "passive",
          "lightning"
        ],
        "role": "engine"
      },
      "SKIM": {
        "id": "Skim",
        "tier": "S",
        "builds": [
          "claw",
          "any"
        ],
        "syn": [
          "draw",
          "claw"
        ],
        "anti": [],
        "notes": "Pure draw. Essential in Claw builds where your cards are cheap but you need more of them in hand.",
        "mech": [
          "draw"
        ],
        "role": "generator"
      },
      "TURBO": {
        "id": "TURBO",
        "tier": "B",
        "builds": [
          "claw",
          "any"
        ],
        "syn": [
          "zero_cost",
          "energy_gain"
        ],
        "anti": [],
        "notes": "2 energy + status to discard. Good energy gen.",
        "mech": [
          "energy_gain"
        ],
        "role": "generator"
      },
      "METEOR_STRIKE": {
        "id": "Meteor Strike",
        "tier": "C",
        "builds": [
          "orb"
        ],
        "syn": [
          "orb",
          "damage",
          "scaling"
        ],
        "anti": [],
        "notes": "Huge damage + 3 plasma orbs.",
        "mech": [
          "damage",
          "orb_channel",
          "plasma"
        ],
        "role": "payoff"
      },
      "ZAP": {
        "id": "Zap",
        "tier": "D",
        "builds": [
          "orb"
        ],
        "syn": [
          "lightning",
          "orb"
        ],
        "anti": [],
        "notes": "Basic lightning channel. Early filler.",
        "mech": [
          "lightning",
          "orb_channel"
        ],
        "role": "generator"
      },
      "STACK": {
        "id": "Stack",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "block",
          "draw"
        ],
        "anti": [],
        "notes": "Block equal to cards in discard. Situational.",
        "mech": [
          "block",
          "conditional"
        ],
        "role": "generator"
      },
      "GENETIC_ALGORITHM": {
        "id": "Genetic Algorithm",
        "tier": "S",
        "builds": [
          "any"
        ],
        "syn": [
          "block",
          "scaling"
        ],
        "anti": [],
        "notes": "Block that grows per upgrade. Interesting scaling.",
        "mech": [
          "block",
          "scaling"
        ],
        "role": "generator"
      },
      "LOOP": {
        "id": "Loop",
        "tier": "C",
        "builds": [
          "orb"
        ],
        "syn": [
          "orb",
          "scaling"
        ],
        "anti": [],
        "notes": "Re-channel leftmost orb. Useful for keeping good orbs.",
        "mech": [
          "orb_channel"
        ],
        "role": "generator"
      },
      "HYPER_BEAM": {
        "id": "Hyperbeam",
        "tier": "D",
        "builds": [
          "any"
        ],
        "syn": [
          "damage",
          "aoe"
        ],
        "anti": [
          "frost",
          "focus",
          "orb"
        ],
        "notes": "Massive AoE but resets Focus to 0. Dangerous in orb builds.",
        "mech": [
          "damage",
          "aoe"
        ],
        "role": "payoff"
      },
      "BOOT_SEQUENCE": {
        "id": "Boot Sequence",
        "tier": "B",
        "builds": [
          "any"
        ],
        "syn": [
          "block"
        ],
        "anti": [],
        "notes": "Innate block. Solid early.",
        "mech": [
          "block",
          "innate"
        ],
        "role": "payoff"
      },
      "STRIKE": {
        "id": "Strike",
        "tier": "D",
        "builds": [],
        "syn": [
          "damage"
        ],
        "anti": [],
        "notes": "Starter. Replace.",
        "mech": [
          "damage"
        ]
      },
      "DEFEND": {
        "id": "Defend",
        "tier": "D",
        "builds": [],
        "syn": [
          "block"
        ],
        "anti": [],
        "notes": "Starter. Replace.",
        "mech": [
          "block"
        ]
      },
      "FERAL": {
        "id": "Feral",
        "tier": "C",
        "builds": [
          "claw"
        ],
        "syn": [
          "zero_cost",
          "claw",
          "scaling"
        ],
        "anti": [
          "orb",
          "focus"
        ],
        "notes": "Essentially Echo Form for 0-cost cards. Cheaper to set up than Echo Form in Claw decks.",
        "mech": [
          "zero_cost",
          "claw",
          "card_doubler"
        ],
        "role": "engine"
      },
      "HOLOGRAM": {
        "id": "Hologram",
        "tier": "A",
        "builds": [
          "claw"
        ],
        "syn": [
          "zero_cost",
          "claw",
          "draw"
        ],
        "anti": [],
        "notes": "Puts a card back in hand. Upgrade removes Exhaust. Returns Claw, Scrape, or All For One.",
        "mech": [
          "card_retrieve",
          "zero_cost"
        ],
        "role": "generator"
      },
      "MOMENTUM_STRIKE": {
        "id": "Momentum Strike",
        "tier": "C",
        "builds": [
          "claw"
        ],
        "syn": [
          "zero_cost",
          "claw",
          "damage"
        ],
        "anti": [],
        "notes": "Can be reduced to 0-cost. Synergizes with other 0-cost spam.",
        "mech": [
          "damage",
          "cost_reduction",
          "zero_cost"
        ],
        "role": "generator"
      },
      "BEAM_CELL": {
        "id": "Beam Cell",
        "tier": "C",
        "builds": [
          "claw",
          "orb"
        ],
        "syn": [
          "zero_cost",
          "claw",
          "vulnerable"
        ],
        "anti": [],
        "notes": "0-cost Vulnerable applicator. Core in Claw decks for easy Vulnerable.",
        "mech": [
          "vulnerable",
          "zero_cost",
          "claw"
        ],
        "role": "generator"
      },
      "MACHINE_LEARNING": {
        "id": "Machine Learning",
        "tier": "A",
        "builds": [
          "claw",
          "orb"
        ],
        "syn": [
          "draw",
          "scaling"
        ],
        "anti": [],
        "notes": "Draw an extra card each turn. With All For One becomes somewhat redundant.",
        "mech": [
          "draw",
          "passive"
        ],
        "role": "generator"
      },
      "CHILL": {
        "id": "Chill",
        "tier": "A",
        "builds": [
          "orb"
        ],
        "syn": [
          "frost",
          "orb",
          "block"
        ],
        "anti": [],
        "notes": "Channel 1 Frost orb per enemy. Great AoE frost generation.",
        "mech": [
          "frost",
          "orb_channel",
          "aoe"
        ],
        "role": "generator"
      },
      "WHITE_NOISE": {
        "id": "White Noise",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "syn": [
          "orb",
          "scaling"
        ],
        "anti": [],
        "notes": "Add a random Power to your hand. Useful for finding Defragment or Echo Form.",
        "mech": [
          "draw"
        ],
        "role": "generator"
      },
      "BOOST_AWAY": {
        "id": "Boost Away",
        "tier": "D",
        "builds": [],
        "role": "generator",
        "syn": [
          "block"
        ],
        "anti": [],
        "mech": [
          "block",
          "status_gen"
        ],
        "notes": "Gain 6 Block. Add a Dazed into Discard. D-tier — the Dazed pollutes your deck. Only useful in Status builds."
      },
      "CHARGE_BATTERY": {
        "id": "Charge Battery",
        "tier": "B",
        "builds": [
          "orb",
          "any"
        ],
        "role": "generator",
        "syn": [
          "block",
          "energy_gain"
        ],
        "anti": [],
        "mech": [
          "block",
          "energy_gain"
        ],
        "notes": "Gain 7 Block. Next turn, gain Energy. B-tier — reliable Block plus delayed Energy. One of the best defensive commons."
      },
      "FOCUSED_STRIKE": {
        "id": "Focused Strike",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "role": "generator",
        "syn": [
          "orb",
          "focus"
        ],
        "anti": [],
        "mech": [
          "damage",
          "focus"
        ],
        "notes": "Deal 9 damage. Gain 1 Focus this turn. B-tier — damage plus temporary Focus buff. Great early when your orbs are weak."
      },
      "GUNK_UP": {
        "id": "Gunk Up",
        "tier": "C",
        "builds": [
          "status"
        ],
        "role": "generator",
        "syn": [
          "status",
          "status_synergy"
        ],
        "anti": [],
        "mech": [
          "damage",
          "multi_hit",
          "status_gen"
        ],
        "notes": "Deal 4 damage 3 times. Add a Slimed into Discard. C-tier — multi-hit is nice but Slimed clogs deck unless you have Status synergy."
      },
      "HOTFIX": {
        "id": "Hotfix",
        "tier": "C",
        "builds": [
          "orb"
        ],
        "role": "generator",
        "syn": [
          "orb",
          "focus"
        ],
        "anti": [],
        "mech": [
          "focus"
        ],
        "notes": "Gain 2 Focus this turn. C-tier — temporary Focus only lasts 1 turn. Better than nothing early, replaced by Defragment and Synchronize."
      },
      "LEAP": {
        "id": "Leap",
        "tier": "B",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "block"
        ],
        "anti": [],
        "mech": [
          "block"
        ],
        "notes": "Gain 9 Block. B-tier — straightforward 1-Energy block. Reliable defensive card that fits anywhere."
      },
      "LIGHTNING_ROD": {
        "id": "Lightning Rod",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "role": "generator",
        "syn": [
          "orb",
          "lightning",
          "block"
        ],
        "anti": [],
        "mech": [
          "block",
          "orb_channel"
        ],
        "notes": "Gain 4 Block. Channel 1 Lightning at start of next 2 turns. B-tier — better Defend that also builds Lightning orb count passively."
      },
      "SWEEPING_BEAM": {
        "id": "Sweeping Beam",
        "tier": "C",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "aoe",
          "draw"
        ],
        "anti": [],
        "mech": [
          "aoe",
          "draw"
        ],
        "notes": "Deal 6 AoE damage. Draw 1 card. C-tier — AoE damage plus draw is versatile but low damage numbers."
      },
      "BULK_UP": {
        "id": "Bulk Up",
        "tier": "C",
        "builds": [],
        "role": "generator",
        "syn": [
          "strength",
          "dexterity"
        ],
        "anti": [
          "orb"
        ],
        "mech": [
          "strength",
          "dexterity"
        ],
        "notes": "Lose 1 Orb Slot. Gain 2 Strength and 2 Dexterity. C-tier — reduces Orb capacity which hurts most Defect builds. Only viable in Claw builds where orbs are ignored."
      },
      "CHAOS": {
        "id": "Chaos",
        "tier": "C",
        "builds": [
          "orb"
        ],
        "role": "generator",
        "syn": [
          "orb",
          "orb_channel"
        ],
        "anti": [],
        "mech": [
          "orb_channel"
        ],
        "notes": "Channel 1 random Orb. C-tier — randomness is the limiting factor. Can hit Plasma for Energy or Glass, but unreliable compared to specific channelers."
      },
      "COMPACT": {
        "id": "Compact",
        "tier": "A",
        "builds": [
          "status"
        ],
        "role": "generator",
        "syn": [
          "block",
          "status",
          "status_exhaust"
        ],
        "anti": [],
        "mech": [
          "block",
          "status_exhaust"
        ],
        "notes": "Gain 6 Block. Transform all Status cards in Hand into Fuel. A-tier — in Status builds, converts junk into valuable Fuel cards while providing Block."
      },
      "DOUBLE_ENERGY": {
        "id": "Double Energy",
        "tier": "S",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "energy_gain"
        ],
        "anti": [],
        "mech": [
          "energy_gain",
          "exhaust"
        ],
        "notes": "Double your Energy. Exhaust. S-tier — with 3 Energy, gives 6 total. With Plasma orbs giving +1, this becomes explosive. Enables enormous single-turn plays."
      },
      "ENERGY_SURGE": {
        "id": "Energy Surge",
        "tier": "C",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "energy_gain"
        ],
        "anti": [],
        "mech": [
          "energy_gain",
          "exhaust"
        ],
        "notes": "ALL players gain 2 Energy. Exhaust. C-tier — free Energy but multiplayer-oriented. Solo value is 2 Energy once per fight."
      },
      "FIGHT_THROUGH": {
        "id": "Fight Through",
        "tier": "C",
        "builds": [
          "status"
        ],
        "role": "generator",
        "syn": [
          "block",
          "status"
        ],
        "anti": [],
        "mech": [
          "block",
          "status_gen"
        ],
        "notes": "Gain 13 Block. Add 2 Wounds into Discard. C-tier — big Block but Wounds are dead cards. Only playable if you have Iteration or Flak Cannon to exploit the Status."
      },
      "FUSION": {
        "id": "Fusion",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "role": "generator",
        "syn": [
          "orb",
          "plasma",
          "energy_gain"
        ],
        "anti": [],
        "mech": [
          "orb_channel",
          "plasma"
        ],
        "notes": "Channel 1 Plasma. B-tier — Plasma passively gives Energy each turn. One Fusion in the right spot enables enormous extra plays every turn thereafter."
      },
      "GLASSWORK": {
        "id": "Glasswork",
        "tier": "A",
        "builds": [
          "orb"
        ],
        "role": "generator",
        "syn": [
          "orb",
          "glass",
          "aoe"
        ],
        "anti": [],
        "mech": [
          "block",
          "orb_channel",
          "glass"
        ],
        "notes": "Gain 5 Block. Channel 1 Glass. A-tier — Glass orb deals 4 AoE each turn and evokes for 8 AoE. Glasswork gives both Block and the powerful Glass passive."
      },
      "HAILSTORM": {
        "id": "Hailstorm",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "role": "payoff",
        "syn": [
          "orb",
          "frost",
          "aoe"
        ],
        "anti": [],
        "mech": [
          "aoe",
          "passive",
          "frost"
        ],
        "notes": "At end of your turn, if you have Frost, deal 6 AoE. B-tier — free 6 AoE every turn you have any Frost orb. With Glacier and Chill, nearly always active."
      },
      "ITERATION": {
        "id": "Iteration",
        "tier": "C",
        "builds": [
          "status"
        ],
        "role": "engine",
        "syn": [
          "status",
          "draw"
        ],
        "anti": [],
        "mech": [
          "draw",
          "passive",
          "status_synergy"
        ],
        "notes": "First time you draw a Status card each turn, draw 2 cards. C-tier — transforms Status cards from deck pollutants into draw triggers. Core Status engine card."
      },
      "NULL": {
        "id": "Null",
        "tier": "B",
        "builds": [
          "orb",
          "any"
        ],
        "role": "generator",
        "syn": [
          "orb",
          "dark",
          "weak"
        ],
        "anti": [],
        "mech": [
          "damage",
          "weak",
          "orb_channel",
          "dark"
        ],
        "notes": "Deal 10 damage. Apply 2 Weak. Channel 1 Dark. B-tier — damage, debuff, and Dark orb in one card. Dark orbs grow massive with Loop or Consuming Shadow."
      },
      "OVERCLOCK": {
        "id": "Overclock",
        "tier": "C",
        "builds": [
          "claw",
          "status"
        ],
        "role": "generator",
        "syn": [
          "draw",
          "status"
        ],
        "anti": [],
        "mech": [
          "draw",
          "status_gen"
        ],
        "notes": "Draw 2 cards. Add a Burn into Discard. C-tier — great draw but adds Burn. In Claw or Status builds the Burn has upside. Otherwise net negative."
      },
      "REFRACT": {
        "id": "Refract",
        "tier": "C",
        "builds": [
          "orb"
        ],
        "role": "generator",
        "syn": [
          "orb",
          "glass"
        ],
        "anti": [],
        "mech": [
          "damage",
          "multi_hit",
          "orb_channel",
          "glass"
        ],
        "notes": "Deal 9 damage twice. Channel 2 Glass. C-tier — multi-hit with Glass orb generation. Glass orbs deal AoE passively, making this solid in Glass builds."
      },
      "RIP_AND_TEAR": {
        "id": "Rip and Tear",
        "tier": "B",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "damage",
          "multi_hit"
        ],
        "anti": [],
        "mech": [
          "damage",
          "multi_hit"
        ],
        "notes": "Deal 7 damage to a random enemy twice. B-tier — multi-hit at decent value. Hits through Blur effects. Solid filler in any build."
      },
      "ROCKET_PUNCH": {
        "id": "Rocket Punch",
        "tier": "C",
        "builds": [
          "status"
        ],
        "role": "payoff",
        "syn": [
          "status",
          "damage",
          "draw"
        ],
        "anti": [],
        "mech": [
          "damage",
          "draw",
          "cost_reduce",
          "status_synergy"
        ],
        "notes": "Deal 13 damage. Draw 1 card. Reduces to 0 when a Status is created this turn. C-tier — in Status builds where Gunk Up, TURBO, Boost Away generate Status, this becomes free damage plus draw."
      },
      "SCAVENGE": {
        "id": "Scavenge",
        "tier": "B",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "exhaust",
          "energy_gain"
        ],
        "anti": [],
        "mech": [
          "exhaust",
          "energy_gain"
        ],
        "notes": "Exhaust a card. Next turn, gain 2 Energy. B-tier — removes dead cards AND gains Energy. Deck thinning plus Energy generation in one card."
      },
      "SHADOW_SHIELD": {
        "id": "Shadow Shield",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "role": "generator",
        "syn": [
          "orb",
          "dark",
          "block"
        ],
        "anti": [],
        "mech": [
          "block",
          "orb_channel",
          "dark"
        ],
        "notes": "Gain 11 Block. Channel 1 Dark. B-tier — above-rate Block plus Dark orb. Dark passively grows damage then deals it all at once."
      },
      "SMOKESTACK": {
        "id": "Smokestack",
        "tier": "C",
        "builds": [
          "status"
        ],
        "role": "engine",
        "syn": [
          "status",
          "damage",
          "aoe"
        ],
        "anti": [],
        "mech": [
          "aoe",
          "passive",
          "status_synergy"
        ],
        "notes": "Whenever you create a Status card, deal 5 AoE. C-tier — in Status builds with TURBO, Boost Away, Gunk Up, Overclock generating Status every turn, Smokestack deals 5 AoE per Status creation."
      },
      "SUBROUTINE": {
        "id": "Subroutine",
        "tier": "C",
        "builds": [
          "orb"
        ],
        "role": "engine",
        "syn": [
          "orb",
          "energy_gain",
          "power"
        ],
        "anti": [],
        "mech": [
          "energy_gain",
          "passive"
        ],
        "notes": "Whenever you play a Power, gain Energy. C-tier — free Energy per Power card. Scales well if you stack multiple Powers, but requires build-around."
      },
      "SUNDER": {
        "id": "Sunder",
        "tier": "B",
        "builds": [
          "any"
        ],
        "role": "payoff",
        "syn": [
          "damage",
          "energy_gain"
        ],
        "anti": [],
        "mech": [
          "damage",
          "energy_gain"
        ],
        "notes": "Deal 24 damage. If this kills an enemy, gain 3 Energy. B-tier — massive single-target damage with huge Energy refund on kill. Great for elites."
      },
      "SYNCHRONIZE": {
        "id": "Synchronize",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "role": "generator",
        "syn": [
          "orb",
          "focus"
        ],
        "anti": [],
        "mech": [
          "focus",
          "exhaust"
        ],
        "notes": "Gain 2 Focus per unique Orb you have. Exhaust. B-tier — with 3+ unique orbs (Lightning, Frost, Dark), gives 6+ temporary Focus for one massive turn. Exhaust is fine."
      },
      "SYNTHESIS": {
        "id": "Synthesis",
        "tier": "C",
        "builds": [
          "orb"
        ],
        "role": "generator",
        "syn": [
          "orb",
          "power",
          "damage"
        ],
        "anti": [],
        "mech": [
          "damage",
          "cost_reduce"
        ],
        "notes": "Deal 12 damage. Next Power costs 0. C-tier — enables free Defragment, free Machine Learning, or free Buffer. Decent enabler but only valuable if you have good targets."
      },
      "TEMPEST": {
        "id": "Tempest",
        "tier": "D",
        "builds": [
          "orb"
        ],
        "role": "generator",
        "syn": [
          "orb",
          "lightning"
        ],
        "anti": [],
        "mech": [
          "orb_channel",
          "lightning",
          "x_cost"
        ],
        "notes": "Channel X Lightning. D-tier — scales with Energy spent but Lightning passive damage is only 3 per orb. Requires massive Focus to be worthwhile."
      },
      "TESLA_COIL": {
        "id": "Tesla Coil",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "role": "payoff",
        "syn": [
          "orb",
          "lightning"
        ],
        "anti": [],
        "mech": [
          "damage",
          "lightning",
          "evoke"
        ],
        "notes": "Deal 3 damage. Trigger all Lightning against the enemy. B-tier — with Focus and multiple Lightning orbs, this deals massive concentrated damage. Lightning Evoke normally hits random — this focuses all on one target."
      },
      "THUNDER": {
        "id": "Thunder",
        "tier": "C",
        "builds": [
          "orb"
        ],
        "role": "engine",
        "syn": [
          "orb",
          "lightning"
        ],
        "anti": [],
        "mech": [
          "aoe",
          "passive",
          "lightning"
        ],
        "notes": "Whenever you Evoke Lightning, deal 6 AoE. C-tier — converts Lightning Evoke (normally single target) into AoE. Better in multi-enemy fights."
      },
      "ADAPTIVE_STRIKE": {
        "id": "Adaptive Strike",
        "tier": "C",
        "builds": [
          "claw"
        ],
        "role": "payoff",
        "syn": [
          "claw",
          "zero_cost",
          "scaling"
        ],
        "anti": [],
        "mech": [
          "damage",
          "zero_cost"
        ],
        "notes": "Deal 18 damage. Add a 0-cost copy to Discard. C-tier — self-replicating 0-cost attack. In Claw builds gives more 0-cost cards for All for One and Feral. Weaker than actual Claw scaling though."
      },
      "CONSUMING_SHADOW": {
        "id": "Consuming Shadow",
        "tier": "A",
        "builds": [
          "orb"
        ],
        "role": "engine",
        "syn": [
          "orb",
          "dark",
          "evoke"
        ],
        "anti": [],
        "mech": [
          "orb_channel",
          "dark",
          "passive",
          "evoke"
        ],
        "notes": "Channel 2 Dark. At end of turn, Evoke leftmost Orb. A-tier — passive Evoke every turn plus 2 Dark Orbs. Dark orbs grow huge with Loop or Darkness. Auto-evokes for recurring damage."
      },
      "COOLANT": {
        "id": "Coolant",
        "tier": "A",
        "builds": [
          "orb"
        ],
        "role": "engine",
        "syn": [
          "orb",
          "frost",
          "block",
          "scaling"
        ],
        "anti": [],
        "mech": [
          "block",
          "passive"
        ],
        "notes": "At start of turn, gain 2 Block per unique Orb you have. A-tier — with 3+ unique orbs, gives 6+ free Block every single turn passively. In Frost builds with many orbs, this generates enormous Block."
      },
      "CREATIVE_AI": {
        "id": "Creative AI",
        "tier": "C",
        "builds": [
          "orb"
        ],
        "role": "engine",
        "syn": [
          "orb",
          "power"
        ],
        "anti": [],
        "mech": [
          "passive",
          "power"
        ],
        "notes": "At start of turn, add a random Power to Hand. C-tier — free Power every turn but random. Can hit Defragment, Machine Learning, Buffer, or useless Powers. Too random for high-confidence builds."
      },
      "FLAK_CANNON": {
        "id": "Flak Cannon",
        "tier": "C",
        "builds": [
          "status"
        ],
        "role": "payoff",
        "syn": [
          "status",
          "damage",
          "exhaust"
        ],
        "anti": [],
        "mech": [
          "damage",
          "exhaust",
          "status_exhaust"
        ],
        "notes": "Exhaust all Status cards. Deal 8 damage per card Exhausted. C-tier — in Status builds with 3-5 Status cards, this deals 24-40 burst damage while cleaning the deck."
      },
      "HELIX_DRILL": {
        "id": "Helix Drill",
        "tier": "D",
        "builds": [
          "any"
        ],
        "role": "payoff",
        "syn": [
          "energy_gain",
          "damage"
        ],
        "anti": [],
        "mech": [
          "damage",
          "scaling"
        ],
        "notes": "Deal 3 damage per Energy previously spent this turn. D-tier — requires spending 4+ Energy before playing it to be worth 1 slot. Telegraphed and awkward."
      },
      "ICE_LANCE": {
        "id": "Ice Lance",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "role": "generator",
        "syn": [
          "orb",
          "frost"
        ],
        "anti": [],
        "mech": [
          "damage",
          "orb_channel",
          "frost"
        ],
        "notes": "Deal 19 damage. Channel 3 Frost. B-tier — huge damage plus 3 Frost orbs in one card. With Focus, each Frost gives 2+ Block per turn. Excellent value for 3 Energy."
      },
      "IGNITION": {
        "id": "Ignition",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [
          "plasma"
        ],
        "anti": [],
        "mech": [
          "plasma",
          "exhaust"
        ],
        "notes": "Another player Channels Plasma. Exhaust. D-tier — multiplayer-only value. No solo benefit. Avoid."
      },
      "MODDED": {
        "id": "Modded",
        "tier": "S",
        "builds": [
          "orb"
        ],
        "role": "engine",
        "syn": [
          "orb",
          "orb_slot",
          "draw"
        ],
        "anti": [],
        "mech": [
          "orb_slot",
          "draw",
          "scaling"
        ],
        "notes": "Gain 1 Orb Slot and draw 1 card. Cost increases by 1 each play. S-tier at 0 cost — free Orb Slot plus draw. Diminishes at 1+ cost but still playable at 1."
      },
      "RAINBOW": {
        "id": "Rainbow",
        "tier": "A",
        "builds": [
          "orb"
        ],
        "role": "generator",
        "syn": [
          "orb",
          "lightning",
          "frost",
          "dark"
        ],
        "anti": [],
        "mech": [
          "orb_channel",
          "exhaust"
        ],
        "notes": "Channel 1 Lightning + 1 Frost + 1 Dark. Exhaust. A-tier — fills all 3 major orb slots at once. Enables Coolant (3 unique = 6 Block/turn), Compile Driver (3 draws), and diverse passive effects."
      },
      "REBOOT": {
        "id": "Reboot",
        "tier": "A",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "draw"
        ],
        "anti": [],
        "mech": [
          "draw",
          "exhaust"
        ],
        "notes": "Shuffle ALL cards into Draw Pile. Draw 4. Exhaust. A-tier — resets draw pile when empty and draws 4. In fast Claw builds or when deck is almost exhausted, this refuels the hand entirely."
      },
      "SHATTER": {
        "id": "Shatter",
        "tier": "A",
        "builds": [
          "orb"
        ],
        "role": "payoff",
        "syn": [
          "orb",
          "evoke",
          "aoe"
        ],
        "anti": [],
        "mech": [
          "aoe",
          "evoke"
        ],
        "notes": "Deal 11 AoE damage. Evoke all Orbs. A-tier — mass Evoke plus AoE. With 3+ orbs, Evoking all deals massive damage. Glass orbs Evoke for 8 AoE each on top of the 11."
      },
      "SIGNAL_BOOST": {
        "id": "Signal Boost",
        "tier": "A",
        "builds": [
          "orb"
        ],
        "role": "engine",
        "syn": [
          "orb",
          "power",
          "scaling"
        ],
        "anti": [],
        "mech": [
          "power",
          "multiplier",
          "exhaust"
        ],
        "notes": "Next Power you play is played an extra time. Exhaust. A-tier — doubles Defragment (2 Focus), Machine Learning (2 turns of extra draw), Buffer (2 HP prevention). Signal Boost into Defragment is one of the strongest plays."
      },
      "SPINNER": {
        "id": "Spinner",
        "tier": "S",
        "builds": [
          "orb"
        ],
        "role": "engine",
        "syn": [
          "orb",
          "glass",
          "aoe",
          "scaling"
        ],
        "anti": [],
        "mech": [
          "orb_channel",
          "glass",
          "passive"
        ],
        "notes": "At start of turn, Channel 1 Glass. S-tier — free Glass Orb every single turn passively. Glass deals 4 AoE per turn then evokes for 8 AoE. Passive AoE engine that never stops."
      },
      "TRASH_TO_TREASURE": {
        "id": "Trash to Treasure",
        "tier": "C",
        "builds": [
          "status"
        ],
        "role": "engine",
        "syn": [
          "status",
          "orb",
          "orb_channel"
        ],
        "anti": [],
        "mech": [
          "orb_channel",
          "passive",
          "status_synergy"
        ],
        "notes": "Whenever you create a Status card, Channel 1 random Orb. C-tier — converts Status generation into Orb economy. Bridges Status and Orb builds."
      },
      "VOLTAIC": {
        "id": "Voltaic",
        "tier": "B",
        "builds": [
          "orb"
        ],
        "role": "payoff",
        "syn": [
          "orb",
          "lightning",
          "evoke"
        ],
        "anti": [],
        "mech": [
          "orb_channel",
          "lightning",
          "exhaust"
        ],
        "notes": "Channel Lightning equal to total Lightning Channeled this combat. Exhaust. B-tier — late in Orb builds where you've Channeled 10-20 Lightning, this floods all Orb slots with Lightning for massive passive damage the rest of the fight."
      },
      "QUADCAST": {
        "id": "Quadcast",
        "tier": "A",
        "builds": [
          "orb"
        ],
        "role": "payoff",
        "syn": [
          "orb",
          "evoke"
        ],
        "anti": [],
        "mech": [
          "evoke"
        ],
        "notes": "Evoke your rightmost Orb 4 times. A-tier — Lightning x4 = 32+ damage with Focus. Dark Orb x4 = massive single-target burst. Best Evoke payoff card for dedicated Orb builds."
      },
      "HELLO_WORLD": {
        "id": "Hello World",
        "tier": "C",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "draw"
        ],
        "anti": [],
        "mech": [
          "passive"
        ],
        "notes": "At start of turn, add a random Common card to Hand. C-tier — free card every turn but random. Event-only card."
      },
      "MULTI_CAST": {
        "id": "Multi-Cast",
        "tier": "A",
        "builds": [
          "orb"
        ],
        "syn": [
          "orb",
          "evoke",
          "focus",
          "scaling"
        ],
        "anti": [],
        "mech": [
          "evoke",
          "scaling"
        ],
        "role": "payoff",
        "notes": "Evoke your rightmost Orb X times. Great finisher with Focus — evoke a Dark Orb multiple times for massive damage. Extra Energy from Plasma orbs enables larger X values."
      }
    },
    "regent": {
      "GLOW": {
        "id": "Glow",
        "tier": "S",
        "builds": [
          "stars",
          "any"
        ],
        "syn": [
          "stellar",
          "stars",
          "draw",
          "scaling"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Gain 1 Star, draw 2 cards. The backbone common — engine without needing a rare.",
        "mech": [
          "star_gain",
          "draw"
        ],
        "role": "generator"
      },
      "BIG_BANG": {
        "id": "Big Bang",
        "tier": "S",
        "builds": [
          "stars",
          "any"
        ],
        "syn": [
          "stellar",
          "stars",
          "exhaust",
          "scaling"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Draw 1, gain 1 Star, 1 energy, Forge 5. Exhaust. Hits every Regent mechanic in one card.",
        "mech": [
          "star_gain",
          "energy_gain",
          "draw",
          "exhaust",
          "zero_cost"
        ],
        "role": "generator"
      },
      "CONVERGENCE": {
        "id": "Convergence",
        "tier": "S",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "draw",
          "scaling"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Retain your hand this turn, gain 1 Star + 1 energy next turn. Elite setup insurance.",
        "mech": [
          "retain",
          "star_gain",
          "energy_gain"
        ],
        "role": "payoff"
      },
      "VOID_FORM": {
        "id": "Void Form",
        "tier": "S",
        "builds": [
          "any"
        ],
        "syn": [
          "stellar",
          "scaling",
          "zero_cost"
        ],
        "anti": [
          "forge"
        ],
        "notes": "End turn. First 2 cards each turn cost 0 energy. Bends turn economy — one of the strongest powers.",
        "mech": [
          "zero_cost_enabler",
          "energy_gain"
        ],
        "role": "engine"
      },
      "REFLECT": {
        "id": "Reflect",
        "tier": "S",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "block",
          "damage"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Gain 17 Block. Blocked damage reflects back to attacker. Offense AND defense in one.",
        "mech": [
          "block",
          "damage",
          "counter"
        ],
        "role": "payoff"
      },
      "PARTICLE_WALL": {
        "id": "Particle Wall",
        "tier": "S",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "block",
          "zero_cost"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Gain 9 Block, card returns to hand. Zero-cost defensive anchor — never wastes a slot since it cycles back.",
        "mech": [
          "block",
          "zero_cost",
          "recyclable"
        ],
        "role": "payoff"
      },
      "BOMBARDMENT": {
        "id": "Bombardment",
        "tier": "S",
        "builds": [
          "any"
        ],
        "syn": [
          "stellar",
          "damage",
          "aoe",
          "exhaust"
        ],
        "anti": [],
        "notes": "3-cost 18 damage, plays from exhaust pile every turn. One card = 18 free damage forever.",
        "mech": [
          "damage",
          "passive",
          "exhaust"
        ],
        "role": "payoff"
      },
      "GUARDS": {
        "id": "GUARDS!!!",
        "tier": "S",
        "builds": [
          "stars",
          "any"
        ],
        "syn": [
          "exhaust",
          "damage",
          "aoe"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Transforms entire hand into Minion Sacrifices for massive AoE burst. Exhaust. Devastating finisher.",
        "mech": [
          "exhaust",
          "transform",
          "damage",
          "aoe"
        ],
        "role": "payoff"
      },
      "COMET": {
        "id": "Comet",
        "tier": "S",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "damage",
          "aoe",
          "zero_cost"
        ],
        "anti": [
          "forge"
        ],
        "notes": "0-cost 33 damage + 3 Weak + 3 Vulnerable. The payoff that ends fights once Stars online.",
        "mech": [
          "damage",
          "debuff",
          "vulnerable",
          "weak",
          "zero_cost"
        ],
        "role": "payoff"
      },
      "CHILD_OF_THE_STARS": {
        "id": "Child of the Stars",
        "tier": "S",
        "builds": [
          "stars"
        ],
        "syn": [
          "block",
          "stars",
          "star_gain",
          "scaling"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Gain 2 Block for each Star spent. Passive — every Star expenditure becomes Block. With Genesis online, Block generation is massive every turn.",
        "mech": [
          "block",
          "passive",
          "scaling"
        ],
        "role": "payoff"
      },
      "RADIATE": {
        "id": "Radiate",
        "tier": "A",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "aoe",
          "damage"
        ],
        "anti": [
          "forge"
        ],
        "notes": "0-cost: 3 damage to ALL per star gained this turn. AoE payoff card. Strong once star engine online.",
        "mech": [
          "damage",
          "aoe",
          "star_payoff",
          "zero_cost"
        ],
        "role": "payoff"
      },
      "ROYAL_GAMBLE": {
        "id": "Royal Gamble",
        "tier": "A",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "scaling"
        ],
        "anti": [
          "forge"
        ],
        "notes": "0-cost gain 9 stars, exhaust. Massive star dump for big payoff turns.",
        "mech": [
          "star_gain",
          "exhaust",
          "zero_cost"
        ],
        "role": "generator"
      },
      "GENESIS": {
        "id": "Genesis",
        "tier": "A",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "scaling"
        ],
        "anti": [
          "forge"
        ],
        "notes": "At start of turn gain 2 stars. Turns almost-enough turns into real payoff turns.",
        "mech": [
          "star_gain",
          "passive"
        ],
        "role": "engine"
      },
      "SHINING_STRIKE": {
        "id": "Shining Strike",
        "tier": "S",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "damage",
          "scaling"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Damage + 2 stars, returns to top of draw pile. Cycles for consistent star generation.",
        "mech": [
          "damage",
          "star_gain",
          "recyclable"
        ],
        "role": "generator"
      },
      "HIDDEN_CACHE": {
        "id": "Hidden Cache",
        "tier": "S",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "scaling"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Gain 1 star now, 3 stars next turn. Best setup for big Radiate turns.",
        "mech": [
          "star_gain"
        ],
        "role": "generator"
      },
      "FOREGONE_CONCLUSION": {
        "id": "Foregone Conclusion",
        "tier": "A",
        "builds": [
          "stars",
          "any"
        ],
        "syn": [
          "stellar",
          "stars",
          "draw",
          "scaling"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Next turn, put 2 cards from your Draw Pile into your Hand. S-tier setup card — guarantees you draw your win conditions on the exact turn you need them.",
        "mech": [
          "card_retrieve",
          "draw"
        ],
        "role": "engine"
      },
      "GAMMA_BLAST": {
        "id": "Gamma Blast",
        "tier": "A",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "damage",
          "zero_cost",
          "aoe"
        ],
        "anti": [
          "forge"
        ],
        "notes": "0-cost 13 damage + 2 Weak + 2 Vulnerable. Child of Stars = 6 free block. Excellent rate.",
        "mech": [
          "damage",
          "debuff",
          "zero_cost"
        ],
        "role": "payoff"
      },
      "PHOTON_CUT": {
        "id": "Photon Cut",
        "tier": "A",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "damage",
          "draw"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Damage + draw + deck manipulation. Consistently useful.",
        "mech": [
          "damage",
          "draw"
        ],
        "role": "generator"
      },
      "ALIGNMENT": {
        "id": "Alignment",
        "tier": "B",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "exhaust",
          "scaling"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Gain 2 Energy — one of the few pure Energy cards Regent has. Vital in Star-heavy builds for playing expensive payoffs.",
        "mech": [
          "energy_gain",
          "zero_cost"
        ],
        "role": "generator"
      },
      "KNOCKOUT_BLOW": {
        "id": "Knockout Blow",
        "tier": "A",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "damage"
        ],
        "anti": [
          "forge"
        ],
        "notes": "3-cost 30 damage. If kills enemy gain 5 stars. Big early damage.",
        "mech": [
          "damage",
          "star_gain",
          "conditional"
        ],
        "role": "generator"
      },
      "GLIMMER": {
        "id": "Glimmer",
        "tier": "C",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "draw",
          "scaling"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Draw 3, put 1 on top. Guarantees key cards for next turn.",
        "mech": [
          "draw",
          "deck_manipulation"
        ],
        "role": "generator"
      },
      "SEVEN_STARS": {
        "id": "Seven Stars",
        "tier": "A",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "aoe",
          "damage"
        ],
        "anti": [
          "forge"
        ],
        "notes": "0-cost 7 damage × 7 to all enemies. Big AoE payoff.",
        "mech": [
          "damage",
          "aoe",
          "zero_cost"
        ],
        "role": "payoff"
      },
      "DECISIONS_DECISIONS": {
        "id": "Decisions, Decisions",
        "tier": "S",
        "builds": [
          "stars",
          "forge"
        ],
        "syn": [
          "stars",
          "forge",
          "draw",
          "exhaust"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Draw 3 then triple any Skill. Royal Gamble → 27 Stars. Reflect → 51 Block. The Smith → Forge 90. One of the strongest multiplier cards.",
        "mech": [
          "draw",
          "exhaust",
          "multiplier"
        ],
        "role": "payoff"
      },
      "GATHER_LIGHT": {
        "id": "Gather Light",
        "tier": "A",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "block"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Block + 1 star. Role-player: block + incidental star generation.",
        "mech": [
          "block",
          "star_gain"
        ],
        "role": "generator"
      },
      "SOLAR_STRIKE": {
        "id": "Solar Strike",
        "tier": "B",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "damage"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Damage + 1 star. Efficient and flexible.",
        "mech": [
          "damage",
          "star_gain"
        ],
        "role": "generator"
      },
      "ASTRAL_PULSE": {
        "id": "Astral Pulse",
        "tier": "B",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "aoe",
          "zero_cost"
        ],
        "anti": [
          "forge"
        ],
        "notes": "0-cost AoE. Works with starting 3 stars.",
        "mech": [
          "damage",
          "aoe",
          "zero_cost"
        ],
        "role": "payoff"
      },
      "GUIDING_STAR": {
        "id": "Guiding Star",
        "tier": "A",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "damage",
          "draw"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Damage + draw 2 next turn. Consistent delayed draw.",
        "mech": [
          "damage",
          "draw"
        ],
        "role": "generator"
      },
      "COSMIC_INDIFFERENCE": {
        "id": "Cosmic Indifference",
        "tier": "B",
        "builds": [
          "stars",
          "forge"
        ],
        "syn": [
          "stellar",
          "stars",
          "block",
          "scaling",
          "forge"
        ],
        "anti": [],
        "notes": "Block + retrieve card from discard. One of the easiest ways to bring back Sovereign Blade for next turn.",
        "mech": [
          "block",
          "card_retrieve"
        ],
        "role": "generator"
      },
      "HEGEMONY": {
        "id": "Hegemony",
        "tier": "B",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "damage"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Effectively free 15 damage with star cost.",
        "mech": [
          "damage",
          "zero_cost"
        ],
        "role": "payoff"
      },
      "DYING_STAR": {
        "id": "Dying Star",
        "tier": "C",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "aoe",
          "damage"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Ethereal. 9 AoE damage plus enemies lose 9 Strength this turn. Excellent against multi-enemy rooms — effectively a huge Block card by neutering enemy damage.",
        "mech": [
          "damage",
          "aoe",
          "weak"
        ],
        "role": "payoff"
      },
      "TYRANNY": {
        "id": "Tyranny",
        "tier": "B",
        "builds": [
          "stars"
        ],
        "syn": [
          "exhaust",
          "stellar",
          "scaling"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Draw 1 and Exhaust 1 each turn. Passive deck thinner and draw engine. Very good in Sly-adjacent Regent builds.",
        "mech": [
          "exhaust",
          "deck_thin"
        ],
        "role": "engine"
      },
      "BULWARK": {
        "id": "Bulwark",
        "tier": "B",
        "builds": [
          "forge"
        ],
        "syn": [
          "forge",
          "authority",
          "block",
          "scaling"
        ],
        "anti": [
          "stars"
        ],
        "notes": "13 Block plus Forge 10. Efficient defensive Forge card.",
        "mech": [
          "block",
          "forge"
        ],
        "role": "generator"
      },
      "SEEKING_EDGE": {
        "id": "Seeking Edge",
        "tier": "B",
        "builds": [
          "forge"
        ],
        "syn": [
          "forge",
          "authority",
          "damage"
        ],
        "anti": [
          "stars"
        ],
        "notes": "Forge 7 plus Sovereign Blade hits ALL enemies. Huge in Forge builds, irrelevant otherwise.",
        "mech": [
          "forge",
          "aoe"
        ],
        "role": "payoff"
      },
      "PATTERN": {
        "id": "Patter",
        "tier": "C",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "block",
          "strength"
        ],
        "anti": [],
        "mech": [
          "block",
          "strength"
        ],
        "notes": "Gain 8 Block plus 2 Vigor (temporary Strength this turn). Solid early card."
      },
      "CELESTIAL_MIGHT": {
        "id": "Celestial Might",
        "tier": "B",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "damage",
          "multi_hit",
          "strength"
        ],
        "anti": [
          "forge"
        ],
        "notes": "6 damage 3 times. Multi-hit synergizes with Monarch's Gaze and Terraforming. Good with Strength scaling.",
        "mech": [
          "damage",
          "multi_hit",
          "scaling"
        ],
        "role": "payoff"
      },
      "BLACK_HOLE": {
        "id": "Black Hole",
        "tier": "C",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "aoe"
        ],
        "anti": [
          "forge"
        ],
        "notes": "3 AoE per star transaction. Too slow in most contexts.",
        "mech": [
          "damage",
          "aoe",
          "passive"
        ],
        "role": "payoff"
      },
      "CRESCENT_SPEAR": {
        "id": "Crescent Spear",
        "tier": "D",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "damage"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Damage scales with star-cost cards. Build-specific.",
        "mech": [
          "damage",
          "scaling"
        ],
        "role": "payoff"
      },
      "STARDUST": {
        "id": "Stardust",
        "tier": "D",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "damage"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Deals damage X times randomly — too random, needs massive Stars setup to be worthwhile.",
        "mech": [
          "damage",
          "star_payoff"
        ],
        "role": "payoff"
      },
      "LUNAR_BLAST": {
        "id": "Lunar Blast",
        "tier": "D",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "damage",
          "zero_cost"
        ],
        "anti": [
          "forge"
        ],
        "notes": "0-cost damage per skill played. Worse than Radiate.",
        "mech": [
          "damage",
          "zero_cost"
        ],
        "role": "payoff"
      },
      "MONOLOGUE": {
        "id": "Monologue",
        "tier": "C",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "strength",
          "scaling"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Gain 1 Strength per card played this turn. Tempo-dependent — great on big turns, dead on small turns.",
        "mech": [
          "strength",
          "per_skill_payoff"
        ],
        "role": "generator"
      },
      "CONQUEROR": {
        "id": "Conqueror",
        "tier": "B",
        "builds": [
          "forge"
        ],
        "syn": [
          "forge",
          "authority",
          "damage"
        ],
        "anti": [
          "stars"
        ],
        "notes": "Forge 3 plus doubles Sovereign Blade damage this turn. Requires Forge setup to shine.",
        "mech": [
          "forge",
          "damage"
        ],
        "role": "payoff"
      },
      "RESONANCE": {
        "id": "Resonance",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "stellar",
          "strength"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Gain 1 strength, enemies lose 1. Not Regent's cleanest direction.",
        "mech": [
          "strength"
        ],
        "role": "generator"
      },
      "CRASH_LANDING": {
        "id": "Crash Landing",
        "tier": "D",
        "builds": [],
        "syn": [
          "damage",
          "aoe"
        ],
        "anti": [],
        "notes": "21 AoE but fills hand with Debris — nearly unplayable without exhaust support.",
        "mech": [
          "damage",
          "aoe"
        ],
        "role": "payoff"
      },
      "BUNDLE_OF_JOY": {
        "id": "Bundle of Joy",
        "tier": "F",
        "builds": [],
        "syn": [
          "colorless"
        ],
        "anti": [],
        "notes": "Adds 3 random Colorless cards then Exhausts. Too random to reliably build around.",
        "mech": [
          "colorless",
          "exhaust"
        ],
        "role": "generator"
      },
      "KINGLY_KICK": {
        "id": "Kingly Kick",
        "tier": "D",
        "builds": [],
        "syn": [
          "damage"
        ],
        "anti": [],
        "notes": "Gets to 2-cost eventually. Too slow.",
        "mech": [
          "damage"
        ],
        "role": "payoff"
      },
      "KINGLY_PUNCH": {
        "id": "Kingly Punch",
        "tier": "D",
        "builds": [],
        "syn": [
          "damage"
        ],
        "anti": [],
        "notes": "Scales too slowly.",
        "mech": [
          "damage"
        ],
        "role": "payoff"
      },
      "PROPHESIZE": {
        "id": "Prophesize",
        "tier": "D",
        "builds": [],
        "syn": [
          "draw"
        ],
        "anti": [],
        "notes": "2-energy for 6 draw. Poor economy.",
        "mech": [
          "draw"
        ],
        "role": "generator"
      },
      "SPOILS_OF_BATTLE": {
        "id": "Spoils of Battle",
        "tier": "D",
        "builds": [
          "forge"
        ],
        "syn": [
          "forge"
        ],
        "anti": [
          "stars"
        ],
        "notes": "Pure Forge 10. Only useful in dedicated Forge builds — dead otherwise.",
        "mech": [
          "forge"
        ],
        "role": "generator"
      },
      "PARRY": {
        "id": "Parry",
        "tier": "D",
        "builds": [
          "forge"
        ],
        "syn": [
          "forge",
          "block"
        ],
        "anti": [
          "stars"
        ],
        "notes": "Gain 6 Block whenever you play Sovereign Blade. Too conditional — Forge-only niche.",
        "mech": [
          "block",
          "forge",
          "conditional"
        ],
        "role": "payoff"
      },
      "STRIKE": {
        "id": "Strike",
        "tier": "D",
        "builds": [],
        "syn": [
          "damage"
        ],
        "anti": [],
        "notes": "Starter. Replace.",
        "mech": [
          "damage"
        ]
      },
      "DEFEND": {
        "id": "Defend",
        "tier": "D",
        "builds": [],
        "syn": [
          "block"
        ],
        "anti": [],
        "notes": "Starter. Replace.",
        "mech": [
          "block"
        ]
      },
      "WROUGHT_IN_WAR": {
        "id": "Wrought in War",
        "tier": "B",
        "builds": [
          "forge",
          "any"
        ],
        "syn": [
          "forge",
          "damage"
        ],
        "anti": [
          "stars"
        ],
        "notes": "7 damage plus Forge 5. Efficient early Forge card that also deals damage.",
        "mech": [
          "damage",
          "forge"
        ],
        "role": "generator"
      },
      "SUMMON_FORTH": {
        "id": "Summon Forth",
        "tier": "B",
        "builds": [
          "forge"
        ],
        "syn": [
          "forge",
          "authority",
          "scaling"
        ],
        "anti": [
          "stars"
        ],
        "notes": "Forge 8 and retrieves Sovereign Blade from anywhere. Core Forge utility card.",
        "mech": [
          "forge",
          "card_retrieve"
        ],
        "role": "generator"
      },
      "BEAT_INTO_SHAPE": {
        "id": "Beat into Shape",
        "tier": "A",
        "builds": [
          "forge"
        ],
        "syn": [
          "forge",
          "damage",
          "multi_hit",
          "scaling"
        ],
        "anti": [
          "stars"
        ],
        "notes": "5 damage + Forge 5, plus stacking Forge for each previous hit this turn. Exponential Forge value on multi-hit turns.",
        "mech": [
          "damage",
          "forge",
          "per_attack_payoff"
        ],
        "role": "generator"
      },
      "FURNACE": {
        "id": "Furnace",
        "tier": "B",
        "builds": [
          "forge"
        ],
        "syn": [
          "forge",
          "authority",
          "scaling"
        ],
        "anti": [
          "stars"
        ],
        "notes": "Passive Forge 4 each turn. Consistent Forge engine that stacks with everything.",
        "mech": [
          "forge",
          "passive"
        ],
        "role": "engine"
      },
      "FALLING_STAR": {
        "id": "Falling Star",
        "tier": "C",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "vulnerable",
          "damage"
        ],
        "anti": [
          "forge"
        ],
        "notes": "7 damage plus 1 Weak and 1 Vulnerable. Basic setup card — fine early, outclassed later.",
        "mech": [
          "vulnerable",
          "star_gain"
        ],
        "role": "generator"
      },
      "CLOAK_OF_STARS": {
        "id": "Cloak of Stars",
        "tier": "B",
        "builds": [
          "stars",
          "any"
        ],
        "syn": [
          "block",
          "zero_cost",
          "stars"
        ],
        "anti": [
          "forge"
        ],
        "notes": "Zero-cost Block card. Saves Energy for Star spends or Forge plays. Universal include.",
        "mech": [
          "block"
        ],
        "role": "generator"
      },
      "VENERATE": {
        "id": "Venerate",
        "tier": "D",
        "builds": [],
        "syn": [],
        "anti": [],
        "notes": "Starter card. Replace when possible.",
        "mech": [],
        "role": "generator"
      },
      "REFINE_BLADE": {
        "id": "Refine Blade",
        "tier": "B",
        "builds": [
          "forge"
        ],
        "syn": [
          "forge",
          "energy_gain",
          "scaling"
        ],
        "anti": [],
        "notes": "Forge 6 plus Energy next turn. Efficient Forge card that also fixes tempo.",
        "mech": [
          "forge",
          "energy_gain"
        ],
        "role": "generator"
      },
      "BEGONE": {
        "id": "BEGONE!",
        "tier": "A",
        "builds": [],
        "role": "generator",
        "syn": [
          "transform"
        ],
        "anti": [],
        "mech": [
          "damage",
          "transform"
        ],
        "notes": "Deal 4 damage and transform a hand card into Minion Dive Bomb. Good early damage with GUARDS!!! exhaust synergy. More useful than it first appears."
      },
      "COLLISION_COURSE": {
        "id": "Collision Course",
        "tier": "D",
        "builds": [],
        "role": "generator",
        "syn": [
          "damage"
        ],
        "anti": [],
        "mech": [
          "damage"
        ],
        "notes": "9 damage but adds Debris to hand — Debris clogs draw badly."
      },
      "CRUSH_UNDER": {
        "id": "Crush Under",
        "tier": "B",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "aoe",
          "damage",
          "debuff"
        ],
        "anti": [],
        "mech": [
          "aoe",
          "damage"
        ],
        "notes": "7 AoE plus enemies lose 1 Strength. Good early multi-enemy control."
      },
      "GLITTERSTREAM": {
        "id": "Glitterstream",
        "tier": "B",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "block",
          "delayed_block"
        ],
        "anti": [],
        "mech": [
          "block",
          "delayed_block"
        ],
        "notes": "11 Block plus 4 next turn — 15 total. Reliable defensive card."
      },
      "KNOW_THY_PLACE": {
        "id": "Know Thy Place",
        "tier": "B",
        "builds": [
          "stars",
          "forge"
        ],
        "role": "generator",
        "syn": [
          "vulnerable",
          "weak",
          "exhaust"
        ],
        "anti": [],
        "mech": [
          "vulnerable",
          "weak",
          "exhaust"
        ],
        "notes": "Weak + Vulnerable then Exhaust. Free setup for Comet, Gamma Blast, Sovereign Blade."
      },
      "CHARGE": {
        "id": "CHARGE!!",
        "tier": "A",
        "builds": [],
        "role": "generator",
        "syn": [
          "transform"
        ],
        "anti": [],
        "mech": [
          "transform"
        ],
        "notes": "Transforms 2 draw pile cards into Minion Strikes. Deck thinning with some upside in the right setup."
      },
      "DEVASTATE": {
        "id": "Devastate",
        "tier": "B",
        "builds": [
          "any"
        ],
        "role": "payoff",
        "syn": [
          "damage"
        ],
        "anti": [],
        "mech": [
          "damage"
        ],
        "notes": "Deal 30 damage. No conditions, no setup. Reliable big hit for 2 Energy."
      },
      "LARGESSE": {
        "id": "Largesse",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [
          "colorless"
        ],
        "anti": [],
        "mech": [
          "colorless"
        ],
        "notes": "Gives another player a Colorless card. No solo value whatsoever."
      },
      "MANIFEST_AUTHORITY": {
        "id": "Manifest Authority",
        "tier": "B",
        "builds": [
          "stars",
          "any"
        ],
        "role": "generator",
        "syn": [
          "block",
          "colorless"
        ],
        "anti": [],
        "mech": [
          "block",
          "colorless"
        ],
        "notes": "7 Block plus a random Colorless card. Fuels Arsenal and Pillar of Creation."
      },
      "ORBIT": {
        "id": "Orbit",
        "tier": "D",
        "builds": [
          "stars",
          "any"
        ],
        "role": "engine",
        "syn": [
          "energy_gain",
          "scaling"
        ],
        "anti": [],
        "mech": [
          "energy_gain",
          "passive"
        ],
        "notes": "Every 4 Energy spent, gain 1 Energy. Too slow and too conditional for most runs."
      },
      "PALE_BLUE_DOT": {
        "id": "Pale Blue Dot",
        "tier": "C",
        "builds": [
          "stars"
        ],
        "role": "generator",
        "syn": [
          "draw",
          "stars"
        ],
        "anti": [],
        "mech": [
          "draw",
          "passive",
          "conditional"
        ],
        "notes": "Draw 1 next turn if you played 5+ cards. Passive draw in big-turn builds."
      },
      "PILLAR_OF_CREATION": {
        "id": "Pillar of Creation",
        "tier": "C",
        "builds": [
          "stars",
          "any"
        ],
        "role": "engine",
        "syn": [
          "block",
          "colorless",
          "scaling"
        ],
        "anti": [],
        "mech": [
          "block",
          "passive"
        ],
        "notes": "Gain 3 Block per card created. Needs Spectrum Shift/Quasar shell — too conditional otherwise."
      },
      "QUASAR": {
        "id": "Quasar",
        "tier": "C",
        "builds": [
          "stars",
          "any"
        ],
        "role": "generator",
        "syn": [
          "colorless",
          "stars"
        ],
        "anti": [],
        "mech": [
          "colorless"
        ],
        "notes": "Choose 1 of 3 Colorless cards. Flexible but random — feeds Arsenal/Pillar but not reliable enough for higher."
      },
      "SPECTRUM_SHIFT": {
        "id": "Spectrum Shift",
        "tier": "B",
        "builds": [
          "stars",
          "any"
        ],
        "role": "engine",
        "syn": [
          "colorless",
          "scaling",
          "star_gain"
        ],
        "anti": [],
        "mech": [
          "colorless",
          "passive"
        ],
        "notes": "Add 1 random Colorless card at turn start. Passive engine for Arsenal and Pillar of Creation every turn."
      },
      "SUPERMASSIVE": {
        "id": "Supermassive",
        "tier": "C",
        "builds": [
          "stars"
        ],
        "role": "payoff",
        "syn": [
          "colorless",
          "scaling",
          "damage"
        ],
        "anti": [],
        "mech": [
          "damage",
          "scaling"
        ],
        "notes": "5 damage + 3 per card created. Good in Colorless shell, weak otherwise."
      },
      "TERRAFORMING": {
        "id": "Terraforming",
        "tier": "C",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "strength",
          "scaling"
        ],
        "anti": [],
        "mech": [
          "strength"
        ],
        "notes": "6 Vigor (temp Strength). Good on multi-hit turns but does nothing on its own."
      },
      "ARSENAL": {
        "id": "Arsenal",
        "tier": "B",
        "builds": [
          "stars",
          "any"
        ],
        "role": "engine",
        "syn": [
          "strength",
          "colorless",
          "scaling",
          "permanent_scaling"
        ],
        "anti": [],
        "mech": [
          "strength",
          "passive",
          "permanent_scaling"
        ],
        "notes": "Gain 1 permanent Strength per Colorless card played. Pairs with Spectrum Shift for passive scaling."
      },
      "HAMMER_TIME": {
        "id": "Hammer Time",
        "tier": "D",
        "builds": [
          "forge"
        ],
        "role": "engine",
        "syn": [
          "forge"
        ],
        "anti": [],
        "mech": [
          "forge",
          "passive"
        ],
        "notes": "Forge extends to allies — solo play value is minimal."
      },
      "HEAVENLY_DRILL": {
        "id": "Heavenly Drill",
        "tier": "D",
        "builds": [
          "stars",
          "any"
        ],
        "role": "payoff",
        "syn": [
          "damage",
          "stars",
          "scaling"
        ],
        "anti": [],
        "mech": [
          "damage",
          "multi_hit",
          "x_cost"
        ],
        "notes": "Deal 8 damage X times — doubles to 16xX when X is 4+. Needs Energy generation or Stars for maximum impact."
      },
      "HEIRLOOM_HAMMER": {
        "id": "Heirloom Hammer",
        "tier": "D",
        "builds": [
          "stars",
          "any"
        ],
        "role": "generator",
        "syn": [
          "damage",
          "colorless"
        ],
        "anti": [],
        "mech": [
          "damage",
          "colorless"
        ],
        "notes": "17 damage plus duplicates a Colorless card in hand. Pairs with Arsenal for double Strength triggers."
      },
      "I_AM_INVINCIBLE": {
        "id": "I Am Invincible",
        "tier": "B",
        "builds": [
          "stars",
          "any"
        ],
        "role": "engine",
        "syn": [
          "block",
          "scaling",
          "recurring"
        ],
        "anti": [],
        "mech": [
          "block",
          "recursive"
        ],
        "notes": "Gain 9 Block. If on top of draw pile at end of turn, plays again. Recurring Block engine."
      },
      "MAKE_IT_SO": {
        "id": "Make It So",
        "tier": "C",
        "builds": [
          "stars"
        ],
        "role": "payoff",
        "syn": [
          "damage",
          "stars",
          "scaling"
        ],
        "anti": [],
        "mech": [
          "damage",
          "recurring"
        ],
        "notes": "6 damage that returns every 3 Skills. Interesting in Skill-heavy builds but too conditional."
      },
      "MONARCHS_GAZE": {
        "id": "Monarch's Gaze",
        "tier": "D",
        "builds": [
          "any"
        ],
        "role": "engine",
        "syn": [
          "debuff",
          "multi_hit",
          "scaling"
        ],
        "anti": [],
        "mech": [
          "passive",
          "debuff"
        ],
        "notes": "Each attack reduces enemy Strength by 1 this turn. Multi-hit attacks like Celestial Might or Seven Stars drain Strength rapidly."
      },
      "NEUTRON_AEGIS": {
        "id": "Neutron Aegis",
        "tier": "D",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "block",
          "scaling"
        ],
        "anti": [],
        "mech": [
          "plating",
          "permanent_scaling"
        ],
        "notes": "Gain 8 Plating (permanent flat damage reduction per hit). Decent defensive option but slower than Block-based defense in practice."
      },
      "ROYALTIES": {
        "id": "Royalties",
        "tier": "B",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "gold"
        ],
        "notes": "Gain 30 Gold at end of combat. Surprisingly strong — 30 Gold is significant economy and synergizes with shop-heavy strategies."
      },
      "SWORD_SAGE": {
        "id": "Sword Sage",
        "tier": "B",
        "builds": [
          "forge"
        ],
        "role": "engine",
        "syn": [
          "forge",
          "damage"
        ],
        "anti": [],
        "mech": [
          "passive",
          "damage"
        ],
        "notes": "Sovereign Blade costs 1 more but hits an extra time. Net positive with high Forge values."
      },
      "THE_SMITH": {
        "id": "The Smith",
        "tier": "A",
        "builds": [
          "forge",
          "stars"
        ],
        "role": "payoff",
        "syn": [
          "forge",
          "stellar",
          "stars"
        ],
        "anti": [],
        "mech": [
          "forge"
        ],
        "notes": "Forge 30 in one card. Near-instant win condition in Forge builds. Also viable as an eventual win condition in Star decks even without full Blade support."
      },
      "METEOR_SHOWER": {
        "id": "Meteor Shower",
        "tier": "S",
        "builds": [
          "any"
        ],
        "role": "payoff",
        "syn": [
          "aoe",
          "damage",
          "vulnerable",
          "weak"
        ],
        "anti": [],
        "mech": [
          "aoe",
          "damage",
          "vulnerable",
          "weak"
        ],
        "notes": "14 AoE damage plus 2 Weak and 2 Vulnerable to ALL enemies. Ancient card — insane setup for follow-up nukes like Comet or Seven Stars."
      },
      "THE_SEALED_THRONE": {
        "id": "The Sealed Throne",
        "tier": "A",
        "builds": [
          "stars"
        ],
        "role": "engine",
        "syn": [
          "stars",
          "star_gain",
          "scaling"
        ],
        "anti": [],
        "mech": [
          "star_gain",
          "passive",
          "scaling"
        ],
        "notes": "Gain 1 Star every card played. With Void Form free cards, generates Stars effortlessly. Effectively Genesis-tier passive Star engine."
      },
      "CHILD_OF_STARS": {
        "id": "Child of Stars",
        "tier": "A",
        "builds": [
          "stars"
        ],
        "syn": [
          "stellar",
          "stars",
          "block",
          "scaling"
        ],
        "anti": [],
        "mech": [
          "block",
          "star_payoff",
          "passive"
        ],
        "role": "engine",
        "notes": "Whenever you spend Stars, gain 2 Block per Star spent. Converts Star spending into passive defense, letting you scale offense and defense simultaneously."
      }
    },
    "necrobinder": {
      "DEMESNE": {
        "id": "Demesne",
        "tier": "S",
        "builds": [
          "soul",
          "any"
        ],
        "syn": [
          "energy_gain",
          "draw",
          "scaling"
        ],
        "anti": [
          "doom",
          "osty"
        ],
        "notes": "Ethereal. At start of turn, gain Energy and draw 1 additional card. S-tier permanent passive — +1 Energy and +1 draw every turn, at the cost of Ethereal (discards if not played).",
        "mech": [
          "energy_gain",
          "draw",
          "passive",
          "ethereal"
        ],
        "role": "engine"
      },
      "BORROWED_TIME": {
        "id": "Borrowed Time",
        "tier": "S",
        "builds": [
          "soul",
          "any"
        ],
        "syn": [
          "soul",
          "energy_gain",
          "scaling"
        ],
        "anti": [
          "doom",
          "osty"
        ],
        "notes": "0-cost: gain 1 energy, apply 3 Doom to self. The 3 self-Doom is almost irrelevant. Best 0-cost.",
        "mech": [
          "energy_gain",
          "zero_cost",
          "self_doom"
        ],
        "role": "engine"
      },
      "HAUNT": {
        "id": "Haunt",
        "tier": "C",
        "builds": [
          "soul"
        ],
        "syn": [
          "soul",
          "exhaust",
          "damage",
          "scaling"
        ],
        "anti": [
          "doom",
          "osty"
        ],
        "notes": "Power: every time you play a Soul, random enemy loses 6 HP (ignores block). Stack multiples.",
        "mech": [
          "soul_payoff",
          "damage",
          "passive",
          "unstoppable"
        ],
        "role": "engine"
      },
      "SOUL_STORM": {
        "id": "Soul Storm",
        "tier": "C",
        "builds": [
          "soul"
        ],
        "syn": [
          "soul",
          "exhaust",
          "damage",
          "scaling"
        ],
        "anti": [
          "doom",
          "osty"
        ],
        "notes": "Damage per Soul played this combat. Late game = 100+ damage in one card.",
        "mech": [
          "soul_payoff",
          "damage",
          "scaling"
        ],
        "role": "payoff"
      },
      "END_OF_DAYS": {
        "id": "End of Days",
        "tier": "C",
        "builds": [
          "doom"
        ],
        "syn": [
          "doom",
          "debuff",
          "damage",
          "aoe"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "3-cost: apply 29 Doom to ALL + execute any enemy with Doom ≥ HP. Mass setup + removal.",
        "mech": [
          "doom",
          "execute",
          "aoe"
        ],
        "role": "engine"
      },
      "NEUROSURGE": {
        "id": "Neurosurge",
        "tier": "S",
        "builds": [
          "doom",
          "any"
        ],
        "syn": [
          "energy_gain",
          "draw",
          "doom",
          "scaling"
        ],
        "anti": [
          "doom",
          "osty"
        ],
        "notes": "Gain 3 Energy and draw 2. Each turn applies 3 Doom to yourself. S-tier setup card — the Energy and draw alone are worth it. Self-Doom is manageable.",
        "mech": [
          "energy_gain",
          "draw",
          "doom",
          "passive"
        ],
        "role": "engine"
      },
      "CAPTURE_SPIRIT": {
        "id": "Capture Spirit",
        "tier": "S",
        "builds": [
          "soul"
        ],
        "syn": [
          "soul",
          "draw"
        ],
        "anti": [
          "doom",
          "osty"
        ],
        "notes": "Enemy loses 3 HP. Add 3 Souls into Draw Pile. S-tier engine — generates 3 Souls AND deals chip damage. Each Soul drawn fuels Haunt, Death March, Soul Storm.",
        "mech": [
          "soul_gen",
          "draw"
        ],
        "role": "engine"
      },
      "DEVOUR_LIFE": {
        "id": "Devour Life",
        "tier": "A",
        "builds": [
          "soul",
          "osty"
        ],
        "syn": [
          "soul",
          "osty",
          "summon"
        ],
        "anti": [
          "doom",
          "osty"
        ],
        "notes": "Whenever you play a Soul, Summon 1. A-tier passive — every Soul played grows Osty. In Soul-heavy builds, Osty grows to enormous HP passively.",
        "mech": [
          "summon",
          "passive"
        ],
        "role": "engine"
      },
      "DREDGE": {
        "id": "Dredge",
        "tier": "S",
        "builds": [
          "soul",
          "any"
        ],
        "syn": [
          "soul",
          "draw"
        ],
        "anti": [
          "doom",
          "osty"
        ],
        "notes": "Put 3 cards from Discard into Hand then Exhaust. Incredible setup card — retrieves key cards exactly when needed.",
        "mech": [
          "draw",
          "soul_retrieve"
        ],
        "role": "generator"
      },
      "LETHALITY": {
        "id": "Lethality",
        "tier": "A",
        "builds": [
          "doom",
          "any"
        ],
        "syn": [
          "doom",
          "damage",
          "scaling"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "Ethereal. First Attack each turn deals 50% additional damage. A-tier — massive damage multiplier on your best attack each turn. Ethereal means you always want to draw and play it same turn.",
        "mech": [
          "damage",
          "passive",
          "ethereal"
        ],
        "role": "engine"
      },
      "DEATHS_DOOR": {
        "id": "Death's Door",
        "tier": "A",
        "builds": [
          "doom"
        ],
        "syn": [
          "block",
          "doom",
          "scaling"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "Gain 6 Block. If you applied Doom this turn, gain Block 2 more times — total 18 Block. A-tier payoff — trivial to trigger in Doom builds, massive defensive value.",
        "mech": [
          "block",
          "conditional"
        ],
        "role": "payoff"
      },
      "RATTLE": {
        "id": "Rattle",
        "tier": "A",
        "builds": [
          "osty"
        ],
        "syn": [
          "osty",
          "multi_hit",
          "scaling"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "Osty deals 7 damage. Hits again for each other time Osty attacked this turn. A-tier payoff — with Fetch and Sic Em setting up, Rattle becomes massive multi-hit.",
        "mech": [
          "osty_atk",
          "multi_hit",
          "per_attack_payoff"
        ],
        "role": "payoff"
      },
      "COUNTDOWN": {
        "id": "Countdown",
        "tier": "C",
        "builds": [
          "doom"
        ],
        "syn": [
          "doom",
          "debuff",
          "scaling"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "At start of turn apply 6 Doom to random enemy. Passive Doom stacking per turn.",
        "mech": [
          "doom",
          "passive"
        ],
        "role": "engine"
      },
      "ERADICATE": {
        "id": "Eradicate",
        "tier": "D",
        "builds": [
          "doom"
        ],
        "syn": [
          "doom",
          "debuff",
          "damage",
          "scaling"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "0★X: deal 11 damage X times. Dump energy for massive damage.",
        "mech": [
          "damage",
          "scaling",
          "energy_dump"
        ],
        "role": "payoff"
      },
      "FETCH": {
        "id": "Fetch",
        "tier": "A",
        "builds": [
          "osty"
        ],
        "syn": [
          "osty",
          "draw",
          "zero_cost"
        ],
        "anti": [
          "doom",
          "soul"
        ],
        "notes": "Osty deals 3 damage. First time each turn, draw 1 card. A-tier — 0-cost Osty attack that cycles itself. Enables Rattle chains and draws.",
        "mech": [
          "osty_atk",
          "draw",
          "conditional"
        ],
        "role": "generator"
      },
      "BONE_SHARDS": {
        "id": "Bone Shards",
        "tier": "B",
        "builds": [
          "osty"
        ],
        "syn": [
          "summon",
          "damage",
          "aoe",
          "block"
        ],
        "anti": [
          "doom",
          "soul"
        ],
        "notes": "If Osty alive: 9 AoE + 9 block. Osty dies but Reanimate brings him back.",
        "mech": [
          "osty_attack",
          "damage",
          "aoe",
          "block"
        ],
        "role": "payoff"
      },
      "SACRIFICE": {
        "id": "Sacrifice",
        "tier": "A",
        "builds": [
          "osty"
        ],
        "syn": [
          "summon",
          "damage",
          "aoe",
          "vulnerable"
        ],
        "anti": [
          "doom",
          "soul"
        ],
        "notes": "Osty: 11 damage + AoE Vulnerable.",
        "mech": [
          "osty_attack",
          "damage",
          "aoe",
          "vulnerable"
        ],
        "role": "payoff"
      },
      "GRAVEBLAST": {
        "id": "Graveblast",
        "tier": "S",
        "builds": [
          "soul",
          "any"
        ],
        "syn": [
          "soul",
          "draw"
        ],
        "anti": [
          "doom",
          "osty"
        ],
        "notes": "Deal 4 damage. Put a card from Discard into Hand. Exhaust. S-tier retrieval — cycles key cards back on demand.",
        "mech": [
          "damage",
          "draw",
          "soul_retrieve"
        ],
        "role": "generator"
      },
      "DEBILITATE": {
        "id": "Debilitate",
        "tier": "A",
        "builds": [
          "doom",
          "any"
        ],
        "syn": [
          "doom",
          "weak",
          "vulnerable"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "Deal 7 damage. Vulnerable and Weak are twice as effective for 3 turns. A-tier — this doubles ALL Vulnerable and Weak on the enemy for 3 turns. Insane multiplier for debuff builds.",
        "mech": [
          "damage",
          "weak",
          "vulnerable",
          "scaling"
        ],
        "role": "generator"
      },
      "SCOURGE": {
        "id": "Scourge",
        "tier": "B",
        "builds": [
          "doom"
        ],
        "syn": [
          "doom",
          "debuff",
          "draw",
          "scaling"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "Apply 10 Doom, draw 1 card. Foundation of Doom builds — stacks fast and replaces itself.",
        "mech": [
          "doom",
          "scaling",
          "draw"
        ],
        "role": "generator"
      },
      "DEATHBRINGER": {
        "id": "Deathbringer",
        "tier": "C",
        "builds": [
          "doom"
        ],
        "syn": [
          "doom",
          "debuff",
          "aoe"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "2-cost: 21 Doom to ALL enemies + Weak.",
        "mech": [
          "doom",
          "aoe",
          "weak"
        ],
        "role": "generator"
      },
      "PARSE": {
        "id": "Parse",
        "tier": "A",
        "builds": [
          "soul",
          "any"
        ],
        "syn": [
          "soul",
          "draw",
          "ethereal"
        ],
        "anti": [
          "doom",
          "osty"
        ],
        "notes": "Ethereal. Draw 3 cards. A-tier — 0-cost Ethereal draw 3. Pairs with Pagestorm (Ethereal triggers draw), Spirit of Ash (4 Block), and Demesne.",
        "mech": [
          "draw",
          "ethereal"
        ],
        "role": "generator"
      },
      "BANSHEES_CRY": {
        "id": "Banshee's Cry",
        "tier": "C",
        "builds": [
          "doom",
          "doom"
        ],
        "syn": [
          "doom",
          "ethereal",
          "damage",
          "aoe"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "33 AoE, costs 2 less per ethereal played. Gets free with enough ethereals.",
        "mech": [
          "damage",
          "aoe",
          "cost_reduction",
          "ethereal"
        ],
        "role": "payoff"
      },
      "NO_ESCAPE": {
        "id": "No Escape",
        "tier": "C",
        "builds": [
          "doom"
        ],
        "syn": [
          "doom",
          "debuff",
          "scaling"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "Apply 10 Doom + 5 more per 10 Doom already on target. Exponential — destroys high-HP bosses.",
        "mech": [
          "doom",
          "scaling"
        ],
        "role": "generator"
      },
      "SCYTHE": {
        "id": "The Scythe",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "damage",
          "scaling"
        ],
        "anti": [],
        "notes": "13 damage, permanently increases per play, exhaust. Can reach 100+ late run.",
        "mech": [
          "damage",
          "scaling",
          "exhaust"
        ],
        "role": "payoff"
      },
      "NEGATIVE_PULSE": {
        "id": "Negative Pulse",
        "tier": "B",
        "builds": [
          "doom"
        ],
        "syn": [
          "doom",
          "aoe",
          "block"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "AoE Doom + block in one card.",
        "mech": [
          "doom",
          "aoe",
          "block"
        ],
        "role": "generator"
      },
      "GRAVE_WARDEN": {
        "id": "Grave Warden",
        "tier": "B",
        "builds": [
          "soul"
        ],
        "syn": [
          "soul",
          "exhaust",
          "block"
        ],
        "anti": [
          "doom",
          "osty"
        ],
        "notes": "8 block + adds a Soul. Defense plus soul generation.",
        "mech": [
          "block",
          "soul_generator"
        ],
        "role": "generator"
      },
      "HIGH_FIVE": {
        "id": "High Five",
        "tier": "A",
        "builds": [
          "osty",
          "any"
        ],
        "syn": [
          "osty",
          "vulnerable",
          "aoe"
        ],
        "anti": [
          "doom",
          "soul"
        ],
        "notes": "Osty deals 11 AoE and applies 2 Vulnerable to ALL enemies. A-tier setup — free Vulnerable on everything, great before big damage turns.",
        "mech": [
          "osty_atk",
          "vulnerable",
          "aoe"
        ],
        "role": "generator"
      },
      "SIC_EM": {
        "id": "Sic 'Em",
        "tier": "A",
        "builds": [
          "osty"
        ],
        "syn": [
          "osty",
          "summon",
          "scaling"
        ],
        "anti": [
          "doom",
          "soul"
        ],
        "notes": "Osty deals 5 damage. Whenever Osty hits this enemy this turn, Summon 2. A-tier engine — each Osty attack generates Summon, compounding with Rattle.",
        "mech": [
          "osty_atk",
          "summon",
          "passive"
        ],
        "role": "engine"
      },
      "TRANSFIGURE": {
        "id": "Transfigure",
        "tier": "A",
        "builds": [
          "soul",
          "any"
        ],
        "syn": [
          "soul",
          "scaling",
          "replay"
        ],
        "anti": [
          "doom",
          "osty"
        ],
        "notes": "Add Replay to a card in Hand (costs +1 Energy). Exhaust. A-tier — Replay causes a card to play twice. On Undeath this creates 2 copies. On Death March, doubles damage output.",
        "mech": [
          "replay",
          "exhaust"
        ],
        "role": "engine"
      },
      "DEATH_MARCH": {
        "id": "Death March",
        "tier": "A",
        "builds": [
          "soul"
        ],
        "syn": [
          "soul",
          "damage",
          "scaling"
        ],
        "anti": [
          "doom",
          "osty"
        ],
        "notes": "Deal 8 damage + 3 per card drawn this turn. A-tier — in Soul builds drawing 5-7 cards per turn, this deals 23-29 damage for 2 Energy.",
        "mech": [
          "damage",
          "scaling"
        ],
        "role": "payoff"
      },
      "DELAY": {
        "id": "Delay",
        "tier": "B",
        "builds": [
          "doom",
          "any"
        ],
        "syn": [
          "block",
          "energy_gain",
          "doom"
        ],
        "anti": [],
        "notes": "11 block + next turn gain 1 energy. Key survival card for Doom builds that need to stay alive while Doom counts down.",
        "mech": [
          "block",
          "energy_gain"
        ],
        "role": "generator"
      },
      "ENFEEBLING_TOUCH": {
        "id": "Enfeebling Touch",
        "tier": "B",
        "builds": [
          "doom",
          "any"
        ],
        "syn": [
          "doom",
          "debuff",
          "strength"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "Enemy loses X Strength this turn. Scales with energy.",
        "mech": [
          "debuff",
          "strength",
          "scaling"
        ],
        "role": "generator"
      },
      "DANSE_MACABRE": {
        "id": "Danse Macabre",
        "tier": "D",
        "builds": [
          "doom"
        ],
        "syn": [
          "doom",
          "block",
          "scaling"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "3 block per expensive card played. Passive block in doom builds.",
        "mech": [
          "block",
          "passive"
        ],
        "role": "generator"
      },
      "DIRGE": {
        "id": "Dirge",
        "tier": "D",
        "builds": [
          "soul",
          "osty"
        ],
        "syn": [
          "soul",
          "summon",
          "exhaust",
          "scaling"
        ],
        "anti": [
          "doom",
          "osty"
        ],
        "notes": "Make X Souls + raise Osty's HP. Setup card for soul+osty combo.",
        "mech": [
          "soul_generator",
          "osty_buff",
          "scaling"
        ],
        "role": "generator"
      },
      "BLIGHT_STRIKE": {
        "id": "Blight Strike",
        "tier": "C",
        "builds": [
          "doom"
        ],
        "syn": [
          "doom",
          "damage"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "8 damage + 8 Doom. Decent filler in doom builds.",
        "mech": [
          "damage",
          "doom"
        ],
        "role": "generator"
      },
      "TIMES_UP": {
        "id": "Time's Up",
        "tier": "C",
        "builds": [
          "doom"
        ],
        "syn": [
          "doom",
          "damage"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "Deal damage equal to enemy's Doom. Exhaust. Clean Doom payoff — executes once threshold is reached.",
        "mech": [
          "doom_payoff",
          "damage",
          "conditional"
        ],
        "role": "payoff"
      },
      "FEAR": {
        "id": "Fear",
        "tier": "C",
        "builds": [
          "doom"
        ],
        "syn": [
          "doom",
          "vulnerable",
          "damage"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "Basic filler. Damage + Vulnerable.",
        "mech": [
          "damage",
          "vulnerable"
        ],
        "role": "generator"
      },
      "BURY": {
        "id": "Bury",
        "tier": "D",
        "builds": [],
        "syn": [
          "damage"
        ],
        "anti": [],
        "notes": "4-cost 52 damage. Costs your whole turn.",
        "mech": [
          "damage"
        ],
        "role": "payoff"
      },
      "AFTERLIFE": {
        "id": "Afterlife",
        "tier": "D",
        "builds": [
          "osty"
        ],
        "syn": [
          "summon"
        ],
        "anti": [
          "doom",
          "soul"
        ],
        "notes": "6 Summons but Exhausts. Weak summon card.",
        "mech": [
          "summon",
          "exhaust"
        ],
        "role": "generator"
      },
      "REAPER_FORM": {
        "id": "Reaper Form",
        "tier": "D",
        "builds": [
          "doom"
        ],
        "syn": [
          "doom",
          "energy_gain"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "Lose 2 Strength for energy ramp. Bad trade.",
        "mech": [
          "energy_gain"
        ],
        "role": "engine"
      },
      "SHARED_FATE": {
        "id": "Shared Fate",
        "tier": "A",
        "builds": [
          "doom",
          "any"
        ],
        "syn": [
          "doom",
          "scaling"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "Lose 2 Strength. Enemy loses 2 Strength. Exhaust. A-tier — free Strength drain that permanently weakens the enemy. The self-Strength cost is negligible vs permanent enemy debuff.",
        "mech": [
          "debuff"
        ],
        "role": "generator"
      },
      "STRIKE": {
        "id": "Strike",
        "tier": "D",
        "builds": [],
        "syn": [
          "damage"
        ],
        "anti": [],
        "notes": "Starter. Replace.",
        "mech": [
          "damage"
        ]
      },
      "DEFEND": {
        "id": "Defend",
        "tier": "D",
        "builds": [],
        "syn": [
          "block"
        ],
        "anti": [],
        "notes": "Starter. Replace.",
        "mech": [
          "block"
        ]
      },
      "REANIMATE": {
        "id": "Reanimate",
        "tier": "A",
        "builds": [
          "osty"
        ],
        "syn": [
          "osty",
          "summon"
        ],
        "anti": [
          "doom",
          "soul"
        ],
        "notes": "Summon 20. Exhaust. A-tier — massive Osty boost in one card. Turns Osty into a serious HP tank immediately.",
        "mech": [
          "summon"
        ],
        "role": "generator"
      },
      "BODYGUARD": {
        "id": "Bodyguard",
        "tier": "D",
        "builds": [
          "osty"
        ],
        "syn": [
          "summon",
          "osty_buff",
          "block",
          "scaling"
        ],
        "anti": [
          "doom",
          "soul"
        ],
        "notes": "Key Osty build card — summon and stack Osty's HP aggressively.",
        "mech": [
          "osty_buff",
          "summon"
        ],
        "role": "generator"
      },
      "OBLIVION": {
        "id": "Oblivion",
        "tier": "C",
        "builds": [
          "doom"
        ],
        "syn": [
          "doom",
          "debuff",
          "damage",
          "scaling"
        ],
        "anti": [
          "soul",
          "osty"
        ],
        "notes": "High-impact doom finisher. Powerful once doom execution is online.",
        "mech": [
          "damage",
          "doom",
          "scaling"
        ],
        "role": "payoff"
      },
      "REAVE": {
        "id": "Reave",
        "tier": "B",
        "builds": [
          "soul"
        ],
        "syn": [
          "soul",
          "damage",
          "scaling"
        ],
        "anti": [
          "doom",
          "osty"
        ],
        "notes": "1-cost attack that puts a Soul into your draw pile. Key soul generator.",
        "mech": [
          "soul_generator",
          "damage"
        ],
        "role": "generator"
      },
      "UNLEASH": {
        "id": "Unleash",
        "tier": "D",
        "builds": [
          "osty"
        ],
        "syn": [
          "summon",
          "osty_attack",
          "damage",
          "scaling"
        ],
        "anti": [
          "doom",
          "soul"
        ],
        "notes": "Osty deals damage based on his Max HP. Your main Osty payoff card.",
        "mech": [
          "osty_attack",
          "damage",
          "scaling"
        ],
        "role": "payoff"
      },
      "SQUEEZE": {
        "id": "Squeeze",
        "tier": "C",
        "builds": [
          "osty"
        ],
        "syn": [
          "summon",
          "osty_attack",
          "damage",
          "scaling"
        ],
        "anti": [
          "doom",
          "soul"
        ],
        "notes": "Osty deals 10 + Max HP damage. Scales to hundreds late run. Alternate win condition.",
        "mech": [
          "osty_attack",
          "damage",
          "scaling"
        ],
        "role": "payoff"
      },
      "FLATTEN": {
        "id": "Flatten",
        "tier": "B",
        "builds": [
          "osty",
          "soul"
        ],
        "syn": [
          "summon",
          "soul",
          "energy_gain",
          "scaling"
        ],
        "anti": [
          "doom",
          "soul"
        ],
        "notes": "Reduce card cost to 0 when Osty attacks first. Enables big combo turns.",
        "mech": [
          "cost_reduction",
          "combo_enabler"
        ],
        "role": "engine"
      },
      "PULL_AGGRO": {
        "id": "Pull Aggro",
        "tier": "B",
        "builds": [
          "osty"
        ],
        "syn": [
          "summon",
          "block",
          "scaling"
        ],
        "anti": [
          "doom",
          "soul"
        ],
        "notes": "11 effective block value with Osty summon upside.",
        "mech": [
          "block",
          "summon"
        ],
        "role": "generator"
      },
      "SNAP": {
        "id": "Snap",
        "tier": "B",
        "builds": [
          "osty"
        ],
        "syn": [
          "summon",
          "damage"
        ],
        "anti": [
          "doom",
          "soul"
        ],
        "notes": "Cheap Osty attack with Retain. Good for enabling combos.",
        "mech": [
          "osty_attack",
          "damage"
        ],
        "role": "generator"
      },
      "DEFILE": {
        "id": "Defile",
        "tier": "B",
        "builds": [
          "doom"
        ],
        "role": "generator",
        "syn": [
          "doom",
          "damage",
          "ethereal"
        ],
        "anti": [],
        "mech": [
          "damage",
          "ethereal"
        ],
        "notes": "Ethereal. Deal 13 damage. B-tier early Doom card — efficient damage that helps drop enemies low enough for Doom thresholds. Ethereal is fine since you want to play it immediately."
      },
      "DEFY": {
        "id": "Defy",
        "tier": "C",
        "builds": [
          "doom",
          "any"
        ],
        "role": "generator",
        "syn": [
          "block",
          "weak",
          "ethereal"
        ],
        "anti": [],
        "mech": [
          "block",
          "weak",
          "ethereal"
        ],
        "notes": "Ethereal. Gain 6 Block plus apply 1 Weak. C-tier — decent early, but Weak is only 1 stack and Ethereal limits flexibility."
      },
      "DRAIN_POWER": {
        "id": "Drain Power",
        "tier": "B",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "draw",
          "upgrade"
        ],
        "anti": [],
        "mech": [
          "damage",
          "draw",
          "upgrade"
        ],
        "notes": "Deal 10 damage. Upgrade 2 random Discard Pile cards. B-tier — damage plus free upgrades compounds over time. Good in any build."
      },
      "INVOKE": {
        "id": "Invoke",
        "tier": "C",
        "builds": [
          "osty",
          "any"
        ],
        "role": "generator",
        "syn": [
          "summon",
          "energy_gain"
        ],
        "anti": [],
        "mech": [
          "summon",
          "energy_gain"
        ],
        "notes": "Next turn, Summon 2 and gain 2 Energy. C-tier — delayed payoff hurts. Good when you can plan turns ahead but too slow otherwise."
      },
      "POKE": {
        "id": "Poke",
        "tier": "B",
        "builds": [
          "osty"
        ],
        "role": "generator",
        "syn": [
          "osty",
          "zero_cost"
        ],
        "anti": [],
        "mech": [
          "osty_atk"
        ],
        "notes": "Osty deals 6 damage. B-tier — cheap Osty attack that enables Rattle multi-hit chains. The 0-cost version upgraded is excellent."
      },
      "REAP": {
        "id": "Reap",
        "tier": "D",
        "builds": [],
        "role": "payoff",
        "syn": [
          "damage",
          "retain"
        ],
        "anti": [],
        "mech": [
          "damage",
          "retain"
        ],
        "notes": "Retain. Deal 27 damage. D-tier — huge damage but 3 Energy is extremely expensive. Too slow for what it does in most situations."
      },
      "SCULPTING_STRIKE": {
        "id": "Sculpting Strike",
        "tier": "C",
        "builds": [
          "soul"
        ],
        "role": "generator",
        "syn": [
          "damage",
          "ethereal"
        ],
        "anti": [],
        "mech": [
          "damage",
          "ethereal"
        ],
        "notes": "Deal 8 damage. Add Ethereal to a card in Hand. C-tier — adds Ethereal for Spirit of Ash/Pagestorm synergy but the application is narrow."
      },
      "SOW": {
        "id": "Sow",
        "tier": "C",
        "builds": [
          "doom",
          "any"
        ],
        "role": "generator",
        "syn": [
          "damage",
          "aoe",
          "retain"
        ],
        "anti": [],
        "mech": [
          "damage",
          "aoe",
          "retain"
        ],
        "notes": "Retain. Deal 8 damage to ALL enemies. C-tier — AoE with Retain is flexible but 2 Energy for 8 AoE is unimpressive without big Strength scaling."
      },
      "WISP": {
        "id": "Wisp",
        "tier": "C",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "energy_gain",
          "exhaust"
        ],
        "anti": [],
        "mech": [
          "energy_gain",
          "exhaust"
        ],
        "notes": "Gain Energy. Exhaust. C-tier — free Energy that removes itself from deck. Fine in small decks, outclassed by Friendship and Neurosurge."
      },
      "CALCIFY": {
        "id": "Calcify",
        "tier": "C",
        "builds": [
          "osty"
        ],
        "role": "engine",
        "syn": [
          "osty",
          "damage"
        ],
        "anti": [],
        "mech": [
          "osty_buff",
          "passive"
        ],
        "notes": "Osty attacks deal 4 additional damage. C-tier — flat Osty damage buff. Only good if Osty attacks a lot (Rattle, Fetch, Sic Em builds)."
      },
      "CLEANSE": {
        "id": "Cleanse",
        "tier": "S",
        "builds": [
          "osty",
          "any"
        ],
        "role": "generator",
        "syn": [
          "summon",
          "exhaust",
          "deck_thin"
        ],
        "anti": [],
        "mech": [
          "summon",
          "exhaust"
        ],
        "notes": "Summon 3 then Exhaust 1 from Draw Pile. S-tier — grows Osty AND thins deck simultaneously. Double value every play."
      },
      "FRIENDSHIP": {
        "id": "Friendship",
        "tier": "S",
        "builds": [
          "any"
        ],
        "role": "engine",
        "syn": [
          "energy_gain",
          "scaling"
        ],
        "anti": [],
        "mech": [
          "energy_gain",
          "passive"
        ],
        "notes": "Lose 2 Strength. Gain Energy at start of each turn. S-tier — permanent +1 Energy every turn. The Strength cost is negligible compared to the Energy gain."
      },
      "LEGION_OF_BONE": {
        "id": "Legion of Bone",
        "tier": "D",
        "builds": [
          "osty"
        ],
        "role": "generator",
        "syn": [
          "summon"
        ],
        "anti": [],
        "mech": [
          "summon",
          "exhaust"
        ],
        "notes": "ALL players Summon 6. Exhaust. D-tier — splitting Summon with allies limits solo value. Exhaust means no repeat use."
      },
      "MELANCHOLY": {
        "id": "Melancholy",
        "tier": "C",
        "builds": [
          "doom",
          "any"
        ],
        "role": "generator",
        "syn": [
          "block",
          "scaling"
        ],
        "anti": [],
        "mech": [
          "block",
          "cost_reduce"
        ],
        "notes": "Gain 13 Block. Reduces cost by 1 each time ANYONE dies. C-tier — becomes powerful late game when enemies are dying regularly. Too slow early."
      },
      "PAGESTORM": {
        "id": "Pagestorm",
        "tier": "C",
        "builds": [
          "soul"
        ],
        "role": "engine",
        "syn": [
          "soul",
          "draw",
          "ethereal"
        ],
        "anti": [],
        "mech": [
          "draw",
          "passive",
          "ethereal"
        ],
        "notes": "Whenever you draw an Ethereal card, draw 1 more card. C-tier — strong in Ethereal-heavy builds with Parse, Demesne, Call of the Void but narrow otherwise."
      },
      "PULL_FROM_BELOW": {
        "id": "Pull from Below",
        "tier": "C",
        "builds": [
          "soul"
        ],
        "role": "payoff",
        "syn": [
          "ethereal",
          "damage",
          "scaling"
        ],
        "anti": [],
        "mech": [
          "damage",
          "scaling"
        ],
        "notes": "Deal 5 damage per Ethereal card played this combat. C-tier — scales with Ethereal plays. Good in dedicated Ethereal shell, weak otherwise."
      },
      "PUTREFY": {
        "id": "Putrefy",
        "tier": "A",
        "builds": [
          "doom",
          "any"
        ],
        "role": "generator",
        "syn": [
          "doom",
          "weak",
          "vulnerable",
          "exhaust"
        ],
        "anti": [],
        "mech": [
          "weak",
          "vulnerable",
          "exhaust"
        ],
        "notes": "Apply 2 Weak + 2 Vulnerable then Exhaust. A-tier setup — Exhaust means it's not a dead draw late. Pairs with Debilitate to double all debuff effectiveness."
      },
      "RIGHT_HAND_HAND": {
        "id": "Right Hand Hand",
        "tier": "C",
        "builds": [
          "osty"
        ],
        "role": "generator",
        "syn": [
          "osty",
          "recurring"
        ],
        "anti": [],
        "mech": [
          "osty_atk",
          "recurring"
        ],
        "notes": "Osty deals 4 damage. Returns from Discard when you play a 2+ Energy card. C-tier — recurring Osty attack but weak damage and conditional return."
      },
      "SEVERANCE": {
        "id": "Severance",
        "tier": "B",
        "builds": [
          "soul"
        ],
        "role": "generator",
        "syn": [
          "soul",
          "damage",
          "draw"
        ],
        "anti": [],
        "mech": [
          "damage",
          "soul_gen"
        ],
        "notes": "Deal 13 damage. Add a Soul to Draw Pile, Hand, and Discard Pile. B-tier — 13 damage plus 3 Souls spread across the deck. Great Soul generation in one card."
      },
      "SHROUD": {
        "id": "Shroud",
        "tier": "C",
        "builds": [
          "doom"
        ],
        "role": "engine",
        "syn": [
          "doom",
          "block",
          "scaling"
        ],
        "anti": [],
        "mech": [
          "block",
          "passive"
        ],
        "notes": "Whenever you apply Doom, gain 2 Block. C-tier — passive Block per Doom application. In pure Doom builds with Scourge/Deathbringer/Negative Pulse, provides decent defense."
      },
      "SLEIGHT_OF_FLESH": {
        "id": "Sleight of Flesh",
        "tier": "C",
        "builds": [
          "doom",
          "any"
        ],
        "role": "engine",
        "syn": [
          "doom",
          "weak",
          "vulnerable",
          "damage"
        ],
        "anti": [],
        "mech": [
          "damage",
          "passive"
        ],
        "notes": "Whenever you apply a debuff to an enemy, they take 9 damage. C-tier — in debuff-heavy builds (Putrefy, Defy, Debilitate), each debuff application pings for 9 bonus damage."
      },
      "SPUR": {
        "id": "Spur",
        "tier": "B",
        "builds": [
          "osty"
        ],
        "role": "generator",
        "syn": [
          "osty",
          "summon",
          "retain",
          "healing"
        ],
        "anti": [],
        "mech": [
          "summon",
          "retain",
          "healing"
        ],
        "notes": "Retain. Summon 3. Osty heals 5 HP. B-tier — Retain makes it safe to hold. Heals and grows Osty simultaneously. Great for keeping Osty alive through Necro Mastery turns."
      },
      "VEILPIERCER": {
        "id": "Veilpiercer",
        "tier": "C",
        "builds": [
          "soul"
        ],
        "role": "generator",
        "syn": [
          "ethereal",
          "zero_cost",
          "damage"
        ],
        "anti": [],
        "mech": [
          "damage",
          "cost_reduce"
        ],
        "notes": "Deal 10 damage. Next Ethereal card costs 0. C-tier — enables free Parse, free Demesne, free Seance. Narrow but powerful in Ethereal builds."
      },
      "EIDOLON": {
        "id": "Eidolon",
        "tier": "D",
        "builds": [],
        "role": "payoff",
        "syn": [
          "exhaust"
        ],
        "anti": [],
        "mech": [
          "exhaust",
          "intangible"
        ],
        "notes": "Exhaust your Hand. If 9+ cards were Exhausted, gain 1 Intangible. D-tier — nearly impossible condition. Requires massive hand size and most of your cards to be exhaustable."
      },
      "GLIMPSE_BEYOND": {
        "id": "Glimpse Beyond",
        "tier": "D",
        "builds": [
          "soul"
        ],
        "role": "generator",
        "syn": [
          "soul"
        ],
        "anti": [],
        "mech": [
          "soul_gen",
          "exhaust"
        ],
        "notes": "ALL players add 3 Souls to Draw Pile. Exhaust. D-tier — splits the benefit with allies. Solo value is just 3 Souls and Exhaust — outclassed by Capture Spirit and Severance."
      },
      "HANG": {
        "id": "Hang",
        "tier": "C",
        "builds": [
          "doom"
        ],
        "role": "payoff",
        "syn": [
          "doom",
          "damage",
          "scaling"
        ],
        "anti": [],
        "mech": [
          "damage",
          "scaling"
        ],
        "notes": "Deal 10 damage. Doubles ALL Hang damage to this enemy. C-tier — exponential scaling but extremely slow to reach meaningful numbers against tanky enemies."
      },
      "MISERY": {
        "id": "Misery",
        "tier": "C",
        "builds": [
          "doom",
          "any"
        ],
        "role": "payoff",
        "syn": [
          "doom",
          "weak",
          "vulnerable",
          "aoe"
        ],
        "anti": [],
        "mech": [
          "damage",
          "debuff",
          "aoe"
        ],
        "notes": "Deal 7 damage. Apply all enemy debuffs to ALL other enemies. C-tier — spreads Weak/Vulnerable/Doom to all enemies. Devastating in multi-enemy fights with Debilitate pre-applied."
      },
      "SEANCE": {
        "id": "Seance",
        "tier": "S",
        "builds": [
          "soul"
        ],
        "role": "engine",
        "syn": [
          "soul",
          "exhaust",
          "deck_thin"
        ],
        "anti": [],
        "mech": [
          "soul_gen",
          "exhaust",
          "transform"
        ],
        "notes": "Ethereal. Transform a Draw Pile card into a Soul. S-tier — converts dead cards into Souls for Haunt, Death March, Soul Storm. Deck thinning + Soul generation simultaneously."
      },
      "SENTRY_MODE": {
        "id": "Sentry Mode",
        "tier": "C",
        "builds": [
          "osty"
        ],
        "role": "engine",
        "syn": [
          "osty",
          "recurring"
        ],
        "anti": [],
        "mech": [
          "osty_atk",
          "passive"
        ],
        "notes": "At start of turn, add 1 Sweeping Gaze to Hand. C-tier — generates a free Osty attack each turn but Sweeping Gaze is weak on its own."
      },
      "SPIRIT_OF_ASH": {
        "id": "Spirit of Ash",
        "tier": "C",
        "builds": [
          "soul"
        ],
        "role": "engine",
        "syn": [
          "block",
          "ethereal",
          "scaling"
        ],
        "anti": [],
        "mech": [
          "block",
          "passive",
          "ethereal"
        ],
        "notes": "Whenever you play an Ethereal card, gain 4 Block. C-tier — in Ethereal builds (Parse, Demesne, Seance, Call of the Void), generates consistent passive Block each turn."
      },
      "UNDEATH": {
        "id": "Undeath",
        "tier": "S",
        "builds": [
          "any"
        ],
        "role": "engine",
        "syn": [
          "block",
          "scaling",
          "recurring"
        ],
        "anti": [],
        "mech": [
          "block",
          "recursive"
        ],
        "notes": "Gain 7 Block. Add a copy to Discard Pile. S-tier — recurring Block engine that never depletes. Every copy adds another copy, producing infinite Block over time. Pairs with Transfigure for Replay doubling."
      },
      "FORBIDDEN_GRIMOIRE": {
        "id": "Forbidden Grimoire",
        "tier": "S",
        "builds": [
          "any"
        ],
        "role": "engine",
        "syn": [
          "exhaust",
          "deck_thin",
          "scaling"
        ],
        "anti": [],
        "mech": [
          "exhaust",
          "passive",
          "eternal"
        ],
        "notes": "At end of combat, remove a card from deck. Eternal. Ancient — free removal after every fight. Eternal means it stays forever. Essentially a permanent Removal Room after every combat."
      },
      "PROTECTOR": {
        "id": "Protector",
        "tier": "A",
        "builds": [
          "osty"
        ],
        "role": "payoff",
        "syn": [
          "osty",
          "damage",
          "scaling"
        ],
        "anti": [],
        "mech": [
          "osty_atk",
          "scaling"
        ],
        "notes": "Osty deals 10 damage plus additional damage equal to Osty's Max HP. A-tier — with high Summon stacks from Reanimate/Cleanse/Spur, Osty's Max HP becomes enormous, making this a massive nuke."
      },
      "NECRO_MASTERY": {
        "id": "Necro Mastery",
        "tier": "A",
        "builds": [
          "osty"
        ],
        "syn": [
          "osty",
          "summon",
          "aoe",
          "scaling"
        ],
        "anti": [],
        "mech": [
          "summon",
          "aoe",
          "passive",
          "osty_buff"
        ],
        "role": "engine",
        "notes": "Summon 5. Whenever Osty loses HP, ALL enemies lose that much HP. Converts Osty tanking into AoE offense — the more Osty absorbs, the more damage all enemies take. Requires reliably keeping Osty alive."
      }
    },
    "colorless": {
      "ENLIGHTENMENT": {
        "id": "Enlightenment",
        "tier": "B",
        "builds": [
          "any"
        ],
        "syn": [
          "draw",
          "scaling"
        ],
        "anti": [],
        "notes": "Reduces all card costs this turn. Good in expensive decks.",
        "mech": [
          "cost_reduction"
        ],
        "role": "engine"
      },
      "FLASH_OF_STEEL": {
        "id": "Flash of Steel",
        "tier": "B",
        "builds": [
          "claw",
          "any"
        ],
        "syn": [
          "draw",
          "damage"
        ],
        "anti": [],
        "notes": "Deal 5 damage. Draw 1 card. B-tier — 0-cost damage and draw. Perfect in Claw Defect builds for Scrape cycling.",
        "mech": [
          "damage",
          "draw"
        ],
        "role": "generator"
      },
      "JACK_OF_ALL_TRADES": {
        "id": "Jack of All Trades",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "any"
        ],
        "anti": [],
        "notes": "Add 1 random Colorless card to Hand. Exhaust. C-tier — random value. Occasionally hits Apotheosis or Apparition for huge upside.",
        "mech": [
          "exhaust"
        ],
        "role": "generator"
      },
      "APOTHEOSIS": {
        "id": "Apotheosis",
        "tier": "S",
        "builds": [
          "any"
        ],
        "syn": [
          "scaling",
          "exhaust"
        ],
        "anti": [],
        "notes": "Innate. Upgrade ALL cards. Exhaust. S-tier — instant full deck upgrade mid-combat. Turns every card into its upgraded form for the rest of the fight.",
        "mech": [
          "upgrade",
          "exhaust",
          "innate"
        ],
        "role": "engine"
      },
      "PANACHE": {
        "id": "Panache",
        "tier": "S",
        "builds": [
          "claw",
          "sly",
          "any"
        ],
        "syn": [
          "aoe",
          "damage",
          "scaling"
        ],
        "anti": [],
        "notes": "Every 5 cards played in a turn, deal 10 AoE. S-tier — in Claw or Sly builds playing 10+ cards per turn, Panache deals 20-30 free AoE every turn passively.",
        "mech": [
          "aoe",
          "passive"
        ],
        "role": "engine"
      },
      "DRAMATIC_ENTRANCE": {
        "id": "Dramatic Entrance",
        "tier": "B",
        "builds": [
          "any"
        ],
        "syn": [
          "aoe",
          "damage"
        ],
        "anti": [],
        "notes": "Innate. Deal 11 AoE damage. Exhaust. B-tier — always in opening hand and deals 11 AoE for free. Great first-turn swing in any fight.",
        "mech": [
          "aoe",
          "damage",
          "innate",
          "exhaust"
        ],
        "role": "payoff"
      },
      "SECRET_WEAPON": {
        "id": "Secret Weapon",
        "tier": "A",
        "builds": [
          "claw",
          "any"
        ],
        "syn": [
          "exhaust",
          "draw"
        ],
        "anti": [],
        "notes": "Put an Attack from Draw Pile into Hand. Exhaust. A-tier — tutors any Attack on demand. In Claw builds pulls All for One; in Ironclad finds Whirlwind or Thrash.",
        "mech": [
          "draw",
          "exhaust"
        ],
        "role": "generator"
      },
      "MIND_BLAST": {
        "id": "Mind Blast",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "damage"
        ],
        "anti": [],
        "notes": "Innate. Deal damage equal to Draw Pile size. C-tier — always in opening hand, deals 15-20 early. Weakens as deck gets thinner.",
        "mech": [
          "damage",
          "innate"
        ],
        "role": "payoff"
      },
      "THINKING_AHEAD": {
        "id": "Thinking Ahead",
        "tier": "A",
        "builds": [
          "any"
        ],
        "syn": [
          "draw",
          "exhaust"
        ],
        "anti": [],
        "notes": "Draw 2. Put 1 card on top of Draw Pile. Exhaust. A-tier — draw filtering that ensures your next draw is exactly what you want. Great for setting up combo turns.",
        "mech": [
          "draw",
          "exhaust"
        ],
        "role": "generator"
      },
      "HAND_OF_GREED": {
        "id": "Hand of Greed",
        "tier": "S",
        "builds": [
          "any"
        ],
        "syn": [
          "damage"
        ],
        "anti": [],
        "notes": "Deal 20 damage. If Fatal, gain 20 Gold. S-tier — reliable 20 damage with meaningful gold upside on kills. Strong in any deck.",
        "mech": [
          "damage",
          "gold"
        ],
        "role": "payoff"
      },
      "THE_BOMB": {
        "id": "The Bomb",
        "tier": "C",
        "builds": [
          "any"
        ],
        "syn": [
          "aoe",
          "damage"
        ],
        "anti": [],
        "notes": "Deal 40 AoE damage after 3 turns. C-tier — massive damage but 3-turn delay. Reliable in long fights, risky in short ones.",
        "mech": [
          "aoe",
          "damage",
          "delayed"
        ],
        "role": "payoff"
      },
      "APPARITION": {
        "id": "Apparition",
        "tier": "A",
        "builds": [
          "any"
        ],
        "syn": [
          "block",
          "ethereal",
          "exhaust"
        ],
        "anti": [],
        "notes": "Ethereal. Gain 1 Intangible. Exhaust. A-tier — Intangible blocks ALL damage this turn to 1. Ancient. Against massive boss hits, this is essential.",
        "mech": [
          "intangible",
          "exhaust",
          "ethereal"
        ],
        "role": "generator"
      },
      "AUTOMATION": {
        "id": "Automation",
        "tier": "B",
        "builds": [
          "any"
        ],
        "role": "engine",
        "syn": [
          "draw",
          "energy_gain"
        ],
        "anti": [],
        "mech": [
          "energy_gain",
          "passive"
        ],
        "notes": "Every 10 cards drawn, gain Energy. B-tier — in draw-heavy decks like Sly Silent or Claw Defect, triggers every 1-2 turns for free Energy."
      },
      "BELIEVE_IN_YOU": {
        "id": "Believe in You",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "energy_gain"
        ],
        "notes": "Another player gains 3 Energy. D-tier — no solo value. Multiplayer only."
      },
      "CATASTROPHE": {
        "id": "Catastrophe",
        "tier": "C",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "draw"
        ],
        "anti": [],
        "mech": [
          "random"
        ],
        "notes": "Play 2 random cards from Draw Pile. C-tier — can be powerful with a lean deck but too random for consistent use."
      },
      "COORDINATE": {
        "id": "Coordinate",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "strength"
        ],
        "notes": "Give another player 5 Strength this turn. D-tier — no solo value."
      },
      "DARK_SHACKLES": {
        "id": "Dark Shackles",
        "tier": "A",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "debuff",
          "exhaust"
        ],
        "anti": [],
        "mech": [
          "debuff",
          "exhaust"
        ],
        "notes": "Enemy loses 9 Strength this turn. Exhaust. A-tier — neutralizes high-Strength enemies for one turn. Massive defensive swing against elites and bosses."
      },
      "DISCOVERY": {
        "id": "Discovery",
        "tier": "A",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "draw",
          "any"
        ],
        "anti": [],
        "mech": [
          "draw",
          "exhaust"
        ],
        "notes": "Choose 1 of 3 random cards to add to Hand, free this turn. Exhaust. A-tier — free card this turn from any class pool. Flexible and generates immediate value."
      },
      "EQUILIBRIUM": {
        "id": "Equilibrium",
        "tier": "C",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "block",
          "retain"
        ],
        "anti": [],
        "mech": [
          "block",
          "retain"
        ],
        "notes": "Gain 13 Block. Retain your Hand this turn. C-tier — high Block plus Retain is useful for setting up big turns, but 2 Energy is steep for just Block."
      },
      "FASTEN": {
        "id": "Fasten",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [
          "block"
        ],
        "anti": [],
        "mech": [
          "block"
        ],
        "notes": "Gain 5 additional Block from Defend cards. D-tier — only useful if you have many Defends, which you should be removing."
      },
      "FINESSE": {
        "id": "Finesse",
        "tier": "B",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "block",
          "draw"
        ],
        "anti": [],
        "mech": [
          "block",
          "draw"
        ],
        "notes": "Gain 4 Block. Draw 1 card. B-tier — cheap, efficient dual-purpose card. Block and draw at 0 cost is always good."
      },
      "FISTICUFFS": {
        "id": "Fisticuffs",
        "tier": "B",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "block",
          "damage"
        ],
        "anti": [],
        "mech": [
          "block",
          "damage"
        ],
        "notes": "Deal 7 damage. Gain Block equal to damage dealt. B-tier — 7 damage plus 7 Block in one card. Especially good with Strength scaling."
      },
      "GANG_UP": {
        "id": "Gang Up",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "damage"
        ],
        "notes": "Deal 5 damage, plus 5 per other player attack. D-tier — multiplayer only scaling. No solo value."
      },
      "HUDDLE_UP": {
        "id": "Huddle Up",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "draw"
        ],
        "notes": "ALL allies draw 2 cards. D-tier — multiplayer only. No solo benefit."
      },
      "IMPATIENCE": {
        "id": "Impatience",
        "tier": "C",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "draw"
        ],
        "anti": [],
        "mech": [
          "draw",
          "conditional"
        ],
        "notes": "If you have no Attacks in Hand, draw 2 cards. C-tier — conditional draw. Reliable in Skill-heavy builds like Sly."
      },
      "INTERCEPT": {
        "id": "Intercept",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "block"
        ],
        "notes": "Gain 9 Block. Redirect attacks from other players to you. D-tier — multiplayer mechanic. Solo: just 9 Block for 1 Energy which is okay but not worth a slot."
      },
      "LIFT": {
        "id": "Lift",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "block"
        ],
        "notes": "Give another player 11 Block. D-tier — multiplayer only. No solo value."
      },
      "OMNISLICE": {
        "id": "Omnislice",
        "tier": "B",
        "builds": [
          "any"
        ],
        "role": "payoff",
        "syn": [
          "aoe",
          "damage"
        ],
        "anti": [],
        "mech": [
          "damage",
          "aoe"
        ],
        "notes": "Deal 8 damage. Deal that much AoE to all other enemies. B-tier — effectively 8 to primary plus 8 AoE to rest. Great multi-enemy value."
      },
      "PANIC_BUTTON": {
        "id": "Panic Button",
        "tier": "C",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "block",
          "exhaust"
        ],
        "anti": [],
        "mech": [
          "block",
          "exhaust"
        ],
        "notes": "Gain 30 Block. Cannot gain Block for 2 turns. Exhaust. C-tier — massive emergency Block but the 2-turn Block lockout is crippling."
      },
      "PREP_TIME": {
        "id": "Prep Time",
        "tier": "B",
        "builds": [
          "any"
        ],
        "role": "engine",
        "syn": [
          "strength",
          "scaling"
        ],
        "anti": [],
        "mech": [
          "strength",
          "passive"
        ],
        "notes": "At start of turn, gain 4 Vigor (temp Strength). B-tier — free 4 Vigor every turn. Greatly boosts multi-hit attacks."
      },
      "PRODUCTION": {
        "id": "Production",
        "tier": "B",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "energy_gain",
          "exhaust"
        ],
        "anti": [],
        "mech": [
          "energy_gain",
          "exhaust"
        ],
        "notes": "Gain 2 Energy. Exhaust. B-tier — free 2 Energy once per fight. Enables massive single-turn plays when needed."
      },
      "PROLONG": {
        "id": "Prolong",
        "tier": "C",
        "builds": [
          "block",
          "stars"
        ],
        "role": "generator",
        "syn": [
          "block",
          "exhaust"
        ],
        "anti": [],
        "mech": [
          "block",
          "exhaust"
        ],
        "notes": "Next turn, gain Block equal to current Block. Exhaust. C-tier — doubles current Block next turn. Powerful in Block builds with Barricade or Particle Wall."
      },
      "PROWESS": {
        "id": "Prowess",
        "tier": "B",
        "builds": [
          "any"
        ],
        "role": "engine",
        "syn": [
          "strength",
          "dexterity",
          "scaling"
        ],
        "anti": [],
        "mech": [
          "strength",
          "dexterity",
          "permanent_scaling"
        ],
        "notes": "Gain 1 Strength and 1 Dexterity. B-tier — permanent stat gains that buff every attack and block card for the rest of combat."
      },
      "PURITY": {
        "id": "Purity",
        "tier": "C",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "exhaust",
          "deck_thin"
        ],
        "anti": [],
        "mech": [
          "exhaust",
          "retain"
        ],
        "notes": "Retain. Exhaust up to 3 cards in Hand. Exhaust. C-tier — emergency deck thinner. Removes dead cards mid-combat. Pairs well with Seance in Necrobinder."
      },
      "RESTLESSNESS": {
        "id": "Restlessness",
        "tier": "C",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "draw",
          "energy_gain",
          "retain"
        ],
        "anti": [],
        "mech": [
          "draw",
          "energy_gain",
          "retain",
          "conditional"
        ],
        "notes": "Retain. If Hand is empty, draw 2 and gain 2 Energy. C-tier — conditional on emptying hand which limits reliability."
      },
      "SEEKER_STRIKE": {
        "id": "Seeker Strike",
        "tier": "B",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "draw",
          "damage"
        ],
        "anti": [],
        "mech": [
          "damage",
          "draw"
        ],
        "notes": "Deal 6 damage. Choose 1 of 3 Draw Pile cards to add to Hand. B-tier — damage plus tutoring. Find your engine card on demand."
      },
      "SHOCKWAVE": {
        "id": "Shockwave",
        "tier": "A",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "weak",
          "vulnerable",
          "exhaust",
          "aoe"
        ],
        "anti": [],
        "mech": [
          "weak",
          "vulnerable",
          "exhaust",
          "aoe"
        ],
        "notes": "Apply 3 Weak and 3 Vulnerable to ALL enemies. Exhaust. A-tier — AoE setup that doubles all damage and reduces all enemy damage simultaneously. Universal powerhouse."
      },
      "SPLASH": {
        "id": "Splash",
        "tier": "C",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "any"
        ],
        "anti": [],
        "mech": [
          "random"
        ],
        "notes": "Choose 1 of 3 random Attacks from another class, free this turn. C-tier — can hit class-exclusive powerhouses but too random for consistent value."
      },
      "STRATAGEM": {
        "id": "Stratagem",
        "tier": "B",
        "builds": [
          "any"
        ],
        "role": "engine",
        "syn": [
          "draw",
          "scaling"
        ],
        "anti": [],
        "mech": [
          "draw",
          "passive"
        ],
        "notes": "Whenever you shuffle Draw Pile, choose a card from it to put in Hand. B-tier — consistent setup insurance every cycle. Always have your key card available."
      },
      "TAG_TEAM": {
        "id": "Tag Team",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "damage"
        ],
        "notes": "Deal 11 damage. Another player's next attack plays an extra time. D-tier — multiplayer only upside."
      },
      "THRUMMING_HATCHET": {
        "id": "Thrumming Hatchet",
        "tier": "B",
        "builds": [
          "any"
        ],
        "role": "payoff",
        "syn": [
          "damage",
          "recurring"
        ],
        "anti": [],
        "mech": [
          "damage",
          "recurring"
        ],
        "notes": "Deal 11 damage. Returns to Hand at start of next turn. B-tier — recurring 11 damage every turn for 1 Energy. Consistent damage without requiring deck cycling."
      },
      "ULTIMATE_DEFEND": {
        "id": "Ultimate Defend",
        "tier": "D",
        "builds": [],
        "role": "generator",
        "syn": [
          "block"
        ],
        "anti": [],
        "mech": [
          "block"
        ],
        "notes": "Gain 11 Block. D-tier — just Block with no secondary effect at 1 Energy. Worse than most character-specific block cards."
      },
      "ULTIMATE_STRIKE": {
        "id": "Ultimate Strike",
        "tier": "D",
        "builds": [],
        "role": "generator",
        "syn": [
          "damage"
        ],
        "anti": [],
        "mech": [
          "damage"
        ],
        "notes": "Deal 14 damage. D-tier — plain damage with no secondary effect. Every character has better attack options."
      },
      "VOLLEY": {
        "id": "Volley",
        "tier": "C",
        "builds": [
          "any"
        ],
        "role": "payoff",
        "syn": [
          "damage"
        ],
        "anti": [],
        "mech": [
          "damage",
          "x_cost"
        ],
        "notes": "Deal 10 damage X times. C-tier — scales with Energy. With 3 Energy, deals 30 damage. Fine but not worth a rare slot."
      },
      "ALCHEMIZE": {
        "id": "Alchemize",
        "tier": "B",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "exhaust"
        ],
        "anti": [],
        "mech": [
          "exhaust"
        ],
        "notes": "Procure a random potion. Exhaust. B-tier — free potion once per fight is reliable value. Potions are strong in STS2."
      },
      "ANOINTED": {
        "id": "Anointed",
        "tier": "C",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "draw"
        ],
        "anti": [],
        "mech": [
          "draw",
          "exhaust"
        ],
        "notes": "Put every Rare card from Draw Pile into Hand. Exhaust. C-tier — situational. Great when you have many Rares, useless early run."
      },
      "BEACON_OF_HOPE": {
        "id": "Beacon of Hope",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [
          "block"
        ],
        "anti": [],
        "mech": [
          "block",
          "passive"
        ],
        "notes": "Whenever you gain Block, other players gain half. D-tier — multiplayer only upside. Solo: no benefit."
      },
      "BEAT_DOWN": {
        "id": "Beat Down",
        "tier": "C",
        "builds": [
          "any"
        ],
        "role": "payoff",
        "syn": [
          "damage"
        ],
        "anti": [],
        "mech": [
          "damage",
          "random"
        ],
        "notes": "Play 3 random Attacks from Discard Pile. C-tier — can chain strong attacks but randomness limits reliability."
      },
      "BOLAS": {
        "id": "Bolas",
        "tier": "C",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "damage",
          "recurring"
        ],
        "anti": [],
        "mech": [
          "damage",
          "recurring"
        ],
        "notes": "Deal 3 damage. Returns to Hand next turn. C-tier — very low damage for a recurring card. Falls off quickly."
      },
      "CALAMITY": {
        "id": "Calamity",
        "tier": "C",
        "builds": [
          "any"
        ],
        "role": "engine",
        "syn": [
          "damage",
          "any"
        ],
        "anti": [],
        "mech": [
          "passive"
        ],
        "notes": "Whenever you play an Attack, add a random Attack to Hand. C-tier — generates attacks but random. Good in Attack-heavy builds."
      },
      "ENTROPY": {
        "id": "Entropy",
        "tier": "C",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "any"
        ],
        "anti": [],
        "mech": [
          "transform",
          "passive"
        ],
        "notes": "At start of turn, Transform 1 Hand card. C-tier — deck manipulation that can upgrade bad cards but can also destroy good ones. Too random."
      },
      "ETERNAL_ARMOR": {
        "id": "Eternal Armor",
        "tier": "B",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "block",
          "scaling"
        ],
        "anti": [],
        "mech": [
          "plating",
          "permanent_scaling"
        ],
        "notes": "Gain 7 Plating (permanent flat damage reduction per hit). B-tier — Plating stacks and never expires. Extremely durable in long fights."
      },
      "GOLD_AXE": {
        "id": "Gold Axe",
        "tier": "C",
        "builds": [
          "any"
        ],
        "role": "payoff",
        "syn": [
          "damage",
          "scaling"
        ],
        "anti": [],
        "mech": [
          "damage",
          "scaling"
        ],
        "notes": "Deal damage equal to cards played this combat. C-tier — scales across entire fight. With 30+ cards played, deals massive damage. Too slow early."
      },
      "HIDDEN_GEM": {
        "id": "Hidden Gem",
        "tier": "C",
        "builds": [
          "any"
        ],
        "role": "engine",
        "syn": [
          "scaling",
          "replay"
        ],
        "anti": [],
        "mech": [
          "replay"
        ],
        "notes": "A random Draw Pile card gains Replay 2. C-tier — Replay 2 means it plays 2 extra times. Hitting a key engine card is broken, hitting filler is wasted."
      },
      "JACKPOT": {
        "id": "Jackpot",
        "tier": "B",
        "builds": [
          "claw",
          "any"
        ],
        "role": "payoff",
        "syn": [
          "damage",
          "zero_cost"
        ],
        "anti": [],
        "mech": [
          "damage",
          "zero_cost"
        ],
        "notes": "Deal 25 damage. Add 3 random 0-cost cards to Hand. B-tier — strong damage plus 3 free 0-cost cards for cycling or Panache triggers."
      },
      "KNOCKDOWN": {
        "id": "Knockdown",
        "tier": "B",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "damage",
          "vulnerable"
        ],
        "anti": [],
        "mech": [
          "damage",
          "vulnerable"
        ],
        "notes": "Deal 10 damage. Enemy takes double damage from other players this turn. B-tier — great setup for multi-player or if you have follow-up attacks. 10 damage is solid base."
      },
      "MASTER_OF_STRATEGY": {
        "id": "Master of Strategy",
        "tier": "S",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "draw",
          "exhaust"
        ],
        "anti": [],
        "mech": [
          "draw",
          "exhaust"
        ],
        "notes": "Draw 3 cards. Exhaust. S-tier — draw 3 at 0 Energy then Exhaust. Best draw card in the game for any character."
      },
      "MAYHEM": {
        "id": "Mayhem",
        "tier": "B",
        "builds": [
          "any"
        ],
        "role": "engine",
        "syn": [
          "any",
          "scaling"
        ],
        "anti": [],
        "mech": [
          "passive"
        ],
        "notes": "At start of turn, play top card of Draw Pile. B-tier — free card every turn. Powerful with Stratagem to control what's on top."
      },
      "MIMIC": {
        "id": "Mimic",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [
          "block"
        ],
        "anti": [],
        "mech": [
          "block",
          "exhaust"
        ],
        "notes": "Gain Block equal to another player's Block. Exhaust. D-tier — multiplayer only value."
      },
      "NOSTALGIA": {
        "id": "Nostalgia",
        "tier": "B",
        "builds": [
          "any"
        ],
        "role": "engine",
        "syn": [
          "scaling",
          "draw"
        ],
        "anti": [],
        "mech": [
          "passive",
          "recursive"
        ],
        "notes": "First Attack or Skill each turn returns to top of Draw Pile. B-tier — ensures your best card is always available next turn. Recursive engine."
      },
      "RALLY": {
        "id": "Rally",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [
          "block"
        ],
        "anti": [],
        "mech": [
          "block"
        ],
        "notes": "ALL players gain 12 Block. D-tier — in solo play, just 12 Block at Rare cost. Not worth it."
      },
      "REND": {
        "id": "Rend",
        "tier": "B",
        "builds": [
          "any"
        ],
        "role": "payoff",
        "syn": [
          "damage",
          "debuff"
        ],
        "anti": [],
        "mech": [
          "damage",
          "scaling"
        ],
        "notes": "Deal 15 damage + 5 per unique debuff on enemy. B-tier — with Shockwave (Weak+Vulnerable = 2 debuffs), deals 25 damage. With Putrefy or Debilitate, even more."
      },
      "ROLLING_BOULDER": {
        "id": "Rolling Boulder",
        "tier": "B",
        "builds": [
          "any"
        ],
        "role": "engine",
        "syn": [
          "aoe",
          "damage",
          "scaling"
        ],
        "anti": [],
        "mech": [
          "aoe",
          "passive",
          "scaling"
        ],
        "notes": "At start of turn, deal 5 AoE damage increasing by 5. B-tier — starts at 5 AoE, grows to 10, 15, 20+. In long fights this becomes a win condition."
      },
      "SALVO": {
        "id": "Salvo",
        "tier": "B",
        "builds": [
          "any"
        ],
        "role": "payoff",
        "syn": [
          "damage",
          "retain"
        ],
        "anti": [],
        "mech": [
          "damage",
          "retain"
        ],
        "notes": "Deal 12 damage. Retain Hand this turn. B-tier — solid damage with free hand retention for next turn setup."
      },
      "SCRAWL": {
        "id": "Scrawl",
        "tier": "S",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "draw",
          "exhaust"
        ],
        "anti": [],
        "mech": [
          "draw",
          "exhaust"
        ],
        "notes": "Draw cards until Hand is full. Exhaust. S-tier — draws 5-7 cards to fill hand completely. In any build, this refuels an entire turn instantly."
      },
      "SECRET_TECHNIQUE": {
        "id": "Secret Technique",
        "tier": "A",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "exhaust",
          "draw"
        ],
        "anti": [],
        "mech": [
          "draw",
          "exhaust"
        ],
        "notes": "Put a Skill from Draw Pile into Hand. Exhaust. A-tier — tutors any Skill on demand. Finds Barricade, Particle Wall, Void Form, Convergence exactly when needed."
      },
      "THE_GAMBIT": {
        "id": "The Gambit",
        "tier": "D",
        "builds": [],
        "role": "generator",
        "syn": [
          "block"
        ],
        "anti": [],
        "mech": [
          "block"
        ],
        "notes": "Gain 50 Block. If you take unblocked damage this combat, die. D-tier — instant death condition makes this unplayable in most situations."
      },
      "BRIGHTEST_FLAME": {
        "id": "Brightest Flame",
        "tier": "B",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "energy_gain",
          "draw"
        ],
        "anti": [],
        "mech": [
          "energy_gain",
          "draw"
        ],
        "notes": "Gain 2 Energy. Draw 2 cards. Lose 1 Max HP. B-tier — Ancient. Strong value (2 Energy + 2 draw) with manageable HP cost."
      },
      "MAUL": {
        "id": "Maul",
        "tier": "C",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "damage",
          "scaling"
        ],
        "anti": [],
        "mech": [
          "damage",
          "multi_hit",
          "scaling"
        ],
        "notes": "Deal 5 damage twice. All Maul cards deal 1 more damage this combat. Ancient. C-tier — weak without multiples. With 3+ Mauls, scaling becomes relevant."
      },
      "NEOWS_FURY": {
        "id": "Neow's Fury",
        "tier": "A",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "damage",
          "draw",
          "exhaust"
        ],
        "anti": [],
        "mech": [
          "damage",
          "draw",
          "exhaust"
        ],
        "notes": "Deal 10 damage. Put 2 random Discard cards into Hand. Exhaust. A-tier — Ancient. 10 damage plus card retrieval. Retrieves key cards exactly when needed."
      },
      "RELAX": {
        "id": "Relax",
        "tier": "A",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "block",
          "draw",
          "energy_gain",
          "exhaust"
        ],
        "anti": [],
        "mech": [
          "block",
          "draw",
          "energy_gain",
          "exhaust"
        ],
        "notes": "Gain 15 Block. Next turn, draw 2 cards and gain 2 Energy. Exhaust. A-tier — Ancient. Massive defensive turn plus enormous setup for next turn."
      },
      "WHISTLE": {
        "id": "Whistle",
        "tier": "S",
        "builds": [
          "any"
        ],
        "role": "payoff",
        "syn": [
          "damage",
          "exhaust"
        ],
        "anti": [],
        "mech": [
          "damage",
          "stun",
          "exhaust"
        ],
        "notes": "Deal 33 damage. Stun the enemy. Exhaust. S-tier — Ancient. 33 damage plus a full Stun (enemy skips turn) is among the most powerful single cards in the game."
      },
      "WISH": {
        "id": "Wish",
        "tier": "B",
        "builds": [
          "any"
        ],
        "role": "generator",
        "syn": [
          "any",
          "exhaust"
        ],
        "anti": [],
        "mech": [
          "draw",
          "exhaust"
        ],
        "notes": "Put any card from Draw Pile into Hand. Exhaust. B-tier — Ancient. Universal tutor with no restriction on card type. Finds your win condition on demand."
      },
      "BURN": {
        "id": "Burn",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "status"
        ],
        "notes": "Status. Unplayable. Take 2 damage at end of turn if in Hand."
      },
      "DAZED": {
        "id": "Dazed",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "status",
          "ethereal"
        ],
        "notes": "Status. Unplayable. Ethereal — discards itself automatically."
      },
      "SLIMED": {
        "id": "Slimed",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [
          "draw",
          "status_synergy"
        ],
        "anti": [],
        "mech": [
          "draw",
          "exhaust",
          "status"
        ],
        "notes": "Status. Draw 1 card. Exhaust. Actually useful — draws a card when played (unlike other Status cards)."
      },
      "WOUND": {
        "id": "Wound",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "status"
        ],
        "notes": "Status. Unplayable dead card."
      },
      "VOID": {
        "id": "Void",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [
          "status_synergy"
        ],
        "anti": [],
        "mech": [
          "status",
          "ethereal"
        ],
        "notes": "Status. Ethereal. Loses Energy when drawn. Used in Defect Status builds."
      },
      "BECKON": {
        "id": "Beckon",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "status"
        ],
        "notes": "Status. Lose 6 HP at end of turn if in Hand. Dangerous holdover."
      },
      "DEBRIS": {
        "id": "Debris",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "status",
          "exhaust"
        ],
        "notes": "Status. Exhaust. Generated by Collision Course. Instantly removes itself."
      },
      "DISINTEGRATION": {
        "id": "Disintegration",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "status"
        ],
        "notes": "Status. Take 6 damage at end of turn. Very dangerous — remove immediately."
      },
      "FRANTIC_ESCAPE": {
        "id": "Frantic Escape",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "status"
        ],
        "notes": "Status. Gets farther away and costs more each turn. Avoid."
      },
      "INFECTION": {
        "id": "Infection",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "status"
        ],
        "notes": "Status. Unplayable. Take 3 damage at end of turn if in Hand."
      },
      "MIND_ROT": {
        "id": "Mind Rot",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "status"
        ],
        "notes": "Status. Draw 1 fewer card each turn. Devastating in draw-dependent builds."
      },
      "SLOTH": {
        "id": "Sloth",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "status"
        ],
        "notes": "Status. Cannot play more than 3 cards per turn. Crippling in Claw or Sly builds."
      },
      "SOOT": {
        "id": "Soot",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "status"
        ],
        "notes": "Status. Unplayable dead card."
      },
      "TOXIC": {
        "id": "Toxic",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "status",
          "exhaust"
        ],
        "notes": "Status. Take 5 damage at end of turn if in Hand. Exhausts after triggering."
      },
      "WASTE_AWAY": {
        "id": "Waste Away",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "status"
        ],
        "notes": "Status. Gain 1 less Energy per turn. Extremely punishing — remove immediately."
      },
      "ASCENDERS_BANE": {
        "id": "Ascender's Bane",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "curse",
          "ethereal",
          "eternal"
        ],
        "notes": "Curse. Unplayable, Ethereal, Eternal. Always in deck, always discarded. Minimal impact."
      },
      "BAD_LUCK": {
        "id": "Bad Luck",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "curse",
          "eternal"
        ],
        "notes": "Curse. Lose 13 HP at end of turn if in Hand. Eternal. Extremely dangerous."
      },
      "CLUMSY": {
        "id": "Clumsy",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "curse",
          "ethereal"
        ],
        "notes": "Curse. Unplayable. Ethereal — discards itself. Least harmful curse."
      },
      "CURSE_OF_THE_BELL": {
        "id": "Curse of the Bell",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "curse",
          "eternal"
        ],
        "notes": "Curse. Unplayable, Eternal. Dead card forever in deck."
      },
      "DEBT": {
        "id": "Debt",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "curse"
        ],
        "notes": "Curse. Lose 10 Gold at end of turn if in Hand. Drains economy quickly."
      },
      "DECAY": {
        "id": "Decay",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "curse"
        ],
        "notes": "Curse. Take 2 damage at end of turn if in Hand."
      },
      "DOUBT": {
        "id": "Doubt",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "curse"
        ],
        "notes": "Curse. Gain 1 Weak at end of turn if in Hand. Debilitates offense."
      },
      "ENTHRALLED": {
        "id": "Enthralled",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "curse",
          "eternal"
        ],
        "notes": "Curse. Must be played before other cards if in Hand. Eternal. Forces wasted Energy."
      },
      "FOLLY": {
        "id": "Folly",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "curse",
          "eternal",
          "innate"
        ],
        "notes": "Curse. Unplayable, Innate, Eternal. Always drawn, never leaves."
      },
      "GREED": {
        "id": "Greed",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "curse",
          "eternal"
        ],
        "notes": "Curse. Unplayable, Eternal. Dead card forever."
      },
      "GUILTY": {
        "id": "Guilty",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "curse"
        ],
        "notes": "Curse. Unplayable. Removes itself after 5 combats. Self-limiting."
      },
      "INJURY": {
        "id": "Injury",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "curse"
        ],
        "notes": "Curse. Unplayable dead card."
      },
      "NORMALITY": {
        "id": "Normality",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "curse"
        ],
        "notes": "Curse. Cannot play more than 3 cards this turn. Different from Sloth — per turn not per round."
      },
      "POOR_SLEEP": {
        "id": "Poor Sleep",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "curse",
          "retain"
        ],
        "notes": "Curse. Unplayable, Retain. Stays in hand turn after turn."
      },
      "REGRET": {
        "id": "Regret",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "curse"
        ],
        "notes": "Curse. Lose 1 HP per card in Hand at end of turn. Devastating with large hands."
      },
      "SHAME": {
        "id": "Shame",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "curse"
        ],
        "notes": "Curse. Gain 1 Frail at end of turn if in Hand. Reduces Block gain."
      },
      "SPORE_MIND": {
        "id": "Spore Mind",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "curse",
          "exhaust"
        ],
        "notes": "Curse. Exhaust. Removes itself when drawn — least harmful curse."
      },
      "WRITHE": {
        "id": "Writhe",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "curse",
          "innate"
        ],
        "notes": "Curse. Unplayable, Innate. Always in opening hand every combat."
      },
      "BYRDONIS_EGG": {
        "id": "Byrdonis Egg",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "quest"
        ],
        "notes": "Quest card. Can be hatched at a Rest Site for rewards."
      },
      "LANTERN_KEY": {
        "id": "Lantern Key",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "quest"
        ],
        "notes": "Quest card. Unlocks a special event in the next Act."
      },
      "SPOILS_MAP": {
        "id": "Spoils Map",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [],
        "anti": [],
        "mech": [
          "quest"
        ],
        "notes": "Quest card. Marks a site with 600 extra Gold in the next Act."
      },
      "FUEL": {
        "id": "Fuel",
        "tier": "D",
        "builds": [
          "status"
        ],
        "role": "utility",
        "syn": [
          "energy_gain",
          "draw",
          "status_synergy"
        ],
        "anti": [],
        "mech": [
          "energy_gain",
          "draw",
          "exhaust"
        ],
        "notes": "Token. Gain Energy and draw 1 card. Exhaust. Generated by Compact in Defect Status builds — each Fuel converts a dead Status into Energy+draw."
      },
      "GIANT_ROCK": {
        "id": "Giant Rock",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [
          "damage"
        ],
        "anti": [],
        "mech": [
          "damage"
        ],
        "notes": "Token. Deal 16 damage. Generated by certain events/relics."
      },
      "LUMINESCE": {
        "id": "Luminesce",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [
          "energy_gain"
        ],
        "anti": [],
        "mech": [
          "energy_gain",
          "retain",
          "exhaust"
        ],
        "notes": "Token. Retain. Gain 2 Energy. Exhaust. Generated by certain events."
      },
      "MINION_DIVE_BOMB": {
        "id": "Minion Dive Bomb",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [
          "damage"
        ],
        "anti": [],
        "mech": [
          "damage",
          "exhaust"
        ],
        "notes": "Token. Deal 13 damage. Exhaust. Generated by BEGONE! in Regent builds."
      },
      "MINION_SACRIFICE": {
        "id": "Minion Sacrifice",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [
          "block"
        ],
        "anti": [],
        "mech": [
          "block",
          "exhaust"
        ],
        "notes": "Token. Gain 9 Block. Exhaust. Generated by GUARDS!!! in Regent — hand full of 9-Block cards."
      },
      "MINION_STRIKE": {
        "id": "Minion Strike",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [
          "damage",
          "draw"
        ],
        "anti": [],
        "mech": [
          "damage",
          "draw",
          "exhaust"
        ],
        "notes": "Token. Deal 7 damage. Draw 1 card. Exhaust. Generated by CHARGE!! in Regent builds."
      },
      "SHIV": {
        "id": "Shiv",
        "tier": "D",
        "builds": [
          "shiv"
        ],
        "role": "generator",
        "syn": [
          "shiv",
          "shiv_synergy"
        ],
        "anti": [],
        "mech": [
          "damage",
          "exhaust"
        ],
        "notes": "Token. Deal 4 damage. Exhaust. Generated by Blade Dance, Fan of Knives, Cloak and Dagger. Core to Silent Shiv builds — each Shiv buffs Accuracy and triggers Finisher."
      },
      "SOUL": {
        "id": "Soul",
        "tier": "D",
        "builds": [
          "soul"
        ],
        "role": "generator",
        "syn": [
          "soul",
          "draw"
        ],
        "anti": [],
        "mech": [
          "draw",
          "exhaust"
        ],
        "notes": "Token. Draw 2 cards. Exhaust. Generated by Capture Spirit, Severance, Seance. Core to Necrobinder Soul builds — each Soul triggers Haunt (6 HP loss) and Death March (+3 damage)."
      },
      "SOVEREIGN_BLADE": {
        "id": "Sovereign Blade",
        "tier": "D",
        "builds": [
          "forge"
        ],
        "role": "payoff",
        "syn": [
          "forge",
          "damage"
        ],
        "anti": [],
        "mech": [
          "damage",
          "retain"
        ],
        "notes": "Token. Retain. Deal 10 damage base, scaling with Forge. Regent's Forge build win condition — The Smith alone brings it to 40 damage. Retain means it's always available."
      },
      "SWEEPING_GAZE": {
        "id": "Sweeping Gaze",
        "tier": "D",
        "builds": [
          "osty"
        ],
        "role": "utility",
        "syn": [
          "osty"
        ],
        "anti": [],
        "mech": [
          "damage",
          "exhaust",
          "ethereal"
        ],
        "notes": "Token. Ethereal. Osty deals 10 damage to a random enemy. Generated by Sentry Mode. Ethereal — plays immediately or discards."
      },
      "BYRD_SWOOP": {
        "id": "Byrd Swoop",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [
          "damage"
        ],
        "anti": [],
        "mech": [
          "damage"
        ],
        "notes": "Event card. Deal 14 damage. Obtained from Byrdonis Egg event."
      },
      "EXTERMINATE": {
        "id": "Exterminate",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [
          "aoe",
          "damage"
        ],
        "anti": [],
        "mech": [
          "damage",
          "aoe",
          "multi_hit"
        ],
        "notes": "Event card. Deal 3 damage 4 times to ALL enemies. 12 total AoE. Obtained from events."
      },
      "FEEDING_FRENZY": {
        "id": "Feeding Frenzy",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [
          "strength"
        ],
        "anti": [],
        "mech": [
          "strength"
        ],
        "notes": "Event card. Gain 5 Strength this turn. Burst Strength for one turn."
      },
      "METAMORPHOSIS": {
        "id": "Metamorphosis",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [
          "damage"
        ],
        "anti": [],
        "mech": [
          "exhaust"
        ],
        "notes": "Event card. Add 3 random free Attacks to Draw Pile. Exhaust. Variable value."
      },
      "PECK": {
        "id": "Peck",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [
          "damage"
        ],
        "anti": [],
        "mech": [
          "damage",
          "multi_hit"
        ],
        "notes": "Event card. Deal 2 damage 3 times. 6 total damage. Weak event attack."
      },
      "SQUASH": {
        "id": "Squash",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [
          "damage",
          "vulnerable"
        ],
        "anti": [],
        "mech": [
          "damage",
          "vulnerable"
        ],
        "notes": "Event card. Deal 10 damage. Apply 2 Vulnerable. Solid setup attack from events."
      },
      "TORIC_TOUGHNESS": {
        "id": "Toric Toughness",
        "tier": "D",
        "builds": [],
        "role": "utility",
        "syn": [
          "block"
        ],
        "anti": [],
        "mech": [
          "block",
          "delayed_block"
        ],
        "notes": "Event card. Gain 5 Block plus 5 Block at start of next 2 turns. 15 total Block from events."
      }
    }
  },
  "archetypes": {
    "ironclad": [
      {
        "id": "strength",
        "name": "Strength",
        "core": [
          "strength",
          "multi_hit",
          "strength_scaling"
        ],
        "support": [
          "scaling",
          "damage",
          "vulnerable"
        ],
        "coreThresh": 3,
        "supportThresh": 2,
        "description": "Scale flat Strength and convert it through multi-hit and heavy attacks."
      },
      {
        "id": "block",
        "name": "Block",
        "core": [
          "block",
          "block_retain",
          "block_conversion"
        ],
        "support": [
          "block_payoff",
          "draw",
          "weak"
        ],
        "coreThresh": 3,
        "supportThresh": 1,
        "description": "Stack and preserve Block, then convert it into damage or repeated payoffs."
      },
      {
        "id": "exhaust",
        "name": "Exhaust",
        "core": [
          "exhaust",
          "exhaust_payoff",
          "exhaust_synergy"
        ],
        "support": [
          "draw",
          "block",
          "energy_gain"
        ],
        "coreThresh": 4,
        "supportThresh": 2,
        "description": "Burn through cards and profit from exhaust triggers, cycling, and block payoffs."
      },
      {
        "id": "self_damage",
        "name": "Bloodletting / Self-Damage",
        "core": [
          "self_damage",
          "self_damage_payoff",
          "hp_loss_synergy",
          "blood"
        ],
        "support": [
          "strength",
          "draw",
          "energy_gain"
        ],
        "coreThresh": 3,
        "supportThresh": 2,
        "description": "Convert your own HP loss into Strength, damage, and tempo."
      },
      {
        "id": "strike",
        "name": "Strike",
        "core": [
          "strike",
          "strike_scaling",
          "attack_chain"
        ],
        "support": [
          "damage",
          "draw",
          "energy_gain",
          "vulnerable",
          "multi_hit"
        ],
        "coreThresh": 3,
        "supportThresh": 2,
        "description": "Leverage Strike-tag cards, efficient attack chains, and Perfected Strike-style scaling."
      }
    ],
    "silent": [
      {
        "id": "sly",
        "name": "Sly / Discard",
        "core": [
          "sly",
          "discard",
          "sly_enabler"
        ],
        "support": [
          "draw",
          "scaling"
        ],
        "coreThresh": 3,
        "supportThresh": 2,
        "description": "Discard Sly cards (Reflex, Tactician, Haze) to play them for free, chaining turns"
      },
      {
        "id": "poison",
        "name": "Poison",
        "core": [
          "poison",
          "poison_amplify"
        ],
        "support": [
          "scaling",
          "block",
          "weak"
        ],
        "coreThresh": 3,
        "supportThresh": 1,
        "description": "Stack poison with Noxious Fumes, then double with Burst"
      },
      {
        "id": "shiv",
        "name": "Shiv Spam",
        "core": [
          "shiv",
          "shiv_synergy",
          "shiv_generator",
          "shiv_amplify"
        ],
        "support": [
          "block",
          "dexterity",
          "scaling"
        ],
        "coreThresh": 3,
        "supportThresh": 2,
        "description": "Generate Shivs with Blade Dance, scale with Accuracy, cash in with Finisher + relic triggers"
      }
    ],
    "defect": [
      {
        "id": "orb",
        "name": "Orb / Focus Engine",
        "core": [
          "orb",
          "focus",
          "orb_channel",
          "frost",
          "lightning"
        ],
        "support": [
          "block",
          "scaling",
          "evoke"
        ],
        "coreThresh": 4,
        "supportThresh": 2,
        "description": "Stack Focus with Defragment, channel Lightning/Frost/Dark orbs for passive scaling"
      },
      {
        "id": "claw",
        "name": "Claw / Zero-Cost",
        "core": [
          "claw",
          "zero_cost",
          "claw_payoff"
        ],
        "support": [
          "draw",
          "scaling"
        ],
        "coreThresh": 3,
        "supportThresh": 2,
        "description": "Spam 0-cost Claws to grow their damage, use All for One to cycle the entire build"
      },
      {
        "id": "status",
        "name": "Status Engine",
        "core": [
          "status",
          "status_synergy",
          "status_exhaust"
        ],
        "support": [
          "zero_cost",
          "draw"
        ],
        "coreThresh": 2,
        "supportThresh": 1,
        "description": "Generate Status cards intentionally, then exploit them with Compact, Smokestack, Trash to Treasure, Flak Cannon, Rocket Punch"
      }
    ],
    "regent": [
      {
        "id": "stars",
        "name": "Stars Engine",
        "core": [
          "stellar",
          "stars",
          "star_gain"
        ],
        "support": [
          "draw",
          "scaling",
          "zero_cost"
        ],
        "coreThresh": 3,
        "supportThresh": 2,
        "description": "Accumulate Stars with Glow/Genesis/Shining Strike, spend on Comet/Radiate/Child of Stars"
      },
      {
        "id": "forge",
        "name": "Forge / Sovereign Blade",
        "core": [
          "forge",
          "authority"
        ],
        "support": [
          "scaling",
          "damage"
        ],
        "coreThresh": 2,
        "supportThresh": 1,
        "description": "Forge a single card repeatedly until Sovereign Blade one-shots bosses"
      }
    ],
    "necrobinder": [
      {
        "id": "soul",
        "name": "Soul Engine",
        "core": [
          "soul",
          "soul_generator",
          "soul_payoff"
        ],
        "support": [
          "draw",
          "scaling",
          "exhaust"
        ],
        "coreThresh": 3,
        "supportThresh": 2,
        "description": "Generate Souls with Capture Spirit/Dirge, cycle 0-cost draw-2 Souls, Haunt kills passively"
      },
      {
        "id": "osty",
        "name": "Osty / Summon",
        "core": [
          "summon",
          "osty_buff",
          "osty_attack"
        ],
        "support": [
          "damage",
          "scaling",
          "block"
        ],
        "coreThresh": 3,
        "supportThresh": 2,
        "description": "Build Osty's HP through Summon cards, use Bone Shards/Sacrifice/Fetch for big payoffs"
      },
      {
        "id": "doom",
        "name": "Doom Stack",
        "core": [
          "doom",
          "doom_payoff"
        ],
        "support": [
          "aoe",
          "debuff",
          "scaling",
          "execute"
        ],
        "coreThresh": 3,
        "supportThresh": 2,
        "description": "Stack Doom with Scourge/Countdown/End of Days, execute enemies when HP ≤ Doom total"
      }
    ]
  },
  "combos": [
    {
      "deckCard": "Juggernaut",
      "offeredCard": "Stone Armor",
      "bonus": 2,
      "reason": "Stone Armor grants Plating, creating repeated Block gain that triggers Juggernaut every turn."
    },
    {
      "deckCard": "Stone Armor",
      "offeredCard": "Body Slam",
      "bonus": 1.5,
      "reason": "Stone Armor continuously increases block totals which Body Slam converts directly into damage."
    },
    {
      "deckCard": "Corruption",
      "offeredCard": "Fiend Fire",
      "bonus": 1.8,
      "reason": "Corruption makes skills free, enabling massive Fiend Fire exhaust turns."
    },
    {
      "deckCard": "Dark Embrace",
      "offeredCard": "Fiend Fire",
      "bonus": 1.6,
      "reason": "Fiend Fire exhausts the entire hand, drawing multiple cards through Dark Embrace."
    },
    {
      "deckCard": "Stone Armor",
      "offeredCard": "Juggernaut",
      "bonus": 2,
      "reason": "Juggernaut converts Stone Armor's repeated Block from Plating into recurring damage."
    },
    {
      "deckCard": "Barricade",
      "offeredCard": "Body Slam",
      "bonus": 3.0,
      "reason": "Body Slam damage = current block — Barricade stacks block over turns making each Body Slam devastating"
    },
    {
      "deckCard": "Barricade",
      "offeredCard": "Entrench",
      "bonus": 2.0,
      "reason": "Entrench doubles current block — with Barricade retaining it, you reach absurd defense every 2 turns"
    },
    {
      "deckCard": "Barricade",
      "offeredCard": "Grapple",
      "bonus": 1.5,
      "reason": "Grapple converts block to damage — Barricade stacks block over turns giving Grapple huge numbers"
    },
    {
      "deckCard": "Entrench",
      "offeredCard": "Barricade",
      "bonus": 2.0,
      "reason": "Barricade retains the doubled block from Entrench — stacks get massive after a few turns"
    },
    {
      "deckCard": "Body Slam",
      "offeredCard": "Barricade",
      "bonus": 1.8,
      "reason": "Barricade stacks block turn over turn, Body Slam (damage = block) hits harder every turn"
    },
    {
      "deckCard": "Body Slam",
      "offeredCard": "Entrench",
      "bonus": 1.5,
      "reason": "Entrench doubles block that Body Slam then converts to damage"
    },
    {
      "deckCard": "Juggernaut",
      "offeredCard": "Body Slam",
      "bonus": 1.0,
      "reason": "Both reward having high block — natural pairing in block builds"
    },
    {
      "deckCard": "Demon Form",
      "offeredCard": "Limit Break",
      "bonus": 2.0,
      "reason": "Demon Form gives Strength every turn — Limit Break DOUBLES that accumulated Strength. Exponential scaling."
    },
    {
      "deckCard": "Limit Break",
      "offeredCard": "Demon Form",
      "bonus": 2.0,
      "reason": "Limit Break doubles your Strength — Demon Form keeps generating more Strength to double each fight"
    },
    {
      "deckCard": "Inflame",
      "offeredCard": "Limit Break",
      "bonus": 1.5,
      "reason": "Inflame gives flat Strength — Limit Break doubles it immediately for massive scaling"
    },
    {
      "deckCard": "Inflame",
      "offeredCard": "Whirlwind",
      "bonus": 1.2,
      "reason": "Every Whirlwind hit benefits from Strength — Inflame multiplies across all hits"
    },
    {
      "deckCard": "Demon Form",
      "offeredCard": "Whirlwind",
      "bonus": 1.5,
      "reason": "Demon Form Strength compounds every turn — Whirlwind multiplies it across all hits"
    },
    {
      "deckCard": "Limit Break",
      "offeredCard": "Heavy Blade",
      "bonus": 1.5,
      "reason": "Heavy Blade has extra Strength scaling — after Limit Break doubles Strength, damage becomes nuclear"
    },
    {
      "deckCard": "Double Tap",
      "offeredCard": "Whirlwind",
      "bonus": 2.0,
      "reason": "Double Tap plays next attack twice — Whirlwind twice with high Strength deletes everything"
    },
    {
      "deckCard": "Vicious",
      "offeredCard": "Taunt",
      "bonus": 1.5,
      "reason": "Taunt applies Vulnerable — Vicious gives 25% amp on Vulnerable targets"
    },
    {
      "deckCard": "Taunt",
      "offeredCard": "Vicious",
      "bonus": 1.5,
      "reason": "Vicious amplifies Vulnerable targets — Taunt applies it to set up Vicious procs"
    },
    {
      "deckCard": "Corruption",
      "offeredCard": "Feel No Pain",
      "bonus": 2.0,
      "reason": "Corruption exhausts every skill — Feel No Pain gains block for EACH one. Massive block generation."
    },
    {
      "deckCard": "Corruption",
      "offeredCard": "Dark Embrace",
      "bonus": 2.0,
      "reason": "Corruption exhausts every skill — Dark Embrace draws a card for each. Free card draw on every skill."
    },
    {
      "deckCard": "Feel No Pain",
      "offeredCard": "Corruption",
      "bonus": 2.0,
      "reason": "Corruption is the engine that makes Feel No Pain trigger constantly — defines exhaust builds"
    },
    {
      "deckCard": "Dark Embrace",
      "offeredCard": "Corruption",
      "bonus": 2.0,
      "reason": "Corruption triggers Dark Embrace on every skill — turns deck into a draw engine"
    },
    {
      "deckCard": "Feel No Pain",
      "offeredCard": "Dark Embrace",
      "bonus": 1.0,
      "reason": "Both exhaust payoffs — natural pairing in exhaust builds"
    },
    {
      "deckCard": "Dark Embrace",
      "offeredCard": "Feel No Pain",
      "bonus": 1.0,
      "reason": "Both exhaust payoffs — natural pairing in exhaust builds"
    },
    {
      "deckCard": "Fiend Fire",
      "offeredCard": "Dark Embrace",
      "bonus": 1.5,
      "reason": "Fiend Fire exhausts your whole hand — Dark Embrace draws them all back one by one"
    },
    {
      "deckCard": "Fiend Fire",
      "offeredCard": "Feel No Pain",
      "bonus": 1.5,
      "reason": "Fiend Fire exhausting the whole hand triggers massive Feel No Pain block generation"
    },
    {
      "deckCard": "Rupture",
      "offeredCard": "Bloodletting",
      "bonus": 2.0,
      "reason": "Bloodletting loses HP every play — Rupture gains 1 Strength each time. Free permanent Strength every turn."
    },
    {
      "deckCard": "Rupture",
      "offeredCard": "Offering",
      "bonus": 1.8,
      "reason": "Offering loses 6 HP — Rupture gains Strength from it AND draws 3 cards"
    },
    {
      "deckCard": "Rupture",
      "offeredCard": "Hemokinesis",
      "bonus": 1.5,
      "reason": "Hemokinesis costs HP — Rupture converts that to Strength. High damage + free scaling."
    },
    {
      "deckCard": "Rupture",
      "offeredCard": "Brutality",
      "bonus": 1.5,
      "reason": "Brutality loses 1 HP per turn passively — Rupture gains Strength automatically every turn"
    },
    {
      "deckCard": "Rupture",
      "offeredCard": "Fight Me!",
      "bonus": 1.3,
      "reason": "Fight Me! increases Strength for both sides and synergizes with Rupture scaling builds."
    },
    {
      "deckCard": "Blade Dance",
      "offeredCard": "Finisher",
      "bonus": 1.8,
      "reason": "Blade Dance generates multiple attacks that dramatically increase Finisher damage."
    },
    {
      "deckCard": "Storm Of Steel",
      "offeredCard": "Finisher",
      "bonus": 1.7,
      "reason": "Storm of Steel produces large numbers of Shivs that massively amplify Finisher."
    },
    {
      "deckCard": "Bloodletting",
      "offeredCard": "Rupture",
      "bonus": 2.0,
      "reason": "Rupture is the payoff for Bloodletting — turns energy generation into permanent Strength"
    },
    {
      "deckCard": "Brutality",
      "offeredCard": "Rupture",
      "bonus": 1.5,
      "reason": "Brutality triggers Rupture passively every turn — free Strength without playing any card"
    },
    {
      "deckCard": "Tools Of The Trade",
      "offeredCard": "Reflex",
      "bonus": 2.0,
      "reason": "Tools of the Trade discards 1 every turn — Reflex plays free when discarded. Free Draw 2 every turn."
    },
    {
      "deckCard": "Prepared",
      "offeredCard": "Reflex",
      "bonus": 1.6,
      "reason": "Prepared discards Reflex which triggers its Sly effect for free card draw."
    },
    {
      "deckCard": "Prepared",
      "offeredCard": "Tactician",
      "bonus": 1.6,
      "reason": "Prepared discards Tactician which provides free energy through its Sly effect."
    },
    {
      "deckCard": "Radiate",
      "offeredCard": "Genesis",
      "bonus": 1.8,
      "reason": "Genesis generates Stars every turn which Radiate converts into AoE damage."
    },
    {
      "deckCard": "Dirge",
      "offeredCard": "Capture Spirit",
      "bonus": 1.7,
      "reason": "Both cards generate Souls which feed Haunt and Soul Storm engines."
    },
    {
      "deckCard": "Tools Of The Trade",
      "offeredCard": "Tactician",
      "bonus": 2.0,
      "reason": "Tools of the Trade discards 1 every turn — Tactician plays free when discarded. Free energy every turn."
    },
    {
      "deckCard": "Tools Of The Trade",
      "offeredCard": "Haze",
      "bonus": 1.8,
      "reason": "Tools of the Trade discards 1 per turn — Haze applies 4 AoE poison free when discarded"
    },
    {
      "deckCard": "Well-Laid Plans",
      "offeredCard": "Reflex",
      "bonus": 1.5,
      "reason": "Well-Laid Plans retains Reflex to deliberately discard for free Draw 2 next turn"
    },
    {
      "deckCard": "Well-Laid Plans",
      "offeredCard": "Tactician",
      "bonus": 1.5,
      "reason": "Well-Laid Plans retains Tactician to discard for free energy whenever needed"
    },
    {
      "deckCard": "Calculated Gamble",
      "offeredCard": "Reflex",
      "bonus": 1.5,
      "reason": "Calculated Gamble discards entire hand — triggers every Sly card including Reflex"
    },
    {
      "deckCard": "Calculated Gamble",
      "offeredCard": "Tactician",
      "bonus": 1.5,
      "reason": "Discarding hand triggers Tactician for free energy"
    },
    {
      "deckCard": "Noxious Fumes",
      "offeredCard": "Mirage",
      "bonus": 1.5,
      "reason": "Mirage gives block = total poison on all enemies — Noxious Fumes keeps growing that number"
    },
    {
      "deckCard": "Envenom",
      "offeredCard": "Infinite Blades",
      "bonus": 1.5,
      "reason": "Envenom poisons whenever an Attack deals unblocked damage — Infinite Blades gives a free attack each turn = free poison every turn"
    },
    {
      "deckCard": "Accuracy",
      "offeredCard": "Blade Dance",
      "bonus": 2.0,
      "reason": "Accuracy adds damage to every Shiv — Blade Dance creates 3 Shivs at once for immediate burst"
    },
    {
      "deckCard": "Accuracy",
      "offeredCard": "Infinite Blades",
      "bonus": 2.0,
      "reason": "Accuracy multiplies every Shiv's damage — Infinite Blades guarantees a buffed Shiv every turn"
    },
    {
      "deckCard": "Accuracy",
      "offeredCard": "Finisher",
      "bonus": 1.8,
      "reason": "Finisher deals damage per attack — with high-damage Shivs from Accuracy it hits for hundreds"
    },
    {
      "deckCard": "Accuracy",
      "offeredCard": "Afterimage",
      "bonus": 1.2,
      "reason": "After Image blocks per card played — Shiv spam with Accuracy = offense AND defense simultaneously"
    },
    {
      "deckCard": "Accuracy",
      "offeredCard": "Storm Of Steel",
      "bonus": 1.5,
      "reason": "Storm of Steel creates Shivs per hand size — each gets Accuracy's damage bonus"
    },
    {
      "deckCard": "Infinite Blades",
      "offeredCard": "Accuracy",
      "bonus": 2.0,
      "reason": "Accuracy multiplies the damage of every free Shiv from Infinite Blades — take it immediately"
    },
    {
      "deckCard": "Infinite Blades",
      "offeredCard": "Afterimage",
      "bonus": 1.5,
      "reason": "After Image blocks per card played — free Shiv each turn means free block every turn"
    },
    {
      "deckCard": "Afterimage",
      "offeredCard": "Infinite Blades",
      "bonus": 1.5,
      "reason": "Infinite Blades gives a free card play per turn — After Image converts that to free block"
    },
    {
      "deckCard": "Claw",
      "offeredCard": "All for One",
      "bonus": 2.5,
      "reason": "All For One pulls ALL 0-cost cards from discard including all Claws — the entire build's payoff in one card"
    },
    {
      "deckCard": "All for One",
      "offeredCard": "Claw",
      "bonus": 2.5,
      "reason": "Each Claw permanently gains damage AND All For One pulls them all back — more Claws = bigger turns"
    },
    {
      "deckCard": "Claw",
      "offeredCard": "Claw",
      "bonus": 2.0,
      "reason": "More Claws = each play scales ALL copies faster. Density is the entire point of Claw builds."
    },
    {
      "deckCard": "Claw",
      "offeredCard": "Feral",
      "bonus": 2.0,
      "reason": "Feral is Echo Form for 0-cost cards — doubles every Claw play for the rest of combat"
    },
    {
      "deckCard": "All for One",
      "offeredCard": "Feral",
      "bonus": 1.8,
      "reason": "Feral doubles 0-cost plays — All For One into Feral creates an avalanche of Claw hits"
    },
    {
      "deckCard": "Claw",
      "offeredCard": "Scrape",
      "bonus": 1.5,
      "reason": "Scrape draws and discards non-attacks — cycles to Claws and All For One quickly"
    },
    {
      "deckCard": "Claw",
      "offeredCard": "FTL",
      "bonus": 1.2,
      "reason": "FTL is 0-cost with draw — cycles the deck and gets recycled by All For One"
    },
    {
      "deckCard": "Defragment",
      "offeredCard": "Electrodynamics",
      "bonus": 1.5,
      "reason": "Electrodynamics makes Lightning hit ALL enemies — Defragment's Focus increases that damage"
    },
    {
      "deckCard": "Defragment",
      "offeredCard": "Biased Cognition",
      "bonus": 1.5,
      "reason": "Stack Focus from both sources — every orb becomes dramatically more powerful"
    },
    {
      "deckCard": "Defragment",
      "offeredCard": "Barrage",
      "bonus": 1.5,
      "reason": "Barrage hits once per orb slot — Focus makes each hit harder"
    },
    {
      "deckCard": "Capacitor",
      "offeredCard": "Barrage",
      "bonus": 2.0,
      "reason": "Barrage hits per orb slot — Capacitor directly adds slots = directly more Barrage damage"
    },
    {
      "deckCard": "Darkness",
      "offeredCard": "Defragment",
      "bonus": 1.5,
      "reason": "Dark orbs gain 6+Focus damage per turn — Defragment makes them cook to massive damage"
    },
    {
      "deckCard": "Darkness",
      "offeredCard": "Multi-Cast",
      "bonus": 1.5,
      "reason": "Multicast evokes Dark orbs early while fully charged — massive burst"
    },
    {
      "deckCard": "Electrodynamics",
      "offeredCard": "Defragment",
      "bonus": 1.5,
      "reason": "More Focus from Defragment = more damage on every Electrodynamics Lightning hit"
    },
    {
      "deckCard": "Glow",
      "offeredCard": "Radiate",
      "bonus": 1.5,
      "reason": "Glow generates Stars that Radiate converts to AoE damage — star generation powers Radiate"
    },
    {
      "deckCard": "Glow",
      "offeredCard": "Child of the Stars",
      "bonus": 1.5,
      "reason": "Glow generates Stars — Child of Stars gives 2 block per star spent. Consistent free block."
    },
    {
      "deckCard": "Genesis",
      "offeredCard": "Radiate",
      "bonus": 1.8,
      "reason": "Genesis passively gives 2 Stars per turn — Radiate deals 3 AoE per star = 6 free AoE damage every turn"
    },
    {
      "deckCard": "Genesis",
      "offeredCard": "Child of the Stars",
      "bonus": 1.8,
      "reason": "Genesis gives 2 Stars per turn — Child of Stars converts each to 2 block. Free passive defense."
    },
    {
      "deckCard": "Royal Gamble",
      "offeredCard": "Radiate",
      "bonus": 2.0,
      "reason": "Royal Gamble dumps 9 Stars — Radiate converts them to 27 AoE damage from one combo"
    },
    {
      "deckCard": "Royal Gamble",
      "offeredCard": "Child of the Stars",
      "bonus": 1.5,
      "reason": "Royal Gamble's 9 Stars = 18 free block from Child of Stars in one play"
    },
    {
      "deckCard": "Decisions, Decisions",
      "offeredCard": "Royal Gamble",
      "bonus": 2.5,
      "reason": "Decisions Decisions plays a skill 3 times — into Royal Gamble = 27 Stars. The core infinite loop."
    },
    {
      "deckCard": "Royal Gamble",
      "offeredCard": "Decisions, Decisions",
      "bonus": 2.5,
      "reason": "Decisions Decisions triples Royal Gamble for 27 Stars — the primary infinite combo"
    },
    {
      "deckCard": "Child of the Stars",
      "offeredCard": "Genesis",
      "bonus": 1.8,
      "reason": "Genesis provides passive Stars every turn — Child of Stars converts them to free block"
    },
    {
      "deckCard": "Summon Forth",
      "offeredCard": "Beat into Shape",
      "bonus": 1.5,
      "reason": "Both core Forge cards — more ways to Forge means Sovereign Blade scales faster"
    },
    {
      "deckCard": "Beat into Shape",
      "offeredCard": "Furnace",
      "bonus": 1.2,
      "reason": "Furnace passive Forge stacks alongside Beat Into Shape's active Forge"
    },
    {
      "deckCard": "Haunt",
      "offeredCard": "Capture Spirit",
      "bonus": 2.0,
      "reason": "Capture Spirit generates 3 Souls — each Soul triggers Haunt for 6 unavoidable damage. Core engine."
    },
    {
      "deckCard": "Haunt",
      "offeredCard": "Reave",
      "bonus": 1.8,
      "reason": "Reave generates a Soul on play — each Soul feeds Haunt's 6 damage trigger"
    },
    {
      "deckCard": "Haunt",
      "offeredCard": "Dirge",
      "bonus": 1.8,
      "reason": "Dirge generates X Souls — each one triggers Haunt's unavoidable damage"
    },
    {
      "deckCard": "Haunt",
      "offeredCard": "Demesne",
      "bonus": 1.5,
      "reason": "Demesne draws extra cards every turn — find Souls faster for more Haunt triggers"
    },
    {
      "deckCard": "Capture Spirit",
      "offeredCard": "Haunt",
      "bonus": 2.0,
      "reason": "Haunt is the win condition for Soul generation — Capture Spirit feeds it consistently"
    },
    {
      "deckCard": "Demesne",
      "offeredCard": "Haunt",
      "bonus": 1.5,
      "reason": "Demesne draws extra cards = more Soul plays per turn = more Haunt damage triggers"
    },
    {
      "deckCard": "Soul Storm",
      "offeredCard": "Haunt",
      "bonus": 1.5,
      "reason": "Both scale off Soul plays — Soul engine deals massive damage two ways simultaneously"
    },
    {
      "deckCard": "Soul Storm",
      "offeredCard": "Capture Spirit",
      "bonus": 1.5,
      "reason": "Capture Spirit generates the Souls that Soul Storm's damage scales with"
    },
    {
      "deckCard": "Symbiosis",
      "offeredCard": "Unleash",
      "bonus": 2.0,
      "reason": "Unleash deals damage = Osty's Max HP — Symbiosis directly builds that Max HP"
    },
    {
      "deckCard": "Bodyguard",
      "offeredCard": "Unleash",
      "bonus": 2.0,
      "reason": "Bodyguard raises Osty's Max HP — Unleash converts that HP directly into damage"
    },
    {
      "deckCard": "High Five",
      "offeredCard": "Unleash",
      "bonus": 1.5,
      "reason": "High Five permanently buffs Osty attack power — Unleash scales with Max HP AND attack power"
    },
    {
      "deckCard": "Symbiosis",
      "offeredCard": "Squeeze",
      "bonus": 1.8,
      "reason": "Squeeze deals 10 + Osty's Max HP — Symbiosis builds that Max HP for a scaling finisher"
    },
    {
      "deckCard": "Bodyguard",
      "offeredCard": "Squeeze",
      "bonus": 1.8,
      "reason": "Squeeze scales with Osty Max HP — every Bodyguard makes Squeeze hit harder"
    },
    {
      "deckCard": "Dirge",
      "offeredCard": "Devour Life",
      "bonus": 1.5,
      "reason": "Dirge generates Souls AND raises Osty's HP — Devour Life also raises Osty per Soul. Double Osty growth."
    },
    {
      "deckCard": "Scourge",
      "offeredCard": "End of Days",
      "bonus": 1.5,
      "reason": "Scourge stacks Doom exponentially — End of Days executes enemies at the threshold"
    },
    {
      "deckCard": "End of Days",
      "offeredCard": "Scourge",
      "bonus": 1.5,
      "reason": "Scourge is the fastest way to reach the Doom execute threshold that End of Days exploits"
    },
    {
      "deckCard": "Countdown",
      "offeredCard": "End of Days",
      "bonus": 1.2,
      "reason": "Countdown's passive Doom per turn sets up End of Days execute windows"
    },
    {
      "deckCard": "Death's Door",
      "offeredCard": "Scourge",
      "bonus": 1.5,
      "reason": "Death's Door gives 18 block if you applied Doom this turn — Scourge applies Doom AND draws"
    },
    {
      "deckCard": "Borrowed Time",
      "offeredCard": "End of Days",
      "bonus": 1.0,
      "reason": "Borrowed Time provides free energy to afford End of Days' 3-cost more easily"
    },
    {
      "deckCard": "Tools Of The Trade",
      "offeredCard": "Untouchable",
      "bonus": 1.8,
      "reason": "TotT discards 1/turn — Untouchable plays free for passive block every turn"
    },
    {
      "deckCard": "Tools Of The Trade",
      "offeredCard": "Flick Flack",
      "bonus": 1.8,
      "reason": "TotT discards 1/turn — Flick Flack plays free for free block and evasion"
    },
    {
      "deckCard": "Tools Of The Trade",
      "offeredCard": "Acrobatics",
      "bonus": 1.8,
      "reason": "TotT discards 1/turn — Acrobatics plays free, drawing 3 cards for free every turn"
    },
    {
      "deckCard": "Tools Of The Trade",
      "offeredCard": "Prepared",
      "bonus": 1.8,
      "reason": "TotT discards 1/turn — Prepared plays free for passive draw and card selection"
    },
    {
      "deckCard": "Tools Of The Trade",
      "offeredCard": "Ricochet",
      "bonus": 2.0,
      "reason": "TotT discards 1/turn — Ricochet plays free, attaching bonus hits to every attack"
    },
    {
      "deckCard": "Calculated Gamble",
      "offeredCard": "Flick Flack",
      "bonus": 1.5,
      "reason": "Calculated Gamble discards entire hand — triggers Flick Flack Sly for free block"
    },
    {
      "deckCard": "Acrobatics",
      "offeredCard": "Prepared",
      "bonus": 2.0,
      "reason": "Acrobatics + Prepared create infinite discard loop — each triggers the other for endless free draws"
    },
    {
      "deckCard": "Genesis",
      "offeredCard": "Void Form",
      "bonus": 2.0,
      "reason": "Genesis generates Stars passively — Void Form consumes Stars to grow and weaken enemies"
    },
    {
      "deckCard": "Genesis",
      "offeredCard": "Convergence",
      "bonus": 1.8,
      "reason": "Genesis generates Stars — Convergence converts accumulated Stars into AoE burst damage"
    },
    {
      "deckCard": "Genesis",
      "offeredCard": "Particle Wall",
      "bonus": 1.8,
      "reason": "Genesis generates Stars — Particle Wall consumes Stars for sustained passive block"
    },
    {
      "deckCard": "The Sealed Throne",
      "offeredCard": "Convergence",
      "bonus": 1.8,
      "reason": "Sealed Throne generates Stars on attack — Convergence converts them to AoE burst"
    },
    {
      "deckCard": "The Sealed Throne",
      "offeredCard": "Particle Wall",
      "bonus": 1.8,
      "reason": "Sealed Throne generates Stars on attack — Particle Wall converts them to block"
    },
    {
      "deckCard": "The Sealed Throne",
      "offeredCard": "Radiate",
      "bonus": 1.8,
      "reason": "Sealed Throne generates Stars on attack — Radiate deals 3 AoE per Star"
    },
    {
      "deckCard": "Void Form",
      "offeredCard": "Genesis",
      "bonus": 2.0,
      "reason": "Void Form consumes Stars for massive Weakness — Genesis ensures steady passive supply"
    },
    {
      "deckCard": "Void Form",
      "offeredCard": "Radiate",
      "bonus": 2.0,
      "reason": "Void Form accumulates Stars — Radiate converts each Star to 3 AoE damage"
    },
    {
      "deckCard": "End of Days",
      "offeredCard": "Oblivion",
      "bonus": 2.0,
      "reason": "End of Days executes Doomed enemies — Oblivion applies Doom to all enemies simultaneously"
    },
    {
      "deckCard": "Inflame",
      "offeredCard": "Fight Me!",
      "bonus": 1.2,
      "reason": "Fight Me! both adds Strength and double-dips on existing Strength through multi-hit damage"
    },
    {
      "deckCard": "Perfected Strike",
      "offeredCard": "Pommel Strike",
      "bonus": 1.1,
      "reason": "Pommel Strike supports the Strike package while drawing into Perfected Strike turns"
    },
    {
      "deckCard": "Perfected Strike",
      "offeredCard": "Twin Strike",
      "bonus": 1.4,
      "reason": "Twin Strike is a premium Strike-tag support card that also scales with Strength"
    },
    {
      "deckCard": "Bash",
      "offeredCard": "Cruelty",
      "bonus": 1.3,
      "reason": "Cruelty rewards repeated Vulnerable application, and Bash is a reliable way to start that chain"
    },
    {
      "deckCard": "Taunt",
      "offeredCard": "Cruelty",
      "bonus": 1.2,
      "reason": "Taunt supplies Vulnerable while Cruelty amplifies every follow-up hit into those targets"
    },
    {
      "deckCard": "Fight Me!",
      "offeredCard": "Conflagration",
      "bonus": 0.9,
      "reason": "Fight Me! adds to attack-chain turns while also supplying Strength for later multi-hit and finisher turns"
    },
    {
      "deckCard": "Rage",
      "offeredCard": "Conflagration",
      "bonus": 0.9,
      "reason": "Rage rewards aggressive attack chains, the same turns where Conflagration reaches high damage"
    },
    {
      "deckCard": "Refine Blade",
      "offeredCard": "The Sealed Throne",
      "bonus": 1.4,
      "reason": "Refine Blade accelerates Forge plans and helps large Forge payoff cards come online faster"
    },
    {
      "deckCard": "Dark Embrace",
      "offeredCard": "Cinder",
      "bonus": 1.2,
      "reason": "Cinder exhausts a card every play — Dark Embrace draws a card for each exhaust. Free draw alongside 17 damage."
    },
    {
      "deckCard": "Feel No Pain",
      "offeredCard": "Cinder",
      "bonus": 1.2,
      "reason": "Cinder exhausts a card every play — Feel No Pain gains block for each exhaust. Free block alongside damage."
    },
    {
      "deckCard": "Corruption",
      "offeredCard": "Cinder",
      "bonus": 1.0,
      "reason": "Corruption makes skills exhaust constantly — Cinder adds another reliable exhaust trigger alongside good damage."
    },
    {
      "deckCard": "Setup Strike",
      "offeredCard": "Heavy Blade",
      "bonus": 1.5,
      "reason": "Setup Strike gives +2 Strength this turn — Heavy Blade has 3x Strength scaling, turning that into +6 bonus damage this turn."
    },
    {
      "deckCard": "Heavy Blade",
      "offeredCard": "Setup Strike",
      "bonus": 1.5,
      "reason": "Heavy Blade triples Strength — Setup Strike's temporary +2 Strength becomes +6 damage on Heavy Blade when played after."
    },
    {
      "deckCard": "Setup Strike",
      "offeredCard": "Whirlwind",
      "bonus": 1.2,
      "reason": "Setup Strike gives +2 Strength this turn — each Whirlwind hit gets +2 damage, multiplied across all hits."
    },
    {
      "deckCard": "Setup Strike",
      "offeredCard": "Juggling",
      "bonus": 1.0,
      "reason": "Juggling is multi-hit and scales with Strength — Setup Strike's temporary boost amplifies every hit."
    },
    {
      "deckCard": "Setup Strike",
      "offeredCard": "Stomp",
      "bonus": 1.0,
      "reason": "Stomp is multi-hit and scales with Strength — Setup Strike's temporary +2 Strength amplifies every hit."
    },
    {
      "deckCard": "Double Tap",
      "offeredCard": "Setup Strike",
      "bonus": 1.2,
      "reason": "Double Tap plays next attack twice — play Setup Strike into Double Tap into Heavy Blade for massive burst this turn."
    },
    {
      "deckCard": "Ashen Strike",
      "offeredCard": "Cinder",
      "bonus": 0.8,
      "reason": "Every Cinder play exhausts a card, growing your exhaust pile — Ashen Strike deals 3 extra damage per card in exhaust pile, so Cinder directly boosts it each play."
    },
    {
      "deckCard": "Cinder",
      "offeredCard": "Ashen Strike",
      "bonus": 0.8,
      "reason": "Cinder grows your exhaust pile every play — Ashen Strike deals 3 extra damage per exhausted card, making each Cinder play permanently buff your Ashen Strike."
    },
    {
      "deckCard": "Tremble",
      "offeredCard": "Bully",
      "bonus": 2.0,
      "reason": "Tremble applies 2 Vulnerable — Bully deals 4+2 per stack, turning into 8 damage immediately after Tremble. Core Vulnerable combo."
    },
    {
      "deckCard": "Bully",
      "offeredCard": "Tremble",
      "bonus": 2.0,
      "reason": "Bully scales with Vulnerable stacks — Tremble is the cheapest 0-cost setup that feeds Bully directly."
    },
    {
      "deckCard": "Tremble",
      "offeredCard": "Dominate",
      "bonus": 1.8,
      "reason": "Tremble applies 2 Vulnerable — Dominate converts each stack to 1 permanent Strength. Free 2 Strength for 0+1 energy."
    },
    {
      "deckCard": "Dominate",
      "offeredCard": "Tremble",
      "bonus": 1.8,
      "reason": "Dominate needs Vulnerable stacks to convert to Strength — Tremble is the cheapest 0-cost setup."
    },
    {
      "deckCard": "Tremble",
      "offeredCard": "Vicious",
      "bonus": 1.5,
      "reason": "Tremble applies Vulnerable which Vicious amplifies by 25% — Tremble sets up Vicious's passive multiplier instantly."
    },
    {
      "deckCard": "Vicious",
      "offeredCard": "Tremble",
      "bonus": 1.5,
      "reason": "Vicious gives 25% amp on Vulnerable targets — Tremble is free 0-cost Vulnerable setup for Vicious."
    },
    {
      "deckCard": "Tremble",
      "offeredCard": "Uppercut",
      "bonus": 1.0,
      "reason": "Both apply Vulnerable — Tremble stacks 2, Uppercut stacks 1, chaining them for more Vulnerable to feed Bully/Dominate."
    },
    {
      "deckCard": "Taunt",
      "offeredCard": "Bully",
      "bonus": 1.5,
      "reason": "Taunt applies 1 Vulnerable — Bully converts each stack to 2 extra damage. Stack Taunt + Tremble for bigger Bully turns."
    },
    {
      "deckCard": "Uppercut",
      "offeredCard": "Bully",
      "bonus": 1.2,
      "reason": "Uppercut applies 1 Vulnerable — Bully scales with it. Both in deck = consistent Vulnerable into Bully turns."
    },
    {
      "deckCard": "Evil Eye",
      "offeredCard": "Bully",
      "bonus": 1.2,
      "reason": "Evil Eye applies Vulnerable — Bully converts Vulnerable stacks to damage. Natural pairing in Vulnerable builds."
    },
    {
      "deckCard": "Taunt",
      "offeredCard": "Dominate",
      "bonus": 1.5,
      "reason": "Taunt applies Vulnerable — Dominate converts stacks to permanent Strength. Every Taunt makes the next Dominate stronger."
    },
    {
      "deckCard": "Uppercut",
      "offeredCard": "Dominate",
      "bonus": 1.2,
      "reason": "Uppercut applies Vulnerable which Dominate converts to Strength — consistent Vulnerable → Strength pipeline."
    },
    {
      "deckCard": "Inflame",
      "offeredCard": "Dominate",
      "bonus": 1.0,
      "reason": "Both stack Strength — Inflame provides flat Strength, Dominate provides burst Strength from Vulnerable. Stack sources."
    },
    {
      "deckCard": "Drum of Battle",
      "offeredCard": "Dark Embrace",
      "bonus": 1.5,
      "reason": "Drum of Battle passively exhausts 1 card each turn start — Dark Embrace draws a card for each exhaust. Free draw every turn."
    },
    {
      "deckCard": "Drum of Battle",
      "offeredCard": "Feel No Pain",
      "bonus": 1.5,
      "reason": "Drum passively exhausts 1 each turn — Feel No Pain gains block per exhaust. Free block every turn automatically."
    },
    {
      "deckCard": "Drum of Battle",
      "offeredCard": "Forgotten Ritual",
      "bonus": 2.0,
      "reason": "Drum exhausts at turn START — Forgotten Ritual fires for +3 energy every turn automatically. Free energy engine."
    },
    {
      "deckCard": "Forgotten Ritual",
      "offeredCard": "Drum of Battle",
      "bonus": 2.0,
      "reason": "Drum of Battle guarantees an exhaust at turn start — Forgotten Ritual triggers for +3 energy every turn without playing extra cards."
    },
    {
      "deckCard": "Corruption",
      "offeredCard": "Forgotten Ritual",
      "bonus": 2.0,
      "reason": "Corruption makes every skill exhaust — Forgotten Ritual fires for +3 energy almost every turn. Near-infinite energy loop in exhaust builds."
    },
    {
      "deckCard": "Forgotten Ritual",
      "offeredCard": "Corruption",
      "bonus": 2.0,
      "reason": "Forgotten Ritual needs an exhaust trigger — Corruption makes every skill exhaust, firing Ritual nearly every turn."
    },
    {
      "deckCard": "True Grit",
      "offeredCard": "Forgotten Ritual",
      "bonus": 1.5,
      "reason": "True Grit exhausts a card while gaining block — directly triggers Forgotten Ritual for +3 energy. Block + energy in one card."
    },
    {
      "deckCard": "Burning Pact",
      "offeredCard": "Forgotten Ritual",
      "bonus": 1.5,
      "reason": "Burning Pact exhausts a card to draw — also triggers Forgotten Ritual for +3 energy. Draw AND energy from one exhaust."
    },
    {
      "deckCard": "Second Wind",
      "offeredCard": "Forgotten Ritual",
      "bonus": 1.5,
      "reason": "Second Wind exhausts non-attacks for block — triggers Forgotten Ritual for +3 energy. Block + energy each Second Wind."
    },
    {
      "deckCard": "Cinder",
      "offeredCard": "Forgotten Ritual",
      "bonus": 1.2,
      "reason": "Cinder exhausts a card on play — triggers Forgotten Ritual for +3 energy. Good value on both cards in the same turn."
    },
    {
      "deckCard": "Forgotten Ritual",
      "offeredCard": "Howl from Beyond",
      "bonus": 2.0,
      "reason": "Howl from Beyond exhausts at turn start each turn — Forgotten Ritual fires for +3 free energy every turn. Completely passive energy engine."
    },
    {
      "deckCard": "Howl from Beyond",
      "offeredCard": "Forgotten Ritual",
      "bonus": 2.0,
      "reason": "Forgotten Ritual needs a turn-start exhaust — Howl from Beyond provides exactly that every single turn. Permanent +2 energy per turn."
    },
    {
      "deckCard": "Dark Embrace",
      "offeredCard": "Howl from Beyond",
      "bonus": 1.5,
      "reason": "Howl from Beyond exhausts and re-enters exhaust each turn — Dark Embrace draws a card from each exhaust. Free card draw every turn."
    },
    {
      "deckCard": "Feel No Pain",
      "offeredCard": "Howl from Beyond",
      "bonus": 1.5,
      "reason": "Howl cycles through exhaust each turn, triggering Feel No Pain for free block every turn on top of the 16 free AoE."
    },
    {
      "deckCard": "One-Two Punch",
      "offeredCard": "Howl from Beyond",
      "bonus": 1.5,
      "reason": "One-Two Punch doubles next Attack — Howl from Beyond plays twice = 32 AoE at once on top of its normal passive cycling."
    },
    {
      "deckCard": "Inferno",
      "offeredCard": "Brutality",
      "bonus": 2.0,
      "reason": "Brutality loses 1 HP at turn start passively — Inferno fires 6 AoE automatically every single turn from Brutality alone."
    },
    {
      "deckCard": "Brutality",
      "offeredCard": "Inferno",
      "bonus": 2.0,
      "reason": "Inferno deals 6 AoE whenever you lose HP — Brutality's passive turn-start HP loss triggers Inferno every turn for free AoE."
    },
    {
      "deckCard": "Inferno",
      "offeredCard": "Bloodletting",
      "bonus": 1.8,
      "reason": "Bloodletting loses HP on play — Inferno fires 6 AoE each time. Every Bloodletting becomes 6 free AoE on top of the energy."
    },
    {
      "deckCard": "Bloodletting",
      "offeredCard": "Inferno",
      "bonus": 1.8,
      "reason": "Inferno converts HP loss to 6 AoE — Bloodletting's HP cost triggers Inferno every play, turning energy generation into AoE."
    },
    {
      "deckCard": "Inferno",
      "offeredCard": "Offering",
      "bonus": 1.5,
      "reason": "Offering loses 6 HP — triggers Inferno for 6 AoE alongside the 3 cards and energy. One card does everything."
    },
    {
      "deckCard": "Inferno",
      "offeredCard": "Rupture",
      "bonus": 1.5,
      "reason": "Both benefit from HP loss — Inferno deals AoE, Rupture gains Strength. Every HP loss event powers up both simultaneously."
    },
    {
      "deckCard": "Rupture",
      "offeredCard": "Inferno",
      "bonus": 1.5,
      "reason": "Inferno and Rupture both trigger on HP loss — stack them together so every Bloodletting/Brutality/Offering gives Strength AND AoE."
    },
    {
      "deckCard": "Inferno",
      "offeredCard": "Hemokinesis",
      "bonus": 1.2,
      "reason": "Hemokinesis costs 2 HP — Inferno fires 6 AoE alongside the damage. Good value per play in self-damage builds."
    },
    {
      "deckCard": "Inferno",
      "offeredCard": "Combust",
      "bonus": 1.5,
      "reason": "Both deal AoE from HP loss — Combust loses HP and deals AoE, Inferno also fires from that HP loss. Double AoE per turn."
    },
    {
      "deckCard": "Stampede",
      "offeredCard": "Perfected Strike",
      "bonus": 1.5,
      "reason": "Stampede fires a random attack from hand each turn — with Perfected Strike in deck (and other Strikes) it frequently auto-plays for solid damage."
    },
    {
      "deckCard": "Hellraiser",
      "offeredCard": "Stampede",
      "bonus": 1.0,
      "reason": "Both auto-fire attacks passively — Hellraiser on draw, Stampede at turn end. Strike-heavy decks benefit from both passive damage sources."
    },
    {
      "deckCard": "Unrelenting",
      "offeredCard": "Whirlwind",
      "bonus": 2.0,
      "reason": "Unrelenting makes next attack 0 cost — Whirlwind (normally X-cost) becomes free, letting you dump all remaining energy into it."
    },
    {
      "deckCard": "Whirlwind",
      "offeredCard": "Unrelenting",
      "bonus": 2.0,
      "reason": "Whirlwind is most powerful with more energy — Unrelenting makes it free, so all energy goes into Whirlwind hits instead of paying its cost."
    },
    {
      "deckCard": "Unrelenting",
      "offeredCard": "Bludgeon",
      "bonus": 1.8,
      "reason": "Bludgeon costs 3 energy — Unrelenting makes it free. 12 damage into 32 free damage for just the 2-cost Unrelenting."
    },
    {
      "deckCard": "Unrelenting",
      "offeredCard": "Heavy Blade",
      "bonus": 1.5,
      "reason": "Heavy Blade has high Strength scaling but costs 2 — Unrelenting makes it free, getting the full Strength payoff for just 2 energy total."
    },
    {
      "deckCard": "Unrelenting",
      "offeredCard": "Double Tap",
      "bonus": 1.2,
      "reason": "Chain Unrelenting (free next attack) into Double Tap (attack plays twice) — one 2-cost card into one 1-cost card for a completely free doubled attack."
    },
    {
      "deckCard": "Double Tap",
      "offeredCard": "Unrelenting",
      "bonus": 1.2,
      "reason": "Unrelenting frees the next attack — combine with Double Tap to get a free AND doubled attack in the same turn for massive burst."
    },
    {
      "deckCard": "Hellraiser",
      "offeredCard": "Perfected Strike",
      "bonus": 2.0,
      "reason": "Hellraiser auto-plays Strikes when drawn — more Strikes in deck = more Hellraiser triggers AND higher Perfected Strike base damage. Core synergy."
    },
    {
      "deckCard": "Perfected Strike",
      "offeredCard": "Hellraiser",
      "bonus": 2.0,
      "reason": "Perfected Strike scales with every Strike card in deck — Hellraiser rewards keeping Strikes by auto-firing them on draw."
    },
    {
      "deckCard": "One-Two Punch",
      "offeredCard": "Whirlwind",
      "bonus": 2.0,
      "reason": "One-Two Punch doubles next Attack — Whirlwind plays twice for double energy-scaling AoE. Nuclear with Strength."
    },
    {
      "deckCard": "One-Two Punch",
      "offeredCard": "Reaper",
      "bonus": 2.0,
      "reason": "One-Two Punch doubles Reaper — double AoE damage AND double HP healing. One of the strongest plays in the game."
    },
    {
      "deckCard": "Reaper",
      "offeredCard": "One-Two Punch",
      "bonus": 2.0,
      "reason": "Reaper played twice = double AoE damage + double HP healing — One-Two Punch is the best enabler for this."
    },
    {
      "deckCard": "One-Two Punch",
      "offeredCard": "Bludgeon",
      "bonus": 1.5,
      "reason": "One-Two Punch doubles Bludgeon — 32 damage plays twice for 64 total damage at 3+1 energy cost."
    },
    {
      "deckCard": "Double Tap",
      "offeredCard": "One-Two Punch",
      "bonus": 1.2,
      "reason": "Both double your next attack — stack them in a turn for a theoretically tripled attack (though only 1 stacks at a time)."
    },
    {
      "deckCard": "Corruption",
      "offeredCard": "Pact's End",
      "bonus": 1.5,
      "reason": "Corruption rapidly exhausts every skill — Pact's End condition (3+ exhausted) is met almost immediately with Corruption online."
    },
    {
      "deckCard": "Pact's End",
      "offeredCard": "Corruption",
      "bonus": 1.5,
      "reason": "Pact's End needs 3 exhausted cards — Corruption exhausts all skills making the condition trivial every fight."
    },
    {
      "deckCard": "Dark Embrace",
      "offeredCard": "Pact's End",
      "bonus": 1.0,
      "reason": "In exhaust builds where Pact's End is live, Dark Embrace is also drawing cards from the same exhaust triggers — natural co-inhabitants."
    },
    {
      "deckCard": "True Grit",
      "offeredCard": "Pact's End",
      "bonus": 1.0,
      "reason": "True Grit contributes to exhaust count — helps qualify Pact's End earlier in the fight."
    },
    {
      "deckCard": "Hellraiser",
      "offeredCard": "Pommel Strike",
      "bonus": 2.0,
      "reason": "Pommel Strike contains 'Strike' — Hellraiser fires it for free when drawn. Pommel Strike also draws a card which may draw another Strike, potentially chaining infinitely."
    },
    {
      "deckCard": "Pommel Strike",
      "offeredCard": "Hellraiser",
      "bonus": 2.0,
      "reason": "Hellraiser auto-plays Pommel Strike when drawn — Pommel Strike draws a card which can chain into more Strike triggers. The core of Hellraiser infinite."
    },
    {
      "deckCard": "Hellraiser",
      "offeredCard": "Battle Trance",
      "bonus": 1.8,
      "reason": "Battle Trance draws 3 cards — every Strike drawn fires for free. Draw 3 = up to 3 free Strikes in one card play."
    },
    {
      "deckCard": "Battle Trance",
      "offeredCard": "Hellraiser",
      "bonus": 1.8,
      "reason": "Hellraiser fires every Strike drawn — Battle Trance draws 3 cards for free, potentially firing 3 Strikes instantly."
    },
    {
      "deckCard": "Hellraiser",
      "offeredCard": "Twin Strike",
      "bonus": 1.5,
      "reason": "Twin Strike contains 'Strike' — Hellraiser fires it for free when drawn. Each Twin Strike fires twice = 2 free hits automatically."
    },
    {
      "deckCard": "Twin Strike",
      "offeredCard": "Hellraiser",
      "bonus": 1.5,
      "reason": "Hellraiser auto-plays Twin Strike when drawn — free 2-hit attack every time Twin Strike is drawn, without spending energy."
    },
    {
      "deckCard": "Hellraiser",
      "offeredCard": "Setup Strike",
      "bonus": 1.2,
      "reason": "Setup Strike contains 'Strike' — Hellraiser fires it for free when drawn, giving +2 Strength that turn for all subsequent auto-fired Strikes."
    },
    {
      "deckCard": "Setup Strike",
      "offeredCard": "Hellraiser",
      "bonus": 1.2,
      "reason": "Hellraiser auto-plays Setup Strike when drawn — free +2 Strength each time Setup Strike is drawn, buffing all other Hellraiser auto-attacks that turn."
    },
    {
      "deckCard": "Stampede",
      "offeredCard": "Whirlwind",
      "bonus": 1.5,
      "reason": "Stampede fires a random Attack from hand at end of turn — Whirlwind fired this way deals damage based on remaining energy. Free AoE at turn end."
    },
    {
      "deckCard": "Whirlwind",
      "offeredCard": "Stampede",
      "bonus": 1.5,
      "reason": "Stampede fires Whirlwind from hand for free at end of turn — free multi-hit AoE damage each turn if Whirlwind stays in hand."
    },
    {
      "deckCard": "Stampede",
      "offeredCard": "Reaper",
      "bonus": 1.2,
      "reason": "Stampede can fire Reaper for free at end of turn — free AoE damage + free HP healing every turn if Reaper is in hand."
    },
    {
      "deckCard": "Stampede",
      "offeredCard": "Anger",
      "bonus": 1.5,
      "reason": "Stampede fires Anger for free at end of turn — Anger copies itself to discard, meaning more Anger in deck for future Stampede triggers. Self-sustaining loop."
    },
    {
      "deckCard": "Anger",
      "offeredCard": "Stampede",
      "bonus": 1.5,
      "reason": "Anger self-replicates — Stampede fires an Anger copy for free each turn, adding another Anger to discard. Snowballing free attacks."
    },
    {
      "deckCard": "Dominate",
      "offeredCard": "Evil Eye",
      "bonus": 1.2,
      "reason": "Evil Eye applies Vulnerable — Dominate converts each Vulnerable stack to permanent Strength. Apply Vulnerable with Evil Eye then cash out with Dominate."
    },
    {
      "deckCard": "Evil Eye",
      "offeredCard": "Dominate",
      "bonus": 1.2,
      "reason": "Dominate converts Vulnerable stacks to Strength — Evil Eye provides Vulnerable for Dominate to convert."
    },
    {
      "deckCard": "Dominate",
      "offeredCard": "Thunderclap",
      "bonus": 1.2,
      "reason": "Thunderclap applies Vulnerable to ALL enemies — after clearing groups, use Dominate to convert those stacks to permanent Strength for boss fights."
    },
    {
      "deckCard": "Tremble",
      "offeredCard": "Colossus",
      "bonus": 1.2,
      "reason": "Tremble applies Vulnerable to enemy (they take 50% more damage) — Colossus then makes you take 50% less damage FROM that Vulnerable enemy. Offense AND defense together."
    },
    {
      "deckCard": "Colossus",
      "offeredCard": "Tremble",
      "bonus": 1.2,
      "reason": "Colossus halves damage from Vulnerable enemies — Tremble applies Vulnerable, setting up Colossus's defensive bonus while also amplifying your damage output."
    },
    {
      "deckCard": "Drum of Battle",
      "offeredCard": "Pact's End",
      "bonus": 1.5,
      "reason": "Drum of Battle exhausts 1 card every turn start — passively builds toward Pact's End's 3-exhaust condition and keeps it satisfied throughout a long fight."
    },
    {
      "deckCard": "Pact's End",
      "offeredCard": "Drum of Battle",
      "bonus": 1.5,
      "reason": "Pact's End needs 3+ exhausted cards — Drum of Battle passively exhausts 1 per turn, reliably meeting and maintaining the condition."
    },
    {
      "deckCard": "Drum of Battle",
      "offeredCard": "Ashen Strike",
      "bonus": 1.0,
      "reason": "Drum of Battle exhausts 1 card every turn, growing the exhaust pile — Ashen Strike deals 3 extra damage per card in exhaust pile, scaling through the whole fight."
    },
    {
      "deckCard": "One-Two Punch",
      "offeredCard": "Sword Boomerang",
      "bonus": 1.2,
      "reason": "One-Two Punch plays next attack twice — Sword Boomerang played twice = 6 random hits instead of 3. Each hit benefits from Strength."
    },
    {
      "deckCard": "Sword Boomerang",
      "offeredCard": "One-Two Punch",
      "bonus": 1.2,
      "reason": "One-Two Punch doubles Sword Boomerang — 6 random hits that all benefit from Strength scaling."
    },
    {
      "deckCard": "Pact's End",
      "offeredCard": "Second Wind",
      "bonus": 1.0,
      "reason": "Second Wind exhausts all non-attacks — quickly satisfies and re-satisfies Pact's End's condition while gaining block."
    },
    {
      "deckCard": "Second Wind",
      "offeredCard": "Pact's End",
      "bonus": 1.0,
      "reason": "Second Wind contributes multiple exhausted cards at once — helps qualify and maintain Pact's End's 3-exhaust condition."
    },
    {
      "deckCard": "Howl from Beyond",
      "offeredCard": "Ashen Strike",
      "bonus": 1.0,
      "reason": "Howl from Beyond exhausts at start of every turn — each cycle grows the exhaust pile, directly increasing Ashen Strike's bonus damage throughout the fight."
    },
    {
      "deckCard": "Ashen Strike",
      "offeredCard": "Howl from Beyond",
      "bonus": 1.0,
      "reason": "Howl from Beyond passively exhausts every turn — consistently grows the exhaust pile that Ashen Strike scales with."
    },
    {
      "deckCard": "Rupture",
      "offeredCard": "Tear Asunder",
      "bonus": 2.0,
      "reason": "Tear Asunder hits more times per HP lost this combat — Rupture gives Strength each HP loss, so every stack that empowers Tear Asunder also gave you Strength. Both scale off the same resource."
    },
    {
      "deckCard": "Tear Asunder",
      "offeredCard": "Rupture",
      "bonus": 2.0,
      "reason": "Rupture gains Strength from HP loss — every event that adds a Tear Asunder hit also gave Rupture Strength. Stack both for exponential scaling."
    },
    {
      "deckCard": "Bloodletting",
      "offeredCard": "Tear Asunder",
      "bonus": 1.8,
      "reason": "Bloodletting loses HP every play — each use adds a hit to Tear Asunder permanently this combat. More Bloodlettings = more Tear Asunder hits."
    },
    {
      "deckCard": "Brutality",
      "offeredCard": "Tear Asunder",
      "bonus": 1.8,
      "reason": "Brutality passively loses 1 HP each turn — each turn adds another hit to Tear Asunder without spending cards. Compounds over long fights."
    },
    {
      "deckCard": "Offering",
      "offeredCard": "Tear Asunder",
      "bonus": 1.5,
      "reason": "Offering loses 6 HP in one play — immediately adds 6 hits to Tear Asunder for the rest of the combat. Explosive scaling."
    },
    {
      "deckCard": "Inferno",
      "offeredCard": "Tear Asunder",
      "bonus": 1.5,
      "reason": "Inferno triggers on HP loss — every HP loss event adds both an Inferno AoE proc AND a Tear Asunder hit. Double scaling from same source."
    },
    {
      "deckCard": "Tear Asunder",
      "offeredCard": "Inferno",
      "bonus": 1.5,
      "reason": "Both scale off HP loss frequency — Inferno deals AoE while Tear Asunder hits multiply. Stack self-damage for both to compound simultaneously."
    },
    {
      "deckCard": "Tear Asunder",
      "offeredCard": "Bloodletting",
      "bonus": 1.8,
      "reason": "Each Bloodletting play permanently adds hits to Tear Asunder this combat — more plays = more hits per Tear Asunder cast."
    },
    {
      "deckCard": "Tear Asunder",
      "offeredCard": "Brutality",
      "bonus": 1.8,
      "reason": "Brutality's passive HP loss adds one Tear Asunder hit per turn for free — by turn 5 that's 5 extra hits on every Tear Asunder."
    },
    {
      "deckCard": "Double Tap",
      "offeredCard": "Tear Asunder",
      "bonus": 1.5,
      "reason": "Double Tap plays Tear Asunder twice — if you have 5 HP-loss events this combat, that's 2x (5+1 hits) = 12 hits total for 3 energy."
    },
    {
      "deckCard": "One-Two Punch",
      "offeredCard": "Tear Asunder",
      "bonus": 1.5,
      "reason": "One-Two Punch doubles Tear Asunder — with accumulated HP losses the doubled hit count becomes massive burst."
    },
    {
      "deckCard": "Anger",
      "offeredCard": "Headbutt",
      "bonus": 2.0,
      "reason": "Anger puts a copy into discard — Headbutt retrieves cards from discard to top of draw pile. Chain Headbutt → draw Anger → play Anger → new copy in discard → repeat for near-infinite free attacks."
    },
    {
      "deckCard": "Headbutt",
      "offeredCard": "Anger",
      "bonus": 2.0,
      "reason": "Headbutt puts discard cards on top of draw — with Anger copies in discard, you can chain free 0-cost attacks repeatedly each turn."
    },
    {
      "deckCard": "Rupture",
      "offeredCard": "Limit Break",
      "bonus": 2.0,
      "reason": "Rupture builds Strength from HP loss — Limit Break doubles whatever Rupture has accumulated. Stack HP-loss events then double the resulting Strength for exponential scaling."
    },
    {
      "deckCard": "Limit Break",
      "offeredCard": "Rupture",
      "bonus": 2.0,
      "reason": "Limit Break doubles your Strength — Rupture is the fastest way to generate Strength through self-damage, making Limit Break's doubling more powerful."
    },
    {
      "deckCard": "Feed",
      "offeredCard": "Reaper",
      "bonus": 1.5,
      "reason": "Feed raises max HP — Reaper heals for unblocked damage dealt. Higher max HP means you have more room to recover, and Feed synergizes by keeping your HP pool healthy for Reaper to exploit."
    },
    {
      "deckCard": "Reaper",
      "offeredCard": "Feed",
      "bonus": 1.5,
      "reason": "Reaper heals for unblocked damage — Feed raises max HP so there's more HP to recover, making Reaper's healing more impactful in the self-damage build."
    },
    {
      "deckCard": "Corruption",
      "offeredCard": "Brand",
      "bonus": 1.5,
      "reason": "Corruption makes Brand cost 0 and auto-exhaust — Brand already exhausts a card AND gives Strength, so with Corruption it's a free Strength generator that also triggers Dark Embrace/FNP."
    },
    {
      "deckCard": "Brand",
      "offeredCard": "Corruption",
      "bonus": 1.5,
      "reason": "Brand exhausts a card when played — Corruption makes it cost 0, turning Brand into a free exhaust trigger for Dark Embrace/FNP every time. Also gives 1 Strength per cast."
    },
    {
      "deckCard": "Corruption",
      "offeredCard": "Thrash",
      "bonus": 1.2,
      "reason": "Corruption makes Thrash cost 0 and auto-exhaust — Thrash deals scaling damage while exhausting, triggering Dark Embrace/FNP on top of strong damage."
    },
    {
      "deckCard": "Thrash",
      "offeredCard": "Corruption",
      "bonus": 1.2,
      "reason": "Thrash exhausts a card when played — Corruption makes it free while preserving the exhaust trigger for payoffs like Dark Embrace and Feel No Pain."
    },
    {
      "deckCard": "Second Wind",
      "offeredCard": "Body Slam",
      "bonus": 1.5,
      "reason": "Second Wind exhausts non-attacks for block — that block directly fuels Body Slam's damage. More non-attacks exhausted = more block = bigger Body Slam."
    },
    {
      "deckCard": "Body Slam",
      "offeredCard": "Second Wind",
      "bonus": 1.5,
      "reason": "Body Slam damage = block — Second Wind generates large amounts of block by exhausting skills, making each Body Slam hit harder."
    },
    {
      "deckCard": "Taunt",
      "offeredCard": "Colossus",
      "bonus": 1.5,
      "reason": "Taunt applies Vulnerable to enemies — Colossus reduces damage taken from Vulnerable enemies by 50% this turn. Combine for block + virtually halved incoming damage on the same turn."
    },
    {
      "deckCard": "Colossus",
      "offeredCard": "Taunt",
      "bonus": 1.5,
      "reason": "Colossus cuts damage from Vulnerable enemies by 50% this turn — Taunt applies Vulnerable while giving block, setting up Colossus's damage reduction."
    },
    {
      "deckCard": "Inferno",
      "offeredCard": "Crimson Mantle",
      "bonus": 1.5,
      "reason": "Crimson Mantle passively loses 1 HP each turn — Inferno fires 6 AoE from that HP loss automatically. Two passives together = guaranteed free AoE every single turn."
    },
    {
      "deckCard": "Crimson Mantle",
      "offeredCard": "Inferno",
      "bonus": 1.5,
      "reason": "Inferno deals 6 AoE whenever you lose HP — Crimson Mantle's guaranteed -1 HP per turn triggers Inferno passively every turn for free."
    },
    {
      "deckCard": "Fiend Fire",
      "offeredCard": "Ashen Strike",
      "bonus": 1.8,
      "reason": "Fiend Fire exhausts your entire hand — Ashen Strike deals 3 extra damage per card in exhaust pile. Play Fiend Fire first to massively grow the exhaust pile, then Ashen Strike hits for huge damage."
    },
    {
      "deckCard": "Ashen Strike",
      "offeredCard": "Fiend Fire",
      "bonus": 1.8,
      "reason": "Ashen Strike scales with exhaust pile size — Fiend Fire exhausts the whole hand at once, giving Ashen Strike a massive damage boost immediately after."
    },
    {
      "deckCard": "Dark Embrace",
      "offeredCard": "Pyre",
      "bonus": 1.5,
      "reason": "Pyre exhausts your entire hand for damage — Dark Embrace draws a card for each exhaust. Pyre hits hard AND refills your hand via Dark Embrace simultaneously."
    },
    {
      "deckCard": "Pyre",
      "offeredCard": "Dark Embrace",
      "bonus": 1.5,
      "reason": "Dark Embrace draws on exhaust — Pyre exhausts the whole hand, triggering Dark Embrace for each card. After Pyre, Dark Embrace draws back multiple cards."
    },
    {
      "deckCard": "Expect A Fight",
      "offeredCard": "Battle Trance",
      "bonus": 1.5,
      "reason": "Expect A Fight gives 1 energy per Attack in hand at start of combat — Battle Trance draws 3, often attacks, maximizing the energy payout from Expect A Fight."
    },
    {
      "deckCard": "Battle Trance",
      "offeredCard": "Expect A Fight",
      "bonus": 1.5,
      "reason": "Battle Trance draws 3 cards — with a full attack-heavy hand, Expect A Fight converts those attacks into massive energy at start of fight."
    },
    {
      "deckCard": "Taunt",
      "offeredCard": "Dropkick",
      "bonus": 1.5,
      "reason": "Dropkick refunds energy if target is Vulnerable — Taunt applies Vulnerable first, making Dropkick a 0-net-cost attack every time."
    },
    {
      "deckCard": "Tremble",
      "offeredCard": "Dropkick",
      "bonus": 1.5,
      "reason": "Tremble applies 2 Vulnerable for free — Dropkick then refunds its energy cost since target is Vulnerable. 0-cost attack chain."
    },
    {
      "deckCard": "Bash",
      "offeredCard": "Dropkick",
      "bonus": 1.2,
      "reason": "Bash applies Vulnerable — Dropkick gets its energy refunded since target is Vulnerable, chaining into a near-free attack."
    },
    {
      "deckCard": "Uppercut",
      "offeredCard": "Dropkick",
      "bonus": 1.2,
      "reason": "Uppercut applies Vulnerable — Dropkick chains after for a refunded energy cost on the same turn."
    },
    {
      "deckCard": "Headbutt",
      "offeredCard": "Offering",
      "bonus": 1.5,
      "reason": "Headbutt puts a discard pile card on top of draw — use it to retrieve Offering from discard so you can play Offering again next turn for another explosive draw+energy+self-damage turn."
    },
    {
      "deckCard": "Offering",
      "offeredCard": "Headbutt",
      "bonus": 1.5,
      "reason": "Offering is a once-per-cycle explosive card — Headbutt retrieves it from discard to replay next turn, giving you repeated Offering turns."
    },
    {
      "deckCard": "Corruption",
      "offeredCard": "Battle Trance",
      "bonus": 1.5,
      "reason": "Corruption makes skills cost 0 — Battle Trance draws 3, potentially all skills that now play for free. Explosive energy-free turn when you have skill-heavy hand."
    },
    {
      "deckCard": "Battle Trance",
      "offeredCard": "Corruption",
      "bonus": 1.5,
      "reason": "Battle Trance draws 3 cards — with Corruption active, any skills drawn are free, turning Battle Trance's draw into free plays."
    },
    {
      "deckCard": "Burst",
      "offeredCard": "Calculated Gamble",
      "bonus": 2.0,
      "reason": "Burst makes next skill play twice — Calculated Gamble plays twice, discarding hand TWICE, triggering every Sly card in hand twice in one turn."
    },
    {
      "deckCard": "Calculated Gamble",
      "offeredCard": "Burst",
      "bonus": 2.0,
      "reason": "Calculated Gamble plays twice with Burst — double discard = every Sly card fires twice. Explosive turn."
    },
    {
      "deckCard": "Burst",
      "offeredCard": "Blade Dance",
      "bonus": 1.5,
      "reason": "Burst doubles Blade Dance — 6 Shivs instead of 3 in one turn. Massive Shiv burst with Accuracy online."
    },
    {
      "deckCard": "Master Planner",
      "offeredCard": "Calculated Gamble",
      "bonus": 2.5,
      "reason": "Master Planner gives all Skills Sly — Calculated Gamble discards your entire hand, playing every Sly-tagged card for free. Entire hand plays itself."
    },
    {
      "deckCard": "Calculated Gamble",
      "offeredCard": "Master Planner",
      "bonus": 2.5,
      "reason": "With Master Planner active, Calculated Gamble discards entire hand triggering all skills as Sly for free. The modern Sly win condition."
    },
    {
      "deckCard": "Master Planner",
      "offeredCard": "Tools Of The Trade",
      "bonus": 2.0,
      "reason": "Tools of the Trade discards each turn — with Master Planner giving all Skills Sly, every skill in hand fires for free each turn passively."
    },
    {
      "deckCard": "Master Planner",
      "offeredCard": "Noxious Fumes",
      "bonus": 1.8,
      "reason": "Master Planner gives Noxious Fumes Sly — discard it for free Poison stacking every turn without spending energy."
    },
    {
      "deckCard": "Footwork",
      "offeredCard": "Blur",
      "bonus": 1.5,
      "reason": "Footwork gives permanent Dex — Blur's retained block gets +1 from Dex, stacking over multiple turns with Footwork active."
    },
    {
      "deckCard": "Footwork",
      "offeredCard": "Shadowmeld",
      "bonus": 1.5,
      "reason": "Footwork's permanent Dex boosts Shadowmeld's retained block — better defense each turn Footwork is active."
    },
    {
      "deckCard": "Footwork",
      "offeredCard": "Afterimage",
      "bonus": 1.5,
      "reason": "Footwork gives Dex — After Image's block per card played is boosted by Dexterity. More cards played = more Dex-boosted block."
    },
    {
      "deckCard": "Footwork",
      "offeredCard": "Backflip",
      "bonus": 1.2,
      "reason": "Backflip gains block that benefits from Footwork's Dexterity — every block card in deck gets better."
    },
    {
      "deckCard": "Nightmare",
      "offeredCard": "Reflex",
      "bonus": 2.0,
      "reason": "Nightmare creates 3 Reflex — discard all three for Draw 6 total for free. Entire deck cycle in one turn."
    },
    {
      "deckCard": "Nightmare",
      "offeredCard": "Tactician",
      "bonus": 2.0,
      "reason": "Nightmare creates 3 Tactician — discard all three for 3 free energy. Effectively unlimited energy next turn."
    },
    {
      "deckCard": "Nightmare",
      "offeredCard": "Burst",
      "bonus": 1.8,
      "reason": "Nightmare creates 3 Burst — triple the next-skill-plays-twice effect. Each Burst chains into another for absurd multiplication."
    },
    {
      "deckCard": "Speedster",
      "offeredCard": "Calculated Gamble",
      "bonus": 2.0,
      "reason": "Speedster makes hand free — Calculated Gamble plus all Sly cards in hand play for 0 energy. Entire combo turn costs nothing."
    },
    {
      "deckCard": "Speedster",
      "offeredCard": "Master Planner",
      "bonus": 2.0,
      "reason": "Speedster + Master Planner = all skills cost 0 AND have Sly. Play the free skills, discard the Sly ones for more free triggers. Infinite loop potential."
    },
    {
      "deckCard": "Speedster",
      "offeredCard": "Finisher",
      "bonus": 1.8,
      "reason": "Speedster lets you play every attack for free — Finisher's damage per attack played this turn becomes enormous with a free full hand."
    },
    {
      "deckCard": "Abrasive",
      "offeredCard": "Footwork",
      "bonus": 1.8,
      "reason": "Both give permanent Dexterity — Abrasive gives +1 Dex when discarded for free, Footwork gives +1 on play. Stack both for massive sustained Dex."
    },
    {
      "deckCard": "Footwork",
      "offeredCard": "Abrasive",
      "bonus": 1.8,
      "reason": "Abrasive gives permanent Dex when discarded via Sly — stacks with Footwork for rapidly scaling block values."
    },
    {
      "deckCard": "Tools Of The Trade",
      "offeredCard": "Abrasive",
      "bonus": 2.0,
      "reason": "Tools of the Trade discards 1 each turn — if Abrasive is discarded, gain +1 permanent Dex every single turn passively. Scales infinitely."
    },
    {
      "deckCard": "Bullet Time",
      "offeredCard": "Blade Dance",
      "bonus": 2.0,
      "reason": "Bullet Time doubles next Skill — Blade Dance plays twice = 6 Shivs in one turn. Enormous Shiv burst."
    },
    {
      "deckCard": "Bullet Time",
      "offeredCard": "Calculated Gamble",
      "bonus": 1.8,
      "reason": "Bullet Time doubles Calculated Gamble — discard hand twice triggering double Sly effects."
    },
    {
      "deckCard": "Bullet Time",
      "offeredCard": "Noxious Fumes",
      "bonus": 1.5,
      "reason": "Bullet Time doubles Noxious Fumes — two stacks of passive poison per turn instead of one."
    },
    {
      "deckCard": "Accuracy",
      "offeredCard": "Up My Sleeve",
      "bonus": 1.5,
      "reason": "Accuracy boosts every Shiv's damage — Up My Sleeve generates Shivs every turn without exhausting, giving consistent Accuracy-boosted hits."
    },
    {
      "deckCard": "Accuracy",
      "offeredCard": "Hidden Daggers",
      "bonus": 1.8,
      "reason": "Hidden Daggers generates 2 Shivs when discarded for free — each gets Accuracy's full damage bonus immediately."
    },
    {
      "deckCard": "Tools Of The Trade",
      "offeredCard": "Corrosive Wave",
      "bonus": 2.0,
      "reason": "Tools of the Trade discards 1 each turn — Corrosive Wave applies 4 AoE Poison for free when discarded. Free AoE Poison every turn passively."
    },
    {
      "deckCard": "Noxious Fumes",
      "offeredCard": "Corrosive Wave",
      "bonus": 1.5,
      "reason": "Both apply passive Poison — Noxious Fumes per turn + free Corrosive Wave when discarded stacks Poison rapidly on all enemies."
    },
    {
      "deckCard": "Noxious Fumes",
      "offeredCard": "Memento Mori",
      "bonus": 1.5,
      "reason": "Noxious Fumes stacks Poison over turns — Memento Mori checks if Poison is present and applies 9 stacks. Guaranteed 9 Poison per cast after Fumes fires."
    },
    {
      "deckCard": "Deadly Poison",
      "offeredCard": "Memento Mori",
      "bonus": 1.2,
      "reason": "Deadly Poison applies initial stacks — Memento Mori then dumps 9 more on already-Poisoned enemies."
    },
    {
      "deckCard": "Tools Of The Trade",
      "offeredCard": "Shadow Step",
      "bonus": 1.5,
      "reason": "Tools discards 1 each turn — Shadow Step applies 5 retained Block for free when discarded. Passive free block every turn."
    },
    {
      "deckCard": "Flechettes",
      "offeredCard": "Master Planner",
      "bonus": 1.5,
      "reason": "Master Planner gives all Skills Sly — discarding skills counts toward Flechettes' per-skill damage. Free skills + Flechettes damage simultaneously."
    },
    {
      "deckCard": "Calculated Gamble",
      "offeredCard": "Flechettes",
      "bonus": 1.5,
      "reason": "Calculated Gamble discards entire hand — each Sly-tagged skill that fires also counts toward Flechettes' damage this turn."
    },
    {
      "deckCard": "Noxious Fumes",
      "offeredCard": "Nightmare",
      "bonus": 1.5,
      "reason": "Nightmare creates 3 Noxious Fumes — play all three for 3 passive Poison stacks per turn. Accelerates Poison engine massively."
    },
    {
      "deckCard": "Accelerant",
      "offeredCard": "Nightmare",
      "bonus": 1.8,
      "reason": "Nightmare creates 3 Accelerant — play all three for triple Poison amplification. With stacked Poison this is a guaranteed win condition."
    },
    {
      "deckCard": "Accelerant",
      "offeredCard": "Noxious Fumes",
      "bonus": 2.0,
      "reason": "Noxious Fumes stacks poison every turn — Accelerant makes it trigger twice per turn. Every Noxious Fumes stack deals double damage with Accelerant active."
    },
    {
      "deckCard": "Noxious Fumes",
      "offeredCard": "Accelerant",
      "bonus": 2.0,
      "reason": "Accelerant doubles poison tick rate — Noxious Fumes' passive stacks become twice as deadly. Core Poison scaling engine."
    },
    {
      "deckCard": "Accelerant",
      "offeredCard": "Deadly Poison",
      "bonus": 1.5,
      "reason": "Deadly Poison stacks 5+ poison — Accelerant makes those stacks deal damage twice per turn."
    },
    {
      "deckCard": "Accelerant",
      "offeredCard": "Bubble Bubble",
      "bonus": 1.5,
      "reason": "Bubble Bubble amplifies existing poison — Accelerant then makes those amplified stacks trigger twice per turn."
    },
    {
      "deckCard": "Nightmare",
      "offeredCard": "Accelerant",
      "bonus": 2.0,
      "reason": "Nightmare creates 3 copies of Accelerant — play all three next turn for poison triggering 4 times per turn. Unstoppable poison scaling."
    },
    {
      "deckCard": "Anticipate",
      "offeredCard": "Footwork",
      "bonus": 1.8,
      "reason": "Anticipate's 3 temporary Dex stacks on top of Footwork's permanent Dex — every block card this turn gets boosted by both, potentially 15+ extra block in one turn."
    },
    {
      "deckCard": "Footwork",
      "offeredCard": "Anticipate",
      "bonus": 1.8,
      "reason": "Footwork's permanent Dex multiplies Anticipate's burst — combined Dex of 4+ on a turn with multiple block cards is massive."
    },
    {
      "deckCard": "Anticipate",
      "offeredCard": "Dodge And Roll",
      "bonus": 1.2,
      "reason": "Both Dodge and Roll block instances (now and next turn) benefit from Anticipate's Dex this turn."
    },
    {
      "deckCard": "Backflip",
      "offeredCard": "Footwork",
      "bonus": 1.3,
      "reason": "Footwork's Dex boosts Backflip's block — with 2 Footwork stacks, Backflip becomes 7 Block plus 2 draws."
    },
    {
      "deckCard": "Backflip",
      "offeredCard": "Acrobatics",
      "bonus": 1.2,
      "reason": "Both cycle cards — combined they let you see most of your deck each turn to find Sly payoffs."
    },
    {
      "deckCard": "Backflip",
      "offeredCard": "Noxious Fumes",
      "bonus": 1.2,
      "reason": "Poison build needs early survival — Backflip provides 5 Block plus 2 draws to find more Poison stackers."
    },
    {
      "deckCard": "Dagger Spray",
      "offeredCard": "Envenom",
      "bonus": 2.0,
      "reason": "Envenom applies Poison whenever an Attack deals unblocked damage — Dagger Spray hits ALL enemies twice. Each hit per enemy applies Poison = 2 Poison stacks per enemy per cast. Silent's best AoE Poison spreader."
    },
    {
      "deckCard": "Envenom",
      "offeredCard": "Dagger Spray",
      "bonus": 2.0,
      "reason": "Dagger Spray hits all enemies twice — with Envenom that's 2 Poison stacks per enemy in one card. Best AoE Poison application available."
    },
    {
      "deckCard": "Dodge And Roll",
      "offeredCard": "Footwork",
      "bonus": 1.8,
      "reason": "Footwork's Dex boosts BOTH of Dodge and Roll's block instances — the now and next-turn block both get Dex bonus. Multiple sources call this the top Footwork combo."
    },
    {
      "deckCard": "Footwork",
      "offeredCard": "Dodge And Roll",
      "bonus": 1.8,
      "reason": "Dodge and Roll gives 8 total block across 2 turns — both procs benefit from Footwork's permanent Dex. Extremely efficient with Footwork active."
    },
    {
      "deckCard": "Dodge And Roll",
      "offeredCard": "Blur",
      "bonus": 1.5,
      "reason": "Blur retains block — next-turn Dodge and Roll block stacks with Blur's retained block for massive accumulated defense."
    },
    {
      "deckCard": "Dodge And Roll",
      "offeredCard": "Afterimage",
      "bonus": 1.2,
      "reason": "Playing Dodge and Roll triggers After Image once, then the delayed next-turn block triggers again passively — 2 After Image procs plus 8 block from 1 card."
    },
    {
      "deckCard": "Leading Strike",
      "offeredCard": "Accuracy",
      "bonus": 2.0,
      "reason": "Leading Strike generates a Shiv — that Shiv immediately benefits from Accuracy's +4 damage. With 2 Accuracy copies the generated Shiv hits for 12 damage."
    },
    {
      "deckCard": "Accuracy",
      "offeredCard": "Leading Strike",
      "bonus": 2.0,
      "reason": "Leading Strike generates a Shiv that gets full Accuracy bonus — consistent Accuracy-boosted Shiv generation every turn."
    },
    {
      "deckCard": "Leading Strike",
      "offeredCard": "Finisher",
      "bonus": 1.8,
      "reason": "Leading Strike + the generated Shiv + Finisher = 3 attacks this turn. Finisher hits for 3x its base damage in sequence."
    },
    {
      "deckCard": "Leading Strike",
      "offeredCard": "Afterimage",
      "bonus": 1.5,
      "reason": "Leading Strike then playing the generated Shiv = 2 cards played = 2 After Image block procs for free."
    },
    {
      "deckCard": "Leading Strike",
      "offeredCard": "Envenom",
      "bonus": 1.5,
      "reason": "Leading Strike is an attack — Envenom poisons on it. The generated Shiv also triggers Envenom when played. 2 Poison stacks from one card."
    },
    {
      "deckCard": "Escape Plan",
      "offeredCard": "Well-Laid Plans",
      "bonus": 1.5,
      "reason": "Well-Laid Plans retains cards — hold Escape Plan for turns when you need both block and draw, then play for guaranteed block since retained card is likely a Skill."
    },
    {
      "deckCard": "Escape Plan",
      "offeredCard": "Master Planner",
      "bonus": 1.8,
      "reason": "Master Planner makes all Skills Sly — Escape Plan draws a Skill that with Master Planner active also has Sly. Block plus a free Sly trigger from one card."
    },
    {
      "deckCard": "Escape Plan",
      "offeredCard": "Expertise",
      "bonus": 1.5,
      "reason": "Expertise fills hand with cards — with more Skills in deck, Escape Plan reliably draws a Skill for the block bonus."
    },
    {
      "deckCard": "Expose",
      "offeredCard": "Finisher",
      "bonus": 2.0,
      "reason": "Expose applies 2 Vulnerable then Exhaust — follow with Finisher for 50%+ more damage per hit multiplied by attacks played. Strips Artifact first so Vulnerable actually applies."
    },
    {
      "deckCard": "Expose",
      "offeredCard": "Dagger Throw",
      "bonus": 1.5,
      "reason": "Expose Vulnerables the enemy — Dagger Throw hits a Vulnerable target for 50% more damage. Natural 2-card combo."
    },
    {
      "deckCard": "Flechettes",
      "offeredCard": "Well-Laid Plans",
      "bonus": 1.5,
      "reason": "Well-Laid Plans retains Skills between turns — carry Skills over from last turn so you start the next with more Skills in hand for a bigger Flechettes hit."
    },
    {
      "deckCard": "Flechettes",
      "offeredCard": "Expertise",
      "bonus": 1.8,
      "reason": "Expertise fills your hand with cards drawn until 6 — with a Skill-heavy deck that's 4-5 Skills in hand for 20-25 Flechettes damage immediately after."
    },
    {
      "deckCard": "Flechettes",
      "offeredCard": "Burst",
      "bonus": 1.8,
      "reason": "Burst makes next Skill play twice — Flechettes is a Skill. Play Burst then Flechettes for double Flechettes damage in one turn."
    },
    {
      "deckCard": "Sucker Punch",
      "offeredCard": "Malaise",
      "bonus": 1.3,
      "reason": "Both apply Weak — stacking Weak sources reduces enemy damage consistently. Sucker Punch on top of Malaise Weak application deepens the debuff package."
    },
    {
      "deckCard": "Sucker Punch",
      "offeredCard": "Leg Sweep",
      "bonus": 1.2,
      "reason": "Both apply Weak — Sucker Punch on attack and Leg Sweep on block means every turn adds Weak stacks while also progressing offense and defense."
    },
    {
      "deckCard": "Escape Plan",
      "offeredCard": "Tools Of The Trade",
      "bonus": 1.5,
      "reason": "Tools of the Trade cycles each turn drawing cards — in a skill-heavy deck Escape Plan's conditional block triggers consistently. Both feed the cycling engine."
    },
    {
      "deckCard": "Escape Plan",
      "offeredCard": "Acrobatics",
      "bonus": 1.2,
      "reason": "Both cycle cards — Escape Plan draws 1 conditional, Acrobatics draws 3. Together they let you see most of your deck each turn finding Sly payoffs."
    },
    {
      "deckCard": "Expose",
      "offeredCard": "Noxious Fumes",
      "bonus": 1.8,
      "reason": "Artifact blocks all Poison application — Expose removes Artifact enabling Noxious Fumes to stack freely. Critical combo against Artifact enemies."
    },
    {
      "deckCard": "Expose",
      "offeredCard": "Envenom",
      "bonus": 1.8,
      "reason": "Envenom applies Poison on attacks but Artifact blocks it — Expose removes Artifact then every subsequent attack freely applies Poison."
    },
    {
      "deckCard": "Well-Laid Plans",
      "offeredCard": "Flechettes",
      "bonus": 2.0,
      "reason": "Retaining Skills inflates hand Skill count — Flechettes deals 5 damage per Skill in hand. Retain 3 Skills and Flechettes deals 15+ bonus damage before the hand you play this turn."
    },
    {
      "deckCard": "Flechettes",
      "offeredCard": "Acrobatics",
      "bonus": 1.5,
      "reason": "Acrobatics draws 3 cards — more draws means more Skills in hand when Flechettes fires. Play Acrobatics to load up then Flechettes to cash out."
    },
    {
      "deckCard": "Dodge And Roll",
      "offeredCard": "Well-Laid Plans",
      "bonus": 1.3,
      "reason": "Well-Laid Plans can retain Dodge and Roll — play it when it will hit both blocks across optimal turns."
    },
    {
      "deckCard": "Anticipate",
      "offeredCard": "Afterimage",
      "bonus": 1.2,
      "reason": "After Image gives 1 Block per card played — with Anticipate's 3 Dex active each After Image proc gives +3 block. Spam cheap cards for stacked block generation."
    },
    {
      "deckCard": "Slice",
      "offeredCard": "Afterimage",
      "bonus": 1.2,
      "reason": "Slice costs 0 — plays for free triggering After Image's 1 Block per card. In Sly builds Slice can fire multiple times for free."
    },
    {
      "deckCard": "Sucker Punch",
      "offeredCard": "Finisher",
      "bonus": 1.2,
      "reason": "Sucker Punch applies Weak reducing enemy damage, then Finisher's damage is boosted by the attack count including Sucker Punch."
    },
    {
      "deckCard": "Abrasive",
      "offeredCard": "Tools Of The Trade",
      "bonus": 2.0,
      "reason": "Tools of the Trade discards 1 each turn — if Abrasive is discarded via Sly, gain +1 permanent Dex and +4 Thorns every single turn passively. Infinite scaling."
    },
    {
      "deckCard": "Abrasive",
      "offeredCard": "Calculated Gamble",
      "bonus": 1.5,
      "reason": "Calculated Gamble discards entire hand — if Abrasive is there, it fires for free. Multiple Abrasive copies in hand = multiple permanent Dex stacks in one turn."
    },
    {
      "deckCard": "Afterimage",
      "offeredCard": "Blade Dance",
      "bonus": 2.0,
      "reason": "Blade Dance generates 3 Shivs — play Blade Dance (1 proc) then 3 Shivs (3 procs) = 4 Afterimage block from one card sequence."
    },
    {
      "deckCard": "Afterimage",
      "offeredCard": "Storm Of Steel",
      "bonus": 2.0,
      "reason": "Storm of Steel discards hand generating Shivs equal to hand size — each Sly trigger and each Shiv played procs Afterimage. Massive block generation."
    },
    {
      "deckCard": "Afterimage",
      "offeredCard": "Master Planner",
      "bonus": 1.8,
      "reason": "Master Planner enables playing many cards via Sly — each card played procs Afterimage. A full Sly turn with 8 cards = 8 free Block."
    },
    {
      "deckCard": "Bullet Time",
      "offeredCard": "Well-Laid Plans",
      "bonus": 2.0,
      "reason": "Well-Laid Plans retains cards between turns — build up a big hand of Sly cards then play Bullet Time to play everything for free. Pre-loads the hand for maximum Bullet Time value."
    },
    {
      "deckCard": "Bullet Time",
      "offeredCard": "Finisher",
      "bonus": 1.8,
      "reason": "Bullet Time makes all cards free — spam attacks then Finisher for massive per-attack damage. The more free attacks played the bigger Finisher hits."
    },
    {
      "deckCard": "Bullet Time",
      "offeredCard": "Flechettes",
      "bonus": 1.8,
      "reason": "Bullet Time makes all Skills free — hold a hand full of Skills, play Bullet Time, then Flechettes for huge damage equal to 5x all Skills in hand."
    },
    {
      "deckCard": "Corrosive Wave",
      "offeredCard": "Acrobatics",
      "bonus": 2.0,
      "reason": "Acrobatics draws 3 cards — with Corrosive Wave active that's 9 Poison to ALL enemies from one card. Stack both for instant massive Poison application."
    },
    {
      "deckCard": "Corrosive Wave",
      "offeredCard": "Expertise",
      "bonus": 2.0,
      "reason": "Expertise draws until hand has 6 — if you had 2 cards, 4 draws = 12 Poison to all enemies just from playing Expertise with Corrosive Wave active."
    },
    {
      "deckCard": "Corrosive Wave",
      "offeredCard": "Calculated Gamble",
      "bonus": 1.8,
      "reason": "Calculated Gamble draws equal to discarded — with Corrosive Wave each draw applies 3 AoE Poison. Discard 5, draw 5 = 15 Poison to all enemies."
    },
    {
      "deckCard": "Corrosive Wave",
      "offeredCard": "Noxious Fumes",
      "bonus": 1.5,
      "reason": "Both apply AoE Poison — Corrosive Wave on draws, Noxious Fumes passively each turn. Together they stack Poison on all enemies extremely fast."
    },
    {
      "deckCard": "Malaise",
      "offeredCard": "Tracking",
      "bonus": 2.5,
      "reason": "Malaise applies Weak — Tracking makes Weak enemies take double damage from all attacks. Malaise + Tracking = every attack does 2x damage for the rest of combat."
    },
    {
      "deckCard": "Tracking",
      "offeredCard": "Malaise",
      "bonus": 2.5,
      "reason": "Tracking doubles damage on Weak enemies — Malaise applies X Weak AND removes X Strength. Maximum debuff setup for Tracking's double damage payoff."
    },
    {
      "deckCard": "Malaise",
      "offeredCard": "Finisher",
      "bonus": 1.8,
      "reason": "Malaise weakens enemy — Finisher hits a Weakened target for 50% more damage per attack. The more attacks played, the bigger the Malaise+Finisher combo."
    },
    {
      "deckCard": "Malaise",
      "offeredCard": "Piercing Wail",
      "bonus": 1.5,
      "reason": "Both reduce Strength to all enemies — Malaise single target deep Weak, Piercing Wail AoE Strength reduction. Stack both for maximum damage amplification."
    },
    {
      "deckCard": "Murder",
      "offeredCard": "Acrobatics",
      "bonus": 1.8,
      "reason": "Acrobatics draws 3 every play — more draws means more Murder stacks. By mid-fight Murder hits for 30+ damage with consistent drawing."
    },
    {
      "deckCard": "Murder",
      "offeredCard": "Tools Of The Trade",
      "bonus": 1.5,
      "reason": "Tools of the Trade draws 1 every turn — constant draw stacking Murder's per-draw damage throughout the run."
    },
    {
      "deckCard": "Murder",
      "offeredCard": "Expertise",
      "bonus": 1.8,
      "reason": "Expertise draws up to 6 — each Expertise play adds multiple draws to Murder's damage counter. Late game Murder + Expertise is devastating."
    },
    {
      "deckCard": "Serpent Form",
      "offeredCard": "Blade Dance",
      "bonus": 1.5,
      "reason": "Blade Dance generates 3 Shivs — play Blade Dance (1 proc) then 3 Shivs (3 procs) = 4 Serpent Form pings of 4 damage each = 16 passive damage."
    },
    {
      "deckCard": "Serpent Form",
      "offeredCard": "Master Planner",
      "bonus": 1.8,
      "reason": "Master Planner enables playing many cards via Sly — each card played pings for 4 damage from Serpent Form. A full 8-card Sly turn = 32 passive damage."
    },
    {
      "deckCard": "Serpent Form",
      "offeredCard": "Afterimage",
      "bonus": 1.5,
      "reason": "Both trigger per card played — Serpent Form deals 4 damage and Afterimage gives 1 Block per play. Stack both for simultaneous offense and defense scaling."
    },
    {
      "deckCard": "Shadow Step",
      "offeredCard": "Reflex",
      "bonus": 1.8,
      "reason": "Shadow Step discards hand — if Reflex is in hand it fires for free drawing 2 cards. Triggers Sly chains AND sets up double damage attacks next turn."
    },
    {
      "deckCard": "Shadow Step",
      "offeredCard": "Tactician",
      "bonus": 1.8,
      "reason": "Shadow Step discards hand — Tactician fires for free giving 1 energy. Sly energy gain plus double attack damage next turn setup."
    },
    {
      "deckCard": "Shadow Step",
      "offeredCard": "Finisher",
      "bonus": 2.0,
      "reason": "Shadow Step doubles attacks next turn — Finisher hits for per-attack damage. With double damage active Finisher's damage is doubled on top of its scaling."
    },
    {
      "deckCard": "Storm Of Steel",
      "offeredCard": "Accuracy",
      "bonus": 2.5,
      "reason": "Storm of Steel generates Shivs equal to hand size — with Accuracy every Shiv hits for 8+ damage. A 6-card hand = 6 boosted Shivs in one play."
    },
    {
      "deckCard": "Storm Of Steel",
      "offeredCard": "Reflex",
      "bonus": 1.8,
      "reason": "Storm of Steel discards hand — Reflex fires for free drawing 2 cards. Replenish hand after dumping it, then play the generated Shivs."
    },
    {
      "deckCard": "Tracking",
      "offeredCard": "Leg Sweep",
      "bonus": 1.8,
      "reason": "Leg Sweep applies Weak while blocking — with Tracking active it also doubles all attack damage going forward. Defensive play with offensive multiplier payoff."
    },
    {
      "deckCard": "Tracking",
      "offeredCard": "Suppress",
      "bonus": 2.0,
      "reason": "Suppress is Innate applying 3 Weak turn 1 — Tracking is already active turn 1 making Suppress's 3 Weak immediately enable double damage from the opening hand."
    },
    {
      "deckCard": "Suppress",
      "offeredCard": "Tracking",
      "bonus": 2.0,
      "reason": "Suppress applies 3 Weak on turn 1 (Innate) — with Tracking in play that immediately means double damage from all attacks for the whole fight from the start."
    },
    {
      "deckCard": "Suppress",
      "offeredCard": "Finisher",
      "bonus": 1.5,
      "reason": "Suppress applies 3 Weak — Finisher on a Weakened enemy deals 50% more damage per attack. Innate Weak setup into Finisher payoff."
    },
    {
      "deckCard": "Wraith Form",
      "offeredCard": "Nightmare",
      "bonus": 2.0,
      "reason": "Nightmare creates 3 copies of a card — triple Wraith Form means 6 turns of Intangible back to back. Near-infinite immunity window while Dex loss is manageable."
    },
    {
      "deckCard": "Wraith Form",
      "offeredCard": "Footwork",
      "bonus": 1.5,
      "reason": "Wraith Form loses 1 Dex per turn start — Footwork's permanent Dex gain partially offsets the loss, extending the window before block degrades significantly."
    },
    {
      "deckCard": "Piercing Wail",
      "offeredCard": "Noxious Fumes",
      "bonus": 1.5,
      "reason": "Piercing Wail removes 6 Strength from all enemies this turn — while Noxious Fumes stacks Poison. Reduces incoming damage while Poison slowly kills. Strong defensive + offensive combo."
    },
    {
      "deckCard": "Piercing Wail",
      "offeredCard": "Blur",
      "bonus": 1.3,
      "reason": "Piercing Wail cuts enemy damage by 6 this turn — combine with Blur's block for a near-zero damage turn against most enemies."
    },
    {
      "deckCard": "Follow Through",
      "offeredCard": "Tracking",
      "bonus": 2.0,
      "reason": "Follow Through applies 1 Weak to ALL enemies if last card was a Skill — Tracking makes Weak enemies take double damage. Natural combo: play a Skill, Follow Through for AoE Weak, all future attacks deal double."
    },
    {
      "deckCard": "Tracking",
      "offeredCard": "Follow Through",
      "bonus": 2.0,
      "reason": "Tracking doubles damage on Weak enemies — Follow Through applies AoE Weak if preceded by a Skill. Consistent AoE Weak application feeding Tracking's double damage multiplier."
    },
    {
      "deckCard": "Assassinate",
      "offeredCard": "Finisher",
      "bonus": 1.8,
      "reason": "Assassinate is Innate — turn 1 it applies Vulnerable before Finisher. Every attack in the Finisher chain hits the Vulnerabled target for 50% more damage from the very first turn."
    },
    {
      "deckCard": "Assassinate",
      "offeredCard": "Pinpoint",
      "bonus": 1.5,
      "reason": "Assassinate applies Vulnerable early — Pinpoint's 17 damage on a Vulnerable target deals 25+ damage. Both exhaust so no deck clutter."
    },
    {
      "deckCard": "Shadowmeld",
      "offeredCard": "Footwork",
      "bonus": 2.0,
      "reason": "Shadowmeld doubles all Block gained this turn — Footwork's Dex makes every block card give more block. With 3 Dex and Shadowmeld, each block card's value is dramatically multiplied."
    },
    {
      "deckCard": "Shadowmeld",
      "offeredCard": "Dodge And Roll",
      "bonus": 1.8,
      "reason": "Shadowmeld doubles Block gain this turn — Dodge and Roll normally gives 4 Block, with Shadowmeld that's 8 Block now plus another doubled 8 Block next turn."
    },
    {
      "deckCard": "Shadowmeld",
      "offeredCard": "Blur",
      "bonus": 1.5,
      "reason": "Shadowmeld doubles Blur's retained block — instead of 5 retained block, you retain 10. Carry doubled block into next turn."
    },
    {
      "deckCard": "The Hunt",
      "offeredCard": "Finisher",
      "bonus": 1.5,
      "reason": "The Hunt kills a weak enemy granting extra card reward — then Finisher cleans up the rest with damage per attack already played this turn."
    },
    {
      "deckCard": "The Hunt",
      "offeredCard": "Blade Dance",
      "bonus": 1.3,
      "reason": "The Hunt kills a target then Exhausts — Blade Dance generates Shivs to finish remaining enemies with the bonus card reward lined up."
    },
    {
      "deckCard": "Dagger Throw",
      "offeredCard": "Reflex",
      "bonus": 1.8,
      "reason": "Dagger Throw draws 1 then discards 1 — if Reflex is discarded it fires for free drawing 2 more cards. Damage + net card draw + Sly chain in one play."
    },
    {
      "deckCard": "Dagger Throw",
      "offeredCard": "Tactician",
      "bonus": 1.8,
      "reason": "Dagger Throw's discard triggers Tactician for free — 9 damage plus draw plus free 1 energy. Efficient Sly enabler attack."
    },
    {
      "deckCard": "Pounce",
      "offeredCard": "Noxious Fumes",
      "bonus": 1.8,
      "reason": "Pounce makes next Skill cost 0 — Noxious Fumes costs 2. Pounce + free Noxious Fumes = 3-cost Poison engine setup for 1 energy total."
    },
    {
      "deckCard": "Pounce",
      "offeredCard": "Burst",
      "bonus": 2.0,
      "reason": "Pounce makes next Skill free — Burst is 1 cost. Pounce + free Burst = your next Skill plays twice for 0 energy. Game-changing combo enabler."
    },
    {
      "deckCard": "Memento Mori",
      "offeredCard": "Calculated Gamble",
      "bonus": 2.0,
      "reason": "Calculated Gamble discards entire hand — play Memento Mori after for 8 + 4 per card discarded. With 6 discards that's 32 damage for 1 energy."
    },
    {
      "deckCard": "Outbreak",
      "offeredCard": "Noxious Fumes",
      "bonus": 2.0,
      "reason": "Noxious Fumes applies 2 Poison to ALL enemies each turn — Outbreak fires 11 AoE every 3 Poison applications. Noxious Fumes alone triggers Outbreak consistently across multi-enemy rooms."
    },
    {
      "deckCard": "Outbreak",
      "offeredCard": "Envenom",
      "bonus": 1.8,
      "reason": "Envenom applies Poison whenever an Attack deals unblocked damage — with multiple attacks per turn Outbreak's 3-stack threshold fires rapidly for repeated 11 AoE damage."
    },
    {
      "deckCard": "Hidden Daggers",
      "offeredCard": "Accuracy",
      "bonus": 2.0,
      "reason": "Hidden Daggers generates 2 Shivs AND discards 2 triggering Sly effects. Both generated Shivs get Accuracy's full damage bonus immediately."
    },
    {
      "deckCard": "Hidden Daggers",
      "offeredCard": "Reflex",
      "bonus": 1.8,
      "reason": "Hidden Daggers discards 2 — if Reflex is discarded it fires for free drawing 2 cards. Sly chain + Shiv generation from one card."
    },
    {
      "deckCard": "Precise Cut",
      "offeredCard": "Calculated Gamble",
      "bonus": 2.0,
      "reason": "Calculated Gamble discards entire hand — immediately after, Precise Cut hits for full 13 damage with 0 cards in hand. Natural sequence."
    },
    {
      "deckCard": "Strangle",
      "offeredCard": "Master Planner",
      "bonus": 2.0,
      "reason": "Master Planner makes every Skill gain Sly when played — each Skill played counts toward Strangle's 2 HP drain per card. Full Sly chain = 16+ HP bypass plus Strangle's 8 base damage."
    },
    {
      "deckCard": "Speedster",
      "offeredCard": "Acrobatics",
      "bonus": 2.0,
      "reason": "Acrobatics draws 3 — with Speedster each draw pings for 2 AoE = 6 free AoE from one card. Stack multiple Acrobatics for rapid AoE accumulation."
    },
    {
      "deckCard": "Speedster",
      "offeredCard": "Expertise",
      "bonus": 1.8,
      "reason": "Expertise draws until hand has 6 — if you had 2 cards, 4 draws = 8 AoE damage just from playing Expertise with Speedster active."
    },
    {
      "deckCard": "Up My Sleeve",
      "offeredCard": "Accuracy",
      "bonus": 2.0,
      "reason": "Up My Sleeve generates 3 Shivs that get cheaper each cast — all 3 get Accuracy's full damage bonus. Eventually free repeatable Shiv supply."
    },
    {
      "deckCard": "Up My Sleeve",
      "offeredCard": "Finisher",
      "bonus": 1.8,
      "reason": "Up My Sleeve generates 3 Shivs — play them then Finisher for 4 attacks worth of damage. Reusable unlike Blade Dance for consistent Finisher setup."
    },
    {
      "deckCard": "Burst",
      "offeredCard": "Deadly Poison",
      "bonus": 1.8,
      "reason": "Deadly Poison is a Skill — Burst doubles it, applying 10 Poison for 1 energy. Strong early Poison ramp."
    },
    {
      "deckCard": "Burst",
      "offeredCard": "Haze",
      "bonus": 1.8,
      "reason": "Haze is a Sly Skill that applies 4 AoE Poison — Burst doubles it for 8 AoE Poison. Both are Skills, valid Burst target."
    },
    {
      "deckCard": "Burst",
      "offeredCard": "Acrobatics",
      "bonus": 1.5,
      "reason": "Acrobatics is a Skill — Burst doubles it for Draw 6, Discard 2. Massive cycle turn triggering 2 Sly discards."
    },
    {
      "deckCard": "Burst",
      "offeredCard": "Mirage",
      "bonus": 1.5,
      "reason": "Mirage is a Skill — Burst doubles it, gaining block equal to Poison on ALL enemies twice. Emergency double block in Poison builds."
    },
    {
      "deckCard": "Burst",
      "offeredCard": "Piercing Wail",
      "bonus": 1.8,
      "reason": "Piercing Wail is a Skill — Burst doubles it, removing 12 Strength from ALL enemies this turn instead of 6. Massive damage reduction on heavy-hitting turns."
    },
    {
      "deckCard": "Burst",
      "offeredCard": "Expertise",
      "bonus": 1.5,
      "reason": "Expertise is a Skill — Burst makes it play twice, filling your hand twice up to 6 cards each time. Massive card draw setup."
    },
    {
      "deckCard": "Burst",
      "offeredCard": "Shadowmeld",
      "bonus": 1.8,
      "reason": "Shadowmeld is a Skill that doubles Block gain — Burst plays it twice. First doubles your block, second doubles it again. Potentially 4x block from all sources this turn."
    },
    {
      "deckCard": "Outbreak",
      "offeredCard": "Bouncing Flask",
      "bonus": 1.8,
      "reason": "Bouncing Flask applies 3 Poison 3 times (9 total), making it easy to trigger Outbreak's 3-Poison-application threshold for 11 AoE damage."
    },
    {
      "deckCard": "Bouncing Flask",
      "offeredCard": "Outbreak",
      "bonus": 1.8,
      "reason": "Bouncing Flask hits 3 enemies with Poison — Outbreak fires 11 AoE every 3 Poison applications. Bouncing Flask alone can trigger Outbreak in one play."
    },
    {
      "deckCard": "Hidden Daggers",
      "offeredCard": "Untouchable",
      "bonus": 1.8,
      "reason": "Hidden Daggers discards 2 cards — Untouchable has Sly (9 Block when discarded for free). Discard Untouchable via Hidden Daggers for 9 free Block plus 2 Shivs."
    },
    {
      "deckCard": "Hidden Daggers",
      "offeredCard": "Abrasive",
      "bonus": 1.8,
      "reason": "Hidden Daggers discards 2 cards — Abrasive has Sly (1 Dex + 4 Thorns when discarded free). Discard Abrasive via Hidden Daggers for permanent Dex + Thorns plus 2 Shivs."
    },
    {
      "deckCard": "Knife Trap",
      "offeredCard": "Serpent Form",
      "bonus": 2.0,
      "reason": "Knife Trap plays every Shiv in exhaust pile — Serpent Form deals 4 damage per card played. Playing 15-20 Shivs via Knife Trap = 60-80 passive damage from Serpent Form simultaneously."
    },
    {
      "deckCard": "Serpent Form",
      "offeredCard": "Knife Trap",
      "bonus": 2.0,
      "reason": "Knife Trap fires all exhaust Shivs — each Shiv played procs Serpent Form's 4 damage. 15 Shivs = 60 extra damage from Serpent Form on top of Shiv damage."
    },
    {
      "deckCard": "Well-Laid Plans",
      "offeredCard": "Burst",
      "bonus": 1.8,
      "reason": "Well-Laid Plans retains a card between turns — hold Burst until you have a key Skill in hand, then Burst+Skill for double effect. Reliable setup for Burst combos."
    },
    {
      "deckCard": "Hand Trick",
      "offeredCard": "Burst",
      "bonus": 2.0,
      "reason": "PCGamesN guide: Hand Trick adds Sly to a Skill in hand — if you land Sly on Burst, discarding it plays Burst for free. Free next-Skill-plays-twice is explosive value."
    },
    {
      "deckCard": "Hand Trick",
      "offeredCard": "Adrenaline",
      "bonus": 1.8,
      "reason": "PCGamesN guide: Hand Trick adds Sly to a Skill — if Adrenaline gets Sly, discarding plays it free for energy + 2 cards at no cost. Free Adrenaline is among the best Sly hits possible."
    },
    {
      "deckCard": "Haze",
      "offeredCard": "Tools Of The Trade",
      "bonus": 2.0,
      "reason": "Haze is Sly — Tools of the Trade's passive discard triggers Haze for free every turn applying 4 AoE Poison. Core Sly+Poison overlap combo."
    },
    {
      "deckCard": "Accuracy",
      "offeredCard": "Accuracy",
      "bonus": 2.5,
      "reason": "Each Accuracy adds 4 damage to every Shiv. Two copies = +8 per Shiv, three = +12. get as many as you can. Stacking Accuracy is the core Shiv scaling strategy."
    },
    {
      "deckCard": "Nightmare",
      "offeredCard": "Wraith Form",
      "bonus": 2.0,
      "reason": "Nightmare creates 3 copies of Wraith Form — play all three for 6 turns of Intangible. Near-invincible for multiple turns. Dualshockers guide calls this game-winning."
    },
    {
      "deckCard": "Envenom",
      "offeredCard": "Blade Dance",
      "bonus": 1.8,
      "reason": "Envenom applies Poison on unblocked attack damage — Blade Dance generates 3 Shivs. Each Shiv that deals unblocked damage applies 1 Poison. Shiv+Poison hybrid core combo."
    },
    {
      "deckCard": "Blade Dance",
      "offeredCard": "Envenom",
      "bonus": 1.8,
      "reason": "Blade Dance generates 3 Shivs — with Envenom active each unblocked Shiv applies Poison. Natural bridge between Shiv and Poison builds."
    },
    {
      "deckCard": "The Smith",
      "offeredCard": "Conqueror",
      "bonus": 2.5,
      "reason": "The Smith forges 30 in one play — Conqueror then doubles that Sovereign Blade damage for a one-shot."
    },
    {
      "deckCard": "Conqueror",
      "offeredCard": "The Smith",
      "bonus": 2.5,
      "reason": "The Smith provides massive Forge for Conqueror to double — one of the cleanest Forge win conditions."
    },
    {
      "deckCard": "The Smith",
      "offeredCard": "Sword Sage",
      "bonus": 2.0,
      "reason": "The Smith maxes Forge — Sword Sage adds an extra hit at that damage, often doubling total output."
    },
    {
      "deckCard": "Sword Sage",
      "offeredCard": "The Smith",
      "bonus": 2.0,
      "reason": "Sword Sage adds extra Sovereign Blade hit — The Smith makes that hit enormous."
    },
    {
      "deckCard": "The Smith",
      "offeredCard": "Seeking Edge",
      "bonus": 2.0,
      "reason": "The Smith builds massive Sovereign Blade damage — Seeking Edge makes it hit all enemies simultaneously."
    },
    {
      "deckCard": "Seeking Edge",
      "offeredCard": "The Smith",
      "bonus": 2.0,
      "reason": "Seeking Edge enables AoE Sovereign Blade — The Smith makes that AoE lethal."
    },
    {
      "deckCard": "Decisions, Decisions",
      "offeredCard": "The Smith",
      "bonus": 2.5,
      "reason": "Decisions Decisions plays The Smith 3 times — Forge 90 total. Instant Forge win condition."
    },
    {
      "deckCard": "The Smith",
      "offeredCard": "Decisions, Decisions",
      "bonus": 2.5,
      "reason": "The Smith is the ideal Skill target for Decisions Decisions — 3x Forge 30 = Forge 90."
    },
    {
      "deckCard": "Decisions, Decisions",
      "offeredCard": "Reflect",
      "bonus": 2.0,
      "reason": "Decisions Decisions triples Reflect — 3x17=51 Block in one play."
    },
    {
      "deckCard": "Reflect",
      "offeredCard": "Decisions, Decisions",
      "bonus": 2.0,
      "reason": "Reflect triples for 51 Block — Decisions Decisions is the ultimate Reflect multiplier."
    },
    {
      "deckCard": "Decisions, Decisions",
      "offeredCard": "Know Thy Place",
      "bonus": 1.8,
      "reason": "Decisions Decisions triples Know Thy Place — 3 Weak and 3 Vulnerable on all enemies for free."
    },
    {
      "deckCard": "Know Thy Place",
      "offeredCard": "Decisions, Decisions",
      "bonus": 1.8,
      "reason": "Know Thy Place tripled means 3 stacks of Weak and Vulnerable — full setup for a massive nuke turn."
    },
    {
      "deckCard": "Furnace",
      "offeredCard": "Sword Sage",
      "bonus": 1.5,
      "reason": "Furnace passively Forges each turn — Sword Sage converts that accumulated Forge into extra Sovereign Blade hits."
    },
    {
      "deckCard": "Sword Sage",
      "offeredCard": "Furnace",
      "bonus": 1.5,
      "reason": "Sword Sage adds extra blade hits — Furnace ensures the blade value grows every turn passively."
    },
    {
      "deckCard": "Seeking Edge",
      "offeredCard": "Conqueror",
      "bonus": 1.8,
      "reason": "Seeking Edge makes Sovereign Blade hit all enemies — Conqueror then doubles that AoE damage."
    },
    {
      "deckCard": "Conqueror",
      "offeredCard": "Seeking Edge",
      "bonus": 1.8,
      "reason": "Conqueror doubles blade damage — Seeking Edge spreads that doubled damage to all enemies."
    },
    {
      "deckCard": "Refine Blade",
      "offeredCard": "Sword Sage",
      "bonus": 1.5,
      "reason": "Refine Blade provides Forge and Energy — Sword Sage converts Forge into extra blade hits."
    },
    {
      "deckCard": "Sword Sage",
      "offeredCard": "Refine Blade",
      "bonus": 1.5,
      "reason": "Sword Sage adds extra Sovereign Blade hits — Refine Blade fuels the Forge needed to make those hits devastating."
    },
    {
      "deckCard": "Bulwark",
      "offeredCard": "Seeking Edge",
      "bonus": 1.5,
      "reason": "Bulwark provides Block and Forge — Seeking Edge turns the Sovereign Blade that Forge powers into AoE."
    },
    {
      "deckCard": "Seeking Edge",
      "offeredCard": "Bulwark",
      "bonus": 1.5,
      "reason": "Seeking Edge enables AoE blade — Bulwark adds both defense and Forge to grow that AoE damage."
    },
    {
      "deckCard": "The Sealed Throne",
      "offeredCard": "Void Form",
      "bonus": 2.0,
      "reason": "The Sealed Throne gives Star per card played — Void Form makes first 2 cards free, generating Stars at no cost."
    },
    {
      "deckCard": "Void Form",
      "offeredCard": "The Sealed Throne",
      "bonus": 2.0,
      "reason": "Void Form plays cards for free — The Sealed Throne converts every free play into a Star passively."
    },
    {
      "deckCard": "Radiate",
      "offeredCard": "The Sealed Throne",
      "bonus": 1.8,
      "reason": "Radiate deals 3 AoE per Star gained this turn — The Sealed Throne generates a Star on every card played."
    },
    {
      "deckCard": "The Sealed Throne",
      "offeredCard": "Child of the Stars",
      "bonus": 1.8,
      "reason": "The Sealed Throne generates Stars constantly — Child of the Stars converts each Star spent into 2 Block."
    },
    {
      "deckCard": "Child of the Stars",
      "offeredCard": "The Sealed Throne",
      "bonus": 1.8,
      "reason": "Child of the Stars needs Star income — The Sealed Throne provides a Star every card played."
    },
    {
      "deckCard": "Spectrum Shift",
      "offeredCard": "Arsenal",
      "bonus": 2.0,
      "reason": "Spectrum Shift creates a free Colorless card each turn — Arsenal converts each Colorless played into permanent Strength."
    },
    {
      "deckCard": "Arsenal",
      "offeredCard": "Spectrum Shift",
      "bonus": 2.0,
      "reason": "Arsenal gains Strength per Colorless card played — Spectrum Shift provides a free Colorless every single turn."
    },
    {
      "deckCard": "Pillar of Creation",
      "offeredCard": "Spectrum Shift",
      "bonus": 1.8,
      "reason": "Spectrum Shift creates a Colorless card at turn start — Pillar of Creation gives 3 Block per creation, every turn for free."
    },
    {
      "deckCard": "Spectrum Shift",
      "offeredCard": "Pillar of Creation",
      "bonus": 1.8,
      "reason": "Pillar of Creation rewards card creation with Block — Spectrum Shift triggers it every turn automatically."
    },
    {
      "deckCard": "Pillar of Creation",
      "offeredCard": "Quasar",
      "bonus": 1.5,
      "reason": "Quasar creates a Colorless card — Pillar of Creation gives 3 Block each time, stacking fast in Colorless-heavy builds."
    },
    {
      "deckCard": "Quasar",
      "offeredCard": "Pillar of Creation",
      "bonus": 1.5,
      "reason": "Pillar of Creation gives 3 Block per card created — Quasar creates a Colorless on demand."
    },
    {
      "deckCard": "Arsenal",
      "offeredCard": "Quasar",
      "bonus": 1.5,
      "reason": "Quasar creates Colorless cards — Arsenal converts each one played into permanent Strength."
    },
    {
      "deckCard": "Quasar",
      "offeredCard": "Arsenal",
      "bonus": 1.5,
      "reason": "Arsenal gains Strength from Colorless cards played — Quasar provides them on demand."
    },
    {
      "deckCard": "Arsenal",
      "offeredCard": "Manifest Authority",
      "bonus": 1.5,
      "reason": "Manifest Authority creates a random Colorless card — Arsenal turns that into permanent Strength plus Block."
    },
    {
      "deckCard": "Manifest Authority",
      "offeredCard": "Arsenal",
      "bonus": 1.5,
      "reason": "Arsenal gains Strength from Colorless cards — Manifest Authority provides one while also giving Block."
    },
    {
      "deckCard": "Arsenal",
      "offeredCard": "Heirloom Hammer",
      "bonus": 1.5,
      "reason": "Heirloom Hammer duplicates a Colorless card in hand — Arsenal gains Strength from both the original and copy when played."
    },
    {
      "deckCard": "Heirloom Hammer",
      "offeredCard": "Arsenal",
      "bonus": 1.5,
      "reason": "Arsenal needs Colorless cards to gain Strength — Heirloom Hammer duplicates them, doubling Arsenal triggers."
    },
    {
      "deckCard": "Spectrum Shift",
      "offeredCard": "Supermassive",
      "bonus": 1.5,
      "reason": "Spectrum Shift creates a Colorless card every turn — Supermassive scales +3 per card created this combat."
    },
    {
      "deckCard": "Supermassive",
      "offeredCard": "Spectrum Shift",
      "bonus": 1.5,
      "reason": "Supermassive scales with cards created this combat — Spectrum Shift adds one free creation per turn."
    },
    {
      "deckCard": "Know Thy Place",
      "offeredCard": "Comet",
      "bonus": 2.0,
      "reason": "Know Thy Place applies Vulnerable (double damage) then Exhausts — Comet hits for 33 damage, effectively 66 against a Vulnerable enemy."
    },
    {
      "deckCard": "Comet",
      "offeredCard": "Know Thy Place",
      "bonus": 2.0,
      "reason": "Comet is a massive 33 damage nuke — Know Thy Place doubles that with Vulnerable and Weak for near-lethal hits."
    },
    {
      "deckCard": "Know Thy Place",
      "offeredCard": "Gamma Blast",
      "bonus": 1.8,
      "reason": "Know Thy Place applies Vulnerable — Gamma Blast already applies 2 more for 3 total, and hits for 13 on already-vulnerable target."
    },
    {
      "deckCard": "Gamma Blast",
      "offeredCard": "Know Thy Place",
      "bonus": 1.5,
      "reason": "Gamma Blast applies its own Vulnerable — Know Thy Place stacks additional setup for follow-up nukes."
    },
    {
      "deckCard": "Meteor Shower",
      "offeredCard": "Comet",
      "bonus": 2.5,
      "reason": "Meteor Shower applies 2 Vulnerable to all enemies — Comet then hits for effectively 66 AoE damage against Vulnerable targets."
    },
    {
      "deckCard": "Comet",
      "offeredCard": "Meteor Shower",
      "bonus": 2.5,
      "reason": "Comet is a 33 damage single target nuke — Meteor Shower first applies Vulnerable to all, making Comet land for double."
    },
    {
      "deckCard": "Meteor Shower",
      "offeredCard": "Seven Stars",
      "bonus": 2.0,
      "reason": "Meteor Shower applies 2 Weak and 2 Vulnerable to all enemies — Seven Stars then deals 7x7=49 AoE hits per enemy at doubled damage."
    },
    {
      "deckCard": "Seven Stars",
      "offeredCard": "Meteor Shower",
      "bonus": 2.0,
      "reason": "Seven Stars deals massive multi-hit AoE — Meteor Shower first debuffs all enemies with Vulnerable and Weak."
    },
    {
      "deckCard": "Monarch's Gaze",
      "offeredCard": "Celestial Might",
      "bonus": 1.8,
      "reason": "Monarch's Gaze reduces enemy Strength by 1 per attack — Celestial Might hits 3 times, draining 3 Strength in one card."
    },
    {
      "deckCard": "Celestial Might",
      "offeredCard": "Monarch's Gaze",
      "bonus": 1.8,
      "reason": "Celestial Might hits 3 times — Monarch's Gaze converts each hit into -1 enemy Strength this turn, compounding damage on multi-hit turns."
    },
    {
      "deckCard": "Monarch's Gaze",
      "offeredCard": "Seven Stars",
      "bonus": 2.0,
      "reason": "Monarch's Gaze reduces Strength per attack — Seven Stars hits 7x7=49 times, draining enormous enemy Strength each turn."
    },
    {
      "deckCard": "Seven Stars",
      "offeredCard": "Monarch's Gaze",
      "bonus": 2.0,
      "reason": "Seven Stars is 49 AoE hits — Monarch's Gaze turns each hit into Strength drain, stacking with itself massively."
    },
    {
      "deckCard": "Black Hole",
      "offeredCard": "Genesis",
      "bonus": 1.8,
      "reason": "Genesis generates 2 Stars per turn passively — Black Hole deals 3 AoE damage per Star gained, converting passive Stars into recurring AoE."
    },
    {
      "deckCard": "Genesis",
      "offeredCard": "Black Hole",
      "bonus": 1.8,
      "reason": "Black Hole deals 3 AoE per Star spent or gained — Genesis provides 2 free Stars per turn to trigger it passively."
    },
    {
      "deckCard": "Black Hole",
      "offeredCard": "Royal Gamble",
      "bonus": 2.0,
      "reason": "Royal Gamble dumps 9 Stars — Black Hole deals 3 AoE per Star, converting 9 Stars into 27 AoE damage instantly."
    },
    {
      "deckCard": "Royal Gamble",
      "offeredCard": "Black Hole",
      "bonus": 2.0,
      "reason": "Black Hole converts Star spending into AoE damage — Royal Gamble dumps 9 Stars for an immediate 27 AoE burst."
    },
    {
      "deckCard": "Black Hole",
      "offeredCard": "The Sealed Throne",
      "bonus": 1.8,
      "reason": "The Sealed Throne generates a Star per card played — Black Hole deals 3 AoE per Star, turning your card plays into passive AoE damage."
    },
    {
      "deckCard": "The Sealed Throne",
      "offeredCard": "Black Hole",
      "bonus": 1.8,
      "reason": "Black Hole deals 3 AoE per Star — The Sealed Throne ensures every card played generates a Star and therefore 3 AoE damage."
    },
    {
      "deckCard": "Alignment",
      "offeredCard": "Royal Gamble",
      "bonus": 1.5,
      "reason": "Royal Gamble generates 9 Stars — Alignment converts Stars into 2 Energy, giving massive energy for followup plays."
    },
    {
      "deckCard": "Royal Gamble",
      "offeredCard": "Alignment",
      "bonus": 1.5,
      "reason": "Alignment trades Stars for 2 Energy — Royal Gamble provides 9 Stars to fuel multiple Alignment activations."
    },
    {
      "deckCard": "Hidden Cache",
      "offeredCard": "Child of the Stars",
      "bonus": 1.8,
      "reason": "Hidden Cache gives 1+3 Stars over 2 turns — Child of the Stars converts those 4 Stars into 8 Block passively."
    },
    {
      "deckCard": "Child of the Stars",
      "offeredCard": "Hidden Cache",
      "bonus": 1.8,
      "reason": "Child of the Stars gains 2 Block per Star spent — Hidden Cache provides a big delayed Star dump for mass Block generation."
    },
    {
      "deckCard": "Hidden Cache",
      "offeredCard": "Radiate",
      "bonus": 1.5,
      "reason": "Hidden Cache provides 4 Stars over 2 turns — Radiate converts each Star gained this turn into 3 AoE damage."
    },
    {
      "deckCard": "Radiate",
      "offeredCard": "Hidden Cache",
      "bonus": 1.5,
      "reason": "Radiate deals 3 AoE per Star gained this turn — Hidden Cache provides 1 immediately then 3 next turn for recurring Radiate value."
    },
    {
      "deckCard": "Shining Strike",
      "offeredCard": "Child of the Stars",
      "bonus": 1.5,
      "reason": "Shining Strike gains 2 Stars on attack — Child of the Stars converts those Stars into 4 Block per Shining Strike played."
    },
    {
      "deckCard": "Child of the Stars",
      "offeredCard": "Shining Strike",
      "bonus": 1.5,
      "reason": "Child of the Stars rewards Star spending with Block — Shining Strike provides Stars reliably on each attack."
    },
    {
      "deckCard": "Shining Strike",
      "offeredCard": "Radiate",
      "bonus": 1.5,
      "reason": "Shining Strike gains 2 Stars on attack — Radiate converts those Stars into 6 AoE damage per Shining Strike."
    },
    {
      "deckCard": "Radiate",
      "offeredCard": "Shining Strike",
      "bonus": 1.5,
      "reason": "Radiate deals 3 damage per Star gained this turn — Shining Strike provides 2 Stars on hit for 6 AoE damage per attack."
    },
    {
      "deckCard": "Convergence",
      "offeredCard": "Radiate",
      "bonus": 1.8,
      "reason": "Convergence retains hand and grants Stars next turn — those Stars get spent for Radiate AoE on the following turn."
    },
    {
      "deckCard": "Make It So",
      "offeredCard": "Void Form",
      "bonus": 1.5,
      "reason": "Make It So returns to hand every 3 Skills — Void Form makes the first 2 cards free, accelerating how often you reach 3 Skills."
    },
    {
      "deckCard": "Void Form",
      "offeredCard": "Make It So",
      "bonus": 1.5,
      "reason": "Void Form plays cards free — Make It So triggers off Skills played, returning to hand faster with free card spam."
    },
    {
      "deckCard": "Pale Blue Dot",
      "offeredCard": "Void Form",
      "bonus": 1.5,
      "reason": "Pale Blue Dot draws if you play 5+ cards — Void Form makes first 2 free, trivially enabling 5+ card turns."
    },
    {
      "deckCard": "Void Form",
      "offeredCard": "Pale Blue Dot",
      "bonus": 1.5,
      "reason": "Void Form enables big card count turns easily — Pale Blue Dot gives extra draw next turn when you hit 5+ cards."
    },
    {
      "deckCard": "Terraforming",
      "offeredCard": "Celestial Might",
      "bonus": 1.8,
      "reason": "Terraforming gives 6 Vigor (temporary Strength) — Celestial Might hits 3 times, applying that Strength 3 times for massive burst damage."
    },
    {
      "deckCard": "Celestial Might",
      "offeredCard": "Terraforming",
      "bonus": 1.8,
      "reason": "Celestial Might is a 3-hit attack — Terraforming grants 6 temporary Strength, turning each hit into a massive damage spike."
    },
    {
      "deckCard": "Terraforming",
      "offeredCard": "Seven Stars",
      "bonus": 2.0,
      "reason": "Terraforming gives 6 Vigor — Seven Stars hits 49 times across all enemies, applying that Strength on every single hit for enormous burst."
    },
    {
      "deckCard": "Seven Stars",
      "offeredCard": "Terraforming",
      "bonus": 2.0,
      "reason": "Seven Stars is 49 multi-hit AoE — Terraforming grants 6 temporary Strength that multiplies across all those hits."
    },
    {
      "deckCard": "I Am Invincible",
      "offeredCard": "Cosmic Indifference",
      "bonus": 1.5,
      "reason": "I Am Invincible replays if on top of draw pile — Cosmic Indifference puts a card on top of draw, useful for positioning."
    },
    {
      "deckCard": "Cosmic Indifference",
      "offeredCard": "I Am Invincible",
      "bonus": 1.5,
      "reason": "I Am Invincible is a recurring Block engine when on top — Cosmic Indifference helps manage draw pile positioning."
    },
    {
      "deckCard": "Neutron Aegis",
      "offeredCard": "I Am Invincible",
      "bonus": 1.5,
      "reason": "Both are defensive power cards — Neutron Aegis provides permanent Plating while I Am Invincible provides recurring Block."
    },
    {
      "deckCard": "I Am Invincible",
      "offeredCard": "Neutron Aegis",
      "bonus": 1.5,
      "reason": "I Am Invincible provides recurring Block — Neutron Aegis adds 8 permanent Plating on top for layered defense."
    },
    {
      "deckCard": "Capture Spirit",
      "offeredCard": "Death March",
      "bonus": 2.0,
      "reason": "Capture Spirit adds 3 Souls to Draw Pile — Death March deals 3 bonus damage per card drawn this turn, turning Soul draws into massive damage."
    },
    {
      "deckCard": "Death March",
      "offeredCard": "Capture Spirit",
      "bonus": 2.0,
      "reason": "Death March scales with cards drawn — Capture Spirit reliably generates 3 Souls per play, fueling huge Death March turns."
    },
    {
      "deckCard": "Seance",
      "offeredCard": "Death March",
      "bonus": 1.8,
      "reason": "Seance converts dead cards into Souls — Death March scores 3 bonus damage per drawn card, Souls drawn count toward its scaling."
    },
    {
      "deckCard": "Death March",
      "offeredCard": "Seance",
      "bonus": 1.8,
      "reason": "Death March rewards high draw — Seance thins deck into Souls, making every draw more valuable and triggering Death March's bonus."
    },
    {
      "deckCard": "Severance",
      "offeredCard": "Haunt",
      "bonus": 1.8,
      "reason": "Severance adds 3 Souls across deck, hand, and discard simultaneously — Haunt triggers on each Soul played for 18 total HP loss per Severance."
    },
    {
      "deckCard": "Haunt",
      "offeredCard": "Severance",
      "bonus": 1.8,
      "reason": "Haunt deals 6 HP per Soul played — Severance floods all three piles with Souls immediately for huge Haunt value."
    },
    {
      "deckCard": "Devour Life",
      "offeredCard": "Capture Spirit",
      "bonus": 2.0,
      "reason": "Devour Life Summons 1 per Soul played — Capture Spirit generates 3 Souls, giving 3 free Summons plus growing Osty each time."
    },
    {
      "deckCard": "Capture Spirit",
      "offeredCard": "Devour Life",
      "bonus": 2.0,
      "reason": "Capture Spirit provides reliable Soul income — Devour Life converts every Soul into Osty growth, linking Soul and Osty engines."
    },
    {
      "deckCard": "Devour Life",
      "offeredCard": "Severance",
      "bonus": 1.8,
      "reason": "Devour Life Summons 1 per Soul — Severance adds 3 Souls at once, giving 3 immediate Summons and Osty growth in one card."
    },
    {
      "deckCard": "Severance",
      "offeredCard": "Devour Life",
      "bonus": 1.8,
      "reason": "Severance floods deck with Souls — Devour Life converts each Soul play into Osty Summon, bridging Soul and Osty archetypes."
    },
    {
      "deckCard": "Transfigure",
      "offeredCard": "Undeath",
      "bonus": 2.5,
      "reason": "Transfigure adds Replay to a card — on Undeath, Replay makes it play twice, adding 2 copies to Discard instead of 1. Exponential Block generation."
    },
    {
      "deckCard": "Undeath",
      "offeredCard": "Transfigure",
      "bonus": 2.5,
      "reason": "Undeath copies itself into Discard each play — Transfigure's Replay doubles this, making 2 copies per play for explosive Block scaling."
    },
    {
      "deckCard": "Dredge",
      "offeredCard": "Graveblast",
      "bonus": 1.8,
      "reason": "Both retrieve cards from Discard — combining them creates a near-infinite recursion loop, pulling key cards back every turn."
    },
    {
      "deckCard": "Graveblast",
      "offeredCard": "Dredge",
      "bonus": 1.8,
      "reason": "Dredge retrieves 3 Discard cards — Graveblast retrieves 1, together ensuring key cards like Capture Spirit or Undeath are always accessible."
    },
    {
      "deckCard": "Demesne",
      "offeredCard": "Parse",
      "bonus": 2.0,
      "reason": "Demesne gives +1 draw per turn passively — Parse is an Ethereal draw 3, and Demesne already drew 1 extra making Parse effectively draw 4 in context."
    },
    {
      "deckCard": "Parse",
      "offeredCard": "Demesne",
      "bonus": 2.0,
      "reason": "Parse is free Ethereal draw 3 — Demesne's passive +1 draw means turning every turn into massive card advantage when Parse cycles through."
    },
    {
      "deckCard": "Pagestorm",
      "offeredCard": "Parse",
      "bonus": 2.0,
      "reason": "Parse is Ethereal — Pagestorm draws 1 whenever you draw an Ethereal card, making Parse effectively draw 4 total cards for 0 Energy."
    },
    {
      "deckCard": "Parse",
      "offeredCard": "Pagestorm",
      "bonus": 2.0,
      "reason": "Pagestorm triggers on Ethereal draws — Parse being Ethereal itself draws 3, and Pagestorm adds 1 more for free."
    },
    {
      "deckCard": "Pagestorm",
      "offeredCard": "Call of the Void",
      "bonus": 1.8,
      "reason": "Call of the Void adds an Ethereal card to hand each turn — Pagestorm draws 1 whenever you draw Ethereal, giving passive +1 draw every single turn."
    },
    {
      "deckCard": "Call of the Void",
      "offeredCard": "Pagestorm",
      "bonus": 1.8,
      "reason": "Pagestorm triggers on Ethereal card draws — Call of the Void generates a free Ethereal each turn, making Pagestorm draw 1 extra every turn passively."
    },
    {
      "deckCard": "Spirit of Ash",
      "offeredCard": "Parse",
      "bonus": 1.8,
      "reason": "Parse is Ethereal — Spirit of Ash gains 4 Block per Ethereal played, making Parse a 0-cost draw 3 plus 4 Block simultaneously."
    },
    {
      "deckCard": "Parse",
      "offeredCard": "Spirit of Ash",
      "bonus": 1.8,
      "reason": "Spirit of Ash gives 4 Block per Ethereal — Parse is the most efficient Ethereal since it's 0-cost draw 3 for maximum Spirit of Ash value."
    },
    {
      "deckCard": "Spirit of Ash",
      "offeredCard": "Call of the Void",
      "bonus": 1.5,
      "reason": "Call of the Void adds an Ethereal card each turn — Spirit of Ash gains 4 Block each time you play it, giving passive 4 Block every turn."
    },
    {
      "deckCard": "Call of the Void",
      "offeredCard": "Spirit of Ash",
      "bonus": 1.5,
      "reason": "Spirit of Ash rewards Ethereal plays — Call of the Void creates a free Ethereal each turn for consistent 4 Block from Spirit of Ash."
    },
    {
      "deckCard": "Veilpiercer",
      "offeredCard": "Demesne",
      "bonus": 1.8,
      "reason": "Veilpiercer makes next Ethereal free — Demesne is Ethereal and costs 0 this way, giving permanent +1 Energy and +1 draw for free."
    },
    {
      "deckCard": "Demesne",
      "offeredCard": "Veilpiercer",
      "bonus": 1.8,
      "reason": "Demesne is Ethereal — Veilpiercer reduces its cost to 0, making the permanent draw and Energy engine completely free to install."
    },
    {
      "deckCard": "Pull from Below",
      "offeredCard": "Call of the Void",
      "bonus": 1.5,
      "reason": "Call of the Void generates Ethereal cards each turn — Pull from Below scales on Ethereal cards played this combat, growing with every free Ethereal."
    },
    {
      "deckCard": "Call of the Void",
      "offeredCard": "Pull from Below",
      "bonus": 1.5,
      "reason": "Pull from Below deals 5 damage per Ethereal played combat-wide — Call of the Void adds a free Ethereal every single turn."
    },
    {
      "deckCard": "Debilitate",
      "offeredCard": "Putrefy",
      "bonus": 2.0,
      "reason": "Debilitate makes Weak and Vulnerable twice as effective for 3 turns — Putrefy applies 2 of each, effectively making enemy take 4x debuff impact."
    },
    {
      "deckCard": "Putrefy",
      "offeredCard": "Debilitate",
      "bonus": 2.0,
      "reason": "Putrefy applies Weak + Vulnerable — Debilitate then doubles both, making attacks during next 3 turns deal enormous bonus damage."
    },
    {
      "deckCard": "Debilitate",
      "offeredCard": "Deathbringer",
      "bonus": 1.8,
      "reason": "Deathbringer applies 21 Doom AoE plus Weak — Debilitate doubles Weak effectiveness, making all enemy attacks lighter while Doom counts down."
    },
    {
      "deckCard": "Deathbringer",
      "offeredCard": "Debilitate",
      "bonus": 1.8,
      "reason": "Debilitate doubles Weak and Vulnerable — Deathbringer applies 1 Weak AoE, which Debilitate makes 2x effective for 3 turns against all enemies."
    },
    {
      "deckCard": "Scourge",
      "offeredCard": "Death's Door",
      "bonus": 1.8,
      "reason": "Death's Door requires Doom application to gain 18 Block — Scourge applies 13 Doom plus draws a card, enabling Death's Door perfectly."
    },
    {
      "deckCard": "Death's Door",
      "offeredCard": "Negative Pulse",
      "bonus": 1.8,
      "reason": "Negative Pulse applies 7 AoE Doom and gives 5 Block — Death's Door needs any Doom application to gain 18 Block, instantly fulfilled."
    },
    {
      "deckCard": "Negative Pulse",
      "offeredCard": "Death's Door",
      "bonus": 1.8,
      "reason": "Death's Door needs Doom application for 18 Block — Negative Pulse applies 7 AoE Doom simultaneously, always triggering Death's Door."
    },
    {
      "deckCard": "Shroud",
      "offeredCard": "Scourge",
      "bonus": 1.5,
      "reason": "Shroud gives 2 Block per Doom application — Scourge applies 13 Doom in one card, giving 2 Block for each stack = 26 Block from one Scourge play."
    },
    {
      "deckCard": "Scourge",
      "offeredCard": "Shroud",
      "bonus": 1.5,
      "reason": "Scourge applies 13 Doom — Shroud converts each Doom application into 2 Block. With Shroud active, Scourge gives 26 Block while drawing a card."
    },
    {
      "deckCard": "Shroud",
      "offeredCard": "Deathbringer",
      "bonus": 1.8,
      "reason": "Deathbringer applies 21 Doom AoE — with Shroud active, this gives 2 Block per Doom application. One Deathbringer = 42 Block with Shroud."
    },
    {
      "deckCard": "Deathbringer",
      "offeredCard": "Shroud",
      "bonus": 1.8,
      "reason": "Shroud grants 2 Block per Doom applied — Deathbringer hits ALL enemies with 21 Doom each, making Shroud generate massive Block per Deathbringer play."
    },
    {
      "deckCard": "Sleight of Flesh",
      "offeredCard": "Putrefy",
      "bonus": 1.8,
      "reason": "Sleight of Flesh deals 9 damage per debuff applied — Putrefy applies 2 Weak and 2 Vulnerable (4 debuffs) = 36 bonus damage from one Putrefy."
    },
    {
      "deckCard": "Putrefy",
      "offeredCard": "Sleight of Flesh",
      "bonus": 1.8,
      "reason": "Sleight of Flesh punishes each debuff with 9 damage — Putrefy applies 4 debuffs at once for 36 bonus damage per Putrefy cast."
    },
    {
      "deckCard": "Sleight of Flesh",
      "offeredCard": "Deathbringer",
      "bonus": 1.5,
      "reason": "Deathbringer applies 1 Weak AoE — Sleight of Flesh deals 9 damage per debuff, so Deathbringer triggers 9 damage per enemy hit."
    },
    {
      "deckCard": "Sleight of Flesh",
      "offeredCard": "Misery",
      "bonus": 1.8,
      "reason": "Misery spreads all enemy debuffs to other enemies — each spread debuff triggers Sleight of Flesh's 9 damage, dealing massive multi-target damage."
    },
    {
      "deckCard": "Misery",
      "offeredCard": "Sleight of Flesh",
      "bonus": 1.8,
      "reason": "Sleight of Flesh deals 9 damage per debuff — Misery spreads all current debuffs to every enemy, triggering Sleight for each application."
    },
    {
      "deckCard": "Misery",
      "offeredCard": "Debilitate",
      "bonus": 1.8,
      "reason": "Debilitate doubles Weak and Vulnerable effectiveness — Misery spreads these doubled debuffs to all enemies, making every enemy take double debuff effects."
    },
    {
      "deckCard": "Debilitate",
      "offeredCard": "Misery",
      "bonus": 1.8,
      "reason": "Misery spreads all debuffs to other enemies — after Debilitate doubles Weak/Vulnerable, Misery applies those doubled debuffs to every enemy."
    },
    {
      "deckCard": "Neurosurge",
      "offeredCard": "Borrowed Time",
      "bonus": 2.0,
      "reason": "Neurosurge gives 3 Energy and 2 draw — Borrowed Time gains Energy for 3 self-Doom, and Neurosurge's Energy fuels playing both in one explosive turn."
    },
    {
      "deckCard": "Borrowed Time",
      "offeredCard": "Neurosurge",
      "bonus": 2.0,
      "reason": "Borrowed Time trades self-Doom for Energy — Neurosurge's 3 Energy and draw enable playing multiple high-cost cards including Borrowed Time itself."
    },
    {
      "deckCard": "Friendship",
      "offeredCard": "Neurosurge",
      "bonus": 1.8,
      "reason": "Friendship gives +1 Energy per turn passively — Neurosurge gives another 3 Energy burst plus draw, creating enormous explosive turns."
    },
    {
      "deckCard": "Neurosurge",
      "offeredCard": "Friendship",
      "bonus": 1.8,
      "reason": "Friendship provides sustained Energy each turn — Neurosurge provides a burst of 3 Energy plus draw, together enabling consistently large turns."
    },
    {
      "deckCard": "Rattle",
      "offeredCard": "Fetch",
      "bonus": 2.5,
      "reason": "Fetch enables the first Osty attack cheaply and draws a card — Rattle then hits again for each previous Osty attack this turn, compounding with Fetch's hit."
    },
    {
      "deckCard": "Fetch",
      "offeredCard": "Rattle",
      "bonus": 2.5,
      "reason": "Rattle multiplies hits per Osty attack this turn — Fetch provides a cheap first Osty hit that draw a card, setting up Rattle's chain damage."
    },
    {
      "deckCard": "Sic 'Em",
      "offeredCard": "Rattle",
      "bonus": 2.0,
      "reason": "Rattle hits again for each Osty attack this turn — Sic 'Em generates Summon 2 per Osty hit, and each Rattle hit triggers more Summon stacking."
    },
    {
      "deckCard": "Rattle",
      "offeredCard": "Sic 'Em",
      "bonus": 2.0,
      "reason": "Sic 'Em summons 2 per Osty hit this turn — Rattle's multi-hit triggers Sic 'Em repeatedly, generating enormous Summon totals per turn."
    },
    {
      "deckCard": "Necro Mastery",
      "offeredCard": "Sacrifice",
      "bonus": 2.5,
      "reason": "Sacrifice kills Osty and gains double his Max HP as Block — Necro Mastery first makes all enemies lose HP equal to damage Osty takes, so Sacrifice triggers massive AoE damage before giving Block."
    },
    {
      "deckCard": "Sacrifice",
      "offeredCard": "Necro Mastery",
      "bonus": 2.5,
      "reason": "Necro Mastery converts Osty HP loss into enemy HP loss — Sacrifice kills Osty for massive Block, but first Necro Mastery turns that death into AoE damage equal to Osty's full HP."
    },
    {
      "deckCard": "Necro Mastery",
      "offeredCard": "Bone Shards",
      "bonus": 2.0,
      "reason": "Bone Shards deals 9 AoE and gives 9 Block then kills Osty — Necro Mastery makes ALL enemies lose HP equal to Osty's HP when he dies, adding enormous AoE on top."
    },
    {
      "deckCard": "Bone Shards",
      "offeredCard": "Necro Mastery",
      "bonus": 2.0,
      "reason": "Necro Mastery converts Osty death into enemy HP loss — Bone Shards kills Osty after dealing 9 AoE, and Necro Mastery adds Osty's full HP as bonus AoE."
    },
    {
      "deckCard": "High Five",
      "offeredCard": "Rattle",
      "bonus": 1.8,
      "reason": "High Five applies 2 Vulnerable to all enemies via Osty — Rattle then hits the Vulnerable enemy multiple times, each hit dealing 50% more damage."
    },
    {
      "deckCard": "Rattle",
      "offeredCard": "High Five",
      "bonus": 1.8,
      "reason": "Rattle multi-hits deal exponential damage against Vulnerable targets — High Five first applies 2 Vulnerable AoE via Osty to maximize Rattle's damage."
    },
    {
      "deckCard": "Protector",
      "offeredCard": "Reanimate",
      "bonus": 2.0,
      "reason": "Reanimate gives Osty +20 Max HP — Protector deals 10 damage plus Osty's Max HP, making Protector hit for 30+ damage with Reanimate's boost."
    },
    {
      "deckCard": "Reanimate",
      "offeredCard": "Protector",
      "bonus": 2.0,
      "reason": "Protector deals damage equal to Osty's Max HP — Reanimate adds 20 Max HP to Osty, directly increasing Protector's damage by 20."
    },
    {
      "deckCard": "Protector",
      "offeredCard": "Spur",
      "bonus": 1.5,
      "reason": "Spur Summons 3 and heals Osty — every Summon adds to Osty's Max HP, increasing Protector's bonus damage with each Spur play."
    },
    {
      "deckCard": "Spur",
      "offeredCard": "Protector",
      "bonus": 1.5,
      "reason": "Protector scales with Osty's Max HP — Spur grows Osty's Max HP via Summon, each Spur play making the next Protector hit harder."
    },
    {
      "deckCard": "Calcify",
      "offeredCard": "Rattle",
      "bonus": 1.5,
      "reason": "Calcify adds flat +4 damage to all Osty attacks — Rattle hits multiple times scaling with prior Osty attacks, making Calcify's bonus multiply across all hits."
    },
    {
      "deckCard": "Rattle",
      "offeredCard": "Calcify",
      "bonus": 1.5,
      "reason": "Rattle's multi-hit multiplies Calcify's +4 bonus — with Fetch and Poke setting up, Rattle can hit 4-6 times, making Calcify add 16-24 damage."
    },
    {
      "deckCard": "Flatten",
      "offeredCard": "Fetch",
      "bonus": 1.8,
      "reason": "Fetch enables a free first Osty attack this turn — Flatten costs 0 if Osty attacked this turn, making both cards chain for free Osty damage."
    },
    {
      "deckCard": "Fetch",
      "offeredCard": "Flatten",
      "bonus": 1.8,
      "reason": "Flatten costs 0 if Osty attacked this turn — Fetch is that free Osty attack, enabling Flatten for 0 Energy total and chaining attacks."
    },
    {
      "deckCard": "Flatten",
      "offeredCard": "Poke",
      "bonus": 1.5,
      "reason": "Poke is a cheap Osty attack — Flatten becomes 0-cost if Osty attacked this turn, making Poke into Flatten a 1-Energy chain of Osty damage."
    },
    {
      "deckCard": "Poke",
      "offeredCard": "Flatten",
      "bonus": 1.5,
      "reason": "Flatten costs 0 when Osty attacks — Poke cheaply enables this, making Poke into Flatten an efficient 2-card Osty combo."
    },
    {
      "deckCard": "Cleanse",
      "offeredCard": "Devour Life",
      "bonus": 1.8,
      "reason": "Cleanse Summons 3 and thins deck — Devour Life Summons 1 per Soul played, and Cleanse can transform drawn cards into Souls via Seance before Cleaning."
    },
    {
      "deckCard": "Devour Life",
      "offeredCard": "Cleanse",
      "bonus": 1.8,
      "reason": "Devour Life bridges Soul and Osty archetypes — Cleanse grows Osty via Summon while also thinning the deck, feeding both mechanics."
    },
    {
      "deckCard": "Forbidden Grimoire",
      "offeredCard": "Cleanse",
      "bonus": 1.5,
      "reason": "Forbidden Grimoire removes a card after each fight passively — Cleanse also thins deck by exhausting a Draw Pile card, stacking deck quality improvements."
    },
    {
      "deckCard": "Lethality",
      "offeredCard": "Debilitate",
      "bonus": 1.8,
      "reason": "Lethality makes first Attack deal 50% more damage — Debilitate doubles Vulnerable effectiveness, making the Lethality-buffed attack land for massive damage."
    },
    {
      "deckCard": "Debilitate",
      "offeredCard": "Lethality",
      "bonus": 1.8,
      "reason": "Lethality amplifies first Attack by 50% — Debilitate pre-doubles Vulnerable so the Lethality attack lands against a doubly vulnerable target."
    },
    {
      "deckCard": "Lethality",
      "offeredCard": "Rattle",
      "bonus": 1.8,
      "reason": "Lethality makes first Attack 50% stronger — if Rattle is that first attack with multiple prior Osty attacks set up, the base hit plus all chain hits are amplified."
    },
    {
      "deckCard": "Rattle",
      "offeredCard": "Lethality",
      "bonus": 1.8,
      "reason": "Rattle is the strongest single Attack in Osty builds — Lethality makes the first attack each turn deal 50% more, and Rattle's multi-hit makes that 50% enormous."
    },
    {
      "deckCard": "Friendship",
      "offeredCard": "Borrowed Time",
      "bonus": 1.8,
      "reason": "Friendship gives +1 Energy each turn passively — Borrowed Time converts self-Doom into Energy, together giving massive Energy every turn for big plays."
    },
    {
      "deckCard": "Borrowed Time",
      "offeredCard": "Friendship",
      "bonus": 1.8,
      "reason": "Friendship gives passive Energy each turn — Borrowed Time adds more Energy via self-Doom, enabling consistently large multi-card turns."
    },
    {
      "deckCard": "Neurosurge",
      "offeredCard": "Death March",
      "bonus": 1.8,
      "reason": "Neurosurge draws 2 cards — Death March deals 3 bonus damage per card drawn this turn, making Neurosurge's draw directly add 6+ damage to Death March."
    },
    {
      "deckCard": "Death March",
      "offeredCard": "Neurosurge",
      "bonus": 1.8,
      "reason": "Death March scales with cards drawn this turn — Neurosurge draws 2 cards directly, adding 6 damage to Death March and enabling more card plays with its 3 Energy."
    },
    {
      "deckCard": "Graveblast",
      "offeredCard": "Undeath",
      "bonus": 1.5,
      "reason": "Undeath copies itself to Discard — Graveblast retrieves a Discard card on demand, making it easy to pull Undeath back for another Block generation cycle."
    },
    {
      "deckCard": "Undeath",
      "offeredCard": "Graveblast",
      "bonus": 1.5,
      "reason": "Graveblast retrieves Discard cards — Undeath generates copies in Discard, giving Graveblast a reliable target to pull back for continuous Block."
    },
    {
      "deckCard": "Echo Form",
      "offeredCard": "Defragment",
      "bonus": 2.5,
      "reason": "Echo Form doubles the first card played — Defragment doubled = 2 Focus per play instead of 1. Fastest way to reach high Focus."
    },
    {
      "deckCard": "Defragment",
      "offeredCard": "Echo Form",
      "bonus": 2.5,
      "reason": "Defragment gives 1 Focus — Echo Form doubles it to 2 Focus per Defragment play, accelerating Orb scaling massively."
    },
    {
      "deckCard": "Echo Form",
      "offeredCard": "Signal Boost",
      "bonus": 2.0,
      "reason": "Signal Boost makes next Power play twice — Echo Form doubles Signal Boost itself, making the next Power play 3 times total."
    },
    {
      "deckCard": "Signal Boost",
      "offeredCard": "Echo Form",
      "bonus": 2.0,
      "reason": "Echo Form doubles the first card each turn — Signal Boost doubled means the next Power plays 3 times total."
    },
    {
      "deckCard": "Echo Form",
      "offeredCard": "Machine Learning",
      "bonus": 2.0,
      "reason": "Echo Form doubles Machine Learning — instead of +1 draw per turn, you get +2 draw per turn permanently."
    },
    {
      "deckCard": "Machine Learning",
      "offeredCard": "Echo Form",
      "bonus": 2.0,
      "reason": "Machine Learning gives +1 draw per turn — Echo Form doubles it to +2 draw, making every turn draw 7 cards."
    },
    {
      "deckCard": "Echo Form",
      "offeredCard": "Coolant",
      "bonus": 1.8,
      "reason": "Echo Form doubles Coolant — instead of 2 Block per unique Orb, you get 4 Block per unique Orb every turn."
    },
    {
      "deckCard": "Coolant",
      "offeredCard": "Echo Form",
      "bonus": 1.8,
      "reason": "Coolant gives Block per unique Orb each turn — Echo Form doubles this passive Block generation."
    },
    {
      "deckCard": "Signal Boost",
      "offeredCard": "Defragment",
      "bonus": 2.5,
      "reason": "Signal Boost makes next Power play twice — Defragment doubled gives 2 Focus in one play, the fastest Focus acceleration available."
    },
    {
      "deckCard": "Defragment",
      "offeredCard": "Signal Boost",
      "bonus": 2.5,
      "reason": "Defragment is the best Signal Boost target — doubled Defragment gives 2 Focus per card instead of 1."
    },
    {
      "deckCard": "Signal Boost",
      "offeredCard": "Coolant",
      "bonus": 2.0,
      "reason": "Coolant doubled via Signal Boost gives 4 Block per unique Orb per turn — with 4 orbs, 16 free Block every turn."
    },
    {
      "deckCard": "Coolant",
      "offeredCard": "Signal Boost",
      "bonus": 2.0,
      "reason": "Signal Boost doubles the next Power — Coolant doubled means twice the Block per unique Orb passively every turn."
    },
    {
      "deckCard": "Signal Boost",
      "offeredCard": "Machine Learning",
      "bonus": 1.8,
      "reason": "Signal Boost into Machine Learning plays it twice — gaining +2 extra card draws per turn instead of +1."
    },
    {
      "deckCard": "Machine Learning",
      "offeredCard": "Signal Boost",
      "bonus": 1.8,
      "reason": "Machine Learning doubled via Signal Boost gives +2 draw per turn permanently."
    },
    {
      "deckCard": "Spinner",
      "offeredCard": "Shatter",
      "bonus": 2.0,
      "reason": "Spinner generates Glass orbs every turn — Shatter Evokes all Orbs for massive AoE, with Glass Orbs each dealing 8 AoE on Evoke."
    },
    {
      "deckCard": "Shatter",
      "offeredCard": "Spinner",
      "bonus": 2.0,
      "reason": "Shatter Evokes all Orbs — Spinner ensures there's always at least 1 Glass Orb active for Shatter to Evoke for 8 AoE."
    },
    {
      "deckCard": "Spinner",
      "offeredCard": "Coolant",
      "bonus": 1.8,
      "reason": "Spinner adds Glass as a unique Orb every turn — Coolant gives 2 Block per unique Orb, making Spinner directly add 2 Block per turn to Coolant's output."
    },
    {
      "deckCard": "Coolant",
      "offeredCard": "Spinner",
      "bonus": 1.8,
      "reason": "Coolant scales with unique Orb types — Spinner provides a constant Glass Orb, adding 2 Block per turn to Coolant's passive generation."
    },
    {
      "deckCard": "Spinner",
      "offeredCard": "Compile Driver",
      "bonus": 1.5,
      "reason": "Spinner adds Glass as a unique Orb — Compile Driver draws 1 card per unique Orb, gaining +1 draw from Spinner's Glass."
    },
    {
      "deckCard": "Compile Driver",
      "offeredCard": "Spinner",
      "bonus": 1.5,
      "reason": "Compile Driver draws per unique Orb — Spinner's passive Glass Orb ensures Compile Driver always draws at least 1 extra card."
    },
    {
      "deckCard": "Defragment",
      "offeredCard": "Spinner",
      "bonus": 1.8,
      "reason": "Defragment increases Focus — each Focus makes Glass Orb's passive AoE stronger. Spinner generates Glass free each turn to benefit."
    },
    {
      "deckCard": "Defragment",
      "offeredCard": "Hailstorm",
      "bonus": 1.8,
      "reason": "Defragment boosts Focus — Hailstorm deals 6 AoE when Frost is active, but Focus increases Frost's passive Block which keeps Hailstorm always triggerable."
    },
    {
      "deckCard": "Defragment",
      "offeredCard": "Consuming Shadow",
      "bonus": 1.8,
      "reason": "Defragment increases Focus — Dark Orbs grow 6 damage per turn. With higher Focus, Dark Orbs from Consuming Shadow evoke for even more damage."
    },
    {
      "deckCard": "Consuming Shadow",
      "offeredCard": "Defragment",
      "bonus": 1.8,
      "reason": "Consuming Shadow generates 2 Dark Orbs and auto-evokes — Defragment's Focus makes each Dark Orb accumulate more damage before Evoking."
    },
    {
      "deckCard": "Consuming Shadow",
      "offeredCard": "Loop",
      "bonus": 2.0,
      "reason": "Consuming Shadow auto-evokes leftmost Orb each turn — Loop triggers the rightmost Orb's passive. Together they give double passive Orb activation every turn."
    },
    {
      "deckCard": "Loop",
      "offeredCard": "Consuming Shadow",
      "bonus": 2.0,
      "reason": "Loop triggers rightmost Orb passive each turn — Consuming Shadow triggers leftmost. With both, every Orb slot passively activates twice per turn."
    },
    {
      "deckCard": "Consuming Shadow",
      "offeredCard": "Darkness",
      "bonus": 1.8,
      "reason": "Consuming Shadow channels 2 Dark and auto-evokes — Darkness channels another Dark and triggers all Dark passives. Together they maximize Dark Orb damage quickly."
    },
    {
      "deckCard": "Darkness",
      "offeredCard": "Consuming Shadow",
      "bonus": 1.8,
      "reason": "Darkness triggers all Dark Orb passives — Consuming Shadow auto-evokes them, creating a constant cycle of Dark Orb growth and Evoke."
    },
    {
      "deckCard": "Coolant",
      "offeredCard": "Rainbow",
      "bonus": 2.0,
      "reason": "Rainbow channels Lightning, Frost, and Dark simultaneously — Coolant gives 2 Block per unique Orb, making Rainbow instantly add 6 Block per turn."
    },
    {
      "deckCard": "Rainbow",
      "offeredCard": "Coolant",
      "bonus": 2.0,
      "reason": "Coolant gives 2 Block per unique Orb — Rainbow provides all 3 major Orb types at once, giving 6+ Block per turn immediately."
    },
    {
      "deckCard": "Coolant",
      "offeredCard": "Glacier",
      "bonus": 1.8,
      "reason": "Glacier channels 2 Frost and gives Block — Coolant rewards unique Orbs. Glacier adds Frost to Coolant's count and provides immediate Block on top."
    },
    {
      "deckCard": "Glacier",
      "offeredCard": "Coolant",
      "bonus": 1.8,
      "reason": "Coolant scales with unique Orbs — Glacier is the most efficient Frost provider, ensuring Frost is always in Coolant's count."
    },
    {
      "deckCard": "Genetic Algorithm",
      "offeredCard": "Scavenge",
      "bonus": 1.8,
      "reason": "Genetic Algorithm Exhausts after each play, gaining +3 Block permanently — Scavenge also Exhausts cards for Energy. Together they thin the deck while scaling Block."
    },
    {
      "deckCard": "Scavenge",
      "offeredCard": "Genetic Algorithm",
      "bonus": 1.8,
      "reason": "Genetic Algorithm grows Block each play then Exhausts — Scavenge provides Energy and Exhausts cards, enabling more Genetic Algorithm plays per run."
    },
    {
      "deckCard": "Genetic Algorithm",
      "offeredCard": "Echo Form",
      "bonus": 2.0,
      "reason": "Echo Form doubles the first card played — Genetic Algorithm doubled gains +6 Block permanently per play instead of +3. Scales twice as fast."
    },
    {
      "deckCard": "Double Energy",
      "offeredCard": "Multi-Cast",
      "bonus": 2.5,
      "reason": "Double Energy doubles current Energy — Multi-Cast uses all that Energy to Evoke Orbs X times. 6 Energy = 6 Evokes of Dark/Glass for enormous burst damage."
    },
    {
      "deckCard": "Multi-Cast",
      "offeredCard": "Double Energy",
      "bonus": 2.5,
      "reason": "Multi-Cast scales with available Energy — Double Energy doubles it, enabling 6+ Orb Evokes in one card play."
    },
    {
      "deckCard": "Double Energy",
      "offeredCard": "Tempest",
      "bonus": 1.8,
      "reason": "Double Energy then Tempest — with 6 Energy, Tempest channels 6 Lightning at once for massive end-of-turn damage."
    },
    {
      "deckCard": "Tempest",
      "offeredCard": "Double Energy",
      "bonus": 1.8,
      "reason": "Tempest channels Lightning equal to Energy spent — Double Energy doubles available Energy, making Tempest channel twice as many Lightning Orbs."
    },
    {
      "deckCard": "Double Energy",
      "offeredCard": "Voltaic",
      "bonus": 2.0,
      "reason": "Double Energy maximizes Energy for the turn — Voltaic channels Lightning equal to total Lightning Channeled this combat, flooding Orb slots for turn-end damage."
    },
    {
      "deckCard": "Voltaic",
      "offeredCard": "Double Energy",
      "bonus": 2.0,
      "reason": "Voltaic channels massive Lightning in late game — Double Energy ensures you have maximum Energy to play both Voltaic and other cards on the same turn."
    },
    {
      "deckCard": "Shatter",
      "offeredCard": "Glacier",
      "bonus": 1.8,
      "reason": "Glacier fills Orb slots with Frost — Shatter Evokes all Orbs. 2 Frost Evoked = 10 Block each, providing both offense and defense."
    },
    {
      "deckCard": "Glacier",
      "offeredCard": "Shatter",
      "bonus": 1.8,
      "reason": "Shatter Evokes all Orbs — Glacier provides Frost Orbs that Evoke for 5 Block each, giving both AoE damage and Block simultaneously."
    },
    {
      "deckCard": "Shatter",
      "offeredCard": "Consuming Shadow",
      "bonus": 2.0,
      "reason": "Consuming Shadow builds large Dark Orbs over turns — Shatter Evokes all Orbs including the accumulated Dark for massive single-target damage."
    },
    {
      "deckCard": "Feral",
      "offeredCard": "Claw",
      "bonus": 2.0,
      "reason": "Claw is a 0-cost Attack — Feral returns the first one played each turn to hand, effectively giving Claw an extra free play every turn."
    },
    {
      "deckCard": "Scrape",
      "offeredCard": "Claw",
      "bonus": 1.8,
      "reason": "Claw is 0-cost so Scrape keeps it — Scrape filters the hand to only 0-cost cards, ensuring your next turn is full of Claws."
    },
    {
      "deckCard": "Claw",
      "offeredCard": "Hologram",
      "bonus": 1.8,
      "reason": "Hologram retrieves a card from Discard — in Claw builds, pulls Claw back from Discard for another scaling hit before All for One arrives."
    },
    {
      "deckCard": "Hologram",
      "offeredCard": "Claw",
      "bonus": 1.8,
      "reason": "Claw benefits from retrieval via Hologram — retrieving Claw from Discard enables extra scaling plays before All for One."
    },
    {
      "deckCard": "Claw",
      "offeredCard": "Machine Learning",
      "bonus": 1.5,
      "reason": "Machine Learning draws an extra card per turn — in Claw builds, more draw means finding Claw faster and drawing more 0-cost cards for FTL and Scrape."
    },
    {
      "deckCard": "Smokestack",
      "offeredCard": "TURBO",
      "bonus": 2.0,
      "reason": "TURBO gains 2 Energy and adds a Void — Smokestack deals 5 AoE each time a Status is created. TURBO creates Status every play, giving 5 free AoE per TURBO."
    },
    {
      "deckCard": "TURBO",
      "offeredCard": "Smokestack",
      "bonus": 2.0,
      "reason": "Smokestack deals 5 AoE per Status created — TURBO creates a Void every play, triggering Smokestack for 5 AoE while giving 2 Energy."
    },
    {
      "deckCard": "Smokestack",
      "offeredCard": "Gunk Up",
      "bonus": 1.8,
      "reason": "Gunk Up creates a Slimed into Discard — Smokestack deals 5 AoE per Status created, making Gunk Up a 12 damage multi-hit plus 5 AoE."
    },
    {
      "deckCard": "Gunk Up",
      "offeredCard": "Smokestack",
      "bonus": 1.8,
      "reason": "Smokestack punishes Status creation with 5 AoE — Gunk Up creates a Slimed every play, triggering Smokestack reliably."
    },
    {
      "deckCard": "Iteration",
      "offeredCard": "TURBO",
      "bonus": 1.8,
      "reason": "TURBO adds a Void into Discard — Iteration draws 2 extra cards the first time you draw a Status each turn. TURBO ensures you always have a Status to draw."
    },
    {
      "deckCard": "TURBO",
      "offeredCard": "Iteration",
      "bonus": 1.8,
      "reason": "Iteration draws 2 extra cards on first Status draw each turn — TURBO adds Void to Discard guaranteeing Iteration triggers."
    },
    {
      "deckCard": "Compact",
      "offeredCard": "TURBO",
      "bonus": 1.8,
      "reason": "TURBO creates a Void — Compact transforms all Status cards in Hand into Fuel. Playing TURBO then Compact converts the Void to Fuel immediately."
    },
    {
      "deckCard": "TURBO",
      "offeredCard": "Compact",
      "bonus": 1.8,
      "reason": "Compact converts Status cards to Fuel — TURBO creates a Void for Compact to convert, turning every TURBO play into Energy plus Fuel."
    },
    {
      "deckCard": "Flak Cannon",
      "offeredCard": "Fight Through",
      "bonus": 1.8,
      "reason": "Fight Through adds 2 Wounds into Discard — Flak Cannon exhausts all Status cards dealing 8 damage per exhausted card. 2 Wounds = 16 damage burst."
    },
    {
      "deckCard": "Fight Through",
      "offeredCard": "Flak Cannon",
      "bonus": 1.8,
      "reason": "Flak Cannon deals 8 damage per Status Exhausted — Fight Through generates 2 Wounds for Flak Cannon to consume for 16 burst damage."
    },
    {
      "deckCard": "Rocket Punch",
      "offeredCard": "TURBO",
      "bonus": 1.5,
      "reason": "TURBO creates a Status (Void) on play — Rocket Punch reduces to 0-cost when a Status is created this turn, making TURBO enable free Rocket Punch plays."
    },
    {
      "deckCard": "TURBO",
      "offeredCard": "Rocket Punch",
      "bonus": 1.5,
      "reason": "Rocket Punch costs 0 when a Status is created this turn — TURBO creates a Void every play, enabling free 13-damage Rocket Punch plays."
    },
    {
      "deckCard": "Trash to Treasure",
      "offeredCard": "TURBO",
      "bonus": 1.5,
      "reason": "TURBO creates a Void Status every play — Trash to Treasure channels 1 random Orb each time a Status is created, turning TURBO into free Orb generation."
    },
    {
      "deckCard": "Skim",
      "offeredCard": "All for One",
      "bonus": 1.8,
      "reason": "All for One retrieves 0-cost cards from Discard — Skim draws 3 to find All for One, which then retrieves all Claws, FTLs, and Beam Cells."
    },
    {
      "deckCard": "All for One",
      "offeredCard": "Skim",
      "bonus": 1.8,
      "reason": "Skim draws 3 cards — helps find All for One which then retrieves all 0-cost cards from Discard for a massive spam turn."
    },
    {
      "deckCard": "Rainbow",
      "offeredCard": "Compile Driver",
      "bonus": 2.0,
      "reason": "Rainbow channels Lightning, Frost, and Dark at once — Compile Driver draws 1 per unique Orb, so Rainbow immediately gives Compile Driver a 3-card draw."
    },
    {
      "deckCard": "Compile Driver",
      "offeredCard": "Rainbow",
      "bonus": 2.0,
      "reason": "Compile Driver draws per unique Orb — Rainbow provides all 3 major Orb types at once, making Compile Driver draw 3 cards in one play."
    },
    {
      "deckCard": "Quadcast",
      "offeredCard": "Defragment",
      "bonus": 1.8,
      "reason": "Defragment increases Focus — with high Focus, Quadcast Evokes Lightning 4 times for 4x(8+Focus) damage, or Dark 4 times for massive single-target burst."
    },
    {
      "deckCard": "Defragment",
      "offeredCard": "Quadcast",
      "bonus": 1.8,
      "reason": "Quadcast Evokes 4 times — each additional Focus from Defragment multiplies Quadcast's total damage across all 4 Evokes."
    },
    {
      "deckCard": "Quadcast",
      "offeredCard": "Consuming Shadow",
      "bonus": 2.0,
      "reason": "Consuming Shadow builds large Dark Orbs — Quadcast Evokes 4 times, dealing 4x the accumulated Dark damage in one play."
    },
    {
      "deckCard": "Consuming Shadow",
      "offeredCard": "Quadcast",
      "bonus": 2.0,
      "reason": "Quadcast delivers 4 Evokes — Consuming Shadow ensures Dark Orbs are always large and always being built for Quadcast to consume."
    },
    {
      "deckCard": "Scavenge",
      "offeredCard": "Double Energy",
      "bonus": 1.5,
      "reason": "Scavenge exhausts a card for 2 Energy next turn — Double Energy then doubles whatever Energy you have, compounding Scavenge's Energy gain."
    },
    {
      "deckCard": "Double Energy",
      "offeredCard": "Scavenge",
      "bonus": 1.5,
      "reason": "Scavenge generates 2 Energy next turn — Double Energy doubles total Energy, making Scavenge's extra 2 Energy worth 4 when doubled."
    },
    {
      "deckCard": "Sunder",
      "offeredCard": "Shatter",
      "bonus": 1.5,
      "reason": "Sunder deals 24 damage to one target — if Sunder kills the enemy, gain 3 Energy. Shatter then uses that Energy to Evoke all Orbs on the next enemy."
    },
    {
      "deckCard": "Shatter",
      "offeredCard": "Sunder",
      "bonus": 1.5,
      "reason": "Shatter Evokes all Orbs for massive AoE — Sunder softens or kills one enemy first, and its 3 Energy on kill helps pay for Shatter."
    },
    {
      "deckCard": "Tesla Coil",
      "offeredCard": "Defragment",
      "bonus": 1.8,
      "reason": "Tesla Coil triggers all Lightning against one target — Defragment's Focus increases each Lightning's damage by Focus amount. More Focus = more concentrated Tesla Coil damage."
    },
    {
      "deckCard": "Defragment",
      "offeredCard": "Tesla Coil",
      "bonus": 1.8,
      "reason": "Tesla Coil focuses all Lightning on one enemy — Defragment's Focus multiplies this concentrated damage, making each Lightning Evoke deal 8+Focus damage."
    },
    {
      "deckCard": "Hailstorm",
      "offeredCard": "Glacier",
      "bonus": 1.8,
      "reason": "Glacier channels 2 Frost — Hailstorm deals 6 AoE at end of turn when Frost is active. Glacier guarantees Frost is always up for Hailstorm."
    },
    {
      "deckCard": "Glacier",
      "offeredCard": "Hailstorm",
      "bonus": 1.8,
      "reason": "Hailstorm needs Frost to deal 6 AoE each turn — Glacier is the most efficient Frost provider, ensuring Hailstorm always triggers."
    },
    {
      "deckCard": "Hailstorm",
      "offeredCard": "Chill",
      "bonus": 2.0,
      "reason": "Chill channels Frost for each enemy (multi-enemy = multiple Frost) — Hailstorm deals 6 AoE whenever Frost is active. Chill guarantees Frost immediately."
    },
    {
      "deckCard": "Chill",
      "offeredCard": "Hailstorm",
      "bonus": 2.0,
      "reason": "Hailstorm deals 6 AoE each turn when Frost active — Chill channels Frost for every enemy at once, instantly activating Hailstorm in any fight."
    },
    {
      "deckCard": "Panache",
      "offeredCard": "Claw",
      "bonus": 2.0,
      "reason": "Claw builds play 10-15 cards per turn — Panache deals 10 AoE for every 5, meaning 20-30 free AoE damage on top of Claw scaling."
    },
    {
      "deckCard": "Claw",
      "offeredCard": "Panache",
      "bonus": 2.0,
      "reason": "Panache triggers every 5 cards played — Claw builds naturally play 10+ cards per turn, making Panache deal 20+ free AoE per turn."
    },
    {
      "deckCard": "Panache",
      "offeredCard": "Acrobatics",
      "bonus": 1.8,
      "reason": "Acrobatics draws 3 and discards 1 in Sly builds — with Sly triggers and discard chaining, easily playing 10+ cards per turn for multiple Panache procs."
    },
    {
      "deckCard": "Acrobatics",
      "offeredCard": "Panache",
      "bonus": 1.8,
      "reason": "Panache procs every 5 cards — Sly/Acrobatics builds chain through 10+ cards per turn, reliably triggering Panache 2x for 20 AoE damage."
    },
    {
      "deckCard": "Panache",
      "offeredCard": "Tools Of The Trade",
      "bonus": 1.8,
      "reason": "Tools of the Trade draws and discards every turn — in Sly builds this fuels Panache triggers by enabling high card-play counts effortlessly."
    },
    {
      "deckCard": "Tools Of The Trade",
      "offeredCard": "Panache",
      "bonus": 1.8,
      "reason": "Panache deals 10 AoE per 5 cards played — Tools of the Trade generates constant card flow in Sly builds to proc Panache multiple times per turn."
    },
    {
      "deckCard": "Apotheosis",
      "offeredCard": "Corruption",
      "bonus": 2.0,
      "reason": "Apotheosis upgrades all cards including Corruption — Corruption+ makes ALL Skills cost 0 instead of just reducing cost, turning Exhaust builds completely free."
    },
    {
      "deckCard": "Corruption",
      "offeredCard": "Apotheosis",
      "bonus": 2.0,
      "reason": "Corruption is dramatically stronger upgraded — Apotheosis delivers that upgrade mid-combat, making all Skills free for the rest of the fight."
    },
    {
      "deckCard": "Apotheosis",
      "offeredCard": "Accuracy",
      "bonus": 1.8,
      "reason": "Accuracy+ gives +6 Shiv damage per copy instead of +4 — Apotheosis doubles Accuracy's Shiv boost mid-combat for massive Shiv damage spikes."
    },
    {
      "deckCard": "Accuracy",
      "offeredCard": "Apotheosis",
      "bonus": 1.8,
      "reason": "Apotheosis upgrades Accuracy to deal +6 per Shiv instead of +4 — with 3 Accuracies, this is +18 per Shiv instead of +12."
    },
    {
      "deckCard": "Apotheosis",
      "offeredCard": "Defragment",
      "bonus": 1.8,
      "reason": "Apotheosis upgrades Defragment to give 2 Focus instead of 1 — immediately doubling Focus generation for the rest of combat."
    },
    {
      "deckCard": "Defragment",
      "offeredCard": "Apotheosis",
      "bonus": 1.8,
      "reason": "Defragment upgraded via Apotheosis gives 2 Focus instead of 1 — halves the setup time for high-Focus Orb builds."
    },
    {
      "deckCard": "Shockwave",
      "offeredCard": "Body Slam",
      "bonus": 2.0,
      "reason": "Shockwave applies Vulnerable to all enemies — Body Slam deals damage equal to Block, and Vulnerable doubles that damage on affected enemies."
    },
    {
      "deckCard": "Body Slam",
      "offeredCard": "Shockwave",
      "bonus": 2.0,
      "reason": "Shockwave applies 3 Vulnerable to all enemies — Body Slam hits Vulnerable targets for double damage, turning even moderate Block into massive damage."
    },
    {
      "deckCard": "Shockwave",
      "offeredCard": "Comet",
      "bonus": 2.0,
      "reason": "Shockwave applies 3 Vulnerable to all enemies — Comet deals 33 damage on an already-Vulnerable target effectively deals 66, plus its own 3 Vulnerable stacks further."
    },
    {
      "deckCard": "Comet",
      "offeredCard": "Shockwave",
      "bonus": 2.0,
      "reason": "Comet already applies 3 Vulnerable — Shockwave pre-stacks another 3 Vulnerable for 6 total, making Comet land for effectively triple its listed damage."
    },
    {
      "deckCard": "Shockwave",
      "offeredCard": "Noxious Fumes",
      "bonus": 1.5,
      "reason": "Shockwave applies 3 Weak to ALL enemies — Weak causes enemies to deal 25% less damage, giving Poison builds more time to stack and trigger."
    },
    {
      "deckCard": "Noxious Fumes",
      "offeredCard": "Shockwave",
      "bonus": 1.5,
      "reason": "Noxious Fumes applies Poison each turn — Shockwave adds Weak to reduce damage taken while Poison stacks build up."
    },
    {
      "deckCard": "Shockwave",
      "offeredCard": "Rend",
      "bonus": 1.8,
      "reason": "Shockwave applies 3 Weak and 3 Vulnerable (2 unique debuffs) — Rend deals 15 + 5 per unique debuff, so after Shockwave it deals 25 damage baseline."
    },
    {
      "deckCard": "Rend",
      "offeredCard": "Shockwave",
      "bonus": 1.8,
      "reason": "Rend scales with unique debuffs — Shockwave applies both Weak and Vulnerable simultaneously, giving Rend +10 base damage instantly."
    },
    {
      "deckCard": "Shockwave",
      "offeredCard": "Debilitate",
      "bonus": 2.0,
      "reason": "Shockwave applies 3 Vulnerable AoE — Debilitate then doubles Vulnerable effectiveness for 3 turns, making enemies take 4x Vulnerable damage total."
    },
    {
      "deckCard": "Debilitate",
      "offeredCard": "Shockwave",
      "bonus": 2.0,
      "reason": "Debilitate doubles Weak and Vulnerable effectiveness — Shockwave first applies both to all enemies, making Debilitate immediately potent."
    },
    {
      "deckCard": "Dark Shackles",
      "offeredCard": "Barricade",
      "bonus": 1.5,
      "reason": "Dark Shackles removes 9 Strength from a high-Strength boss — Barricade retains Block between turns, allowing you to survive the turns needed for Block to accumulate."
    },
    {
      "deckCard": "Dark Shackles",
      "offeredCard": "Deathbringer",
      "bonus": 1.5,
      "reason": "Dark Shackles removes 9 Strength for one turn — Deathbringer applies Doom AoE and Weak. Together they prevent heavy damage while Doom counts down."
    },
    {
      "deckCard": "Secret Weapon",
      "offeredCard": "All for One",
      "bonus": 2.0,
      "reason": "Secret Weapon tutors any Attack from Draw Pile — in Claw builds, this guarantees finding All for One for the decisive Claw-retrieval turn."
    },
    {
      "deckCard": "All for One",
      "offeredCard": "Secret Weapon",
      "bonus": 2.0,
      "reason": "All for One is the Claw build's win condition — Secret Weapon ensures you can always find and play it exactly when needed."
    },
    {
      "deckCard": "Secret Weapon",
      "offeredCard": "Whirlwind",
      "bonus": 1.8,
      "reason": "Secret Weapon tutors Whirlwind — finding the best multi-hit attack in Ironclad builds on demand for Strength-scaling turns."
    },
    {
      "deckCard": "Secret Technique",
      "offeredCard": "Barricade",
      "bonus": 2.0,
      "reason": "Secret Technique tutors any Skill — finding Barricade on demand guarantees the Block-retention engine is always accessible."
    },
    {
      "deckCard": "Barricade",
      "offeredCard": "Secret Technique",
      "bonus": 2.0,
      "reason": "Barricade is Ironclad Block build's engine — Secret Technique guarantees you can find it turn 1 of any fight."
    },
    {
      "deckCard": "Secret Technique",
      "offeredCard": "Void Form",
      "bonus": 2.0,
      "reason": "Secret Technique tutors any Skill — finding Void Form on demand guarantees the Regent's most powerful engine is always playable."
    },
    {
      "deckCard": "Void Form",
      "offeredCard": "Secret Technique",
      "bonus": 2.0,
      "reason": "Void Form is Regent's S-tier engine — Secret Technique ensures you always find it regardless of draw order."
    },
    {
      "deckCard": "Secret Technique",
      "offeredCard": "Corruption",
      "bonus": 1.8,
      "reason": "Secret Technique tutors Corruption — guaranteeing the Ironclad Exhaust engine is always accessible when needed."
    },
    {
      "deckCard": "Thinking Ahead",
      "offeredCard": "Shining Strike",
      "bonus": 1.5,
      "reason": "Thinking Ahead controls top of Draw Pile — Shining Strike puts itself on top of draw anyway, but Thinking Ahead can set up the card after it for perfect sequencing."
    },
    {
      "deckCard": "Thinking Ahead",
      "offeredCard": "Mayhem",
      "bonus": 1.8,
      "reason": "Thinking Ahead puts a chosen card on top of Draw Pile — Mayhem plays the top card at turn start, enabling you to control exactly what Mayhem plays."
    },
    {
      "deckCard": "Mayhem",
      "offeredCard": "Thinking Ahead",
      "bonus": 1.8,
      "reason": "Mayhem plays the top card of Draw Pile for free each turn — Thinking Ahead lets you choose exactly which card Mayhem plays, removing the randomness."
    },
    {
      "deckCard": "Stratagem",
      "offeredCard": "Mayhem",
      "bonus": 2.0,
      "reason": "Stratagem lets you choose a card from Draw Pile each shuffle — Mayhem plays the top card for free. Together: choose what Mayhem plays every cycle."
    },
    {
      "deckCard": "Mayhem",
      "offeredCard": "Stratagem",
      "bonus": 2.0,
      "reason": "Mayhem plays the top card free each turn — Stratagem controls what rises to the top each shuffle, making Mayhem always play your best card."
    },
    {
      "deckCard": "Rolling Boulder",
      "offeredCard": "Barricade",
      "bonus": 1.5,
      "reason": "Rolling Boulder deals escalating AoE each turn — Barricade retains Block between turns, ensuring you survive long enough for Rolling Boulder to reach massive damage."
    },
    {
      "deckCard": "Barricade",
      "offeredCard": "Rolling Boulder",
      "bonus": 1.5,
      "reason": "Rolling Boulder scales damage by 5 each turn — Barricade lets you build Block safely through multiple turns while Boulder ramps to 20-30+ AoE per turn."
    },
    {
      "deckCard": "Rolling Boulder",
      "offeredCard": "Deathbringer",
      "bonus": 1.5,
      "reason": "Rolling Boulder deals escalating AoE each turn — Deathbringer applies Doom AoE and Weak, reducing damage taken while Boulder ramps up."
    },
    {
      "deckCard": "Thrumming Hatchet",
      "offeredCard": "Strength",
      "bonus": 1.5,
      "reason": "Thrumming Hatchet returns each turn for 11 recurring damage — Strength scaling makes each Hatchet hit progressively larger without needing deck cycling."
    },
    {
      "deckCard": "Thrumming Hatchet",
      "offeredCard": "Inflame",
      "bonus": 1.5,
      "reason": "Thrumming Hatchet is recurring 11 damage per turn — Inflame adds permanent Strength, making every future Hatchet hit deal more damage."
    },
    {
      "deckCard": "Apparition",
      "offeredCard": "Corruption",
      "bonus": 1.8,
      "reason": "Apparition gives 1 Intangible (all damage becomes 1) — with Corruption making Skills free, you can afford to use the turn Apparition is active to play many free Skills."
    },
    {
      "deckCard": "Apparition",
      "offeredCard": "Barricade",
      "bonus": 1.5,
      "reason": "Apparition blocks all damage to 1 for a turn — Barricade retains the Block from that turn, turning Apparition into both immunity AND retained defense."
    },
    {
      "deckCard": "Scrawl",
      "offeredCard": "Flechettes",
      "bonus": 2.0,
      "reason": "Scrawl fills hand completely — Flechettes deals damage per Skill in Hand. A full hand of Skills after Scrawl makes Flechettes deal massive damage."
    },
    {
      "deckCard": "Flechettes",
      "offeredCard": "Scrawl",
      "bonus": 2.0,
      "reason": "Flechettes scales with Skills in Hand — Scrawl draws until Hand is full, maximizing Flechettes' damage in one play."
    },
    {
      "deckCard": "Scrawl",
      "offeredCard": "All for One",
      "bonus": 1.8,
      "reason": "Scrawl fills Hand with cards — many of those cards will be 0-cost in Claw builds, which All for One then retrieves from Discard for an even bigger follow-up turn."
    },
    {
      "deckCard": "Master of Strategy",
      "offeredCard": "Death March",
      "bonus": 1.8,
      "reason": "Master of Strategy draws 3 at 0 Energy — Death March deals 3 bonus damage per card drawn this turn, so Master of Strategy adds 9 damage to Death March directly."
    },
    {
      "deckCard": "Death March",
      "offeredCard": "Master of Strategy",
      "bonus": 1.8,
      "reason": "Death March scales with cards drawn this turn — Master of Strategy is free draw 3, adding 9 damage while also drawing into more cards."
    },
    {
      "deckCard": "Prep Time",
      "offeredCard": "Whirlwind",
      "bonus": 1.8,
      "reason": "Prep Time gives 4 Vigor (temp Strength) at turn start — Whirlwind hits X times, and with 4 temp Strength each hit deals 4 more damage. With 4 Energy, that's 16 extra damage total."
    },
    {
      "deckCard": "Prep Time",
      "offeredCard": "Celestial Might",
      "bonus": 1.8,
      "reason": "Prep Time gives 4 Vigor at turn start — Celestial Might hits 3 times, applying that temporary Strength to all 3 hits for +12 damage per Celestial Might."
    },
    {
      "deckCard": "Prep Time",
      "offeredCard": "Seven Stars",
      "bonus": 2.0,
      "reason": "Prep Time gives 4 Vigor at turn start — Seven Stars hits 7x7=49 times, applying Vigor to each hit for +196 bonus damage per Seven Stars cast."
    },
    {
      "deckCard": "Rend",
      "offeredCard": "Putrefy",
      "bonus": 1.8,
      "reason": "Putrefy applies 2 Weak and 2 Vulnerable (4 debuffs) — Rend deals 15 + 5 per unique debuff. After Putrefy, Rend deals 25 damage from debuffs alone."
    },
    {
      "deckCard": "Putrefy",
      "offeredCard": "Rend",
      "bonus": 1.8,
      "reason": "Rend scales with unique debuffs — Putrefy applies 2 Weak and 2 Vulnerable simultaneously, giving Rend immediate +10 damage."
    },
    {
      "deckCard": "Rend",
      "offeredCard": "Debilitate",
      "bonus": 1.5,
      "reason": "Debilitate applies Vulnerable and Weak — Rend deals +10 from those debuffs, and Debilitate then doubles both for even more damage from follow-up attacks."
    },
    {
      "deckCard": "Prolong",
      "offeredCard": "Barricade",
      "bonus": 2.5,
      "reason": "Barricade retains all Block between turns — Prolong doubles current Block next turn. With Barricade keeping Block and Prolong doubling it, Block compounds exponentially."
    },
    {
      "deckCard": "Barricade",
      "offeredCard": "Prolong",
      "bonus": 2.5,
      "reason": "Prolong doubles current Block next turn — Barricade retains Block between turns, making Prolong compound on ever-growing Block totals each cycle."
    },
    {
      "deckCard": "Production",
      "offeredCard": "Multi-Cast",
      "bonus": 1.5,
      "reason": "Production gives 2 free Energy this combat — Multi-Cast uses Energy to Evoke X times. Extra 2 Energy = 2 more Evokes on the crucial Multi-Cast turn."
    },
    {
      "deckCard": "Production",
      "offeredCard": "Double Energy",
      "bonus": 1.8,
      "reason": "Production gives 2 Energy then Exhausts — Double Energy then doubles that 2 extra Energy to 4. Together they can enable a 10+ Energy turn."
    },
    {
      "deckCard": "Nostalgia",
      "offeredCard": "Shining Strike",
      "bonus": 1.5,
      "reason": "Nostalgia puts the first card played back on top of Draw Pile — Shining Strike already does this itself, but Nostalgia ensures any other attack or skill is also returned."
    },
    {
      "deckCard": "Nostalgia",
      "offeredCard": "Echo Form",
      "bonus": 1.8,
      "reason": "Nostalgia returns first card played to top of Draw — Echo Form doubles the first card each turn. Nostalgia then cycles that doubled card back for next turn."
    },
    {
      "deckCard": "Equilibrium",
      "offeredCard": "Convergence",
      "bonus": 1.8,
      "reason": "Both retain your Hand this turn — Equilibrium retains AND gives 13 Block, while Convergence retains AND gives Stars/Energy next turn. Stacking retention enables perfect setup turns."
    },
    {
      "deckCard": "Convergence",
      "offeredCard": "Equilibrium",
      "bonus": 1.8,
      "reason": "Equilibrium retains Hand and gives 13 Block — Convergence also retains and gives Stars/Energy next turn. Combining them gives Block AND resources for a massive next turn."
    },
    {
      "deckCard": "Hidden Gem",
      "offeredCard": "Genetic Algorithm",
      "bonus": 2.5,
      "reason": "Hidden Gem gives Replay 2 — Genetic Algorithm with Replay 2 plays 3 times, gaining +9 Block permanently per draw instead of +3. Triples scaling speed."
    },
    {
      "deckCard": "Genetic Algorithm",
      "offeredCard": "Hidden Gem",
      "bonus": 2.5,
      "reason": "Genetic Algorithm permanently gains +3 Block each play — Hidden Gem's Replay 2 makes it play 3 times in one draw, gaining +9 Block permanently at once."
    },
    {
      "deckCard": "Hidden Gem",
      "offeredCard": "Defragment",
      "bonus": 2.0,
      "reason": "Hidden Gem gives Replay 2 — Defragment with Replay 2 gives 3 Focus in one play instead of 1. Fastest possible Focus acceleration for Orb builds."
    },
    {
      "deckCard": "Defragment",
      "offeredCard": "Hidden Gem",
      "bonus": 2.0,
      "reason": "Defragment gains 1 Focus — Hidden Gem's Replay 2 makes it play 3 times, giving 3 Focus instantly. Signal Boost can only double it; Hidden Gem triples it."
    },
    {
      "deckCard": "Hidden Gem",
      "offeredCard": "Claw",
      "bonus": 2.0,
      "reason": "Hidden Gem gives Replay 2 — Claw with Replay 2 plays 3 times, raising all Claw damage by 6 per draw instead of 2. Triples scaling per Claw drawn."
    },
    {
      "deckCard": "Claw",
      "offeredCard": "Hidden Gem",
      "bonus": 2.0,
      "reason": "Claw scales all Claw damage by 2 per play — Hidden Gem's Replay 2 makes each Claw drawn increase all Claw damage by 6 instead of 2."
    },
    {
      "deckCard": "Hidden Gem",
      "offeredCard": "Undeath",
      "bonus": 2.0,
      "reason": "Hidden Gem gives Replay 2 — Undeath with Replay 2 plays 3 times, adding 3 copies to Discard instead of 1. Block generation triples immediately."
    },
    {
      "deckCard": "Undeath",
      "offeredCard": "Hidden Gem",
      "bonus": 2.0,
      "reason": "Undeath copies itself into Discard each play — Hidden Gem's Replay 2 makes it play 3 times, flooding Discard with 3 copies at once for explosive Block scaling."
    },
    {
      "deckCard": "Hidden Gem",
      "offeredCard": "Echo Form",
      "bonus": 1.8,
      "reason": "Hidden Gem gives Replay 2 — Echo Form with Replay 2 means the first card you play each turn is played 4 times total (Echo Form doubles it, Replay makes Echo Form trigger twice more)."
    },
    {
      "deckCard": "Echo Form",
      "offeredCard": "Hidden Gem",
      "bonus": 1.8,
      "reason": "Echo Form already doubles the first card — Hidden Gem's Replay 2 on Echo Form means you get additional doublings per turn for the rest of combat."
    },
    {
      "deckCard": "Hidden Gem",
      "offeredCard": "Maul",
      "bonus": 1.5,
      "reason": "Hidden Gem gives Replay 2 — Maul with Replay 2 plays 3 times, increasing all Maul damage by 3 per draw instead of 1. With multiple Mauls, damage compounds rapidly."
    },
    {
      "deckCard": "Maul",
      "offeredCard": "Hidden Gem",
      "bonus": 1.5,
      "reason": "Maul scales all Maul cards by 1 damage per play — Hidden Gem's Replay 2 makes each Maul add +3 to all Mauls per draw."
    },
    {
      "deckCard": "Hidden Gem",
      "offeredCard": "Rupture",
      "bonus": 1.8,
      "reason": "Hidden Gem gives Replay 2 — Rupture with Replay 2 triggers 3 times per play. In Bloodletting builds where you take HP damage repeatedly, Rupture gaining Strength 3x per trigger is devastating."
    },
    {
      "deckCard": "Rupture",
      "offeredCard": "Hidden Gem",
      "bonus": 1.8,
      "reason": "Rupture gains Strength from HP loss — Hidden Gem's Replay 2 means Rupture triggers 3 times per play, turning each HP loss event into 3 Strength instead of 1."
    },
    {
      "deckCard": "Nostalgia",
      "offeredCard": "Claw",
      "bonus": 1.8,
      "reason": "Nostalgia puts the first card played back on top of Draw — playing Claw returns it to the top of Draw, enabling consistent Claw scaling every turn without needing All for One."
    },
    {
      "deckCard": "Claw",
      "offeredCard": "Nostalgia",
      "bonus": 1.8,
      "reason": "Nostalgia returns first card played to Draw Pile top — Claw as first play each turn returns itself for next turn, creating a reliable scaling loop without cycling through all cards."
    },
    {
      "deckCard": "Nostalgia",
      "offeredCard": "Thrumming Hatchet",
      "bonus": 1.5,
      "reason": "Thrumming Hatchet already returns itself next turn — Nostalgia also returns the first card played to top of Draw. If Hatchet is first, it effectively plays every turn from two sources."
    },
    {
      "deckCard": "Nostalgia",
      "offeredCard": "Body Slam",
      "bonus": 1.8,
      "reason": "Nostalgia returns first card played to Draw top — Body Slam as first play each turn comes back for next turn. In Block builds with Barricade, this means Body Slam is always available for consistent damage."
    },
    {
      "deckCard": "Body Slam",
      "offeredCard": "Nostalgia",
      "bonus": 1.8,
      "reason": "Nostalgia recycles first card played each turn — Body Slam recycled means guaranteed damage every turn in Block builds, no longer dependent on draw order."
    },
    {
      "deckCard": "Mayhem",
      "offeredCard": "Nostalgia",
      "bonus": 2.0,
      "reason": "Nostalgia puts first card played on top of Draw — Mayhem plays the top card for free at turn start. Together: choose your best card with Nostalgia, then Mayhem plays it for free next turn."
    },
    {
      "deckCard": "Nostalgia",
      "offeredCard": "Mayhem",
      "bonus": 2.0,
      "reason": "Mayhem plays Draw Pile top card free each turn — Nostalgia controls what's on top, making Mayhem always play your best card rather than a random one."
    },
    {
      "deckCard": "Mayhem",
      "offeredCard": "Scrawl",
      "bonus": 1.8,
      "reason": "Mayhem plays top card for free each turn — if Scrawl is on top, Mayhem plays it for free, filling your entire hand for 0 Energy at the start of every turn."
    },
    {
      "deckCard": "Scrawl",
      "offeredCard": "Mayhem",
      "bonus": 1.8,
      "reason": "Scrawl draws until hand is full — Mayhem plays it for free if it's on top of Draw. With Nostalgia or Thinking Ahead placing Scrawl on top, every turn starts with a full hand."
    },
    {
      "deckCard": "Automation",
      "offeredCard": "Acrobatics",
      "bonus": 1.8,
      "reason": "Automation gains Energy every 10 cards drawn — Acrobatics draws 3 per play. In Sly builds with Acrobatics cycling constantly, Automation triggers every 3-4 turns for free Energy."
    },
    {
      "deckCard": "Acrobatics",
      "offeredCard": "Automation",
      "bonus": 1.8,
      "reason": "Automation gains Energy per 10 cards drawn — Acrobatics draws 3 cards each play. With heavy Sly cycling through 10+ cards per turn, Automation gives free Energy almost every turn."
    },
    {
      "deckCard": "Automation",
      "offeredCard": "Machine Learning",
      "bonus": 1.5,
      "reason": "Automation gains Energy per 10 cards drawn — Machine Learning draws 1 extra card per turn. The additional passive draw accelerates reaching Automation's 10-card trigger threshold."
    },
    {
      "deckCard": "Machine Learning",
      "offeredCard": "Automation",
      "bonus": 1.5,
      "reason": "Machine Learning adds +1 draw per turn — Automation converts that extra draw into Energy every 10 cards. In long fights, both compound into significant free Energy."
    },
    {
      "deckCard": "Automation",
      "offeredCard": "Scrape",
      "bonus": 1.8,
      "reason": "Automation gains Energy every 10 cards drawn — Scrape draws 4 cards at once. One Scrape play counts as 4 toward Automation's threshold, making it trigger after only 2-3 Scrapes."
    },
    {
      "deckCard": "Scrape",
      "offeredCard": "Automation",
      "bonus": 1.8,
      "reason": "Scrape draws 4 cards at once — Automation gains Energy per 10 cards drawn. Scrape accelerates reaching the threshold faster than any other draw card."
    },
    {
      "deckCard": "Calamity",
      "offeredCard": "Claw",
      "bonus": 1.8,
      "reason": "Calamity adds a random Attack to hand whenever you play an Attack — in Claw builds playing 10+ attacks per turn, Calamity floods the hand with additional Attacks, fueling further plays."
    },
    {
      "deckCard": "Claw",
      "offeredCard": "Calamity",
      "bonus": 1.8,
      "reason": "Calamity generates a random Attack per attack played — Claw builds play many attacks per turn, making Calamity provide a cascade of additional Attacks every turn."
    },
    {
      "deckCard": "Calamity",
      "offeredCard": "Panache",
      "bonus": 1.5,
      "reason": "Calamity floods hand with attacks — more attacks in hand means more cards played per turn, accelerating Panache's 10-AoE-per-5-cards trigger rate."
    },
    {
      "deckCard": "Fisticuffs",
      "offeredCard": "Inflame",
      "bonus": 1.8,
      "reason": "Fisticuffs gains Block equal to damage dealt — Inflame adds permanent Strength, making Fisticuffs deal more damage AND gain more Block with every Strength point added."
    },
    {
      "deckCard": "Inflame",
      "offeredCard": "Fisticuffs",
      "bonus": 1.8,
      "reason": "Fisticuffs deals damage and gains equal Block — Inflame's permanent Strength increases both Fisticuffs' damage and Block gain simultaneously with each point of Strength."
    },
    {
      "deckCard": "Fisticuffs",
      "offeredCard": "Juggernaut",
      "bonus": 1.5,
      "reason": "Fisticuffs gains Block equal to damage — Juggernaut deals damage whenever you gain Block. Fisticuffs gaining 7+ Block triggers Juggernaut for free damage simultaneously."
    },
    {
      "deckCard": "Juggernaut",
      "offeredCard": "Fisticuffs",
      "bonus": 1.5,
      "reason": "Juggernaut deals damage on Block gain — Fisticuffs gains Block equal to damage dealt, triggering Juggernaut every play for additional damage on top of Fisticuffs itself."
    },
    {
      "deckCard": "Prowess",
      "offeredCard": "Celestial Might",
      "bonus": 1.5,
      "reason": "Prowess gives permanent Strength and Dexterity — Celestial Might hits 3 times, applying Strength to each hit. Prowess adds +3 total damage to Celestial Might immediately."
    },
    {
      "deckCard": "Prowess",
      "offeredCard": "Seven Stars",
      "bonus": 1.8,
      "reason": "Prowess gives permanent Strength — Seven Stars hits 49 times across all enemies. Even 1 Strength from Prowess adds 49 total damage to Seven Stars."
    },
    {
      "deckCard": "Seven Stars",
      "offeredCard": "Prowess",
      "bonus": 1.8,
      "reason": "Seven Stars' 49 multi-hits multiply every point of Strength — Prowess gives +1 permanent Strength, adding 49 damage to Seven Stars per Prowess played."
    },
    {
      "deckCard": "Prowess",
      "offeredCard": "Rattle",
      "bonus": 1.5,
      "reason": "Prowess gives Strength and Dexterity — Rattle multi-hits scale with Strength. Prowess directly improves every Rattle hit while also improving all Block cards with Dexterity."
    },
    {
      "deckCard": "Equilibrium",
      "offeredCard": "Body Slam",
      "bonus": 1.8,
      "reason": "Equilibrium retains your hand — Body Slam deals damage equal to current Block. Playing Equilibrium (13 Block) then retaining Body Slam means next turn Body Slam hits for at least 13 more damage."
    },
    {
      "deckCard": "Body Slam",
      "offeredCard": "Equilibrium",
      "bonus": 1.8,
      "reason": "Body Slam deals damage equal to Block — Equilibrium gives 13 Block AND retains your hand including Body Slam, setting up a massive Body Slam hit next turn."
    },
    {
      "deckCard": "Equilibrium",
      "offeredCard": "Calculated Gamble",
      "bonus": 1.5,
      "reason": "Equilibrium retains your entire hand — Calculated Gamble discards hand and draws same amount. After Equilibrium, you can play Calculated Gamble next turn with a full retained hand for massive Sly triggers."
    },
    {
      "deckCard": "Calculated Gamble",
      "offeredCard": "Equilibrium",
      "bonus": 1.5,
      "reason": "Calculated Gamble discards and redraws — Equilibrium retains the hand first, giving you full control over timing the Sly-trigger explosion that Calculated Gamble enables."
    },
    {
      "deckCard": "Salvo",
      "offeredCard": "Acrobatics",
      "bonus": 1.5,
      "reason": "Salvo retains your hand this turn — with Sly cards like Acrobatics retained, next turn you play them naturally then discard triggers all Sly effects for free."
    },
    {
      "deckCard": "Acrobatics",
      "offeredCard": "Salvo",
      "bonus": 1.5,
      "reason": "Acrobatics enables Sly triggers via discard — Salvo retains your entire hand including Sly cards, setting up a perfect next turn where you control exactly which Sly cards trigger."
    },
    {
      "deckCard": "Eternal Armor",
      "offeredCard": "Necro Mastery",
      "bonus": 1.5,
      "reason": "Necro Mastery converts Osty HP loss to enemy HP loss — Eternal Armor's Plating reduces damage Osty takes per hit, meaning Osty survives longer and Necro Mastery triggers more consistently each fight."
    },
    {
      "deckCard": "Necro Mastery",
      "offeredCard": "Eternal Armor",
      "bonus": 1.5,
      "reason": "Eternal Armor gives 7 Plating (flat damage reduction per hit) — this protects Osty from taking HP damage, allowing Necro Mastery to convert only intended HP losses (Sacrifice, Bone Shards) to AoE."
    },
    {
      "deckCard": "Eternal Armor",
      "offeredCard": "Barricade",
      "bonus": 1.5,
      "reason": "Eternal Armor gives permanent Plating — Barricade retains Block between turns. Both provide durable defense that accumulates; Plating reduces incoming damage so Barricade's Block erodes slower."
    },
    {
      "deckCard": "Barricade",
      "offeredCard": "Eternal Armor",
      "bonus": 1.5,
      "reason": "Eternal Armor's Plating reduces damage taken per hit — Barricade retains Block each turn. With Plating absorbing part of hits, Barricade's retained Block erodes far more slowly."
    },
    {
      "deckCard": "Beat Down",
      "offeredCard": "Whirlwind",
      "bonus": 1.8,
      "reason": "Beat Down plays 3 random Attacks from Discard — if Whirlwind is in Discard, Beat Down can replay it for free, dealing X-cost multi-hit AoE damage without spending any Energy."
    },
    {
      "deckCard": "Whirlwind",
      "offeredCard": "Beat Down",
      "bonus": 1.8,
      "reason": "Beat Down replays Attacks from Discard — Whirlwind in Discard can be replayed by Beat Down for free multi-hit AoE without spending the X Energy cost."
    },
    {
      "deckCard": "Beat Down",
      "offeredCard": "Seven Stars",
      "bonus": 1.8,
      "reason": "Beat Down plays 3 random Attacks from Discard — if Seven Stars is in Discard, Beat Down replays it for free, dealing 49 AoE hits without spending 3 Energy."
    },
    {
      "deckCard": "Alchemize",
      "offeredCard": "Neurosurge",
      "bonus": 1.5,
      "reason": "Alchemize provides a free potion — energy potions pair with Neurosurge's already massive Energy output, potentially enabling enormous 10+ Energy turns in Necrobinder builds."
    },
    {
      "deckCard": "Production",
      "offeredCard": "Void Form",
      "bonus": 1.8,
      "reason": "Void Form costs 3 Energy but makes first 2 cards free each turn — Production gives 2 free Energy to help pay for Void Form's setup cost on the turn you install it."
    },
    {
      "deckCard": "Void Form",
      "offeredCard": "Production",
      "bonus": 1.8,
      "reason": "Void Form is expensive at 3 Energy — Production provides 2 free Energy to help install it on the same turn you play other cards, removing the tempo loss of playing an expensive Power."
    },
    {
      "deckCard": "Scrawl",
      "offeredCard": "Death March",
      "bonus": 2.0,
      "reason": "Scrawl draws cards until hand is full (5-7 draws) — Death March deals 3 bonus damage per card drawn this turn. Scrawl alone adds 15-21 damage to Death March for 0 Energy."
    },
    {
      "deckCard": "Death March",
      "offeredCard": "Scrawl",
      "bonus": 2.0,
      "reason": "Death March scales with cards drawn this turn — Scrawl draws until hand is full for 0 Energy, adding up to 21 bonus damage to Death March in one play."
    }
  ],
  "dupePenalties": {
    "Stone Armor": -4,
    "Barricade": -99,
    "Demon Form": -2.5,
    "Corruption": -2.5,
    "Inflame": -1.5,
    "Dark Embrace": -1.5,
    "Feel No Pain": -1.5,
    "Rupture": -1.0,
    "Juggernaut": -1.5,
    "Feed": -2.0,
    "Combust": -2.0,
    "Well-Laid Plans": -2.5,
    "Noxious Fumes": -1.0,
    "After Image": -2.0,
    "Envenom": -1.5,
    "Burst": -2.0,
    "Nightmare": -2.5,
    "Echo Form": -2.5,
    "Defragment": -0.5,
    "Electrodynamics": -2.5,
    "Biased Cognition": -2.5,
    "Static Discharge": -1.5,
    "All For One": -1.5,
    "Capacitor": -1.0,
    "Void Form": -2.5,
    "Genesis": -2.0,
    "Bombardment": -2.5,
    "Sealed Throne": -2.5,
    "Demesne": -2.5,
    "Haunt": -0.5,
    "Devour Life": -1.5,
    "End Of Days": -2.0,
    "Inferno": -2.5,
    "Aggression": -2.5,
    "Stampede": -2.5,
    "Hellraiser": -2.5,
    "Drum of Battle": -2.5,
    "Dead Branch": -2.5,
    "Colossus": -2.5,
    "Unmovable": -2.5,
    "Expect A Fight": -2.5,
    "Vicious": -2.0,
    "Evil Eye": -2.0,
    "Brand": -2.0,
    "Stoke": -2.0,
    "Thrash": -1.5,
    "Primal Force": -2.0,
    "Entrench": -1.5,
    "Impervious": -1.5,
    "Second Wind": -1.5,
    "Battle Trance": -1.5,
    "Offering": -1.5,
    "Burning Pact": -1.5,
    "Limit Break": -1.5,
    "Brutality": -1.2
  },
  "names": [
    {
      "n": "Apotheosis",
      "c": "colorless"
    },
    {
      "n": "Apparition",
      "c": "colorless"
    },
    {
      "n": "Bandage Up",
      "c": "colorless"
    },
    {
      "n": "Blind",
      "c": "colorless"
    },
    {
      "n": "Deep Breath",
      "c": "colorless"
    },
    {
      "n": "Dramatic Entrance",
      "c": "colorless"
    },
    {
      "n": "Enlightenment",
      "c": "colorless"
    },
    {
      "n": "Flash Of Steel",
      "c": "colorless"
    },
    {
      "n": "Forethought",
      "c": "colorless"
    },
    {
      "n": "Good Instincts",
      "c": "colorless"
    },
    {
      "n": "Hand Of Greed",
      "c": "colorless"
    },
    {
      "n": "Jack Of All Trades",
      "c": "colorless"
    },
    {
      "n": "Madness",
      "c": "colorless"
    },
    {
      "n": "Mind Blast",
      "c": "colorless"
    },
    {
      "n": "Panacea",
      "c": "colorless"
    },
    {
      "n": "Panache",
      "c": "colorless"
    },
    {
      "n": "Sadistic Nature",
      "c": "colorless"
    },
    {
      "n": "Secret Weapon",
      "c": "colorless"
    },
    {
      "n": "The Bomb",
      "c": "colorless"
    },
    {
      "n": "Thinking Ahead",
      "c": "colorless"
    },
    {
      "n": "Transmutation",
      "c": "colorless"
    },
    {
      "n": "Trip",
      "c": "colorless"
    },
    {
      "n": "Violence",
      "c": "colorless"
    },
    {
      "n": "Wisdom",
      "c": "colorless"
    },
    {
      "n": "Aggregate",
      "c": "defect"
    },
    {
      "n": "All For One",
      "c": "defect"
    },
    {
      "n": "Ball Lightning",
      "c": "defect"
    },
    {
      "n": "Barrage",
      "c": "defect"
    },
    {
      "n": "Beam Cell",
      "c": "defect"
    },
    {
      "n": "Biased Cognition",
      "c": "defect"
    },
    {
      "n": "Blizzard",
      "c": "defect"
    },
    {
      "n": "Boot Sequence",
      "c": "defect"
    },
    {
      "n": "Buffer",
      "c": "defect"
    },
    {
      "n": "Bullseye",
      "c": "defect"
    },
    {
      "n": "Capacitor",
      "c": "defect"
    },
    {
      "n": "Chill",
      "c": "defect"
    },
    {
      "n": "Claw",
      "c": "defect"
    },
    {
      "n": "Cold Snap",
      "c": "defect"
    },
    {
      "n": "Compile Driver",
      "c": "defect"
    },
    {
      "n": "Consume",
      "c": "defect"
    },
    {
      "n": "Coolheaded",
      "c": "defect"
    },
    {
      "n": "Darkness",
      "c": "defect"
    },
    {
      "n": "Defend",
      "c": "defect"
    },
    {
      "n": "Defragment",
      "c": "defect"
    },
    {
      "n": "Dualcast",
      "c": "defect"
    },
    {
      "n": "Echo Form",
      "c": "defect"
    },
    {
      "n": "Electrodynamics",
      "c": "defect"
    },
    {
      "n": "Feral",
      "c": "defect"
    },
    {
      "n": "Finesse",
      "c": "defect"
    },
    {
      "n": "Force Field",
      "c": "defect"
    },
    {
      "n": "FTL",
      "c": "defect"
    },
    {
      "n": "Genetic Algorithm",
      "c": "defect"
    },
    {
      "n": "Glacier",
      "c": "defect"
    },
    {
      "n": "Go For The Eyes",
      "c": "defect"
    },
    {
      "n": "Hologram",
      "c": "defect"
    },
    {
      "n": "Hyper Beam",
      "c": "defect"
    },
    {
      "n": "Lockon",
      "c": "defect"
    },
    {
      "n": "Loop",
      "c": "defect"
    },
    {
      "n": "Machine Learning",
      "c": "defect"
    },
    {
      "n": "Meteor Strike",
      "c": "defect"
    },
    {
      "n": "Momentum Strike",
      "c": "defect"
    },
    {
      "n": "Multicast",
      "c": "defect"
    },
    {
      "n": "Panache",
      "c": "defect"
    },
    {
      "n": "Rebound",
      "c": "defect"
    },
    {
      "n": "Recursion",
      "c": "defect"
    },
    {
      "n": "Reprogram",
      "c": "defect"
    },
    {
      "n": "Scrape",
      "c": "defect"
    },
    {
      "n": "Self Repair",
      "c": "defect"
    },
    {
      "n": "Skim",
      "c": "defect"
    },
    {
      "n": "Stack",
      "c": "defect"
    },
    {
      "n": "Static Discharge",
      "c": "defect"
    },
    {
      "n": "Storm",
      "c": "defect"
    },
    {
      "n": "Strike",
      "c": "defect"
    },
    {
      "n": "Supercritical",
      "c": "defect"
    },
    {
      "n": "Thunder Strike",
      "c": "defect"
    },
    {
      "n": "Turbo",
      "c": "defect"
    },
    {
      "n": "Uproar",
      "c": "defect"
    },
    {
      "n": "Void",
      "c": "defect"
    },
    {
      "n": "White Noise",
      "c": "defect"
    },
    {
      "n": "Zap",
      "c": "defect"
    },
    {
      "n": "Aggression",
      "c": "ironclad"
    },
    {
      "n": "Anger",
      "c": "ironclad"
    },
    {
      "n": "Armaments",
      "c": "ironclad"
    },
    {
      "n": "Ashen Strike",
      "c": "ironclad"
    },
    {
      "n": "Barricade",
      "c": "ironclad"
    },
    {
      "n": "Bash",
      "c": "ironclad"
    },
    {
      "n": "Battle Trance",
      "c": "ironclad"
    },
    {
      "n": "Blood Wall",
      "c": "ironclad"
    },
    {
      "n": "Bloodletting",
      "c": "ironclad"
    },
    {
      "n": "Bludgeon",
      "c": "ironclad"
    },
    {
      "n": "Body Slam",
      "c": "ironclad"
    },
    {
      "n": "Brand",
      "c": "ironclad"
    },
    {
      "n": "Breakthrough",
      "c": "ironclad"
    },
    {
      "n": "Brutality",
      "c": "ironclad"
    },
    {
      "n": "Burning Pact",
      "c": "ironclad"
    },
    {
      "n": "Cascade",
      "c": "ironclad"
    },
    {
      "n": "Clash",
      "c": "ironclad"
    },
    {
      "n": "Clothesline",
      "c": "ironclad"
    },
    {
      "n": "Colossus",
      "c": "ironclad"
    },
    {
      "n": "Combust",
      "c": "ironclad"
    },
    {
      "n": "Conflagration",
      "c": "ironclad"
    },
    {
      "n": "Corruption",
      "c": "ironclad"
    },
    {
      "n": "Crimson Mantle",
      "c": "ironclad"
    },
    {
      "n": "Cruelty",
      "c": "ironclad"
    },
    {
      "n": "Dark Embrace",
      "c": "ironclad"
    },
    {
      "n": "Defend",
      "c": "ironclad"
    },
    {
      "n": "Demon Form",
      "c": "ironclad"
    },
    {
      "n": "Disarm",
      "c": "ironclad"
    },
    {
      "n": "Dismantle",
      "c": "ironclad"
    },
    {
      "n": "Double Tap",
      "c": "ironclad"
    },
    {
      "n": "Dropkick",
      "c": "ironclad"
    },
    {
      "n": "Entrench",
      "c": "ironclad"
    },
    {
      "n": "Evil Eye",
      "c": "ironclad"
    },
    {
      "n": "Expect A Fight",
      "c": "ironclad"
    },
    {
      "n": "Feed",
      "c": "ironclad"
    },
    {
      "n": "Feel No Pain",
      "c": "ironclad"
    },
    {
      "n": "Fiend Fire",
      "c": "ironclad"
    },
    {
      "n": "Fight Me!",
      "c": "ironclad"
    },
    {
      "n": "Flame Barrier",
      "c": "ironclad"
    },
    {
      "n": "Flex",
      "c": "ironclad"
    },
    {
      "n": "Grapple",
      "c": "ironclad"
    },
    {
      "n": "Headbutt",
      "c": "ironclad"
    },
    {
      "n": "Heavy Blade",
      "c": "ironclad"
    },
    {
      "n": "Hemokinesis",
      "c": "ironclad"
    },
    {
      "n": "Immolate",
      "c": "ironclad"
    },
    {
      "n": "Impervious",
      "c": "ironclad"
    },
    {
      "n": "Infernal Blade",
      "c": "ironclad"
    },
    {
      "n": "Inflame",
      "c": "ironclad"
    },
    {
      "n": "Intimidate",
      "c": "ironclad"
    },
    {
      "n": "Iron Wave",
      "c": "ironclad"
    },
    {
      "n": "Juggernaut",
      "c": "ironclad"
    },
    {
      "n": "Juggling",
      "c": "ironclad"
    },
    {
      "n": "Limit Break",
      "c": "ironclad"
    },
    {
      "n": "Mangle",
      "c": "ironclad"
    },
    {
      "n": "Molten Fist",
      "c": "ironclad"
    },
    {
      "n": "Offering",
      "c": "ironclad"
    },
    {
      "n": "Perfected Strike",
      "c": "ironclad"
    },
    {
      "n": "Pillage",
      "c": "ironclad"
    },
    {
      "n": "Stone Armor",
      "c": "ironclad"
    },
    {
      "n": "Pommel Strike",
      "c": "ironclad"
    },
    {
      "n": "Power Through",
      "c": "ironclad"
    },
    {
      "n": "Primal Force",
      "c": "ironclad"
    },
    {
      "n": "Pyre",
      "c": "ironclad"
    },
    {
      "n": "Rage",
      "c": "ironclad"
    },
    {
      "n": "Rampage",
      "c": "ironclad"
    },
    {
      "n": "Reaper",
      "c": "ironclad"
    },
    {
      "n": "Rupture",
      "c": "ironclad"
    },
    {
      "n": "Searing Blow",
      "c": "ironclad"
    },
    {
      "n": "Second Wind",
      "c": "ironclad"
    },
    {
      "n": "Sever Soul",
      "c": "ironclad"
    },
    {
      "n": "Shockwave",
      "c": "ironclad"
    },
    {
      "n": "Shrug It Off",
      "c": "ironclad"
    },
    {
      "n": "Spite",
      "c": "ironclad"
    },
    {
      "n": "Spot Weakness",
      "c": "ironclad"
    },
    {
      "n": "Stoke",
      "c": "ironclad"
    },
    {
      "n": "Stomp",
      "c": "ironclad"
    },
    {
      "n": "Strike",
      "c": "ironclad"
    },
    {
      "n": "Sword Boomerang",
      "c": "ironclad"
    },
    {
      "n": "Taunt",
      "c": "ironclad"
    },
    {
      "n": "Thrash",
      "c": "ironclad"
    },
    {
      "n": "Thunderclap",
      "c": "ironclad"
    },
    {
      "n": "True Grit",
      "c": "ironclad"
    },
    {
      "n": "Twin Strike",
      "c": "ironclad"
    },
    {
      "n": "Unmovable",
      "c": "ironclad"
    },
    {
      "n": "Uppercut",
      "c": "ironclad"
    },
    {
      "n": "Vicious",
      "c": "ironclad"
    },
    {
      "n": "Whirlwind",
      "c": "ironclad"
    },
    {
      "n": "Wild Strike",
      "c": "ironclad"
    },
    {
      "n": "Afterlife",
      "c": "necrobinder"
    },
    {
      "n": "Banshee's Cry",
      "c": "necrobinder"
    },
    {
      "n": "Blight Strike",
      "c": "necrobinder"
    },
    {
      "n": "Bodyguard",
      "c": "necrobinder"
    },
    {
      "n": "Bone Shards",
      "c": "necrobinder"
    },
    {
      "n": "Borrowed Time",
      "c": "necrobinder"
    },
    {
      "n": "Bury",
      "c": "necrobinder"
    },
    {
      "n": "Capture Spirit",
      "c": "necrobinder"
    },
    {
      "n": "Countdown",
      "c": "necrobinder"
    },
    {
      "n": "Danse Macabre",
      "c": "necrobinder"
    },
    {
      "n": "Death March",
      "c": "necrobinder"
    },
    {
      "n": "Death's Door",
      "c": "necrobinder"
    },
    {
      "n": "Deathbringer",
      "c": "necrobinder"
    },
    {
      "n": "Debilitate",
      "c": "necrobinder"
    },
    {
      "n": "Defend",
      "c": "necrobinder"
    },
    {
      "n": "Delay",
      "c": "necrobinder"
    },
    {
      "n": "Demesne",
      "c": "necrobinder"
    },
    {
      "n": "Devour Life",
      "c": "necrobinder"
    },
    {
      "n": "Dirge",
      "c": "necrobinder"
    },
    {
      "n": "Doom Spike",
      "c": "necrobinder"
    },
    {
      "n": "Dredge",
      "c": "necrobinder"
    },
    {
      "n": "End Of Days",
      "c": "necrobinder"
    },
    {
      "n": "Enfeebling Touch",
      "c": "necrobinder"
    },
    {
      "n": "Eradicate",
      "c": "necrobinder"
    },
    {
      "n": "Fear",
      "c": "necrobinder"
    },
    {
      "n": "Fetch",
      "c": "necrobinder"
    },
    {
      "n": "Flatten",
      "c": "necrobinder"
    },
    {
      "n": "Grave Warden",
      "c": "necrobinder"
    },
    {
      "n": "Graveblast",
      "c": "necrobinder"
    },
    {
      "n": "Haunt",
      "c": "necrobinder"
    },
    {
      "n": "High Five",
      "c": "necrobinder"
    },
    {
      "n": "Lethality",
      "c": "necrobinder"
    },
    {
      "n": "Negative Pulse",
      "c": "necrobinder"
    },
    {
      "n": "Neurosurge",
      "c": "necrobinder"
    },
    {
      "n": "No Escape",
      "c": "necrobinder"
    },
    {
      "n": "Oblivion",
      "c": "necrobinder"
    },
    {
      "n": "Parse",
      "c": "necrobinder"
    },
    {
      "n": "Pull Aggro",
      "c": "necrobinder"
    },
    {
      "n": "Rattle",
      "c": "necrobinder"
    },
    {
      "n": "Reanimate",
      "c": "necrobinder"
    },
    {
      "n": "Reaper Form",
      "c": "necrobinder"
    },
    {
      "n": "Reave",
      "c": "necrobinder"
    },
    {
      "n": "Sacrifice",
      "c": "necrobinder"
    },
    {
      "n": "Scourge",
      "c": "necrobinder"
    },
    {
      "n": "Scythe",
      "c": "necrobinder"
    },
    {
      "n": "Shared Fate",
      "c": "necrobinder"
    },
    {
      "n": "Sic Em",
      "c": "necrobinder"
    },
    {
      "n": "Snap",
      "c": "necrobinder"
    },
    {
      "n": "Soul Spark",
      "c": "necrobinder"
    },
    {
      "n": "Soul Storm",
      "c": "necrobinder"
    },
    {
      "n": "Squeeze",
      "c": "necrobinder"
    },
    {
      "n": "Strike",
      "c": "necrobinder"
    },
    {
      "n": "Symbiosis",
      "c": "necrobinder"
    },
    {
      "n": "Time's Up",
      "c": "necrobinder"
    },
    {
      "n": "Transfigure",
      "c": "necrobinder"
    },
    {
      "n": "Unleash",
      "c": "necrobinder"
    },
    {
      "n": "Alignment",
      "c": "regent"
    },
    {
      "n": "Astral Pulse",
      "c": "regent"
    },
    {
      "n": "Big Bang",
      "c": "regent"
    },
    {
      "n": "Black Hole",
      "c": "regent"
    },
    {
      "n": "Bombardment",
      "c": "regent"
    },
    {
      "n": "Bulwark",
      "c": "regent"
    },
    {
      "n": "Celestial Might",
      "c": "regent"
    },
    {
      "n": "Comet",
      "c": "regent"
    },
    {
      "n": "Conqueror",
      "c": "regent"
    },
    {
      "n": "Convergence",
      "c": "regent"
    },
    {
      "n": "Cosmic Indifference",
      "c": "regent"
    },
    {
      "n": "Crash Landing",
      "c": "regent"
    },
    {
      "n": "Crescent Spear",
      "c": "regent"
    },
    {
      "n": "Defend",
      "c": "regent"
    },
    {
      "n": "Dying Star",
      "c": "regent"
    },
    {
      "n": "Falling Star",
      "c": "regent"
    },
    {
      "n": "Foregone Conclusion",
      "c": "regent"
    },
    {
      "n": "Furnace",
      "c": "regent"
    },
    {
      "n": "Gamma Blast",
      "c": "regent"
    },
    {
      "n": "Gather Light",
      "c": "regent"
    },
    {
      "n": "Genesis",
      "c": "regent"
    },
    {
      "n": "Glimmer",
      "c": "regent"
    },
    {
      "n": "Glow",
      "c": "regent"
    },
    {
      "n": "Guiding Star",
      "c": "regent"
    },
    {
      "n": "Hegemony",
      "c": "regent"
    },
    {
      "n": "Hidden Cache",
      "c": "regent"
    },
    {
      "n": "Kingly Kick",
      "c": "regent"
    },
    {
      "n": "Kingly Punch",
      "c": "regent"
    },
    {
      "n": "Knockout Blow",
      "c": "regent"
    },
    {
      "n": "Lunar Blast",
      "c": "regent"
    },
    {
      "n": "Monologue",
      "c": "regent"
    },
    {
      "n": "Parry",
      "c": "regent"
    },
    {
      "n": "Particle Wall",
      "c": "regent"
    },
    {
      "n": "Photon Cut",
      "c": "regent"
    },
    {
      "n": "Prophesize",
      "c": "regent"
    },
    {
      "n": "Radiate",
      "c": "regent"
    },
    {
      "n": "Refine Blade",
      "c": "regent"
    },
    {
      "n": "Reflect",
      "c": "regent"
    },
    {
      "n": "Resonance",
      "c": "regent"
    },
    {
      "n": "Royal Gamble",
      "c": "regent"
    },
    {
      "n": "Seeking Edge",
      "c": "regent"
    },
    {
      "n": "Seven Stars",
      "c": "regent"
    },
    {
      "n": "Shining Strike",
      "c": "regent"
    },
    {
      "n": "Solar Strike",
      "c": "regent"
    },
    {
      "n": "Stardust",
      "c": "regent"
    },
    {
      "n": "Strike",
      "c": "regent"
    },
    {
      "n": "Summon Forth",
      "c": "regent"
    },
    {
      "n": "Tyranny",
      "c": "regent"
    },
    {
      "n": "Venerate",
      "c": "regent"
    },
    {
      "n": "Void Form",
      "c": "regent"
    },
    {
      "n": "Accelerant",
      "c": "silent"
    },
    {
      "n": "Accuracy",
      "c": "silent"
    },
    {
      "n": "Acrobatics",
      "c": "silent"
    },
    {
      "n": "Adrenaline",
      "c": "silent"
    },
    {
      "n": "Assassinate",
      "c": "silent"
    },
    {
      "n": "Backstab",
      "c": "silent"
    },
    {
      "n": "Blade Dance",
      "c": "silent"
    },
    {
      "n": "Blur",
      "c": "silent"
    },
    {
      "n": "Bouncing Flask",
      "c": "silent"
    },
    {
      "n": "Bubble Bubble",
      "c": "silent"
    },
    {
      "n": "Burst",
      "c": "silent"
    },
    {
      "n": "Calculated Gamble",
      "c": "silent"
    },
    {
      "n": "Caltrops",
      "c": "silent"
    },
    {
      "n": "Cloak And Dagger",
      "c": "silent"
    },
    {
      "n": "Dagger Throw",
      "c": "silent"
    },
    {
      "n": "Dash",
      "c": "silent"
    },
    {
      "n": "Deadly Poison",
      "c": "silent"
    },
    {
      "n": "Defend",
      "c": "silent"
    },
    {
      "n": "Distraction",
      "c": "silent"
    },
    {
      "n": "Envenom",
      "c": "silent"
    },
    {
      "n": "Expertise",
      "c": "silent"
    },
    {
      "n": "Fan Of Knives",
      "c": "silent"
    },
    {
      "n": "Finisher",
      "c": "silent"
    },
    {
      "n": "Flick Flack",
      "c": "silent"
    },
    {
      "n": "Follow Through",
      "c": "silent"
    },
    {
      "n": "Footwork",
      "c": "silent"
    },
    {
      "n": "Grand Finale",
      "c": "silent"
    },
    {
      "n": "Hand Trick",
      "c": "silent"
    },
    {
      "n": "Haze",
      "c": "silent"
    },
    {
      "n": "Infinite Blades",
      "c": "silent"
    },
    {
      "n": "Knife Trap",
      "c": "silent"
    },
    {
      "n": "Leg Sweep",
      "c": "silent"
    },
    {
      "n": "Master Planner",
      "c": "silent"
    },
    {
      "n": "Mirage",
      "c": "silent"
    },
    {
      "n": "Nightmare",
      "c": "silent"
    },
    {
      "n": "Noxious Fumes",
      "c": "silent"
    },
    {
      "n": "Outmaneuver",
      "c": "silent"
    },
    {
      "n": "Piercing Wail",
      "c": "silent"
    },
    {
      "n": "Poisoned Stab",
      "c": "silent"
    },
    {
      "n": "Predator",
      "c": "silent"
    },
    {
      "n": "Prepared",
      "c": "silent"
    },
    {
      "n": "Reflex",
      "c": "silent"
    },
    {
      "n": "Ricochet",
      "c": "silent"
    },
    {
      "n": "Shadowmeld",
      "c": "silent"
    },
    {
      "n": "Skewer",
      "c": "silent"
    },
    {
      "n": "Snakebite",
      "c": "silent"
    },
    {
      "n": "Storm Of Steel",
      "c": "silent"
    },
    {
      "n": "Strike",
      "c": "silent"
    },
    {
      "n": "Survivor",
      "c": "silent"
    },
    {
      "n": "Tactician",
      "c": "silent"
    },
    {
      "n": "Tools Of The Trade",
      "c": "silent"
    },
    {
      "n": "Untouchable",
      "c": "silent"
    },
    {
      "n": "Well-Laid Plans",
      "c": "silent"
    },
    {
      "n": "Cinder",
      "c": "ironclad"
    },
    {
      "n": "Havoc",
      "c": "ironclad"
    },
    {
      "n": "Setup Strike",
      "c": "ironclad"
    },
    {
      "n": "Tremble",
      "c": "ironclad"
    },
    {
      "n": "Bully",
      "c": "ironclad"
    },
    {
      "n": "Demonic Shield",
      "c": "ironclad"
    },
    {
      "n": "Dominate",
      "c": "ironclad"
    },
    {
      "n": "Drum of Battle",
      "c": "ironclad"
    },
    {
      "n": "Forgotten Ritual",
      "c": "ironclad"
    },
    {
      "n": "Howl from Beyond",
      "c": "ironclad"
    },
    {
      "n": "Inferno",
      "c": "ironclad"
    },
    {
      "n": "Stampede",
      "c": "ironclad"
    },
    {
      "n": "Unrelenting",
      "c": "ironclad"
    },
    {
      "n": "Hellraiser",
      "c": "ironclad"
    },
    {
      "n": "One-Two Punch",
      "c": "ironclad"
    },
    {
      "n": "Pact's End",
      "c": "ironclad"
    },
    {
      "n": "Tear Asunder",
      "c": "ironclad"
    },
    {
      "n": "Tear Asunder",
      "c": "ironclad"
    },
    {
      "n": "Anticipate",
      "c": "silent"
    },
    {
      "n": "Backflip",
      "c": "silent"
    },
    {
      "n": "Dagger Spray",
      "c": "silent"
    },
    {
      "n": "Deflect",
      "c": "silent"
    },
    {
      "n": "Dodge And Roll",
      "c": "silent"
    },
    {
      "n": "Leading Strike",
      "c": "silent"
    },
    {
      "n": "Slice",
      "c": "silent"
    },
    {
      "n": "Sucker Punch",
      "c": "silent"
    },
    {
      "n": "Escape Plan",
      "c": "silent"
    },
    {
      "n": "Expose",
      "c": "silent"
    },
    {
      "n": "Flanking",
      "c": "silent"
    },
    {
      "n": "Flechettes",
      "c": "silent"
    },
    {
      "n": "Anticipate",
      "c": "silent"
    },
    {
      "n": "Backflip",
      "c": "silent"
    },
    {
      "n": "Dagger Spray",
      "c": "silent"
    },
    {
      "n": "Deflect",
      "c": "silent"
    },
    {
      "n": "Dodge And Roll",
      "c": "silent"
    },
    {
      "n": "Leading Strike",
      "c": "silent"
    },
    {
      "n": "Slice",
      "c": "silent"
    },
    {
      "n": "Sucker Punch",
      "c": "silent"
    },
    {
      "n": "Escape Plan",
      "c": "silent"
    },
    {
      "n": "Expose",
      "c": "silent"
    },
    {
      "n": "Flanking",
      "c": "silent"
    },
    {
      "n": "Flechettes",
      "c": "silent"
    },
    {
      "n": "Abrasive",
      "c": "silent"
    },
    {
      "n": "Afterimage",
      "c": "silent"
    },
    {
      "n": "Blade Of Ink",
      "c": "silent"
    },
    {
      "n": "Bullet Time",
      "c": "silent"
    },
    {
      "n": "Corrosive Wave",
      "c": "silent"
    },
    {
      "n": "Echoing Slash",
      "c": "silent"
    },
    {
      "n": "Malaise",
      "c": "silent"
    },
    {
      "n": "Murder",
      "c": "silent"
    },
    {
      "n": "Serpent Form",
      "c": "silent"
    },
    {
      "n": "Shadow Step",
      "c": "silent"
    },
    {
      "n": "Sneaky",
      "c": "silent"
    },
    {
      "n": "Tracking",
      "c": "silent"
    },
    {
      "n": "Suppress",
      "c": "silent"
    },
    {
      "n": "Wraith Form",
      "c": "silent"
    },
    {
      "n": "Neutralize",
      "c": "silent"
    },
    {
      "n": "Hidden Daggers",
      "c": "silent"
    },
    {
      "n": "Memento Mori",
      "c": "silent"
    },
    {
      "n": "Outbreak",
      "c": "silent"
    },
    {
      "n": "Phantom Blades",
      "c": "silent"
    },
    {
      "n": "Pinpoint",
      "c": "silent"
    },
    {
      "n": "Pounce",
      "c": "silent"
    },
    {
      "n": "Precise Cut",
      "c": "silent"
    },
    {
      "n": "Speedster",
      "c": "silent"
    },
    {
      "n": "Strangle",
      "c": "silent"
    },
    {
      "n": "Up My Sleeve",
      "c": "silent"
    },
    {
      "n": "The Hunt",
      "c": "silent"
    },
    {
      "n": "GUARDS!!!",
      "c": "regent"
    },
    {
      "n": "Child of the Stars",
      "c": "regent"
    },
    {
      "n": "Decisions, Decisions",
      "c": "regent"
    },
    {
      "n": "Patter",
      "c": "regent"
    },
    {
      "n": "Bundle of Joy",
      "c": "regent"
    },
    {
      "n": "Spoils of Battle",
      "c": "regent"
    },
    {
      "n": "Wrought in War",
      "c": "regent"
    },
    {
      "n": "Beat into Shape",
      "c": "regent"
    },
    {
      "n": "Cloak of Stars",
      "c": "regent"
    },
    {
      "n": "BEGONE!",
      "c": "regent"
    },
    {
      "n": "Collision Course",
      "c": "regent"
    },
    {
      "n": "Crush Under",
      "c": "regent"
    },
    {
      "n": "Glitterstream",
      "c": "regent"
    },
    {
      "n": "Know Thy Place",
      "c": "regent"
    },
    {
      "n": "CHARGE!!",
      "c": "regent"
    },
    {
      "n": "Devastate",
      "c": "regent"
    },
    {
      "n": "Largesse",
      "c": "regent"
    },
    {
      "n": "Manifest Authority",
      "c": "regent"
    },
    {
      "n": "Orbit",
      "c": "regent"
    },
    {
      "n": "Pale Blue Dot",
      "c": "regent"
    },
    {
      "n": "Pillar of Creation",
      "c": "regent"
    },
    {
      "n": "Quasar",
      "c": "regent"
    },
    {
      "n": "Spectrum Shift",
      "c": "regent"
    },
    {
      "n": "Supermassive",
      "c": "regent"
    },
    {
      "n": "Terraforming",
      "c": "regent"
    },
    {
      "n": "Arsenal",
      "c": "regent"
    },
    {
      "n": "Hammer Time",
      "c": "regent"
    },
    {
      "n": "Heavenly Drill",
      "c": "regent"
    },
    {
      "n": "Heirloom Hammer",
      "c": "regent"
    },
    {
      "n": "I Am Invincible",
      "c": "regent"
    },
    {
      "n": "Make It So",
      "c": "regent"
    },
    {
      "n": "Monarch's Gaze",
      "c": "regent"
    },
    {
      "n": "Neutron Aegis",
      "c": "regent"
    },
    {
      "n": "Royalties",
      "c": "regent"
    },
    {
      "n": "Sword Sage",
      "c": "regent"
    },
    {
      "n": "The Smith",
      "c": "regent"
    },
    {
      "n": "Meteor Shower",
      "c": "regent"
    },
    {
      "n": "The Sealed Throne",
      "c": "regent"
    },
    {
      "n": "End of Days",
      "c": "necrobinder"
    },
    {
      "n": "The Scythe",
      "c": "necrobinder"
    },
    {
      "n": "Sic 'Em",
      "c": "necrobinder"
    },
    {
      "n": "Defile",
      "c": "necrobinder"
    },
    {
      "n": "Defy",
      "c": "necrobinder"
    },
    {
      "n": "Drain Power",
      "c": "necrobinder"
    },
    {
      "n": "Invoke",
      "c": "necrobinder"
    },
    {
      "n": "Poke",
      "c": "necrobinder"
    },
    {
      "n": "Reap",
      "c": "necrobinder"
    },
    {
      "n": "Sculpting Strike",
      "c": "necrobinder"
    },
    {
      "n": "Sow",
      "c": "necrobinder"
    },
    {
      "n": "Wisp",
      "c": "necrobinder"
    },
    {
      "n": "Calcify",
      "c": "necrobinder"
    },
    {
      "n": "Cleanse",
      "c": "necrobinder"
    },
    {
      "n": "Friendship",
      "c": "necrobinder"
    },
    {
      "n": "Legion of Bone",
      "c": "necrobinder"
    },
    {
      "n": "Melancholy",
      "c": "necrobinder"
    },
    {
      "n": "Pagestorm",
      "c": "necrobinder"
    },
    {
      "n": "Pull from Below",
      "c": "necrobinder"
    },
    {
      "n": "Putrefy",
      "c": "necrobinder"
    },
    {
      "n": "Right Hand Hand",
      "c": "necrobinder"
    },
    {
      "n": "Severance",
      "c": "necrobinder"
    },
    {
      "n": "Shroud",
      "c": "necrobinder"
    },
    {
      "n": "Sleight of Flesh",
      "c": "necrobinder"
    },
    {
      "n": "Spur",
      "c": "necrobinder"
    },
    {
      "n": "Veilpiercer",
      "c": "necrobinder"
    },
    {
      "n": "Eidolon",
      "c": "necrobinder"
    },
    {
      "n": "Glimpse Beyond",
      "c": "necrobinder"
    },
    {
      "n": "Hang",
      "c": "necrobinder"
    },
    {
      "n": "Misery",
      "c": "necrobinder"
    },
    {
      "n": "Seance",
      "c": "necrobinder"
    },
    {
      "n": "Sentry Mode",
      "c": "necrobinder"
    },
    {
      "n": "Spirit of Ash",
      "c": "necrobinder"
    },
    {
      "n": "Undeath",
      "c": "necrobinder"
    },
    {
      "n": "Forbidden Grimoire",
      "c": "necrobinder"
    },
    {
      "n": "Protector",
      "c": "necrobinder"
    },
    {
      "n": "All for One",
      "c": "defect"
    },
    {
      "n": "Go for the Eyes",
      "c": "defect"
    },
    {
      "n": "Multi-Cast",
      "c": "defect"
    },
    {
      "n": "TURBO",
      "c": "defect"
    },
    {
      "n": "Hyperbeam",
      "c": "defect"
    },
    {
      "n": "Boost Away",
      "c": "defect"
    },
    {
      "n": "Charge Battery",
      "c": "defect"
    },
    {
      "n": "Focused Strike",
      "c": "defect"
    },
    {
      "n": "Gunk Up",
      "c": "defect"
    },
    {
      "n": "Hotfix",
      "c": "defect"
    },
    {
      "n": "Leap",
      "c": "defect"
    },
    {
      "n": "Lightning Rod",
      "c": "defect"
    },
    {
      "n": "Sweeping Beam",
      "c": "defect"
    },
    {
      "n": "Bulk Up",
      "c": "defect"
    },
    {
      "n": "Chaos",
      "c": "defect"
    },
    {
      "n": "Compact",
      "c": "defect"
    },
    {
      "n": "Double Energy",
      "c": "defect"
    },
    {
      "n": "Energy Surge",
      "c": "defect"
    },
    {
      "n": "Fight Through",
      "c": "defect"
    },
    {
      "n": "Fusion",
      "c": "defect"
    },
    {
      "n": "Glasswork",
      "c": "defect"
    },
    {
      "n": "Hailstorm",
      "c": "defect"
    },
    {
      "n": "Iteration",
      "c": "defect"
    },
    {
      "n": "Null",
      "c": "defect"
    },
    {
      "n": "Overclock",
      "c": "defect"
    },
    {
      "n": "Refract",
      "c": "defect"
    },
    {
      "n": "Rip and Tear",
      "c": "defect"
    },
    {
      "n": "Rocket Punch",
      "c": "defect"
    },
    {
      "n": "Scavenge",
      "c": "defect"
    },
    {
      "n": "Shadow Shield",
      "c": "defect"
    },
    {
      "n": "Smokestack",
      "c": "defect"
    },
    {
      "n": "Subroutine",
      "c": "defect"
    },
    {
      "n": "Sunder",
      "c": "defect"
    },
    {
      "n": "Synchronize",
      "c": "defect"
    },
    {
      "n": "Synthesis",
      "c": "defect"
    },
    {
      "n": "Tempest",
      "c": "defect"
    },
    {
      "n": "Tesla Coil",
      "c": "defect"
    },
    {
      "n": "Thunder",
      "c": "defect"
    },
    {
      "n": "Adaptive Strike",
      "c": "defect"
    },
    {
      "n": "Consuming Shadow",
      "c": "defect"
    },
    {
      "n": "Coolant",
      "c": "defect"
    },
    {
      "n": "Creative AI",
      "c": "defect"
    },
    {
      "n": "Flak Cannon",
      "c": "defect"
    },
    {
      "n": "Helix Drill",
      "c": "defect"
    },
    {
      "n": "Ice Lance",
      "c": "defect"
    },
    {
      "n": "Ignition",
      "c": "defect"
    },
    {
      "n": "Modded",
      "c": "defect"
    },
    {
      "n": "Rainbow",
      "c": "defect"
    },
    {
      "n": "Reboot",
      "c": "defect"
    },
    {
      "n": "Shatter",
      "c": "defect"
    },
    {
      "n": "Signal Boost",
      "c": "defect"
    },
    {
      "n": "Spinner",
      "c": "defect"
    },
    {
      "n": "Trash to Treasure",
      "c": "defect"
    },
    {
      "n": "Voltaic",
      "c": "defect"
    },
    {
      "n": "Quadcast",
      "c": "defect"
    },
    {
      "n": "Hello World",
      "c": "defect"
    },
    {
      "n": "Flash of Steel",
      "c": "colorless"
    },
    {
      "n": "Jack of All Trades",
      "c": "colorless"
    },
    {
      "n": "Hand of Greed",
      "c": "colorless"
    },
    {
      "n": "Automation",
      "c": "colorless"
    },
    {
      "n": "Believe in You",
      "c": "colorless"
    },
    {
      "n": "Catastrophe",
      "c": "colorless"
    },
    {
      "n": "Coordinate",
      "c": "colorless"
    },
    {
      "n": "Dark Shackles",
      "c": "colorless"
    },
    {
      "n": "Discovery",
      "c": "colorless"
    },
    {
      "n": "Equilibrium",
      "c": "colorless"
    },
    {
      "n": "Fasten",
      "c": "colorless"
    },
    {
      "n": "Finesse",
      "c": "colorless"
    },
    {
      "n": "Fisticuffs",
      "c": "colorless"
    },
    {
      "n": "Gang Up",
      "c": "colorless"
    },
    {
      "n": "Huddle Up",
      "c": "colorless"
    },
    {
      "n": "Impatience",
      "c": "colorless"
    },
    {
      "n": "Intercept",
      "c": "colorless"
    },
    {
      "n": "Lift",
      "c": "colorless"
    },
    {
      "n": "Omnislice",
      "c": "colorless"
    },
    {
      "n": "Panic Button",
      "c": "colorless"
    },
    {
      "n": "Prep Time",
      "c": "colorless"
    },
    {
      "n": "Production",
      "c": "colorless"
    },
    {
      "n": "Prolong",
      "c": "colorless"
    },
    {
      "n": "Prowess",
      "c": "colorless"
    },
    {
      "n": "Purity",
      "c": "colorless"
    },
    {
      "n": "Restlessness",
      "c": "colorless"
    },
    {
      "n": "Seeker Strike",
      "c": "colorless"
    },
    {
      "n": "Shockwave",
      "c": "colorless"
    },
    {
      "n": "Splash",
      "c": "colorless"
    },
    {
      "n": "Stratagem",
      "c": "colorless"
    },
    {
      "n": "Tag Team",
      "c": "colorless"
    },
    {
      "n": "Thrumming Hatchet",
      "c": "colorless"
    },
    {
      "n": "Ultimate Defend",
      "c": "colorless"
    },
    {
      "n": "Ultimate Strike",
      "c": "colorless"
    },
    {
      "n": "Volley",
      "c": "colorless"
    },
    {
      "n": "Alchemize",
      "c": "colorless"
    },
    {
      "n": "Anointed",
      "c": "colorless"
    },
    {
      "n": "Beacon of Hope",
      "c": "colorless"
    },
    {
      "n": "Beat Down",
      "c": "colorless"
    },
    {
      "n": "Bolas",
      "c": "colorless"
    },
    {
      "n": "Calamity",
      "c": "colorless"
    },
    {
      "n": "Entropy",
      "c": "colorless"
    },
    {
      "n": "Eternal Armor",
      "c": "colorless"
    },
    {
      "n": "Gold Axe",
      "c": "colorless"
    },
    {
      "n": "Hidden Gem",
      "c": "colorless"
    },
    {
      "n": "Jackpot",
      "c": "colorless"
    },
    {
      "n": "Knockdown",
      "c": "colorless"
    },
    {
      "n": "Master of Strategy",
      "c": "colorless"
    },
    {
      "n": "Mayhem",
      "c": "colorless"
    },
    {
      "n": "Mimic",
      "c": "colorless"
    },
    {
      "n": "Nostalgia",
      "c": "colorless"
    },
    {
      "n": "Rally",
      "c": "colorless"
    },
    {
      "n": "Rend",
      "c": "colorless"
    },
    {
      "n": "Rolling Boulder",
      "c": "colorless"
    },
    {
      "n": "Salvo",
      "c": "colorless"
    },
    {
      "n": "Scrawl",
      "c": "colorless"
    },
    {
      "n": "Secret Technique",
      "c": "colorless"
    },
    {
      "n": "The Gambit",
      "c": "colorless"
    },
    {
      "n": "Brightest Flame",
      "c": "colorless"
    },
    {
      "n": "Maul",
      "c": "colorless"
    },
    {
      "n": "Neow's Fury",
      "c": "colorless"
    },
    {
      "n": "Relax",
      "c": "colorless"
    },
    {
      "n": "Whistle",
      "c": "colorless"
    },
    {
      "n": "Wish",
      "c": "colorless"
    },
    {
      "n": "Burn",
      "c": "colorless"
    },
    {
      "n": "Dazed",
      "c": "colorless"
    },
    {
      "n": "Slimed",
      "c": "colorless"
    },
    {
      "n": "Wound",
      "c": "colorless"
    },
    {
      "n": "Void",
      "c": "colorless"
    },
    {
      "n": "Beckon",
      "c": "colorless"
    },
    {
      "n": "Debris",
      "c": "colorless"
    },
    {
      "n": "Disintegration",
      "c": "colorless"
    },
    {
      "n": "Frantic Escape",
      "c": "colorless"
    },
    {
      "n": "Infection",
      "c": "colorless"
    },
    {
      "n": "Mind Rot",
      "c": "colorless"
    },
    {
      "n": "Sloth",
      "c": "colorless"
    },
    {
      "n": "Soot",
      "c": "colorless"
    },
    {
      "n": "Toxic",
      "c": "colorless"
    },
    {
      "n": "Waste Away",
      "c": "colorless"
    },
    {
      "n": "Ascender's Bane",
      "c": "colorless"
    },
    {
      "n": "Bad Luck",
      "c": "colorless"
    },
    {
      "n": "Clumsy",
      "c": "colorless"
    },
    {
      "n": "Curse of the Bell",
      "c": "colorless"
    },
    {
      "n": "Debt",
      "c": "colorless"
    },
    {
      "n": "Decay",
      "c": "colorless"
    },
    {
      "n": "Doubt",
      "c": "colorless"
    },
    {
      "n": "Enthralled",
      "c": "colorless"
    },
    {
      "n": "Folly",
      "c": "colorless"
    },
    {
      "n": "Greed",
      "c": "colorless"
    },
    {
      "n": "Guilty",
      "c": "colorless"
    },
    {
      "n": "Injury",
      "c": "colorless"
    },
    {
      "n": "Normality",
      "c": "colorless"
    },
    {
      "n": "Poor Sleep",
      "c": "colorless"
    },
    {
      "n": "Regret",
      "c": "colorless"
    },
    {
      "n": "Shame",
      "c": "colorless"
    },
    {
      "n": "Spore Mind",
      "c": "colorless"
    },
    {
      "n": "Writhe",
      "c": "colorless"
    },
    {
      "n": "Byrdonis Egg",
      "c": "colorless"
    },
    {
      "n": "Lantern Key",
      "c": "colorless"
    },
    {
      "n": "Spoils Map",
      "c": "colorless"
    },
    {
      "n": "Fuel",
      "c": "colorless"
    },
    {
      "n": "Giant Rock",
      "c": "colorless"
    },
    {
      "n": "Luminesce",
      "c": "colorless"
    },
    {
      "n": "Minion Dive Bomb",
      "c": "colorless"
    },
    {
      "n": "Minion Sacrifice",
      "c": "colorless"
    },
    {
      "n": "Minion Strike",
      "c": "colorless"
    },
    {
      "n": "Shiv",
      "c": "colorless"
    },
    {
      "n": "Soul",
      "c": "colorless"
    },
    {
      "n": "Sovereign Blade",
      "c": "colorless"
    },
    {
      "n": "Sweeping Gaze",
      "c": "colorless"
    },
    {
      "n": "Byrd Swoop",
      "c": "colorless"
    },
    {
      "n": "Exterminate",
      "c": "colorless"
    },
    {
      "n": "Feeding Frenzy",
      "c": "colorless"
    },
    {
      "n": "Metamorphosis",
      "c": "colorless"
    },
    {
      "n": "Peck",
      "c": "colorless"
    },
    {
      "n": "Squash",
      "c": "colorless"
    },
    {
      "n": "Toric Toughness",
      "c": "colorless"
    }
  ],
  "relics": {
    "BURNING_BLOOD": {
      "id": "Burning Blood",
      "tier": "B",
      "char": "ironclad",
      "rarity": "starter",
      "syn": [
        "healing"
      ],
      "notes": "Heal 6 HP after each combat.",
      "builds": [
        "strength",
        "block",
        "exhaust",
        "self_damage",
        "strike"
      ],
      "scoreEffects": []
    },
    "BLACK_BLOOD": {
      "id": "Black Blood",
      "tier": "B",
      "char": "ironclad",
      "rarity": "starter",
      "syn": [
        "healing"
      ],
      "notes": "Heal 12 HP after each combat. Upgraded Burning Blood.",
      "builds": [
        "strength",
        "block",
        "exhaust",
        "self_damage",
        "strike"
      ],
      "scoreEffects": []
    },
    "RING_OF_THE_SNAKE": {
      "id": "Ring of the Snake",
      "tier": "B",
      "char": "silent",
      "rarity": "starter",
      "syn": [
        "draw"
      ],
      "notes": "Draw 2 extra cards on Turn 1.",
      "builds": [
        "sly",
        "poison",
        "shiv"
      ],
      "scoreEffects": [
        {
          "tags": [
            "sly",
            "draw"
          ],
          "bonus": 0.2
        }
      ]
    },
    "RING_OF_THE_DRAKE": {
      "id": "Ring of the Drake",
      "tier": "B",
      "char": "silent",
      "rarity": "starter",
      "syn": [
        "draw"
      ],
      "notes": "Draw 2 extra cards on your first 3 turns.",
      "builds": [
        "sly",
        "poison",
        "shiv"
      ],
      "scoreEffects": [
        {
          "tags": [
            "sly",
            "draw"
          ],
          "bonus": 0.2
        }
      ]
    },
    "DIVINE_RIGHT": {
      "id": "Divine Right",
      "tier": "B",
      "char": "regent",
      "rarity": "starter",
      "syn": [
        "stars"
      ],
      "notes": "Gain 3 Stars at combat start.",
      "builds": [
        "stars",
        "forge"
      ],
      "scoreEffects": [
        {
          "tags": [
            "stars",
            "star_gain"
          ],
          "bonus": 0.5
        }
      ]
    },
    "DIVINE_DESTINY": {
      "id": "Divine Destiny",
      "tier": "B",
      "char": "regent",
      "rarity": "starter",
      "syn": [
        "stars"
      ],
      "notes": "Gain 6 Stars at combat start.",
      "builds": [
        "stars",
        "forge"
      ],
      "scoreEffects": [
        {
          "tags": [
            "stars",
            "star_gain"
          ],
          "bonus": 0.8
        }
      ]
    },
    "BOUND_PHYLACTERY": {
      "id": "Bound Phylactery",
      "tier": "B",
      "char": "necrobinder",
      "rarity": "starter",
      "syn": [
        "summon"
      ],
      "notes": "Summon 1 at the start of each turn.",
      "builds": [
        "osty",
        "soul",
        "doom"
      ],
      "scoreEffects": [
        {
          "tags": [
            "osty",
            "soul",
            "doom"
          ],
          "bonus": 0.3
        }
      ]
    },
    "PHYLACTERY_UNBOUND": {
      "id": "Phylactery Unbound",
      "tier": "B",
      "char": "necrobinder",
      "rarity": "starter",
      "syn": [
        "summon"
      ],
      "notes": "Summon 5 at combat start + Summon 2 each turn.",
      "builds": [
        "osty",
        "soul",
        "doom"
      ],
      "scoreEffects": [
        {
          "tags": [
            "osty",
            "soul",
            "doom"
          ],
          "bonus": 0.6
        },
        {
          "tags": [
            "summon"
          ],
          "bonus": 0.4
        }
      ]
    },
    "CRACKED_CORE": {
      "id": "Cracked Core",
      "tier": "B",
      "char": "defect",
      "rarity": "starter",
      "syn": [
        "orb",
        "lightning"
      ],
      "notes": "Channel 1 Lightning at combat start.",
      "builds": [
        "orb",
        "claw"
      ],
      "scoreEffects": []
    },
    "INFUSED_CORE": {
      "id": "Infused Core",
      "tier": "B",
      "char": "defect",
      "rarity": "starter",
      "syn": [
        "orb",
        "lightning"
      ],
      "notes": "Channel 3 Lightning at combat start.",
      "builds": [
        "orb",
        "claw"
      ],
      "scoreEffects": [
        {
          "tags": [
            "orb",
            "lightning"
          ],
          "bonus": 0.5
        }
      ]
    },
    "AMETHYST_AUBERGINE": {
      "id": "Amethyst Aubergine",
      "tier": "A",
      "char": "any",
      "rarity": "common",
      "syn": [
        "gold"
      ],
      "notes": "Enemies drop 10 extra Gold. Compounds over a run.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "ANCHOR": {
      "id": "Anchor",
      "tier": "S",
      "char": "any",
      "rarity": "common",
      "syn": [
        "block"
      ],
      "notes": "Start each combat with 10 Block. Free Block every fight.",
      "builds": [
        "strength",
        "block",
        "poison",
        "doom",
        "stars",
        "any"
      ],
      "scoreEffects": [
        {
          "tags": [
            "block",
            "strength"
          ],
          "bonus": 5
        }
      ]
    },
    "BAG_OF_PREPARATION": {
      "id": "Bag of Preparation",
      "tier": "S",
      "char": "any",
      "rarity": "common",
      "syn": [
        "draw"
      ],
      "notes": "Draw 2 extra cards at combat start. See 7 cards on Turn 1.",
      "builds": [
        "sly",
        "claw",
        "stars",
        "poison",
        "any"
      ],
      "scoreEffects": [
        {
          "tags": [
            "draw",
            "scaling"
          ],
          "bonus": 0.4
        },
        {
          "tags": [
            "sly"
          ],
          "bonus": 0.3
        }
      ]
    },
    "BLOOD_VIAL": {
      "id": "Blood Vial",
      "tier": "B",
      "char": "any",
      "rarity": "common",
      "syn": [
        "healing"
      ],
      "notes": "Heal 2 HP at combat start. Minor but consistent.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "BOOK_OF_FIVE_RINGS": {
      "id": "Book of Five Rings",
      "tier": "D",
      "char": "any",
      "rarity": "common",
      "syn": [
        "healing"
      ],
      "notes": "Heal 15 HP every 5 cards added to deck. Penalizes small decks.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "BRONZE_SCALES": {
      "id": "Bronze Scales",
      "tier": "B",
      "char": "any",
      "rarity": "common",
      "syn": [
        "thorns",
        "damage"
      ],
      "notes": "Start with 3 Thorns. Passive damage on hits — pairs with Block builds that absorb hits.",
      "builds": [
        "block"
      ],
      "scoreEffects": [
        {
          "tags": [
            "block"
          ],
          "bonus": 0.15
        }
      ]
    },
    "CENTENNIAL_PUZZLE": {
      "id": "Centennial Puzzle",
      "tier": "B",
      "char": "any",
      "rarity": "common",
      "syn": [
        "draw"
      ],
      "notes": "First time you lose HP per combat: draw 3 cards. Strong in self-damage Ironclad.",
      "builds": [
        "self_damage",
        "block"
      ],
      "scoreEffects": [
        {
          "tags": [
            "self_damage"
          ],
          "bonus": 0.9
        },
        {
          "tags": [
            "draw"
          ],
          "bonus": 0.4
        }
      ]
    },
    "FESTIVE_POPPER": {
      "id": "Festive Popper",
      "tier": "A",
      "char": "any",
      "rarity": "common",
      "syn": [
        "aoe",
        "damage"
      ],
      "notes": "Deal 9 AoE at combat start. Free damage every fight.",
      "builds": [
        "doom",
        "any"
      ],
      "scoreEffects": [
        {
          "tags": [
            "doom"
          ],
          "bonus": 0.3
        }
      ]
    },
    "GORGET": {
      "id": "Gorget",
      "tier": "S",
      "char": "any",
      "rarity": "common",
      "syn": [
        "plating",
        "block"
      ],
      "notes": "Gain 4 Plating at combat start. Permanent flat damage reduction — excellent.",
      "builds": [
        "strength",
        "block",
        "doom",
        "poison",
        "any"
      ],
      "scoreEffects": [
        {
          "tags": [
            "block",
            "damage"
          ],
          "bonus": 0.2
        }
      ]
    },
    "HAPPY_FLOWER": {
      "id": "Happy Flower",
      "tier": "A",
      "char": "any",
      "rarity": "common",
      "syn": [
        "energy_gain"
      ],
      "notes": "Every 3 turns, gain Energy. Consistent passive Energy.",
      "builds": [
        "stars",
        "orb",
        "doom",
        "any"
      ],
      "scoreEffects": [
        {
          "tags": [
            "energy_gain"
          ],
          "bonus": 0.3
        }
      ]
    },
    "JUZU_BRACELET": {
      "id": "Juzu Bracelet",
      "tier": "C",
      "char": "any",
      "rarity": "common",
      "syn": [],
      "notes": "No regular enemies in ? rooms. Map manipulation.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "LANTERN": {
      "id": "Lantern",
      "tier": "A",
      "char": "any",
      "rarity": "common",
      "syn": [
        "energy_gain"
      ],
      "notes": "Start each combat with +1 Energy. Universal.",
      "builds": [
        "stars",
        "orb",
        "doom",
        "strength",
        "any"
      ],
      "scoreEffects": [
        {
          "tags": [
            "energy_gain",
            "x_cost"
          ],
          "bonus": 0.5
        }
      ]
    },
    "MEAL_TICKET": {
      "id": "Meal Ticket",
      "tier": "A",
      "char": "any",
      "rarity": "common",
      "syn": [
        "healing"
      ],
      "notes": "Heal 15 HP per shop visit.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "ODDLY_SMOOTH_STONE": {
      "id": "Oddly Smooth Stone",
      "tier": "B",
      "char": "any",
      "rarity": "common",
      "syn": [
        "dexterity",
        "block"
      ],
      "notes": "Start with 1 Dexterity. Every block card gains +1.",
      "builds": [
        "block",
        "orb",
        "any"
      ],
      "scoreEffects": [
        {
          "tags": [
            "block"
          ],
          "bonus": 0.2
        }
      ]
    },
    "PENDULUM": {
      "id": "Pendulum",
      "tier": "B",
      "char": "any",
      "rarity": "common",
      "syn": [
        "draw"
      ],
      "notes": "Draw a card whenever you shuffle. Good in fast-cycling decks.",
      "builds": [
        "sly",
        "claw"
      ],
      "scoreEffects": [
        {
          "tags": [
            "draw",
            "sly"
          ],
          "bonus": 0.5
        },
        {
          "tags": [
            "claw",
            "zero_cost"
          ],
          "bonus": 0.4
        }
      ]
    },
    "PERMAFROST": {
      "id": "Permafrost",
      "tier": "C",
      "char": "any",
      "rarity": "common",
      "syn": [
        "block",
        "strength"
      ],
      "notes": "First Power played per combat: gain 6 Block.",
      "builds": [
        "strength",
        "orb",
        "exhaust",
        "stars"
      ],
      "scoreEffects": [
        {
          "tags": [
            "power"
          ],
          "bonus": 5
        }
      ]
    },
    "POTION_BELT": {
      "id": "Potion Belt",
      "tier": "C",
      "char": "any",
      "rarity": "common",
      "syn": [],
      "notes": "Gain 2 potion slots.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "REGAL_PILLOW": {
      "id": "Regal Pillow",
      "tier": "B",
      "char": "any",
      "rarity": "common",
      "syn": [
        "healing"
      ],
      "notes": "Heal 15 extra HP when Resting.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "STRAWBERRY": {
      "id": "Strawberry",
      "tier": "B",
      "char": "any",
      "rarity": "common",
      "syn": [
        "max_hp"
      ],
      "notes": "Raise Max HP by 7.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "STRIKE_DUMMY": {
      "id": "Strike Dummy",
      "tier": "C",
      "char": "any",
      "rarity": "common",
      "syn": [
        "damage",
        "strike"
      ],
      "notes": "Strike cards deal 3 more damage. Core in Strike builds, irrelevant otherwise.",
      "builds": [
        "strike"
      ],
      "scoreEffects": [
        {
          "tags": [
            "strike"
          ],
          "bonus": 2.0
        }
      ]
    },
    "TINY_MAILBOX": {
      "id": "Tiny Mailbox",
      "tier": "C",
      "char": "any",
      "rarity": "common",
      "syn": [],
      "notes": "Get a random potion when Resting.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "VAJRA": {
      "id": "Vajra",
      "tier": "A",
      "char": "any",
      "rarity": "common",
      "syn": [
        "strength"
      ],
      "notes": "Start each combat with 1 Strength. Benefits every attack.",
      "builds": [
        "strength",
        "claw",
        "shiv",
        "any"
      ],
      "scoreEffects": [
        {
          "tags": [
            "damage",
            "multi_hit"
          ],
          "bonus": 0.5
        },
        {
          "tags": [
            "strength"
          ],
          "bonus": 0.4
        }
      ]
    },
    "VENERABLE_TEA_SET": {
      "id": "Venerable Tea Set",
      "tier": "A",
      "char": "any",
      "rarity": "common",
      "syn": [
        "energy_gain"
      ],
      "notes": "After each Rest Site: next combat starts with +2 Energy.",
      "builds": [
        "stars",
        "orb",
        "doom",
        "strength",
        "any"
      ],
      "scoreEffects": [
        {
          "tags": [
            "energy_gain"
          ],
          "bonus": 0.3
        }
      ]
    },
    "WAR_PAINT": {
      "id": "War Paint",
      "tier": "A",
      "char": "any",
      "rarity": "common",
      "syn": [
        "upgrade"
      ],
      "notes": "Upgrade 2 random Skills on pickup.",
      "builds": [
        "exhaust",
        "stars",
        "sly",
        "any"
      ],
      "scoreEffects": [
        {
          "tags": [
            "power"
          ],
          "bonus": 0.2
        }
      ]
    },
    "WHETSTONE": {
      "id": "Whetstone",
      "tier": "A",
      "char": "any",
      "rarity": "common",
      "syn": [
        "upgrade"
      ],
      "notes": "Upgrade 2 random Attacks on pickup.",
      "builds": [
        "strength",
        "claw",
        "shiv",
        "strike",
        "any"
      ],
      "scoreEffects": [
        {
          "tags": [
            "damage"
          ],
          "bonus": 0.2
        }
      ]
    },
    "RED_SKULL": {
      "id": "Red Skull",
      "tier": "C",
      "char": "ironclad",
      "rarity": "common",
      "syn": [
        "strength"
      ],
      "notes": "Below 50% HP: +3 Strength. High-risk; good in Bloodletting builds.",
      "builds": [
        "self_damage",
        "strength"
      ],
      "scoreEffects": [
        {
          "tags": [
            "self_damage"
          ],
          "bonus": 0.7
        },
        {
          "tags": [
            "strength",
            "damage",
            "multi_hit"
          ],
          "bonus": 0.4
        }
      ]
    },
    "SNECKO_SKULL": {
      "id": "Snecko Skull",
      "tier": "C",
      "char": "silent",
      "rarity": "common",
      "syn": [
        "poison"
      ],
      "notes": "Apply 1 extra Poison per application. Doubles Poison stacking speed.",
      "builds": [
        "poison"
      ],
      "scoreEffects": [
        {
          "tags": [
            "poison"
          ],
          "bonus": 1.5
        }
      ]
    },
    "FENCING_MANUAL": {
      "id": "Fencing Manual",
      "tier": "C",
      "char": "regent",
      "rarity": "common",
      "syn": [
        "forge"
      ],
      "notes": "Forge 10 at combat start. Helps Forge builds start Sovereign Blade online.",
      "builds": [
        "forge"
      ],
      "scoreEffects": [
        {
          "tags": [
            "forge"
          ],
          "bonus": 1.3
        }
      ]
    },
    "BONE_FLUTE": {
      "id": "Bone Flute",
      "tier": "C",
      "char": "necrobinder",
      "rarity": "common",
      "syn": [
        "block",
        "osty"
      ],
      "notes": "Gain 2 Block whenever Osty attacks. Passive Block from Osty chains.",
      "builds": [
        "osty"
      ],
      "scoreEffects": [
        {
          "tags": [
            "osty"
          ],
          "bonus": 0.8
        }
      ]
    },
    "DATA_DISK": {
      "id": "Data Disk",
      "tier": "B",
      "char": "defect",
      "rarity": "common",
      "syn": [
        "focus",
        "orb"
      ],
      "notes": "Start each combat with 1 Focus. All Orbs deal more — free Focus every fight.",
      "builds": [
        "orb"
      ],
      "scoreEffects": [
        {
          "tags": [
            "orb",
            "focus"
          ],
          "bonus": 1.0
        }
      ]
    },
    "AKABEKO": {
      "id": "Akabeko",
      "tier": "B",
      "char": "any",
      "rarity": "uncommon",
      "syn": [
        "strength"
      ],
      "notes": "Start combat with 8 Vigor. First attack deals +8.",
      "builds": [
        "strength",
        "claw",
        "shiv"
      ],
      "scoreEffects": [
        {
          "tags": [
            "damage"
          ],
          "bonus": 0.3
        }
      ]
    },
    "BAG_OF_MARBLES": {
      "id": "Bag of Marbles",
      "tier": "B",
      "char": "any",
      "rarity": "uncommon",
      "syn": [
        "vulnerable"
      ],
      "notes": "Apply 1 Vulnerable to ALL enemies at combat start.",
      "builds": [
        "strength",
        "claw",
        "shiv",
        "stars"
      ],
      "scoreEffects": [
        {
          "tags": [
            "damage",
            "multi_hit"
          ],
          "bonus": 0.5
        },
        {
          "tags": [
            "vulnerable"
          ],
          "bonus": 0.5
        }
      ]
    },
    "BELLOWS": {
      "id": "Bellows",
      "tier": "A",
      "char": "any",
      "rarity": "uncommon",
      "syn": [
        "upgrade"
      ],
      "notes": "First hand each combat is Upgraded. Free upgrades every fight.",
      "builds": [
        "orb",
        "exhaust",
        "stars",
        "any"
      ],
      "scoreEffects": [
        {
          "tags": [
            "damage",
            "block"
          ],
          "bonus": 0.2
        }
      ]
    },
    "BOWLER_HAT": {
      "id": "Bowler Hat",
      "tier": "B",
      "char": "any",
      "rarity": "uncommon",
      "syn": [
        "gold"
      ],
      "notes": "Gain 20% extra Gold.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "CANDELABRA": {
      "id": "Candelabra",
      "tier": "B",
      "char": "any",
      "rarity": "uncommon",
      "syn": [
        "energy_gain"
      ],
      "notes": "Gain 2 Energy at start of Turn 2.",
      "builds": [
        "stars",
        "orb",
        "doom",
        "strength",
        "any"
      ],
      "scoreEffects": [
        {
          "tags": [
            "energy_gain",
            "x_cost"
          ],
          "bonus": 0.4
        }
      ]
    },
    "ETERNAL_FEATHER": {
      "id": "Eternal Feather",
      "tier": "B",
      "char": "any",
      "rarity": "uncommon",
      "syn": [
        "healing"
      ],
      "notes": "Heal 3 HP per 5 deck cards at Rest Sites.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "GREMLIN_HORN": {
      "id": "Gremlin Horn",
      "tier": "A",
      "char": "any",
      "rarity": "uncommon",
      "syn": [
        "energy_gain",
        "draw"
      ],
      "notes": "On enemy death: gain Energy and draw 1 card. Snowballs in multi-enemy fights.",
      "builds": [
        "claw",
        "sly",
        "any"
      ],
      "scoreEffects": [
        {
          "tags": [
            "claw",
            "zero_cost"
          ],
          "bonus": 0.3
        },
        {
          "tags": [
            "sly"
          ],
          "bonus": 0.3
        }
      ]
    },
    "HORN_CLEAT": {
      "id": "Horn Cleat",
      "tier": "S",
      "char": "any",
      "rarity": "uncommon",
      "syn": [
        "block"
      ],
      "notes": "Gain 14 Block at start of Turn 2. Massive early Block.",
      "builds": [
        "strength",
        "block",
        "poison",
        "doom",
        "stars",
        "any"
      ],
      "scoreEffects": [
        {
          "tags": [
            "block",
            "strength"
          ],
          "bonus": 5
        }
      ]
    },
    "JOSS_PAPER": {
      "id": "Joss Paper",
      "tier": "C",
      "char": "any",
      "rarity": "uncommon",
      "syn": [
        "draw",
        "exhaust"
      ],
      "notes": "Every 5 Exhaust: draw 1 card. Decent draw in Exhaust builds.",
      "builds": [
        "exhaust",
        "shiv"
      ],
      "scoreEffects": [
        {
          "tags": [
            "exhaust"
          ],
          "bonus": 0.8
        },
        {
          "tags": [
            "shiv"
          ],
          "bonus": 0.5
        }
      ]
    },
    "KUSARIGAMA": {
      "id": "Kusarigama",
      "tier": "B",
      "char": "any",
      "rarity": "uncommon",
      "syn": [
        "damage"
      ],
      "notes": "Every 3 Attacks in a turn: deal 6 damage to random enemy.",
      "builds": [
        "claw",
        "shiv",
        "strength",
        "sly"
      ],
      "scoreEffects": [
        {
          "tags": [
            "damage"
          ],
          "bonus": 0.6
        },
        {
          "tags": [
            "shiv",
            "shiv_synergy"
          ],
          "bonus": 0.6
        },
        {
          "tags": [
            "sly"
          ],
          "bonus": 0.5
        }
      ]
    },
    "LETTER_OPENER": {
      "id": "Letter Opener",
      "tier": "B",
      "char": "any",
      "rarity": "uncommon",
      "syn": [
        "aoe",
        "damage"
      ],
      "notes": "Every 3 Skills in a turn: deal 5 AoE.",
      "builds": [
        "sly",
        "exhaust",
        "stars"
      ],
      "scoreEffects": [
        {
          "tags": [
            "power",
            "sly"
          ],
          "bonus": 0.6
        },
        {
          "tags": [
            "exhaust"
          ],
          "bonus": 0.4
        }
      ]
    },
    "LUCKY_FYSH": {
      "id": "Lucky Fysh",
      "tier": "B",
      "char": "any",
      "rarity": "uncommon",
      "syn": [
        "gold"
      ],
      "notes": "Gain 15 Gold per card added to deck.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "MERCURY_HOURGLASS": {
      "id": "Mercury Hourglass",
      "tier": "S",
      "char": "any",
      "rarity": "uncommon",
      "syn": [
        "aoe",
        "damage"
      ],
      "notes": "Deal 3 AoE at turn start every turn. Free passive damage.",
      "builds": [
        "doom",
        "any"
      ],
      "scoreEffects": [
        {
          "tags": [
            "doom"
          ],
          "bonus": 0.3
        }
      ]
    },
    "MINIATURE_CANNON": {
      "id": "Miniature Cannon",
      "tier": "C",
      "char": "any",
      "rarity": "uncommon",
      "syn": [
        "damage"
      ],
      "notes": "Upgraded Attacks deal 3 more damage.",
      "builds": [
        "strength",
        "claw"
      ],
      "scoreEffects": [
        {
          "tags": [
            "damage"
          ],
          "bonus": 0.4
        }
      ]
    },
    "NUNCHAKU": {
      "id": "Nunchaku",
      "tier": "B",
      "char": "any",
      "rarity": "uncommon",
      "syn": [
        "energy_gain"
      ],
      "notes": "Every 10 Attacks: gain Energy. Great in attack-spam builds.",
      "builds": [
        "claw",
        "shiv",
        "strength",
        "sly"
      ],
      "scoreEffects": [
        {
          "tags": [
            "damage",
            "zero_cost"
          ],
          "bonus": 0.7
        },
        {
          "tags": [
            "shiv",
            "shiv_synergy"
          ],
          "bonus": 0.6
        },
        {
          "tags": [
            "multi_hit"
          ],
          "bonus": 0.5
        },
        {
          "tags": [
            "sly"
          ],
          "bonus": 0.5
        }
      ]
    },
    "ORICHALCUM": {
      "id": "Orichalcum",
      "tier": "B",
      "char": "any",
      "rarity": "uncommon",
      "syn": [
        "block"
      ],
      "notes": "End turn without Block: gain 6 Block. Safety net.",
      "builds": [
        "sly",
        "stars",
        "any"
      ],
      "scoreEffects": [
        {
          "tags": [
            "sly"
          ],
          "bonus": 0.3
        }
      ]
    },
    "ORNAMENTAL_FAN": {
      "id": "Ornamental Fan",
      "tier": "B",
      "char": "any",
      "rarity": "uncommon",
      "syn": [
        "block"
      ],
      "notes": "Every 3 Attacks in a turn: gain 4 Block.",
      "builds": [
        "claw",
        "shiv",
        "strength",
        "sly"
      ],
      "scoreEffects": [
        {
          "tags": [
            "damage"
          ],
          "bonus": 0.5
        },
        {
          "tags": [
            "shiv",
            "shiv_synergy"
          ],
          "bonus": 0.6
        },
        {
          "tags": [
            "sly"
          ],
          "bonus": 0.5
        }
      ]
    },
    "PANTOGRAPH": {
      "id": "Pantograph",
      "tier": "A",
      "char": "any",
      "rarity": "uncommon",
      "syn": [
        "healing"
      ],
      "notes": "Heal 25 HP at start of each Boss fight.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "PARRYING_SHIELD": {
      "id": "Parrying Shield",
      "tier": "D",
      "char": "any",
      "rarity": "uncommon",
      "syn": [
        "damage"
      ],
      "notes": "End turn with 10+ Block: deal 6 damage to random enemy. Very conditional.",
      "builds": [
        "block"
      ],
      "scoreEffects": []
    },
    "PEAR": {
      "id": "Pear",
      "tier": "A",
      "char": "any",
      "rarity": "uncommon",
      "syn": [
        "max_hp"
      ],
      "notes": "Raise Max HP by 10.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "PEN_NIB": {
      "id": "Pen Nib",
      "tier": "A",
      "char": "any",
      "rarity": "uncommon",
      "syn": [
        "damage"
      ],
      "notes": "Every 10th Attack deals double damage.",
      "builds": [
        "claw",
        "shiv",
        "strength"
      ],
      "scoreEffects": [
        {
          "tags": [
            "damage"
          ],
          "bonus": 0.6
        },
        {
          "tags": [
            "multi_hit"
          ],
          "bonus": 0.5
        }
      ]
    },
    "PETRIFIED_TOAD": {
      "id": "Petrified Toad",
      "tier": "B",
      "char": "any",
      "rarity": "uncommon",
      "syn": [],
      "notes": "Start combat with a Potion-Shaped Rock.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "PLANISPHERE": {
      "id": "Planisphere",
      "tier": "C",
      "char": "any",
      "rarity": "uncommon",
      "syn": [
        "healing"
      ],
      "notes": "Heal 4 HP per ? room.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "RED_MASK": {
      "id": "Red Mask",
      "tier": "S",
      "char": "any",
      "rarity": "uncommon",
      "syn": [
        "weak"
      ],
      "notes": "Apply 1 Weak to ALL enemies at combat start.",
      "builds": [
        "sly",
        "poison",
        "doom"
      ],
      "scoreEffects": [
        {
          "tags": [
            "poison",
            "damage"
          ],
          "bonus": 0.5
        },
        {
          "tags": [
            "weak"
          ],
          "bonus": 0.6
        }
      ]
    },
    "REPTILE_TRINKET": {
      "id": "Reptile Trinket",
      "tier": "C",
      "char": "any",
      "rarity": "uncommon",
      "syn": [
        "strength"
      ],
      "notes": "Gain 3 Strength this turn when using a potion. Burst Strength.",
      "builds": [
        "strength"
      ],
      "scoreEffects": []
    },
    "RIPPLE_BASIN": {
      "id": "Ripple Basin",
      "tier": "C",
      "char": "any",
      "rarity": "uncommon",
      "syn": [
        "block"
      ],
      "notes": "Did not play Attacks this turn: gain 4 Block. Skill-heavy turns.",
      "builds": [
        "sly",
        "stars"
      ],
      "scoreEffects": []
    },
    "SPARKLING_ROUGE": {
      "id": "Sparkling Rouge",
      "tier": "B",
      "char": "any",
      "rarity": "uncommon",
      "syn": [
        "strength",
        "dexterity"
      ],
      "notes": "Gain 1 Strength and 1 Dexterity at Turn 3.",
      "builds": [
        "strength",
        "any"
      ],
      "scoreEffects": [
        {
          "tags": [
            "strength",
            "damage"
          ],
          "bonus": 0.2
        },
        {
          "tags": [
            "block"
          ],
          "bonus": 0.1
        }
      ]
    },
    "STONE_CRACKER": {
      "id": "Stone Cracker",
      "tier": "A",
      "char": "any",
      "rarity": "uncommon",
      "syn": [
        "upgrade"
      ],
      "notes": "Boss fights: Upgrade 3 random Draw Pile cards.",
      "builds": [
        "stars",
        "orb",
        "any"
      ],
      "scoreEffects": [
        {
          "tags": [
            "power"
          ],
          "bonus": 0.3
        },
        {
          "tags": [
            "damage"
          ],
          "bonus": 0.2
        }
      ]
    },
    "TUNING_FORK": {
      "id": "Tuning Fork",
      "tier": "S",
      "char": "any",
      "rarity": "uncommon",
      "syn": [
        "block"
      ],
      "notes": "Every 10 Skills: gain 7 Block.",
      "builds": [
        "sly",
        "exhaust",
        "stars"
      ],
      "scoreEffects": [
        {
          "tags": [
            "power",
            "sly"
          ],
          "bonus": 0.8
        },
        {
          "tags": [
            "exhaust"
          ],
          "bonus": 0.5
        }
      ]
    },
    "VAMBRACE": {
      "id": "Vambrace",
      "tier": "A",
      "char": "any",
      "rarity": "uncommon",
      "syn": [
        "block"
      ],
      "notes": "First Block gained from a card each combat is doubled.",
      "builds": [
        "block",
        "stars"
      ],
      "scoreEffects": [
        {
          "tags": [
            "block"
          ],
          "bonus": 0.8
        }
      ]
    },
    "PAPER_PHROG": {
      "id": "Paper Phrog",
      "tier": "C",
      "char": "ironclad",
      "rarity": "uncommon",
      "syn": [
        "vulnerable",
        "damage"
      ],
      "notes": "Vulnerable enemies take 75% more damage (not 50%). Amplifies all Vulnerable combos.",
      "builds": [
        "strength",
        "block",
        "strike"
      ],
      "scoreEffects": [
        {
          "tags": [
            "vulnerable"
          ],
          "bonus": 0.9
        },
        {
          "tags": [
            "damage",
            "multi_hit"
          ],
          "bonus": 0.5
        }
      ]
    },
    "SELF_FORMING_CLAY": {
      "id": "Self-Forming Clay",
      "tier": "C",
      "char": "ironclad",
      "rarity": "uncommon",
      "syn": [
        "block"
      ],
      "notes": "Lose HP in combat: gain 3 Block next turn.",
      "builds": [
        "self_damage",
        "block"
      ],
      "scoreEffects": [
        {
          "tags": [
            "self_damage"
          ],
          "bonus": 0.8
        },
        {
          "tags": [
            "block"
          ],
          "bonus": 0.4
        }
      ]
    },
    "TINGSHA": {
      "id": "Tingsha",
      "tier": "C",
      "char": "silent",
      "rarity": "uncommon",
      "syn": [
        "damage"
      ],
      "notes": "Discard during turn: deal 3 damage per discarded card.",
      "builds": [
        "sly",
        "shiv"
      ],
      "scoreEffects": [
        {
          "tags": [
            "sly",
            "discard"
          ],
          "bonus": 1.0
        },
        {
          "tags": [
            "shiv"
          ],
          "bonus": 0.5
        }
      ]
    },
    "TWISTED_FUNNEL": {
      "id": "Twisted Funnel",
      "tier": "B",
      "char": "silent",
      "rarity": "uncommon",
      "syn": [
        "poison"
      ],
      "notes": "Apply 4 Poison to ALL enemies at combat start.",
      "builds": [
        "poison"
      ],
      "scoreEffects": [
        {
          "tags": [
            "poison"
          ],
          "bonus": 1.2
        }
      ]
    },
    "GALACTIC_DUST": {
      "id": "Galactic Dust",
      "tier": "C",
      "char": "regent",
      "rarity": "uncommon",
      "syn": [
        "block",
        "stars"
      ],
      "notes": "Every 10 Stars spent: gain 10 Block.",
      "builds": [
        "stars"
      ],
      "scoreEffects": [
        {
          "tags": [
            "stars",
            "star_gain"
          ],
          "bonus": 0.7
        }
      ]
    },
    "REGALITE": {
      "id": "Regalite",
      "tier": "D",
      "char": "regent",
      "rarity": "uncommon",
      "syn": [
        "block"
      ],
      "notes": "Gain 2 Block whenever you create a Colorless card. Niche unless running Colorless-creation.",
      "builds": [
        "stars"
      ],
      "scoreEffects": [
        {
          "tags": [
            "stars"
          ],
          "bonus": 0.3
        }
      ]
    },
    "BOOK_REPAIR_KNIFE": {
      "id": "Book Repair Knife",
      "tier": "D",
      "char": "necrobinder",
      "rarity": "uncommon",
      "syn": [
        "healing"
      ],
      "notes": "Heal 3 HP when non-Minion enemy dies to Doom. Niche healing.",
      "builds": [
        "doom"
      ],
      "scoreEffects": [
        {
          "tags": [
            "doom"
          ],
          "bonus": 0.6
        }
      ]
    },
    "FUNERARY_MASK": {
      "id": "Funerary Mask",
      "tier": "S",
      "char": "necrobinder",
      "rarity": "uncommon",
      "syn": [
        "soul",
        "draw"
      ],
      "notes": "Add 3 Souls to Draw Pile at combat start. Core Soul relic — free Souls every fight.",
      "builds": [
        "soul",
        "osty"
      ],
      "scoreEffects": [
        {
          "tags": [
            "soul",
            "soul_payoff"
          ],
          "bonus": 1.6
        },
        {
          "tags": [
            "draw"
          ],
          "bonus": 0.4
        }
      ]
    },
    "GOLD_PLATED_CABLES": {
      "id": "Gold-Plated Cables",
      "tier": "C",
      "char": "defect",
      "rarity": "uncommon",
      "syn": [
        "orb"
      ],
      "notes": "Rightmost Orb triggers passive an extra time each turn.",
      "builds": [
        "orb"
      ],
      "scoreEffects": [
        {
          "tags": [
            "orb"
          ],
          "bonus": 0.9
        }
      ]
    },
    "SYMBIOTIC_VIRUS": {
      "id": "Symbiotic Virus",
      "tier": "B",
      "char": "defect",
      "rarity": "uncommon",
      "syn": [
        "orb",
        "dark"
      ],
      "notes": "Channel 1 Dark at combat start.",
      "builds": [
        "orb"
      ],
      "scoreEffects": [
        {
          "tags": [
            "orb",
            "dark"
          ],
          "bonus": 0.7
        }
      ]
    },
    "ART_OF_WAR": {
      "id": "Art of War",
      "tier": "A",
      "char": "any",
      "rarity": "rare",
      "syn": [
        "energy_gain"
      ],
      "notes": "No Attacks this turn: gain +1 Energy next turn. Rewards Skill-only turns.",
      "builds": [
        "sly",
        "stars",
        "exhaust"
      ],
      "scoreEffects": [
        {
          "tags": [
            "power",
            "sly"
          ],
          "bonus": 0.4
        },
        {
          "tags": [
            "exhaust"
          ],
          "bonus": 0.3
        }
      ]
    },
    "BEATING_REMNANT": {
      "id": "Beating Remnant",
      "tier": "C",
      "char": "any",
      "rarity": "rare",
      "syn": [],
      "notes": "Cannot lose more than 20 HP in a single turn. One-shot prevention.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "CAPTAINS_WHEEL": {
      "id": "Captain's Wheel",
      "tier": "A",
      "char": "any",
      "rarity": "rare",
      "syn": [
        "block"
      ],
      "notes": "Gain 18 Block at start of Turn 3.",
      "builds": [
        "block",
        "poison",
        "doom",
        "stars",
        "any"
      ],
      "scoreEffects": [
        {
          "tags": [
            "block"
          ],
          "bonus": 0.4
        }
      ]
    },
    "CHANDELIER": {
      "id": "Chandelier",
      "tier": "B",
      "char": "any",
      "rarity": "rare",
      "syn": [
        "energy_gain"
      ],
      "notes": "Gain 3 Energy at start of Turn 3.",
      "builds": [
        "stars",
        "orb",
        "doom",
        "strength",
        "any"
      ],
      "scoreEffects": [
        {
          "tags": [
            "energy_gain",
            "x_cost"
          ],
          "bonus": 0.6
        },
        {
          "tags": [
            "power"
          ],
          "bonus": 0.4
        }
      ]
    },
    "CLOAK_CLASP": {
      "id": "Cloak Clasp",
      "tier": "B",
      "char": "any",
      "rarity": "rare",
      "syn": [
        "block"
      ],
      "notes": "Gain 1 Block per card in Hand at turn end.",
      "builds": [
        "block",
        "sly"
      ],
      "scoreEffects": [
        {
          "tags": [
            "block",
            "block_conversion"
          ],
          "bonus": 0.8
        },
        {
          "tags": [
            "draw"
          ],
          "bonus": 0.3
        }
      ]
    },
    "FROZEN_EGG": {
      "id": "Frozen Egg",
      "tier": "A",
      "char": "any",
      "rarity": "rare",
      "syn": [
        "upgrade"
      ],
      "notes": "Any Power added to deck is auto-Upgraded.",
      "builds": [
        "orb",
        "exhaust",
        "stars",
        "osty"
      ],
      "scoreEffects": [
        {
          "tags": [
            "power"
          ],
          "bonus": 1.1
        }
      ]
    },
    "GAMBLING_CHIP": {
      "id": "Gambling Chip",
      "tier": "S",
      "char": "any",
      "rarity": "rare",
      "syn": [
        "draw"
      ],
      "notes": "Start combat: discard any cards then draw that many. Perfect hand setup.",
      "builds": [
        "sly",
        "claw",
        "stars",
        "any"
      ],
      "scoreEffects": [
        {
          "tags": [
            "draw",
            "scaling"
          ],
          "bonus": 0.5
        },
        {
          "tags": [
            "sly"
          ],
          "bonus": 0.4
        }
      ]
    },
    "GAME_PIECE": {
      "id": "Game Piece",
      "tier": "B",
      "char": "any",
      "rarity": "rare",
      "syn": [
        "draw"
      ],
      "notes": "Play a Power: draw 1 card.",
      "builds": [
        "orb",
        "exhaust",
        "stars"
      ],
      "scoreEffects": [
        {
          "tags": [
            "power"
          ],
          "bonus": 0.9
        }
      ]
    },
    "GIRYA": {
      "id": "Girya",
      "tier": "B",
      "char": "any",
      "rarity": "rare",
      "syn": [
        "strength"
      ],
      "notes": "Can gain Strength at Rest Sites (3 max).",
      "builds": [
        "strength"
      ],
      "scoreEffects": [
        {
          "tags": [
            "strength",
            "damage"
          ],
          "bonus": 0.3
        }
      ]
    },
    "ICE_CREAM": {
      "id": "Ice Cream",
      "tier": "S",
      "char": "any",
      "rarity": "rare",
      "syn": [
        "energy_gain"
      ],
      "notes": "Energy is conserved between turns. Unused Energy carries over — game-changing.",
      "builds": [
        "stars",
        "orb",
        "doom",
        "any"
      ],
      "scoreEffects": [
        {
          "tags": [
            "energy_gain",
            "x_cost"
          ],
          "bonus": 0.7
        },
        {
          "tags": [
            "power"
          ],
          "bonus": 0.5
        },
        {
          "tags": [
            "doom"
          ],
          "bonus": 0.4
        }
      ]
    },
    "INTIMIDATING_HELMET": {
      "id": "Intimidating Helmet",
      "tier": "D",
      "char": "any",
      "rarity": "rare",
      "syn": [
        "block"
      ],
      "notes": "Play a 2+ Energy card: gain 4 Block. Only good if you play many expensive cards.",
      "builds": [
        "stars",
        "strike",
        "doom"
      ],
      "scoreEffects": []
    },
    "KUNAI": {
      "id": "Kunai",
      "tier": "B",
      "char": "any",
      "rarity": "rare",
      "syn": [
        "dexterity",
        "block"
      ],
      "notes": "Every 3 Attacks: gain 1 permanent Dexterity.",
      "builds": [
        "claw",
        "shiv",
        "strength",
        "sly"
      ],
      "scoreEffects": [
        {
          "tags": [
            "damage"
          ],
          "bonus": 0.6
        },
        {
          "tags": [
            "shiv",
            "shiv_synergy"
          ],
          "bonus": 0.5
        },
        {
          "tags": [
            "block"
          ],
          "bonus": 0.3
        },
        {
          "tags": [
            "sly"
          ],
          "bonus": 0.5
        }
      ]
    },
    "LASTING_CANDY": {
      "id": "Lasting Candy",
      "tier": "B",
      "char": "any",
      "rarity": "rare",
      "syn": [],
      "notes": "Every other combat: extra Power in card rewards.",
      "builds": [
        "orb",
        "exhaust",
        "stars"
      ],
      "scoreEffects": [
        {
          "tags": [
            "power"
          ],
          "bonus": 0.6
        }
      ]
    },
    "LIZARD_TAIL": {
      "id": "Lizard Tail",
      "tier": "S",
      "char": "any",
      "rarity": "rare",
      "syn": [],
      "notes": "When you would die: heal to 50% Max HP instead. One-time death save.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "MANGO": {
      "id": "Mango",
      "tier": "S",
      "char": "any",
      "rarity": "rare",
      "syn": [
        "max_hp"
      ],
      "notes": "Raise Max HP by 14. Largest single HP gain relic.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "MEAT_ON_THE_BONE": {
      "id": "Meat on the Bone",
      "tier": "A",
      "char": "any",
      "rarity": "rare",
      "syn": [
        "healing"
      ],
      "notes": "Below 50% HP at end of combat: heal 12.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "MOLTEN_EGG": {
      "id": "Molten Egg",
      "tier": "S",
      "char": "any",
      "rarity": "rare",
      "syn": [
        "upgrade"
      ],
      "notes": "Any Attack added to deck is auto-Upgraded.",
      "builds": [
        "strength",
        "claw",
        "shiv",
        "strike"
      ],
      "scoreEffects": [
        {
          "tags": [
            "damage",
            "multi_hit",
            "strike"
          ],
          "bonus": 1.1
        }
      ]
    },
    "MUMMIFIED_HAND": {
      "id": "Mummified Hand",
      "tier": "A",
      "char": "any",
      "rarity": "rare",
      "syn": [
        "energy_gain"
      ],
      "notes": "Play a Power: a random Hand card costs 0 this turn.",
      "builds": [
        "orb",
        "exhaust",
        "stars",
        "osty"
      ],
      "scoreEffects": [
        {
          "tags": [
            "power"
          ],
          "bonus": 1.0
        }
      ]
    },
    "OLD_COIN": {
      "id": "Old Coin",
      "tier": "B",
      "char": "any",
      "rarity": "rare",
      "syn": [
        "gold"
      ],
      "notes": "Gain 300 Gold on pickup.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "POCKETWATCH": {
      "id": "Pocketwatch",
      "tier": "A",
      "char": "any",
      "rarity": "rare",
      "syn": [
        "draw"
      ],
      "notes": "Play 3 or fewer cards: draw 3 extra next turn.",
      "builds": [
        "doom",
        "stars"
      ],
      "scoreEffects": [
        {
          "tags": [
            "doom"
          ],
          "bonus": 0.7
        },
        {
          "tags": [
            "stars"
          ],
          "bonus": 0.4
        }
      ]
    },
    "PRAYER_WHEEL": {
      "id": "Prayer Wheel",
      "tier": "A",
      "char": "any",
      "rarity": "rare",
      "syn": [],
      "notes": "Normal enemies drop an extra card reward.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "RAINBOW_RING": {
      "id": "Rainbow Ring",
      "tier": "C",
      "char": "any",
      "rarity": "rare",
      "syn": [
        "strength",
        "dexterity"
      ],
      "notes": "First time you play Attack+Skill+Power each turn: +1 Strength and Dexterity.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "RAZOR_TOOTH": {
      "id": "Razor Tooth",
      "tier": "S",
      "char": "any",
      "rarity": "rare",
      "syn": [
        "upgrade"
      ],
      "notes": "Every Attack or Skill you play is Upgraded for the rest of combat.",
      "builds": [
        "strength",
        "claw",
        "sly"
      ],
      "scoreEffects": [
        {
          "tags": [
            "damage",
            "block",
            "sly"
          ],
          "bonus": 0.7
        },
        {
          "tags": [
            "multi_hit"
          ],
          "bonus": 0.5
        }
      ]
    },
    "SHOVEL": {
      "id": "Shovel",
      "tier": "A",
      "char": "any",
      "rarity": "rare",
      "syn": [],
      "notes": "Can dig at Rest Sites for a random Relic.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "SHURIKEN": {
      "id": "Shuriken",
      "tier": "B",
      "char": "any",
      "rarity": "rare",
      "syn": [
        "strength"
      ],
      "notes": "Every 3 Attacks: gain 1 permanent Strength.",
      "builds": [
        "claw",
        "shiv",
        "strength",
        "sly"
      ],
      "scoreEffects": [
        {
          "tags": [
            "damage"
          ],
          "bonus": 0.7
        },
        {
          "tags": [
            "shiv",
            "shiv_synergy"
          ],
          "bonus": 0.6
        },
        {
          "tags": [
            "multi_hit"
          ],
          "bonus": 0.5
        },
        {
          "tags": [
            "sly"
          ],
          "bonus": 0.5
        }
      ]
    },
    "STONE_CALENDAR": {
      "id": "Stone Calendar",
      "tier": "A",
      "char": "any",
      "rarity": "rare",
      "syn": [
        "aoe",
        "damage"
      ],
      "notes": "End of Turn 7: deal 52 AoE. Fight-winning AoE if you survive to T7.",
      "builds": [
        "doom",
        "any"
      ],
      "scoreEffects": [
        {
          "tags": [
            "doom"
          ],
          "bonus": 0.5
        }
      ]
    },
    "STURDY_CLAMP": {
      "id": "Sturdy Clamp",
      "tier": "A",
      "char": "any",
      "rarity": "rare",
      "syn": [
        "block"
      ],
      "notes": "Up to 10 Block persists across turns. Mini-Barricade for any character.",
      "builds": [
        "block",
        "stars"
      ],
      "scoreEffects": [
        {
          "tags": [
            "block"
          ],
          "bonus": 0.6
        }
      ]
    },
    "THE_COURIER": {
      "id": "The Courier",
      "tier": "B",
      "char": "any",
      "rarity": "rare",
      "syn": [
        "gold"
      ],
      "notes": "Merchant never runs out + 20% discount.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "TOXIC_EGG": {
      "id": "Toxic Egg",
      "tier": "S",
      "char": "any",
      "rarity": "rare",
      "syn": [
        "upgrade"
      ],
      "notes": "Any Skill added to deck is auto-Upgraded.",
      "builds": [
        "sly",
        "exhaust",
        "stars",
        "soul"
      ],
      "scoreEffects": [
        {
          "tags": [
            "power",
            "block"
          ],
          "bonus": 1.1
        },
        {
          "tags": [
            "sly",
            "exhaust"
          ],
          "bonus": 0.6
        }
      ]
    },
    "TUNGSTEN_ROD": {
      "id": "Tungsten Rod",
      "tier": "A",
      "char": "any",
      "rarity": "rare",
      "syn": [],
      "notes": "Lose 1 less HP whenever you would take HP loss.",
      "builds": [
        "self_damage",
        "any"
      ],
      "scoreEffects": [
        {
          "tags": [
            "self_damage"
          ],
          "bonus": 0.3
        }
      ]
    },
    "UNCEASING_TOP": {
      "id": "Unceasing Top",
      "tier": "B",
      "char": "any",
      "rarity": "rare",
      "syn": [
        "draw"
      ],
      "notes": "Empty hand during your turn: draw a card.",
      "builds": [
        "claw",
        "sly"
      ],
      "scoreEffects": [
        {
          "tags": [
            "zero_cost",
            "claw"
          ],
          "bonus": 0.8
        },
        {
          "tags": [
            "draw"
          ],
          "bonus": 0.4
        }
      ]
    },
    "UNSETTLING_LAMP": {
      "id": "Unsettling Lamp",
      "tier": "A",
      "char": "any",
      "rarity": "rare",
      "syn": [
        "debuff"
      ],
      "notes": "First debuff per combat doubles its effect.",
      "builds": [
        "poison",
        "doom",
        "sly"
      ],
      "scoreEffects": [
        {
          "tags": [
            "poison"
          ],
          "bonus": 1.0
        },
        {
          "tags": [
            "weak",
            "vulnerable",
            "debuff"
          ],
          "bonus": 0.9
        },
        {
          "tags": [
            "doom"
          ],
          "bonus": 0.6
        }
      ]
    },
    "VEXING_PUZZLEBOX": {
      "id": "Vexing Puzzlebox",
      "tier": "B",
      "char": "any",
      "rarity": "rare",
      "syn": [],
      "notes": "Start combat: add a random free card to Hand.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "WHITE_BEAST_STATUE": {
      "id": "White Beast Statue",
      "tier": "B",
      "char": "any",
      "rarity": "rare",
      "syn": [],
      "notes": "Potions always appear in combat rewards.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "WHITE_STAR": {
      "id": "White Star",
      "tier": "A",
      "char": "any",
      "rarity": "rare",
      "syn": [],
      "notes": "Elites drop an extra Rare card.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "CHARONS_ASHES": {
      "id": "Charon's Ashes",
      "tier": "A",
      "char": "ironclad",
      "rarity": "rare",
      "syn": [
        "exhaust",
        "aoe",
        "damage"
      ],
      "notes": "Exhaust a card: deal 3 AoE. In Exhaust builds, every Exhaust becomes free AoE.",
      "builds": [
        "exhaust"
      ],
      "scoreEffects": [
        {
          "tags": [
            "exhaust"
          ],
          "bonus": 1.5
        },
        {
          "tags": [
            "power"
          ],
          "bonus": 0.5
        }
      ]
    },
    "DEMON_TONGUE": {
      "id": "Demon Tongue",
      "tier": "B",
      "char": "ironclad",
      "rarity": "rare",
      "syn": [
        "healing",
        "self_damage"
      ],
      "notes": "First HP loss per turn: heal equal amount. Pairs with Bloodletting for free heals.",
      "builds": [
        "self_damage"
      ],
      "scoreEffects": [
        {
          "tags": [
            "self_damage"
          ],
          "bonus": 1.2
        }
      ]
    },
    "RUINED_HELMET": {
      "id": "Ruined Helmet",
      "tier": "C",
      "char": "ironclad",
      "rarity": "rare",
      "syn": [
        "strength"
      ],
      "notes": "First Strength gain per combat: doubled. Usually +2 extra Strength.",
      "builds": [
        "strength"
      ],
      "scoreEffects": [
        {
          "tags": [
            "strength"
          ],
          "bonus": 0.8
        },
        {
          "tags": [
            "damage",
            "multi_hit"
          ],
          "bonus": 0.4
        }
      ]
    },
    "HELICAL_DART": {
      "id": "Helical Dart",
      "tier": "C",
      "char": "silent",
      "rarity": "rare",
      "syn": [
        "dexterity",
        "shiv"
      ],
      "notes": "Play a Shiv: gain 1 Dexterity this turn.",
      "builds": [
        "shiv"
      ],
      "scoreEffects": [
        {
          "tags": [
            "shiv",
            "shiv_synergy"
          ],
          "bonus": 0.9
        },
        {
          "tags": [
            "block"
          ],
          "bonus": 0.4
        }
      ]
    },
    "PAPER_KRANE": {
      "id": "Paper Krane",
      "tier": "B",
      "char": "silent",
      "rarity": "rare",
      "syn": [
        "weak",
        "block"
      ],
      "notes": "Weak enemies deal 40% less damage (not 25%). Massive damage reduction from Weak.",
      "builds": [
        "sly",
        "poison",
        "shiv"
      ],
      "scoreEffects": [
        {
          "tags": [
            "weak"
          ],
          "bonus": 0.9
        },
        {
          "tags": [
            "debuff"
          ],
          "bonus": 0.5
        }
      ]
    },
    "TOUGH_BANDAGES": {
      "id": "Tough Bandages",
      "tier": "B",
      "char": "silent",
      "rarity": "rare",
      "syn": [
        "block",
        "discard"
      ],
      "notes": "Discard a card during turn: gain 3 Block. Sly builds discard constantly.",
      "builds": [
        "sly",
        "shiv"
      ],
      "scoreEffects": [
        {
          "tags": [
            "sly",
            "discard"
          ],
          "bonus": 1.0
        },
        {
          "tags": [
            "shiv"
          ],
          "bonus": 0.4
        }
      ]
    },
    "LUNAR_PASTRY": {
      "id": "Lunar Pastry",
      "tier": "A",
      "char": "regent",
      "rarity": "rare",
      "syn": [
        "stars",
        "star_gain"
      ],
      "notes": "Gain 1 Star at end of each turn. Passive Star generation every turn.",
      "builds": [
        "stars"
      ],
      "scoreEffects": [
        {
          "tags": [
            "stars",
            "star_gain"
          ],
          "bonus": 1.1
        }
      ]
    },
    "MINI_REGENT": {
      "id": "Mini Regent",
      "tier": "C",
      "char": "regent",
      "rarity": "rare",
      "syn": [
        "strength",
        "stars"
      ],
      "notes": "First Star spent per turn: gain 1 Strength.",
      "builds": [
        "stars"
      ],
      "scoreEffects": [
        {
          "tags": [
            "stars"
          ],
          "bonus": 0.6
        },
        {
          "tags": [
            "strength",
            "damage"
          ],
          "bonus": 0.3
        }
      ]
    },
    "ORANGE_DOUGH": {
      "id": "Orange Dough",
      "tier": "B",
      "char": "regent",
      "rarity": "rare",
      "syn": [
        "colorless"
      ],
      "notes": "Add 2 random Colorless cards to Hand at combat start.",
      "builds": [
        "stars",
        "forge"
      ],
      "scoreEffects": [
        {
          "tags": [
            "stars"
          ],
          "bonus": 0.4
        }
      ]
    },
    "BIG_HAT": {
      "id": "Big Hat",
      "tier": "A",
      "char": "necrobinder",
      "rarity": "rare",
      "syn": [
        "ethereal",
        "draw"
      ],
      "notes": "Add 2 random Ethereal cards to Hand at combat start.",
      "builds": [
        "soul",
        "doom"
      ],
      "scoreEffects": [
        {
          "tags": [
            "soul"
          ],
          "bonus": 0.6
        },
        {
          "tags": [
            "doom"
          ],
          "bonus": 0.4
        },
        {
          "tags": [
            "ethereal"
          ],
          "bonus": 0.4
        }
      ]
    },
    "BOOKMARK": {
      "id": "Bookmark",
      "tier": "C",
      "char": "necrobinder",
      "rarity": "rare",
      "syn": [],
      "notes": "End of turn: lower cost of random Retained card by 1.",
      "builds": [
        "osty",
        "soul"
      ],
      "scoreEffects": [
        {
          "tags": [
            "retain"
          ],
          "bonus": 0.5
        },
        {
          "tags": [
            "osty"
          ],
          "bonus": 0.4
        }
      ]
    },
    "IVORY_TILE": {
      "id": "Ivory Tile",
      "tier": "C",
      "char": "necrobinder",
      "rarity": "rare",
      "syn": [
        "energy_gain"
      ],
      "notes": "Play a 3+ Energy card: gain Energy.",
      "builds": [
        "doom"
      ],
      "scoreEffects": [
        {
          "tags": [
            "doom"
          ],
          "bonus": 0.6
        },
        {
          "tags": [
            "energy_gain"
          ],
          "bonus": 0.3
        }
      ]
    },
    "EMOTION_CHIP": {
      "id": "Emotion Chip",
      "tier": "C",
      "char": "defect",
      "rarity": "rare",
      "syn": [
        "orb"
      ],
      "notes": "Took HP damage last turn: trigger all Orb passives at turn start.",
      "builds": [
        "orb"
      ],
      "scoreEffects": [
        {
          "tags": [
            "orb"
          ],
          "bonus": 0.9
        }
      ]
    },
    "METRONOME": {
      "id": "Metronome",
      "tier": "C",
      "char": "defect",
      "rarity": "rare",
      "syn": [
        "orb",
        "aoe",
        "damage"
      ],
      "notes": "Channel 7 Orbs per combat: deal 30 AoE. Milestone reward for heavy channeling.",
      "builds": [
        "orb"
      ],
      "scoreEffects": [
        {
          "tags": [
            "orb"
          ],
          "bonus": 0.8
        }
      ]
    },
    "POWER_CELL": {
      "id": "Power Cell",
      "tier": "C",
      "char": "defect",
      "rarity": "rare",
      "syn": [
        "draw",
        "zero_cost"
      ],
      "notes": "Add 2 zero-cost Draw Pile cards to Hand at combat start.",
      "builds": [
        "claw",
        "orb"
      ],
      "scoreEffects": [
        {
          "tags": [
            "zero_cost",
            "claw"
          ],
          "bonus": 1.0
        },
        {
          "tags": [
            "orb"
          ],
          "bonus": 0.4
        }
      ]
    },
    "ARCANE_SCROLL": {
      "id": "Arcane Scroll",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Obtain a random Rare Card on pickup.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "BOOMING_CONCH": {
      "id": "Booming Conch",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "draw"
      ],
      "notes": "Draw 2 extra cards at start of Elite combats.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "CURSED_PEARL": {
      "id": "Cursed Pearl",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "gold"
      ],
      "notes": "Receive Greed curse + 333 Gold.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "GOLDEN_PEARL": {
      "id": "Golden Pearl",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "gold"
      ],
      "notes": "Gain 150 Gold on pickup.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "LARGE_CAPSULE": {
      "id": "Large Capsule",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Obtain 2 random Relics. Add an extra Strike and Defend.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "LAVA_ROCK": {
      "id": "Lava Rock",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Act 1 Boss drops 2 Relics.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "LEAD_PAPERWEIGHT": {
      "id": "Lead Paperweight",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Choose 1 of 2 Colorless cards to add to deck.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "LEAFY_POULTICE": {
      "id": "Leafy Poultice",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Transform 1 Strike and 1 Defend; lose 10 Max HP.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "LOST_COFFER": {
      "id": "Lost Coffer",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Gain 1 card reward and 1 random potion.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "MASSIVE_SCROLL": {
      "id": "Massive Scroll",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Choose 1 of 3 Multiplayer Colorless Cards.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "NEOWS_TORMENT": {
      "id": "Neow's Torment",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Add 1 Neow's Fury to deck.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "NEW_LEAF": {
      "id": "New Leaf",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Transform 1 card.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "NUTRITIOUS_OYSTER": {
      "id": "Nutritious Oyster",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "max_hp"
      ],
      "notes": "Raise Max HP by 11.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "POMANDER": {
      "id": "Pomander",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "upgrade"
      ],
      "notes": "Upgrade a card.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "PRECARIOUS_SHEARS": {
      "id": "Precarious Shears",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Remove 2 cards from deck; take 13 damage.",
      "builds": [
        "sly",
        "claw"
      ],
      "scoreEffects": []
    },
    "PRECISE_SCISSORS": {
      "id": "Precise Scissors",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Remove 1 card from deck.",
      "builds": [
        "sly",
        "claw"
      ],
      "scoreEffects": []
    },
    "SCROLL_BOXES": {
      "id": "Scroll Boxes",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Lose all Gold; choose 1 of 2 card packs.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "SILVER_CRUCIBLE": {
      "id": "Silver Crucible",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "upgrade"
      ],
      "notes": "First 3 card rewards Upgraded. First Treasure Chest empty.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "SMALL_CAPSULE": {
      "id": "Small Capsule",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Obtain a random Relic.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "STONE_HUMIDIFIER": {
      "id": "Stone Humidifier",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "max_hp"
      ],
      "notes": "Gain 5 Max HP whenever you Rest.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "ALCHEMICAL_COFFER": {
      "id": "Alchemical Coffer",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Gain 4 potion slots filled with random potions.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "ARCHAIC_TOOTH": {
      "id": "Archaic Tooth",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Transform a starter card with an ancient version.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "DRIFTWOOD": {
      "id": "Driftwood",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Reroll each card reward once.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "ELECTRIC_SHRYMP": {
      "id": "Electric Shrymp",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "upgrade"
      ],
      "notes": "Enchant a Skill with Imbued.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "GLASS_EYE": {
      "id": "Glass Eye",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Obtain 2 Common, 2 Uncommon, 1 Rare card.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "PRISMATIC_GEM": {
      "id": "Prismatic Gem",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "energy_gain"
      ],
      "notes": "Gain Energy each turn. Card rewards contain other character cards.",
      "builds": [
        "stars",
        "orb",
        "any"
      ],
      "scoreEffects": [
        {
          "tags": [
            "energy_gain"
          ],
          "bonus": 0.3
        }
      ]
    },
    "RADIANT_PEARL": {
      "id": "Radiant Pearl",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Add 1 Luminesce to Hand at combat start.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "SAND_CASTLE": {
      "id": "Sand Castle",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "upgrade"
      ],
      "notes": "Upgrade 6 random cards on pickup.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "SEA_GLASS": {
      "id": "Sea Glass",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "See 15 cards from another character; choose any to add.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "TOUCH_OF_OROBAS": {
      "id": "Touch of Orobas",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Replace starter Relic with an Ancient version.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "PAELS_BLOOD": {
      "id": "Pael's Blood",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "draw"
      ],
      "notes": "Draw 1 extra card at turn start.",
      "builds": [
        "any"
      ],
      "scoreEffects": [
        {
          "tags": [
            "draw"
          ],
          "bonus": 0.2
        }
      ]
    },
    "PAELS_CLAW": {
      "id": "Pael's Claw",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Enchant all Defends with Goopy on pickup.",
      "builds": [
        "block"
      ],
      "scoreEffects": []
    },
    "PAELS_EYE": {
      "id": "Pael's Eye",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "First time per combat you end turn without playing: Exhaust Hand and take extra turn.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "PAELS_FLESH": {
      "id": "Pael's Flesh",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "energy_gain"
      ],
      "notes": "Gain extra Energy at Turn 3 start and every turn after.",
      "builds": [
        "stars",
        "orb",
        "doom",
        "any"
      ],
      "scoreEffects": [
        {
          "tags": [
            "energy_gain",
            "x_cost"
          ],
          "bonus": 0.8
        },
        {
          "tags": [
            "power"
          ],
          "bonus": 0.5
        }
      ]
    },
    "PAELS_GROWTH": {
      "id": "Pael's Growth",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Enchant a card with Clone on pickup.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "PAELS_HORN": {
      "id": "Pael's Horn",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Add 2 Relax to deck on pickup.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "PAELS_LEGION": {
      "id": "Pael's Legion",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "block"
      ],
      "notes": "Doubles Block from a card, then sleeps for 2 turns.",
      "builds": [
        "block",
        "stars"
      ],
      "scoreEffects": [
        {
          "tags": [
            "block",
            "block_conversion"
          ],
          "bonus": 1.0
        }
      ]
    },
    "PAELS_TEARS": {
      "id": "Pael's Tears",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "energy_gain"
      ],
      "notes": "End turn with unspent Energy: gain 2 extra Energy next turn.",
      "builds": [
        "stars",
        "doom"
      ],
      "scoreEffects": [
        {
          "tags": [
            "energy_gain"
          ],
          "bonus": 0.5
        }
      ]
    },
    "PAELS_TOOTH": {
      "id": "Pael's Tooth",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Remove 5 cards from deck. After each combat, add 1 back Upgraded.",
      "builds": [
        "sly",
        "claw"
      ],
      "scoreEffects": []
    },
    "PAELS_WING": {
      "id": "Pael's Wing",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Sacrifice card rewards to Pael; every 2 sacrifices, obtain a Relic.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "BIIIG_HUG": {
      "id": "Biiig Hug",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Remove 4 cards from deck. Each shuffle adds a Soot.",
      "builds": [
        "sly",
        "claw"
      ],
      "scoreEffects": []
    },
    "GOLDEN_COMPASS": {
      "id": "Golden Compass",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Replace Act 2 Map with a single special path.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "NUTRITIOUS_SOUP": {
      "id": "Nutritious Soup",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Enchant all Strikes with Tezcatara's Ember.",
      "builds": [
        "strike",
        "strength"
      ],
      "scoreEffects": []
    },
    "PUMPKIN_CANDLE": {
      "id": "Pumpkin Candle",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "energy_gain"
      ],
      "notes": "Gain Energy each turn. Extinguishes at Act 3.",
      "builds": [
        "stars",
        "orb",
        "doom"
      ],
      "scoreEffects": [
        {
          "tags": [
            "energy_gain"
          ],
          "bonus": 0.4
        }
      ]
    },
    "SEAL_OF_GOLD": {
      "id": "Seal of Gold",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "energy_gain"
      ],
      "notes": "Start of turn: spend 5 Gold to gain Energy.",
      "builds": [
        "stars",
        "orb"
      ],
      "scoreEffects": []
    },
    "STORYBOOK": {
      "id": "Storybook",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Add 1 Brightest Flame to deck.",
      "builds": [
        "stars",
        "orb",
        "any"
      ],
      "scoreEffects": []
    },
    "TOASTY_MITTENS": {
      "id": "Toasty Mittens",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "exhaust",
        "strength"
      ],
      "notes": "Start of turn: Exhaust top Draw card + gain 1 Strength.",
      "builds": [
        "exhaust",
        "strength"
      ],
      "scoreEffects": [
        {
          "tags": [
            "exhaust"
          ],
          "bonus": 0.4
        },
        {
          "tags": [
            "strength"
          ],
          "bonus": 0.3
        }
      ]
    },
    "TOY_BOX": {
      "id": "Toy Box",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Obtain 4 Wax Relics. Every 3 combats, leftmost Wax melts.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "VERY_HOT_COCOA": {
      "id": "Very Hot Cocoa",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "energy_gain"
      ],
      "notes": "Start each combat with +4 Energy.",
      "builds": [
        "stars",
        "orb",
        "doom"
      ],
      "scoreEffects": [
        {
          "tags": [
            "energy_gain",
            "x_cost",
            "power"
          ],
          "bonus": 0.9
        },
        {
          "tags": [
            "doom"
          ],
          "bonus": 0.5
        }
      ]
    },
    "YUMMY_COOKIE": {
      "id": "Yummy Cookie",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "upgrade"
      ],
      "notes": "Upgrade 4 cards on pickup.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "BEAUTIFUL_BRACELET": {
      "id": "Beautiful Bracelet",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "upgrade"
      ],
      "notes": "Enchant 3 chosen Deck cards with Swift 3.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "BLESSED_ANTLER": {
      "id": "Blessed Antler",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "energy_gain"
      ],
      "notes": "Gain Energy each turn. Start each combat with 3 Dazed shuffled in.",
      "builds": [
        "stars",
        "orb",
        "doom"
      ],
      "scoreEffects": [
        {
          "tags": [
            "energy_gain"
          ],
          "bonus": 0.3
        }
      ]
    },
    "BRILLIANT_SCARF": {
      "id": "Brilliant Scarf",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "energy_gain"
      ],
      "notes": "The 5th card you play each turn is free.",
      "builds": [
        "claw",
        "sly"
      ],
      "scoreEffects": [
        {
          "tags": [
            "zero_cost"
          ],
          "bonus": 0.4
        },
        {
          "tags": [
            "claw",
            "sly"
          ],
          "bonus": 0.3
        }
      ]
    },
    "DELICATE_FROND": {
      "id": "Delicate Frond",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Fill all empty potion slots at combat start.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "DIAMOND_DIADEM": {
      "id": "Diamond Diadem",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "block"
      ],
      "notes": "Play 2 or fewer cards in a turn: take half damage.",
      "builds": [
        "doom",
        "stars"
      ],
      "scoreEffects": [
        {
          "tags": [
            "doom"
          ],
          "bonus": 0.8
        }
      ]
    },
    "FUR_COAT": {
      "id": "Fur Coat",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Mark 7 random combats. Enemies in those rooms have 1 HP.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "GLITTER": {
      "id": "Glitter",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Enchant all card rewards with Glam.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "JEWELRY_BOX": {
      "id": "Jewelry Box",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Add 1 Apotheosis to deck.",
      "builds": [
        "orb",
        "exhaust",
        "stars",
        "strength",
        "any"
      ],
      "scoreEffects": []
    },
    "LOOMING_FRUIT": {
      "id": "Looming Fruit",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "max_hp"
      ],
      "notes": "Raise Max HP by 31.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "SIGNET_RING": {
      "id": "Signet Ring",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "gold"
      ],
      "notes": "Gain 999 Gold on pickup.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "CLAWS": {
      "id": "Claws",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Transform up to 6 cards into Maul.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "CROSSBOW": {
      "id": "Crossbow",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "draw",
        "damage"
      ],
      "notes": "Add a free 0-cost random Attack to Hand at turn start.",
      "builds": [
        "claw",
        "strength"
      ],
      "scoreEffects": [
        {
          "tags": [
            "claw",
            "damage"
          ],
          "bonus": 0.5
        }
      ]
    },
    "IRON_CLUB": {
      "id": "Iron Club",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "draw"
      ],
      "notes": "Every 4 cards played: draw 1 card.",
      "builds": [
        "claw",
        "shiv",
        "sly"
      ],
      "scoreEffects": [
        {
          "tags": [
            "zero_cost",
            "claw"
          ],
          "bonus": 0.8
        },
        {
          "tags": [
            "sly"
          ],
          "bonus": 0.6
        }
      ]
    },
    "MEAT_CLEAVER": {
      "id": "Meat Cleaver",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Can Cook at Rest Sites.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "SAI": {
      "id": "Sai",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "block"
      ],
      "notes": "Gain 7 Block at turn start.",
      "builds": [
        "block",
        "any"
      ],
      "scoreEffects": [
        {
          "tags": [
            "block"
          ],
          "bonus": 0.6
        }
      ]
    },
    "SPIKED_GAUNTLETS": {
      "id": "Spiked Gauntlets",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "energy_gain"
      ],
      "notes": "Gain Energy each turn. Powers cost 1 more.",
      "builds": [
        "strength",
        "claw"
      ],
      "scoreEffects": [
        {
          "tags": [
            "energy_gain"
          ],
          "bonus": 0.3
        },
        {
          "tags": [
            "power"
          ],
          "bonus": -0.3
        }
      ]
    },
    "TANXS_WHISTLE": {
      "id": "Tanx's Whistle",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Add 1 Whistle to deck.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "THROWING_AXE": {
      "id": "Throwing Axe",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "damage"
      ],
      "notes": "First card played each combat plays an extra time.",
      "builds": [
        "strength",
        "claw",
        "shiv"
      ],
      "scoreEffects": [
        {
          "tags": [
            "damage",
            "scaling"
          ],
          "bonus": 0.4
        }
      ]
    },
    "TRI_BOOMERANG": {
      "id": "Tri-Boomerang",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Choose 3 Attacks in deck; Enchant them with Instinct.",
      "builds": [
        "strength",
        "claw",
        "shiv"
      ],
      "scoreEffects": []
    },
    "WAR_HAMMER": {
      "id": "War Hammer",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "upgrade"
      ],
      "notes": "Kill an Elite: Upgrade 4 random cards.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "BLOOD_SOAKED_ROSE": {
      "id": "Blood-Soaked Rose",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "energy_gain"
      ],
      "notes": "Add 1 Enthralled to deck. Gain Energy each turn.",
      "builds": [
        "stars",
        "orb",
        "doom"
      ],
      "scoreEffects": [
        {
          "tags": [
            "energy_gain"
          ],
          "bonus": 0.3
        }
      ]
    },
    "CHOICES_PARADOX": {
      "id": "Choices Paradox",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Add 1 of 5 random cards with Retain to Hand at combat start.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "DISTINGUISHED_CAPE": {
      "id": "Distinguished Cape",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Lose 9 Max HP. Add 3 Apparitions to deck.",
      "builds": [
        "doom",
        "stars",
        "any"
      ],
      "scoreEffects": []
    },
    "FIDDLE": {
      "id": "Fiddle",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "draw"
      ],
      "notes": "Draw 2 extra cards each turn. Cannot draw during your turn otherwise.",
      "builds": [
        "stars",
        "doom",
        "block"
      ],
      "scoreEffects": [
        {
          "tags": [
            "power",
            "scaling"
          ],
          "bonus": 0.3
        }
      ]
    },
    "JEWELED_MASK": {
      "id": "Jeweled Mask",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "power"
      ],
      "notes": "Start combat: put a free random Power from Draw Pile into Hand.",
      "builds": [
        "orb",
        "exhaust",
        "stars"
      ],
      "scoreEffects": [
        {
          "tags": [
            "power"
          ],
          "bonus": 0.6
        }
      ]
    },
    "LORDS_PARASOL": {
      "id": "Lord's Parasol",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "When you encounter the Merchant: obtain EVERYTHING he sells.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "MUSIC_BOX": {
      "id": "Music Box",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "damage"
      ],
      "notes": "Create Ethereal copy of first Attack each turn.",
      "builds": [
        "strength",
        "claw",
        "shiv"
      ],
      "scoreEffects": [
        {
          "tags": [
            "damage",
            "multi_hit"
          ],
          "bonus": 0.5
        }
      ]
    },
    "PRESERVED_FOG": {
      "id": "Preserved Fog",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Remove 5 cards from deck. Add Folly.",
      "builds": [
        "sly",
        "claw"
      ],
      "scoreEffects": []
    },
    "SERE_TALON": {
      "id": "Sere Talon",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Add 2 random Curses and 3 Wishes to deck.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "WHISPERING_EARRING": {
      "id": "Whispering Earring",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "energy_gain"
      ],
      "notes": "Gain Energy each turn. Vakuu plays your first turn for you.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "ASTROLABE": {
      "id": "Astrolabe",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "upgrade"
      ],
      "notes": "Transform 3 cards then Upgrade them.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "BLACK_STAR": {
      "id": "Black Star",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Elites drop an extra Relic when defeated.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "CALLING_BELL": {
      "id": "Calling Bell",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Obtain a unique Curse and 3 Relics.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "DUSTY_TOME": {
      "id": "Dusty Tome",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Obtain an Ancient Card.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "ECTOPLASM": {
      "id": "Ectoplasm",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "energy_gain"
      ],
      "notes": "Cannot gain Gold. Gain Energy each turn.",
      "builds": [
        "stars",
        "orb",
        "doom"
      ],
      "scoreEffects": [
        {
          "tags": [
            "energy_gain"
          ],
          "bonus": 0.4
        }
      ]
    },
    "EMPTY_CAGE": {
      "id": "Empty Cage",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Remove 2 cards from deck on pickup.",
      "builds": [
        "sly",
        "claw"
      ],
      "scoreEffects": []
    },
    "PANDORAS_BOX": {
      "id": "Pandora's Box",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [],
      "notes": "Transform ALL Strikes and Defends.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "PHILOSOPHERS_STONE": {
      "id": "Philosopher's Stone",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "energy_gain"
      ],
      "notes": "Gain Energy each turn. ALL enemies start with 1 Strength.",
      "builds": [
        "stars",
        "orb",
        "doom"
      ],
      "scoreEffects": [
        {
          "tags": [
            "energy_gain"
          ],
          "bonus": 0.3
        }
      ]
    },
    "RUNIC_PYRAMID": {
      "id": "Runic Pyramid",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "retain"
      ],
      "notes": "No hand discard at end of turn.",
      "builds": [
        "stars",
        "sly",
        "doom"
      ],
      "scoreEffects": [
        {
          "tags": [
            "retain",
            "scaling"
          ],
          "bonus": 0.6
        },
        {
          "tags": [
            "stars"
          ],
          "bonus": 0.5
        }
      ]
    },
    "SNECKO_EYE": {
      "id": "Snecko Eye",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "draw"
      ],
      "notes": "Draw 2 extra cards. Start each combat Confused (random costs).",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "SOZU": {
      "id": "Sozu",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "energy_gain"
      ],
      "notes": "Gain Energy each turn. Cannot obtain potions.",
      "builds": [
        "stars",
        "orb",
        "doom"
      ],
      "scoreEffects": [
        {
          "tags": [
            "energy_gain"
          ],
          "bonus": 0.4
        }
      ]
    },
    "VELVET_CHOKER": {
      "id": "Velvet Choker",
      "tier": "B",
      "char": "any",
      "rarity": "ancient",
      "syn": [
        "energy_gain"
      ],
      "notes": "Gain Energy each turn. Cannot play more than 6 cards per turn.",
      "builds": [
        "stars",
        "orb",
        "doom"
      ],
      "scoreEffects": [
        {
          "tags": [
            "energy_gain"
          ],
          "bonus": 0.3
        }
      ]
    },
    "BELT_BUCKLE": {
      "id": "Belt Buckle",
      "tier": "C",
      "char": "any",
      "rarity": "shop",
      "syn": [
        "dexterity"
      ],
      "notes": "No potions: +2 Dexterity.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "BREAD": {
      "id": "Bread",
      "tier": "B",
      "char": "any",
      "rarity": "shop",
      "syn": [
        "energy_gain"
      ],
      "notes": "Turn 1: lose 1 Energy. All other turns: +1 Energy.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "BURNING_STICKS": {
      "id": "Burning Sticks",
      "tier": "C",
      "char": "any",
      "rarity": "shop",
      "syn": [
        "exhaust"
      ],
      "notes": "First time you Exhaust a Skill per combat: add a copy to Hand.",
      "builds": [
        "exhaust"
      ],
      "scoreEffects": [
        {
          "tags": [
            "exhaust",
            "sly"
          ],
          "bonus": 0.9
        }
      ]
    },
    "CAULDRON": {
      "id": "Cauldron",
      "tier": "C",
      "char": "any",
      "rarity": "shop",
      "syn": [],
      "notes": "Brew 5 random potions on pickup.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "CHEMICAL_X": {
      "id": "Chemical X",
      "tier": "C",
      "char": "any",
      "rarity": "shop",
      "syn": [
        "x_cost"
      ],
      "notes": "X-cost card effects increased by 2.",
      "builds": [
        "orb",
        "strength"
      ],
      "scoreEffects": [
        {
          "tags": [
            "x_cost"
          ],
          "bonus": 1.0
        }
      ]
    },
    "DINGY_RUG": {
      "id": "Dingy Rug",
      "tier": "C",
      "char": "any",
      "rarity": "shop",
      "syn": [],
      "notes": "Card rewards can now contain Colorless cards.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "DOLLYS_MIRROR": {
      "id": "Dolly's Mirror",
      "tier": "B",
      "char": "any",
      "rarity": "shop",
      "syn": [],
      "notes": "Get an extra copy of a Deck card on pickup.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "DRAGON_FRUIT": {
      "id": "Dragon Fruit",
      "tier": "B",
      "char": "any",
      "rarity": "shop",
      "syn": [
        "max_hp",
        "gold"
      ],
      "notes": "Gain 1 Max HP whenever you gain Gold.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "GHOST_SEED": {
      "id": "Ghost Seed",
      "tier": "S",
      "char": "any",
      "rarity": "shop",
      "syn": [
        "ethereal"
      ],
      "notes": "Strikes and Defends gain Ethereal. Auto-discard speeds cycling massively.",
      "builds": [
        "sly",
        "claw",
        "exhaust"
      ],
      "scoreEffects": [
        {
          "tags": [
            "sly",
            "claw"
          ],
          "bonus": 1.1
        },
        {
          "tags": [
            "exhaust"
          ],
          "bonus": 0.6
        }
      ]
    },
    "GNARLED_HAMMER": {
      "id": "Gnarled Hammer",
      "tier": "C",
      "char": "any",
      "rarity": "shop",
      "syn": [
        "upgrade"
      ],
      "notes": "Enchant up to 3 Attacks with Sharp 3.",
      "builds": [
        "strength",
        "claw"
      ],
      "scoreEffects": []
    },
    "KIFUDA": {
      "id": "Kifuda",
      "tier": "C",
      "char": "any",
      "rarity": "shop",
      "syn": [
        "upgrade"
      ],
      "notes": "Enchant up to 3 cards with Adroit.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "LAVA_LAMP": {
      "id": "Lava Lamp",
      "tier": "A",
      "char": "any",
      "rarity": "shop",
      "syn": [
        "upgrade"
      ],
      "notes": "Take no damage: all card rewards upgraded.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "LEES_WAFFLE": {
      "id": "Lee's Waffle",
      "tier": "A",
      "char": "any",
      "rarity": "shop",
      "syn": [
        "healing",
        "max_hp"
      ],
      "notes": "Raise Max HP by 7 and fully heal on pickup.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "MEMBERSHIP_CARD": {
      "id": "Membership Card",
      "tier": "A",
      "char": "any",
      "rarity": "shop",
      "syn": [
        "gold"
      ],
      "notes": "50% discount at all shops.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "MINIATURE_TENT": {
      "id": "Miniature Tent",
      "tier": "B",
      "char": "any",
      "rarity": "shop",
      "syn": [],
      "notes": "Choose any number of options at Rest Sites.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "MYSTIC_LIGHTER": {
      "id": "Mystic Lighter",
      "tier": "C",
      "char": "any",
      "rarity": "shop",
      "syn": [],
      "notes": "Enchanted Attacks deal 9 more damage.",
      "builds": [
        "strength",
        "claw"
      ],
      "scoreEffects": []
    },
    "ORRERY": {
      "id": "Orrery",
      "tier": "B",
      "char": "any",
      "rarity": "shop",
      "syn": [],
      "notes": "Gain 5 card rewards on pickup.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "PUNCH_DAGGER": {
      "id": "Punch Dagger",
      "tier": "C",
      "char": "any",
      "rarity": "shop",
      "syn": [
        "upgrade"
      ],
      "notes": "Enchant an Attack with Momentum 5.",
      "builds": [
        "strength",
        "claw"
      ],
      "scoreEffects": []
    },
    "RINGING_TRIANGLE": {
      "id": "Ringing Triangle",
      "tier": "B",
      "char": "any",
      "rarity": "shop",
      "syn": [
        "retain"
      ],
      "notes": "Retain Hand on Turn 1 of combat.",
      "builds": [
        "stars",
        "sly"
      ],
      "scoreEffects": [
        {
          "tags": [
            "retain",
            "stars"
          ],
          "bonus": 0.3
        }
      ]
    },
    "ROYAL_STAMP": {
      "id": "Royal Stamp",
      "tier": "C",
      "char": "any",
      "rarity": "shop",
      "syn": [
        "upgrade"
      ],
      "notes": "Enchant a Deck card with Royally Approved.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "SCREAMING_FLAGON": {
      "id": "Screaming Flagon",
      "tier": "D",
      "char": "any",
      "rarity": "shop",
      "syn": [],
      "notes": "End turn with no cards in Hand: deal 20 AoE. Hard to trigger consistently.",
      "builds": [
        "claw"
      ],
      "scoreEffects": []
    },
    "SLING_OF_COURAGE": {
      "id": "Sling of Courage",
      "tier": "B",
      "char": "any",
      "rarity": "shop",
      "syn": [
        "strength"
      ],
      "notes": "Start Elite combats with 2 Strength.",
      "builds": [
        "strength"
      ],
      "scoreEffects": [
        {
          "tags": [
            "strength",
            "damage"
          ],
          "bonus": 0.2
        }
      ]
    },
    "THE_ABACUS": {
      "id": "The Abacus",
      "tier": "B",
      "char": "any",
      "rarity": "shop",
      "syn": [
        "block"
      ],
      "notes": "Shuffle Draw Pile: gain 6 Block.",
      "builds": [
        "sly",
        "claw"
      ],
      "scoreEffects": [
        {
          "tags": [
            "sly",
            "claw"
          ],
          "bonus": 0.6
        },
        {
          "tags": [
            "block"
          ],
          "bonus": 0.3
        }
      ]
    },
    "TOOLBOX": {
      "id": "Toolbox",
      "tier": "B",
      "char": "any",
      "rarity": "shop",
      "syn": [],
      "notes": "Start combat: choose 1 of 3 random Colorless cards.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "WING_CHARM": {
      "id": "Wing Charm",
      "tier": "B",
      "char": "any",
      "rarity": "shop",
      "syn": [
        "upgrade"
      ],
      "notes": "A random card in each reward is Enchanted with Swift 1.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "BRIMSTONE": {
      "id": "Brimstone",
      "tier": "C",
      "char": "ironclad",
      "rarity": "shop",
      "syn": [
        "strength"
      ],
      "notes": "+2 Strength per turn. ALL enemies also get +1 Strength. High risk/reward.",
      "builds": [
        "strength",
        "self_damage"
      ],
      "scoreEffects": [
        {
          "tags": [
            "strength",
            "damage",
            "multi_hit"
          ],
          "bonus": 0.9
        },
        {
          "tags": [
            "self_damage"
          ],
          "bonus": 0.5
        }
      ]
    },
    "NINJA_SCROLL": {
      "id": "Ninja Scroll",
      "tier": "B",
      "char": "silent",
      "rarity": "shop",
      "syn": [
        "shiv"
      ],
      "notes": "Add 3 Shivs to Hand at combat start.",
      "builds": [
        "shiv"
      ],
      "scoreEffects": [
        {
          "tags": [
            "shiv",
            "shiv_synergy"
          ],
          "bonus": 1.3
        }
      ]
    },
    "VITRUVIAN_MINION": {
      "id": "Vitruvian Minion",
      "tier": "C",
      "char": "regent",
      "rarity": "shop",
      "syn": [],
      "notes": "Minion cards deal double damage and gain double Block.",
      "builds": [
        "forge",
        "stars"
      ],
      "scoreEffects": [
        {
          "tags": [
            "forge"
          ],
          "bonus": 0.7
        }
      ]
    },
    "UNDYING_SIGIL": {
      "id": "Undying Sigil",
      "tier": "B",
      "char": "necrobinder",
      "rarity": "shop",
      "syn": [
        "doom"
      ],
      "notes": "Enemies with Doom >= HP deal 50% less damage.",
      "builds": [
        "doom"
      ],
      "scoreEffects": [
        {
          "tags": [
            "doom"
          ],
          "bonus": 0.8
        }
      ]
    },
    "RUNIC_CAPACITOR": {
      "id": "Runic Capacitor",
      "tier": "B",
      "char": "defect",
      "rarity": "shop",
      "syn": [
        "orb"
      ],
      "notes": "Start combat with 3 extra Orb Slots (6 total).",
      "builds": [
        "orb"
      ],
      "scoreEffects": [
        {
          "tags": [
            "orb"
          ],
          "bonus": 1.1
        }
      ]
    },
    "ANCHOR_EV": {
      "id": "Anchor_Ev",
      "tier": "B",
      "char": "any",
      "rarity": "event",
      "syn": [
        "block"
      ],
      "notes": "Event variant: Start each combat with 4 Block.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "BIG_MUSHROOM": {
      "id": "Big Mushroom",
      "tier": "C",
      "char": "any",
      "rarity": "event",
      "syn": [
        "max_hp"
      ],
      "notes": "+20 Max HP but draw 2 fewer cards per combat. Net negative for card-dependent builds.",
      "builds": [
        "block",
        "doom"
      ],
      "scoreEffects": []
    },
    "BING_BONG": {
      "id": "Bing Bong",
      "tier": "D",
      "char": "any",
      "rarity": "event",
      "syn": [],
      "notes": "Add a card: add one extra copy. Dangerously bloats deck.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "BLOOD_VIAL_EV": {
      "id": "Blood_Vial_Ev",
      "tier": "B",
      "char": "any",
      "rarity": "event",
      "syn": [
        "healing"
      ],
      "notes": "Event variant: Heal 1 HP at combat start.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "BONE_TEA": {
      "id": "Bone Tea",
      "tier": "B",
      "char": "any",
      "rarity": "event",
      "syn": [
        "upgrade"
      ],
      "notes": "Start of next combat: Upgrade your opening hand.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "BYRDPIP": {
      "id": "Byrdpip",
      "tier": "A",
      "char": "any",
      "rarity": "event",
      "syn": [],
      "notes": "Gain Byrd Swoop card. A Byrdpip accompanies you in battles.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "DARKSTONE_PERIAPT": {
      "id": "Darkstone Periapt",
      "tier": "C",
      "char": "any",
      "rarity": "event",
      "syn": [
        "max_hp"
      ],
      "notes": "Obtain a Curse: +6 Max HP. Good if you can control Curse intake.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "DAUGHTER_OF_THE_WIND": {
      "id": "Daughter of the Wind",
      "tier": "C",
      "char": "any",
      "rarity": "event",
      "syn": [
        "block"
      ],
      "notes": "Play an Attack: gain 1 Block.",
      "builds": [
        "claw",
        "shiv",
        "strength"
      ],
      "scoreEffects": [
        {
          "tags": [
            "damage"
          ],
          "bonus": 0.2
        }
      ]
    },
    "DREAM_CATCHER": {
      "id": "Dream Catcher",
      "tier": "B",
      "char": "any",
      "rarity": "event",
      "syn": [],
      "notes": "Resting: may add a card to deck.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "EMBER_TEA": {
      "id": "Ember Tea",
      "tier": "B",
      "char": "any",
      "rarity": "event",
      "syn": [
        "strength"
      ],
      "notes": "Gain 2 Strength for next 5 combats.",
      "builds": [
        "strength"
      ],
      "scoreEffects": [
        {
          "tags": [
            "strength",
            "damage"
          ],
          "bonus": 0.2
        }
      ]
    },
    "FORGOTTEN_SOUL": {
      "id": "Forgotten Soul",
      "tier": "C",
      "char": "any",
      "rarity": "event",
      "syn": [
        "exhaust",
        "damage"
      ],
      "notes": "Exhaust a card: deal 1 damage to random enemy.",
      "builds": [
        "exhaust"
      ],
      "scoreEffects": [
        {
          "tags": [
            "exhaust"
          ],
          "bonus": 0.5
        }
      ]
    },
    "FRAGRANT_MUSHROOM": {
      "id": "Fragrant Mushroom",
      "tier": "A",
      "char": "any",
      "rarity": "event",
      "syn": [
        "upgrade"
      ],
      "notes": "Lose 15 HP: Upgrade 3 random cards.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "FRESNEL_LENS": {
      "id": "Fresnel Lens",
      "tier": "B",
      "char": "any",
      "rarity": "event",
      "syn": [
        "block",
        "upgrade"
      ],
      "notes": "Add a Block card: Enchant it with Nimble 2.",
      "builds": [
        "block",
        "stars"
      ],
      "scoreEffects": [
        {
          "tags": [
            "block"
          ],
          "bonus": 0.7
        }
      ]
    },
    "HAND_DRILL": {
      "id": "Hand Drill",
      "tier": "B",
      "char": "any",
      "rarity": "event",
      "syn": [
        "vulnerable"
      ],
      "notes": "Break enemy Block: apply 2 Vulnerable.",
      "builds": [
        "strength",
        "doom"
      ],
      "scoreEffects": [
        {
          "tags": [
            "damage"
          ],
          "bonus": 0.5
        },
        {
          "tags": [
            "vulnerable"
          ],
          "bonus": 0.6
        }
      ]
    },
    "HAPPY_FLOWER_EV": {
      "id": "Happy_Flower_Ev",
      "tier": "B",
      "char": "any",
      "rarity": "event",
      "syn": [
        "energy_gain"
      ],
      "notes": "Event variant: Every 5 turns, gain Energy.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "HISTORY_COURSE": {
      "id": "History Course",
      "tier": "S",
      "char": "any",
      "rarity": "event",
      "syn": [
        "scaling"
      ],
      "notes": "Start of turn: play a copy of your last played Attack or Skill. Free extra card every turn.",
      "builds": [
        "poison",
        "strength",
        "claw",
        "sly"
      ],
      "scoreEffects": [
        {
          "tags": [
            "damage",
            "scaling"
          ],
          "bonus": 1.0
        },
        {
          "tags": [
            "poison"
          ],
          "bonus": 0.7
        },
        {
          "tags": [
            "multi_hit"
          ],
          "bonus": 0.6
        }
      ]
    },
    "LEES_WAFFLE_EV": {
      "id": "Lees_Waffle_Ev",
      "tier": "B",
      "char": "any",
      "rarity": "event",
      "syn": [
        "healing"
      ],
      "notes": "Event variant: Heal 10% of HP on pickup.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "LOST_WISP": {
      "id": "Lost Wisp",
      "tier": "A",
      "char": "any",
      "rarity": "event",
      "syn": [
        "aoe",
        "damage",
        "power"
      ],
      "notes": "Play a Power: deal 8 AoE. Every Power is an 8-damage AoE burst.",
      "builds": [
        "orb",
        "exhaust",
        "stars",
        "osty"
      ],
      "scoreEffects": [
        {
          "tags": [
            "power"
          ],
          "bonus": 1.1
        }
      ]
    },
    "MANGO_EV": {
      "id": "Mango_Ev",
      "tier": "B",
      "char": "any",
      "rarity": "event",
      "syn": [
        "max_hp"
      ],
      "notes": "Event variant: Raise Max HP by 3.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "MAW_BANK": {
      "id": "Maw Bank",
      "tier": "A",
      "char": "any",
      "rarity": "event",
      "syn": [
        "gold"
      ],
      "notes": "Climb a floor: gain 12 Gold. Stops when you spend Gold.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "MR_STRUGGLES": {
      "id": "Mr. Struggles",
      "tier": "S",
      "char": "any",
      "rarity": "event",
      "syn": [
        "aoe",
        "damage",
        "scaling"
      ],
      "notes": "Start of turn: deal damage equal to turn number to ALL enemies. Scales to 10, 20, 30+.",
      "builds": [
        "doom",
        "any"
      ],
      "scoreEffects": [
        {
          "tags": [
            "doom"
          ],
          "bonus": 0.4
        }
      ]
    },
    "ORICHALCUM_EV": {
      "id": "Orichalcum_Ev",
      "tier": "B",
      "char": "any",
      "rarity": "event",
      "syn": [
        "block"
      ],
      "notes": "Event variant: End turn without Block: gain 3 Block.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "POLLINOUS_CORE": {
      "id": "Pollinous Core",
      "tier": "B",
      "char": "any",
      "rarity": "event",
      "syn": [
        "draw"
      ],
      "notes": "Every 4 turns: draw 2 extra cards.",
      "builds": [
        "doom",
        "stars",
        "any"
      ],
      "scoreEffects": []
    },
    "ROYAL_POISON": {
      "id": "Royal Poison",
      "tier": "D",
      "char": "any",
      "rarity": "event",
      "syn": [],
      "notes": "Lose 4 HP at start of each combat. Avoid.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "SNECKO_EYE_EV": {
      "id": "Snecko_Eye_Ev",
      "tier": "B",
      "char": "any",
      "rarity": "event",
      "syn": [],
      "notes": "Event variant: Start each combat Confused.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "STRIKE_DUMMY_EV": {
      "id": "Strike_Dummy_Ev",
      "tier": "B",
      "char": "any",
      "rarity": "event",
      "syn": [
        "damage",
        "strike"
      ],
      "notes": "Event variant: Strike cards deal 1 extra damage.",
      "builds": [
        "strike"
      ],
      "scoreEffects": []
    },
    "SWORD_OF_JADE": {
      "id": "Sword of Jade",
      "tier": "B",
      "char": "any",
      "rarity": "event",
      "syn": [
        "strength"
      ],
      "notes": "Start each combat with 3 Strength.",
      "builds": [
        "strength"
      ],
      "scoreEffects": [
        {
          "tags": [
            "strength",
            "damage"
          ],
          "bonus": 0.5
        }
      ]
    },
    "SWORD_OF_STONE": {
      "id": "Sword of Stone",
      "tier": "B",
      "char": "any",
      "rarity": "event",
      "syn": [],
      "notes": "Transforms into a powerful Relic after defeating 5 Elites.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "TEA_OF_DISCOURTESY": {
      "id": "Tea of Discourtesy",
      "tier": "B",
      "char": "any",
      "rarity": "event",
      "syn": [],
      "notes": "Shuffle 2 Dazed into Draw Pile next combat.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "THE_BOOT": {
      "id": "The Boot",
      "tier": "B",
      "char": "any",
      "rarity": "event",
      "syn": [
        "damage"
      ],
      "notes": "Unblocked damage <= 4 is increased to 5.",
      "builds": [
        "claw",
        "shiv"
      ],
      "scoreEffects": []
    },
    "THE_CHOSEN_CHEESE": {
      "id": "The Chosen Cheese",
      "tier": "A",
      "char": "any",
      "rarity": "event",
      "syn": [
        "max_hp"
      ],
      "notes": "Gain 1 Max HP after each combat. Stacks across an entire run.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "THE_MERCHANTS_RUG_EV": {
      "id": "The_Merchants_Rug_Ev",
      "tier": "B",
      "char": "any",
      "rarity": "event",
      "syn": [],
      "notes": "Poor imitation. Does nothing.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "VENERABLE_TEA_SET_EV": {
      "id": "Venerable_Tea_Set_Ev",
      "tier": "B",
      "char": "any",
      "rarity": "event",
      "syn": [
        "energy_gain"
      ],
      "notes": "Event variant: +1 Energy next combat after Rest Site.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "WONGO_CUSTOMER_APPRECIATION_BADGE": {
      "id": "Wongo Customer Appreciation Badge",
      "tier": "B",
      "char": "any",
      "rarity": "event",
      "syn": [],
      "notes": "Does nothing.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "WONGOS_MYSTERY_TICKET": {
      "id": "Wongo's Mystery Ticket",
      "tier": "A",
      "char": "any",
      "rarity": "event",
      "syn": [],
      "notes": "Receive 3 random Relics after 5 combats.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    },
    "CIRCLET": {
      "id": "Circlet",
      "tier": "B",
      "char": "any",
      "rarity": "special",
      "syn": [],
      "notes": "It's a circlet. Appears when no more relics are available.",
      "builds": [
        "any"
      ],
      "scoreEffects": []
    }
  },
  "relicNames": [
    {
      "n": "Burning Blood",
      "c": "ironclad"
    },
    {
      "n": "Black Blood",
      "c": "ironclad"
    },
    {
      "n": "Ring of the Snake",
      "c": "silent"
    },
    {
      "n": "Ring of the Drake",
      "c": "silent"
    },
    {
      "n": "Divine Right",
      "c": "regent"
    },
    {
      "n": "Divine Destiny",
      "c": "regent"
    },
    {
      "n": "Bound Phylactery",
      "c": "necrobinder"
    },
    {
      "n": "Phylactery Unbound",
      "c": "necrobinder"
    },
    {
      "n": "Cracked Core",
      "c": "defect"
    },
    {
      "n": "Infused Core",
      "c": "defect"
    },
    {
      "n": "Amethyst Aubergine",
      "c": "any"
    },
    {
      "n": "Anchor",
      "c": "any"
    },
    {
      "n": "Bag of Preparation",
      "c": "any"
    },
    {
      "n": "Blood Vial",
      "c": "any"
    },
    {
      "n": "Book of Five Rings",
      "c": "any"
    },
    {
      "n": "Bronze Scales",
      "c": "any"
    },
    {
      "n": "Centennial Puzzle",
      "c": "any"
    },
    {
      "n": "Festive Popper",
      "c": "any"
    },
    {
      "n": "Gorget",
      "c": "any"
    },
    {
      "n": "Happy Flower",
      "c": "any"
    },
    {
      "n": "Juzu Bracelet",
      "c": "any"
    },
    {
      "n": "Lantern",
      "c": "any"
    },
    {
      "n": "Meal Ticket",
      "c": "any"
    },
    {
      "n": "Oddly Smooth Stone",
      "c": "any"
    },
    {
      "n": "Pendulum",
      "c": "any"
    },
    {
      "n": "Permafrost",
      "c": "any"
    },
    {
      "n": "Potion Belt",
      "c": "any"
    },
    {
      "n": "Regal Pillow",
      "c": "any"
    },
    {
      "n": "Strawberry",
      "c": "any"
    },
    {
      "n": "Strike Dummy",
      "c": "any"
    },
    {
      "n": "Tiny Mailbox",
      "c": "any"
    },
    {
      "n": "Vajra",
      "c": "any"
    },
    {
      "n": "Venerable Tea Set",
      "c": "any"
    },
    {
      "n": "War Paint",
      "c": "any"
    },
    {
      "n": "Whetstone",
      "c": "any"
    },
    {
      "n": "Red Skull",
      "c": "ironclad"
    },
    {
      "n": "Snecko Skull",
      "c": "silent"
    },
    {
      "n": "Fencing Manual",
      "c": "regent"
    },
    {
      "n": "Bone Flute",
      "c": "necrobinder"
    },
    {
      "n": "Data Disk",
      "c": "defect"
    },
    {
      "n": "Akabeko",
      "c": "any"
    },
    {
      "n": "Bag of Marbles",
      "c": "any"
    },
    {
      "n": "Bellows",
      "c": "any"
    },
    {
      "n": "Bowler Hat",
      "c": "any"
    },
    {
      "n": "Candelabra",
      "c": "any"
    },
    {
      "n": "Eternal Feather",
      "c": "any"
    },
    {
      "n": "Gremlin Horn",
      "c": "any"
    },
    {
      "n": "Horn Cleat",
      "c": "any"
    },
    {
      "n": "Joss Paper",
      "c": "any"
    },
    {
      "n": "Kusarigama",
      "c": "any"
    },
    {
      "n": "Letter Opener",
      "c": "any"
    },
    {
      "n": "Lucky Fysh",
      "c": "any"
    },
    {
      "n": "Mercury Hourglass",
      "c": "any"
    },
    {
      "n": "Miniature Cannon",
      "c": "any"
    },
    {
      "n": "Nunchaku",
      "c": "any"
    },
    {
      "n": "Orichalcum",
      "c": "any"
    },
    {
      "n": "Ornamental Fan",
      "c": "any"
    },
    {
      "n": "Pantograph",
      "c": "any"
    },
    {
      "n": "Parrying Shield",
      "c": "any"
    },
    {
      "n": "Pear",
      "c": "any"
    },
    {
      "n": "Pen Nib",
      "c": "any"
    },
    {
      "n": "Petrified Toad",
      "c": "any"
    },
    {
      "n": "Planisphere",
      "c": "any"
    },
    {
      "n": "Red Mask",
      "c": "any"
    },
    {
      "n": "Reptile Trinket",
      "c": "any"
    },
    {
      "n": "Ripple Basin",
      "c": "any"
    },
    {
      "n": "Sparkling Rouge",
      "c": "any"
    },
    {
      "n": "Stone Cracker",
      "c": "any"
    },
    {
      "n": "Tuning Fork",
      "c": "any"
    },
    {
      "n": "Vambrace",
      "c": "any"
    },
    {
      "n": "Paper Phrog",
      "c": "ironclad"
    },
    {
      "n": "Self-Forming Clay",
      "c": "ironclad"
    },
    {
      "n": "Tingsha",
      "c": "silent"
    },
    {
      "n": "Twisted Funnel",
      "c": "silent"
    },
    {
      "n": "Galactic Dust",
      "c": "regent"
    },
    {
      "n": "Regalite",
      "c": "regent"
    },
    {
      "n": "Book Repair Knife",
      "c": "necrobinder"
    },
    {
      "n": "Funerary Mask",
      "c": "necrobinder"
    },
    {
      "n": "Gold-Plated Cables",
      "c": "defect"
    },
    {
      "n": "Symbiotic Virus",
      "c": "defect"
    },
    {
      "n": "Art of War",
      "c": "any"
    },
    {
      "n": "Beating Remnant",
      "c": "any"
    },
    {
      "n": "Captain's Wheel",
      "c": "any"
    },
    {
      "n": "Chandelier",
      "c": "any"
    },
    {
      "n": "Cloak Clasp",
      "c": "any"
    },
    {
      "n": "Frozen Egg",
      "c": "any"
    },
    {
      "n": "Gambling Chip",
      "c": "any"
    },
    {
      "n": "Game Piece",
      "c": "any"
    },
    {
      "n": "Girya",
      "c": "any"
    },
    {
      "n": "Ice Cream",
      "c": "any"
    },
    {
      "n": "Intimidating Helmet",
      "c": "any"
    },
    {
      "n": "Kunai",
      "c": "any"
    },
    {
      "n": "Lasting Candy",
      "c": "any"
    },
    {
      "n": "Lizard Tail",
      "c": "any"
    },
    {
      "n": "Mango",
      "c": "any"
    },
    {
      "n": "Meat on the Bone",
      "c": "any"
    },
    {
      "n": "Molten Egg",
      "c": "any"
    },
    {
      "n": "Mummified Hand",
      "c": "any"
    },
    {
      "n": "Old Coin",
      "c": "any"
    },
    {
      "n": "Pocketwatch",
      "c": "any"
    },
    {
      "n": "Prayer Wheel",
      "c": "any"
    },
    {
      "n": "Rainbow Ring",
      "c": "any"
    },
    {
      "n": "Razor Tooth",
      "c": "any"
    },
    {
      "n": "Shovel",
      "c": "any"
    },
    {
      "n": "Shuriken",
      "c": "any"
    },
    {
      "n": "Stone Calendar",
      "c": "any"
    },
    {
      "n": "Sturdy Clamp",
      "c": "any"
    },
    {
      "n": "The Courier",
      "c": "any"
    },
    {
      "n": "Toxic Egg",
      "c": "any"
    },
    {
      "n": "Tungsten Rod",
      "c": "any"
    },
    {
      "n": "Unceasing Top",
      "c": "any"
    },
    {
      "n": "Unsettling Lamp",
      "c": "any"
    },
    {
      "n": "Vexing Puzzlebox",
      "c": "any"
    },
    {
      "n": "White Beast Statue",
      "c": "any"
    },
    {
      "n": "White Star",
      "c": "any"
    },
    {
      "n": "Charon's Ashes",
      "c": "ironclad"
    },
    {
      "n": "Demon Tongue",
      "c": "ironclad"
    },
    {
      "n": "Ruined Helmet",
      "c": "ironclad"
    },
    {
      "n": "Helical Dart",
      "c": "silent"
    },
    {
      "n": "Paper Krane",
      "c": "silent"
    },
    {
      "n": "Tough Bandages",
      "c": "silent"
    },
    {
      "n": "Lunar Pastry",
      "c": "regent"
    },
    {
      "n": "Mini Regent",
      "c": "regent"
    },
    {
      "n": "Orange Dough",
      "c": "regent"
    },
    {
      "n": "Big Hat",
      "c": "necrobinder"
    },
    {
      "n": "Bookmark",
      "c": "necrobinder"
    },
    {
      "n": "Ivory Tile",
      "c": "necrobinder"
    },
    {
      "n": "Emotion Chip",
      "c": "defect"
    },
    {
      "n": "Metronome",
      "c": "defect"
    },
    {
      "n": "Power Cell",
      "c": "defect"
    },
    {
      "n": "Arcane Scroll",
      "c": "any"
    },
    {
      "n": "Booming Conch",
      "c": "any"
    },
    {
      "n": "Cursed Pearl",
      "c": "any"
    },
    {
      "n": "Golden Pearl",
      "c": "any"
    },
    {
      "n": "Large Capsule",
      "c": "any"
    },
    {
      "n": "Lava Rock",
      "c": "any"
    },
    {
      "n": "Lead Paperweight",
      "c": "any"
    },
    {
      "n": "Leafy Poultice",
      "c": "any"
    },
    {
      "n": "Lost Coffer",
      "c": "any"
    },
    {
      "n": "Massive Scroll",
      "c": "any"
    },
    {
      "n": "Neow's Torment",
      "c": "any"
    },
    {
      "n": "New Leaf",
      "c": "any"
    },
    {
      "n": "Nutritious Oyster",
      "c": "any"
    },
    {
      "n": "Pomander",
      "c": "any"
    },
    {
      "n": "Precarious Shears",
      "c": "any"
    },
    {
      "n": "Precise Scissors",
      "c": "any"
    },
    {
      "n": "Scroll Boxes",
      "c": "any"
    },
    {
      "n": "Silver Crucible",
      "c": "any"
    },
    {
      "n": "Small Capsule",
      "c": "any"
    },
    {
      "n": "Stone Humidifier",
      "c": "any"
    },
    {
      "n": "Alchemical Coffer",
      "c": "any"
    },
    {
      "n": "Archaic Tooth",
      "c": "any"
    },
    {
      "n": "Driftwood",
      "c": "any"
    },
    {
      "n": "Electric Shrymp",
      "c": "any"
    },
    {
      "n": "Glass Eye",
      "c": "any"
    },
    {
      "n": "Prismatic Gem",
      "c": "any"
    },
    {
      "n": "Radiant Pearl",
      "c": "any"
    },
    {
      "n": "Sand Castle",
      "c": "any"
    },
    {
      "n": "Sea Glass",
      "c": "any"
    },
    {
      "n": "Touch of Orobas",
      "c": "any"
    },
    {
      "n": "Pael's Blood",
      "c": "any"
    },
    {
      "n": "Pael's Claw",
      "c": "any"
    },
    {
      "n": "Pael's Eye",
      "c": "any"
    },
    {
      "n": "Pael's Flesh",
      "c": "any"
    },
    {
      "n": "Pael's Growth",
      "c": "any"
    },
    {
      "n": "Pael's Horn",
      "c": "any"
    },
    {
      "n": "Pael's Legion",
      "c": "any"
    },
    {
      "n": "Pael's Tears",
      "c": "any"
    },
    {
      "n": "Pael's Tooth",
      "c": "any"
    },
    {
      "n": "Pael's Wing",
      "c": "any"
    },
    {
      "n": "Biiig Hug",
      "c": "any"
    },
    {
      "n": "Golden Compass",
      "c": "any"
    },
    {
      "n": "Nutritious Soup",
      "c": "any"
    },
    {
      "n": "Pumpkin Candle",
      "c": "any"
    },
    {
      "n": "Seal of Gold",
      "c": "any"
    },
    {
      "n": "Storybook",
      "c": "any"
    },
    {
      "n": "Toasty Mittens",
      "c": "any"
    },
    {
      "n": "Toy Box",
      "c": "any"
    },
    {
      "n": "Very Hot Cocoa",
      "c": "any"
    },
    {
      "n": "Yummy Cookie",
      "c": "any"
    },
    {
      "n": "Beautiful Bracelet",
      "c": "any"
    },
    {
      "n": "Blessed Antler",
      "c": "any"
    },
    {
      "n": "Brilliant Scarf",
      "c": "any"
    },
    {
      "n": "Delicate Frond",
      "c": "any"
    },
    {
      "n": "Diamond Diadem",
      "c": "any"
    },
    {
      "n": "Fur Coat",
      "c": "any"
    },
    {
      "n": "Glitter",
      "c": "any"
    },
    {
      "n": "Jewelry Box",
      "c": "any"
    },
    {
      "n": "Looming Fruit",
      "c": "any"
    },
    {
      "n": "Signet Ring",
      "c": "any"
    },
    {
      "n": "Claws",
      "c": "any"
    },
    {
      "n": "Crossbow",
      "c": "any"
    },
    {
      "n": "Iron Club",
      "c": "any"
    },
    {
      "n": "Meat Cleaver",
      "c": "any"
    },
    {
      "n": "Sai",
      "c": "any"
    },
    {
      "n": "Spiked Gauntlets",
      "c": "any"
    },
    {
      "n": "Tanx's Whistle",
      "c": "any"
    },
    {
      "n": "Throwing Axe",
      "c": "any"
    },
    {
      "n": "Tri-Boomerang",
      "c": "any"
    },
    {
      "n": "War Hammer",
      "c": "any"
    },
    {
      "n": "Blood-Soaked Rose",
      "c": "any"
    },
    {
      "n": "Choices Paradox",
      "c": "any"
    },
    {
      "n": "Distinguished Cape",
      "c": "any"
    },
    {
      "n": "Fiddle",
      "c": "any"
    },
    {
      "n": "Jeweled Mask",
      "c": "any"
    },
    {
      "n": "Lord's Parasol",
      "c": "any"
    },
    {
      "n": "Music Box",
      "c": "any"
    },
    {
      "n": "Preserved Fog",
      "c": "any"
    },
    {
      "n": "Sere Talon",
      "c": "any"
    },
    {
      "n": "Whispering Earring",
      "c": "any"
    },
    {
      "n": "Astrolabe",
      "c": "any"
    },
    {
      "n": "Black Star",
      "c": "any"
    },
    {
      "n": "Calling Bell",
      "c": "any"
    },
    {
      "n": "Dusty Tome",
      "c": "any"
    },
    {
      "n": "Ectoplasm",
      "c": "any"
    },
    {
      "n": "Empty Cage",
      "c": "any"
    },
    {
      "n": "Pandora's Box",
      "c": "any"
    },
    {
      "n": "Philosopher's Stone",
      "c": "any"
    },
    {
      "n": "Runic Pyramid",
      "c": "any"
    },
    {
      "n": "Snecko Eye",
      "c": "any"
    },
    {
      "n": "Sozu",
      "c": "any"
    },
    {
      "n": "Velvet Choker",
      "c": "any"
    },
    {
      "n": "Belt Buckle",
      "c": "any"
    },
    {
      "n": "Bread",
      "c": "any"
    },
    {
      "n": "Burning Sticks",
      "c": "any"
    },
    {
      "n": "Cauldron",
      "c": "any"
    },
    {
      "n": "Chemical X",
      "c": "any"
    },
    {
      "n": "Dingy Rug",
      "c": "any"
    },
    {
      "n": "Dolly's Mirror",
      "c": "any"
    },
    {
      "n": "Dragon Fruit",
      "c": "any"
    },
    {
      "n": "Ghost Seed",
      "c": "any"
    },
    {
      "n": "Gnarled Hammer",
      "c": "any"
    },
    {
      "n": "Kifuda",
      "c": "any"
    },
    {
      "n": "Lava Lamp",
      "c": "any"
    },
    {
      "n": "Lee's Waffle",
      "c": "any"
    },
    {
      "n": "Membership Card",
      "c": "any"
    },
    {
      "n": "Miniature Tent",
      "c": "any"
    },
    {
      "n": "Mystic Lighter",
      "c": "any"
    },
    {
      "n": "Orrery",
      "c": "any"
    },
    {
      "n": "Punch Dagger",
      "c": "any"
    },
    {
      "n": "Ringing Triangle",
      "c": "any"
    },
    {
      "n": "Royal Stamp",
      "c": "any"
    },
    {
      "n": "Screaming Flagon",
      "c": "any"
    },
    {
      "n": "Sling of Courage",
      "c": "any"
    },
    {
      "n": "The Abacus",
      "c": "any"
    },
    {
      "n": "Toolbox",
      "c": "any"
    },
    {
      "n": "Wing Charm",
      "c": "any"
    },
    {
      "n": "Brimstone",
      "c": "ironclad"
    },
    {
      "n": "Ninja Scroll",
      "c": "silent"
    },
    {
      "n": "Vitruvian Minion",
      "c": "regent"
    },
    {
      "n": "Undying Sigil",
      "c": "necrobinder"
    },
    {
      "n": "Runic Capacitor",
      "c": "defect"
    },
    {
      "n": "Anchor_Ev",
      "c": "any"
    },
    {
      "n": "Big Mushroom",
      "c": "any"
    },
    {
      "n": "Bing Bong",
      "c": "any"
    },
    {
      "n": "Blood_Vial_Ev",
      "c": "any"
    },
    {
      "n": "Bone Tea",
      "c": "any"
    },
    {
      "n": "Byrdpip",
      "c": "any"
    },
    {
      "n": "Darkstone Periapt",
      "c": "any"
    },
    {
      "n": "Daughter of the Wind",
      "c": "any"
    },
    {
      "n": "Dream Catcher",
      "c": "any"
    },
    {
      "n": "Ember Tea",
      "c": "any"
    },
    {
      "n": "Forgotten Soul",
      "c": "any"
    },
    {
      "n": "Fragrant Mushroom",
      "c": "any"
    },
    {
      "n": "Fresnel Lens",
      "c": "any"
    },
    {
      "n": "Hand Drill",
      "c": "any"
    },
    {
      "n": "Happy_Flower_Ev",
      "c": "any"
    },
    {
      "n": "History Course",
      "c": "any"
    },
    {
      "n": "Lees_Waffle_Ev",
      "c": "any"
    },
    {
      "n": "Lost Wisp",
      "c": "any"
    },
    {
      "n": "Mango_Ev",
      "c": "any"
    },
    {
      "n": "Maw Bank",
      "c": "any"
    },
    {
      "n": "Mr. Struggles",
      "c": "any"
    },
    {
      "n": "Orichalcum_Ev",
      "c": "any"
    },
    {
      "n": "Pollinous Core",
      "c": "any"
    },
    {
      "n": "Royal Poison",
      "c": "any"
    },
    {
      "n": "Snecko_Eye_Ev",
      "c": "any"
    },
    {
      "n": "Strike_Dummy_Ev",
      "c": "any"
    },
    {
      "n": "Sword of Jade",
      "c": "any"
    },
    {
      "n": "Sword of Stone",
      "c": "any"
    },
    {
      "n": "Tea of Discourtesy",
      "c": "any"
    },
    {
      "n": "The Boot",
      "c": "any"
    },
    {
      "n": "The Chosen Cheese",
      "c": "any"
    },
    {
      "n": "The_Merchants_Rug_Ev",
      "c": "any"
    },
    {
      "n": "Venerable_Tea_Set_Ev",
      "c": "any"
    },
    {
      "n": "Wongo Customer Appreciation Badge",
      "c": "any"
    },
    {
      "n": "Wongo's Mystery Ticket",
      "c": "any"
    },
    {
      "n": "Circlet",
      "c": "any"
    }
  ],
  "relicCombos": [
    {
      "relic": "Charon's Ashes",
      "card": "Corruption",
      "bonus": 2.0,
      "reason": "Corruption Exhausts all Skills — Charon's Ashes deals 3 AoE per Exhaust. Every free Skill play becomes 3 free AoE damage, stacking to 20-30+ AoE per turn."
    },
    {
      "relic": "Charon's Ashes",
      "card": "Feel No Pain",
      "bonus": 1.8,
      "reason": "Feel No Pain gains Block from Exhausts — Charon's Ashes deals AoE from the same Exhausts. Every card Exhausted gives both Block AND 3 AoE simultaneously."
    },
    {
      "relic": "Charon's Ashes",
      "card": "Dark Embrace",
      "bonus": 1.8,
      "reason": "Dark Embrace draws from Exhausts — Charon's Ashes deals 3 AoE per Exhaust. Every Exhaust draws a card AND deals free damage, making the Exhaust engine self-sustaining."
    },
    {
      "relic": "Charon's Ashes",
      "card": "True Grit",
      "bonus": 1.5,
      "reason": "True Grit Exhausts a card for free — Charon's Ashes deals 3 AoE per Exhaust. True Grit becomes a free 3 AoE on top of its Block."
    },
    {
      "relic": "Charon's Ashes",
      "card": "Brand",
      "bonus": 1.5,
      "reason": "Brand is a 0-cost Exhaust — Charon's Ashes deals 3 AoE whenever you Exhaust. Brand becomes a free 3 AoE damage card in an Exhaust build."
    },
    {
      "relic": "Charon's Ashes",
      "card": "Offering",
      "bonus": 1.5,
      "reason": "Offering Exhausts itself — Charon's Ashes converts that Exhaust into 3 free AoE. The HP cost of Offering becomes even more worth it."
    },
    {
      "relic": "Burning Sticks",
      "card": "Corruption",
      "bonus": 1.8,
      "reason": "Corruption Exhausts all Skills free — Burning Sticks adds a copy of the first Exhausted Skill to Hand. Corruption feeds Burning Sticks a free extra Skill every combat."
    },
    {
      "relic": "Burning Sticks",
      "card": "Feel No Pain",
      "bonus": 1.5,
      "reason": "Burning Sticks copies the first Exhausted Skill — Feel No Pain is a Skill that Exhausts itself (via Corruption). Burning Sticks returns a free Feel No Pain every combat."
    },
    {
      "relic": "Joss Paper",
      "card": "Blade Dance",
      "bonus": 1.5,
      "reason": "Blade Dance generates 3 Shivs that Exhaust — Joss Paper draws 1 card per 5 Exhausts. Blade Dance quickly stacks Exhausts toward Joss Paper's draw threshold."
    },
    {
      "relic": "Forgotten Soul",
      "card": "Corruption",
      "bonus": 1.5,
      "reason": "Corruption Exhausts every Skill — Forgotten Soul deals 1 damage per Exhaust. With Corruption, every Skill play also deals 1 free damage to a random enemy."
    },
    {
      "relic": "Cloak Clasp",
      "card": "Juggernaut",
      "bonus": 2.0,
      "reason": "Cloak Clasp gains 1 Block per card in Hand at turn end — Juggernaut deals damage whenever you gain Block. Cloak Clasp's end-of-turn Block triggers Juggernaut for free damage every turn."
    },
    {
      "relic": "Cloak Clasp",
      "card": "Body Slam",
      "bonus": 1.8,
      "reason": "Cloak Clasp gains Block based on hand size at turn end — Body Slam deals damage equal to Block. Cloak Clasp's passive Block directly amplifies Body Slam's damage potential."
    },
    {
      "relic": "Fresnel Lens",
      "card": "Body Slam",
      "bonus": 1.8,
      "reason": "Fresnel Lens enchants Block-gaining cards with Nimble 2 — Body Slam deals damage equal to Block. With Nimble 2 accelerating cycling, Body Slam gets played more frequently."
    },
    {
      "relic": "Fresnel Lens",
      "card": "Impervious",
      "bonus": 1.5,
      "reason": "Impervious gives 30 Block — Fresnel Lens enchants it with Nimble 2 for faster cycling. Impervious becomes a recurring 30-Block card instead of a once-per-cycle panic button."
    },
    {
      "relic": "Pael's Legion",
      "card": "Barricade",
      "bonus": 2.0,
      "reason": "Pael's Legion doubles Block from a card — Barricade retains that doubled Block. Pael's Legion fires every 3 turns doubling your Block, and Barricade keeps the doubled total permanently."
    },
    {
      "relic": "Pael's Legion",
      "card": "Impervious",
      "bonus": 1.8,
      "reason": "Impervious gives 30 Block — Pael's Legion doubles it to 60. One Impervious with Pael's Legion active becomes 60 Block in a single play."
    },
    {
      "relic": "Vambrace",
      "card": "Impervious",
      "bonus": 2.0,
      "reason": "Vambrace doubles the first Block you gain from a card each combat — Impervious gives 30 Block as your first Block card. With Vambrace, Impervious opens every fight with 60 Block."
    },
    {
      "relic": "Vambrace",
      "card": "Entrench",
      "bonus": 1.8,
      "reason": "Vambrace doubles first Block card — if Entrench is the first Block card, it doubles current Block then Vambrace doubles THAT. Can result in quadrupled Block from one Entrench play."
    },
    {
      "relic": "Sai",
      "card": "Barricade",
      "bonus": 1.8,
      "reason": "Sai gives 7 free Block at turn start every turn — Barricade retains Block between turns. With Barricade, Sai's 7 Block stacks each turn without being reset."
    },
    {
      "relic": "Sai",
      "card": "Juggernaut",
      "bonus": 1.8,
      "reason": "Sai gives 7 Block at turn start — Juggernaut deals damage on Block gain. Every turn Sai triggers free Juggernaut damage before you even play a card."
    },
    {
      "relic": "Bronze Scales",
      "card": "Barricade",
      "bonus": 1.5,
      "reason": "Bronze Scales gives 3 Thorns — Barricade builds massive Block. With high Block from Barricade, you can afford to absorb hits and trigger Thorns repeatedly for passive damage."
    },
    {
      "relic": "Brimstone",
      "card": "Whirlwind",
      "bonus": 2.0,
      "reason": "Brimstone gives +2 Strength per turn — Whirlwind hits X times. With Brimstone stacking Strength every turn, each Whirlwind hit deals progressively more damage."
    },
    {
      "relic": "Brimstone",
      "card": "Thrash",
      "bonus": 2.0,
      "reason": "Brimstone gives +2 Strength per turn — Thrash hits multiple times. Each Thrash benefits from Strength on every hit, and Brimstone passively amplifies this every turn."
    },
    {
      "relic": "Brimstone",
      "card": "Twin Strike",
      "bonus": 1.8,
      "reason": "Brimstone gives +2 Strength per turn — Twin Strike hits twice, applying Strength to both hits. With Brimstone, Twin Strike scales faster than single-hit attacks."
    },
    {
      "relic": "Ruined Helmet",
      "card": "Demon Form",
      "bonus": 2.0,
      "reason": "Ruined Helmet doubles first Strength gain per combat — Demon Form gives Strength every turn. If Demon Form is the first source, Ruined Helmet doubles the turn 2 Strength gain for a massive early spike."
    },
    {
      "relic": "Ruined Helmet",
      "card": "Inflame",
      "bonus": 1.8,
      "reason": "Ruined Helmet doubles first Strength gain — Inflame gives 2 Strength (4 upgraded). As your first Strength source, Inflame with Ruined Helmet gives 4-8 Strength from one card."
    },
    {
      "relic": "Paper Phrog",
      "card": "Whirlwind",
      "bonus": 2.0,
      "reason": "Paper Phrog makes Vulnerable enemies take 75% more damage (not 50%) — Whirlwind hits X times. Each hit applies the enhanced Vulnerable multiplier, turning Whirlwind into a massive damage spike."
    },
    {
      "relic": "Paper Phrog",
      "card": "Uppercut",
      "bonus": 1.8,
      "reason": "Uppercut applies Weak and Vulnerable — Paper Phrog amplifies Vulnerable to 75% extra damage. Uppercut sets up Vulnerable and Paper Phrog makes all follow-up attacks hit 75% harder."
    },
    {
      "relic": "Centennial Puzzle",
      "card": "Bloodletting",
      "bonus": 1.8,
      "reason": "Bloodletting costs 3 HP — Centennial Puzzle draws 3 cards the first time you lose HP per combat. Bloodletting on Turn 1 guarantees 3 free draw cards from Centennial Puzzle."
    },
    {
      "relic": "Centennial Puzzle",
      "card": "Breakthrough",
      "bonus": 1.5,
      "reason": "Breakthrough costs 1 HP — Centennial Puzzle draws 3 cards first time you lose HP. Breakthrough triggers Centennial Puzzle's draw immediately for a net +2 cards from a 1 HP investment."
    },
    {
      "relic": "Demon Tongue",
      "card": "Bloodletting",
      "bonus": 2.0,
      "reason": "Bloodletting costs 3 HP — Demon Tongue heals the first HP you lose per turn. Demon Tongue makes Bloodletting effectively free once per turn, removing its HP cost entirely."
    },
    {
      "relic": "Demon Tongue",
      "card": "Offering",
      "bonus": 1.8,
      "reason": "Offering costs 6 HP — Demon Tongue heals first HP loss per turn. Offering activates Demon Tongue's heal, recovering some of the HP cost while still gaining 2 Energy and 3 cards."
    },
    {
      "relic": "Self-Forming Clay",
      "card": "Rupture",
      "bonus": 1.8,
      "reason": "Rupture gains Strength when you lose HP — Self-Forming Clay gains 3 Block when you lose HP. Both trigger simultaneously from self-damage, giving Strength AND Block from the same HP loss."
    },
    {
      "relic": "Self-Forming Clay",
      "card": "Crimson Mantle",
      "bonus": 1.5,
      "reason": "Crimson Mantle guarantees 1 HP loss per turn — Self-Forming Clay gains 3 Block from that HP loss. Crimson Mantle passively gives 3 Block per turn via Self-Forming Clay."
    },
    {
      "relic": "Strike Dummy",
      "card": "Perfected Strike",
      "bonus": 2.5,
      "reason": "Strike Dummy gives +3 damage to all Strike cards — Perfected Strike gains 3 damage per Strike in deck. Strike Dummy doesn't add a Strike but makes every existing Strike hit for 3 more, amplifying Perfected Strike's payoff."
    },
    {
      "relic": "Strike Dummy",
      "card": "Twin Strike",
      "bonus": 2.0,
      "reason": "Strike Dummy gives +3 to Strike cards — Twin Strike hits twice. Twin Strike gets +6 total from Strike Dummy (3 per hit), making it hit for 16 damage instead of 10."
    },
    {
      "relic": "Strike Dummy",
      "card": "Pommel Strike",
      "bonus": 1.8,
      "reason": "Strike Dummy makes all Strike cards deal +3 — Pommel Strike draws while dealing Strike damage. Every Pommel Strike with Strike Dummy hits for 12 instead of 9 while cycling."
    },
    {
      "relic": "Ninja Scroll",
      "card": "Accuracy",
      "bonus": 2.5,
      "reason": "Ninja Scroll adds 3 free Shivs at combat start — Accuracy gives +4 damage per Shiv (+6 upgraded). Starting every fight with 3 Shivs means Accuracy immediately pays off for 12-18 bonus damage before Turn 1."
    },
    {
      "relic": "Ninja Scroll",
      "card": "Finisher",
      "bonus": 2.0,
      "reason": "Ninja Scroll adds 3 free Shivs at combat start — Finisher deals 4 damage per Attack played this turn. Starting with 3 Shivs guarantees Finisher hits for at least 12 bonus damage on Turn 1."
    },
    {
      "relic": "Ninja Scroll",
      "card": "Knife Trap",
      "bonus": 2.0,
      "reason": "Ninja Scroll gives 3 Shivs to start — Knife Trap then fires 10-20 more Shivs. The 3 starting Shivs don't directly fuel Knife Trap but set up the board for immediate Shiv synergies."
    },
    {
      "relic": "Helical Dart",
      "card": "Knife Trap",
      "bonus": 2.0,
      "reason": "Knife Trap fires 10-20 Shivs in one turn — Helical Dart gives +1 Dexterity per Shiv played this turn. During Knife Trap, 15 Shivs give +15 Dexterity this turn, making all Block cards enormous."
    },
    {
      "relic": "Helical Dart",
      "card": "Infinite Blades",
      "bonus": 1.8,
      "reason": "Infinite Blades generates a free Shiv every turn — Helical Dart gives +1 Dexterity per Shiv played. Each free Shiv from Infinite Blades adds +1 Dexterity for the rest of that turn."
    },
    {
      "relic": "Helical Dart",
      "card": "Accuracy",
      "bonus": 1.8,
      "reason": "Accuracy boosts Shiv damage — Helical Dart adds Dexterity per Shiv. With both, each Shiv plays both deals more damage (Accuracy) and generates Block (Dexterity from Helical Dart)."
    },
    {
      "relic": "Joss Paper",
      "card": "Shiv",
      "bonus": 1.8,
      "reason": "Shivs Exhaust when played — Joss Paper draws 1 card per 5 Exhausts. In Shiv-heavy turns with 5-10 Shivs, Joss Paper draws 1-2 extra cards passively."
    },
    {
      "relic": "Joss Paper",
      "card": "Blade Dance",
      "bonus": 1.5,
      "reason": "Blade Dance generates 3 Shivs that Exhaust — Joss Paper draws from Exhausts. Each Blade Dance contributes 3 Exhausts toward Joss Paper's draw threshold."
    },
    {
      "relic": "Tingsha",
      "card": "Acrobatics",
      "bonus": 1.8,
      "reason": "Acrobatics draws 3 and discards 1 — Tingsha deals 3 damage per card discarded during your turn. Acrobatics discards 1 card, which triggers Tingsha for 3 free damage every Acrobatics play."
    },
    {
      "relic": "Tingsha",
      "card": "Calculated Gamble",
      "bonus": 2.0,
      "reason": "Calculated Gamble discards entire hand — Tingsha deals 3 damage per discarded card. Discarding 5 cards with Calculated Gamble triggers 15 damage from Tingsha in one play."
    },
    {
      "relic": "Tingsha",
      "card": "Tools of the Trade",
      "bonus": 1.8,
      "reason": "Tools of the Trade discards 1 card at start of each turn passively — Tingsha deals 3 damage per discard. Tools gives 3 free Tingsha damage every single turn passively."
    },
    {
      "relic": "Tough Bandages",
      "card": "Calculated Gamble",
      "bonus": 2.0,
      "reason": "Calculated Gamble discards entire hand — Tough Bandages gives 3 Block per discarded card. Discarding 5 cards gives 15 free Block from one Calculated Gamble."
    },
    {
      "relic": "Tough Bandages",
      "card": "Tools of the Trade",
      "bonus": 1.8,
      "reason": "Tools of the Trade discards 1 per turn passively — Tough Bandages gives 3 Block per discard. Tools gives 3 free Block every turn passively, stacking to massive totals."
    },
    {
      "relic": "Tough Bandages",
      "card": "Acrobatics",
      "bonus": 1.8,
      "reason": "Acrobatics discards 1 card — Tough Bandages gives 3 Block per discard. Every Acrobatics play generates 3 extra Block on top of its draw."
    },
    {
      "relic": "Snecko Skull",
      "card": "Noxious Fumes",
      "bonus": 2.0,
      "reason": "Noxious Fumes applies 2 Poison to all enemies each turn — Snecko Skull adds +1 Poison per application. Noxious Fumes now applies 3 Poison per turn to all enemies passively."
    },
    {
      "relic": "Snecko Skull",
      "card": "Deadly Poison",
      "bonus": 2.0,
      "reason": "Deadly Poison applies 5 Poison — Snecko Skull adds +1 per application, so it applies 6 Poison. Every Deadly Poison with Snecko Skull stacks Poison 20% faster."
    },
    {
      "relic": "Snecko Skull",
      "card": "Poisoned Stab",
      "bonus": 1.8,
      "reason": "Poisoned Stab applies 3 Poison — Snecko Skull adds +1, making it 4 Poison per Stab. Poisoned Stab with Snecko Skull hits for 4 damage AND applies 4 Poison."
    },
    {
      "relic": "Snecko Skull",
      "card": "Bouncing Flask",
      "bonus": 1.8,
      "reason": "Bouncing Flask applies 3 Poison 3 times — Snecko Skull adds +1 per application for 4 Poison each bounce. Bouncing Flask with Snecko Skull applies 12 Poison total instead of 9."
    },
    {
      "relic": "Twisted Funnel",
      "card": "Bubble Bubble",
      "bonus": 2.0,
      "reason": "Twisted Funnel applies 4 Poison to ALL enemies at combat start — Bubble Bubble doubles existing Poison. Starting with 4 Poison from Twisted Funnel means Bubble Bubble immediately doubles to 8 on Turn 1."
    },
    {
      "relic": "Twisted Funnel",
      "card": "Accelerant",
      "bonus": 1.8,
      "reason": "Twisted Funnel starts each fight with 4 AoE Poison — Accelerant multiplies existing Poison. Turn 2 Accelerant immediately benefits from the Twisted Funnel Poison already stacked."
    },
    {
      "relic": "Unsettling Lamp",
      "card": "Deadly Poison",
      "bonus": 2.0,
      "reason": "Deadly Poison applies 5 Poison — Unsettling Lamp doubles the first debuff effect per combat. The first Deadly Poison applies 10 Poison instead of 5."
    },
    {
      "relic": "Unsettling Lamp",
      "card": "Noxious Fumes",
      "bonus": 2.0,
      "reason": "Noxious Fumes applies Poison passively — Unsettling Lamp doubles first debuff per combat. First Noxious Fumes activation applies double Poison to all enemies."
    },
    {
      "relic": "Unsettling Lamp",
      "card": "Deathbringer",
      "bonus": 2.0,
      "reason": "Deathbringer applies AoE Doom — Unsettling Lamp doubles first debuff. First Deathbringer applies double Doom to all enemies, reaching the execute threshold much faster."
    },
    {
      "relic": "Lunar Pastry",
      "card": "Alignment",
      "bonus": 2.0,
      "reason": "Alignment converts Stars into Energy — Lunar Pastry generates 1 Star at end of every turn. With Lunar Pastry passively accumulating Stars, Alignment has consistent Stars to convert into Energy every turn."
    },
    {
      "relic": "Lunar Pastry",
      "card": "Seven Stars",
      "bonus": 2.0,
      "reason": "Lunar Pastry generates Stars every turn — Seven Stars costs 7 Stars and hits 49 times. Lunar Pastry gradually pays toward Seven Stars' Star cost, making it more consistently playable."
    },
    {
      "relic": "Lunar Pastry",
      "card": "Radiate",
      "bonus": 1.8,
      "reason": "Lunar Pastry gives 1 Star per turn — Radiate deals 3 AoE per Star gained this turn. Even 1 extra Star from Lunar Pastry adds 3 AoE to every Radiate play."
    },
    {
      "relic": "Galactic Dust",
      "card": "Royal Gamble",
      "bonus": 1.8,
      "reason": "Royal Gamble gives 9 Stars in one play — Galactic Dust gives 10 Block per 10 Stars spent. Playing Royal Gamble immediately triggers Galactic Dust for 9 Block (9 Stars × 1 = 9 triggers)."
    },
    {
      "relic": "Galactic Dust",
      "card": "Alignment",
      "bonus": 1.8,
      "reason": "Alignment converts Stars to Energy — Galactic Dust converts Star spending to Block. Both use Stars as a resource, so Star-generating cards fuel both Alignment's Energy AND Galactic Dust's Block simultaneously."
    },
    {
      "relic": "Mini Regent",
      "card": "Alignment",
      "bonus": 1.8,
      "reason": "Alignment spends Stars for Energy — Mini Regent gives +1 Strength when Stars are first spent per turn. Every Alignment play also triggers Mini Regent's Strength gain as a free bonus."
    },
    {
      "relic": "Mini Regent",
      "card": "Seven Stars",
      "bonus": 1.8,
      "reason": "Seven Stars spends 7 Stars at once — Mini Regent gives 1 Strength first time Stars are spent per turn. Every Seven Stars play gives 1 free Strength via Mini Regent."
    },
    {
      "relic": "Fencing Manual",
      "card": "Sovereign Blade",
      "bonus": 2.5,
      "reason": "Fencing Manual starts each combat with Forge 10 — Sovereign Blade deals damage equal to total Forge. Starting with 10 Forge from Fencing Manual means the Blade deals 10 damage before any other Forge is added."
    },
    {
      "relic": "Fencing Manual",
      "card": "Conqueror",
      "bonus": 2.0,
      "reason": "Fencing Manual starts with Forge 10 — Conqueror doubles current Forge. Starting at Forge 10 instead of 0 means Conqueror immediately doubles to 20, shortcutting the Forge buildup phase."
    },
    {
      "relic": "Fencing Manual",
      "card": "Beat into Shape",
      "bonus": 1.8,
      "reason": "Beat into Shape adds Forge — Fencing Manual starts with Forge 10. Starting at Forge 10 means Beat into Shape's Forge adds to a higher base, making the Blade strong faster."
    },
    {
      "relic": "Vitruvian Minion",
      "card": "BEGONE!",
      "bonus": 1.8,
      "reason": "BEGONE! generates Minion Dive Bomb tokens — Vitruvian Minion doubles Minion card damage. BEGONE! generates Minion Dive Bombs dealing 26 damage instead of 13 with Vitruvian Minion."
    },
    {
      "relic": "Vitruvian Minion",
      "card": "GUARDS!!!",
      "bonus": 1.8,
      "reason": "GUARDS!!! generates Minion Sacrifice tokens — Vitruvian Minion doubles Minion card Block. GUARDS!!! generates Minion Sacrifices giving 18 Block instead of 9 with Vitruvian Minion."
    },
    {
      "relic": "Funerary Mask",
      "card": "Haunt",
      "bonus": 2.5,
      "reason": "Funerary Mask adds 3 Souls to Draw Pile at combat start — Haunt deals 6 AoE per Soul generation. The 3 free Souls from Funerary Mask immediately trigger 18 AoE from Haunt before Turn 1 even starts."
    },
    {
      "relic": "Funerary Mask",
      "card": "Death March",
      "bonus": 2.0,
      "reason": "Funerary Mask adds 3 Souls to Draw Pile — Death March scales with cards drawn this turn. Drawing 3 Souls from Funerary Mask adds 9 bonus damage to Death March in the turn you draw them."
    },
    {
      "relic": "Funerary Mask",
      "card": "Oblivion",
      "bonus": 1.8,
      "reason": "Funerary Mask adds 3 Souls at combat start — Oblivion scales with cheap cards including Souls. Starting with Souls in deck means Oblivion hits for more from turn 1."
    },
    {
      "relic": "Big Hat",
      "card": "Haunt",
      "bonus": 1.8,
      "reason": "Big Hat adds 2 random Ethereal cards to Hand at combat start — if any are Souls, Haunt fires immediately. Big Hat has a chance to immediately trigger Haunt before Turn 1."
    },
    {
      "relic": "Undying Sigil",
      "card": "End of Days",
      "bonus": 2.0,
      "reason": "End of Days executes all enemies at or below Doom count — Undying Sigil makes enemies at Doom threshold deal 50% less damage. As enemies approach the execution threshold, they deal half damage, protecting you until End of Days goes off."
    },
    {
      "relic": "Undying Sigil",
      "card": "No Escape",
      "bonus": 1.8,
      "reason": "No Escape stacks massive single-target Doom — Undying Sigil protects you while the enemy is in Doom range. Once No Escape pushes an enemy into execute range, Undying Sigil means they deal half damage until killed."
    },
    {
      "relic": "Undying Sigil",
      "card": "Deathbringer",
      "bonus": 1.8,
      "reason": "Deathbringer applies AoE Doom — Undying Sigil makes Doom-threshold enemies deal half damage. Deathbringer's AoE Doom puts multiple enemies into Undying Sigil's protective range simultaneously."
    },
    {
      "relic": "Book Repair Knife",
      "card": "End of Days",
      "bonus": 1.8,
      "reason": "End of Days executes all enemies at Doom threshold — Book Repair Knife heals 3 HP per non-Minion Doom kill. End of Days can trigger multiple Doom kills simultaneously, healing 3 HP per enemy killed."
    },
    {
      "relic": "Book Repair Knife",
      "card": "Deathbringer",
      "bonus": 1.5,
      "reason": "Deathbringer applies AoE Doom — Book Repair Knife heals 3 HP per Doom kill. More Doom stacks from Deathbringer means more potential Doom kills and more healing from Book Repair Knife."
    },
    {
      "relic": "Pocketwatch",
      "card": "End of Days",
      "bonus": 1.8,
      "reason": "End of Days is a high-cost slow play — Pocketwatch draws 3 extra cards if you play 3 or fewer cards. In a Doom deck where you sometimes pass turns waiting for Doom, Pocketwatch rewards patience with extra draw."
    },
    {
      "relic": "Diamond Diadem",
      "card": "Deathbringer",
      "bonus": 1.8,
      "reason": "Deathbringer is expensive — Diamond Diadem halves damage when you play 2 or fewer cards. A turn where you play just Deathbringer activates Diamond Diadem's protection while setting up Doom kills."
    },
    {
      "relic": "Bone Flute",
      "card": "Rattle",
      "bonus": 2.0,
      "reason": "Rattle hits X times based on Osty attacks used this turn — Bone Flute gains 2 Block per Osty attack. Both scale with Osty attack count, so a Rattle-heavy turn simultaneously scales damage AND generates massive Block from Bone Flute."
    },
    {
      "relic": "Bone Flute",
      "card": "Sic'Em",
      "bonus": 1.8,
      "reason": "Sic'Em is an Osty attack with high Summon — Bone Flute gains 2 Block per Osty attack. Every Sic'Em play triggers Bone Flute for 2 Block while growing Osty for future Rattle scaling."
    },
    {
      "relic": "Bone Flute",
      "card": "Flatten",
      "bonus": 1.8,
      "reason": "Flatten adds flat damage per Osty attack used this turn — Bone Flute gains 2 Block per Osty attack. Both reward the same behavior: using many Osty attacks in one turn."
    },
    {
      "relic": "Bookmark",
      "card": "Rattle",
      "bonus": 1.5,
      "reason": "Rattle is expensive with high Summon count — Bookmark reduces cost of random Retained cards. If Rattle is Retained, Bookmark reduces its cost making it easier to play on big turns."
    },
    {
      "relic": "Data Disk",
      "card": "Multi-Cast",
      "bonus": 2.5,
      "reason": "Multi-Cast evokes the leftmost Orb X times — Data Disk gives +1 Focus, making all Orbs deal more per passive trigger. With Focus, each Multi-Cast evoke does significantly more damage or healing."
    },
    {
      "relic": "Data Disk",
      "card": "Tesla Coil",
      "bonus": 2.0,
      "reason": "Tesla Coil scales with Focus — Data Disk gives +1 Focus. Each Focus point from Data Disk directly amplifies Tesla Coil's damage output every time it triggers."
    },
    {
      "relic": "Data Disk",
      "card": "Loop",
      "bonus": 2.0,
      "reason": "Loop permanently gives a chosen Orb a free Evoke — Data Disk gives Focus making all Orb passives stronger. The Looped Orb's passive is directly amplified by every Focus point from Data Disk."
    },
    {
      "relic": "Gold-Plated Cables",
      "card": "Defragment",
      "bonus": 2.0,
      "reason": "Defragment gives +1 Focus per play — Gold-Plated Cables makes rightmost Orb trigger passive twice. Each Focus from Defragment amplifies the bonus trigger from Gold-Plated Cables."
    },
    {
      "relic": "Gold-Plated Cables",
      "card": "Loop",
      "bonus": 2.0,
      "reason": "Loop gives a chosen Orb a free Evoke — Gold-Plated Cables also gives rightmost Orb an extra passive trigger. If the Looped Orb is the rightmost, it fires three times instead of once per turn."
    },
    {
      "relic": "Gold-Plated Cables",
      "card": "Tesla Coil",
      "bonus": 1.8,
      "reason": "Tesla Coil fires Lightning per Evoke — Gold-Plated Cables gives rightmost Orb an extra passive trigger. If Tesla Coil is rightmost, Gold-Plated Cables fires it twice every turn for double Lightning."
    },
    {
      "relic": "Runic Capacitor",
      "card": "Capacitor",
      "bonus": 2.0,
      "reason": "Capacitor adds 2 extra Orb Slots — Runic Capacitor already gives +3 Orb Slots. Together they give 5 extra Orb Slots for 8 total, enabling enormous Orb queues and massive passive damage/healing."
    },
    {
      "relic": "Runic Capacitor",
      "card": "Barrage",
      "bonus": 1.8,
      "reason": "Barrage deals damage per Orb Slot — Runic Capacitor gives +3 Orb Slots. With 6 Orb Slots from Runic Capacitor, Barrage deals 6× its base damage per hit."
    },
    {
      "relic": "Runic Capacitor",
      "card": "Multi-Cast",
      "bonus": 1.8,
      "reason": "Multi-Cast evokes leftmost Orb X times — Runic Capacitor gives +3 Orb Slots for more Orb variety. More Orb Slots mean more Orbs queued for Multi-Cast to choose from."
    },
    {
      "relic": "Emotion Chip",
      "card": "Defragment",
      "bonus": 1.8,
      "reason": "Emotion Chip triggers all Orb passives if you took damage last turn — Defragment gives Focus amplifying all passives. With Defragment stacking Focus, Emotion Chip's bonus trigger becomes enormously powerful."
    },
    {
      "relic": "Metronome",
      "card": "Capacitor",
      "bonus": 1.8,
      "reason": "Capacitor adds Orb Slots enabling more Orbs — Metronome fires 30 AoE once you channel 7 Orbs. More Orb Slots from Capacitor means you fill the 7-Orb threshold faster."
    },
    {
      "relic": "Metronome",
      "card": "Defragment",
      "bonus": 1.5,
      "reason": "Defragment helps channel Orbs efficiently with Focus — Metronome requires channeling 7 Orbs. Defragment's Focus makes each Orb more powerful before Metronome fires."
    },
    {
      "relic": "Symbiotic Virus",
      "card": "Darkness",
      "bonus": 1.8,
      "reason": "Symbiotic Virus channels 1 Dark at combat start — Darkness also channels Dark. Having a Dark Orb already from Symbiotic Virus lets Darkness immediately double it."
    },
    {
      "relic": "Symbiotic Virus",
      "card": "Multi-Cast",
      "bonus": 1.8,
      "reason": "Symbiotic Virus starts with 1 Dark Orb — Multi-Cast evokes leftmost Orb. Starting with a Dark Orb means first Multi-Cast immediately benefits from a pre-stacked Dark."
    },
    {
      "relic": "Power Cell",
      "card": "Claw",
      "bonus": 2.5,
      "reason": "Power Cell adds 2 zero-cost Draw Pile cards to Hand at combat start — with multiple Claws in deck, Power Cell consistently puts Claws directly in your opening hand. Starting every fight with 2 Claws in hand is enormous for Claw scaling."
    },
    {
      "relic": "Power Cell",
      "card": "All for One",
      "bonus": 2.0,
      "reason": "Power Cell adds 2 zero-cost cards to opening Hand — All for One retrieves all zero-cost Discard cards. Power Cell guarantees zero-cost cards start in Hand, and All for One later refills them from Discard."
    },
    {
      "relic": "Power Cell",
      "card": "Scrape",
      "bonus": 1.8,
      "reason": "Power Cell puts 2 zero-cost cards in opening Hand — Scrape cycles through deck to find zero-cost cards. With zero-cost cards already in Hand from Power Cell, Scrape draws 4 more cards to find additional Claws faster."
    },
    {
      "relic": "Iron Club",
      "card": "Claw",
      "bonus": 2.0,
      "reason": "Iron Club draws 1 card every 4 cards played — Claw builds play 10+ cards per turn. With Iron Club, every 4 Claws drawn is also 1 extra draw, fueling further Claw plays."
    },
    {
      "relic": "Iron Club",
      "card": "All for One",
      "bonus": 2.0,
      "reason": "Iron Club draws every 4 cards played — All for One retrieves all zero-cost Discard cards. After All for One floods your hand with Claws, Iron Club's draw triggers fire rapidly as you play them all."
    },
    {
      "relic": "Nunchaku",
      "card": "Claw",
      "bonus": 2.0,
      "reason": "Claw is a zero-cost attack — Nunchaku gains Energy every 10 Attacks. In Claw builds playing 10-15 Claws per turn, Nunchaku fires 1-2 free Energy every turn."
    },
    {
      "relic": "Shuriken",
      "card": "Claw",
      "bonus": 2.0,
      "reason": "Shuriken gives +1 permanent Strength every 3 Attacks — Claw builds play 10-15 attacks per turn. Claw builds consistently trigger Shuriken 3-5 times per turn for 3-5 permanent Strength."
    },
    {
      "relic": "Kunai",
      "card": "Claw",
      "bonus": 2.0,
      "reason": "Kunai gives +1 Dexterity every 3 Attacks — Claw builds play 10-15 attacks per turn. Claw builds trigger Kunai 3-5 times per turn for 3-5 permanent Dexterity."
    },
    {
      "relic": "Pen Nib",
      "card": "Claw",
      "bonus": 1.8,
      "reason": "Pen Nib doubles every 10th Attack — Claw builds hit the 10-Attack threshold every turn. Pen Nib fires every single turn in Claw builds, doubling one Claw's damage reliably."
    },
    {
      "relic": "History Course",
      "card": "Noxious Fumes",
      "bonus": 2.0,
      "reason": "History Course plays a copy of your last Attack or Skill each turn — Noxious Fumes is a Skill applying Poison. If Noxious Fumes was your last Skill, History Course automatically doubles Poison application every turn for free."
    },
    {
      "relic": "History Course",
      "card": "Deadly Poison",
      "bonus": 1.8,
      "reason": "History Course replays last Attack or Skill — Deadly Poison applies 5 Poison. If Deadly Poison was last, History Course applies another 5 Poison each turn for free, doubling your Poison stacking rate."
    },
    {
      "relic": "History Course",
      "card": "Whirlwind",
      "bonus": 2.0,
      "reason": "History Course replays last Attack or Skill — Whirlwind hits X times. If Whirlwind was last, History Course automatically replays an X-cost Whirlwind the next turn for free AoE."
    },
    {
      "relic": "History Course",
      "card": "Shining Strike",
      "bonus": 1.8,
      "reason": "History Course replays last Attack or Skill — Shining Strike deals damage and gives Stars. If Shining Strike was last, History Course gives free Stars and damage every turn passively."
    },
    {
      "relic": "History Course",
      "card": "Rattle",
      "bonus": 1.8,
      "reason": "History Course replays last Attack or Skill — Rattle is a multi-hit Osty attack. If Rattle was last, History Course plays a free Rattle copy every turn for continuous Osty scaling."
    },
    {
      "relic": "Ghost Seed",
      "card": "Tactician",
      "bonus": 2.0,
      "reason": "Ghost Seed gives Strikes and Defends Ethereal — they auto-discard. If Tactician is in hand alongside Strikes/Defends, the auto-discards trigger Sly. Ghost Seed accelerates Sly triggers by auto-discarding dead cards."
    },
    {
      "relic": "Ghost Seed",
      "card": "Tools of the Trade",
      "bonus": 1.8,
      "reason": "Ghost Seed makes Strikes/Defends auto-discard — Tools of the Trade already discards 1 per turn. Ghost Seed reduces the number of dead cards in hand by auto-discarding Strikes, making Tools' discard hit more useful Sly cards."
    },
    {
      "relic": "Razor Tooth",
      "card": "Whirlwind",
      "bonus": 2.0,
      "reason": "Razor Tooth upgrades every Attack and Skill played this combat — Whirlwind hits X times. Upgraded Whirlwind hits for more per swing. With Razor Tooth, Whirlwind is upgraded the moment it's played."
    },
    {
      "relic": "Razor Tooth",
      "card": "Perfected Strike",
      "bonus": 1.8,
      "reason": "Razor Tooth upgrades every card when played — Perfected Strike upgraded deals significantly more per Strike. As soon as Perfected Strike is played for the first time, Razor Tooth upgrades it for all future plays."
    },
    {
      "relic": "Molten Egg",
      "card": "Whirlwind",
      "bonus": 1.8,
      "reason": "Molten Egg auto-upgrades every Attack added to deck — Whirlwind upgraded hits more per swing. Every Whirlwind picked up is immediately upgraded, giving more value from the first play."
    },
    {
      "relic": "Molten Egg",
      "card": "Thrash",
      "bonus": 1.8,
      "reason": "Molten Egg auto-upgrades every Attack — Thrash upgraded hits significantly harder. In a Strength build where Thrash multi-hits are key, Molten Egg ensures every Thrash is fully upgraded immediately."
    },
    {
      "relic": "Frozen Egg",
      "card": "Defragment",
      "bonus": 2.0,
      "reason": "Frozen Egg auto-upgrades every Power added to deck — Defragment upgraded gives 2 Focus instead of 1. Every Defragment picked up is immediately upgraded, halving the setup time for maximum Focus."
    },
    {
      "relic": "Frozen Egg",
      "card": "Corruption",
      "bonus": 2.0,
      "reason": "Frozen Egg auto-upgrades every Power — Corruption upgraded makes Skills cost 0 instead of just reducing cost. Every Corruption picked up is immediately upgraded to its full power."
    },
    {
      "relic": "Frozen Egg",
      "card": "Genesis",
      "bonus": 1.8,
      "reason": "Frozen Egg auto-upgrades every Power — Genesis upgraded gives 3 Stars at start of each turn instead of 2. Every Genesis is immediately upgraded, massively accelerating the Star engine."
    },
    {
      "relic": "Toxic Egg",
      "card": "Corruption",
      "bonus": 2.0,
      "reason": "Toxic Egg auto-upgrades every Skill added — Corruption is a Skill. With Toxic Egg, every Corruption picked up is immediately Upgraded to give 0-cost Skills instead of reduced-cost."
    },
    {
      "relic": "Toxic Egg",
      "card": "Feel No Pain",
      "bonus": 1.8,
      "reason": "Toxic Egg auto-upgrades every Skill — Feel No Pain upgraded gives 5 Block per Exhaust instead of 3. Every Feel No Pain is immediately more powerful, making the Exhaust engine generate more Block per cycle."
    },
    {
      "relic": "Unsettling Lamp",
      "card": "Putrefy",
      "bonus": 2.0,
      "reason": "Putrefy applies 2 Weak and 2 Vulnerable — Unsettling Lamp doubles the first debuff per combat. The first Putrefy applies 4 Weak and 4 Vulnerable instead of 2 each, setting up a massive damage amplification turn."
    },
    {
      "relic": "Unsettling Lamp",
      "card": "Shockwave",
      "bonus": 2.0,
      "reason": "Shockwave applies 3 Weak and 3 Vulnerable to ALL enemies — Unsettling Lamp doubles first debuff. First Shockwave applies 6 Weak and 6 Vulnerable AoE instead of 3 each."
    },
    {
      "relic": "Bag of Marbles",
      "card": "Whirlwind",
      "bonus": 1.8,
      "reason": "Bag of Marbles applies 1 Vulnerable to all enemies at combat start — Whirlwind hits X times. Starting every fight with enemies Vulnerable means every Whirlwind hit deals 50% more damage from Turn 1."
    },
    {
      "relic": "Bag of Marbles",
      "card": "Radiate",
      "bonus": 1.8,
      "reason": "Bag of Marbles Vulnerables all enemies at combat start — Radiate deals AoE per Star gained this turn. Starting with enemies Vulnerable means Radiate's AoE hits 50% harder from Turn 1."
    },
    {
      "relic": "Red Mask",
      "card": "Accelerant",
      "bonus": 1.8,
      "reason": "Red Mask Weakens all enemies at combat start — Accelerant multiplies all Poison. Starting with enemies Weakened means they deal 25% less damage while Accelerant is ramping Poison."
    },
    {
      "relic": "Ice Cream",
      "card": "Seven Stars",
      "bonus": 2.0,
      "reason": "Seven Stars costs 7 Stars — Ice Cream conserves unused Energy between turns. With Ice Cream, unused Energy from turns 1-2 carries over to enable playing Seven Stars alongside other cards on the same turn."
    },
    {
      "relic": "Ice Cream",
      "card": "Multi-Cast",
      "bonus": 2.0,
      "reason": "Multi-Cast costs X Energy — Ice Cream conserves unused Energy between turns. Carrying over 1-2 Energy from previous turns enables a much larger Multi-Cast X value on the key turn."
    },
    {
      "relic": "Chandelier",
      "card": "Seven Stars",
      "bonus": 1.8,
      "reason": "Chandelier gives 3 Energy at start of Turn 3 — Seven Stars costs 7 Stars. The 3 extra Energy on Turn 3 can help pay for Seven Stars' Energy cost allowing it to be played earlier."
    },
    {
      "relic": "Very Hot Cocoa",
      "card": "Seven Stars",
      "bonus": 2.0,
      "reason": "Very Hot Cocoa gives +4 Energy per combat start — Seven Stars costs 7 Stars and is expensive. Starting every combat with 7 Energy means Seven Stars can be played immediately on Turn 1."
    },
    {
      "relic": "Pael's Flesh",
      "card": "Multi-Cast",
      "bonus": 1.8,
      "reason": "Pael's Flesh gives extra Energy from Turn 3 onwards — Multi-Cast uses Energy to Evoke X times. Extra Energy from Pael's Flesh each turn directly enables larger Multi-Cast X values every turn."
    },
    {
      "relic": "Lost Wisp",
      "card": "Defragment",
      "bonus": 2.0,
      "reason": "Defragment is a Power that gives +1 Focus — Lost Wisp deals 8 AoE every time you play a Power. Each Defragment play triggers Lost Wisp for 8 free AoE on top of its Focus gain."
    },
    {
      "relic": "Burning Sticks",
      "card": "Dark Embrace",
      "bonus": 1.8,
      "reason": "Dark Embrace draws a card whenever you Exhaust — Burning Sticks adds a copy of the first Exhausted Skill back to Hand. Together they create a loop: Exhaust a Skill → Burning Sticks returns it → Dark Embrace draws another card."
    },
    {
      "relic": "Stone Calendar",
      "card": "Deathbringer",
      "bonus": 1.8,
      "reason": "Stone Calendar deals 52 AoE at Turn 7 — Deathbringer applies AoE Doom. In Doom builds that survive to Turn 7, Stone Calendar fires as a backup win condition while Doom counts down."
    },
    {
      "relic": "Pocketwatch",
      "card": "Time's Up",
      "bonus": 1.8,
      "reason": "Time's Up is a high-cost finisher Doom builds play on crucial turns — Pocketwatch draws 3 extra cards if you play 3 or fewer cards in a turn. A turn where you play just Time's Up triggers Pocketwatch's draw for next turn."
    },
    {
      "relic": "Diamond Diadem",
      "card": "End of Days",
      "bonus": 1.8,
      "reason": "End of Days is an expensive single-card execute — Diamond Diadem halves damage when you play 2 or fewer cards per turn. Playing just End of Days activates Diamond Diadem's protection while executing all Doomed enemies."
    },
    {
      "relic": "Art of War",
      "card": "Noxious Fumes",
      "bonus": 1.8,
      "reason": "Noxious Fumes is a Power that passively applies Poison each turn — Art of War gives +1 Energy next turn if you play no Attacks this turn. A turn spent only playing Noxious Fumes and Skills gives free Energy next turn while Poison stacks."
    },
    {
      "relic": "Ripple Basin",
      "card": "Noxious Fumes",
      "bonus": 1.5,
      "reason": "Noxious Fumes lets you skip Attack plays while Poison does damage — Ripple Basin gives 4 Block if you play no Attacks this turn. A turn with only Noxious Fumes gives both passive Poison AND 4 free Block from Ripple Basin."
    },
    {
      "relic": "Runic Pyramid",
      "card": "Convergence",
      "bonus": 1.8,
      "reason": "Convergence retains your Hand — Runic Pyramid means you already don't discard EOT. Together they ensure perfect hands are retained indefinitely for maximum Star setup turns."
    },
    {
      "relic": "Runic Pyramid",
      "card": "Equilibrium",
      "bonus": 1.8,
      "reason": "Equilibrium retains your Hand this turn — Runic Pyramid means your Hand never discards anyway. With both, you can build up the perfect hand across multiple turns freely."
    },
    {
      "relic": "Ringing Triangle",
      "card": "Seven Stars",
      "bonus": 1.8,
      "reason": "Seven Stars costs 7 Stars — Ringing Triangle retains your entire Hand on Turn 1. Retaining a hand containing Stars-generators means Turn 1 can safely accumulate Stars for a Turn 2 Seven Stars play."
    }
  ]
};