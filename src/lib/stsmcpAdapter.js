// STS2MCP state -> advisor input shape.
// STS2MCP exposes friendly-name strings for piles (e.g. "Strike"), and full id+name
// objects for hand/offered. Shunrai's logic.js normalizes friendly names -> snake_case
// internally and disambiguates by character bucket, so passing names through is fine.

import { loadCodexBetaLatest } from '../data/codexLoader.js';

const CHARACTER_PREFIX = /^The\s+/i;

export function mapCharacter(playerCharacterField) {
  if (!playerCharacterField) return null;
  return playerCharacterField.replace(CHARACTER_PREFIX, '').toLowerCase();
}

// Status cards that enemies add to your piles during combat but disappear at combat end.
// They're not part of your permanent deck and must be filtered from the snapshot, otherwise
// they pollute archetype detection and (worst) get rated as S-tier removal targets.
const COMBAT_ONLY_STATUS_NAMES = new Set([
  'wound', 'burn', 'dazed', 'slimed', 'void', 'debris',
]);

// Token cards that your *own* cards generate into your piles during combat — Souls (Necrobinder),
// Shivs (Silent), etc. Same problem as enemy statuses: they sit in hand/draw/discard/exhaust mid-combat
// but vanish at combat end, so they must not be cached as permanent deck members. Counted as
// generators by role, they inflate the generator pool and trigger spurious "clogs hand" anti-reasons
// on legitimate picks. Sourced from spire-codex's `color === "token"` list rather than hardcoded,
// so new tokens land automatically with codex updates.
const COMBAT_ONLY_TOKEN_NAMES = (() => {
  try {
    const codex = loadCodexBetaLatest();
    return new Set(
      codex.cards.filter(c => c.color === 'token' && c.name).map(c => c.name.toLowerCase())
    );
  } catch {
    return new Set();
  }
})();

function isCombatOnly(name) {
  const lower = String(name).toLowerCase();
  return COMBAT_ONLY_STATUS_NAMES.has(lower) || COMBAT_ONLY_TOKEN_NAMES.has(lower);
}

export function extractDeckFromCombatState(state) {
  const p = state?.player;
  if (!p) return null;
  const piles = ['hand', 'draw_pile', 'discard_pile', 'exhaust_pile'];
  const hasAnyPile = piles.some(k => Array.isArray(p[k]));
  if (!hasAnyPile) return null;
  const out = [];
  for (const k of piles) {
    if (!Array.isArray(p[k])) continue;
    for (const c of p[k]) {
      const name = c?.name ?? c?.id;
      if (!name) continue;
      if (isCombatOnly(name)) continue;
      out.push({ name });
    }
  }
  return out;
}

export function hasCombatPiles(state) {
  return extractDeckFromCombatState(state) !== null;
}

const DECISION_STATES = new Set([
  'card_reward', 'shop', 'relic_select', 'treasure', 'rest_site', 'event', 'card_select',
]);
export function isDecisionState(stateType) {
  return DECISION_STATES.has(stateType);
}

export function extractOfferedCards(state) {
  if (state.state_type === 'card_reward') {
    return (state.card_reward?.cards ?? []).map(c => ({ id: c.id, name: c.name }));
  }
  if (state.state_type === 'shop') {
    return (state.shop?.items ?? [])
      .filter(it => it.category === 'card' && it.is_stocked && it.card_id)
      .map(it => ({ id: it.card_id, name: it.card_name, price: it.price, can_afford: it.can_afford }));
  }
  return [];
}

export function extractOfferedRelics(state) {
  if (state.state_type === 'relic_select') {
    return (state.relic_select?.relics ?? []).filter(r => r?.id).map(r => ({ id: r.id, name: r.name }));
  }
  if (state.state_type === 'treasure') {
    return (state.treasure?.relics ?? []).filter(r => r?.id).map(r => ({ id: r.id, name: r.name }));
  }
  if (state.state_type === 'shop') {
    return (state.shop?.items ?? [])
      .filter(it => it.category === 'relic' && it.is_stocked && it.relic_id)
      .map(it => ({ id: it.relic_id, name: it.relic_name, price: it.price, can_afford: it.can_afford }));
  }
  return [];
}

export function extractEquippedRelicIds(state) {
  return (state?.player?.relics ?? []).map(r => r.id).filter(Boolean);
}

export function extractRemovalService(state) {
  if (state.state_type !== 'shop') return null;
  const items = state.shop?.items ?? [];
  const item = items.find(it => it.category === 'card_removal' && it.is_stocked);
  if (!item) return null;
  return { price: item.price, can_afford: !!item.can_afford };
}
