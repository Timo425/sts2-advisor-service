# Observed issues — advisor tuning log

Captures real failure cases noticed while playing with the advisor. Per PLAN.md Phase A.3.

Entry format:

```
## YYYY-MM-DD — short title

**Deck state:** what the deck looked like when the bad recommendation happened.
**Bad recommendation:** what the advisor said.
**What's right:** what a good player would actually do.
**Suspected cause:** which function in logic.js (or our adapter) likely produced it.
**Fix candidates:** approaches to consider.
**Status:** open / patched / regression-tested.
```

---

## 2026-05-09 — STS2MCP GET re-opens shop / treasure UI as a side effect

**Symptom:** while leaving a shop, the inventory view kept popping back up. User had to close it and exit fast or it would reopen — hard to escape.

**Cause:** STS2MCP's docs state explicitly that querying `/api/v1/singleplayer` while in `shop` state auto-opens the shop inventory; same applies to `treasure` (chest auto-opens on first query). Our watcher was polling at 1.5s, so as soon as the user dismissed the inventory, the next tick re-fired the auto-open.

**Mitigation:** raised default poll interval from 1500ms to 3000ms. Gives the user a full multi-second window to exit before the next state query. Configurable via `POLL_MS` env var.

**Better fix (not done):** detect transition-out states (proceed clicked) and pause polling for a few seconds, or stop polling once state has been stable for N consecutive ticks. The current 3s default is a blunt fix.

**Status:** mitigated 2026-05-09.

---

## 2026-05-09 — Local annotation overrides didn't reach Shunrai's logic.js (fixed)

**Symptom:** after adding `localRelicAnnotations.ANCHOR` to override Shunrai's bogus +5 scoreEffects, restarting the watcher *still* showed `+5.0 Anchor boosts strength cards` on every offering. Same pattern for local card overrides (Not Yet, Break, etc. would still hit "Unknown card" if the user hadn't seen them annotate yet).

**Why:** the `localAnnotations` overrides were applied at the `canonicalLoader` level — that affects "is this card annotated?" reporting (e.g. `npm run coverage`) but not the inner Shunrai DB inside the vm context. `logic.js`'s `scoreCard` and `scoreRelic` both read directly from that inner DB, so they were still seeing the unpatched Shunrai entries.

**Fix:** at adapter init, after loading db.js + logic.js into the vm context, walk localCardAnnotations and localRelicAnnotations and inject each entry directly into the in-vm DB (cards into the right per-character bucket, relics flat). Then re-run ensureDbNames(). Now scoreCard / scoreRelic / scoreEffects-loop all see the overrides.

**Status:** patched 2026-05-09.

---

## 2026-05-10 — Bloat pressure should be role/effect-saturation, not flat deck-size

**Note:** an earlier patch (T1, commit `0b9ff85`, reverted in `<follow-up>`) tried to address "Taunt scoring S 6.00 in a 30-card deck" by scaling all card scores down at deckSize ≥ 25 / 30 / 35. That's the wrong mechanism — there's nothing specific about a deck-size threshold, and a flat multiplier punishes useful cards equally with bloat.

**Right model:** scaling-down should follow from the deck already being saturated with the *role* or *effect* a candidate provides. That's archetype-dependent — a Sly/Discard deck wants more cards in total than a Strike deck, so "30 cards" means different things for each.

**What logic.js already does well:**
- Per-tag `satMult`: when 4+ cards in deck have a synergy tag, additional same-tag synergy bonuses dampen (the `fits X (saturated)` reasons we already see).
- Some role-balance reasoning (`already 8 generators with no engine — pick up payoffs instead`).

**What's missing or weak (potential future work):**
- "Always-useful" effects (card draw, exhaust mechanics that compound in any size deck) should be exempt from saturation pressure or even scale *up* in big decks. Currently treated the same as everything else.
- Role-balance penalties only fire on specific imbalances (e.g. "generators with no engine"); the general principle "you have plenty of this role already, don't take more unless it's outsized" isn't applied uniformly.

**Where the Taunt-at-S-6.00 issue actually lives:** the dominant score contributor was Unsettling Lamp's `+1.4` scoreEffects boost on debuff cards. That relic only doubles the *first* debuff per combat, so the persistent +1.4 is over-weighted regardless of deck size. Routes to the existing Unsettling Lamp note in T3 below.

