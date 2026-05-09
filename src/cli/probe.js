// One-shot probe: GET /api/v1/singleplayer and pretty-print.
// Run repeatedly as the run progresses to inspect state shapes.

const url = process.argv[2] ?? 'http://localhost:15526/api/v1/singleplayer';

try {
  const res = await fetch(url, { signal: AbortSignal.timeout(3000) });
  const body = await res.json();
  console.log(`# ${url} -> ${res.status}`);
  console.log(`# state_type: ${body.state_type ?? '(none)'}`);
  if (body.run) console.log(`# run: act=${body.run.act} floor=${body.run.floor} ascension=${body.run.ascension}`);
  if (body.player) console.log(`# character: ${body.player.character ?? body.player.character_id ?? '?'}`);
  console.log();
  console.log(JSON.stringify(body, null, 2));
} catch (err) {
  console.error(`probe failed: ${err.message}`);
  console.error('Is the game running with STS2_MCP enabled? Try: curl http://localhost:15526/');
  process.exit(1);
}
