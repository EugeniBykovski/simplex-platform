# Implementation roadmap

Ticket names are the owner's list from the SF-140 brief. **Jira itself was not accessible during SF-140** (GAP-J01), so acceptance criteria inside each ticket have not been compared with this document. Jira was not modified.

## Dependency order

```
SF-140 Architecture ──▶ SF-141 Setup ──▶ SF-142 Design system + shell
                                              │
          ┌──────────┬──────────┬─────────────┼───────────┬──────────┐
       SF-143     SF-145     SF-147        SF-148      SF-150     SF-152
        Home     Services   Industries      Work      Insights     Legal
       SF-144     SF-146                  SF-149      SF-151
        Agent    Packages                 Company     Contact
          └──────────┴──────────┴─────────────┼───────────┴──────────┘
                                              ▼
                 SF-153 SEO · SF-154 Assets and performance · SF-155 Visual QA
                                              ▼
                                      SF-156 Release
```

## Coverage

Every board has exactly one owner.

| Ticket | Scope | Boards | Desktop | Tablet | Mobile | Routes |
|---|---|---|---|---|---|---|
| SF-140 | Architecture and inventory (this ticket) | 3 | 3 | 0 | 0 | 0 |
| SF-142 | Design System, Components, Navigation, Footer | 8 | 8 | 0 | 0 | 0 |
| SF-143 | Homepage | 14 | 4 | 4 | 6 | 1 |
| SF-144 | SimpleX Agent | 4 | 2 | 0 | 2 | 1 |
| SF-145 | Services | 30 | 26 | 0 | 4 | 13 |
| SF-146 | Build Packages | 5 | 2 | 0 | 3 | 1 |
| SF-147 | Industries | 11 | 7 | 0 | 4 | 7 |
| SF-148 | Work & Case Studies | 9 | 4 | 1 | 4 | 4 |
| SF-149 | Company & Careers | 17 | 7 | 0 | 10 | 5 |
| SF-150 | Insights | 4 | 2 | 0 | 2 | 2 |
| SF-151 | Contact & Resend | 5 | 2 | 1 | 2 | 2 |
| SF-152 | Legal | 6 | 4 | 0 | 2 | 4 |
| **Total** |  | 116 | 71 | 6 | 39 | 40 |

## SF-141: Foundation

Verified on `main` during SF-140. **Do not create a second scaffold.**

| Item | State | Evidence |
|---|---|---|
| Next.js App Router, React | Done | Next.js 16.4.5, React 19.3.1, `pnpm build` passes |
| TypeScript strict | Done | `strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`; `pnpm typecheck` passes |
| Tailwind CSS | Done, tokens not ported | v4 installed. Tokens belong to SF-142 |
| ESLint, Prettier | Done | `pnpm lint`, `pnpm format:check` pass |
| Package manager, lockfile | Done | pnpm, `pnpm install --frozen-lockfile` passes |
| EN/RU routing | Done | next-intl, `src/proxy.ts`, [i18n.md](i18n.md) |
| Typed messages, parity check | Done | `src/types/next-intl.d.ts`, `pnpm check:i18n` |
| Translation gate | Done | `src/i18n/translation-status.ts` |
| Metadata helper | Done | `src/lib/seo/metadata.ts` |
| Fonts with Cyrillic | Done | `src/styles/fonts.ts` |
| Rendering boundaries | Done | Locale pages are static (SSG). `/_not-found` is dynamic by design, since it reads the locale |
| Server-rendered 404 | Done in SF-140 | `src/app/global-not-found.tsx`, `pnpm smoke:404` |
| **Environment validation** | **Not done** | `src/config/site.ts` falls back to localhost with no validation. A production build with no `NEXT_PUBLIC_SITE_URL` would silently emit localhost canonicals |
| **CI** | **Not done** | No workflow exists |
| **Playwright** | **Not done** | Shared with SF-155 |
| **Hosting and environments** | **Not done** | Target not chosen |
| **Security headers** | **Not done** | Only `poweredByHeader: false` |
| **Favicon** | **Not done** | `/favicon.ico` returns 404. Assets in SF-154 |
| **Jira reconciliation** | **Not done** | GAP-J01 |

## SF-142: Design system and shell

**This is the critical dependency.** Page work must not start until it lands, or the pages will fork primitives and drift.

