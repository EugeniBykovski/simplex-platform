import { expect, test, type Page } from "@playwright/test";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

/**
 * Compares real components to reference pages built from the design's own markup and its original
 * simplex.css. Both render in the same browser, so differences are real and not antialiasing.
 */
const fixture = (name: string) => pathToFileURL(resolve("tests/fixtures/design", name)).href;

test.use({ reducedMotion: "reduce" });

const STYLE_PROPS = [
  "height",
  "paddingTop",
  "paddingLeft",
  "borderTopLeftRadius",
  "borderTopWidth",
  "borderTopColor",
  "backgroundColor",
  "backgroundImage",
  "color",
  "fontSize",
  "fontWeight",
  "lineHeight",
  "letterSpacing",
  "boxShadow",
  "backdropFilter",
  "backgroundClip",
  "maskImage",
  "webkitTextStroke",
  "display",
  "textTransform",
] as const;

async function styleOf(page: Page, selector: string) {
  return page
    .locator(selector)
    .first()
    .evaluate(
      (node, props) => {
        const computed = getComputedStyle(node) as unknown as Record<string, string>;
        return Object.fromEntries(props.map((prop) => [prop, computed[prop]]));
      },
      STYLE_PROPS as unknown as string[],
    );
}

const ready = async (page: Page) => {
  await page.evaluate(() => document.fonts.ready);
};

