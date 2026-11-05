import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

for (const path of ["/", "/ru", "/nope", "/ru/nope"]) {
  test(`${path} has no WCAG A or AA violations`, async ({ page }) => {
    await page.goto(path);
    const { violations } = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(violations.map(({ id, nodes }) => `${id} (${nodes.length})`)).toEqual([]);
  });
}
