# Design system specification

Extracted from `project/simplex.css`, `project/uikit/simplex-tokens.json` and the Foundations boards. **Where they conflict, the final cascade value in `simplex.css` wins**, because that is what the approved boards actually render.

Do not install or implement anything from this document in SF-140. SF-142 owns the port. See [system-design.md](../architecture/system-design.md) for how.

## Token completeness

| Area | Status | Notes |
|---|---|---|
| Colour | Complete | Includes semantic and on-dark scales |
| Gradients | Complete | Mesh grounds are CSS only |
| Type scale | Complete | Fluid on `cqi` |
| Spacing | Complete | 11 steps, 4 pt base |
| Radius | Complete | |
| Shadow and blur | Complete | Two scales coexist, see below |
| Motion | Complete | [motion spec](motion-interaction-specification.md) |
| Breakpoints | **Incomplete in tokens** | The file omits 1000 and the local 760. CSS is authoritative |
| Materials | Complete | |
| Dark mode | Not designed | Dark and light sections alternate by design. There is no theme switch, and `prefers-color-scheme` is unused |
| Print | Not designed | No print styles exist. Low priority, relevant to legal pages |

Version labels disagree (GAP-D01): tokens say 1.4.0, the stylesheet header says v1.0, `Main` says v1.0, the UI kit title says v1.1 and its README runs to v1.9. The file contents match v1.9. Treat this design as **v1.9, published version `1793869596-167d`.**

## Typography

**Families:** Geist (sans, 300–700 variable) and Geist Mono (400, 500), both with Cyrillic. CSS fallback chain: `Geist, Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif`. Self-hosted through `next/font`.

Root features: `font-feature-settings: "ss01", "cv11"`, antialiased, `text-rendering: optimizeLegibility`.

| Style | Size | Line | Tracking | Weight | Colour | Extra |
|---|---|---|---|---|---|---|
| `.t-display` | `clamp(54px, 8.4cqi, 128px)` | .94 | −.052em | 600 | Inherit | `text-wrap: balance` |
| `.t-h1` | `clamp(40px, 5.6cqi, 84px)` | .98 | −.045em | 600 | Inherit | Balance |
| `.t-h2` | `clamp(32px, 4.2cqi, 60px)` | 1.02 | −.04em | 600 | Inherit | Balance |
| `.t-h3` | `clamp(26px, 2.6cqi, 38px)` | 1.1 | −.03em | 600 | Inherit | Balance |
| `.t-h4` | `clamp(20px, 1.7cqi, 24px)` | 1.22 | −.02em | 600 | Inherit | |
| `.t-h5` | 18px | 1.3 | −.012em | 600 | Inherit | |
| `.t-lead` | `clamp(18px, 1.55cqi, 22px)` | 1.5 | −.012em | Normal | `--text-2` | `text-wrap: pretty` |
| `.t-body` | 16px | 1.62 | Normal | Normal | `--text-2` | Pretty |
| `.t-small` | 14px | 1.55 | Normal | Normal | `--text-3` | |
| `.t-xs` | 12.5px | 1.5 | Normal | Normal | `--text-3` | |
| `.t-mono` | 12px, Geist Mono | Normal | .08em | 500 | Inherit | Uppercase |
| `.eyebrow` | 12px, Geist Mono | Normal | .1em | 500 | `--text-2` | Uppercase, cut parallelogram marker |

**Text gradient:** `.t-grad` is `linear-gradient(90deg, #2F57F5, #2B3F9E 52%, #0C2A45)` on light, and `linear-gradient(90deg, #8FB2FF, #D6E2EE)` on dark. Use at 24 px or larger only, per the handoff.

## Colour

