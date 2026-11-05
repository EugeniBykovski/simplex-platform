import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

for (const path of ["/", "/ru", "/nope", "/ru/nope", "/ui-gallery"]) {
  test(`${path} has no WCAG A or AA violations`, async ({ page }) => {
    await page.goto(path);
    const { violations } = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(
      violations.map(
        ({ id, nodes }) => `${id}: ${nodes.map((node) => node.target.join(" ")).join(" | ")}`,
      ),
    ).toEqual([]);
  });
}

test("the open mobile menu has no WCAG A or AA violations", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  const { violations } = await new AxeBuilder({ page })
    .include(".nav")
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(
    violations.map(
      ({ id, nodes }) => `${id}: ${nodes.map((node) => node.target.join(" ")).join(" | ")}`,
    ),
  ).toEqual([]);
});

test("an open mega menu has no WCAG A or AA violations", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await page.getByRole("button", { name: "Services" }).focus();
  const menu = page.getByRole("region", { name: "Services" });
  await expect(menu).toBeVisible();
  // Measure contrast after the fade, not part-way through it.
  await expect(menu).toHaveCSS("opacity", "1");
  const { violations } = await new AxeBuilder({ page })
    .include(".nav")
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(
    violations.map(
      ({ id, nodes }) => `${id}: ${nodes.map((node) => node.target.join(" ")).join(" | ")}`,
    ),
  ).toEqual([]);
});
