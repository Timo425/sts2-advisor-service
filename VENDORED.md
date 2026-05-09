# Vendored sources

`src/vendor/` contains files copied from upstream repositories at the commits below. **Do not edit vendored files in place** — modifications go in adapters under `src/advisor/` so we can refresh from upstream cleanly if needed.

## Shunrai's STS2 Advisor

- Repo: https://github.com/Shawnrai/Shunrai-s-STS2-Advisor
- License: **MIT** — original license text preserved at `src/vendor/LICENSE-shunrai`.
- Pinned commit: `c0751c57445ca30e0c1a3a407cb48c080a218864` (2026-03-31)
- Files: `db.js`, `logic.js`
- Status as of pin: dormant — last code change 2026-03-18.

`db.js` is treated as an **annotation overlay**, not the canonical card list. See `src/data/renameMap.js` for ID translations between spire-codex (canonical) and Shunrai's keys.

If/when this repo is published, the `src/vendor/LICENSE-shunrai` file must be retained and the attribution above kept intact — that satisfies the MIT license's notice requirement for both source and binary distribution.

## spire-codex (referenced, not copied)

- Repo: https://github.com/ptrlrd/spire-codex
- Local clone: `/media/timo/Storage/Repositories/spire-codex/`
- Used path: `data-beta/latest/eng/{cards,relics,potions}.json`
- At time of A.1 setup: `data-beta/latest -> v0.105.1`, commit `d3d266b6113f8d5c445f33f60eba3b662eccd2c3` (2026-05-09).

We read directly from the local clone rather than vendoring — spire-codex updates frequently with each game patch, and the canonical-list role demands freshness. To pin a snapshot for reproducible tests, copy a specific version dir into `fixtures/`.