1. Port tokens and design CSS, resolving the cascade ([system-design.md](system-design.md)). Test GAP-D04. Delete the rules in `src/styles/not-found.css` that the port duplicates.
2. Build `SiteLayout`, `Header`, `MegaMenu`, `MobileMenu`, `Footer`, in both languages. Check header fit in Russian at 1101–1280. Add them to the 404 page.
3. Build primitives from [component-inventory.md](../design/component-inventory.md).
4. Add `@sx` container variants to Tailwind.
5. Add a QA-only specimen route, excluded from production, in place of Storybook.
6. Set up the reference-capture spike, with SF-155 (GAP-Q01).

## Parallel work

After SF-142, page tickets are largely independent, because each owns its own sections and content.

| Can run in parallel | Shared dependency to agree first |
|---|---|
| SF-145 Services, SF-147 Industries | Both use `gx-` blocks, `ComplianceGrid` and the slug-template pattern. One sets the pattern, ideally SF-145 |
| SF-143 Home, SF-144 Agent, SF-146 Packages | `Widget`, `Mock`, `DeviceFrame`, `LiquidGlass`. Home sets these |
| SF-148 Work, SF-150 Insights, SF-149 Careers | `FilterBar` with empty state. SF-142 builds it |
| SF-151 Contact, SF-149 Job form | Form primitives and the Server Action pattern. SF-151 goes first |
| SF-152 Legal | Mostly independent. Needs `Switch` |

Anti-drift rules: page tickets add only under `components/sections/<family>/`; changes to `ui/`, `layout/` or design CSS go through one reviewer; every page ticket runs the visual suite at 390, 768 and 1440 before merging.

**Suggested order if working serially:** SF-143 (sets most patterns), then SF-145, SF-147, SF-151, SF-148, SF-144, SF-146, SF-149, SF-150, SF-152.

## Cross-cutting tickets

| Ticket | Scope |
|---|---|
| SF-153 Technical SEO | `robots.ts`, `sitemap.ts`, JSON-LD builders, Twitter metadata, root metadata, validation. [seo-architecture.md](../seo/seo-architecture.md) |
| SF-154 Assets, Motion & Performance | Asset pipeline, favicons, Open Graph art, AVIF and WebP, CWV budgets, glass and blur testing, motion tuning. [asset-manifest.md](../design/asset-manifest.md), [motion spec](../design/motion-interaction-specification.md) |
| SF-155 Visual Regression & E2E | Playwright suites, reference capture, deviations log. [strategy](../qa/visual-regression-strategy.md), [matrix](../qa/test-matrix.md) |
| SF-156 Release Acceptance | Domain, DNS, Resend verification, security headers, Search Console, launch checklist, the index switch, legal sign-off |

## Scope discrepancies to confirm in Jira

| Item | Discrepancy | Assumed here |
|---|---|---|
| `/404` | The owner list names SF-152 "Legal", with no mention of system pages. The design groups them as "Legal & system" | SF-152 owns it. Foundation version shipped in SF-140 |
| `/how-we-work`, `/about`, `/technologies` | "Company & Careers" does not name them | SF-149, matching the design's Company page |
| `/contact/thank-you` | Not named | SF-151 |
| Job application form | Could be Careers or Contact | SF-149 builds it on SF-151's form pattern |
| Motion | SF-154 names motion, but scroll and hover rules arrive with the SF-142 CSS port | SF-142 ports, SF-154 tunes and verifies |
| Foundations reference boards | `Main`, `Audit`, `Handoff` ship nowhere | Closed by SF-140 |
| Non-board shared code | Skip link, error page, cookie banner | SF-142, SF-142, SF-152 |
| Russian copy | No ticket names it | Each page ticket, with a named reviewer (GAP-I01) |

## Before launch

Blockers from the [gap register](../design/design-gap-register.md): GAP-C01, GAP-C02, GAP-C08, GAP-C09. All four need owner input, and no code can close them.

## Board assignment detail

### SF-140: Architecture and inventory (this ticket)

- **Compositions:** `Audit`, `Handoff`, `Main`
- **Artboards:** `Main`, `Audit`, `Handoff`

### SF-142: Design System, Components, Navigation, Footer

- **Compositions:** `Components`, `Footer`, `Logo`, `Nav`, `System`, `UiKit`, `UiKitComponents`, `UiKitGlass`
- **Artboards:** `Logo`, `System`, `Components`, `Nav`, `Footer`, `UiKit`, `UiKitComponents`, `UiKitGlass`

### SF-143: Homepage

- **Compositions:** `Home`
- **Routes:** `/`
- **Artboards:** `Home`, `Home-p2`, `Home-p3`, `Home-p4`, `HomeTablet`, `HomeTablet-p2`, `HomeTablet-p3`, `HomeTablet-p4`, `HomeMobile`, `HomeMobile-p2`, `HomeMobile-p3`, `HomeMobile-p4`, `HomeMobile-p5`, `HomeMenuMobile`

