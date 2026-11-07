# Asset provenance

For SF-154. Existing detail is in the [asset manifest](../design/asset-manifest.md). **Nothing here is a legal opinion.**

| Asset | Location | Used | Pages | Source | Rights | Duplicate | Format | Status |
|---|---|---|---|---|---|---|---|---|
| 7 `bg-*` images, each as AVIF, WebP, JPEG | `public/images/design/` | Yes, all 7 | Home, Services, Industries, Work, About, Agent | Design `project/img/`, recompressed for AVIF and WebP. JPEGs unchanged | **UNKNOWN (GAP-A01). BLOCKED for rights** | No | Appropriate | Needs owner to confirm origin |
| `icon.png`, `apple-icon.png`, `favicon.ico` | `src/app/` | Yes | All | Design `uikit/png/` marks, and SimpleX's own | Owner's brand. Confirm authorship | No | PNG, ICO | Approved design assets |
| Inline logo, X, icons | Components, `simplex.css` | Yes | All | Design source | Owner's brand | No | SVG, data URI | Unchanged |
| Geist, Geist Mono | `next/font`, from Google Fonts | Yes | All | Vercel | **SIL OFL 1.1, verified** in the [Geist repository's licence](https://github.com/vercel/geist-font) | No | woff2 | Fine |
| Geist for social cards | `src/assets/og/` | Yes, at build | `/og/*` | Google Fonts | SIL OFL 1.1 | Needed: the renderer can't read woff2 | woff | Fine |
| Social cards | Generated | Yes | Metadata | Generated from wordmark and titles | Owner's brand | No | PNG | **Owner approval pending** (GAP-A02) |

**Not present:** client logos, screenshots, photographs of real people, video, remote media. `next.config.ts` allows no remote image host.

**Not copied:** the rest of the design's `uikit/` downloads, such as background PNGs and logo files. Pages draw these in CSS.

**Nothing was deleted.** A rule-by-rule check found all seven images referenced by the stylesheet, and in rendered pages.

## Higher-quality sources

None known. The 1600×1000 JPEGs are the best in the design, and sit under heavy overlays, so softness on a very large or Retina display is not apparent in review. **A true-resolution source would be needed if overlays are ever reduced.**
