# Asset manifest

Source: `project/` in design version `1793869596-167d`. **All 93 binary assets were downloaded and hash-checked by the artifact service during SF-140**, so availability is proven rather than assumed. The seven `img/` backgrounds are copied to `public/images/design/`, unoptimised, because the ported CSS references them. SF-154 owns optimisation and the rest.

There are **no videos, no product screenshots and no photographs of real people or work** in the design. Product visuals are drawn in HTML and CSS.

## Business backgrounds (`img/`)

| Path | Size | Weight | CSS hook | Used by | Retrievable | Licence |
|---|---|---|---|---|---|---|
| `project/img/bg-meeting.jpg` | 1600 × 1000 (8:5) | 31 KB | `.photo-meeting` | ServicePage, Work | Retrieved | UNKNOWN (GAP-A01) |
| `project/img/bg-city.jpg` | 1600 × 1000 (8:5) | 54 KB | `.photo-city`, `.viz-ecommerce` | Home, Industries, IndustryPage, Insights, Work | Retrieved | UNKNOWN (GAP-A01) |
| `project/img/bg-trading.jpg` | 1600 × 1000 (8:5) | 21 KB | `.photo-trading`, `.viz-fintech` | Article, CasePage, Home, Industries, IndustryPage, Insights, ServicePage, Work | Retrieved | UNKNOWN (GAP-A01) |
| `project/img/bg-office.jpg` | 1600 × 1000 (8:5) | 37 KB | `.photo-office`, `.viz-healthcare`, `.viz-light` | Agent, CasePage, Home, Industries, IndustryPage, Insights, ServicePage, Work | Retrieved | UNKNOWN (GAP-A01) |
| `project/img/bg-code.jpg` | 1600 × 1000 (8:5) | 29 KB | `.photo-code`, `.viz-saas` | Article, Home, Industries, IndustryPage, Insights, Work | Retrieved | UNKNOWN (GAP-A01) |
| `project/img/bg-tower.jpg` | 1600 × 1000 (8:5) | 37 KB | `.photo-tower`, `.viz-enterprise` | About, Article, Home, Industries, IndustryPage, Insights, ServicePage, Work | Retrieved | UNKNOWN (GAP-A01) |
| `project/img/bg-server.jpg` | 1600 × 1000 (8:5) | 46 KB | `.photo-server`, `.viz-logistics` | CasePage, Home, Industries, IndustryPage, Insights, ServicePage, Work | Retrieved | UNKNOWN (GAP-A01) |

The README calls these "blurred business photography". All seven were inspected: they look procedurally generated, not photographed. Flat shapes stand in for buildings, people and screens, and none has camera or creator metadata. That points to a low licensing risk, but **provenance is not documented anywhere in the source**, so the owner must confirm it (GAP-A01). Do not describe them as photography in anything public.

**Responsive behaviour:** `center / cover` under gradient overlays, so every crop is acceptable and no art direction is needed.

**Production:** convert to AVIF and WebP. Because they are CSS backgrounds under a heavy overlay, they can compress hard. Keep them as CSS `image-set()` rather than `next/image`, unless a section needs LCP priority.

## Gradient grounds (`uikit/backgrounds/`)

| Path | Size | Weight | Use | Retrievable |
|---|---|---|---|---|
| `project/uikit/backgrounds/simplex-bg-graphite-mesh-1920x1080.png` | 1920 × 1080 | 668 KB | UI kit download. Pages draw these grounds with CSS gradients | Retrieved |
| `project/uikit/backgrounds/simplex-bg-horizon-1920x1080.png` | 1920 × 1080 | 121 KB | UI kit download. Pages draw these grounds with CSS gradients | Retrieved |
| `project/uikit/backgrounds/simplex-bg-ink-field-1920x1080.png` | 1920 × 1080 | 575 KB | UI kit download. Pages draw these grounds with CSS gradients | Retrieved |
| `project/uikit/backgrounds/simplex-bg-light-mesh-1920x1080.png` | 1920 × 1080 | 455 KB | UI kit download. Pages draw these grounds with CSS gradients | Retrieved |
| `project/uikit/backgrounds/simplex-bg-mist-1920x1080.png` | 1920 × 1080 | 138 KB | UI kit download. Pages draw these grounds with CSS gradients | Retrieved |
| `project/uikit/backgrounds/simplex-bg-spectrum-1920x1080.png` | 1920 × 1080 | 1068 KB | UI kit download. Pages draw these grounds with CSS gradients | Retrieved |

Pages do not reference these. Do not ship them as page backgrounds: at up to 1 MB they would replace CSS that costs almost nothing. The README lists four grounds, but six files exist.

## Logos (`uikit/logos/`)