// Width-dependent props are compared separately, by geometry.
const normalise = (style: Record<string, string | undefined>) => {
  const rest = { ...style };
  delete rest.height;
  return {
    ...rest,
    // Same image, different origin: compare only the file name and gradients.
    // The minifier also writes 0% positions as 0px, which is the same point.
    backgroundImage: rest.backgroundImage
      ?.replace(/url\("[^"]*\/([^/"]+)"\)/g, 'url("$1")')
      .replace(/ 0px,/g, " 0%,"),
  };
};

const specimens: Record<string, string | undefined> = {
  "btn-primary": undefined,
  "btn-sm": undefined,
  "btn-lg": undefined,
  "btn-disabled": undefined,
  "btn-loading": undefined,
  "btn-ghost": undefined,
  "btn-light": undefined,
  "btn-glass": undefined,
  "btn-icon": undefined,
  "link-arrow": undefined,
  "text-link": undefined,
  "t-display": undefined,
  "t-h1": undefined,
  "t-h2": undefined,
  "t-h3": undefined,
  "t-h4": undefined,
  "t-h5": undefined,
  "t-lead": undefined,
  "t-body": undefined,
  "t-small": undefined,
  "t-xs": undefined,
  "t-mono": undefined,
  eyebrow: undefined,
  "t-grad": ".t-grad",
  input: ".input",
  "input-error": ".input",
  "input-valid": ".input",
  "input-disabled": ".input",
  select: ".select",
  textarea: ".textarea",
  check: ".check input",
  "check-error": ".check input",
  search: ".input",
  "chip-off": undefined,
  "chip-on": undefined,
  "filter-off": undefined,
  "filter-on": undefined,
  tag: undefined,
  badge: undefined,
  "badge-new": undefined,
  "tag-demo": undefined,
  spinner: undefined,
  "alert-info": undefined,
  "alert-success": undefined,
  "alert-error": undefined,
  skeleton: undefined,
  crumbs: ".crumbs",
  acc: "summary",
  tabs: ".tab",
  cmp: ".cmp-row",
  glass: undefined,
  solid: undefined,
  "paper-card": undefined,
  "glass-frost": undefined,
  widget: undefined,
  lg: undefined,
  "glass-dark": undefined,
  "widget-dark": undefined,
  "lg-dark": undefined,
  "lg-graphite": undefined,
  "lg-cobalt": undefined,
  "viz-fintech": undefined,
  "ground-paper": undefined,
  "ground-mist": undefined,
  "ground-horizon": undefined,
  "ground-spectrum": undefined,
  "ground-cta": undefined,
  "ground-mesh-light": undefined,
  "ground-mesh-graphite": undefined,
  lockup: undefined,
  "lockup-steel": undefined,
  wordmark: undefined,
  mark: undefined,
  "mark-light": undefined,
  "mark-mono": undefined,
  "mark-flat": undefined,
  "lockup-on-dark": undefined,
  "wordmark-dark": undefined,
  "mark-on-dark": undefined,
};

test("every component specimen matches the source stylesheet", async ({ browser, baseURL }) => {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const reference = await context.newPage();
  const actual = await context.newPage();
  await reference.goto(fixture("reference-components.html"));
  await actual.goto(`${baseURL}/ui-gallery`);
  await Promise.all([ready(reference), ready(actual)]);

  const problems: string[] = [];
  for (const [id, inner] of Object.entries(specimens)) {
    const selector = `[data-spec="${id}"] ${inner ?? "> *"}`;
    const [a, b] = await Promise.all([styleOf(reference, selector), styleOf(actual, selector)]);
    const left = normalise(a);
    const right = normalise(b);
    for (const key of Object.keys(left) as (keyof typeof left)[]) {
      if (left[key] !== right[key]) {
        problems.push(`${id}.${key}: design ${left[key]} / built ${right[key]}`);
      }
    }
  }
  await context.close();
  expect(problems).toEqual([]);
});

const WIDTHS = [320, 390, 768, 1024, 1101, 1280, 1440, 1728, 2560];

const NAV_SELECTORS = [
  ".nav",
  ".nav-logo",
  ".nav-links",
  ".nav-links > li:nth-child(1) .nav-link",
  ".nav-links > li:nth-child(2) .nav-link",
  ".nav-links > li:nth-child(3) .nav-link",
  ".nav-links > li:nth-child(4) .nav-link",
  ".nav-links > li:nth-child(5) .nav-link",
  ".nav-links > li:nth-child(6) .nav-link",
  ".nav-links > li:nth-child(7) .nav-link",
  ".nav-links > li:nth-child(8) .nav-link",
  ".nav-cta",
  ".nav-cta .btn",
  ".nav-burger",
  ".nav-mark",
];

// Compared relative to the footer. The Connect column's placeholders are not rendered (GAP-C08).
const FOOTER_SELECTORS = [
  ".footer-grid",
  ".footer-brand",
  ".footer-brand .lp",
  ".footer-grid > div:nth-child(2) h3",
  ".footer-grid > div:nth-child(2) .footer-links a:nth-child(2)",
  ".footer-grid > div:nth-child(3) h3",
  ".footer-grid > div:nth-child(4) h3",
  ".footer-grid > div:nth-child(4) .footer-links a:last-child",
];

async function boxes(page: Page, selectors: string[], origin?: string) {
  return page.evaluate(
    ({ selectors, origin }) => {
      const base = origin ? document.querySelector(origin)?.getBoundingClientRect() : undefined;
      return selectors.map((selector) => {
        const node = document.querySelector(selector);
        if (!node || getComputedStyle(node).display === "none") return { selector, hidden: true };
        const box = node.getBoundingClientRect();
        return {
          selector,
          hidden: false,
          x: box.x - (base?.x ?? 0),
          y: box.y - (base?.y ?? 0),
          width: box.width,
          height: box.height,
        };
      });
    },
    { selectors, ...(origin ? { origin } : {}) },
  );
}

for (const width of WIDTHS) {
  test(`header and footer geometry match at ${width}`, async ({ browser, baseURL }) => {
    const context = await browser.newContext({ viewport: { width, height: 900 } });
    const reference = await context.newPage();
    const actual = await context.newPage();
    await reference.goto(fixture("reference-shell.html"));
    await actual.goto(`${baseURL}/`);
    await Promise.all([ready(reference), ready(actual)]);

    // Placeholders the build deliberately does not render until real values exist (GAP-C08).
    await reference.evaluate(() => {
      document.querySelector(".footer-brand .t-small")?.remove();
      document.querySelector(".footer-grid > div:nth-child(5)")?.remove();
    });

    const problems: string[] = [];
    const compare = async (selectors: string[], origin?: string) => {
      const [a, b] = await Promise.all([
        boxes(reference, selectors, origin),
        boxes(actual, selectors, origin),
      ]);
      a.forEach((left, index) => {
        const right = b[index];
        if (!right) return;
        if (left.hidden !== right.hidden) {
          problems.push(`${left.selector}: hidden ${left.hidden} / ${right.hidden}`);
          return;
        }
        if (left.hidden) return;
        for (const key of ["x", "y", "width", "height"] as const) {
          const diff = Math.abs((left[key] ?? 0) - (right[key] ?? 0));
          if (diff > 2) problems.push(`${left.selector}.${key}: ${left[key]} / ${right[key]}`);
        }
      });
    };
    await compare(NAV_SELECTORS);
    await compare(FOOTER_SELECTORS, ".footer");
    await context.close();
    expect(problems).toEqual([]);
  });
}
