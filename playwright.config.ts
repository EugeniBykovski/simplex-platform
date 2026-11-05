import { defineConfig, devices } from "@playwright/test";

// Unusual on purpose: other local projects use the common ports.
const port = 3947;
// PW_CHANNEL=chrome uses the installed browser instead of Playwright's download.
const channel = process.env.PW_CHANNEL;

export default defineConfig({
  testDir: "tests/e2e",
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : "list",
  use: {
    baseURL: `http://localhost:${port}`,
    trace: "on-first-retry",
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"], ...(channel ? { channel } : {}) } },
  ],
  // Tests run against a production server. Run `pnpm build` first.
  webServer: {
    command: `pnpm start -p ${port}`,
    url: `http://localhost:${port}`,
    // Never test a server this run did not start: fail if the port is taken.
    reuseExistingServer: false,
  },
});
