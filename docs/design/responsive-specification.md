# Responsive specification

Derived from `simplex.css`, the boards' `<helmet>` rules and the frame geometry in [artboard-inventory.md](artboard-inventory.md).

## Evidence levels

Every width falls into one of three levels. Do not present one as another.

| Level | Meaning | Example |
|---|---|---|
| **BOARDED** | A board exists at this width for this route | `/contact` at 768 |
| **CSS-DERIVED** | No board, but the approved stylesheet fully determines the layout | `/about` at 1024 |
| **ADAPTATION** | Neither covers it, so this document proposes a rule. Needs owner sign-off | Hero height on short laptops |

CSS-DERIVED has real authority here because mobile and tablet boards are the same source rendered narrower. A 1024 px layout comes from the same rules that produced the 768 and 1440 boards. It has not, however, been reviewed by eye at that width.

## Board coverage

| Boarded widths | Routes |
|---|---|
| 1440, 768, 390 | `/`, `/work`, `/contact` |
| 1440, 390 | `/agent`, `/services`, `/packages`, `/industries`, `/how-we-work`, `/about`, `/technologies`, `/careers`, `/careers/[slug]`, `/insights`, `/insights/[slug]`, `/contact/thank-you`, `/404` |
| 1440, 390 (one instance) | `/services/ai-engineering`, `/industries/healthcare`, `/work/ledgerline`, `/privacy-policy` |
| 1440 only | The other 11 service pages, 5 industry pages, `/work/carepath`, `/work/routewise`, `/cookie-policy`, `/terms` |

The 390 boards stand in for their template, because the source is the same. Two exceptions carry real risk: **case layouts B and C have no mobile board at all** and contain different markup from A (GAP-V02), and service pages use seven hero visuals, of which only `graph` has been seen at 390.

There are no boards at 320, 1024, 1280, 1920 or 2560 (GAP-V03).

## Breakpoints

Use the design's own values. They are **container queries on `.sx`**, not media queries, and the page root spans the viewport, so in production they track viewport width minus any classic scrollbar.

| Container width | Name | What changes |
|---|---|---|
| > 1280 | Desktop | Gutter 64, section 152, full nav |
| ≤ 1280 | Laptop | Gutter 48, nav links padding 11 px and 14.5 px text |
| ≤ 1100 | Tablet landscape | **Burger replaces nav**, `.split` and `.split-wide` stack, sticky columns release, footer 3 columns, `.grid-4` 2 columns, `.g-bento` 2 columns, `.eco` 2 columns, floating widgets removed, Agent and Article local rules |
| ≤ 1000 | Content break | `.comp-grid` 2 columns, `.gx-head` stacks, `.tl` 2 columns, inline-grid `.wrap` stacks, Contact, Job, Case and Legal grids stack |
| ≤ 860 | Tablet portrait | Gutter 32, section 104, `.grid-3` 2 columns, `.split-even` stacks, process and story go vertical, `.stack-card` released, mega menu hidden, hero beams removed, bento single column, panel-split stacks |
| ≤ 760 | Industries only | Local industry-row rule |
| ≤ 600 | Mobile | Gutter 20, section 88, all grids single column, nav 64 px tall with SX mark, buttons 52 px, `.cmp` scrolls, `.ba` stacks, footer 2 columns |

Tailwind: define `@sx-*` container variants with these same values, and do not add media-query breakpoints. Mixing the two systems would create a band of widths where they disagree.

**Do not use Tailwind's default `sm`, `md`, `lg` for layout.**

## QA viewport behaviour

These are test widths, not breakpoints. Container width assumes no classic scrollbar.

| Width | Device class | Band | Evidence | Notes |
|---|---|---|---|---|
| 320 | Small phone | ≤ 600 | CSS-DERIVED | Grid minimums are `min(N, 100%)`. Text floors are the risk |
| 360 | Android | ≤ 600 | CSS-DERIVED | |
| 375 | iPhone | ≤ 600 | CSS-DERIVED | |
| 390 | iPhone | ≤ 600 | **BOARDED** | Primary mobile reference |
| 412 | Android | ≤ 600 | CSS-DERIVED | |
| 430 | Large iPhone | ≤ 600 | CSS-DERIVED | |
| 768 | Tablet portrait | ≤ 860 | **BOARDED** on 3 routes | |
| 820 | iPad Air | ≤ 860 | CSS-DERIVED | |
| 1024 | iPad landscape | ≤ 1100 | CSS-DERIVED | Burger menu and stacked splits. The ≤ 1000 rules do not apply yet |
| 1280 | Small laptop | ≤ 1280 | CSS-DERIVED | Longest nav squeeze |
| 1366 | Windows laptop | > 1280 | CSS-DERIVED | Height 768: see below |
| 1440 | MacBook Air | > 1280 | **BOARDED** | Primary desktop reference |
| 1512 | MacBook Pro 14 | > 1280 | CSS-DERIVED | Display type reaches its cap at 1524 |
| 1728 | MacBook Pro 16 | > 1280 | CSS-DERIVED | Content stays 1320, margins grow |
| 1920 | Desktop | > 1280 | CSS-DERIVED | Tokens name this `wide`, but no rule uses it |
| 2560 | Large desktop | > 1280 | CSS-DERIVED | Nav caps at 1840, footer wordmark caps at 420 px |

