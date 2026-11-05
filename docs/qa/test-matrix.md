# Test matrix

Playwright, no Storybook. Owner: SF-155, with each page ticket adding its own route tests. Visual comparison: [visual-regression-strategy.md](visual-regression-strategy.md).

The foundation has only `pnpm verify`: typecheck, lint, i18n parity, docs validation and build. Playwright is planned and not yet installed.

## Suite overview

| Suite | Covers | Runs |
|---|---|---|
| `routes` | Every route returns its expected status | Every PR |
| `navigation` | Header, mega menu, mobile menu, footer, breadcrumbs, skip link | Every PR |
| `forms` | Contact, job, email boundary mocked | Every PR |
| `interactions` | Tabs, filters, search, accordions, estimators, slider | Every PR |
| `metadata` | Title, description, canonical, robots, hreflang, JSON-LD | Every PR |
| `crawl` | Sitemap, robots, internal links, no broken links | Pre-release |
| `a11y` | axe-core, keyboard paths, contrast | Every PR |
| `motion` | Reduced motion, fallbacks | Nightly |
| `visual` | Geometry and pixels | PR for reference widths, nightly for all |
| `i18n` | Locale routing, Russian rendering | Every PR |
| `performance` | Lighthouse budgets, CLS, image loading | Pre-release |

## Route coverage

Every route is tested at the extended viewport set. The second column shows which widths have a design reference board.