**Status:** open observation. No mechanical fix for now — logic.js's existing per-tag saturation handles most cases adequately; broader role-saturation refinement and "always-useful" exemptions can come later if patterns surface.

---

## 2026-05-10 — Cross-card scoring imbalance: Taunt vs Howl from Beyond

**Observation:** in a Strength/Block/Exhaust ironclad deck, scoring put Taunt at S 6.00 and Howl from Beyond at S 5.29. User read Howl as materially stronger in this deck because:

- The deck already had ample block (defense=7) and the user applied vulnerable from multiple sources, so Taunt's +1 vulnerable is barely felt.
- Howl is an engine: 16 AoE damage that *replays itself from exhaust every turn for free* once played. With multiple cards that exhaust-payoff (Ashen Strike, Dark Embrace, Feel No Pain), each replay also stacks exhaust value.

**Specific weight suspicions (need more data before acting):**

- `Unsettling Lamp boosts weak/vulnerable/debuff cards` fired at +1.4 on Taunt. The relic's actual effect doubles only the *first* debuff per combat — once that's spent, additional debuff cards aren't amplified. The +1.4 may be over-rated as a persistent boost.
- Howl's combo bonus `+1.0 (passively exhausts every turn)` may undervalue an engine-class card that produces compounding exhaust + damage every turn.

**Proposed approach:** accumulate 2-3 more cases of suspect scoring across runs. If a pattern emerges (e.g. Unsettling Lamp consistently over-weighting debuff cards, or engine-tagged cards consistently undervalued), file a targeted fix:

- Override Unsettling Lamp's scoreEffects bonus magnitude (per the localRelicAnnotations pattern from Anchor / Whetstone / Horn Cleat / Captain's Wheel).
- Or adjust combo bonus formula in logic.js for `engine`-role cards (would need to rethink without editing vendored code — possibly a post-process layer).

**Status:** open observation, no fix yet. Defer until pattern is clearer.

---

## 2026-05-09 — Tier disparity between equivalent one-time-pickup relics

**Symptom:** Three relics with one-time-on-pickup effects scored very differently:

- Whetstone (A → score 5.90): upgrade 2 random Attacks
- Archaic Tooth (B → score 3.00): transform a starter card into an ancient version (e.g. Bash → Break, an outsized upgrade)
- Precarious Shears (B → score 3.00): remove 2 cards for 13 HP

The tiers don't reflect actual in-game value. Archaic Tooth's effect (free S-tier card swap) is materially stronger than Whetstone's, not weaker. Precarious Shears at 2-removals-for-13-HP is comparable to Whetstone or better.

**Bumped via local override:**
- Archaic Tooth: B → S
- Precarious Shears: B → A (also dropped the `builds: ['sly', 'claw']` restriction; removal helps almost any build)

**Status:** patched 2026-05-09. Tiers are inherently judgment calls — these are starting points; revise if play experience disagrees.

---

## 2026-05-09 — One-time-effect and fixed-effect relics over-boost cards via scoreEffects

**Pattern:** Shunrai's `db.relics` annotates several relics with `scoreEffects` that boost cards persistently, but the relic's actual game effect is either (a) one-time-on-pickup or (b) fixed/independent of card composition. The boost ends up applied forever to anything matching the tag.

**Confirmed instances (overridden in `localRelicAnnotations`):**

- **Anchor** (+5 on block/strength) — fixed 10 block at combat start. Doesn't scale any card class.
- **Whetstone** (+0.2 on damage) — one-time upgrade of 2 random Attacks on pickup. Post-pickup: zero ongoing impact. Small bonus, still incorrect.
- **Horn Cleat** (+5 on block/strength) — fixed 14 block on turn 2. Same Anchor-style bug.
- **Captain's Wheel** (+0.4 on block) — fixed 18 block on turn 3. Same persistent-but-fixed pattern; "block helps you survive to turn 3" connection is too indirect to justify a per-card bonus.

