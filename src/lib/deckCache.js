// In-memory cache of the deck as observed during the most recent combat,
// persisted to .cache/last-deck.json so it survives watcher restarts.
// Floor + character are stored alongside so a stale cache from a different
// run is at least visible to the user (printed at startup).

import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const cacheDir = join(here, '..', '..', '.cache');
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

export function updateFromCombat({ character, floor, deckCards }) {
  if (!Array.isArray(deckCards) || deckCards.length === 0) return;
  // Within the same floor (= same encounter), the deck can only grow (status cards added
  // by enemies) or stay equal. A drop almost certainly means we sampled mid-card-resolution.
  // Only accept updates whose count is >= the existing snapshot for the same floor.
  if (snapshot && snapshot.character === character && snapshot.floor === floor
      && deckCards.length < snapshot.deckCards.length) {
    return;
  }
  snapshot = {
    character,
    floor,
    deckCards: deckCards.slice(),
    capturedAt: Date.now(),
  };
  persist();
}

export function getSnapshot() {
  return snapshot;
}

export function clear() {
  snapshot = null;
  try { if (existsSync(cacheFile)) rmSync(cacheFile); } catch {}
}
