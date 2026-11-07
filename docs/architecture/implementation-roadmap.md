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

## SF-155: Cross-device QA

Done on `main`. See [cross-device-visual-audit.md](../qa/cross-device-visual-audit.md), [visual-gap-register.md](../qa/visual-gap-register.md) and [release-readiness.md](../qa/release-readiness.md).

Found and fixed: an invisible skip link, Russian headings and a button overflowing at mobile widths, clipped Russian form labels, duplicate landmark names and a heading-order gap. No P0 or P1 remains. Real devices, screen readers and real hosting are untested.

## SF-154: Media, motion and performance

Implemented on `main`. See [core-web-vitals.md](../performance/core-web-vitals.md), [remaining-issues.md](../performance/remaining-issues.md) and [media-motion-inventory.md](../design/media-motion-inventory.md).

Images are 80% smaller through AVIF and WebP, English pages load 2 fonts instead of 6, Home skips off-screen work, and three animations became composited. The design is pixel-equivalent to the previous commit. **LCP did not materially change on typical routes:** Home's page weight fell from 619 to 378 KiB, and results became more consistent. Field data doesn't exist.

**Open:** image rights (GAP-A01), real devices, real hosting, and Russian font loading.

## SF-153: Technical SEO

Implemented on `main`. See [technical-audit.md](../seo/technical-audit.md), [route-seo-matrix.md](../seo/route-seo-matrix.md) and [release-checklist.md](../seo/release-checklist.md).

`indexableRoutes` is now the one indexing gate, feeding robots, sitemap, hreflang and structured data, with 14 English pages listed. Added typed JSON-LD, generated social cards, 308 redirects for `/en/*`, self-canonical Russian drafts, rewritten descriptions and service-to-industry links. **Nothing is indexed, as no domain exists and `SITE_INDEXABLE` is off.**

**Open:** production domain, founder sign-off of Home and Services claims, Russian review, external validators and Search Console, and mobile LCP (SF-154).

## SF-152: Legal and system

Implemented on `main`: **code and design complete, legal publication blocked.** See [legal-system-artboard-matrix.md](../design/legal-system-artboard-matrix.md), [legal-document-register.md](../content/legal-document-register.md), [cookie-storage-inventory.md](../content/cookie-storage-inventory.md) and [legal-system-manual-qa.md](../qa/legal-system-manual-qa.md).

The three legal routes are live with a "Not yet published" state and `noindex`, and all documents are `draft`. Drafts render only in review mode. The site has one cookie and nothing optional, so no preference controls exist, and "Cookie settings" left the footer. Real contact delivery now requires an approved privacy policy. The 404 needed no change.

**Open:** counsel-approved text in each language, company facts, the host's cookies, native Russian review, and Safari, Firefox, device and screen-reader passes.

## SF-151: Contact

Implemented on `main` with a mock provider: **DONE WITH DEFERRED PROVIDER INTEGRATION.** See [contact-and-email.md](contact-and-email.md), [contact-artboard-matrix.md](../design/contact-artboard-matrix.md), [contact-privacy-register.md](../content/contact-privacy-register.md), [contact-manual-qa.md](../qa/contact-manual-qa.md) and [production-release-checklist.md](production-release-checklist.md).

`/contact` and `/contact/thank-you` render per request. Without configuration, the form is unavailable and sends nothing. Mock delivery works locally, and is refused on any public host or build. Every link to `/contact` is now live, and "Book a…" labels on Home became "Ask for a…".

**Open:** real Resend delivery, edge rate limiting, a privacy policy, a public email address, approved response time and budget bands, GAP-I02, a calendar provider, and Safari, Firefox, device and screen-reader passes.

## SF-150: Insights

Implemented on `main`. See [insights-artboard-matrix.md](../design/insights-artboard-matrix.md), [insights-editorial-register.md](../content/insights-editorial-register.md) and [insights-manual-qa.md](../qa/insights-manual-qa.md).

`/insights` is live with an empty state and `noindex`, since no article is approved. `/insights/[slug]` generates no page. The sample article is stored as a draft with no route. The playbook is withheld. The article, filter, related and `BlogPosting` code is complete, and was checked with fixtures removed before commit.

**Open:** real articles with authors and dates, the playbook decision, published-canvas comparison, native editor for Russian, and Safari, Firefox, device and screen-reader passes.

## SF-149: Company and Careers

