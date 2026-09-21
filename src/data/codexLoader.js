import { readFileSync, readlinkSync } from 'node:fs';
import { join } from 'node:path';

const CODEX_ROOT = '/media/timo/Storage/Repositories/spire-codex';

// Which spire-codex data version to grade against.
//
// `data-beta/latest` tracks the Steam *public-beta* branch, which runs ahead of the
// stable branch the game is actually installed from. Following it silently grades a
// v0.107.1 game against v0.111.0 content — new cards the game doesn't have, IDs that
// were renamed after v0.107.1.
//
// Pin to the installed game's version (see `release_info.json` in the game folder) and
// only move it when the game itself moves. The CODEX_VERSION env var overrides: `latest`
// follows the symlink for a deliberate beta run, any other value is used as-is.
const PINNED_VERSION = 'v0.107.1';
const requested = process.env.CODEX_VERSION ?? PINNED_VERSION;
const CODEX_VERSION = requested === 'latest'
  ? readlinkSync(join(CODEX_ROOT, 'data-beta', 'latest'))
  : requested;

export function loadCodexBetaLatest() {
  const latest = CODEX_VERSION;
  const versionDir = join(CODEX_ROOT, 'data-beta', latest, 'eng');
  return {
    version: latest,
    cards: JSON.parse(readFileSync(join(versionDir, 'cards.json'), 'utf8')),
    relics: JSON.parse(readFileSync(join(versionDir, 'relics.json'), 'utf8')),
    potions: JSON.parse(readFileSync(join(versionDir, 'potions.json'), 'utf8')),
  };
}
