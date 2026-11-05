#!/usr/bin/env node
// Runs Playwright on a port the operating system confirms is free, so a run cannot reach another
// project's server. Playwright starts and stops its own server. This script stops nothing else.
import { spawn } from "node:child_process";
import { createServer } from "node:net";

const port = await new Promise((resolve, reject) => {
  const probe = createServer();
  probe.on("error", reject);
  probe.listen(0, () => {
    const { port: free } = probe.address();
    probe.close(() => resolve(free));
  });
});

console.log(`E2E server port: ${port}`);
const child = spawn(
  "node",
  ["node_modules/@playwright/test/cli.js", "test", ...process.argv.slice(2)],
  { stdio: "inherit", env: { ...process.env, E2E_PORT: String(port) } },
);
child.on("exit", (code, signal) => process.exit(signal ? 1 : (code ?? 1)));
