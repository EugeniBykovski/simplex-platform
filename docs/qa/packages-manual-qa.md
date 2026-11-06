# Build packages: manual QA

Manual record for SF-146, against design version `1793869596-167d`. No test tooling was added to the repository. Inspection ran from a helper outside it, against production builds on a free port, with each server started and stopped by PID.

**Browser actually inspected: Chromium only, in emulated viewports.** Safari, Firefox, physical iOS and Android, and screen readers were **not** checked.

## What this comparison is, and is not

**This is a source-render comparison, not a published-canvas comparison.** The reference is the source with its template and data resolved, styled only by the original `simplex.css` and its own board styles. The published canvas was not compared.

## Geometry

See the [artboard matrix](../design/packages-artboard-matrix.md#geometry). At 1440, seven of eight sections match the source exactly, and the comparison is 1 px shorter.

## Width matrix

| Check | Result |
|---|---|
| Views | 46: 23 widths × 2 languages |
| Widths | 320, 360, 375, 390, 412, 430, 600, 601, 768, 820, 860, 861, 1000, 1024, 1100, 1101, 1280, 1366, 1440, 1512, 1728, 1920, 2560 |
| Page overflow | None |
| Navbar overflow | None |
| Console and page errors | None |
| HTTP | 200 on all |
| Overflow inside buttons, chips, headings, tiles, table cells | None after the fixes below |

Found and fixed during inspection:

- Bars in the centre phone rendered blue, because `bg-*` cannot override the design's gradient. Now `[background:…]`.
- The laptop base covered the start of the squad note. The source has this too (GAP-D22).
- "Sample" overflowed small KPI tiles at 320, 601, 861, 1000 and 1024. They now show a dash, as Home does.
- The full-cycle card's label row overflowed between 601 and 1000, and now wraps.
- Russian tile labels overflowed at 601 and 861. They are shorter, and truncate in the card visual.
- A longer availability headline added 191 px at 1440. It is now "Start dates, on request."

## Inspected by eye

| Width | Inspected |
|---|---|
| 1440 | Every section beside the source, English. Russian hero viewed, the rest captured |
| 768 | Whole page, English. Russian captured |
| 1024, 320 | Captured, in the evidence sheets, not closely viewed |
| 390 | Top and bottom of the page in English, the bottom beside the source. Top, middle and bottom in Russian |
| Others | Measured by the matrix only, not viewed |

## Functional

| Check | Result |
|---|---|
| Track tabs: click, arrow keys, Home, End | Card, phone frame and release label all change. Android frame on Android only |
| Package cards and "Compare packages" | Reach their anchors |
| Disabled CTA | A click does not navigate. 5 of them, all `/contact` |
| Live links in the page | `/`, `/services`, `/services/desktop-development`, `/agent` |
| Links to `/packages` from Home, Services and the footer | Live |
| Nav | Services marked current |
| Language switch | `/packages` to `/ru/packages` |
| Accordion | First open, Enter toggles, and it works with no JavaScript |
| `/packages/x` | 404 |
| `/en/packages` | 307 |
| `href="#"` | None |
| No JavaScript | All 8 sections render. The default track shows, and the other two need JavaScript |
| Reduced motion | No running animations. The `h1` has none in either mode |
| Shared `Tabs` after the refactor | Home, `/ru` and `/agent` still select and wrap |

## Comparison table

| Check | Result |
|---|---|
| Accessibility tree | `table` with its name, `columnheader` ×3, `rowheader` ×6 |
| Computed display | `table-row`, `table-cell` |
| 390 | 560 px scrolls in 348 px. Focusing and pressing the right arrow scrolled it |
| Region name | "Comparison of the three build packages" |

## Commercial

| Check, both languages | Result |
|---|---|
| Currency amounts or week counts in visible text | None |
| Bracketed placeholders in the page | None |
| `Offer`, or any structured data | None |

## SEO

| Check | Result |
|---|---|
| Title, description, canonical, Open Graph | Present, and specific to the page. Russian canonicalises to English |
| `h1` | One, then seven `h2`, with no skipped levels |
| Duplicate IDs | None |
| hreflang | None until Russian is approved |
| Robots | `noindex`, set by the page until the commercial register is cleared |

## Accessibility

| Check | Result |
|---|---|
| Keyboard order | Follows the page over the first 26 stops, into the package cards. The 16 stops logged after the header menus all had a focus ring. Later stops were spot-checked only: tabs, accordion and comparison region |
| Mobile targets under 24 px | Only breadcrumb links, as on other pages |
| Hover on the hero's ghost button | White text kept |
| Decorative devices | `aria-hidden` |

Contrast was not separately measured across states on this page. Lighthouse found no contrast failures, but it can't read text over gradients.

## Lighthouse

One mobile run per page, simulated throttling, local production build. **Indicative only.**

| Page | Performance | Accessibility | Best practices | SEO | LCP | CLS | TBT | Weight |
|---|---|---|---|---|---|---|---|---|
| `/packages` | 90 | 100 | 100 | 66 | 3.5 s | 0 | 0 ms | 379 KiB |
| `/ru/packages` | 92 | 100 | 100 | 66 | 3.3 s | 0 | 10 ms | 389 KiB |

SEO is 66 because of the deliberate `noindex`. **LCP remains above the 2.5 s target**, at the level of `/agent` and Services, so it remains for SF-154. The tracks' hidden panels and phones add HTML (about 200 KB uncompressed), and the only client code is the selection logic.

## Evidence

- [Full pages at 1440](evidence/sf-146/full-1440.jpg): source, English, Russian.
- [Full pages at 390 and 320](evidence/sf-146/full-390.jpg): source, English, Russian, Russian at 320.
- [Tablet](evidence/sf-146/full-tablet.jpg): 768, 1024, Russian at 768.

## Open

- Published-canvas comparison.
- Safari, Firefox, physical devices and a screen-reader pass.
- Native Russian review.
- Founder decisions in the [commercial register](../content/packages-commercial-register.md).
