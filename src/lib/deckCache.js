// In-memory cache of the deck as observed during the most recent combat,
// persisted to .cache/last-deck.json so it survives watcher restarts.
// Floor + character are stored alongside so a stale cache from a different
// run is at least visible to the user (printed at startup).

import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
// DECK_CACHE_DIR lets tests point at a throwaway directory. Without it a test run
// that ends in clear() deletes the live snapshot from an actual run.
const cacheDir = process.env.DECK_CACHE_DIR ?? join(here, '..', '..', '.cache');
const cacheFile = join(cacheDir, 'last-deck.json');

let snapshot = null;

// Eager load on module import.
try {
  if (existsSync(cacheFile)) {
    snapshot = JSON.parse(readFileSync(cacheFile, 'utf8'));
  }
} catch {
  snapshot = null;
}

function persist() {
  try {
    if (!existsSync(cacheDir)) mkdirSync(cacheDir, { recursive: true });
    writeFileSync(cacheFile, JSON.stringify(snapshot, null, 2));
  } catch {
    // Best-effort; if disk write fails the in-memory cache is still useful.
  }
}

// `stable` marks a sample taken during the player's play phase, which cannot catch cards
// mid-resolution. Samples taken at any other point in combat are accepted too — a short
// fight may never give us a stable tick — but they never displace a stable one of equal size.
export function updateFromCombat({ character, floor, deckCards, stable = true }) {
  if (!Array.isArray(deckCards) || deckCards.length === 0) return null;
  if (snapshot && snapshot.character === character && snapshot.floor === floor) {
    // Within the same floor (= same encounter), the deck can only grow (status cards added
    // by enemies) or stay equal. A drop almost certainly means we sampled mid-card-resolution.
    if (deckCards.length < snapshot.deckCards.length) return null;
    if (!stable && snapshot.stable && deckCards.length === snapshot.deckCards.length) return null;
  }
  snapshot = {
    character,
    floor,
    deckCards: deckCards.slice(),
    capturedAt: Date.now(),
    stable,
  };
  persist();
  return { count: deckCards.length, stable };
}

export function getSnapshot() {
  return snapshot;
}

// Grading must never silently use a snapshot belonging to a different run. Two tells:
// a different character, or a cached floor ahead of the live one (floors only increase
// within a run, so a higher cached floor means the cache predates this run).
export function getSnapshotFor({ character, floor }) {
  if (!snapshot) return null;
  if (character && snapshot.character && snapshot.character !== character) return null;
  if (Number.isFinite(floor) && Number.isFinite(snapshot.floor) && snapshot.floor > floor) return null;
  return snapshot;
}

export function clear() {
  snapshot = null;
  try { if (existsSync(cacheFile)) rmSync(cacheFile); } catch {}
}
