import { readFileSync, readlinkSync } from 'node:fs';
import { join } from 'node:path';

const CODEX_ROOT = '/media/timo/Storage/Repositories/spire-codex';

export function loadCodexBetaLatest() {
  const latest = readlinkSync(join(CODEX_ROOT, 'data-beta', 'latest'));
  const versionDir = join(CODEX_ROOT, 'data-beta', latest, 'eng');
  return {
    version: latest,
    cards: JSON.parse(readFileSync(join(versionDir, 'cards.json'), 'utf8')),
    relics: JSON.parse(readFileSync(join(versionDir, 'relics.json'), 'utf8')),
    potions: JSON.parse(readFileSync(join(versionDir, 'potions.json'), 'utf8')),
  };
}
