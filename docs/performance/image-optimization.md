# Image optimization

For SF-154.

**`next/image` is not used, deliberately.** The site has no `<img>`: every raster is a CSS background under gradient layers, on elements whose layout doesn't depend on it, so there is no intrinsic-size or CLS risk. Moving to `next/image` would restructure approved compositions for no measured gain. The manifest's earlier decision stands.

## Formats

Real compression from the 1600×1000 originals, in bytes:

| Image | JPEG, kept as fallback | WebP q70 | AVIF q55, used | AVIF saving |
|---|---|---|---|---|
| `bg-city` | 56,044 | 18,146 | 14,944 | 73% |
| `bg-server` | 47,498 | 12,546 | 8,381 | 82% |
| `bg-tower` | 38,452 | 10,644 | 7,462 | 81% |
| `bg-office` | 37,976 | 8,354 | 6,180 | 84% |
| `bg-meeting` | 32,682 | 8,912 | 5,409 | 83% |
| `bg-code` | 29,941 | 10,160 | 6,317 | 79% |
| `bg-trading` | 21,749 | 7,290 | 4,417 | 80% |
| **Total** | **264,342** | **76,052** | **53,110** | **80%** |

**Lower quality was tested and not used:** AVIF q40 saved about another 25%, but there was no need to approach the limit for these margins.

`simplex.css` declares each background twice: JPEG, then `image-set()` with AVIF, WebP and JPEG. A browser without `image-set` types keeps the first. Lightning CSS also emits a `-webkit-image-set` form, adding about 0.7 KB gzipped.

## Fidelity

Compared with the starting commit by pixel, in 52 views: 13 routes × 4 widths. No height changed, no pixel differed by more than 24 of 255, and the worst page's mean difference was **0.12 of 255**. Reviewed by eye as well.

## Loading

CSS backgrounds can't use `loading="lazy"`. On Home, the six sections holding images, or a lot of layout, use `content-visibility: auto`, with estimated sizes per width:

| Check on Home | Before | After |
|---|---|---|
| Background images at load, in a browser check | 6 | **0**, and 6 as they scroll into view |
| Image bytes in Lighthouse's run | 231 KB | 51 KB. Not 0, as that run's own page handling brings some sections into view |
| Main-thread work, 4× CPU, first load | 463 ms without skipping | 386 ms |

Checked: rendering when scrolled into view, the End key, height stability once rendered, and text staying in the accessibility tree and DOM. Browsers without the property load everything, as before. Full-page screenshot tools see skipped sections as blank, so capture tools need to disable it. PDF printing produced 24 pages, though **the printed content was not reviewed section by section.**

No other route loads enough images to justify this.

**No image is the LCP element on any measured route:** it is always text.

## Cache

`/images/design/*` now returns `public, max-age=86400, stale-while-revalidate=604800`. They aren't fingerprinted, so this stays moderate, and a replaced image arrives within a day. Was `max-age=0`. Hashed Next.js assets are already immutable. On real hosting, the host may also apply its own rules: **not verified.**

## Favicon

`icon.png` went from the 512 px, 121,751-byte mark to the design's 128 px, 10,774-byte one. Browsers fetch it on a first visit.
