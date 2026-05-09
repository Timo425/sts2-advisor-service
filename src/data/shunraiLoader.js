import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const dbPath = join(here, '..', 'vendor', 'db.js');

let cached = null;

export function loadShunraiDb() {
  if (cached) return cached;
  const text = readFileSync(dbPath, 'utf8');
  const match = text.match(/^\s*const\s+DB\s*=\s*/);
  if (!match) throw new Error('vendor/db.js: expected `const DB = ...` prefix');
  let json = text.slice(match[0].length).trimEnd();
  if (json.endsWith(';')) json = json.slice(0, -1);
  cached = JSON.parse(json);
  return cached;
}
