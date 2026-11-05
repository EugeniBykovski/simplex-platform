# Implementation roadmap

**Jira was not accessible during SF-140** (GAP-J01). Ticket names come from the SF-140 brief. SF-142's scope is not named there, and is inferred as "design system and shared components" from its position between setup and the page tickets. **Reconcile this document with Jira before SF-141 starts.**

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
| SF-142 | Design system and shared components (inferred, see note) | 8 | 8 | 0 | 0 | 0 |
| SF-143 | Homepage | 14 | 4 | 4 | 6 | 1 |
| SF-144 | Agent | 4 | 2 | 0 | 2 | 1 |
| SF-145 | Services | 30 | 26 | 0 | 4 | 13 |
| SF-146 | Packages | 5 | 2 | 0 | 3 | 1 |
| SF-147 | Industries | 11 | 7 | 0 | 4 | 7 |
| SF-148 | Work | 9 | 4 | 1 | 4 | 4 |
| SF-149 | Company and careers | 17 | 7 | 0 | 10 | 5 |
| SF-150 | Insights | 4 | 2 | 0 | 2 | 2 |
| SF-151 | Contact | 5 | 2 | 1 | 2 | 2 |
| SF-152 | Legal and system | 6 | 4 | 0 | 2 | 4 |
| **Total** |  | 116 | 71 | 6 | 39 | 40 |

## SF-141: Setup. Partly done

The owner asked for the frontend architecture and i18n during SF-140, so the second commit on this branch already contains:

- Next.js 16, React 19, strict TypeScript, Tailwind 4, ESLint, Prettier, pnpm.
- `next-intl` with `en` and `ru`, proxy, typed messages and translation-status gating.
- SEO metadata helper with canonical, hreflang and robots rules.
- Geist and Geist Mono with Cyrillic.
- Locale switcher, localised 404, a foundation placeholder page.
- `check-i18n` and `validate-docs`.

**Remaining for SF-141:** reconcile with Jira, CI, Playwright setup, deployment target, environments, security headers baseline, favicon placeholder. If the owner prefers the ticket's original sequence, the foundation is a separate commit and can be dropped cleanly.

## SF-142: Design system and shell

**This is the critical dependency.** Page work must not start until it lands, or the pages will fork primitives and drift.

1. Port tokens and design CSS, resolving the cascade ([system-design.md](system-design.md)). Test GAP-D04.
2. Build `SiteLayout`, `Header`, `MegaMenu`, `MobileMenu`, `Footer`, in both languages. Check header fit in Russian at 1101–1280.
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
| SF-153 SEO | `robots.ts`, `sitemap.ts`, JSON-LD builders, root metadata, validation. [seo-architecture.md](../seo/seo-architecture.md) |
| SF-154 Assets and performance | Asset pipeline, favicons, Open Graph art, AVIF and WebP, CWV budgets, glass and blur testing. [asset-manifest.md](../design/asset-manifest.md) |
| SF-155 Visual QA | Playwright suites, reference capture, deviations log. [strategy](../qa/visual-regression-strategy.md), [matrix](../qa/test-matrix.md) |
| SF-156 Release | Domain, DNS, Resend verification, security headers, Search Console, launch checklist, the index switch, legal sign-off |

## Before launch

Blockers from the [gap register](../design/design-gap-register.md): GAP-C01, GAP-C02, GAP-C08, GAP-C09, GAP-F01. Launch needs owner input on all five, and no code can close them.

## Board assignment detail

### SF-140: Architecture and inventory (this ticket)

- **Compositions:** `Audit`, `Handoff`, `Main`
- **Artboards:** `Main`, `Audit`, `Handoff`

### SF-142: Design system and shared components (inferred, see note)

- **Compositions:** `Components`, `Footer`, `Logo`, `Nav`, `System`, `UiKit`, `UiKitComponents`, `UiKitGlass`
- **Artboards:** `Logo`, `System`, `Components`, `Nav`, `Footer`, `UiKit`, `UiKitComponents`, `UiKitGlass`

### SF-143: Homepage

- **Compositions:** `Home`
- **Routes:** `/`
- **Artboards:** `Home`, `Home-p2`, `Home-p3`, `Home-p4`, `HomeTablet`, `HomeTablet-p2`, `HomeTablet-p3`, `HomeTablet-p4`, `HomeMobile`, `HomeMobile-p2`, `HomeMobile-p3`, `HomeMobile-p4`, `HomeMobile-p5`, `HomeMenuMobile`