**General principle:** persistence ≠ card-scaling. A relic that runs every combat (Anchor, Horn Cleat, Captain's Wheel, etc.) but provides a *fixed* number doesn't multiply card values; it's a flat defensive (or offensive) resource. scoreEffects should only fire when the relic *amplifies* something proportional to a card class.

**Audit candidate — not yet decided:**

- **Permafrost** (+5 on power tag) — "First Power played per combat: gain 6 Block." This is per-combat, not one-time, so a Power-tag bonus is plausible. But +5 may still be too high; +1–2 might be more proportional to the 6 block reward.

**Fix mechanism:** add an entry to `localRelicAnnotations` with the same fields minus the `scoreEffects` array. The local-overrides layer wins over Shunrai's vendored entry inside the in-vm DB.

**Status:** patched for Anchor, Whetstone, Horn Cleat; Permafrost open. Would benefit from a broader audit at some point — enumerate all relics with `scoreEffects.bonus >= 3` (or even `>= 1`) and sanity-check each.

---

## 2026-05-09 — Anchor's scoreEffects pushed every offering to S 6.00

**Symptom:** at a shop on floor 25, every offered card got `+5.0 ◈ Anchor boosts strength cards` (or `block`), pushing Thunderclap, Primal Force, True Grit, Juggling, Prolong all to S 6.00 — saturated ceiling regardless of fit.

**Why it happened:** Shunrai's `db.relics.ANCHOR` entry includes:

```json
"scoreEffects": [{ "tags": ["block", "strength"], "bonus": 5 }]
```

`logic.js`'s scoreEffects loop adds `+5 × min(matchingTags, 1.5)` for any card whose `syn`/`mech`/`builds` overlap. That's a massive bonus — the relic Anchor only grants a flat 10 block at combat start, it doesn't actually scale any card class.

**Fix applied:** added `ANCHOR` override to `localRelicAnnotations` with no scoreEffects, and changed `canonicalLoader` so local entries override Shunrai (previously they were fallback-only). Local annotations file now functions as both supplement (post-snapshot cards) and patch (for upstream errors like this one).

**Status:** patched 2026-05-09. Likely a broader pattern — other relic scoreEffects in db.js may also be over-tuned or mis-tagged. Worth a quick audit pass at some point: enumerate all relics with `scoreEffects.bonus >= 3` and sanity-check whether the boost is genuinely warranted or a Shunrai-snapshot-era mistake.

---

## 2026-05-09 — Strike+ rated identically to Strike for removal

**Symptom:** at a shop's removal screen, both `Strike` and `Strike+` rank S 5.00 as removal targets ("also: S 5.00 Strike+ / S 5.00 Strike"). Strike+ deals 9 damage vs Strike's 6 — meaningfully more useful, should be a lower-priority cut.

**Why it happens:** `scoreRemoval` in `vendor/logic.js` checks `name.includes('strike')` to identify basic Strikes (with an exceptions list like 'pommel', 'perfected', etc.). Upgrade level isn't part of the discriminator, so the upgraded copy gets the same maximum-priority removal treatment as the unupgraded one.

**Same upstream gap probably applies to Defend / Defend+** (and any other "basic" the function flags as universally cuttable).

**Fix sketch:** in `scoreRemoval`, when a card is identified as a basic (Strike, Defend), check `is_upgraded` (or equivalently the `+` suffix on the friendly name) and reduce removal priority by ~1.0–1.5 if upgraded. The basic version stays S 5.00; the upgraded version drops to ~A 3.5–B 3.0 — still removable, but cut the unupgraded one first.

**Status:** open, low risk to implement once we want to tune.

---

## 2026-05-09 — Combat-only status cards leaked into deck snapshot

**Symptom:** at a shop on floor 25, the removal advisor's top target was `Dazed` at S 5.00 ("Curse/Status — remove immediately"). Dazed is a combat-only status card added by enemy effects; it isn't in the permanent deck and disappears at combat end. Same applies to Wound, Burn, Slimed, Void, Debris.

**Why it happened:** `extractDeckFromCombatState` concatenates `hand + draw_pile + discard_pile + exhaust_pile`. While in combat, status cards from enemy effects sit in those piles. We snapshotted them as if they were deck members. Then `scoreRemoval` correctly auto-rates them at S because Shunrai's logic.js explicitly treats curse/status names as top removal priority (`CURSE_NAMES = ['wound','burn','dazed','slimed','void','debris']`).

**Fix:** added `COMBAT_ONLY_STATUS_NAMES` filter in `extractDeckFromCombatState` so the six status names are dropped at snapshot time. They'll never appear in archetype detection, removal candidates, or anywhere else.

**Status:** patched 2026-05-09.

**Note for the future:** if STS2 introduces new combat-only-status cards, add them to the same set. Curse cards (Ascender's Bane, Pain, Parasite, Decay, etc.) are permanent additions and *should* still flow through the snapshot — they're real deck members and removal targets.

---

## 2026-05-15 — Combat-only token cards leaked into deck snapshot (same bug class, different cards)

**Symptom:** on a Necrobinder run, floor-4 card reward screen showed `deck 18 (cached @ floor 4)` with role counts `engine 1 · generator 8 · payoff 1 · defense 4 · +4 util`. Real permanent deck was 12 cards. Wisp (C-tier, role=generator, builds=any) was graded C 2.02 with anti-reasons "+0.5 fits Soul Engine (saturated)" and "-0.5 already 6 generators - clogs hand" — recommendation: Skip. Both reasons leaned on a generator count inflated by phantom tokens.

**Why it happened:** the cached snapshot held 4 Strike + 4 Defend + Bodyguard + Unleash + Capture Spirit + Negative Pulse + **6 Soul**. Souls are tokens added to the draw pile during combat by Capture Spirit ("Add 3 Souls into Draw Pile"); they vanish at combat end but were snapshotted mid-fight from `hand + draw_pile + discard_pile + exhaust_pile`. Same root cause as the 2026-05-09 status-card leak; the earlier fix's `COMBAT_ONLY_STATUS_NAMES` set covered enemy-applied statuses only, not player-generated tokens.

Because Soul has `builds: ["soul"]` and `role: "generator"`, the 6 phantom Souls satisfied the role-balance filter for the detected Soul Engine archetype (`generatorsInDeck` counts cards whose `builds` overlap the top archetype). Real soul-build generator count: 0. Wisp would have been the first one, not the seventh.

**Fix:** added `COMBAT_ONLY_TOKEN_NAMES` filter in `extractDeckFromCombatState`, sourced from spire-codex's `color === "token"` set (Soul, Shiv, plus 12 others — Disintegration, Fuel, Giant Rock, Luminesce, Mind Rot, Sloth, Sweeping Gaze, Waste Away, Sovereign Blade, Minion Strike/Dive Bomb/Sacrifice). Sourcing from codex rather than hardcoding means new tokens land automatically with codex updates.

**Status:** patched 2026-05-15. Old cache (`.cache/last-deck.json`) deleted at the same time; next combat repopulates clean.

**Note for the future:** if a "token" card ever turns out to be a permanent deck member in some edge case (e.g. a relic that copies a token into your real deck), this filter would over-remove. Watch for that scenario; the fix is a deny-list specific carve-out, not loosening the filter.

---

## 2026-05-09 — Combat-time auto-exhaust relics overrate permanent removal of basics

**Terminology, important:** *exhaust* = card removed from active piles for the rest of *this combat only* (returns next fight). *Removal* = card permanently gone from the deck. The two are distinct game concepts and Shunrai treats them the same (it doesn't).

**Symptom:** with Ghost Seed equipped (basic Strikes / Defends auto-exhaust each turn if unplayed), `scoreRemoval` still rates Strike / Defend at S 5.00 as top removal target. The grade is too high — Ghost Seed already solves most of the in-combat "Strike clogs my hand" pain by exhausting them mid-fight, so paying e.g. 100g to permanently remove one buys mostly across-combats draw-quality improvement, which is a smaller benefit.

Removal still has *some* value with Ghost Seed (smaller deck = better draw rate every combat, including draws before the Strike has a chance to exhaust), just less than basics-without-Ghost-Seed.

**Why upstream doesn't catch this:** Shunrai's `scoreRemoval` *receives* the equipped-relics list but doesn't consult it. There's no relic-effects layer — the advisor treats removal value as a pure function of card-tier + archetype-fit + bloat, ignoring whether a relic is mitigating the in-combat dead-draw problem for free. Same gap exists in Shunrai's web tool.

**Likely STS2 relics with auto-exhaust-basics behavior:**
- Ghost Seed (confirmed by user)
- Possibly STS2 equivalents of STS1's Astrolabe / Empty Cage / Strange Spoon — needs verification.

**Fix sketch:**
1. Add an `effects` array to relevant entries in `db.relics` (e.g. `effects: ["auto_exhaust_basics"]`).
2. In `scoreRemoval`, detect `equippedRelics.some(r => relicHasEffect(r, 'auto_exhaust_basics'))`. If true, scale basic-card removal score down (e.g. ×0.5–0.6) — not zero, since across-combats draw quality still benefits, just smaller than Shunrai assumes.
3. Could also generalize to other auto-exhaust effects (curses, statuses) for relics with similar behavior on other card types.

**Status:** open. Don't tinker until verified by playing a few runs and seeing the pattern of misadvice in practice.

---

## 2026-05-09 — Deck cache only re-syncs on next combat (transforms/event-removals lag)

**Behavior:** the cache stores the deck observed during combat (from `hand` + `draw_pile` + `discard_pile` + `exhaust_pile`). Between combats — events that transform/remove cards, shop card-removal, Brain Leech-style additions — the cache stays stale until the next combat repopulates it.

**Symptom user observed:** after a few transforms via events, the cache reported 25 cards while the actual deck was 20. After another combat, the cache corrected.

**Why it happens:** STS2MCP exposes `hand` / piles only when `CombatManager.IsInProgress`. Outside combat the deck isn't surfaced through any field we currently read.

**Fix candidates:**
- When the deck-overlay UI is open, STS2MCP may expose the full deck as a `card_select` state with `screen_type: select` and the entire deck as `cards`. Capture from there if so. Probe needed.
- Alternatively, parse `card_select` states triggered by transform/upgrade/remove events: when state transitions out of one of those, infer the resulting deck delta from prompt + selected_cards. More fragile.

**Status:** open. Probe what STS2MCP exposes when the user opens their deck overlay during a non-combat screen. If it's a `card_select` with the full deck, the fix is small.

---

## 2026-05-09 — Shop sells-out null fields crashed scoreRelic

**Symptom:** after buying Ghost Seed (and earlier after a card sold out), the watcher crashed with `TypeError: Cannot read properties of null (reading 'toUpperCase')` inside `scoreRelic`.

**Root cause:** STS2MCP keeps sold items in `shop.items` with `is_stocked: false` and null `relic_id` / `card_id`. Our extracts didn't filter for `is_stocked`, so a null name reached `scoreRelic`.

**Fix:** added `is_stocked && <id field>` filter to `extractOfferedCards` and `extractOfferedRelics` shop branches; defensive null-friendly-name guard in `gradeRelicOfferings`. Patched 2026-05-09.

**Status:** patched.

---

## 2026-05-09 — Shunrai web UI doesn't surface curse/status removal (we should be fine)

**Behavior in Shunrai's web tool:** when grading removal, total stinkers (curses, statuses — Wound, Burn, Dazed, Slimed, Void, Debris, plus generic Curse cards) often don't appear as removal candidates. User flagged this as a real gap.

**Why it happens upstream:** Shunrai's tool is fed deck contents via manual user input. Players typically don't type curses/statuses into the form, so the removal scorer never sees them.

**In `vendor/logic.js` itself:** `scoreRemoval` does handle them — first branch in the function returns S/5 immediately for any curse-name match. So it's a UI input gap, not a logic bug.

**Our implementation:** we extract the deck from STS2MCP's live combat piles, which include curses/statuses naturally. So when a curse exists in deck, our shop-removal output should rank it as the top removal target with the "Curse/Status — remove immediately" reason.

**Status:** verify once a curse appears in a real run. If the curse *does* show up at S, we've effectively fixed Shunrai's UI gap by changing the input mechanism. If it doesn't, investigate.

---

## 2026-05-09 — No bloat penalty late-game / score saturation

**Deck state:** working deck mid-Act 3, ~28 cards, established engine. (User report — concrete deck not captured yet.)

**Bad recommendation:** advisor returns 6/6 on cards that would just dilute the deck.

**What's right:** by Act 3 with a working deck, additions that don't fix a specific weakness should be capped well below S/A. Bloat pressure should *dominate* the score for filler picks.

**Suspected cause:** unknown — to be confirmed by reading `vendor/logic.js`'s scoring function. Either bloat-pressure factor doesn't scale with deck size, or the score is composed additively without a ceiling-aware cap.

**Fix candidates:**
- Bloat-pressure scaling factor on deck size (e.g. multiplicative penalty growing past 20 cards).
- Act-aware grading (later acts = higher bar for "is this worth picking").
- "Essential gap unfilled" gate: cap non-gap-filling cards below A when the deck is otherwise functional.

**Status:** open. Reproduce, then read logic.js's scoring path.
