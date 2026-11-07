# Font audit

For SF-154.

| Item | State |
|---|---|
| Typefaces | Geist (variable), Geist Mono 400 and 500. Matches the design. **Not changed** |
| Delivery | Self-hosted by `next/font`, downloaded at build. Visitors never contact Google |
| Licence | SIL OFL 1.1, verified at the source |
| `font-display` | `swap`, with `next/font`'s metric-adjusted fallback |
| Cyrillic | Present. Loads on demand on Russian pages |
| Layout shift | CLS 0 on English pages, and up to 0.002 on Russian Home |

## What changed

| | Before | After |
|---|---|---|
| Preload tags | 6 | **2**: Geist Latin and Mono Latin |
| Font bytes on an English page | 113 KB in Lighthouse's run | **52 KB, 2 files** |
| Font bytes on a Russian page | Same 113 KB | 80 KB, 4 files |

`subsets` in `src/styles/fonts.ts` only picks what is preloaded. Every face remains available through `unicode-range`.

## A hidden cause, found by tracing a regression

Removing the Cyrillic preload first made Home's LCP **worse**: 1.95 s to 2.70 s. The language switcher has a screen-reader-only "Русский", so every English page still downloaded the whole 24 KB Cyrillic file, and it now arrived late. The swap repainted the page mid-fade, making the lead paragraph a new, later LCP candidate.

Fix: that span uses a system font. It is never painted, and screen readers don't use fonts. English pages stopped downloading Cyrillic, and the regression went away.

Two hypotheses were tried first and were wrong: late Mono, then `content-visibility`. Both are recorded in [core-web-vitals.md](core-web-vitals.md).

## Limit

`next/font` preloads are per build, not per locale. **Russian pages load Cyrillic late**, so Russian Home's LCP is 2.63 s, comparable to the starting commit's 2.57 s median. A per-locale font setup is worth considering when Russian is approved for indexing. See [remaining issues](remaining-issues.md).