### MacBook and laptop widths

No rule targets a model, and none should. Between 1281 and 1728 the layout is the same. Only type and the side margins change, and everything has hit its cap by 1524 except the footer wordmark, at 1750.

**The real laptop risk is height.** Nothing in the design uses viewport units. The Home hero is `min-height: 960px` with `padding: 250px 0 340px`, and it is sticky. On a 1366 × 768 or 1440 × 900 screen, the hero's lower part extends below the fold while pinned, and the first statement card rises over it. That is the behaviour the CSS specifies, but no board shows it at a short viewport. **Check at 1366 × 768, 1440 × 900 and 1512 × 982 in SF-143** (GAP-V06). Do not add `vh` units pre-emptively.

## Layout tokens

| Token | > 1280 | ≤ 1280 | ≤ 860 | ≤ 600 |
|---|---|---|---|---|
| `--gutter` | 64 | 48 | 32 | 20 |
| `--section` | 152 | 152 | 104 | 88 |
| `--container` | 1320 | 1320 | 1320 | 1320 |
| `--container-narrow` | 860 | 860 | 860 | 860 |

`.wrap` max-width is `container + gutter × 2`, so content is centred from about 1448 px up. Background grounds stay full-bleed at every width.

Keep the design's `.sx *` selector when porting these values: a container query cannot style its own container, so setting them on `.sx` alone has no effect.

## Typography

All display type is fluid on `cqi` with floors and caps. Below the floor width, and above the cap width, size is constant.

| Style | Rule | Floor reached at | Cap reached at |
|---|---|---|---|
| `.t-display` | `clamp(54px, 8.4cqi, 128px)` | ≤ 643 | ≥ 1524 |
| `.t-h1` | `clamp(40px, 5.6cqi, 84px)` | ≤ 714 | ≥ 1500 |
| `.t-h2` | `clamp(32px, 4.2cqi, 60px)` | ≤ 762 | ≥ 1429 |
| `.t-h3` | `clamp(26px, 2.6cqi, 38px)` | ≤ 1000 | ≥ 1462 |
| `.t-h4` | `clamp(20px, 1.7cqi, 24px)` | ≤ 1176 | ≥ 1412 |
| `.t-lead` | `clamp(18px, 1.55cqi, 22px)` | ≤ 1161 | ≥ 1419 |
| `.footer-mega` | `clamp(120px, 24cqi, 420px)` | ≤ 500 | ≥ 1750 |

Fixed: `.t-h5` 18, `.t-body` 16, `.t-small` 14, `.t-xs` 12.5, `.t-mono` 12. Under 600, `.prose` text rises to 17 and `.prose h2` to 26.

At the design's 1440 reference: display 121, H1 81, H2 60, H3 37.4, H4 24, lead 22.

## Component behaviour

| Topic | > 1100 | ≤ 1100 | ≤ 860 | ≤ 600 |
|---|---|---|---|---|
| Navigation | Full links, mega on hover and focus | Burger, mobile menu | Same; `.mega` removed | 64 px bar, SX mark replaces wordmark |
| Footer | Brand + 4 columns | 3 columns, brand full width | Same | 2 columns, gap 36/20 |
| Grids | As authored | `.grid-4` → 2 | `.grid-3` → 2, `.bento` → 1 | All → 1 |
| Stacked cards (Home) | Sticky at `130 + 18i` px | Same | Normal flow | Normal flow, no min-height |
| Splits | Side by side | `.split` stacks; `.split-even` stays | All stack | Same |
| Scroll story | Column pins, rail fills | Pinning releases | Vertical | Compact |
| Process | Horizontal | Same | Vertical with rail at left | Same |
| Tabs | Inline | Scroll horizontally | Same | Radius 16 |
| Filters | Wrap | Wrap | Wrap | Wrap |
| Comparison `.cmp` | Full | Full | Narrower columns (140 + 3) | Scrolls, min-width 560 |
| Before/after `.ba` | Slider | Slider | Slider | **Stacked panes, slider removed** |
| Scheduler | Two columns | Two columns | Stacked (≤ 1000) | 2-column slots, compact days |
| Contact form | 5:7 grid | Stacked at ≤ 1000 | `.grid-2` kept | Single column |
| Article | Share rail, body, TOC | Share rail in a row, TOC removed | Same | Same |
| Industry cards | Details on hover | Same | Same | **Details always visible** |
| Device frames | Full | `.win-body` narrower | Phones 190 px | Phones 112 px, overlap −20 px, `.win-side` hidden |
| Decorative widgets | Floating | **Removed** | Removed | Removed |