### SF-144: Agent

- **Compositions:** `Agent`
- **Routes:** `/agent`
- **Artboards:** `Agent`, `Agent-p2`, `AgentMobile`, `AgentMobile-p2`

### SF-145: Services

- **Compositions:** `ServicePage`, `Services`
- **Routes:** `/services`, `/services/custom-software-development`, `/services/enterprise-software`, `/services/web-development`, `/services/mobile-development`, `/services/desktop-development`, `/services/ai-engineering`, `/services/cloud-devops`, `/services/architecture-consulting`, `/services/product-design`, `/services/legacy-modernization`, `/services/quality-engineering`, `/services/dedicated-teams`
- **Artboards:** `Services`, `Services-p2`, `ServicesMobile`, `ServicesMobile-p2`, `ServicePage`, `ServicePage-p2`, `svc-enterprise-software`, `svc-enterprise-software-p2`, `svc-web-development`, `svc-web-development-p2`, `svc-mobile-development`, `svc-mobile-development-p2`, `svc-desktop-development`, `svc-desktop-development-p2`, `svc-ai-engineering`, `svc-ai-engineering-p2`, `svc-cloud-devops`, `svc-cloud-devops-p2`, `svc-architecture-consulting`, `svc-architecture-consulting-p2`, `svc-product-design`, `svc-product-design-p2`, `svc-legacy-modernization`, `svc-legacy-modernization-p2`, `svc-quality-engineering`, `svc-quality-engineering-p2`, `svc-dedicated-teams`, `svc-dedicated-teams-p2`, `ServicePageMobile`, `ServicePageMobile-p2`

### SF-146: Packages

- **Compositions:** `Packages`
- **Routes:** `/packages`
- **Artboards:** `Packages`, `Packages-p2`, `PackagesMobile`, `PackagesMobile-p2`, `PackagesMobile-p3`

### SF-147: Industries

- **Compositions:** `Industries`, `IndustryPage`
- **Routes:** `/industries`, `/industries/fintech`, `/industries/healthcare`, `/industries/ecommerce`, `/industries/saas`, `/industries/enterprise`, `/industries/logistics`
- **Artboards:** `Industries`, `IndustriesMobile`, `IndustriesMobile-p2`, `IndustryPage`, `ind-healthcare`, `ind-ecommerce`, `ind-saas`, `ind-enterprise`, `ind-logistics`, `IndustryPageMobile`, `IndustryPageMobile-p2`

### SF-148: Work

- **Compositions:** `CasePage`, `Work`
- **Routes:** `/work`, `/work/ledgerline`, `/work/carepath`, `/work/routewise`
- **Artboards:** `Work`, `WorkTablet`, `WorkMobile`, `WorkMobile-p2`, `CasePage`, `case-carepath`, `case-routewise`, `CasePageMobile`, `CasePageMobile-p2`

### SF-149: Company and careers

- **Compositions:** `About`, `Careers`, `HowWeWork`, `Job`, `Technologies`
- **Routes:** `/how-we-work`, `/about`, `/technologies`, `/careers`, `/careers/[slug]`
- **Artboards:** `HowWeWork`, `HowWeWork-p2`, `HowWeWorkMobile`, `HowWeWorkMobile-p2`, `About`, `About-p2`, `AboutMobile`, `AboutMobile-p2`, `Technologies`, `TechnologiesMobile`, `TechnologiesMobile-p2`, `TechnologiesMobile-p3`, `Careers`, `CareersMobile`, `CareersMobile-p2`, `Job`, `JobMobile`

### SF-150: Insights

- **Compositions:** `Article`, `Insights`
- **Routes:** `/insights`, `/insights/[slug]`
- **Artboards:** `Insights`, `InsightsMobile`, `Article`, `ArticleMobile`

### SF-151: Contact

- **Compositions:** `Contact`, `ThankYou`
- **Routes:** `/contact`, `/contact/thank-you`
- **Artboards:** `Contact`, `ContactTablet`, `ContactMobile`, `ThankYou`, `ThankYouMobile`

### SF-152: Legal and system

- **Compositions:** `LegalPage`, `NotFound`
- **Routes:** `/privacy-policy`, `/cookie-policy`, `/terms`, `/404`
- **Artboards:** `LegalPage`, `legal-cookie-policy`, `legal-terms`, `LegalMobile`, `NotFound`, `NotFoundMobile`