| Path | Weight | Accessible name | Retrievable |
|---|---|---|---|
| `project/uikit/logos/simplex-lockup-pebble-ink.svg` | 3.0 KB | SimpleX | Retrieved |
| `project/uikit/logos/simplex-lockup-pebble-steel.svg` | 3.0 KB | SimpleX | Retrieved |
| `project/uikit/logos/simplex-lockup-pebble-white.svg` | 3.0 KB | SimpleX | Retrieved |
| `project/uikit/logos/simplex-mark-dark.svg` | 1.5 KB | SimpleX SX mark | Retrieved |
| `project/uikit/logos/simplex-mark-light.svg` | 1.3 KB | SimpleX SX mark | Retrieved |
| `project/uikit/logos/simplex-mark-mono.svg` | 1.3 KB | SimpleX SX mark | Retrieved |
| `project/uikit/logos/simplex-mark-steel.svg` | 1.5 KB | SimpleX SX mark | Retrieved |
| `project/uikit/logos/simplex-wordmark-black.svg` | 2.5 KB | SimpleX | Retrieved |
| `project/uikit/logos/simplex-wordmark-ink-cobalt.svg` | 2.5 KB | SimpleX | Retrieved |
| `project/uikit/logos/simplex-wordmark-ink.svg` | 2.5 KB | SimpleX | Retrieved |
| `project/uikit/logos/simplex-wordmark-white-steel.svg` | 2.5 KB | SimpleX | Retrieved |
| `project/uikit/logos/simplex-wordmark-white.svg` | 2.5 KB | SimpleX | Retrieved |

Outlined SVGs, no font needed. Files are named `pebble` for compatibility, but since v1.8 they contain the **tile** lockup. Licence: SimpleX brand asset created for this project. The letters are outlined from a typeface the source does not name, so confirm which one before registering the mark (GAP-A01).

Pages draw the logo inline, not from these files: live Geist text plus an inline SVG X (`.logo`, `.lp`, `.sx-mark`). Keep that for fidelity and the hover animation. Use the SVG files for metadata and email.

## Raster logos (`uikit/png/`)

68 files, all retrieved. Marks (`dark`, `light`, `mono`, `steel`) at 16, 32, 48, 64, 128, 180, 256, 512 and 1024 px; lockups (`ink`, `steel`, `white`) and wordmarks (`black`, `ink`, `ink-cobalt`, `white`, `white-steel`) at 24, 48, 96 and 192 px tall.

**Favicon set exists in substance:** use `simplex-mark-dark-{32,180,512}.png`. No `.ico`, `manifest` or social image is defined (GAP-A02).

## Fonts

| Family | Weights | Source | Cyrillic | Licence |
|---|---|---|---|---|
| Geist | 300–700 variable | Google Fonts link in every board | Yes: verified in the served CSS | SIL OFL 1.1 (verify in SF-154) |
| Geist Mono | 400, 500 | Google Fonts link in every board | Yes: verified in the served CSS | SIL OFL 1.1 (verify in SF-154) |

The foundation self-hosts both through `next/font/google`, so visitors never contact Google. The stylesheet's fallback chain also names Inter, which is never loaded.

## Icons

29 line icons as data URIs in `simplex.css`, masked through `.ico`: `ai`, `alert`, `architecture`, `arrow`, `arrow-ur`, `building`, `check`, `clock`, `cloud`, `commerce`, `consulting`, `custom`, `design`, `desktop`, `enterprise`, `fintech`, `health`, `legacy`, `link`, `logistics`, `mobile`, `package`, `pin`, `plus`, `quality`, `saas`, `search`, `teams`, `web`. The UI kit heading says 29. They are original to the kit. Keep them as CSS masks, or export to an SVG sprite in SF-142.

## Drawn in code (no file)

- `.mock` product UI
- `.arch` architecture diagrams
- `.phone`, `.desk-win`, `.laptop`, `.browser` device frames
- `.ring`, `.spark`, `.bars` data viz
- `.footer-mega` outlined wordmark
- `.bg-cta` grid and chart line (data URI)
- `--noise` grain (data URI)

## Placeholders: images that do not exist

These appear as labelled grey boxes in the design and must not ship as-is. **Do not substitute generated or stock imagery without authorization.**

| Composition | Label in the design |
|---|---|
| About | Portrait · 4:5 |
| About | Team photograph — real people at work, not stock |
| About | Workshop or office photograph |

Authors' avatars, the leadership portraits (4 × 4:5) and team photography are the blocking items (GAP-C05).

## Missing entirely

- **The CTO's build-vs-buy playbook PDF**, promised on `/insights` as a "24-page PDF" (GAP-A03).
- **Open Graph images** for every route (GAP-A02).
- **`support.js`:** referenced by every board but it is the design runtime, not a site asset. It is not in the published file list and is not needed.

## Work (SF-148)

**The Work section uses no client asset, photograph or screenshot.** Every visual is a design gradient or is drawn in code, so nothing needs rights clearance, and nothing was sourced from stock.

| Visual | Provenance |
|---|---|
| Project and hero grounds | `.viz-*`, `.bg-horizon`, `.bg-spectrum`, `.bg-cta`, in `simplex.css` |
| Positions, queue, summary and form mock-ups | Drawn in code from the design. Fictional, hidden from assistive technology, labelled "Sample" |
| Dispatch map | Inline SVG copied from `CasePage.dc.html`. Shows no real route |
| Architecture diagrams | `.arch`, drawn in code. Illustrative |
| `bg-meeting.jpg` | Only used by the withheld reference block on this page |

## Company and Careers (SF-149)

Only `bg-tower.jpg` is used, through `.photo-tower`. **Portraits, team photographs and office photographs do not exist, and were not replaced with stock**, as the design asks (GAP-C05). The design has no technology logos, so none is used.

## Contact (SF-151)

No image. Backgrounds are `bg-horizon` and `paper`.

## Insights (SF-150)

No image is used. Cards use `.viz-*` gradients, and the draft's cover is a diagram drawn in code. `bg-code.jpg` is only used by the withheld playbook. No author photograph exists, so published articles show initials.

