import { expect, test, type Page } from "@playwright/test";

const openMenu = (page: Page) => page.getByRole("button", { name: /open menu|открыть меню/i });

test.describe("desktop header", () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  test("the logo is one named link to the home page", async ({ page }) => {
    await page.goto("/nope");
    const logo = page.getByRole("link", { name: "SimpleX — home" }).first();
    await expect(logo).toHaveAttribute("href", "/");
    await logo.click();
    await expect(page).toHaveURL(/\/$/);
  });

  test("routes with no page never link anywhere", async ({ page }) => {
    await page.goto("/");
    for (const name of ["Our Work", "How We Work", "About", "Insights", "Careers"]) {
      const link = page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name });
      await expect(link.first()).toHaveAttribute("aria-disabled", "true");
      await expect(link.first()).not.toHaveAttribute("href");
    }
  });

  test("a mega menu opens with the keyboard, and Escape dismisses it", async ({ page }) => {
    await page.goto("/");
    const trigger = page.getByRole("button", { name: "Services" });
    const menu = page.getByRole("region", { name: "Services" });
    await expect(menu).toBeHidden();

    await trigger.focus();
    await expect(menu).toBeVisible();
    await expect(trigger).toHaveAttribute("aria-expanded", "true");

    await page.keyboard.press("Escape");
    await expect(menu).toBeHidden();
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await expect(trigger).toBeFocused();

    await trigger.blur();
    await trigger.focus();
    await expect(menu).toBeVisible();
  });

  test("a mega menu opens on hover and closes on leaving", async ({ page }) => {
    await page.goto("/");
    const trigger = page.getByRole("button", { name: "Industries" });
    const menu = page.getByRole("region", { name: "Industries" });
    await trigger.hover();
    await expect(menu).toBeVisible();
    await page.mouse.move(10, 700);
    await expect(menu).toBeHidden();
  });

  test("the header stays in view when the page scrolls", async ({ page }) => {
    await page.goto("/ui-gallery");
    await page.evaluate(() => window.scrollTo(0, 1500));
    const box = await page.locator(".nav").boundingBox();
    expect(box?.y).toBeGreaterThanOrEqual(0);
    expect(box?.y).toBeLessThan(40);
  });

  test("the skip link is first in tab order and reaches the content", async ({
    page,
    browserName,
  }) => {
    await page.goto("/");
    const skip = page.getByRole("link", { name: "Skip to content" });
    await expect(skip).not.toBeInViewport();
    // Safari-family browsers skip links on Tab unless the user turns on full keyboard access.
    if (browserName === "webkit") await skip.focus();
    else await page.keyboard.press("Tab");
    await expect(skip).toBeFocused();
    await expect(skip).toBeInViewport();
    await expect(skip).toHaveAttribute("href", "#main-content");
  });
});

test.describe("mobile menu", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("opens with state, moves focus in, and Escape returns focus", async ({ page }) => {
    await page.goto("/");
    const burger = openMenu(page);
    await expect(burger).toHaveAttribute("aria-expanded", "false");
    await expect(page.locator("#sx-mobile-menu")).toBeHidden();

    await burger.click();
    const close = page.getByRole("button", { name: "Close menu" });
    await expect(close).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator("#sx-mobile-menu")).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(page.locator("#sx-mobile-menu")).toBeHidden();
    await expect(openMenu(page)).toBeFocused();
  });

  test("makes the page behind inert and stops it scrolling, with no layout jump", async ({
    page,
  }) => {
    await page.goto("/");
    const before = await page.locator(".nav").boundingBox();
    await openMenu(page).click();
    await expect(page.locator("#main-content")).toHaveJSProperty("inert", true);
    await expect(page.locator("footer")).toHaveJSProperty("inert", true);
    expect(
      await page.evaluate(() => getComputedStyle(document.documentElement).overflow),
    ).toContain("hidden");
    expect((await page.locator(".nav").boundingBox())?.width).toBe(before?.width);

    await page.keyboard.press("Escape");
    await expect(page.locator("#main-content")).toHaveJSProperty("inert", false);
    expect(
      await page.evaluate(() => getComputedStyle(document.documentElement).overflow),
    ).not.toContain("hidden");
  });

  test("closes on tapping outside", async ({ page }) => {
    await page.goto("/ru/nope");
    await page.getByRole("button", { name: "Открыть меню" }).click();
    await expect(page.locator("#sx-mobile-menu")).toBeVisible();
    await page.mouse.click(195, 840);
    await expect(page.locator("#sx-mobile-menu")).toBeHidden();
  });

  test("closes after navigating to another route", async ({ page }) => {
    await page.goto("/ui-gallery");
    await openMenu(page).click();
    await page.getByRole("link", { name: "SimpleX — home" }).first().click();
    await expect(page).toHaveURL(/\/$/);
    await expect(page.locator("#sx-mobile-menu")).toBeHidden();
  });

  test("closes when the window grows past the mobile range", async ({ page }) => {
    await page.goto("/");
    await openMenu(page).click();
    await page.setViewportSize({ width: 1280, height: 800 });
    await expect(page.locator("#sx-mobile-menu")).toBeHidden();
    await expect(page.locator("#main-content")).toHaveJSProperty("inert", false);
  });

  test("scrolls inside itself on a short screen", async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 480 });
    await page.goto("/");
    await openMenu(page).click();
    const fits = await page.locator("#sx-mobile-menu").evaluate((node) => {
      const box = node.getBoundingClientRect();
      return box.bottom <= window.innerHeight && node.scrollHeight > node.clientHeight;
    });
    expect(fits).toBe(true);
  });

  test("shows the SX tile instead of the wordmark", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(".nav .nav-mark")).toBeVisible();
    await expect(page.locator(".nav .lp")).toBeHidden();
  });
});

