import { defineConfig, devices } from "@playwright/test";

// scripts/run-e2e.mjs picks a free port for each run.
const port = process.env.E2E_PORT;
if (!port) throw new Error("Run browser tests with `pnpm test:e2e`, which selects a free port.");

// PW_CHANNEL=chrome uses the installed browser instead of Playwright's Chromium.
const channel = process.env.PW_CHANNEL;

export default defineConfig({
  testDir: "tests/e2e",
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI
    ? [["github"], ["html", { open: "never" }]]
    : [["list", { printSteps: false }]],
  use: {
    baseURL: `http://localhost:${port}`,
    trace: "on-first-retry",
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"], ...(channel ? { channel } : {}) } },
    { name: "firefox", use: devices["Desktop Firefox"] },
    { name: "webkit", use: devices["Desktop Safari"] },
  ],
  // Tests need `pnpm build:test` first. The server runs directly under node so that Playwright owns
  // its PID, and a run never tests a server it did not start.
  webServer: {
    command: `node node_modules/next/dist/bin/next start -p ${port}`,
    url: `http://localhost:${port}`,
    reuseExistingServer: false,
  },
});