### Section reordering

No section changes order at any width. `.eco-core` is the only reorder, moving first at ≤ 1100.

### Tables on narrow screens

`.cmp` scrolls in its own box at ≤ 600. `.cmp-row` tables with 4 data columns also scroll at ≤ 860 (min-width 640). The Services matrix uses its own `overflow-x`. **Add `tabindex="0"`, `role="region"` and a label to each scroll box** so keyboard users can reach it. The design omits this.

### Touch

`hover` reveals are handled only at ≤ 600 by container width, not by input type. A 1024 px touch tablet therefore has hover-only industry card details. **Adaptation:** also show them under `@media (hover: none)`. Targets are 44 px or more by design; the proto bar's 32 px buttons are not shipped.

### Backgrounds and images

Gradient grounds are percentage-based and scale freely. `.photo` and `.viz` use `center / cover` under overlays, so no art-directed crops exist or are needed. Ground drift is capped and cannot create overflow, because `.bg-horizon::before` uses `left: -10%; right: -10%` with `overflow-x: clip` on `.sx`.

### Forms

Inputs are 56 px tall, 16 px text, which prevents iOS zoom on focus. `.grid-2` field pairs collapse at ≤ 600. Submit rows use `.stack-sm`, stacking at ≤ 600.

### Safe areas

The handoff requires `env(safe-area-inset-top)` on the sticky header slot, but **no rule exists in the CSS** (GAP-V05).

**Adaptation:** add safe-area padding to `.header-slot` top and sides, the open mobile menu's bottom, `.footer-base`, and any fixed cookie banner, plus `viewport-fit=cover` in the viewport metadata. Test in iOS landscape.

### Mobile menu height

**Adaptation.** The design shows the open menu at 390 × 932. Short phones need the panel to scroll internally, with body scroll locked. The board does not specify either, or Escape-to-close and focus return (GAP-R02).

## Handoff claims the CSS does not back

| Handoff board says | CSS actually does | Follow |
|---|---|---|
| Backdrop blur is capped on mobile | No such rule | Add as an adaptation in SF-154, driven by device testing |
| Display floor 54, **H1 floor 44** | H1 floor is **40** | CSS, also matches tokens |
| Decorative hero chips removed below 860 | `.hero-chip` exists but no page uses it. Beams go at 860; `.float-w` widgets go at 1100 | CSS |
| Uses `env(safe-area-inset-top)` | Instruction only, not implemented | Add it |
| Reveal rises 36 px and fades | `sx-rise` is 48 px with no fade | CSS: see [motion spec](motion-interaction-specification.md) |

## Adaptations needing approval

These are proposals, not approved design.

| Adaptation | Why | Ticket |
|---|---|---|
| Safe-area padding and `viewport-fit=cover` | Handoff requires it, CSS lacks it | SF-142 |
| Mobile menu scroll, lock, Escape, focus return | Not on the board | SF-142 |
| Industry details visible under `hover: none` | Touch tablets above 600 px have no hover | SF-143 |
| Hero behaviour on short laptops, only if testing shows a problem | No board at that height | SF-143 |
| Case layouts B and C at mobile widths | No mobile board | SF-148 |
| Blur cap on low-end devices, only if testing shows a need | Handoff claims it, CSS lacks it | SF-154 |
| `backdrop-filter` fallback | CSS lacks it | SF-142 |
| Focusable scroll regions on tables | Keyboard access | SF-142 |
| 404 without search, until header and footer arrive | Search has no backend | SF-152 |
| All Russian layouts | No Russian design | Page tickets |

## Russian

Longer text interacts with every rule above. See [i18n.md](../architecture/i18n.md). All Russian layouts are ADAPTATION level by definition.
