# Component inventory

Every component below appears on at least one route, verified by scanning each page composition's markup for its classes. This is a build list for SF-142 onward, not an implementation. Boundaries and client rules: [component-boundaries.md](../architecture/component-boundaries.md). Values: [design-system-specification.md](design-system-specification.md).

"Used by" lists source compositions. `Nav` and `Footer` reach every route. **Owner rule:** primitives, and anything used by more than one ticket, belong to SF-142. Otherwise the single ticket that uses it owns it.

| Tier | Component | Design classes | Rendering | States | Used by | Owner |
|---|---|---|---|---|---|---|
| Layout | SiteLayout | `.sx`, `.header-slot` | server | — | All routes | SF-142 |
| Layout | Header | `.nav`, `.nav-link`, `.nav-logo` | server | Active, hover, focus-within | All routes through `Nav` | SF-142 |
| Layout | MegaMenu | `.mega`, `.mega-link`, `.mega-feature` | server (CSS) | Hover, focus-within. Hidden ≤ 860 | All routes through `Nav` | SF-142 |
| Layout | MobileMenu | `.mobile-menu`, `.burger`, `.mm-link` | client | Closed, open | All routes through `Nav` | SF-142 |
| Layout | Footer | `.footer`, `.footer-grid`, `.footer-mega` | server | Link hover | All routes | SF-142 |
| Layout | Section, Wrap | `.section`, `.wrap`, `.wrap-narrow`, `.split*`, `.grid-*` | server | — | All routes | SF-142 |
| Layout | Breadcrumbs | `.crumbs` | server | `aria-current` | About, Agent, Article, Careers, CasePage, Contact, HowWeWork, Industries, IndustryPage, Insights, Job, LegalPage, Packages, ServicePage, Services, Technologies, Work | SF-142 |
| Brand | Logo | `.lp`, `.logo`, `.logo-x` | server (CSS) | Hover opens the cut, `.live` sheen | All routes | SF-142 |
| Brand | SxMark | `.sx-mark` | server | `.live`, hover | Agent, Home, Nav, NotFound, Packages, ThankYou, Work | SF-142 |
| Type | LineMaskHeading | `.line-mask` | server | Load animation | About, Agent, Careers, Contact, Home, HowWeWork, Industries, IndustryPage, Insights, ServicePage, Services, Technologies, ThankYou, Work | SF-142 |
| Type | GradientText | `.t-grad` | server | — | About, Agent, Careers, CasePage, Contact, Home, HowWeWork, Industries, Insights, NotFound, Services, Technologies, ThankYou, Work | SF-142 |
| Controls | Button | `.btn`, `.btn-primary`, `.btn-light`, `.btn-ghost`, `.btn-glass`, `.btn-sm`, `.btn-lg` | server | Hover, focus, active, disabled, loading | About, Agent, Careers, CasePage, Contact, Home, HowWeWork, Industries, IndustryPage, Insights, Job, LegalPage, Nav, NotFound, Packages, ServicePage, Services, Technologies, Work | SF-142 |
| Controls | ArrowLink, TextLink | `.link-arrow`, `.text-link` | server | Hover, focus | About, Article, Contact, Footer, Home, HowWeWork, IndustryPage, Job, Nav, Packages, ServicePage, ThankYou, Work | SF-142 |
| Controls | IconButton | `.btn-icon` | server | Hover, focus | Article | SF-142 |
| Controls | Tabs | `.tabs`, `.tab`, `.tabs-dark` | client | Selected, hover, focus | Agent, Home, IndustryPage, Packages, Technologies | SF-142 |
| Controls | FilterBar | `.filter-btn` | client | Pressed, hover, focus, empty result | Careers, Insights, Technologies, Work | SF-142 |
| Controls | ToggleChip | `.toggle-chip` | client | Pressed | Contact | SF-142 |
| Controls | Accordion | `.acc` | server (details) | Open, closed, hover, focus | Agent, HowWeWork, Packages, ServicePage | SF-142 |
| Controls | SearchField | `.search` | client | Typing, no match | Insights, NotFound, Technologies | SF-142 |
| Controls | Switch | `.switch` | client | On, off, locked | LegalPage | SF-142 |
| Forms | Field, Input, Select, Textarea | `.field`, `.label`, `.input`, `.select`, `.textarea`, `.opt` | client in forms | Default, focus, error, valid, disabled | Contact, Home, Insights, Job, NotFound, Technologies | SF-142 |
| Forms | Checkbox | `.check` | client in forms | Unchecked, checked, error | Contact | SF-142 |
| Forms | ErrorMessage | `.error-msg` | server | — | Contact, Job | SF-142 |
| Forms | Alert | `.alert`, `.alert-error`, `.alert-success`, `.alert-info` | server | `role=alert`, `role=status` | Contact, Insights, LegalPage, Work | SF-142 |
| Feedback | Spinner | `.spinner` | server | Busy | Agent, Contact, Home | SF-142 |
| Feedback | Skeleton | `.skel` | server | Loading | Insights | SF-142 |
| Feedback | DemoTag | `.tag-demo` | server | — | About, Agent, Article, Careers, CasePage, Home, IndustryPage, Job, Packages, ServicePage, Work | SF-142 |
| Feedback | Tag, Badge | `.tag`, `.badge`, `.badge-new`, `.gx-tag` | server | — | About, Agent, Article, Careers, CasePage, Contact, Footer, Home, HowWeWork, Industries, IndustryPage, Insights, Nav, Packages, ServicePage, Services, Technologies, Work | SF-142 |
| Surfaces | Glass | `.glass`, `.glass-dark`, `.glass-frost` | server | With `.card-hover` | About, Agent, Careers, CasePage, Contact, Home, HowWeWork, Industries, IndustryPage, Job, LegalPage, ServicePage, Services, Technologies, ThankYou | SF-142 |
| Surfaces | LiquidGlass | `.lg`, `.lg-dark`, `.lg-graphite`, `.lg-cobalt` | server | — | Home, Packages, Work | SF-142 |
| Surfaces | Card | `.solid`, `.paper-card`, `.card-hover`, `.card-arrow` | server | Hover, focus-visible | About, Article, Careers, CasePage, Home, Industries, IndustryPage, Insights, Job, Packages, ServicePage, Services, Technologies, ThankYou, Work | SF-142 |
| Surfaces | Widget | `.widget`, `.widget-dark`, `.w-head` | server | — | Agent, Home | SF-142 |
| Surfaces | GrowthPanel | `.gx-panel`, `.gx-dark`, `.gx-head`, `.gx-row`, `.gx-bar` | server | — | About, Agent, Careers, CasePage, Contact, Home, HowWeWork, Industries, IndustryPage, Packages, ServicePage, Services, Technologies | SF-142 |
| Grounds | Background classes | `.bg-horizon`, `.bg-ink`, `.bg-mist`, `.bg-spectrum`, `.bg-cta`, `.mesh-light`, `.mesh-graphite` | server | `.is-live` drift | About, Agent, Article, Careers, CasePage, Contact, Home, HowWeWork, Industries, IndustryPage, Insights, Job, LegalPage, NotFound, Packages, ServicePage, Services, Technologies, ThankYou, Work | SF-142 |
| Grounds | PhotoGround | `.photo`, `.viz`, `.slice` | server | — | About, Agent, Article, CasePage, Home, Industries, IndustryPage, Insights, ServicePage, Work | SF-142 |
| Patterns | IndustryCard | `.ind-card` | server (CSS) | Details on hover, always visible ≤ 600 | Home | SF-143 |
| Patterns | ServiceCard, ProjectCard | `.panel-split`, `.card-hover` | server | Hover, stacked | Article, CasePage, Home, IndustryPage, Insights, Job, Packages, ServicePage, Services, ThankYou, Work | SF-142 |
| Patterns | ArticleCard | `.viz`, `.card-hover` | server | Hover | Article, Home, Insights | SF-142 |
| Patterns | PackageCard | `.pkg-card`, `.pkg-vis` | server | Hover | Home, Packages | SF-142 |
| Patterns | ModelCard | `.model-card` | server | `is-featured` variant | Agent, Home | SF-142 |
| Patterns | ComparisonTable | `.cmp`, `.cmp-row` | server | Scrolls ≤ 600 | Packages, Services | SF-142 |
| Patterns | ComplianceGrid | `.comp-grid`, `.comp-tile`, `.seal` | server | — | About, Industries, IndustryPage | SF-142 |
| Patterns | ProjectFilters | `.filter-bar`, `.filter-btn` | client | Live count, empty state | Work | SF-148 |
| Patterns | TechDirectory | `.search`, `.filter-bar` | client | Search, category, live count, empty state | Technologies | SF-149 |
| Patterns | TechRadar | `.tabs-dark`, `.gx-row`, `.gx-2` | client | Ring tabs, stacks ≤ 1000 | Technologies | SF-149 |
| Patterns | ContactFormPanel | `.field`, `.toggle-chip`, `.check`, `.alert` | client | All form states, demo mode | Contact | SF-151 |
| Patterns | InsightsBrowser | `.search`, `.filter-btn` | client | URL state, live count, no-match | Insights | SF-150 |
| Patterns | ArticleBlocks | `.prose`, `.quote` | server | Closed block set | Article | SF-150 |
| Patterns | Timeline | `.tl` | server | Stacks ≤ 600 | Careers, ServicePage | SF-142 |
| Patterns | ProcessRail | `.process`, `.process-step`, `.process-rail` | server | Scroll-driven | Careers, CasePage, ServicePage | SF-142 |
| Patterns | ScrollStory | `.story`, `.story-step`, `.story-rail` | server | Scroll-driven | Home, HowWeWork | SF-142 |
| Patterns | StackedCards | `.stack-cards`, `.stack-card` | server | Sticky | Home | SF-143 |
| Patterns | CtaBand | `.bg-cta`, `.cta-kpis`, `.cta-trust` | server | — | About, Agent, Careers, Home, HowWeWork, Industries, IndustryPage, Packages, ServicePage, Services, Work | SF-142 |
| Patterns | BeforeAfter | `.ba`, `.ba-pane`, `.ba-after`, `.ba-handle` | client | Range, stacked ≤ 600 | CasePage | SF-148 |
| Patterns | Scheduler | `.sched-days`, `.sched-day`, `.sched-slots`, `.sched-slot` | client | **Not built: GAP-F01** | Contact | SF-151 |
| Patterns | Estimator | `.gx-range`, `.opt`, `.gx-num` | client | Live values | Agent, Contact, Home, Job | SF-142 |
| Patterns | EcosystemDiagram | `.eco`, `.eco-node`, `.eco-core` | server | Reorders ≤ 1100 | Packages | SF-146 |
| Patterns | IndustryRow | `.viz`, `.chip`, `.card-arrow` | server | Hover, focus. 4 columns ≤ 1100, 2 ≤ 760 | Industries | SF-147 |
| Patterns | ComplianceGrid | `.comp-grid`, `.comp-tile`, `.seal`, `.photo` | server | 2 columns, then 1 | Industries, IndustryPage | SF-147 |
| Patterns | Quote | `.quote` | server | — | Article | SF-150 |
| Data viz | MockUI | `.mock` | server | `aria-hidden` where decorative | Agent, CasePage, Home, HowWeWork, ServicePage, Work | SF-142 |
| Data viz | ArchitectureDiagram | `.arch`, `.arch-layer`, `.arch-node` | server | — | Article, CasePage, ServicePage | SF-142 |
| Data viz | Sparkline, Bars, Ring | `.spark`, `.bars`, `.ring` | server | — | Agent, Home, HowWeWork, Packages, ServicePage, Work | SF-142 |
| Data viz | Stat | `.stat-num` | server | — | CasePage | SF-148 |
| Devices | PhoneFrame | `.phone`, `.phone-screen`, `.phone-stage` | server | Size by `--pw` | Home, Packages | SF-142 |
| Devices | DesktopFrame, Browser, Laptop | `.desk-win`, `.browser`, `.laptop` | server | `.win-side` hidden ≤ 600 | Home, Packages, ServicePage | SF-142 |
| Glass UI | Island, Toast, Chip, Progress | `.g-island`, `.g-toast`, `.g-chip`, `.g-progress` | server | Decorative use on marketing pages | Home, Packages | SF-142 |
| Glass UI | Avatar, Kbd | `.avatar`, `.kbd` | server | — | Home, Packages, Work | SF-142 |
| Motion | Marquee | `.marquee`, `.marquee-track` | server | Loop, off under reduced motion | Home | SF-143 |
| Motion | Icon | `.ico`, `.ico-*` | server | Sized by `--icon` | Most routes | SF-142 |

