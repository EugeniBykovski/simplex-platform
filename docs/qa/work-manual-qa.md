# Work: manual QA

Manual record for SF-148, against design version `1793953114-553b`. No test tooling was added to the repository. Inspection ran from a helper outside it, against production builds on a free port, with each server started and stopped by PID.

**Browser actually inspected: Chromium only, in emulated viewports.** Safari, Firefox, physical iOS and Android, and screen readers were **not** checked.

## What this comparison is, and is not

**This is a source-render comparison, not a published-canvas comparison.** Each reference is the source with its template and slug data resolved, styled only by the original `simplex.css` and its own board styles.

Boards exist for `/work` at 1440, 768 and 390, and for Ledgerline at 1440 and 390. Carepath and Routewise at 390, and all cases at tablet widths, are compared against the source rendered at that width, not an approved board.

## Geometry

See the [artboard matrix](../design/work-artboard-matrix.md#geometry).

## Width matrix

| Check | Result |
|---|---|
| Views | 192: 4 routes × 2 languages × 24 widths |
| Widths | 320, 360, 375, 390, 412, 430, 600, 601, 768, 820, 860, 861, 1000, 1001, 1024, 1100, 1101, 1280, 1366, 1440, 1512, 1728, 1920, 2560 |
| Page overflow | None |
| Navbar overflow | None |
| Console and page errors | None |
| HTTP | 200 on all |
| Overflow inside headings, cards, mock-ups, chips, links | None after the fixes below |
| Slider panes clipped | None |

Found and fixed during inspection:

- **A real regression, caught by the crawl.** Marking the current page in the mobile menu turned pending routes into live links to 404s (`/about`, `/careers` and others). They are disabled links again, and the crawl finds no broken target.
- The slider's input is invisible, so keyboard users could not see focus, as in the source. The handle now shows a ring.
- Layout C's bands touched, because the source's `gap-10` does not exist.
- A 140 px column squeezed Layout A's titles below 380 px, overflowing at 320. It stacks there.
- A Russian heading at 320, a Russian slider pane at 601, and two Russian labels overflowed.
- The replacement before-and-after headline wrapped to four lines. It is now shorter.

## Inspected by eye

| Width | Inspected |
|---|---|
| 1440 | `/work` in full. All three cases in full, with Routewise beside the source |
| 768 | All four routes as full pages at reduced size, with `/work` beside its board |
| 390 | All four routes in both languages as full pages at reduced size, with `/work` and Ledgerline beside the source |
| 1024, 320 | Captured, not closely viewed |
| Others | Measured by the matrix only, not viewed |

## Functional

| Check | Result |
|---|---|
| Pages crawled | 8, both languages |
| Internal links on them | All 54 distinct targets return 200 |
| `href="#"` | None |
| `/work/nope`, `/ru/work/nope`, `/work/northbeam`, `/work/atlas-commerce`, `/work/ledgerline/x` | 404 |
| `/en/work` | 307 to `/work` |
| Filters: default, one industry, an empty combination, clear | 6, 1, 0 with the empty state, 6. Count announced in a live region |
| Russian plurals | 6 проектов, 1 проект, 2 проекта |
| Keyboard on filters | Focus stays on the button after filtering |
| Cards without a case | No link |
| Slider, keyboard and pointer | 50% → 60% → 92%, 24% on click. Clip follows |
| Slider at 390 | Panes stack, input hidden, both readable |
| Contents links | Land 100 px from the top. Sidebar sticky on desktop, static on mobile |
| Next project | Each of the three links to the next |
| Header, mobile menu | Our Work marked current on all four routes. Pending routes stay disabled |
| Links from Home, Services, Industries, footer | Live |
| Language switch | `/work/routewise` to `/ru/work/routewise` |
| Disabled CTA | A click does not navigate |
| No JavaScript | All sections and all six cards render. Filters do nothing |
| Reduced motion | No running animations. The `h1` has none in either mode |

## Truthfulness

Checked by text search on all 8 pages:

| Check | Result |
|---|---|
| Bracketed placeholders | None |
| Percentages, hours | None |
| "NPS", "reference call", "under NDA", testimonial wording | None |
| Demonstration labels | At least 2 on every case page, 7 on `/work` |

## Contrast

Measured against rendered pixels on the three heroes, worst pixel, at 1440 and 390.

| Page | Lowest result |
|---|---|
| Routewise | 10.49:1, tagline |
| Carepath | 5.57:1, current breadcrumb |
| `/work` | 5.57:1, current breadcrumb |

Other sections were not measured this way. Lighthouse reported no contrast failure, but it can't read text over gradients.

## SEO

| Check | Result |
|---|---|
| Titles, descriptions | Unique across 8 pages. Each says "demonstration" |
| Open Graph, canonical | Present. Russian canonicalises to English |
| `h1` | One per page, with no skipped levels |
| Duplicate IDs | None |
| hreflang | None until Russian is approved |
| Robots | `noindex`, set by the pages |
| Structured data | None |

## Lighthouse

One mobile run per page, simulated throttling, local production build. **Indicative only.**

| Page | Performance | Accessibility | Best practices | SEO | LCP | CLS | TBT | Weight |
|---|---|---|---|---|---|---|---|---|
| `/work` | 89 | 100 | 100 | 66 | 3.7 s | 0 | 0 ms | 598 KiB |
| `/work/ledgerline` | 92 | 100 | 100 | 66 | 3.3 s | 0 | 10 ms | 390 KiB |
| `/work/carepath` | 92 | 100 | 100 | 66 | 3.3 s | 0 | 10 ms | 407 KiB |
| `/work/routewise` | 90 | 100 | 100 | 66 | 3.6 s | 0 | 10 ms | 454 KiB |
| `/ru/work/routewise` | 90 | 100 | 100 | 66 | 3.6 s | 0 | 10 ms | 462 KiB |

SEO is 66 because of the deliberate `noindex`. **LCP remains above the 2.5 s target**, for SF-154. `/work` is the heaviest, with six gradient backgrounds, and its cause was not investigated further. Other pages were not re-measured.

## Evidence

- [Overview at 1440](evidence/sf-148/overview-1440.jpg): source, English, Russian.
- [Cases at 1440](evidence/sf-148/cases-1440.jpg): source and build for each layout.
- [Mobile](evidence/sf-148/mobile-390.jpg).
- [Tablet](evidence/sf-148/tablet-768.jpg).

## Open

- Published-canvas comparison.
- Safari, Firefox, physical devices and a screen-reader pass.
- Native Russian review.
- Founder confirmations in the [attribution register](../content/portfolio-attribution-register.md).