### SF-144: SimpleX Agent

- **Compositions:** `Agent`
- **Routes:** `/agent`
- **Artboards:** `Agent`, `Agent-p2`, `AgentMobile`, `AgentMobile-p2`

### SF-145: Services

- **Compositions:** `ServicePage`, `Services`
- **Routes:** `/services`, `/services/custom-software-development`, `/services/enterprise-software`, `/services/web-development`, `/services/mobile-development`, `/services/desktop-development`, `/services/ai-engineering`, `/services/cloud-devops`, `/services/architecture-consulting`, `/services/product-design`, `/services/legacy-modernization`, `/services/quality-engineering`, `/services/dedicated-teams`
- **Artboards:** `Services`, `Services-p2`, `ServicesMobile`, `ServicesMobile-p2`, `ServicePage`, `ServicePage-p2`, `svc-enterprise-software`, `svc-enterprise-software-p2`, `svc-web-development`, `svc-web-development-p2`, `svc-mobile-development`, `svc-mobile-development-p2`, `svc-desktop-development`, `svc-desktop-development-p2`, `svc-ai-engineering`, `svc-ai-engineering-p2`, `svc-cloud-devops`, `svc-cloud-devops-p2`, `svc-architecture-consulting`, `svc-architecture-consulting-p2`, `svc-product-design`, `svc-product-design-p2`, `svc-legacy-modernization`, `svc-legacy-modernization-p2`, `svc-quality-engineering`, `svc-quality-engineering-p2`, `svc-dedicated-teams`, `svc-dedicated-teams-p2`, `ServicePageMobile`, `ServicePageMobile-p2`

### SF-146: Build Packages

- **Compositions:** `Packages`
- **Routes:** `/packages`
- **Artboards:** `Packages`, `Packages-p2`, `PackagesMobile`, `PackagesMobile-p2`, `PackagesMobile-p3`

### SF-147: Industries

- **Compositions:** `Industries`, `IndustryPage`
- **Routes:** `/industries`, `/industries/fintech`, `/industries/healthcare`, `/industries/ecommerce`, `/industries/saas`, `/industries/enterprise`, `/industries/logistics`
- **Artboards:** `Industries`, `IndustriesMobile`, `IndustriesMobile-p2`, `IndustryPage`, `ind-healthcare`, `ind-ecommerce`, `ind-saas`, `ind-enterprise`, `ind-logistics`, `IndustryPageMobile`, `IndustryPageMobile-p2`

### SF-148: Work & Case Studies

- **Compositions:** `CasePage`, `Work`
- **Routes:** `/work`, `/work/ledgerline`, `/work/carepath`, `/work/routewise`
- **Artboards:** `Work`, `WorkTablet`, `WorkMobile`, `WorkMobile-p2`, `CasePage`, `case-carepath`, `case-routewise`, `CasePageMobile`, `CasePageMobile-p2`

### SF-149: Company & Careers

- **Compositions:** `About`, `Careers`, `HowWeWork`, `Job`, `Technologies`
- **Routes:** `/how-we-work`, `/about`, `/technologies`, `/careers`, `/careers/[slug]`
- **Artboards:** `HowWeWork`, `HowWeWork-p2`, `HowWeWorkMobile`, `HowWeWorkMobile-p2`, `About`, `About-p2`, `AboutMobile`, `AboutMobile-p2`, `Technologies`, `TechnologiesMobile`, `TechnologiesMobile-p2`, `TechnologiesMobile-p3`, `Careers`, `CareersMobile`, `CareersMobile-p2`, `Job`, `JobMobile`

### SF-150: Insights

- **Compositions:** `Article`, `Insights`
- **Routes:** `/insights`, `/insights/[slug]`
- **Artboards:** `Insights`, `InsightsMobile`, `Article`, `ArticleMobile`

### SF-151: Contact & Resend

- **Compositions:** `Contact`, `ThankYou`
- **Routes:** `/contact`, `/contact/thank-you`
- **Artboards:** `Contact`, `ContactTablet`, `ContactMobile`, `ThankYou`, `ThankYouMobile`

### SF-152: Legal

- **Compositions:** `LegalPage`, `NotFound`
- **Routes:** `/privacy-policy`, `/cookie-policy`, `/terms`, `/404`
- **Artboards:** `LegalPage`, `legal-cookie-policy`, `legal-terms`, `LegalMobile`, `NotFound`, `NotFoundMobile`