| Route | Boarded | Interactions to test | Expected indexing |
|---|---|---|---|
| `/` | 1440, 768, 390 | Tech tabs (8), industry show-more, estimator (type, platforms, stage, pace → roles, team size, model; no price computed), pinned hero, stacked cards, scroll story | index at launch |
| `/agent` | 1440, 390 | Stack picker tabs (5 stacks), ROI estimator (3 range inputs → hours, FTE, EUR/month), FAQ accordions | index at launch |
| `/services` | 1440, 390 | Card hovers, lifecycle matrix, vs-alternatives table | index at launch |
| `/services/custom-software-development` | 1440 | Use-case accordion, hero visual by slug (code, arch, device, desktop, graph, pipeline, team), light or dark theme by slug | index at launch |
| `/services/enterprise-software` | 1440 | Use-case accordion, hero visual by slug (code, arch, device, desktop, graph, pipeline, team), light or dark theme by slug | index at launch |
| `/services/web-development` | 1440 | Use-case accordion, hero visual by slug (code, arch, device, desktop, graph, pipeline, team), light or dark theme by slug | index at launch |
| `/services/mobile-development` | 1440 | Use-case accordion, hero visual by slug (code, arch, device, desktop, graph, pipeline, team), light or dark theme by slug | index at launch |
| `/services/desktop-development` | 1440 | Use-case accordion, hero visual by slug (code, arch, device, desktop, graph, pipeline, team), light or dark theme by slug | index at launch |
| `/services/ai-engineering` | 1440, 390 | Use-case accordion, hero visual by slug (code, arch, device, desktop, graph, pipeline, team), light or dark theme by slug | index at launch |
| `/services/cloud-devops` | 1440 | Use-case accordion, hero visual by slug (code, arch, device, desktop, graph, pipeline, team), light or dark theme by slug | index at launch |
| `/services/architecture-consulting` | 1440 | Use-case accordion, hero visual by slug (code, arch, device, desktop, graph, pipeline, team), light or dark theme by slug | index at launch |
| `/services/product-design` | 1440 | Use-case accordion, hero visual by slug (code, arch, device, desktop, graph, pipeline, team), light or dark theme by slug | index at launch |
| `/services/legacy-modernization` | 1440 | Use-case accordion, hero visual by slug (code, arch, device, desktop, graph, pipeline, team), light or dark theme by slug | index at launch |
| `/services/quality-engineering` | 1440 | Use-case accordion, hero visual by slug (code, arch, device, desktop, graph, pipeline, team), light or dark theme by slug | index at launch |
| `/services/dedicated-teams` | 1440 | Use-case accordion, hero visual by slug (code, arch, device, desktop, graph, pipeline, team), light or dark theme by slug | index at launch |
| `/packages` | 1440, 390 | Mobile track tabs (iOS, Android, React Native), comparison table | index at launch |
| `/industries` | 1440, 390 | None beyond link and hover states | index at launch |
| `/industries/fintech` | 1440 | Scenario tabs (3 per slug), slug-driven compliance grid | index at launch |
| `/industries/healthcare` | 1440, 390 | Scenario tabs (3 per slug), slug-driven compliance grid | index at launch |
| `/industries/ecommerce` | 1440 | Scenario tabs (3 per slug), slug-driven compliance grid | index at launch |
| `/industries/saas` | 1440 | Scenario tabs (3 per slug), slug-driven compliance grid | index at launch |
| `/industries/enterprise` | 1440 | Scenario tabs (3 per slug), slug-driven compliance grid | index at launch |
| `/industries/logistics` | 1440 | Scenario tabs (3 per slug), slug-driven compliance grid | index at launch |
| `/work` | 1440, 768, 390 | Industry filter + service filter (aria-pressed), result count (aria-live), empty state with clear action | index at launch |
| `/work/ledgerline` | 1440, 390 | Layouts A/B/C by slug, sticky TOC (layout B), before/after range slider, next-project nav | noindex while demonstration content |
| `/work/carepath` | 1440 | Layouts A/B/C by slug, sticky TOC (layout B), before/after range slider, next-project nav | noindex while demonstration content |
| `/work/routewise` | 1440 | Layouts A/B/C by slug, sticky TOC (layout B), before/after range slider, next-project nav | noindex while demonstration content |
| `/how-we-work` | 1440, 390 | Scroll story, FAQ accordions | index at launch |
| `/about` | 1440, 390 | None beyond link and hover states | index at launch |
| `/technologies` | 1440, 390 | Search + category filter + empty state, radar ring tabs (adopt, trial, assess, hold) | index at launch |
| `/careers` | 1440, 390 | Team filter with counts, result count (aria-live), empty state | index at launch |
| `/careers/[slug]` | 1440, 390 | Apply panel: idle → form → validation → sending → done; copy link | noindex while sample; add JobPosting only for live roles |
| `/insights` | 1440, 390 | Search, category filter, load more with skeleton, empty state, playbook email capture | index at launch |
| `/insights/[slug]` | 1440, 390 | Reading progress, copy link (1.8 s confirmation), share links, TOC | noindex while sample |
| `/contact` | 1440, 768, 390 | Lead form: idle, validation, loading, success, network error; scheduler: day, slot, confirm, booked | index at launch |
| `/contact/thank-you` | 1440, 390 | None beyond link and hover states | noindex |
| `/privacy-policy` | 1440, 390 | Section TOC, cookie preference switches + save confirmation (cookie slug only) | noindex until counsel approves |
| `/cookie-policy` | 1440 | Section TOC, cookie preference switches + save confirmation (cookie slug only) | noindex until counsel approves |
| `/terms` | 1440 | Section TOC, cookie preference switches + save confirmation (cookie slug only) | noindex until counsel approves |
| `/404` | 1440, 390 | Search form (no-op in prototype) | noindex |

## Viewports

| Tier | Widths |
|---|---|
| Reference | 390, 768, 1440 |
| Mobile | 320, 360, 375, 412, 430 |
| Tablet | 820, 1024 |
| Desktop | 1280, 1366, 1512, 1728, 1920, 2560 |
| Short laptop | 1366 × 768, 1440 × 900, 1512 × 982 |

Assert on every route and width: no horizontal overflow, no clipped text in `.btn`, the header fits, and touch targets are at least 44 px under 600.

## Functional checks