| Group | Tokens |
|---|---|
| Ink | `--ink #070B2B`, `--ink-2 #0C123C`, `--ink-3 #18205A` |
| Light grounds | `--white #FFFFFF`, `--paper #F4F6FB` |
| Text on light | `--text #070B2B`, `--text-2 #464E6E` (8.1:1), `--text-3 #5F6786` (5.6:1) |
| Text on dark | `--on-dark #FFFFFF`, `--on-dark-2 #BAC0DC` (10.6:1), `--on-dark-3 #8D94BA` (6.2:1) |
| Primary accent | `--cobalt #2F57F5`, `--signal #2F57F5`, `--azure #3B8CFF`, `--signal-on-dark #8FB2FF` |
| Secondary: steel blue | `950 #08192B`, `base #0C2A45`, `700 #1E4268`, `500 #3F6A93`, `300 #8FA7C0`, `100 #E3EAF2` |
| Steel on ink | `--steel #9DB4CC` (9:1), `--slate #5A7896` |
| Status | `--success #128A5C`, `--error #C2364B`, `--warning #A46100` |
| Lines | `--line rgba(7,11,43,.10)`, `--line-2 rgba(7,11,43,.18)`, `--line-dark rgba(255,255,255,.12)`, `--line-dark-2 rgba(255,255,255,.22)` |
| Demo label | `#7A4A00` on `#FFF1D6`, border `#F1D49A` (`.tag-demo`) |

Contrast ratios are the source's own annotations, not independently measured. Check them in manual review.

**Legacy aliases:** `--graphite-*` resolves to steel blue, and `--mint` and `--teal` to steel and slate. Keep only what the ported markup uses, then remove the aliases. Do not use the words "mint" or "teal" for anything new: the palette retired them in v1.2.

## Gradients and grounds

| Class | Definition (summary) | Tone |
|---|---|---|
| `.bg-horizon` | White, with a `::before` of 4 radial fields rising from the bottom at 80% height | Light hero |
| `.bg-ink` | `--ink`, with right-edge radial glows | Dark |
| `.bg-ink-left` | The same, mirrored | Dark |
| `.bg-mist` | `--paper` with soft corner glows | Light |
| `.bg-spectrum` | `linear-gradient(100deg, #E3EAF2 0%, #C3D1E0 30%, #8DA4F7 68%, #2F57F5 100%)` with crossed white beams | Accent |
| `.bg-cta` | `#060A26` → `#070B2B` → `#0A1240`, 56 px grid mask, cobalt glow, rising chart line | Closing CTA |
| `.mesh-light` | 3 radial fields on `#EEF1F6` | Glass ground |
| `.mesh-graphite` | 3 radial fields on `#08192B` | Glass ground |
| `.photo-*` | Image with `linear-gradient(170deg, rgba(7,11,43,.35), rgba(7,11,43,.86))` | Dark |
| `.viz-*` | Image, gradients and radial glow per sector | Dark, `.viz-light` light |
| `.paper` | `--paper` | Light |

Button sweep: `linear-gradient(100deg, #1E4268, #2F57F5 62%, #3B8CFF)`.

The design alternates light and dark sections to pace the scroll. **Preserve the section order and grounds from [artboard-inventory.md](artboard-inventory.md).**

## Layout

| Token | Value |
|---|---|
| Spacing | `--s-1 4`, `--s-2 8`, `--s-3 12`, `--s-4 16`, `--s-5 24`, `--s-6 32`, `--s-7 48`, `--s-8 64`, `--s-9 96`, `--s-10 128`, `--s-11 160` |
| Gaps | `.gap-1` to `.gap-9`. `--gap` overrides grid gaps |
| Containers | `--container 1320`, `--container-narrow 860`, nav max 1840 |
| Gutter | 64 → 48 → 32 → 20 ([responsive](responsive-specification.md)) |
| Section | 152 → 104 → 88, `.section-sm` is 60% of that |

Grids: `.grid-2/3/4/12`, `.grid-auto` with `--min`, `.split` (6:6), `.split-wide` (4:8), `.split-even` (1:1), `.bento`, `.g-bento`.

## Shape and depth

| Token | Value |
|---|---|
| Radius | `--r-xs 8`, `--r-sm 12`, `--r-md 18`, `--r-lg 26`, `--r-xl 36`, widget 28, button 16, `--r-pill 999` |
| Shadow 1 | `0 1px 2px rgba(7,11,43,.06), 0 8px 24px -14px rgba(7,11,43,.22)` |
| Shadow 2 | `0 2px 6px rgba(7,11,43,.05), 0 30px 70px -36px rgba(7,11,43,.42)` |
| Shadow 3 | `0 50px 120px -50px rgba(7,11,43,.55)` |
| Widget | `inset 0 1px 0 #fff, inset 0 -20px 40px -30px rgba(255,255,255,.9), 0 24px 60px -30px rgba(7,11,43,.38)` |
| Blur, v1.2 scale | `--blur-xs 8`, `--blur-s 16`, `--blur-m 24`, `--blur-l 40`, `--blur-xl 64` |
| Blur, v1.0 scale | `--blur-1 12`, `--blur-2 24`, `--blur-3 40`. Still referenced, so port it |

