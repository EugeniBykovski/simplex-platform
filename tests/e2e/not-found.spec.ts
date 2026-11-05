import { expect, test } from "@playwright/test";

test.use({ javaScriptEnabled: false });

const cases = [
  { path: "/nope", lang: "en", heading: "This page took a different route.", home: "/" },
  {
    path: "/services/unknown",
    lang: "en",
    heading: "This page took a different route.",
    home: "/",
  },
  { path: "/ru/nope", lang: "ru", heading: "Эта страница пошла другим маршрутом.", home: "/ru" },
];

for (const { path, lang, heading, home } of cases) {
  test(`${path} renders a localised 404 without JavaScript`, async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.status()).toBe(404);
    await expect(page.locator("html")).toHaveAttribute("lang", lang);
    await expect(page.getByRole("heading", { level: 1, name: heading })).toBeVisible();
    await expect(page.locator('meta[name="robots"]').first()).toHaveAttribute("content", /noindex/);
    await expect(page.getByRole("main").getByRole("link").first()).toHaveAttribute("href", home);
  });
}

test("an invalid locale prefix is treated as an unknown English path", async ({ page }) => {
  const response = await page.goto("/de/about");
  expect(response?.status()).toBe(404);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
});

test("the 404 has the shared header and footer without JavaScript", async ({ page }) => {
  await page.goto("/ru/nope");
  await expect(page.getByRole("navigation", { name: "Основная навигация" })).toBeAttached();
  await expect(page.getByRole("contentinfo")).toBeVisible();
});

test("the 404 has no horizontal overflow at 320 px", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto("/ru/nope");
  const box = await page.getByRole("heading", { level: 1 }).boundingBox();
  expect(box && box.x + box.width).toBeLessThanOrEqual(320);
  await expect(page.getByRole("main").getByRole("link", { name: "На главную" })).toBeInViewport({
    ratio: 0,
  });
  const main = await page.getByRole("main").boundingBox();
  expect(main?.width).toBeLessThanOrEqual(320);
});