| Area | Check |
|---|---|
| Routes | 40 routes return 200 at launch, except 404 ones. `/en/*` redirects. `/ru/*` returns 200 only for available families |
| Unknown paths | `/nope`, `/ru/nope`, unknown service slug: status 404, localised text after hydration, `noindex` |
| Header | All links resolve. Burger at ≤ 1100. SX tile at ≤ 600. Sticky |
| Mega menu | Opens on hover and keyboard focus, closes on leaving, hover bridge holds. Hidden ≤ 860 |
| Mobile menu | `aria-expanded`, `aria-controls`, Escape, focus return, scroll lock |
| Filters | Work, Careers, Insights, Technologies: `aria-pressed`, count in `aria-live`, empty state, clear action |
| Tabs | `role` wiring, arrow keys, panel changes |
| Accordion | Keyboard, native `details` |
| Estimator | Option changes give expected roles. ROI maths: 24 engineers, 25%, EUR 9000 gives 384 hours, 2.4 FTE, EUR 21,600 |
| Before/after | Range input, stacked at ≤ 600 |
| Copy link | Clipboard, status text |
| Contact form | All five states. Required fields. Min 20 and max 2000. Consent. Honeypot. Throttle. Mocked Resend success, 4xx, 5xx and timeout. Input kept on error |
| Job form | Open, cancel, validate, send, done. Consent, once added |
| Cookie preferences | Essential locked, save confirmation, persistence, no analytics before consent |
| `.proto-bar` | **Absent from production** |
| Scheduler | Never reports a booking without a real provider response |
| Demo labels | `.tag-demo` present everywhere the design has it, until content is real |

## Accessibility

| Check | Method |
|---|---|
| WCAG 2.2 AA rules | axe-core on every route, both languages |
| Contrast | Automated plus manual. Glass over variable grounds and gradient text fool automated checks, so inspect these by hand |
| Keyboard | Full tab order on Home, Contact, Work. Visible focus. No traps |
| Skip link | **Not in the design.** Add one as an adaptation |
| Landmarks | One `main`, labelled `nav`s. `/contact` and the 404 use `main` directly |
| Headings | One H1. No skipped levels. Line-mask headings read as a phrase |
| Scrollable tables | Focusable, labelled |
| Forms | Labels, `aria-invalid`, described errors, `role=alert` summary |
| Reduced motion | Emulated: no looping or scroll motion, all content visible |
| Screen reader | Manual pass with VoiceOver on Home and Contact |

## Metadata and SEO

Per route, from the registry: title, description, one canonical, robots matching the expected tier, Open Graph present, `lang` correct, JSON-LD valid and matching visible content. `sitemap.xml` lists exactly the indexable routes, and `robots.txt` differs by environment. Preview builds are `noindex`. No hreflang until a family is approved.

## Internationalisation

| Check | Expected |
|---|---|
| `check-i18n` | Key parity, ICU argument parity, all Russian plural categories. **Exists today** |
| Locale routing | Table in [i18n.md](../architecture/i18n.md), automated |
| No language mixing | No English UI strings on a `ru` page, apart from approved terms |
| Plurals | 1, 2, 5, 11, 21, 22, 25 |
| Formatting | Dates, numbers and currency through `Intl` |
| Layout | Every viewport above in `ru`, no overflow. Compare by eye with `en` |
| Switcher | Keeps the path, links directly with no redirect hop |
| Bundle | Page copy is not in client JavaScript |

## Browsers

| Browser | Scope |
|---|---|
| Chrome, Edge latest | Full, plus pixel reference |
| Safari latest, iOS Safari | Layout and function. Real device pass for `backdrop-filter`, sticky and safe areas |
| Firefox latest | Layout and function. Scroll motion absent by default, so final states must look right |
| Samsung Internet or mid-range Android | Performance pass for glass and the hero |

## Performance and stability

CLS on hero, fonts and cookie banner. LCP element identified per template. Images: lazy below the fold, correct sizes, no failures. Budgets are in [system-design.md](../architecture/system-design.md).
