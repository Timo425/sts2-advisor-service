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
