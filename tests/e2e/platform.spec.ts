import { expect, test } from "@playwright/test";

const paths = ["/", "/ru", "/nope", "/ui-gallery"];

for (const path of paths) {
  test(`${path} sends the security headers`, async ({ request }) => {
    const headers = (await request.get(path)).headers();
    expect(headers["content-security-policy"]).toContain("frame-ancestors 'none'");
    expect(headers["x-content-type-options"]).toBe("nosniff");
    expect(headers["referrer-policy"]).toBe("strict-origin-when-cross-origin");
    expect(headers["strict-transport-security"]).toBeTruthy();
    expect(headers["x-powered-by"]).toBeUndefined();
  });

  test(`${path} loads with no CSP violations or console errors`, async ({ page }) => {
    const problems: string[] = [];
    page.on("console", (message) => {
      // The browser logs the 404 document itself as a failed resource.
      if (message.type() === "error" && !message.text().includes("404")) {
        problems.push(message.text());
      }
    });
    page.on("pageerror", (error) => problems.push(error.message));
    await page.goto(path, { waitUntil: "networkidle" });
    expect(problems).toEqual([]);
  });
}

test("Cyrillic text uses the self-hosted Geist font", async ({ page }) => {
  await page.goto("/ru");
  await page.evaluate(() => document.fonts.ready);
  const usesGeist = await page.evaluate(() => document.fonts.check('16px "Geist"', "Ж"));
  const family = await page.locator("h1").evaluate((node) => getComputedStyle(node).fontFamily);
  expect(usesGeist || /geist/i.test(family)).toBe(true);
});

for (const path of ["/favicon.ico", "/icon.png", "/apple-icon.png"]) {
  test(`${path} is served`, async ({ request }) => {
    const response = await request.get(path);
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toMatch(/image/);
  });
}

test("the image optimiser serves modern formats for local images", async ({ request }) => {
  const response = await request.get("/_next/image?url=%2Ficon.png&w=390&q=75", {
    headers: { Accept: "image/avif,image/webp,*/*" },
  });
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toMatch(/image\/(avif|webp)/);
});

test("the image optimiser refuses remote images", async ({ request }) => {
  const url = encodeURIComponent("https://evil.example/a.png");
  const response = await request.get(`/_next/image?url=${url}&w=390&q=75`);
  expect(response.status()).toBe(400);
});
