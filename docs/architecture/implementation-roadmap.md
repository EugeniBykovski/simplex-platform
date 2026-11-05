# Implementation roadmap

Ticket names are the owner's list from the SF-140 brief. **Jira itself was not accessible during SF-140** (GAP-J01), so acceptance criteria inside each ticket have not been compared with this document. Jira was not modified.

## Acceptance for every ticket

Automated tests were removed by owner decision. Each ticket from SF-144 to SF-156 is accepted through typecheck, lint, formatting, a production build, and manual functional, responsive, design and accessibility review. Lighthouse runs only when requested. See [manual-qa.md](../qa/manual-qa.md).

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
                 SF-153 SEO · SF-154 Assets and performance · SF-155 Manual QA
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

Implemented on `main`. **Do not create a second scaffold.**

| Item | State | Evidence |
|---|---|---|
| Next.js App Router, React, strict TypeScript | Done | `pnpm build`, `pnpm typecheck` |
| ESLint, Prettier, pnpm, lockfile | Done | `pnpm lint`, `pnpm format:check` |
| Tailwind connected to design tokens | Done | `src/styles/globals.css` |
| EN/RU routing, typed messages, translation gate | Done | `src/i18n/routing.ts` |
| Server-rendered 404, error boundaries | Done | `src/app/global-not-found.tsx` |
| Environment validation | Done | [environment-configuration.md](environment-configuration.md) |
| Security headers, CSP | Done, tested on foundation pages | [security-boundaries.md](security-boundaries.md) |
| Metadata, canonical, Twitter, robots, sitemap structure | Done | `src/lib/seo/metadata.ts` |
| Image configuration, favicons | Done | `next.config.ts` |
| CI workflow | Done: install, format, lint, typecheck, build | `.github/workflows/ci.yml` |
| Deployment guide | Done | [deployment.md](deployment.md) |
| **Hosting target, Jira reconciliation** | **Open: owner** | GAP-J01 |

## SF-142: Design system and shell

Implemented on `main`. See [component-implementation.md](../design/component-implementation.md).

**Done:** tokens, ported stylesheet, Tailwind mapping, logo system, primitives, forms, tabs, accordion, header, mega menus, mobile menu, footer, skip link, EN and RU shell strings.

**Handed to page tickets:** page patterns such as `CtaBand`, whose CSS is ready. Add each route to `implementedRoutes` when its page ships, which turns its links on everywhere.

**Open:** real iOS device pass, native editor for Russian, GAP-D07 to GAP-D11 review.

## SF-143: Homepage

Implemented on `main`. See [homepage-artboard-matrix.md](../design/homepage-artboard-matrix.md) and [homepage-visual-parity.md](../qa/homepage-visual-parity.md).

**Open:** native editor for Russian, real iOS pass, and the content blockers listed in the parity record.

## SF-144: SimpleX Agent, and global UI correction

Implemented on `main`. See [agent-artboard-matrix.md](../design/agent-artboard-matrix.md), [agent-claims-register.md](../content/agent-claims-register.md) and [agent-manual-qa.md](../qa/agent-manual-qa.md).

Also changed for every page: pending and disabled states, navbar contrast, the language switch in the header, and the footer wordmark.

**Open:** verified capability list (GAP-C01), the ROI assumption (GAP-F07), published-canvas comparison, native editor for Russian, real iOS and screen-reader pass. Its enquiry CTAs turn on with `/contact` in SF-151.

## SF-145: Services

Implemented on `main`. See [services-artboard-matrix.md](../design/services-artboard-matrix.md), [services-claims-register.md](../content/services-claims-register.md) and [services-manual-qa.md](../qa/services-manual-qa.md).

All 13 routes are live, and links to them across the site have turned on, including the `/agent` "AI engineering" CTA.

**Open:** claims listed in the register (GAP-C04, GAP-C10), the Desktop row in the matrix (GAP-D19), published-canvas comparison, native editor for Russian, and Safari, Firefox, device and screen-reader passes. `Service` structured data waits for approved company details (GAP-C08).

## Parallel work

After SF-142, page tickets are largely independent, because each owns its own sections and content.

| Can run in parallel | Shared dependency to agree first |
|---|---|
| SF-145 Services, SF-147 Industries | Both use `gx-` blocks, `ComplianceGrid` and the slug-template pattern. One sets the pattern, ideally SF-145 |
| SF-143 Home, SF-144 Agent, SF-146 Packages | `Widget`, `Mock`, `DeviceFrame`, `LiquidGlass`. Home sets these |
| SF-148 Work, SF-150 Insights, SF-149 Careers | `FilterBar` with empty state. SF-142 builds it |
| SF-151 Contact, SF-149 Job form | Form primitives and the Server Action pattern. SF-151 goes first |
| SF-152 Legal | Mostly independent. Needs `Switch` |

Anti-drift rules: page tickets add only under `components/sections/<family>/`; changes to `ui/`, `layout/` or design CSS go through one reviewer; every page ticket is inspected by hand at 390, 768 and 1440 before merging.

**Suggested order if working serially:** SF-143 (sets most patterns), then SF-145, SF-147, SF-151, SF-148, SF-144, SF-146, SF-149, SF-150, SF-152.

## Cross-cutting tickets

| Ticket | Scope |
|---|---|
| SF-153 Technical SEO | Populate `indexableRoutes`, JSON-LD builders, Open Graph images, root metadata, validation. `robots.ts` and `sitemap.ts` exist. [seo-architecture.md](../seo/seo-architecture.md) |
| SF-154 Assets, Motion & Performance | Asset pipeline, favicons, Open Graph art, AVIF and WebP, CWV budgets, glass and blur testing, motion tuning. [asset-manifest.md](../design/asset-manifest.md), [motion spec](../design/motion-interaction-specification.md) |
| SF-155 Visual Regression & E2E | **Scope changed by owner decision:** no automated suites. Manual cross-page responsive, design and accessibility review, per [manual-qa.md](../qa/manual-qa.md) |
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
| Non-board shared code | Skip link, cookie banner | SF-142, SF-152 |
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