## Do not build

These classes are documented on the UI kit or component boards, but **no route uses them**. The ticket requires components to map to real use:

`.blur-l`, `.blur-m`, `.blur-s`, `.blur-xl`, `.blur-xs`, `.btn-graphite`, `.cookie`, `.g-cmd`, `.g-cta`, `.g-dock`, `.g-input`, `.g-logos`, `.g-menu`, `.g-quote`, `.g-scrim`, `.g-seg`, `.g-sheet`, `.g-slider`, `.g-stat`, `.g-tabbar`, `.g-tip`, `.g-toggle`, `.grid-lines`, `.inner-glow`, `.lg-clear`, `.pager`, `.radio`, `.range`, `.sheen`, `.spec`, `.spinner-dark`, `.tex-grid-dark`

Page-level specimens on `Components`, `UiKit`, `UiKitComponents` and `UiKitGlass` are documentation, and those boards do not ship. Include `.cookie` only if GAP-F03 is decided in favour of a banner: it exists solely as a specimen.

## Requested in the ticket, and their status

| Requested | Result |
|---|---|
| Header, mobile menu, footer, buttons, links, cards | Present above |
| Industry, service and case study cards | Present |
| Package comparison | `ComparisonTable`, with `PackageCard` |
| Testimonials | **None approved.** Only a bracketed quote slot on Work (`lg-dark`), and the `.g-quote` block is kit-only |
| Article cards, breadcrumbs, forms, select, accordions, tabs | Present |
| Modals | **None on any route.** `role="dialog"` appears only as the cookie specimen on `Components`. `.g-sheet` and `.g-scrim` are kit-only |
| Loading states | `Spinner`, `Skeleton` |
| Error states | `Alert`, `ErrorMessage`, `NotFound`. There is **no design for a runtime error page** (`error.tsx`). Adapt from `NotFound` |