Implemented on `main`. See [company-careers-artboard-matrix.md](../design/company-careers-artboard-matrix.md), [company-claims-register.md](../content/company-claims-register.md), [careers-positions-register.md](../content/careers-positions-register.md) and [company-careers-manual-qa.md](../qa/company-careers-manual-qa.md).

`/about`, `/how-we-work`, `/technologies` and `/careers` are live and `noindex`, and links to them across the site have turned on. No vacancy is live, so `/careers/[slug]` generates no page. Leadership, team photographs and benefits are withheld.

**Open:** founder facts in the registers, real roles and a way to apply, published-canvas comparison, native editor for Russian, and Safari, Firefox, device and screen-reader passes.

## SF-148: Work

Implemented on `main`. See [work-artboard-matrix.md](../design/work-artboard-matrix.md), [portfolio-attribution-register.md](../content/portfolio-attribution-register.md) and [work-manual-qa.md](../qa/work-manual-qa.md).

All 4 routes are live and `noindex`, and links to them across the site have turned on. All six projects are labelled concepts, with every figure removed and the reference block withheld.

**Open:** founder confirmation that all six projects are fictional, a name check, real client work to replace them, published-canvas comparison, native editor for Russian, and Safari, Firefox, device and screen-reader passes.

## SF-147: Industries

Implemented on `main`. See [industries-artboard-matrix.md](../design/industries-artboard-matrix.md), [industries-claims-register.md](../content/industries-claims-register.md) and [industries-manual-qa.md](../qa/industries-manual-qa.md).

All 7 routes are live and `noindex`, and links to them across the site have turned on. The six detail pages share one design composition, so they share one set of sections over per-industry data (GAP-D25).

**Open:** the claims register, especially certifications and compliance wording (GAP-C03) and Healthcare's regulated-software scenarios, unrelated demonstration projects (GAP-D23), published-canvas comparison, native editor for Russian, and Safari, Firefox, device and screen-reader passes.

## SF-146: Build Packages

Implemented on `main`. See [packages-artboard-matrix.md](../design/packages-artboard-matrix.md), [packages-commercial-register.md](../content/packages-commercial-register.md) and [packages-manual-qa.md](../qa/packages-manual-qa.md).

`/packages` is live and `noindex`, and links to it across the site have turned on. No price exists in the design, and none was added.

**Open:** founder decisions in the commercial register (none of its terms is verified), whether the availability section stays with no data (GAP-F04), published-canvas comparison, native editor for Russian, and Safari, Firefox, device and screen-reader passes.

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

### SF-150: Insights

Implemented on `main`. See [insights-artboard-matrix.md](../design/insights-artboard-matrix.md), [insights-editorial-register.md](../content/insights-editorial-register.md) and [insights-manual-qa.md](../qa/insights-manual-qa.md).

`/insights` is live with an empty state and `noindex`, since no article is approved. `/insights/[slug]` generates no page. The sample article is stored as a draft with no route. The playbook is withheld. The article, filter, related and `BlogPosting` code is complete, and was checked with fixtures removed before commit.

**Open:** real articles with authors and dates, the playbook decision, published-canvas comparison, native editor for Russian, and Safari, Firefox, device and screen-reader passes.

## SF-149: Company and Careers

Implemented on `main`. See [company-careers-artboard-matrix.md](../design/company-careers-artboard-matrix.md), [company-claims-register.md](../content/company-claims-register.md), [careers-positions-register.md](../content/careers-positions-register.md) and [company-careers-manual-qa.md](../qa/company-careers-manual-qa.md).

`/about`, `/how-we-work`, `/technologies` and `/careers` are live and `noindex`, and links to them across the site have turned on. No vacancy is live, so `/careers/[slug]` generates no page. Leadership, team photographs and benefits are withheld.

**Open:** founder facts in the registers, real roles and a way to apply, published-canvas comparison, native editor for Russian, and Safari, Firefox, device and screen-reader passes.

## SF-148: Work

Implemented on `main`. See [work-artboard-matrix.md](../design/work-artboard-matrix.md), [portfolio-attribution-register.md](../content/portfolio-attribution-register.md) and [work-manual-qa.md](../qa/work-manual-qa.md).

All 4 routes are live and `noindex`, and links to them across the site have turned on. All six projects are labelled concepts, with every figure removed and the reference block withheld.

**Open:** founder confirmation that all six projects are fictional, a name check, real client work to replace them, published-canvas comparison, native editor for Russian, and Safari, Firefox, device and screen-reader passes.

## SF-147: Industries

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