test.describe("responsive", () => {
  const widths = [
    320, 360, 375, 390, 412, 430, 768, 820, 1024, 1280, 1366, 1440, 1512, 1728, 1920, 2560,
  ];

  for (const path of ["/", "/ru", "/nope", "/ru/nope"]) {
    test(`${path} has no horizontal overflow at any QA width`, async ({ page }) => {
      const failures: string[] = [];
      for (const width of widths) {
        await page.setViewportSize({ width, height: 900 });
        await page.goto(path);
        const overflow = await page.evaluate(() => {
          const root = document.documentElement;
          return root.scrollWidth - root.clientWidth;
        });
        if (overflow > 0) failures.push(`${width}: ${overflow}px`);
      }
      expect(failures).toEqual([]);
    });
  }

  for (const path of ["/", "/ru"]) {
    test(`${path} header items all fit inside the bar`, async ({ page }) => {
      const failures: string[] = [];
      for (const width of widths) {
        await page.setViewportSize({ width, height: 900 });
        await page.goto(path);
        const result = await page.evaluate(() => {
          const nav = document.querySelector(".nav")?.getBoundingClientRect();
          const items = [...document.querySelectorAll(".nav-logo, .nav-link, .nav-cta > *")]
            .map((node) => node.getBoundingClientRect())
            .filter((box) => box.width > 0);
          if (!nav) return { outside: 1, overlap: 0 };
          const sorted = [...items].sort((a, b) => a.left - b.left);
          let overlap = 0;
          sorted.forEach((box, index) => {
            const next = sorted[index + 1];
            if (next && box.right > next.left + 1) overlap += 1;
          });
          return {
            outside: items.filter((box) => box.right > nav.right + 1 || box.left < nav.left - 1)
              .length,
            overlap,
          };
        });
        if (result.outside || result.overlap) failures.push(`${width}: ${JSON.stringify(result)}`);
      }
      expect(failures).toEqual([]);
    });
  }
});

test.describe("interactive primitives", () => {
  test("tabs follow the arrow keys", async ({ page }) => {
    await page.goto("/ui-gallery");
    const first = page.getByRole("tab", { name: "Frontend" });
    await first.focus();
    await page.keyboard.press("ArrowRight");
    await expect(page.getByRole("tab", { name: "Backend" })).toBeFocused();
    await expect(page.getByRole("tab", { name: "Backend" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    await expect(page.getByRole("tab", { name: "Backend" })).toHaveClass(/is-on/);
    await expect(first).not.toHaveClass(/is-on/);
    await expect(page.getByText("Backend panel")).toBeVisible();
    await expect(page.getByText("Frontend panel")).toBeHidden();
    await page.keyboard.press("End");
    await expect(page.getByRole("tab", { name: "Mobile" })).toBeFocused();
    await page.keyboard.press("ArrowRight");
    await expect(first).toBeFocused();
  });

  test("the accordion works by keyboard", async ({ page }) => {
    await page.goto("/ui-gallery");
    const summary = page.getByTestId("accordion").locator("summary");
    await expect(page.getByText("Answer text.")).toBeHidden();
    await summary.focus();
    await page.keyboard.press("Enter");
    await expect(page.getByText("Answer text.")).toBeVisible();
  });

  test("form errors are connected to their fields", async ({ page }) => {
    await page.goto("/ui-gallery");
    const input = page.locator("#g2");
    await expect(input).toHaveAttribute("aria-invalid", "true");
    await expect(input).toHaveAccessibleDescription("Enter a complete email");
    await expect(page.getByLabel("I agree")).toBeVisible();
  });

  test("disabled and loading buttons cannot be used", async ({ page }) => {
    await page.goto("/ui-gallery");
    await expect(page.locator('[data-spec="btn-disabled"] button')).toBeDisabled();
    const loading = page.locator('[data-spec="btn-loading"] button');
    await expect(loading).toBeDisabled();
    await expect(loading).toHaveAttribute("aria-busy", "true");
  });

  test("the switch exposes its state", async ({ page }) => {
    await page.goto("/ui-gallery");
    await expect(page.getByRole("switch", { name: "Analytics" })).toHaveAttribute(
      "aria-checked",
      "false",
    );
  });

  test("controls show a visible focus ring", async ({ page }) => {
    await page.goto("/ui-gallery");
    // A key press first, so browsers treat the focus as keyboard focus.
    await page.keyboard.press("Shift");
    await page.locator('[data-spec="btn-ghost"] button').focus();
    const outline = await page.locator('[data-spec="btn-ghost"] button').evaluate((node) => {
      const style = getComputedStyle(node);
      return { width: style.outlineWidth, style: style.outlineStyle };
    });
    expect(outline).toEqual({ width: "2px", style: "solid" });
  });
});

test.describe("reduced motion", () => {
  test.use({ reducedMotion: "reduce" });

  test("animations and transitions are effectively off", async ({ page }) => {
    await page.goto("/ui-gallery");
    const durations = await page.evaluate(() =>
      [".btn", ".bg-horizon::before", ".line-mask > span"].map((selector) => {
        const [element, pseudo] = selector.split("::");
        const node = document.querySelector(element ?? "");
        if (!node) return null;
        const style = getComputedStyle(node, pseudo ? `::${pseudo}` : undefined);
        return {
          transition: parseFloat(style.transitionDuration),
          animation: parseFloat(style.animationDuration),
        };
      }),
    );
    for (const entry of durations) {
      expect(entry).not.toBeNull();
      expect(entry?.transition).toBeLessThan(0.01);
      expect(entry?.animation).toBeLessThan(0.01);
    }
  });
});
