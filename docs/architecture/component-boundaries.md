# Component boundaries

Rules for what goes where, and what may be client code. The full list is in [component-inventory.md](../design/component-inventory.md).

## Tiers

Dependencies point downward only.

| Tier | Location | Contains | May import |
|---|---|---|---|
| Routes | `src/app/[locale]/` | Thin pages: metadata, static params, composition | Everything below |
| Features | `src/features/` (planned) | A capability with its own logic: contact, careers application | `sections`, `layout`, `ui`, `lib` |
| Sections | `src/components/sections/` (planned) | Editorial page sections | `layout`, `ui`, `lib` |
| Layout | `src/components/layout/` (planned) | `SiteLayout`, `Header`, `MobileMenu`, `Footer`, `Section` | `ui`, `lib` |
| UI | `src/components/ui/` (planned) | Design-system primitives with no page knowledge | `lib` |
| System | `src/components/system/` | 404 view, reused by global and locale boundaries | `lib` |
| Lib | `src/lib/`, `src/config/`, `src/i18n/` | Helpers, config, no JSX where avoidable | Nothing above |

Rules:

- **UI primitives receive text as props.** They hold no strings and no knowledge of routes.
- **Sections receive content as typed props.** Pages load content and pass it down, so sections never import a locale's content directly.
- **Nothing outside `features/contact` and `features/careers` touches email**, and `src/lib/email/config.ts` is server-only: importing it into a Client Component fails the build.

## Client or server

Default is server. A component is client only if it needs state, effects or browser APIs. Keep the boundary as low as possible: an interactive leaf inside a server section, not a client section.

| Client | Why | Everything else about it |
|---|---|---|
| `MobileMenu` | Toggle, `aria-expanded` | Header stays server |
| `Tabs` | Selected tab | Panel content rendered on the server and passed in |
| `FilterBar` for Work, Careers, Insights, Technologies | Filtering in the browser | Full list server-rendered, so it is crawlable |
| `StackPicker` (Agent), `TechTabs` (Home), `ScenarioTabs` (Industry), `TrackTabs` (Packages), `RadarTabs` (Technologies) | Selection | Pass all panels' data |
| `BuildEstimator` (Home), `RoiEstimator` (Agent) | Live calculation | Copy stays server |
| `BeforeAfterSlider` (Case) | Range input drives `clip-path` | Falls back to stacked panes under 600 px via CSS |
| `ShareLinks` (Article) | Clipboard | Reading progress is CSS only |
| `ContactForm`, `ApplicationForm` | Inline errors, busy state | Server Action does the work |
| `CookieConsent`, `CookiePreferences` | Reads and writes consent | Banner must not shift layout |
| `LocaleSwitcher` | Reads the pathname | Exists today |
| `[locale]/error.tsx`, `global-error.tsx` | Next.js requires error boundaries to be client code | Exist today |

**Stay on the server, with no JavaScript:**

| Component | How |
|---|---|
| Accordion | Native `<details>` / `<summary>` |
| Mega menu | CSS `:hover` and `:focus-within`, as designed |
| Reveal, hero, stacked cards, story rail | CSS scroll-driven animation |
| Reading progress | `animation-timeline: scroll(root)` |
| Hover states, card lift, button sweep | CSS transitions |
| Article share links (LinkedIn, X, email) | Plain links |

## Templates or bespoke

Reuse where the design reuses. Do not unify what the design deliberately varies, because that is where fidelity is lost.

| Pattern | Decision | Evidence |
|---|---|---|
| `ServicePage` | **One template, 12 slugs.** Hero picks a visual (7 values in the slug data; the handoff says 6) and a light or dark theme | One source, slug prop |
| `IndustryPage` | **One template, 6 slugs** | One source, slug prop |
| `LegalPage` | **One template, 3 slugs.** Preferences block only on cookie | One source, slug prop |
| `CasePage` | **Three bespoke layouts, shared data type.** Do not merge A, B and C | Each has its own markup. They share only the before/after block and next-project footer |
| Home | **Bespoke.** 15 sections, unique to this page | Pinned hero and statement cards appear nowhere else |
| Agent, Packages | **Bespoke**, reusing `Widget`, `Mock`, `DeviceFrame` | Unique sections |
| About, How We Work, Careers, Technologies, Services, Industries, Work, Insights | **Bespoke sections from shared primitives** | Different section structure on each |
| `CtaBand` (`.bg-cta.dark`) | **Shared** | Closes most pages. Props: headline, lead, actions, optional `.cta-kpis` and `.cta-trust` |
| Page hero | **Not one component.** Thin shared parts (`LineMaskHeading`, `Breadcrumbs`), composed per page | Grounds, alignment and padding differ per route |
| `gx-` growth blocks | **Per-page sections on shared `gx-` primitives** | Each does a different job |

## Duplication worth keeping

Some repeated markup should stay repeated. Two sections that look alike but sit on different pages are allowed to change independently, and a premature prop-driven super-component is the likeliest source of design drift in this project. Extract on the third real repeat, unless the design's own source shares the template.

## Parallel work

See [implementation-roadmap.md](implementation-roadmap.md). Page tickets may add to `components/sections/<family>/` freely. Changes to `ui/`, `layout/` or the design CSS go through SF-142's owner, so two page tickets do not fork a primitive.
