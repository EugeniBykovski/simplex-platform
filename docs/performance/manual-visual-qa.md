# Manual visual QA

For SF-154. **Browser actually inspected: Chromium only, in emulated viewports.** Safari, iOS, Firefox, physical devices and screen readers were **not** checked. Playwright has WebKit available, but it wasn't run, and wouldn't count as Safari or iOS verification. Temporary helpers stayed outside the repository.

**Compared against the starting commit, which earlier tickets compared against the design source. This is not a new published-canvas comparison, and no pixel-perfect claim is made.**

## Before and after

| Check | Result |
|---|---|
| Views | 52: 13 routes × 1440, 1512, 820, 390, with reduced motion |
| Height changes | **0** |
| Pixels off by more than 24 of 255 | **0%** |
| Worst mean difference | 0.12 of 255, on the recompressed images |
| Worst share of pixels off by more than 2 | 0.052% |

Glass, gradients and lighting were **not changed**, and the comparison confirms they still render as before.

Home was captured with `content-visibility` turned off, as capture tools otherwise show skipped sections blank. Separately, each skipped section was scrolled to with motion on at 1440 and 390, and rendered.

Evidence: [Home at 1440](evidence/home-1440-before-after.jpg), [390](evidence/mobile-390-before-after.jpg), [1512 and 820](evidence/laptop-tablet-after.jpg).

## Width matrix

304 views: 19 routes × 320, 360, 375, 390, 412, 430, 768, 820, 1024, 1280, 1366, 1440, 1512, 1728, 1920, 2560. **No page or navbar overflow, no page errors.**

## Motion on

Motion pixels aren't compared, since animations differ per frame. The story glow, pulse and cue were checked by their computed animation, and looked at in viewport shots. **A side-by-side of the running animations wasn't made.**

## Regressions

| Area | Result |
|---|---|
| SEO crawl, indexable build | 74 pages, none missing metadata, no duplicates, sitemap 14 of 14, 66 valid social cards, JSON-LD unchanged |
| Legal gates | All 6 pending, no draft text |
| Contact flow, mock mode | 70 of 70 |
| Reduced motion, touch, keyboard, contrast, footer | 18 of 18 |
| Static gates | See the commit |
| Secret canary | Clean in browser files |

## Not measured

Actual Retina sharpness on a physical display, backdrop-filter cost on a real phone, and real-device touch.
