import { expect, test } from "@playwright/test";

test("English is served without a prefix", async ({ page }) => {
  const response = await page.goto("/");
  expect(response?.status()).toBe(200);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
});

test("Russian is served under /ru", async ({ page }) => {
  const response = await page.goto("/ru");
  expect(response?.status()).toBe(200);
  await expect(page.locator("html")).toHaveAttribute("lang", "ru");
});

test("/en redirects to the unprefixed URL", async ({ request }) => {
  const response = await request.get("/en", { maxRedirects: 0 });
  expect(response.status()).toBe(307);
  expect(new URL(response.headers().location ?? "", "http://x").pathname).toBe("/");
});

test("Accept-Language does not redirect and no cookie is set", async ({ request }) => {
  const response = await request.get("/", {
    headers: { "Accept-Language": "ru" },
    maxRedirects: 0,
  });
  expect(response.status()).toBe(200);
  expect(response.headers()["set-cookie"]).toBeUndefined();
});

test("the switcher links straight to the other language", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Русский" }).click();
  await expect(page).toHaveURL(/\/ru$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "ru");

  await page.getByRole("link", { name: "English" }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  expect(new URL(page.url()).pathname).toBe("/");
});

test("draft Russian stays out of search", async ({ page }) => {
  await page.goto("/ru");
  await expect(page.locator('meta[name="robots"]').first()).toHaveAttribute("content", /noindex/);
  await expect(page.locator('link[rel="alternate"][hreflang]')).toHaveCount(0);
  const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
  expect(canonical).not.toContain("/ru");
});
