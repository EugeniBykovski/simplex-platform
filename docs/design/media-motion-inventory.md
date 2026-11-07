# Media and motion inventory

For SF-154, against design version `1793953114-553b`. Claude Design was not modified. Exact motion values are in [motion-interaction-specification.md](motion-interaction-specification.md), and the asset table is in [asset-manifest.md](asset-manifest.md). Findings are in [`docs/performance/`](../performance/remaining-issues.md).

**The site has no `<img>`, video or product screenshot.** Media is CSS backgrounds, gradients, and drawings in HTML and inline SVG.

## Media

| Route | Source | Element | Asset | Size | Display | Desktop, mobile | Priority | Implementation | Change | Parity |
|---|---|---|---|---|---|---|---|---|---|---|
| `/` | Home | Work cards, industry cards, insight feature | `.viz-*` with `bg-*` | 1600×1000 | Card | `center / cover` under overlay | Below the fold | CSS | `image-set`, skipped until near view | Pixel-equivalent |
| `/services/*` | ServicePage | Hero visual, case grounds, photo CTA | `.viz-light`, `.viz-*`, `.photo-meeting` | 1600×1000 | Panel, section | Same | Hero visual above the fold on desktop | CSS | `image-set` | Pixel-equivalent |
| `/industries` | Industries | Cards, trading photo band | `.viz-*`, `.photo-trading` | 1600×1000 | Card, section | Same | Hero has no image | CSS | `image-set` | Pixel-equivalent |
| `/industries/*` | IndustryPage | Hero ground, project card | `.viz-*` | 1600×1000 | Section | Same | Hero is the LCP context, but its text is the LCP element | CSS | `image-set` | Pixel-equivalent |
| `/work`, `/work/*` | Work, CasePage | Cards, hero grounds, photo band | `.viz-*`, `.photo-*` | 1600×1000 | Card, section | Same | Varies | CSS | `image-set` | Pixel-equivalent |
| `/about` | About | Photo band | `.photo-tower` | 1600×1000 | Section | Same | Below the fold | CSS | `image-set` | Pixel-equivalent |
| `/agent` | Agent | Embed ground | `.viz-*` | 1600×1000 | Panel | Same | Below the fold | CSS | `image-set` | Pixel-equivalent |
| All | Nav, Footer, Logo | Lockup, mark, wordmark | Inline SVG X and live text | Vector | Varies | Mark at ≤ 600 | With the page | Inline | None | Unchanged |
| All | Tabs and icons | Icon set | CSS `mask` data URIs | Vector | 16–48 px | Same | With CSS | CSS | None | Unchanged |
| Home, Agent, Services, Packages, Work | Boards | Mock screens, phones, windows, charts | HTML and CSS drawings | n/a | Varies | Per source rules | With the page | Components | None | Unchanged |
| All | | Favicon | `src/app/icon.png` | 128×128, was 512×512 | Tab | Same | Browser | Design's `simplex-mark-dark-128.png` | Smaller file, same mark | Same design asset |
| All | | Social cards | `/og/*` | 1200×630 | Off-site | n/a | Never with the page | `next/og` at build | From SF-153 | Not in the design |

Gradient grounds (`bg-horizon`, `bg-mist`, `bg-ink`, `mesh-*`) are CSS, not files.

## Motion

| Pattern | Trigger | Duration, delay, easing | Properties | Desktop | Touch | Reduced motion | Risk | Status |
|---|---|---|---|---|---|---|---|---|
| Nav and button hover | Hover, focus | 140–240 ms | Colour, background | Yes | No hover dependency | Near-instant | Low | Unchanged |
| Mega menu | Hover, focus, click | `--dur-3`, `--ease-out` | Opacity, transform | Yes | Opens by tap, checked | Near-instant | Low | Unchanged |
| Mobile menu | Tap | Per spec | Transform | ≤ 1100 | Yes | Near-instant | Low | Unchanged |
| Card hover | Hover | `--dur-3` | Transform, shadow | Yes | None needed | Near-instant | Low | Unchanged |
| Hero line reveal | Load | 1.1 s, stagger 120 ms | Transform | Yes | Yes | Shows at once | Low | Unchanged |
| Hero fade | Load | 1.2 s, 500 ms delay | Opacity | Yes | Yes | Shows at once | LCP on Home, see [CWV](../performance/core-web-vitals.md) | Unchanged |
| Horizon drift, floating widgets | Always | 18 s, 10–12 s | Transform | Yes | Yes | Static | Low | Unchanged |
| Pinned hero dim | Scroll | 0–900 px | Opacity, scale, blur | Yes | Yes | Off | Medium | Unchanged |
| Reveal, scale on enter | Scroll | `view()` | Transform | Yes | Yes | Off, content visible | Low | Unchanged |
| Story and process rails | Scroll | `view()` | Scale | Yes | Yes | Off | Low | Unchanged |
| Story step focus | Scroll | `view()`, cover 10–90% | **Was shadow and border. Now opacity of a glow layer** | Yes | Yes | Off | Was paint-heavy on glass | **Optimised** |
| Status pulse | Always | 2 s | **Was box-shadow. Now scale and opacity** | Yes | Yes | Static | Was continuous paint | **Optimised** |
| Scroll cue | Always | 2.2 s | **Was `top`. Now transform** | Yes | Yes | Static | Was layout | **Optimised** |
| Marquee | Always | 40–48 s | Transform | Yes | Yes | Static | Low | Unchanged |
| Logo blob, sheen | Always | 10 s, 6 s | Transform, radius, background position | Yes | Yes | **Now off.** Sheen kept looping before | Small area | **Fixed** |
| Tabs, accordions, filters | Click, keys | `--dur-2` | Opacity, height | Yes | Yes | Near-instant | Low | Unchanged |

No animation library is in use, and none was added. There are no scroll listeners, and no `IntersectionObserver`: scroll effects are CSS timelines behind `@supports`.
