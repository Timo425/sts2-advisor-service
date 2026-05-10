# sts2-advisor-service

Real-time terminal advisor for Slay the Spire 2. Polls STS2_MCP for live game state and grades reward / shop / event card picks against your current deck.

Out-of-process — runs as a separate Node service alongside the game; no in-game UI. The watcher prints to a terminal whenever you hit a decision screen.

## Quick start

```bash
npm run live
```

Requires Node 18+ and the [STS2_MCP](https://github.com/Gennadiyev/STS2MCP) mod running inside Slay the Spire 2 (default port `localhost:15526`).

## Dependencies

- **[Shunrai's STS2 Advisor](https://github.com/Shawnrai/Shunrai-s-STS2-Advisor)** (MIT) — vendored at `src/vendor/`, provides the deck-reasoning logic. See [VENDORED.md](VENDORED.md) for pinned commit and license preservation.
- **[spire-codex](https://github.com/ptrlrd/spire-codex)** — referenced via local clone (not bundled), provides canonical card / relic / potion data per game version.
- **[STS2_MCP](https://github.com/Gennadiyev/STS2MCP)** — STS2 mod that exposes live game state over `localhost:15526`. Install separately into your game's `mods/` folder.

## Status

- **Live watcher**: complete. Reward / shop / event / treasure / relic-select / upgrade screens all graded with archetype + role-composition context.
- **Tuning**: ongoing — see [`notes/observed-issues.md`](notes/observed-issues.md) for open items and patched ones.
- **In-game overlay** (mod with badges drawn directly on cards, F7 panel, etc.): not started; the terminal watcher is the working tier today. Roadmap detail lives in private planning notes.

## Disclaimer

Not affiliated with Mega Crit Games. Slay the Spire 2 is © Mega Crit. This tool reads game state via STS2_MCP, which exposes it through a local HTTP API; nothing here modifies the game or ships its assets.
