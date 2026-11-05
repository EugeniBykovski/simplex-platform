# Visual regression strategy

No Storybook. Playwright drives all browser QA. Coverage is listed in [test-matrix.md](test-matrix.md). Owner: SF-155.

## What "matches the design" can mean

The reference and the implementation come from different code, and browsers rasterise text differently across machines and versions. **Pixel-identical output is not a realistic goal and this strategy does not promise it.** The target is measurable geometry and typography, close visual agreement, and human sign-off.

## Reference capture

The design's boards are live HTML, which is a great advantage: a reference can be captured at any width from the actual source, in the same browser engine.

1. Export the design source at the pinned version, `1793869596-167d`. Record the version with every reference set.
2. Render each composition with the design runtime at its native frame width in Playwright's Chromium.
3. Capture full-page screenshots and a **geometry snapshot** (below) per board.
4. Store references under `tests/visual/reference/<version>/` (planned). If binary size becomes a concern, use Git LFS or CI artifacts.

**Open point for SF-155:** the design runtime (`support.js`, `dc-runtime.js`) is served by the artifact host and is not in the published project files list as `support.js`. If references can't be rendered locally, capture them from the live canvas through a signed-in browser. Prove this first, as a spike (GAP-Q01).

Freeze the following in both captures: animations off through `reducedMotion: 'reduce'`, `document.fonts.ready` awaited, a fixed locale and time zone, scrollbars hidden, and a device scale factor of 1. The drift backgrounds and scroll timelines are time- or position-dependent, which is why motion is off.

Note the prototype's `.proto-bar` on Contact: mask or remove it from reference captures.

## Comparison workflow

1. Capture the reference at its native frame dimensions.
2. Capture the implementation at a matching viewport, from a production build.
3. Compare geometry and typography numerically.
4. Compare pixels with masks and inspect the diff.
5. Inspect section alignment, spacing, gradients, image crops, cards and footer by eye, side by side.
6. Record deviations in `docs/qa/deviations.md` (planned): route, width, description, classification, decision.
7. Fix significant differences.
8. Repeat across breakpoints.

## Geometry snapshot

Extract the following from both DOMs through a shared selector map, such as `data-qa="section:hero"`. Each section in [artboard-inventory.md](../design/artboard-inventory.md) gets one.

- Bounding box of each section, its `.wrap`, and its heading.
- Computed `font-size`, `line-height`, `letter-spacing`, `font-weight`, `font-family`, `color`.
- Computed `background-image`, `border-radius`, `box-shadow`, `backdrop-filter`, `padding`, `gap`.
- Total page height, compared with [composedHeights](../design/artboard-inventory.json).
- No horizontal overflow: `scrollWidth <= clientWidth`.

## Tolerances

Proposed starting points. Tune in the first SF-155 run, and record any change here.

| Check | Tolerance | Severity if exceeded |
|---|---|---|
| Section box position, width | ±2 px | Fix |
| Section height | ±1% or ±8 px, whichever is greater | Fix |
| Total page height | ±1% | Investigate: text wrap usually |
| Container and gutter | Exact | Fix |
| Font size, line height, tracking, weight | Exact at the same width | Fix |
| Colour tokens | Exact | Fix |
| Gradients, shadows, radius, blur | Exact computed value | Fix |
| Text line breaks | Identical at reference widths | Investigate |
| Pixel diff, masked | `maxDiffPixelRatio` .01 per section | Inspect |
| Horizontal overflow | None, at any width | Blocker |

Masks: live clocks and any randomised values. Keep masks minimal and list each one, since masks hide regressions.

Deviation classes: **Blocker** (wrong layout, overflow, unreadable), **Major** (visible difference a reviewer would notice), **Minor** (sub-tolerance or rasterisation), **Accepted** (owner-approved adaptation, or a fixed gap such as removing `.proto-bar`).

## Which comparison applies where

| Evidence level | Comparison |
|---|---|
| BOARDED | Against the design reference, using tolerances above |
| CSS-DERIVED | Render the **design source itself** at that width as the reference. This is possible because it is responsive HTML, and it gives a real reference for 1024 or 1920 |
| ADAPTATION | Against documented rules only. **Label the result as an adaptation**, never as matching the design |
| Russian | No reference. Check for overflow, clipping and rhythm, and review by eye |

Levels are defined in [responsive-specification.md](../design/responsive-specification.md).

## Viewports

| Tier | Widths | Run on |
|---|---|---|
| Reference | 390, 768, 1440 | Every PR that touches UI |
| Extended | 320, 360, 375, 412, 430, 820, 1024, 1280, 1366, 1512, 1728, 1920, 2560 | Nightly and pre-release |
| Short laptop | 1366 × 768, 1440 × 900, 1512 × 982 | Nightly, Home first |

Browsers: Chromium for pixel comparison. WebKit and Firefox for layout, overflow and function only, not pixel diffs. In Firefox, scroll-driven animation is unavailable by default, so verify final states. Safari behaviour needs a real device pass before release, because `backdrop-filter`, sticky and iOS safe areas are where emulation is least reliable.

## Stability rules

Same container image in CI as for baselines. Baselines update only through a reviewed PR, and only with a reason. Never bulk-accept. Keep references for the pinned design version separate from implementation snapshots.

## Re-sync when the design changes

When a new artifact version is published, diff `canvas.json` and each `.dc.html` against the pinned version, list affected routes, regenerate references for those, and update [artboard-inventory.json](../design/artboard-inventory.json).
