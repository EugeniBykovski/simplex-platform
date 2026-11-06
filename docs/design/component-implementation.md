# Component implementation

What SF-142 actually built. The planning list, with usage per board, is [component-inventory.md](component-inventory.md). Values are in [design-system-specification.md](design-system-specification.md).

## How styling works

| File | Holds | Rule |
|---|---|---|
| `src/styles/tokens.css` | The 87 source tokens, plus 4 gradients | The only place token values live |
| `src/styles/simplex.css` | The design's stylesheet, in the `components` layer | Generated from source. Do not hand-edit |
| `src/styles/components.css` | Rules from board `<helmet>`s, plus adaptations | Each adaptation is in the [gap register](design-gap-register.md) |
| `src/styles/globals.css` | Tailwind setup and token mapping | Default palette, numeric spacing and breakpoints are removed |

Design classes provide shared visual effects, and Tailwind classes provide everything specific to an element. **A Tailwind utility with the same name as a design class silently beats it**, as happened with `gap-5` (20 px against the design's 24 px), so `pnpm check:bundle` now fails on any collision.

## Styling rule: Tailwind in `className`

Component-level static styling goes directly on the element as Tailwind classes, using theme tokens where one exists and exact arbitrary values otherwise. **ESLint rejects `style` attributes under `src/`.**

| Need | Do this |
|---|---|
| Zero | `p-[0]`, `left-[0]`, `min-h-[0]`. **`p-0`, `left-0` and `min-h-0` generate nothing**, because the numeric scale is removed, and fail silently |
| Exact design value | `min-h-[380px]`, `p-[clamp(28px,5cqi,72px)]`, `[background:linear-gradient(...)]` |
| Design token | `text-text-3`, `rounded-lg`, `font-mono` |
| A CSS variable the design reads | `[--gap:16px]`, `[--p:100]`, `[--m:46px]` |
| Responsive change | `sx-1100:hidden`: container variants, never viewport breakpoints |
| Value by index or state | A typed map of complete class names, such as `stackIndex`. Never build a class name from parts |
| Logo size | `text-[25px]` on `Wordmark` and `Lockup`, `[--m:46px]` on `SxMark` |

There are **no runtime-dynamic exceptions** today.

Inline values beat everything except `!important`, and so do utilities over the `components` layer, which is why the migration was safe. Use `[background:...]` rather than `bg-[...]` to mean the shorthand, because `bg-[gradient]` only sets `background-image`. `border-0` keeps a solid zero-width border, which looks the same as `border: 0`.

### CSS that stays global

| File | Why |
|---|---|
| `src/styles/tokens.css` | Design tokens |
| `src/styles/globals.css` | Tailwind setup, theme mapping, container variants |
| `src/styles/simplex.css` | **The design's own component classes** (`.btn`, `.glass`, `.bg-horizon`, `.mock`, and so on): pseudo-elements, masks, keyframes, scroll timelines and container rules. Kept so it stays faithful to the source, as the styling rule allows |
| `src/styles/components.css` | Switch pseudo-elements, pending state, safe areas, menu locking, blur fallbacks |
| `src/styles/fonts.ts` | Self-hosted Geist |

So design classes such as `glass` and `widget` still appear beside utilities: `className="widget float-w sx-1100:hidden absolute ..."`. Page layout and one-off values live in `className`.

## API conventions

- Server Components by default. Only `tabs.tsx`, `mobile-menu.tsx`, `mega-menu-item.tsx`, `nav-link.tsx` and `locale-switcher.tsx` carry `"use client"`.
- `home-technology-panel.tsx` and `home-estimator-panel.tsx` are the only other client components.
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
| `AnchorButton` | `ui/button` | Agent | As `Button` | As `Button` | Same-page link | P |
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

## Agent sections

Added in SF-144, under `src/components/sections/agent/`. Copy lives in `src/content/agent/`.

| Component | Boundary | Reuses |
|---|---|---|
| `agent-hero` | Server | `Breadcrumbs`, `Badge`, `DemoTag`, `LinkButton`, `AnchorButton` |
| `agent-stack` | Server, inside client `Tabs` | `Tabs`, which gained `listClassName` |
| `agent-how`, `agent-capabilities`, `agent-deployment`, `agent-cta` | Server | Design classes, `Icon`, `DemoTag`, `LinkButton` |
| `agent-embed` | Server | `DemoTag`, `LinkButton` |
| `agent-faq` | Server | `Accordion` |
| `agent-roi` | Server | `LinkButton` |
| `agent-roi-panel` | **Client**, for the sliders | Design classes |
| `illustrations` | Server | `SxMark`, `DemoTag`, `Icon`, design widget classes |

`LocaleSwitcher` moved to the header with short codes. `NavLink` gained `className`, so the mobile menu can show the current route.

## Services sections

Added in SF-145, under `src/components/sections/services/`. Copy lives in `src/content/services/`, with per-route structure in `catalog.ts`. All are server components.

| Component | Holds | Reuses |
|---|---|---|
| `services-overview` | Hero, groups, matrix, comparison, CTA | `Breadcrumbs`, `Surface`, `CardArrow`, `RouteLink`, `ComparisonTable`, `ComparisonRow`, `LinkButton` |
| `service-sections` | The nine detail sections | `Breadcrumbs`, `Accordion`, `ArrowLink`, `TextLink`, `SectorGround`, `DemoTag`, `AnchorButton`, `LinkButton` |
| `service-visuals` | Seven hero illustrations, chosen by slug | Design mock-up classes, `Icon` |

`serviceSlugs` in `config/routes.ts` is the single list of detail routes.

## Build packages sections

Added in SF-146, under `src/components/sections/packages/`. Copy lives in `src/content/packages/`, with locale-neutral package facts in `catalog.ts`.

| Component | Type | Holds | Reuses |
|---|---|---|---|
| `packages-sections` | Server | The eight sections, in order | `Breadcrumbs`, `Badge`, `DemoTag`, `Icon`, `SxMark`, `Accordion`, `ComparisonTable`, `ArrowLink`, `LinkButton`, `AnchorButton` |
| `packages-visuals` | Server | Phones, desktop window, admin laptop | Design device classes |
| `pod-tracks` | Client | Selection between the three tracks, for the card and the phones | `useTabs`, `TabList`, `TabPanels` |

`ui/tabs` now also exports `useTabs`, `TabList` and `TabPanels`, for layouts that separate tabs from panels. `Tabs` is built on them and behaves as before.

The comparison puts a real `table` inside `ComparisonTable`, using `table-row` and `table-cell` utilities over the `.cmp-row` design class. `ComparisonRow` remains for the Services comparison.

## Industries sections

Added in SF-147, under `src/components/sections/industries/`. Copy lives in `src/content/industries/`, with per-route structure in `catalog.ts`. All are server components. The only client code is the shared `Tabs`.

| Component | Holds | Reuses |
|---|---|---|
| `industries-overview` | Hero with `IndustryRow`, constants, compliance, CTA | `Breadcrumbs`, `Icon`, `RouteLink`, `CardArrow`, `LinkButton` |
| `industry-sections` | The eight detail sections | `Breadcrumbs`, `Tabs`, `Tag`, `DemoTag`, `ArrowLink`, `RouteLink`, `CardArrow`, `SectorGround`, `AnchorButton`, `LinkButton` |
| `industry-shared` | `ComplianceGrid`, used by both pages, and the gradient class map | Design `.comp-grid`, `.photo` classes |

`industrySlugs` in `config/routes.ts` is the single list of detail routes. `Breadcrumbs` gained `className`. `globals.css` gained the `sx-760` variant, for the source's 760 px row rule.

## Work sections

Added in SF-148, under `src/components/sections/work/`. Copy lives in `src/content/work/`, with structure in `catalog.ts`.

| Component | Type | Holds | Reuses |
|---|---|---|---|
| `work-overview` | Server | Hero, featured, project cards, CTA | `Breadcrumbs`, `Alert`, `Tag`, `DemoTag`, `SectorGround`, `RouteLink`, `ArrowLink`, `LinkButton` |
| `work-grid` | Client | Filters, count, empty state. Cards arrive server-rendered | `FilterButton`, `Button`, `SxMark` |
| `case-layouts` | Server | Layouts A, B and C, which differ in composition | `Tag`, `DemoTag`, `SectorGround`, `LinkButton` |
| `case-shared` | Server | Mock-ups, architecture, shift block, next project, CTA | `Breadcrumbs`, `RouteLink`, `CardArrow`, `LinkButton` |
| `before-after` | Client | The drag-to-compare position, set on the element at runtime | Design `.ba` classes |

`workSlugs` in `config/routes.ts` is the single list of case routes. The mobile menu's `MobileLink` marks the current page, and stays a disabled link for routes with no page.

## Company and Careers sections

Added in SF-149, under `src/components/sections/company/` and `careers/`. Copy lives in `src/content/company/` and `src/content/careers/`.

| Component | Type | Holds | Reuses |
|---|---|---|---|
| `about-sections` | Server | The About sections | `Breadcrumbs`, `Tag`, `Wordmark`, `LinkButton` |
| `how-we-work-sections` | Server | The How We Work sections, with the `.story` rail | `Breadcrumbs`, `Accordion`, `Tag`, `ArrowLink`, `LinkButton` |
| `technologies-sections` | Server | Hero, follows, radar section | `Breadcrumbs`, `LinkButton` |
| `tech-directory` | Client | Search, category filter, count, empty state | `SearchField`, `FilterButton`, `Button` |
| `tech-radar` | Client | Ring tabs, with lit dots | `useTabs`, `TabList`, `TabPanels` |
| `careers-sections` | Server | The Careers sections, with the empty state | `Breadcrumbs`, `AnchorButton`, `LinkButton`, `RouteLink`, `CardArrow` |
| `job-sections` | Server | The job page, for real roles only | `Breadcrumbs`, `LinkButton`, `ArrowLink`, `RouteLink` |
| `copy-link` | Client | "Copy link to role" | `Button` |

`jobPositions` in `content/careers/positions.ts` is the only source of job routes, and is empty. `RADAR_DOTS` holds the source's dot positions as whole class names.

## Insights sections

Added in SF-150, under `src/components/sections/insights/`. Content is typed data in `src/content/insights/`, and `getPublishedArticles` is the only reader of it.

| Component | Type | Holds | Reuses |
|---|---|---|---|
| `insights-index` | Server | Hero and featured, latest with empty state, cards, CTA | `Breadcrumbs`, `SectorGround`, `Icon`, `LinkButton` |
| `insights-browser` | Client | Search, category links, count, no-match. State lives in the URL | `SearchField`, `Button`, `Icon` |
| `article-sections` | Server | Header, share rail, reading column, contents, related | `Breadcrumbs`, `SectorGround`, `ArrowLink`, `ExternalLink` |
| `article-parts` | Server | The closed block renderer, author initials, date format | `ArrowLink` |
| `article-copy-button` | Client | Copy link, with a 1.8 s confirmation | `Icon` |

Article links use `Link` directly, as a published article is the only way to reach that code. `routes.ts` must not import `articles.ts`: it reaches the client bundle, and would carry drafts with it.

