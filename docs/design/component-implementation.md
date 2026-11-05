# Component implementation

What SF-142 actually built. The planning list, with usage per board, is [component-inventory.md](component-inventory.md). Values are in [design-system-specification.md](design-system-specification.md).

## How styling works

| File | Holds | Rule |
|---|---|---|
| `src/styles/tokens.css` | The 87 source tokens, plus 4 gradients | The only place token values live |
| `src/styles/simplex.css` | The design's stylesheet, in the `components` layer | Generated from source. Do not hand-edit |
| `src/styles/components.css` | Rules from board `<helmet>`s, plus adaptations | Each adaptation is in the [gap register](design-gap-register.md) |
| `src/styles/globals.css` | Tailwind setup and token mapping | Default palette, numeric spacing and breakpoints are removed |
| `src/styles/system-pages.css` | 404 and error page rules | From the NotFound board |

Design classes do the visual work, and components put them on the right semantic elements. Use Tailwind utilities only for layout glue. **A Tailwind utility with the same name as a design class silently beats it**, as happened with `gap-5` (20 px against the design's 24 px), so `pnpm check:bundle` now fails on any collision.

## API conventions

- Server Components by default. Only `tabs.tsx`, `mobile-menu.tsx`, `mega-menu-item.tsx`, `nav-link.tsx` and `locale-switcher.tsx` carry `"use client"`.
- `controls.tsx` and `form.tsx` have no directive, and are usable from client parents that pass handlers.
- Native elements first: `<button>` for actions, links for navigation, `<details>` for accordions.
- All text arrives as props. Primitives hold no strings and no route knowledge, apart from `RouteLink`.
- **Links to site routes go through `RouteLink`, `ArrowLink`, `TextLink` or `LinkButton`.** Until a route is listed in `implementedRoutes` in `src/config/routes.ts`, they render as disabled links with identical geometry. Each page ticket adds its route, and every link to it turns on.

## Components

All exports are under `src/components/`. Evidence, historical at `ddc9e8e`: **P** means numeric style parity with the source, and **B** means behaviour tests. Those tests no longer exist.

| Component | Export | Source board | Variants and states | Responsive | Accessibility | Evidence |
|---|---|---|---|---|---|---|
| `Lockup`, `Wordmark`, `SxMark`, `LogoX` | `ui/logo` | Logo | Lockup: default, on-dark, steel, live. Mark: on-dark, steel, cobalt, ink, light, mono, flat, live | Header swaps to the tile at ≤ 600 | Named once, or hidden inside a named link | P |
| `Icon` | `ui/icon` | UiKitGlass | 29 glyphs | Sized by `--icon` | Always decorative | P |
| `Button` | `ui/button` | Components | primary, light, ghost, glass; sm, md, lg; disabled, loading | 52 px, large 56 at ≤ 600 | `aria-busy`, native disabled | P, B |
| `LinkButton` | `ui/button` | Components | As `Button`, plus route-pending | As `Button` | Disabled link when pending | P |
| `IconButton` | `ui/button` | Article | Hover | 44 px | Required label | P |
| `RouteLink`, `ArrowLink`, `TextLink`, `ExternalLink` | `ui/links` | Components | Route-pending. External adds `noopener noreferrer` | Fixed | Disabled link when pending | P |
| `Container`, `Section`, `Stack`, `Grid`, `Split`, `VisuallyHidden` | `ui/layout` | System | Section grounds: white, paper, ink, mist, horizon, spectrum, cta, mesh-light, mesh-graphite | Design breakpoints | Semantic section | P |
| `Surface`, `CardArrow`, `SectorGround` | `ui/surface` | UiKitGlass, Components | glass, glass-dark, glass-frost, solid, paper-card, widget, widget-dark, liquid, liquid-dark, liquid-graphite, liquid-cobalt; hover | Fluid | Text contrast depends on the ground | P |
| `Heading`, `MaskedHeading`, `Eyebrow`, `GradientText` | `ui/typography` | System | display, h1–h5 | `cqi` fluid | Level is independent of look. Mask lines keep a space | P |
| `Tag`, `Badge`, `DemoTag`, `Spinner`, `Skeleton`, `Alert` | `ui/feedback` | Components | Alert: info, success, error | Fluid | Alert roles | P |
| `TextField`, `TextArea`, `Select`, `Checkbox`, `FieldError`, `FormError`, `SearchField` | `ui/form` | Components | Default, focus, error, valid, disabled | Fluid | Label, `aria-invalid`, `aria-describedby` | P, B |
| `Accordion` | `ui/controls` | Components | Open, closed | Larger at ≤ 600 | Native `details` | P, B |
| `Breadcrumbs` | `ui/controls` | Components | Route-pending | Wraps | `aria-current` | P |
| `FilterButton`, `ToggleChip`, `Switch` | `ui/controls` | Components, LegalPage | Pressed, on, disabled | Wrap | `aria-pressed`, `role=switch` | P, B |
| `ComparisonTable`, `ComparisonRow` | `ui/controls` | Packages, Services | | Scrolls at ≤ 600 | Focusable, labelled region | P |
| `Tabs` | `ui/tabs` | Components | Selected, dark | Scrolls | Arrow, Home and End keys | P, B |
| `SiteLayout`, `SiteHeader`, `MegaMenuItem`, `MobileMenu`, `NavLink` | `layout/*` | Nav | Active, open | See below | See below | P, B |
| `SiteFooter` | `layout/site-footer` | Footer | One design variant | 5 → 3 → 2 columns | `contentinfo` landmark | P |
| `NotFoundView` | `system/not-found-view` | NotFound | | Stacks at ≤ 1100 | Works with no JavaScript | E2E |

### Deliberately not built

- **Radio:** on no page, only on a kit board.
- **Modals, command palette, sheet, dock, toasts as components:** kit only.
- **Page patterns** such as `CtaBand`, `ComplianceGrid`, `Timeline`, `ProcessRail`, `ScrollStory`, `StackedCards`, `IndustryCard`, `ServiceCard`, `ArticleCard`, `PackageCard`, `ModelCard`, `MockUI`, `ArchitectureDiagram` and device frames. **All their CSS is ported and ready.** The first page ticket to use one writes the markup, and promotes it to a shared component on real reuse, per [component-boundaries.md](../architecture/component-boundaries.md).

## Header and footer

**The design has one header and one footer.** All 20 page compositions import the same `Nav` and `Footer`, so there are no per-section variants. Only the active item changes, and `/technologies` and `/contact` highlight nothing.

| Behaviour | Width | Evidence level |
|---|---|---|
| Sticky floating bar, 76 px, solid `#070B2B` | All | BOARDED |
| Compact link padding | ≤ 1280 | CSS-DERIVED |
| Burger replaces links, mega menus hidden | ≤ 1100 | BOARDED at 768 and 390 |
| 64 px bar, SX tile replaces lockup | ≤ 600 | BOARDED at 390 |
| Footer 5 → 3 → 2 columns | ≤ 1100, ≤ 600 | BOARDED at 390 and 768 |

Mobile menu behaviour beyond the board is an adaptation: focus moves in, Escape closes and returns focus, the rest of the page is `inert` with its scroll locked, and it also closes on an outside tap, route change or widening. No-JavaScript limitation: the burger needs JavaScript. The footer holds the same links.

## Validation

Automated tests and the component gallery were removed by owner decision. See [manual-qa.md](../qa/manual-qa.md). For the record, at SF-142 (`ddc9e8e`) the components passed numeric comparison with the source on Chromium, Firefox and WebKit locally, but CI failed on Linux.

## Build trap: prefixed blur

The source declares `backdrop-filter` and then `-webkit-backdrop-filter`. The CSS minifier keeps only the last of such a pair, which leaves Chromium with no blur at all. The port removes the prefixed copy, and the minifier regenerates it for Safari. Check glass by eye after changing the stylesheet.