## Materials

Final cascade values:

| Material | Background | Backdrop | Border or rim |
|---|---|---|---|
| `.glass` | `linear-gradient(180deg, rgba(255,255,255,.62), rgba(255,255,255,.36))` | `blur(36px) saturate(190%)` | `rgba(255,255,255,.9)` with layered inset highlights |
| `.glass-dark` | `linear-gradient(160deg, rgba(255,255,255,.12), rgba(255,255,255,.03))` | `blur(32px) saturate(180%)` | `rgba(255,255,255,.13)` |
| `.glass-frost` | `linear-gradient(180deg, rgba(244,246,252,.78), rgba(226,231,244,.55))` | `blur(48px) saturate(180%)` | `rgba(255,255,255,.75)`, shadow 3 |
| `.widget` | `linear-gradient(180deg, rgba(255,255,255,.66), rgba(255,255,255,.38))` | `blur(40px) saturate(200%)` | Radius 28, specular `::after` |
| `.widget-dark` | `linear-gradient(170deg, rgba(255,255,255,.16), rgba(255,255,255,.05))` | Inherited | `rgba(255,255,255,.16)` |
| `.lg` (liquid glass) | `linear-gradient(150deg, rgba(255,255,255,.58), rgba(255,255,255,.22))` | `blur(24px) saturate(210%) brightness(1.04)` | 1 px gradient rim through `::before` mask |
| `.lg-dark` | `linear-gradient(150deg, rgba(255,255,255,.14), rgba(255,255,255,.04))` | `blur(24px) saturate(180%)` | Tints: `.lg-graphite`, `.lg-cobalt` |

Rules from the kit: place glass only over a coloured ground, never white. Do not combine `.grain` and `.sheen` on one element, because both use `::after`. Glass needs a solid fallback under `@supports not (backdrop-filter: blur(1px))`, which the design lacks: an adaptation for SF-142.

**Header:** solid `#070B2B`, not translucent, floating with radius 24, height 76. The base `.nav` rule has translucency, and line 686 removes it. The Audit board's "floating translucent ink bar" is out of date.

## Controls

| Control | Spec |
|---|---|
| Button | Height 52 (`--bh`), padding 0 24, radius 16, 15.5 px, weight 500. `.btn-sm` 40, radius 12, 14 px. `.btn-lg` 60, padding 0 30, radius 18, 17 px; 56 and 16 px at ≤ 600 |
| Variants | `primary` (ink, cobalt sweep; white inside `.bg-cta`), `light`, `ghost`, `glass`. `graphite` is documented in the kit but used on no page |
| Input, select, textarea | Height 56, padding 0 18, radius 14, 16 px, border `--line-2`, translucent white |
| Field states | `.is-error` border `--error` and 4 px ring; `.is-valid` border `--success`; `:disabled` |
| Focus | 2 px outline, offset 3, `--signal` on light, `--signal-on-dark` on dark |
| Touch | 44 px minimum |

## Logo rules

Use only the full wordmark or the SX tile. Never the X alone, never uppercase, never re-spaced, rotated or given a gradient. Clearspace .22 × X height. Minimum 16 px. Wordmark ratio 3.75:1. Under 600 px the header swaps to the SX tile. Current form: the **v1.8 solid navy tile**, despite `pebble` in file names, and despite the README's earlier "Si mark" entries being superseded.

## Accessibility baseline

From the handoff, to be verified rather than assumed: WCAG 2.2 AA, text contrast 4.5:1, visible focus, 44 px targets, `aria-pressed` on filters, `role=tab` on tabs, `aria-live` result counts, native `details`, decorative SVG hidden, and the logo exposed once as "SimpleX".

Known shortfalls: [manual-qa.md](../qa/manual-qa.md) and [design-gap-register.md](design-gap-register.md).

## Interaction states

Per-component state coverage is in [component-inventory.md](component-inventory.md).

## Dead code

Before porting, remove rules no page uses (GAP-D02). The `UiKit*` boards document 90-odd classes that appear on no route, such as `.g-cmd`, `.g-dock` and `.g-sheet`. The stylesheet comment header also still describes `.sx` as v1.0, and superseded `.si-glyph` and pebble blob rules remain. **Do not build kit-only components.**
