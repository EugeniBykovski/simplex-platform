# Artboard inventory

Generated from the structured source of [SimpleX — Website & Identity](https://claude.ai/artifact/SHq68U3eVzySjKWCjgFwkG), version `1793869596-167d`. Machine-readable twin: [artboard-inventory.json](artboard-inventory.json).

## How to read this

The canvas holds **116 boards on 11 design pages, but only 31 unique compositions.** The other 85 boards are thin wrappers that fall into two groups:

- **Crop tiles.** A long page is cut into frames because a board cannot exceed 8000 px. `Home.dc.html`, `Home-p2`, `Home-p3` and `Home-p4` are one page, not four.
- **Slug instances and responsive frames.** `svc-web-development.dc.html` is `ServicePage` with a `slug` prop. `HomeMobile.dc.html` is `Home` rendered in a 390 px frame.

**Mobile and tablet boards are not separate designs.** They render the same source at another width, and `simplex.css` container queries change the layout. So a width without a board is still specified, by CSS. See [responsive-specification.md](responsive-specification.md).

Tile continuity check: every multi-part page's crop offsets are contiguous.

## Coverage

| Device | Frame width | Boards |
|---|---|---|
| desktop | 1440 | 71 |
| mobile | 390 | 39 |
| tablet | 768 | 6 |

| Kind | Boards | Meaning |
|---|---|---|
| reference | 3 | Project index, audit, handoff: never shipped |
| design-system | 6 | Identity, tokens, UI kit |
| shared-component | 2 | Header, footer |
| page | 105 | Website route |

| Design page | Page ID | Boards | Owner |
|---|---|---|---|
| Foundations | foundations | 11 | SF-142 (3 reference boards: SF-140) |
| Homepage | home | 14 | SF-143 |
| SimpleX Agent | agent | 4 | SF-144 |
| Services | services | 30 | SF-145 |
| Build packages | packages | 5 | SF-146 |
| Industries | industries | 11 | SF-147 |
| Work & case studies | work | 9 | SF-148 |
| Company & careers | company | 17 | SF-149 |
| Insights | insights | 4 | SF-150 |
| Contact | contact | 5 | SF-151 |
| Legal & system | system | 6 | SF-152 |

## Every board

Frames are `width × height` in CSS px. `Crop Y` is the offset into the source composition. All boards are fluid (`expand: fill`).

### Foundations (`foundations`)

| Artboard ID | Screen title | Route | Device | Frame | Source | Slug or state | Tile | Crop Y | Owner |
|---|---|---|---|---|---|---|---|---|---|
| `Main` | 00 · Project index | — | desktop | 1440 × 2573 | Main | — | — | 0 | SF-140 |
| `Audit` | 01 · Reference audit | — | desktop | 1440 × 3130 | Audit | — | — | 0 | SF-140 |
| `Logo` | 02 · SimpleX identity | — | desktop | 1440 × 7450 | Logo | — | — | 0 | SF-142 |
| `System` | 03 · Design system tokens | — | desktop | 1440 × 5154 | System | — | — | 0 | SF-142 |
| `Components` | 04 · Component library | — | desktop | 1440 × 4690 | Components | — | — | 0 | SF-142 |
| `Nav` | Component · Header + mega menu | — | desktop | 1440 × 700 | Nav | — | — | 0 | SF-142 |
| `Footer` | Component · Footer | — | desktop | 1440 × 863 | Footer | — | — | 0 | SF-142 |
| `Handoff` | 05 · Handoff | — | desktop | 1440 × 4588 | Handoff | — | — | 0 | SF-140 |
| `UiKit` | 06a · UI Kit — foundations | — | desktop | 1440 × 5760 | UiKit | — | — | 0 | SF-142 |
| `UiKitComponents` | 06b · UI Kit — components & states | — | desktop | 1440 × 5880 | UiKitComponents | — | — | 0 | SF-142 |
| `UiKitGlass` | 07 · UI Kit — liquid glass, blocks & assets | — | desktop | 1440 × 6832 | UiKitGlass | — | — | 0 | SF-142 |

### Homepage (`home`)

| Artboard ID | Screen title | Route | Device | Frame | Source | Slug or state | Tile | Crop Y | Owner |
|---|---|---|---|---|---|---|---|---|---|
| `Home` | / · Desktop 1440 · part 1/4 | / | desktop | 1440 × 7699 | Home | — | 1/4 | 0 | SF-143 |
| `Home-p2` | / · Desktop 1440 · part 2/4 | / | desktop | 1440 × 6677 | Home | — | 2/4 | 7699 | SF-143 |
| `Home-p3` | / · Desktop 1440 · part 3/4 | / | desktop | 1440 × 7172 | Home | — | 3/4 | 14376 | SF-143 |
| `Home-p4` | / · Desktop 1440 · part 4/4 | / | desktop | 1440 × 2020 | Home | — | 4/4 | 21548 | SF-143 |
| `HomeTablet` | / · Tablet 768 · part 1/4 | / | tablet | 768 × 7650 | Home | — | 1/4 | 0 | SF-143 |
| `HomeTablet-p2` | / · Tablet 768 · part 2/4 | / | tablet | 768 × 5953 | Home | — | 2/4 | 7650 | SF-143 |
| `HomeTablet-p3` | / · Tablet 768 · part 3/4 | / | tablet | 768 × 6858 | Home | — | 3/4 | 13603 | SF-143 |
| `HomeTablet-p4` | / · Tablet 768 · part 4/4 | / | tablet | 768 × 6091 | Home | — | 4/4 | 20461 | SF-143 |
| `HomeMobile` | / · Mobile 390 · part 1/5 | / | mobile | 390 × 7383 | Home | — | 1/5 | 0 | SF-143 |
| `HomeMobile-p2` | / · Mobile 390 · part 2/5 | / | mobile | 390 × 4691 | Home | — | 2/5 | 7383 | SF-143 |
| `HomeMobile-p3` | / · Mobile 390 · part 3/5 | / | mobile | 390 × 6872 | Home | — | 3/5 | 12074 | SF-143 |
| `HomeMobile-p4` | / · Mobile 390 · part 4/5 | / | mobile | 390 × 7782 | Home | — | 4/5 | 18946 | SF-143 |
| `HomeMobile-p5` | / · Mobile 390 · part 5/5 | / | mobile | 390 × 5817 | Home | — | 5/5 | 26728 | SF-143 |
| `HomeMenuMobile` | Mobile · Menu open | / | mobile | 390 × 932 | Home | menu-open | — | 0 | SF-143 |

### SimpleX Agent (`agent`)

| Artboard ID | Screen title | Route | Device | Frame | Source | Slug or state | Tile | Crop Y | Owner |
|---|---|---|---|---|---|---|---|---|---|
| `Agent` | /agent · Desktop · part 1/2 | /agent | desktop | 1440 × 7766 | Agent | — | 1/2 | 0 | SF-144 |
| `Agent-p2` | /agent · Desktop · part 2/2 | /agent | desktop | 1440 × 1302 | Agent | — | 2/2 | 7766 | SF-144 |
| `AgentMobile` | /agent · Mobile · part 1/2 | /agent | mobile | 390 × 6615 | Agent | — | 1/2 | 0 | SF-144 |
| `AgentMobile-p2` | /agent · Mobile · part 2/2 | /agent | mobile | 390 × 7657 | Agent | — | 2/2 | 6615 | SF-144 |

### Services (`services`)

| Artboard ID | Screen title | Route | Device | Frame | Source | Slug or state | Tile | Crop Y | Owner |
|---|---|---|---|---|---|---|---|---|---|
| `Services` | /services · Desktop · part 1/2 | /services | desktop | 1440 × 7230 | Services | — | 1/2 | 0 | SF-145 |
| `Services-p2` | /services · Desktop · part 2/2 | /services | desktop | 1440 × 863 | Services | — | 2/2 | 7230 | SF-145 |
| `ServicesMobile` | /services · Mobile · part 1/2 | /services | mobile | 390 × 7479 | Services | — | 1/2 | 0 | SF-145 |
| `ServicesMobile-p2` | /services · Mobile · part 2/2 | /services | mobile | 390 × 4167 | Services | — | 2/2 | 7479 | SF-145 |
| `ServicePage` | /services/custom-software-development · part 1/2 | /services/custom-software-development | desktop | 1440 × 7592 | ServicePage | — | 1/2 | 0 | SF-145 |
| `ServicePage-p2` | /services/custom-software-development · part 2/2 | /services/custom-software-development | desktop | 1440 × 863 | ServicePage | — | 2/2 | 7592 | SF-145 |
| `svc-enterprise-software` | /services/enterprise-software · part 1/2 | /services/enterprise-software | desktop | 1440 × 7613 | ServicePage | enterprise-software | 1/2 | 0 | SF-145 |
| `svc-enterprise-software-p2` | /services/enterprise-software · part 2/2 | /services/enterprise-software | desktop | 1440 × 863 | ServicePage | enterprise-software | 2/2 | 7613 | SF-145 |
| `svc-web-development` | /services/web-development · part 1/2 | /services/web-development | desktop | 1440 × 7453 | ServicePage | web-development | 1/2 | 0 | SF-145 |
| `svc-web-development-p2` | /services/web-development · part 2/2 | /services/web-development | desktop | 1440 × 863 | ServicePage | web-development | 2/2 | 7453 | SF-145 |
| `svc-mobile-development` | /services/mobile-development · part 1/2 | /services/mobile-development | desktop | 1440 × 7401 | ServicePage | mobile-development | 1/2 | 0 | SF-145 |
| `svc-mobile-development-p2` | /services/mobile-development · part 2/2 | /services/mobile-development | desktop | 1440 × 863 | ServicePage | mobile-development | 2/2 | 7401 | SF-145 |
| `svc-desktop-development` | /services/desktop-development · part 1/2 | /services/desktop-development | desktop | 1440 × 7513 | ServicePage | desktop-development | 1/2 | 0 | SF-145 |
| `svc-desktop-development-p2` | /services/desktop-development · part 2/2 | /services/desktop-development | desktop | 1440 × 863 | ServicePage | desktop-development | 2/2 | 7513 | SF-145 |
| `svc-ai-engineering` | /services/ai-engineering · part 1/2 | /services/ai-engineering | desktop | 1440 × 7455 | ServicePage | ai-engineering | 1/2 | 0 | SF-145 |
| `svc-ai-engineering-p2` | /services/ai-engineering · part 2/2 | /services/ai-engineering | desktop | 1440 × 863 | ServicePage | ai-engineering | 2/2 | 7455 | SF-145 |
| `svc-cloud-devops` | /services/cloud-devops · part 1/2 | /services/cloud-devops | desktop | 1440 × 7488 | ServicePage | cloud-devops | 1/2 | 0 | SF-145 |
| `svc-cloud-devops-p2` | /services/cloud-devops · part 2/2 | /services/cloud-devops | desktop | 1440 × 863 | ServicePage | cloud-devops | 2/2 | 7488 | SF-145 |
| `svc-architecture-consulting` | /services/architecture-consulting · part 1/2 | /services/architecture-consulting | desktop | 1440 × 7300 | ServicePage | architecture-consulting | 1/2 | 0 | SF-145 |
| `svc-architecture-consulting-p2` | /services/architecture-consulting · part 2/2 | /services/architecture-consulting | desktop | 1440 × 863 | ServicePage | architecture-consulting | 2/2 | 7300 | SF-145 |
| `svc-product-design` | /services/product-design · part 1/2 | /services/product-design | desktop | 1440 × 7458 | ServicePage | product-design | 1/2 | 0 | SF-145 |
| `svc-product-design-p2` | /services/product-design · part 2/2 | /services/product-design | desktop | 1440 × 863 | ServicePage | product-design | 2/2 | 7458 | SF-145 |
| `svc-legacy-modernization` | /services/legacy-modernization · part 1/2 | /services/legacy-modernization | desktop | 1440 × 7486 | ServicePage | legacy-modernization | 1/2 | 0 | SF-145 |
| `svc-legacy-modernization-p2` | /services/legacy-modernization · part 2/2 | /services/legacy-modernization | desktop | 1440 × 863 | ServicePage | legacy-modernization | 2/2 | 7486 | SF-145 |
| `svc-quality-engineering` | /services/quality-engineering · part 1/2 | /services/quality-engineering | desktop | 1440 × 7327 | ServicePage | quality-engineering | 1/2 | 0 | SF-145 |
| `svc-quality-engineering-p2` | /services/quality-engineering · part 2/2 | /services/quality-engineering | desktop | 1440 × 863 | ServicePage | quality-engineering | 2/2 | 7327 | SF-145 |
| `svc-dedicated-teams` | /services/dedicated-teams · part 1/2 | /services/dedicated-teams | desktop | 1440 × 7360 | ServicePage | dedicated-teams | 1/2 | 0 | SF-145 |
| `svc-dedicated-teams-p2` | /services/dedicated-teams · part 2/2 | /services/dedicated-teams | desktop | 1440 × 863 | ServicePage | dedicated-teams | 2/2 | 7360 | SF-145 |
| `ServicePageMobile` | /services/ai-engineering · Mobile · part 1/2 | /services/ai-engineering | mobile | 390 × 7578 | ServicePage | ai-engineering | 1/2 | 0 | SF-145 |
| `ServicePageMobile-p2` | /services/ai-engineering · Mobile · part 2/2 | /services/ai-engineering | mobile | 390 × 5508 | ServicePage | ai-engineering | 2/2 | 7578 | SF-145 |

### Build packages (`packages`)

| Artboard ID | Screen title | Route | Device | Frame | Source | Slug or state | Tile | Crop Y | Owner |
|---|---|---|---|---|---|---|---|---|---|
| `Packages` | /packages · Desktop 1440 · part 1/2 | /packages | desktop | 1440 × 7507 | Packages | — | 1/2 | 0 | SF-146 |
| `Packages-p2` | /packages · Desktop 1440 · part 2/2 | /packages | desktop | 1440 × 3506 | Packages | — | 2/2 | 7507 | SF-146 |
| `PackagesMobile` | /packages · Mobile 390 · part 1/3 | /packages | mobile | 390 × 5451 | Packages | — | 1/3 | 0 | SF-146 |
| `PackagesMobile-p2` | /packages · Mobile 390 · part 2/3 | /packages | mobile | 390 × 7162 | Packages | — | 2/3 | 5451 | SF-146 |
| `PackagesMobile-p3` | /packages · Mobile 390 · part 3/3 | /packages | mobile | 390 × 3407 | Packages | — | 3/3 | 12613 | SF-146 |

### Industries (`industries`)

| Artboard ID | Screen title | Route | Device | Frame | Source | Slug or state | Tile | Crop Y | Owner |
|---|---|---|---|---|---|---|---|---|---|
| `Industries` | /industries · Desktop | /industries | desktop | 1440 × 5052 | Industries | — | — | 0 | SF-147 |
| `IndustriesMobile` | /industries · Mobile · part 1/2 | /industries | mobile | 390 × 6857 | Industries | — | 1/2 | 0 | SF-147 |
| `IndustriesMobile-p2` | /industries · Mobile · part 2/2 | /industries | mobile | 390 × 1356 | Industries | — | 2/2 | 6857 | SF-147 |
| `IndustryPage` | /industries/fintech | /industries/fintech | desktop | 1440 × 7926 | IndustryPage | — | — | 0 | SF-147 |
| `ind-healthcare` | /industries/healthcare | /industries/healthcare | desktop | 1440 × 7895 | IndustryPage | healthcare | — | 0 | SF-147 |
| `ind-ecommerce` | /industries/ecommerce | /industries/ecommerce | desktop | 1440 × 7700 | IndustryPage | ecommerce | — | 0 | SF-147 |
| `ind-saas` | /industries/saas | /industries/saas | desktop | 1440 × 7674 | IndustryPage | saas | — | 0 | SF-147 |
| `ind-enterprise` | /industries/enterprise | /industries/enterprise | desktop | 1440 × 7817 | IndustryPage | enterprise | — | 0 | SF-147 |
| `ind-logistics` | /industries/logistics | /industries/logistics | desktop | 1440 × 7840 | IndustryPage | logistics | — | 0 | SF-147 |
| `IndustryPageMobile` | /industries/healthcare · Mobile · part 1/2 | /industries/healthcare | mobile | 390 × 6261 | IndustryPage | healthcare | 1/2 | 0 | SF-147 |
| `IndustryPageMobile-p2` | /industries/healthcare · Mobile · part 2/2 | /industries/healthcare | mobile | 390 × 5181 | IndustryPage | healthcare | 2/2 | 6261 | SF-147 |

### Work & case studies (`work`)

| Artboard ID | Screen title | Route | Device | Frame | Source | Slug or state | Tile | Crop Y | Owner |
|---|---|---|---|---|---|---|---|---|---|
| `Work` | /work · Desktop | /work | desktop | 1440 × 4795 | Work | — | — | 0 | SF-148 |
| `WorkTablet` | /work · Tablet | /work | tablet | 768 × 6192 | Work | — | — | 0 | SF-148 |
| `WorkMobile` | /work · Mobile · part 1/2 | /work | mobile | 390 × 7322 | Work | — | 1/2 | 0 | SF-148 |
| `WorkMobile-p2` | /work · Mobile · part 2/2 | /work | mobile | 390 × 1356 | Work | — | 2/2 | 7322 | SF-148 |
| `CasePage` | /work/ledgerline · Layout A | /work/ledgerline | desktop | 1440 × 7764 | CasePage | — | — | 0 | SF-148 |
| `case-carepath` | /work/carepath · Layout B | /work/carepath | desktop | 1440 × 6635 | CasePage | carepath | — | 0 | SF-148 |
| `case-routewise` | /work/routewise · Layout C | /work/routewise | desktop | 1440 × 6838 | CasePage | routewise | — | 0 | SF-148 |
| `CasePageMobile` | /work/ledgerline · Mobile · part 1/2 | /work/ledgerline | mobile | 390 × 7991 | CasePage | ledgerline | 1/2 | 0 | SF-148 |
| `CasePageMobile-p2` | /work/ledgerline · Mobile · part 2/2 | /work/ledgerline | mobile | 390 × 3297 | CasePage | ledgerline | 2/2 | 7991 | SF-148 |

### Company & careers (`company`)

| Artboard ID | Screen title | Route | Device | Frame | Source | Slug or state | Tile | Crop Y | Owner |
|---|---|---|---|---|---|---|---|---|---|
| `HowWeWork` | /how-we-work · part 1/2 | /how-we-work | desktop | 1440 × 7925 | HowWeWork | — | 1/2 | 0 | SF-149 |
| `HowWeWork-p2` | /how-we-work · part 2/2 | /how-we-work | desktop | 1440 × 1381 | HowWeWork | — | 2/2 | 7925 | SF-149 |
| `HowWeWorkMobile` | /how-we-work · Mobile · part 1/2 | /how-we-work | mobile | 390 × 7699 | HowWeWork | — | 1/2 | 0 | SF-149 |
| `HowWeWorkMobile-p2` | /how-we-work · Mobile · part 2/2 | /how-we-work | mobile | 390 × 5636 | HowWeWork | — | 2/2 | 7699 | SF-149 |
| `About` | /about · part 1/2 | /about | desktop | 1440 × 7799 | About | — | 1/2 | 0 | SF-149 |
| `About-p2` | /about · part 2/2 | /about | desktop | 1440 × 1302 | About | — | 2/2 | 7799 | SF-149 |
| `AboutMobile` | /about · Mobile · part 1/2 | /about | mobile | 390 × 6543 | About | — | 1/2 | 0 | SF-149 |
| `AboutMobile-p2` | /about · Mobile · part 2/2 | /about | mobile | 390 × 7811 | About | — | 2/2 | 6543 | SF-149 |
| `Technologies` | /technologies | /technologies | desktop | 1440 × 6804 | Technologies | — | — | 0 | SF-149 |
| `TechnologiesMobile` | /technologies · Mobile · part 1/3 | /technologies | mobile | 390 × 681 | Technologies | — | 1/3 | 0 | SF-149 |
| `TechnologiesMobile-p2` | /technologies · Mobile · part 2/3 | /technologies | mobile | 390 × 8000 | Technologies | — | 2/3 | 681 | SF-149 |
| `TechnologiesMobile-p3` | /technologies · Mobile · part 3/3 | /technologies | mobile | 390 × 5072 | Technologies | — | 3/3 | 8681 | SF-149 |
| `Careers` | /careers | /careers | desktop | 1440 × 6527 | Careers | — | — | 0 | SF-149 |
| `CareersMobile` | /careers · Mobile · part 1/2 | /careers | mobile | 390 × 7204 | Careers | — | 1/2 | 0 | SF-149 |
| `CareersMobile-p2` | /careers · Mobile · part 2/2 | /careers | mobile | 390 × 2838 | Careers | — | 2/2 | 7204 | SF-149 |
| `Job` | /careers/[job-slug] | /careers/[slug] | desktop | 1440 × 3447 | Job | — | — | 0 | SF-149 |
| `JobMobile` | /careers/[job-slug] · Mobile | /careers/[slug] | mobile | 390 × 5023 | Job | — | — | 0 | SF-149 |

### Insights (`insights`)

| Artboard ID | Screen title | Route | Device | Frame | Source | Slug or state | Tile | Crop Y | Owner |
|---|---|---|---|---|---|---|---|---|---|
| `Insights` | /insights | /insights | desktop | 1440 × 4589 | Insights | — | — | 0 | SF-150 |
| `InsightsMobile` | /insights · Mobile | /insights | mobile | 390 × 7810 | Insights | — | — | 0 | SF-150 |
| `Article` | /insights/[article-slug] | /insights/[slug] | desktop | 1440 × 5038 | Article | — | — | 0 | SF-150 |
| `ArticleMobile` | /insights/[article-slug] · Mobile | /insights/[slug] | mobile | 390 × 6479 | Article | — | — | 0 | SF-150 |

### Contact (`contact`)

| Artboard ID | Screen title | Route | Device | Frame | Source | Slug or state | Tile | Crop Y | Owner |
|---|---|---|---|---|---|---|---|---|---|
| `Contact` | /contact | /contact | desktop | 1440 × 3235 | Contact | — | — | 0 | SF-151 |
| `ContactTablet` | /contact · Tablet | /contact | tablet | 768 × 4530 | Contact | — | — | 0 | SF-151 |
| `ContactMobile` | /contact · Mobile | /contact | mobile | 390 × 5262 | Contact | — | — | 0 | SF-151 |
| `ThankYou` | /contact/thank-you | /contact/thank-you | desktop | 1440 × 2525 | ThankYou | — | — | 0 | SF-151 |
| `ThankYouMobile` | /contact/thank-you · Mobile | /contact/thank-you | mobile | 390 × 3467 | ThankYou | — | — | 0 | SF-151 |

### Legal & system (`system`)

| Artboard ID | Screen title | Route | Device | Frame | Source | Slug or state | Tile | Crop Y | Owner |
|---|---|---|---|---|---|---|---|---|---|
| `LegalPage` | /privacy-policy | /privacy-policy | desktop | 1440 × 3213 | LegalPage | — | — | 0 | SF-152 |
| `legal-cookie-policy` | /cookie-policy | /cookie-policy | desktop | 1440 × 3244 | LegalPage | cookie | — | 0 | SF-152 |
| `legal-terms` | /terms | /terms | desktop | 1440 × 2902 | LegalPage | terms | — | 0 | SF-152 |
| `LegalMobile` | /privacy-policy · Mobile | /privacy-policy | mobile | 390 × 4274 | LegalPage | privacy | — | 0 | SF-152 |
| `NotFound` | /404 | /404 | desktop | 1440 × 1977 | NotFound | — | — | 0 | SF-152 |
| `NotFoundMobile` | /404 · Mobile | /404 | mobile | 390 × 2466 | NotFound | — | — | 0 | SF-152 |

## Composition profiles

One profile per unique source. Every wrapper board inherits its source's profile. Full class lists are in the JSON.

### About

- **Source:** `project/About.dc.html` (13,204 bytes). **Document title:** About — SimpleX
- **H1:** Simple to use. Simple to change.
- **Interaction:** None beyond link and hover states
- **Typography:** `eyebrow`, `line-mask`, `prose`, `t-body`, `t-display`, `t-grad`, `t-h1`, `t-h2`, `t-h3`, `t-h4`, `t-h5`, `t-lead`, `t-mono`, `t-small`, `t-xs`
- **Grounds:** `bg-cta`, `bg-horizon`, `bg-ink`, `bg-mist`, `dark`, `photo`, `photo-tower`
- **Surfaces:** `comp-3`, `comp-grid`, `comp-tile`, `glass`, `glass-dark`, `gx-head`, `gx-tag`, `paper-card`
- **Layout:** `bento`, `grid-12`, `grid-2`, `grid-3`, `grid-4`, `split`, `split-even`, `sticky-col`, `wrap`, `wrap-row`
- **Motion hooks:** `is-live`, `line-mask`, `reveal`
- **Controls:** `btn`, `btn-glass`, `btn-lg`, `btn-light`, `btn-primary`, `text-link`
- **Missing images:** Portrait · 4:5; Team photograph — real people at work, not stock; Workshop or office photograph
- **Links to:** `/`, `/careers`, `/contact`, `/how-we-work`

| # | Section | Ground | Block | Heading |
|---|---|---|---|---|
| 1 | section | `bg-horizon` | — | Simple to use. Simple to change. |
| 2 | section | white | — | The name is the brief. |
| 3 | section | `bg-ink` | — | Clarity over cleverness |
| 4 | section | `bg-mist` | — | How we make decisions when nobody’s watching. |
| 5 | section | white | — | Senior people, small teams, written decisions. |
| 6 | section | `bg-mist` | — | The people accountable. |
| 7 | section | white | — | Curious, candid, calm under pressure. |
| 8 | section | `photo photo-tower` | gx-block · TRUST CENTER | Safe hands for your code and your data. |
| 9 | section | `bg-cta dark` | — | Want to build with us? |

### Agent

- **Source:** `project/Agent.dc.html` (28,152 bytes). **Document title:** SimpleX Agent
- **H1:** An engineering agent that speaks your stack.
- **Interaction:** Stack picker tabs (5 stacks), ROI estimator (3 range inputs → hours, FTE, EUR/month), FAQ accordions
- **Typography:** `eyebrow`, `line-mask`, `t-body`, `t-grad`, `t-h1`, `t-h2`, `t-h3`, `t-h4`, `t-h5`, `t-lead`, `t-mono`, `t-small`, `t-xs`
- **Grounds:** `bg-cta`, `bg-ink`, `bg-mist`, `dark`, `orb`, `orbs`, `paper`, `viz`, `viz-light`
- **Surfaces:** `glass`, `glass-dark`, `gx-2`, `gx-bar`, `gx-dark`, `gx-head`, `gx-label`, `gx-num`, `gx-panel`, `gx-range`, `gx-row`, `gx-tag`, `widget`, `widget-dark`, `widget-grid`, `widget-stack`
- **Layout:** `grid-2`, `grid-3`, `grid-4`, `split`, `split-even`, `widget-grid`, `wrap`, `wrap-row`
- **Motion hooks:** `float-w`, `line-mask`, `pulse`
- **Controls:** `acc`, `btn`, `btn-ghost`, `btn-glass`, `btn-lg`, `btn-light`, `btn-primary`, `gx-range`, `tab`, `tabs`
- **Local breakpoints:** `@container sx (max-width:1100px)`; `@container sx (max-width:600px)`
- **Links to:** `/`, `/contact`, `/services/ai-engineering`

| # | Section | Ground | Block | Heading |
|---|---|---|---|---|
| 1 | section | `bg-ink` | HERO | An engineering agent that speaks your stack. |
| 2 | section | `bg-mist` | STACK PICKER | Pick a stack. See the ecosystem it builds. |
| 3 | section | `bg-ink` | HOW | Four steps from repository to running ecosystem. |
| 4 | section | `bg-mist` | CAPABILITIES WIDGET WALL | The repetitive 70% — done properly. |
| 5 | section | white | EMBED | Put the agent inside your own product. |
| 6 | section | `bg-ink` | DEPLOYMENT OPTIONS | Three deployment models. |
| 7 | section | white | — | Questions about the agent. |
| 8 | section | `paper` | gx-block · AGENT ROI | What would the agent give back to your team? |
| 9 | section | `bg-cta dark` | — | See it work on your code. |

### Article

- **Source:** `project/Article.dc.html` (10,711 bytes). **Document title:** The quiet cost of a distributed monolith — SimpleX Insights
- **H1:** The quiet cost of a distributed monolith
- **Interaction:** Reading progress, copy link (1.8 s confirmation), share links, TOC
- **Typography:** `prose`, `t-h1`, `t-h3`, `t-h4`, `t-h5`, `t-lead`, `t-mono`, `t-small`, `t-xs`
- **Grounds:** `bg-mist`, `viz`, `viz-enterprise`, `viz-fintech`, `viz-saas`
- **Surfaces:** `card-hover`, `paper-card`, `solid`
- **Layout:** `grid-3`, `wrap`, `wrap-narrow`, `wrap-row`
- **Motion hooks:** `card-hover`, `progress-bar`
- **Controls:** `btn-icon`, `link-arrow`
- **Local breakpoints:** `@container sx (max-width: 1100px)`
- **Links to:** `/`, `/insights`, `/insights/[slug]`, `/services/architecture-consulting`

| # | Section | Ground | Block | Heading |
|---|---|---|---|---|
| 1 | header | `bg-mist` | — | The quiet cost of a distributed monolith |
| 2 | section | `bg-mist` | — | Related articles |

### Audit

- **Source:** `project/Audit.dc.html` (9,155 bytes). **Document title:** Reference audit
- **H1:** What makes the reference feel premium — and what SimpleX keeps.
- **Interaction:** None beyond link and hover states
- **Typography:** `eyebrow`, `t-body`, `t-h1`, `t-h2`, `t-h4`, `t-h5`, `t-lead`, `t-mono`, `t-small`
- **Grounds:** `bg-ink`, `bg-mist`
- **Surfaces:** `glass-dark`, `solid`
- **Layout:** `grid-12`, `grid-3`, `split`, `wrap`, `wrap-row`

| # | Section | Ground | Block | Heading |
|---|---|---|---|---|
| 1 | section | `bg-mist` | — | What makes the reference feel premium — and what SimpleX keeps. |
| 2 | section | `bg-mist` | — | — |
| 3 | section | `bg-ink` | — | Six principles carried forward. |

### Careers

- **Source:** `project/Careers.dc.html` (12,430 bytes). **Document title:** Careers — SimpleX
- **H1:** Do the best work of your career.
- **Interaction:** Team filter with counts, result count (aria-live), empty state
- **Typography:** `eyebrow`, `line-mask`, `t-body`, `t-display`, `t-grad`, `t-h1`, `t-h2`, `t-h4`, `t-h5`, `t-lead`, `t-mono`, `t-small`, `t-xs`
- **Grounds:** `bg-cta`, `bg-horizon`, `bg-ink`, `bg-mist`, `dark`
- **Surfaces:** `glass-dark`, `gx-head`, `gx-tag`, `paper-card`, `solid`
- **Layout:** `grid-3`, `grid-4`, `process`, `split`, `wrap`, `wrap-row`
- **Motion hooks:** `is-live`, `line-mask`, `reveal`
- **Controls:** `btn`, `btn-glass`, `btn-lg`, `btn-primary`, `filter-btn`
- **Local breakpoints:** `@container sx (max-width: 860px)`
- **Links to:** `/`, `/about`, `/careers/[slug]`, `/contact`

| # | Section | Ground | Block | Heading |
|---|---|---|---|---|
| 1 | section | `bg-horizon` | — | Do the best work of your career. |
| 2 | section | white | — | What working here feels like. |
| 3 | section | `bg-ink` | — | Designed around how people actually work. |
| 4 | section | `bg-mist` | — | Find your role. |
| 5 | section | white | — | Four steps. No trick questions. |
| 6 | section | white | gx-block · FIRST 90 DAYS | Productive in weeks, not months. |
| 7 | section | `bg-cta dark` | — | Don’t see your role? |

### CasePage

- **Source:** `project/CasePage.dc.html` (35,582 bytes). **Document title:** Case study — SimpleX
- **H1:** {{c.name}}
- **Interaction:** Layouts A/B/C by slug, sticky TOC (layout B), before/after range slider, next-project nav
- **Typography:** `eyebrow`, `t-body`, `t-display`, `t-grad`, `t-h1`, `t-h2`, `t-h3`, `t-h4`, `t-h5`, `t-lead`, `t-mono`, `t-small`, `t-xs`
- **Grounds:** `bg-horizon`, `bg-ink`, `bg-spectrum`, `dark`, `paper`, `viz`, `viz-fintech`, `viz-healthcare`, `viz-light`, `viz-logistics`
- **Surfaces:** `card-hover`, `glass`, `glass-dark`, `glass-frost`, `gx-head`, `gx-tag`, `paper-card`
- **Layout:** `grid-2`, `grid-3`, `grid-4`, `process`, `split`, `sticky-col`, `wrap`, `wrap-narrow`, `wrap-row`
- **Motion hooks:** `ba`, `ba-after`, `ba-before`, `ba-chip`, `ba-handle`, `ba-pane`, `card-hover`, `is-live`, `reveal`
- **Controls:** `btn`, `btn-ghost`, `btn-lg`, `btn-light`, `btn-primary`
- **Local breakpoints:** `@container sx (max-width: 1000px)`
- **Links to:** `/`, `/contact`, `/work`

| # | Section | Ground | Block | Heading |
|---|---|---|---|---|
| 1 | section | `bg-ink` | LAYOUT A — Editorial long-form | {{c.name}} |
| 2 | section | white | — | — |
| 3 | section | `bg-ink` | — | How it fits together. |
| 4 | section | white | — | What changed. |
| 5 | section | `bg-horizon` | LAYOUT B — Sticky sidebar | {{c.name}} |
| 6 | section | white | — | — |
| 7 | section | `viz {{c.viz}}` | LAYOUT C — Visual-first bands | {{c.name}} |
| 8 | section | white | — | {{c.overview}} |
| 9 | section | `bg-ink` | — | Streaming in, decisions out. |
| 10 | section | `bg-spectrum` | — | What changed. |
| 11 | section | white | gx-block · BEFORE AFTER | Before and after {{c.name}}. |
| 12 | section | `paper` | Next project + CTA (all layouts) | — |
| 13 | section | `bg-ink` | — | Facing a problem like this? |

### Components

- **Source:** `project/Components.dc.html` (19,178 bytes). **Document title:** Component library
- **H1:** Every piece, every state.
- **Interaction:** Interactive component specimens, including cookie banner and dialog
- **Typography:** `eyebrow`, `t-grad`, `t-h1`, `t-h3`, `t-h4`, `t-h5`, `t-lead`, `t-small`, `t-xs`
- **Grounds:** `bg-horizon`, `bg-ink`, `bg-mist`, `dark`, `paper`, `viz`, `viz-fintech`, `viz-light`
- **Surfaces:** `card-hover`, `glass`, `glass-dark`, `glass-frost`, `solid`
- **Layout:** `grid-2`, `grid-3`, `split`, `wrap`, `wrap-row`
- **Motion hooks:** `card-hover`
- **Controls:** `acc`, `btn`, `btn-ghost`, `btn-icon`, `btn-lg`, `btn-light`, `btn-primary`, `btn-sm`, `check`, `filter-btn`, `input`, `link-arrow`, `opt`, `search`, `select`, `tab`, `tabs`, `text-link`, `textarea`, `toggle-chip`
- **Links to:** `/cookie-policy`

| # | Section | Ground | Block | Heading |
|---|---|---|---|---|
| 1 | section | `bg-mist` | — | Every piece, every state. |
| 2 | section | white | Buttons | Buttons & links |
| 3 | section | `paper` | Forms | Form controls |
| 4 | section | white | Navigation patterns | Tabs, filters, breadcrumbs, accordion |
| 5 | section | `bg-ink` | Cards | Cards on ink |
| 6 | section | `bg-mist` | — | Cards on light |
| 7 | section | white | System states | Empty, loading & consent |

### Contact

- **Source:** `project/Contact.dc.html` (17,264 bytes). **Document title:** Contact — SimpleX
- **H1:** Tell us what you’re building.
- **Interaction:** Lead form: idle, validation, loading, success, network error; scheduler: day, slot, confirm, booked
- **Typography:** `line-mask`, `t-grad`, `t-h1`, `t-h2`, `t-h3`, `t-h4`, `t-lead`, `t-mono`, `t-small`, `t-xs`
- **Grounds:** `bg-horizon`, `paper`
- **Surfaces:** `glass`, `gx-label`, `gx-panel`, `gx-tag`
- **Layout:** `grid-2`, `wrap`, `wrap-row`
- **Motion hooks:** `is-live`, `line-mask`
- **Controls:** `btn`, `btn-ghost`, `btn-lg`, `btn-primary`, `check`, `input`, `opt`, `sched-day`, `sched-days`, `sched-slot`, `sched-slots`, `select`, `text-link`, `textarea`, `toggle-chip`
- **Local breakpoints:** `@container sx (max-width: 1000px)`
- **Links to:** `/`, `/careers`, `/contact/thank-you`, `/privacy-policy`

| # | Section | Ground | Block | Heading |
|---|---|---|---|---|
| 1 | main | `bg-horizon` | — | Tell us what you’re building. |
| 2 | section | `paper` | gx-block · SCHEDULER | Book 30 minutes with a senior engineer. |

### Footer

- **Source:** `project/Footer.dc.html` (4,514 bytes). **Document title:** SimpleX footer
- **Interaction:** None beyond link and hover states
- **Typography:** `t-body`, `t-small`, `t-xs`
- **Grounds:** `dark`
- **Layout:** `wrap`, `wrap-row`
- **Controls:** `link-arrow`
- **Links to:** `/`, `/about`, `/agent`, `/careers`, `/contact`, `/cookie-policy`, `/how-we-work`, `/industries/ecommerce`, `/industries/enterprise`, `/industries/fintech`, `/industries/healthcare`, `/industries/logistics`, `/industries/saas`, `/insights`, `/packages`, `/privacy-policy`, `/services`, `/services/ai-engineering` …

### Handoff

- **Source:** `project/Handoff.dc.html` (12,800 bytes). **Document title:** Developer handoff
- **H1:** Build notes for engineering.
- **Interaction:** None beyond link and hover states
- **Typography:** `eyebrow`, `t-h1`, `t-h3`, `t-lead`, `t-mono`, `t-small`, `t-xs`
- **Grounds:** `bg-ink`, `bg-mist`, `paper`
- **Surfaces:** `glass-dark`, `paper-card`, `solid`
- **Layout:** `grid-2`, `grid-3`, `grid-4`, `split`, `wrap`, `wrap-row`

| # | Section | Ground | Block | Heading |
|---|---|---|---|---|
| 1 | section | `bg-ink` | — | Build notes for engineering. |
| 2 | section | `bg-mist` | — | Page & route inventory |
| 3 | section | white | — | Component inventory |
| 4 | section | `bg-ink` | — | Motion behaviour |
| 5 | section | white | — | Responsive implementation |
| 6 | section | `paper` | — | Unresolved content placeholders |

### Home

- **Source:** `project/Home.dc.html` (63,864 bytes). **Document title:** SimpleX — Complex engineering. Clear outcomes.
- **H1:** Complex engineering. Clear outcomes.
- **Interaction:** Tech tabs (8), industry show-more, estimator (type, platforms, stage, pace → roles, team size, model; no price computed), pinned hero, stacked cards, scroll story
- **Typography:** `eyebrow`, `line-mask`, `t-body`, `t-display`, `t-grad`, `t-h1`, `t-h2`, `t-h3`, `t-h4`, `t-lead`, `t-mono`, `t-small`, `t-tone`, `t-xs`
- **Grounds:** `bg-cta`, `bg-horizon`, `bg-ink`, `bg-ink-left`, `bg-mist`, `dark`, `grain`, `mesh-graphite`, `mesh-light`, `orb`, `orbs`, `paper`, `tex-grid`, `viz`, `viz-ecommerce`, `viz-enterprise`, `viz-fintech`, `viz-healthcare`, `viz-logistics`, `viz-saas`
- **Surfaces:** `card-hover`, `glass-dark`, `glass-frost`, `gx-2`, `gx-dark`, `gx-head`, `gx-label`, `gx-num`, `gx-panel`, `gx-row`, `gx-tag`, `lg`, `lg-cobalt`, `lg-dark`, `lg-graphite`, `panel-split`, `paper-card`, `solid`, `widget`, `widget-dark`, `widget-grid`
- **Layout:** `bento`, `bento-md`, `g-bento`, `grid-12`, `grid-2`, `grid-3`, `split`, `split-even`, `stack-card`, `stack-cards`, `sticky-col`, `story`, `widget-grid`, `wrap`, `wrap-row`
- **Motion hooks:** `card-hover`, `fade-in`, `float-w`, `hero-beam`, `hero-pin`, `is-live`, `line-mask`, `marquee`, `marquee-track`, `pulse`, `reveal`, `reveal-scale`, `stack-card`, `story`, `story-body`, `story-num`, `story-rail`, `story-step`
- **Controls:** `btn`, `btn-ghost`, `btn-glass`, `btn-lg`, `btn-light`, `btn-primary`, `btn-sm`, `link-arrow`, `opt`, `tab`, `tabs`
- **Links to:** `/agent`, `/contact`, `/how-we-work`, `/insights`, `/insights/[slug]`, `/packages`, `/services`, `/services/desktop-development`, `/technologies`, `/work`

| # | Section | Ground | Block | Heading |
|---|---|---|---|---|
| 1 | section | `bg-horizon` | 1 · HERO (pinned) + statements that rise over it | Complex engineering. Clear outcomes. |
| 2 | section | white | — | — |
| 3 | section | `bg-ink` | 2 · WHAT WE DO | Engineering everything that moves you forward. |
| 4 | section | `bg-mist` | 2b · SIMPLEX AGENT | An AI engineer that knows your stack. |
| 5 | section | `mesh-graphite` | 2c · BUILD PACKAGES | From a two-person app team to your whole product. |
| 6 | section | white | 3 · WHY SIMPLEX | The best engineering is the part nobody notices. |
| 7 | section | `bg-mist` | 4 · FEATURED WORK | Hard problems, made simple to use. |
| 8 | section | `bg-ink bg-ink-left` | 5 · HOW WE WORK (scroll story) | From complexity to clarity. |
| 9 | section | white | 6 · INDUSTRIES | Context changes everything. |
| 10 | section | `bg-mist` | 7 · TECHNOLOGY | Chosen for the problem, not the trend. |
| 11 | section | `bg-ink` | 8 · ENGAGEMENT MODELS | Three ways to work together. |
| 12 | section | `mesh-light` | 8b · HOW AN ENGAGEMENT FEELS (liquid-glass bento) | Transparent by default. |
| 13 | section | white | 9 · INSIGHTS | Notes from the work. |
| 14 | section | `paper` | gx-block · BUILD ESTIMATOR | Shape your team before the first call. |
| 15 | section | `bg-cta dark` | — | Let’s build something exceptional. |

### HowWeWork

- **Source:** `project/HowWeWork.dc.html` (14,889 bytes). **Document title:** How We Work — SimpleX
- **H1:** Clarity is a delivery method.
- **Interaction:** Scroll story, FAQ accordions
- **Typography:** `eyebrow`, `line-mask`, `t-body`, `t-display`, `t-grad`, `t-h1`, `t-h2`, `t-h3`, `t-h4`, `t-h5`, `t-lead`, `t-mono`, `t-small`, `t-tone`, `t-xs`
- **Grounds:** `bg-cta`, `bg-ink`, `bg-mist`, `dark`
- **Surfaces:** `glass`, `glass-dark`, `gx-dark`, `gx-label`, `gx-row`, `gx-tag`
- **Layout:** `grid-12`, `grid-2`, `grid-3`, `grid-4`, `split`, `split-even`, `sticky-col`, `story`, `wrap`, `wrap-row`
- **Motion hooks:** `line-mask`, `reveal`, `story`, `story-body`, `story-num`, `story-rail`, `story-step`
- **Controls:** `acc`, `btn`, `btn-lg`, `btn-light`, `btn-primary`, `link-arrow`
- **Links to:** `/`, `/contact`

| # | Section | Ground | Block | Heading |
|---|---|---|---|---|
| 1 | section | `bg-ink` | — | Clarity is a delivery method. |
| 2 | section | `bg-mist` | — | Four commitments, in writing. |
| 3 | section | `bg-ink` | — | Eight stages. No surprises. |
| 4 | section | white | — | A cadence you can plan around. |
| 5 | section | `bg-mist` | — | Everything visible. Everything yours. |
| 6 | section | `bg-mist` | gx-block · SPRINT REPORT | The report you’ll actually read. |
| 7 | section | white | — | Questions we hear early. |
| 8 | section | `bg-cta dark` | — | Start with a conversation, not a contract. |

### Industries

- **Source:** `project/Industries.dc.html` (9,705 bytes). **Document title:** Industries — SimpleX
- **H1:** Context changes everything.
- **Interaction:** None beyond link and hover states
- **Typography:** `eyebrow`, `line-mask`, `t-body`, `t-grad`, `t-h1`, `t-h2`, `t-h4`, `t-lead`, `t-small`, `t-xs`
- **Grounds:** `bg-cta`, `bg-ink`, `bg-mist`, `dark`, `photo`, `photo-trading`, `viz`, `viz-ecommerce`, `viz-enterprise`, `viz-fintech`, `viz-healthcare`, `viz-logistics`, `viz-saas`
- **Surfaces:** `comp-grid`, `comp-tile`, `glass`, `gx-head`, `gx-tag`
- **Layout:** `grid-4`, `split`, `wrap`, `wrap-row`
- **Motion hooks:** `line-mask`, `reveal`
- **Controls:** `btn`, `btn-lg`, `btn-primary`
- **Local breakpoints:** `@container sx (max-width: 1100px)`; `@container sx (max-width: 760px)`
- **Links to:** `/`, `/contact`

| # | Section | Ground | Block | Heading |
|---|---|---|---|---|
| 1 | section | `bg-ink` | — | Context changes everything. |
| 2 | section | `bg-mist` | — | Four constants we never trade away. |
| 3 | section | `photo photo-trading` | gx-block · COMPLIANCE | Compliance is a requirement, not a phase. |
| 4 | section | `bg-cta dark` | — | Don’t see your industry? |

### IndustryPage

- **Source:** `project/IndustryPage.dc.html` (30,422 bytes). **Document title:** Industry — SimpleX
- **H1:** {{d.headline}}
- **Interaction:** Scenario tabs (3 per slug), slug-driven compliance grid
- **Typography:** `eyebrow`, `line-mask`, `t-body`, `t-h1`, `t-h2`, `t-h3`, `t-h4`, `t-h5`, `t-lead`, `t-mono`, `t-small`, `t-xs`
- **Grounds:** `bg-cta`, `bg-ink`, `bg-mist`, `dark`, `photo`, `photo-trading`, `viz`, `viz-ecommerce`, `viz-enterprise`, `viz-fintech`, `viz-healthcare`, `viz-logistics`, `viz-saas`
- **Surfaces:** `card-hover`, `comp-grid`, `comp-tile`, `glass`, `glass-dark`, `gx-head`, `gx-tag`, `panel-split`, `paper-card`, `solid`
- **Layout:** `grid-2`, `grid-3`, `grid-4`, `split`, `split-even`, `sticky-col`, `wrap`, `wrap-row`
- **Motion hooks:** `card-hover`, `line-mask`, `reveal`
- **Controls:** `btn`, `btn-ghost`, `btn-lg`, `btn-light`, `btn-primary`, `link-arrow`, `tab`, `tabs`
- **Links to:** `/`, `/contact`, `/industries`

| # | Section | Ground | Block | Heading |
|---|---|---|---|---|
| 1 | section | `viz {{d.viz}}` | — | {{d.headline}} |
| 2 | section | white | — | What makes {{d.name}} hard. |
| 3 | section | `bg-ink` | — | Where engineering creates the most value. |
| 4 | section | `bg-mist` | — | What we typically build. |
| 5 | section | white | — | Built in from the first sprint. |
| 6 | section | `bg-mist` | — | Services we bring to {{d.name}}. |
| 7 | section | `photo photo-trading` | gx-block · COMPLIANCE | The standards we build {{d.name}} for. |
| 8 | section | `bg-cta dark` | — | {{d.cta}} |

### Insights

- **Source:** `project/Insights.dc.html` (11,506 bytes). **Document title:** Insights — SimpleX
- **H1:** Notes from the work.
- **Interaction:** Search, category filter, load more with skeleton, empty state, playbook email capture
- **Typography:** `line-mask`, `t-body`, `t-grad`, `t-h1`, `t-h2`, `t-h3`, `t-h4`, `t-lead`, `t-small`, `t-xs`
- **Grounds:** `bg-ink`, `bg-mist`, `photo`, `photo-code`, `viz`, `viz-ecommerce`, `viz-enterprise`, `viz-fintech`, `viz-healthcare`, `viz-logistics`, `viz-saas`
- **Surfaces:** `card-hover`, `gx-tag`, `panel-split`, `paper-card`, `solid`
- **Layout:** `grid-3`, `split`, `wrap`, `wrap-row`
- **Motion hooks:** `card-hover`, `line-mask`
- **Controls:** `btn`, `btn-ghost`, `btn-lg`, `btn-light`, `btn-primary`, `filter-btn`, `input`, `search`
- **Links to:** `/`, `/contact`, `/insights/[slug]`

| # | Section | Ground | Block | Heading |
|---|---|---|---|---|
| 1 | section | `bg-mist` | — | Notes from the work. |
| 2 | section | white | — | Latest |
| 3 | section | white | gx-block · PLAYBOOK | Make the next big build decision with a model, not a hunch. |
| 4 | section | `bg-ink` | — | Have a problem you’d like us to write about — or solve? |

### Job

- **Source:** `project/Job.dc.html` (9,745 bytes). **Document title:** Senior Backend Engineer — SimpleX Careers
- **H1:** Senior Backend Engineer (Kotlin)
- **Interaction:** Apply panel: idle → form → validation → sending → done; copy link
- **Typography:** `prose`, `t-h1`, `t-h3`, `t-h4`, `t-h5`, `t-lead`, `t-small`, `t-xs`
- **Grounds:** `bg-horizon`, `bg-ink`, `bg-mist`
- **Surfaces:** `card-hover`, `glass`
- **Layout:** `grid-3`, `sticky-col`, `wrap`, `wrap-row`
- **Motion hooks:** `card-hover`
- **Controls:** `btn`, `btn-ghost`, `btn-lg`, `btn-primary`, `btn-sm`, `input`, `link-arrow`, `opt`, `textarea`
- **Local breakpoints:** `@container sx (max-width: 1000px)`
- **Links to:** `/`, `/careers`, `/careers/[slug]`, `/how-we-work`

| # | Section | Ground | Block | Heading |
|---|---|---|---|---|
| 1 | section | `bg-ink` | — | Senior Backend Engineer (Kotlin) |
| 2 | section | white | — | — |
| 3 | section | `bg-mist` | — | Other sample roles |

### LegalPage

- **Source:** `project/LegalPage.dc.html` (9,197 bytes). **Document title:** Legal — SimpleX
- **H1:** {{d.title}}
- **Interaction:** Section TOC, cookie preference switches + save confirmation (cookie slug only)
- **Typography:** `prose`, `t-h1`, `t-h4`, `t-lead`, `t-small`
- **Grounds:** `bg-horizon`, `bg-mist`
- **Surfaces:** `glass`, `lg-grid`, `lg-toc`
- **Layout:** `wrap`, `wrap-row`
- **Controls:** `btn`, `btn-primary`, `btn-sm`, `switch`
- **Local breakpoints:** `@container sx (max-width: 1000px)`
- **Links to:** `/`, `/cookie-policy`, `/privacy-policy`, `/terms`

| # | Section | Ground | Block | Heading |
|---|---|---|---|---|
| 1 | section | `bg-mist` | — | {{d.title}} |
| 2 | section | white | — | — |
| 3 | section | white | — | {{s.n}}. {{s.h}} |

### Logo

- **Source:** `project/Logo.dc.html` (39,844 bytes). **Document title:** SimpleX identity
- **H1:** A wordmark engineered, not decorated.
- **Interaction:** Pointer-driven mark demo, replay animation (documentation only)
- **Typography:** `eyebrow`, `t-body`, `t-h1`, `t-h2`, `t-h3`, `t-h4`, `t-lead`, `t-mono`, `t-small`, `t-xs`
- **Grounds:** `bg-ink`, `bg-mist`, `bg-spectrum`, `mesh-graphite`, `mesh-light`, `orb`, `orbs`, `paper`, `tex-grid`, `tex-grid-dark`
- **Surfaces:** `glass-dark`, `lg`, `lg-anim`, `paper-card`, `solid`, `widget`
- **Layout:** `grid-2`, `grid-3`, `split`, `split-even`, `wrap`, `wrap-row`
- **Motion hooks:** `live`
- **Controls:** `btn`, `btn-light`, `btn-sm`, `burger`
- **Local breakpoints:** `@container sx (max-width: 1000px)`

| # | Section | Ground | Block | Heading |
|---|---|---|---|---|
| 1 | section | `bg-mist` | — | A wordmark engineered, not decorated. |
| 2 | section | `bg-mist` | Concepts | — |
| 3 | section | `bg-ink` | Final: hero lockups | Primary lockup: the X, held. |
| 4 | section | `mesh-light` | Fluid SX mark | The SX tile. Solid, precise. |
| 5 | section | white | Pebble wordmark in use | Hover the name. |
| 6 | section | white | Variants grid | Lockups & versions |
| 7 | section | `paper` | Construction | Three parallelograms. One cut. |
| 8 | section | `bg-ink` | Animation | Strokes converge. Letters settle. |

### Main

- **Source:** `project/Main.dc.html` (7,947 bytes). **Document title:** SimpleX — Project index
- **H1:** Complex engineering. Clear outcomes.
- **Interaction:** None beyond link and hover states
- **Typography:** `eyebrow`, `t-display`, `t-grad`, `t-h3`, `t-lead`, `t-mono`, `t-small`, `t-xs`
- **Grounds:** `bg-ink`
- **Surfaces:** `glass-dark`, `solid`
- **Layout:** `grid-4`, `grid-auto`, `split`, `wrap`, `wrap-row`
- **Motion hooks:** `live`
- **Controls:** `btn`, `btn-ghost`, `btn-light`
- **Links to:** `/`

| # | Section | Ground | Block | Heading |
|---|---|---|---|---|
| 1 | section | `bg-ink` | — | Complex engineering. Clear outcomes. |
| 2 | section | white | — | Route & board index |

### Nav

- **Source:** `project/Nav.dc.html` (10,654 bytes). **Document title:** SimpleX header
- **Interaction:** Mega menus (hover + focus-within), burger toggle, mobile menu
- **Typography:** `t-h4`, `t-mono`, `t-small`, `t-xs`
- **Controls:** `btn`, `btn-lg`, `btn-light`, `burger`, `link-arrow`
- **Links to:** `/`, `/about`, `/agent`, `/careers`, `/contact`, `/how-we-work`, `/industries`, `/industries/ecommerce`, `/industries/enterprise`, `/industries/fintech`, `/industries/healthcare`, `/industries/logistics`, `/industries/saas`, `/insights`, `/packages`, `/services`, `/services/ai-engineering`, `/services/architecture-consulting` …

### NotFound

- **Source:** `project/NotFound.dc.html` (2,776 bytes). **Document title:** Page not found — SimpleX
- **H1:** This page took a different route.
- **Interaction:** Search form (no-op in prototype)
- **Typography:** `t-grad`, `t-h1`, `t-lead`, `t-mono`
- **Grounds:** `bg-ink`
- **Layout:** `split`, `wrap`, `wrap-row`
- **Motion hooks:** `live`
- **Controls:** `btn`, `btn-ghost`, `btn-light`, `input`, `search`
- **Links to:** `/`, `/contact`, `/services`, `/work`

| # | Section | Ground | Block | Heading |
|---|---|---|---|---|
| 1 | main | `bg-ink` | — | This page took a different route. |

### Packages

- **Source:** `project/Packages.dc.html` (40,682 bytes). **Document title:** Build packages — SimpleX
- **H1:** From a two-person app team to your whole product.
- **Interaction:** Mobile track tabs (iOS, Android, React Native), comparison table
- **Typography:** `eyebrow`, `t-body`, `t-display`, `t-h1`, `t-h2`, `t-h3`, `t-h4`, `t-lead`, `t-mono`, `t-small`, `t-xs`
- **Grounds:** `bg-cta`, `bg-ink`, `dark`, `grain`, `mesh-graphite`, `mesh-light`, `orb`, `orbs`, `paper`
- **Surfaces:** `card-hover`, `gx-bar`, `gx-dark`, `gx-label`, `gx-row`, `gx-tag`, `lg`, `lg-dark`, `lg-graphite`, `solid`
- **Layout:** `grid-2`, `grid-3`, `grid-4`, `split`, `wrap`, `wrap-row`
- **Motion hooks:** `card-hover`, `pulse`
- **Controls:** `acc`, `btn`, `btn-ghost`, `btn-glass`, `btn-lg`, `btn-light`, `btn-primary`, `btn-sm`, `link-arrow`, `tab`, `tabs`, `toggle`
- **Local breakpoints:** `@container sx (max-width: 860px)`; `@container sx (max-width: 600px)`
- **Links to:** `/`, `/agent`, `/contact`, `/services`, `/services/desktop-development`

| # | Section | Ground | Block | Heading |
|---|---|---|---|---|
| 1 | section | `bg-ink` | HERO | From a two-person app team to your whole product. |
| 2 | section | `mesh-light` | THREE PACKAGES | Pick the shape of your build. |
| 3 | section | white | 01 MOBILE POD | Two engineers. A complete app in the stores. |
| 4 | section | `mesh-graphite` | 02 DESKTOP | Desktop software that belongs on the desk. |
| 5 | section | white | 03 FULL CYCLE | The whole product. One team. One backlog. |
| 6 | section | white | gx-block · AVAILABILITY | Start dates, not “we’ll see”. |
| 7 | section | `paper` | COMPARE | Compare packages |
| 8 | section | `bg-cta dark` | CTA | Tell us what you’re building. |

### ServicePage

- **Source:** `project/ServicePage.dc.html` (56,980 bytes). **Document title:** Service — SimpleX
- **H1:** {{s.headline}}
- **Interaction:** Use-case accordion, hero visual by slug (code, arch, device, desktop, graph, pipeline, team), light or dark theme by slug
- **Typography:** `eyebrow`, `line-mask`, `t-body`, `t-h1`, `t-h2`, `t-h3`, `t-h4`, `t-h5`, `t-lead`, `t-mono`, `t-small`, `t-xs`
- **Grounds:** `bg-cta`, `bg-ink`, `bg-mist`, `dark`, `paper`, `photo`, `photo-meeting`, `viz`, `viz-fintech`, `viz-healthcare`, `viz-logistics`
- **Surfaces:** `card-hover`, `glass`, `glass-dark`, `gx-head`, `gx-tag`, `solid`
- **Layout:** `grid-2`, `grid-3`, `grid-4`, `process`, `split`, `sticky-col`, `wrap`, `wrap-row`
- **Motion hooks:** `card-hover`, `line-mask`, `process-rail`, `reveal`
- **Controls:** `acc`, `btn`, `btn-ghost`, `btn-lg`, `btn-light`, `btn-primary`, `link-arrow`, `text-link`
- **Links to:** `/`, `/contact`, `/how-we-work`, `/services`, `/technologies`

| # | Section | Ground | Block | Heading |
|---|---|---|---|---|
| 1 | section | `{{s.heroBg}}` | HERO | {{s.headline}} |
| 2 | section | `paper` | PROBLEM | {{s.problem}} |
| 3 | section | white | CAPABILITIES | What we bring to {{s.lower}}. |
| 4 | section | `bg-ink` | VALUE | What changes for the business. |
| 5 | section | `bg-ink` | PROCESS | How the engagement runs |
| 6 | section | white | TECHNOLOGY + USE CASES | Where this service fits. |
| 7 | section | `bg-mist` | RELATED | Often combined with |
| 8 | section | white | gx-block · FIRST 30 DAYS | Your first 30 days, in writing. |
| 9 | section | `bg-cta dark` | — | {{s.cta}} |

### Services

- **Source:** `project/Services.dc.html` (13,815 bytes). **Document title:** Services — SimpleX
- **H1:** Every capability. One accountable team.
- **Interaction:** Card hovers, lifecycle matrix, vs-alternatives table
- **Typography:** `eyebrow`, `line-mask`, `t-body`, `t-grad`, `t-h1`, `t-h2`, `t-h4`, `t-lead`, `t-mono`, `t-small`, `t-xs`
- **Grounds:** `bg-cta`, `bg-horizon`, `bg-ink`, `bg-mist`, `dark`, `paper`
- **Surfaces:** `card-hover`, `glass`, `gx-head`, `gx-tag`, `solid`
- **Layout:** `grid-12`, `grid-2`, `split`, `split-wide`, `sticky-col`, `wrap`, `wrap-row`
- **Motion hooks:** `card-hover`, `is-live`, `line-mask`, `reveal`
- **Controls:** `btn`, `btn-glass`, `btn-lg`, `btn-primary`
- **Links to:** `/`, `/contact`, `/how-we-work`, `/services/cloud-devops`, `/services/custom-software-development`, `/services/legacy-modernization`

| # | Section | Ground | Block | Heading |
|---|---|---|---|---|
| 1 | section | `bg-horizon` | — | Every capability. One accountable team. |
| 2 | section | `{{g.bg}}` | — | {{g.title}} |
| 3 | section | white | — | Every capability, mapped to the lifecycle. |
| 4 | section | `paper` | gx-block · VS ALTERNATIVES | SimpleX vs. the usual options. |
| 5 | section | `bg-cta dark` | — | Not sure which service you need? |

### System

- **Source:** `project/System.dc.html` (13,603 bytes). **Document title:** Design system tokens
- **H1:** Restrained palette. Generous light.
- **Interaction:** None beyond link and hover states
- **Typography:** `eyebrow`, `t-body`, `t-h1`, `t-h3`, `t-h4`, `t-lead`, `t-mono`, `t-small`, `t-xs`
- **Grounds:** `bg-horizon`, `bg-ink`, `bg-mist`, `bg-spectrum`, `paper`
- **Surfaces:** `glass`, `glass-dark`, `glass-frost`, `solid`
- **Layout:** `grid-12`, `grid-2`, `grid-3`, `grid-auto`, `split`, `wrap`, `wrap-row`

| # | Section | Ground | Block | Heading |
|---|---|---|---|---|
| 1 | section | `bg-mist` | — | Restrained palette. Generous light. |
| 2 | section | `bg-mist` | Color | Colour |
| 3 | section | white | Backgrounds & surfaces | Backgrounds & surfaces |
| 4 | section | `paper` | Type | Typography |
| 5 | section | white | Spacing, radius, shadow | Spacing · 4pt base |
| 6 | section | `bg-ink` | Motion & breakpoints | Motion tokens |

### Technologies

- **Source:** `project/Technologies.dc.html` (13,337 bytes). **Document title:** Technologies — SimpleX
- **H1:** The toolkit, and how we use it.
- **Interaction:** Search + category filter + empty state, radar ring tabs (adopt, trial, assess, hold)
- **Typography:** `line-mask`, `t-body`, `t-grad`, `t-h1`, `t-h2`, `t-h3`, `t-h4`, `t-lead`, `t-small`, `t-xs`
- **Grounds:** `bg-ink`, `bg-mist`
- **Surfaces:** `glass`, `gx-2`, `gx-head`, `gx-row`, `gx-tag`, `solid`
- **Layout:** `grid-auto`, `split`, `split-wide`, `sticky-col`, `wrap`, `wrap-row`
- **Motion hooks:** `line-mask`
- **Controls:** `btn`, `btn-ghost`, `btn-primary`, `filter-btn`, `input`, `search`, `tab`, `tabs`, `tabs-dark`
- **Links to:** `/`, `/about`, `/contact`, `/services/architecture-consulting`

| # | Section | Ground | Block | Heading |
|---|---|---|---|---|
| 1 | section | `bg-ink` | — | The toolkit, and how we use it. |
| 2 | section | `bg-mist` | — | {{g.name}} |
| 3 | section | white | — | Technology follows the problem. |
| 4 | section | `bg-ink` | gx-block · TECH RADAR | What we adopt, trial, assess — and hold. |

### ThankYou

- **Source:** `project/ThankYou.dc.html` (3,898 bytes). **Document title:** Thank you — SimpleX
- **H1:** Thank you. We’ve got it.
- **Interaction:** None beyond link and hover states
- **Typography:** `line-mask`, `t-display`, `t-grad`, `t-h3`, `t-h5`, `t-lead`, `t-small`
- **Grounds:** `bg-horizon`
- **Surfaces:** `card-hover`, `glass`, `solid`
- **Layout:** `grid-3`, `wrap`
- **Motion hooks:** `card-hover`, `is-live`, `line-mask`, `live`
- **Controls:** `link-arrow`
- **Links to:** `/`, `/how-we-work`, `/insights`, `/work`

| # | Section | Ground | Block | Heading |
|---|---|---|---|---|
| 1 | section | `bg-horizon` | — | Thank you. We’ve got it. |
| 2 | section | white | — | While you wait |

### UiKit

- **Source:** `project/UiKit.dc.html` (21,767 bytes). **Document title:** SimpleX UI Kit — foundations &amp; components
- **H1:** UI Kit.
- **Interaction:** None beyond link and hover states
- **Typography:** `eyebrow`, `t-body`, `t-display`, `t-h1`, `t-h2`, `t-h3`, `t-h4`, `t-lead`, `t-mono`, `t-small`
- **Grounds:** `bg-ink`, `bg-spectrum`, `mesh-graphite`, `mesh-light`, `orb`, `orbs`, `paper`
- **Surfaces:** `lg`, `lg-dark`
- **Layout:** `grid-2`, `grid-4`, `grid-auto`, `split`, `wrap`, `wrap-row`

| # | Section | Ground | Block | Heading |
|---|---|---|---|---|
| 1 | section | `bg-ink` | COVER | UI Kit. |
| 2 | section | white | 01 COLOUR | Ink, cobalt and steel blue. |
| 3 | section | `paper` | 02 TYPE | Geist & Geist Mono. |
| 4 | section | white | 03 SPACE RADIUS GRID | A 4-point rhythm. |
| 5 | section | `paper` | 04 ELEVATION & BLUR | Depth from light, not lines. |
| 6 | section | white | 05 LOGO | Wordmark, pebble lockup and SX mark. |

### UiKitComponents

- **Source:** `project/UiKitComponents.dc.html` (27,877 bytes). **Document title:** SimpleX UI Kit — components
- **H1:** Components, every state.
- **Interaction:** None beyond link and hover states
- **Typography:** `eyebrow`, `t-h1`, `t-h3`, `t-h4`, `t-lead`, `t-mono`, `t-small`
- **Grounds:** `bg-horizon`, `bg-ink`, `dark`, `grain`, `mesh-graphite`, `mesh-light`, `orb`, `orbs`, `paper`, `viz`, `viz-fintech`
- **Surfaces:** `card-hover`, `glass-dark`, `lg`, `lg-dark`, `solid`
- **Layout:** `grid-2`, `grid-3`, `grid-4`, `split`, `wrap`, `wrap-row`
- **Motion hooks:** `card-hover`, `progress-bar`, `pulse`
- **Controls:** `acc`, `btn`, `btn-ghost`, `btn-glass`, `btn-graphite`, `btn-icon`, `btn-lg`, `btn-light`, `btn-primary`, `btn-sm`, `check`, `filter-btn`, `input`, `link-arrow`, `search`, `select`, `tab`, `tabs`, `text-link`, `textarea`, `toggle`, `toggle-chip`

| # | Section | Ground | Block | Heading |
|---|---|---|---|---|
| 1 | section | `bg-ink` | — | Components, every state. |
| 2 | section | `paper` | — | Variants × states. |
| 3 | section | white | 07 INPUTS | Fields and states. |
| 4 | section | `paper` | 08 SELECTION | Checks, radios, toggles, sliders. |
| 5 | section | white | 09 LABELS & NAV | Tags, badges, tabs, paging. |
| 6 | section | `paper` | 10 FEEDBACK | Alerts, toasts, loading. |
| 7 | section | white | 11 HEADER | Solid ink header. |
| 8 | section | `paper` | 12 CARDS | Surfaces for content. |
| 9 | section | white | 13 DEVICE MOCKUPS | Phones, desktop, laptop, browser. |

### UiKitGlass

- **Source:** `project/UiKitGlass.dc.html` (23,997 bytes). **Document title:** SimpleX UI Kit — glass, blocks &amp; assets
- **H1:** Liquid glass.
- **Interaction:** None beyond link and hover states
- **Typography:** `eyebrow`, `t-body`, `t-display`, `t-h2`, `t-h3`, `t-h4`, `t-lead`, `t-mono`, `t-small`, `t-xs`
- **Grounds:** `bg-horizon`, `bg-ink`, `bg-mist`, `bg-spectrum`, `grain`, `mesh-graphite`, `mesh-light`, `orb`, `orbs`, `paper`, `sheen`
- **Surfaces:** `card-hover`, `lg`, `lg-clear`, `lg-cobalt`, `lg-dark`, `lg-graphite`, `widget`, `widget-dark`
- **Layout:** `g-bento`, `grid-2`, `grid-3`, `grid-4`, `grid-auto`, `grid-lines`, `split`, `wrap`, `wrap-row`
- **Motion hooks:** `card-hover`, `pulse`
- **Controls:** `btn`, `btn-ghost`, `btn-light`, `btn-sm`

| # | Section | Ground | Block | Heading |
|---|---|---|---|---|
| 1 | section | `mesh-graphite` | COVER · MATERIAL LADDER | Liquid glass. |
| 2 | section | `paper` | EFFECTS | Rim, grain, sheen, glow. |
| 3 | section | white | GLASS COMPONENTS · LIGHT | Overlays, controls, notifications. |
| 4 | section | `bg-ink` | WIDGETS | iOS-style tiles. |
| 5 | section | `paper` | BLOCKS | Section patterns, ready to drop in. |
| 6 | section | white | ICONS | 29 line icons. |
| 7 | section | `paper` | BACKGROUNDS + DOWNLOADS | Grounds and files. |

### Work

- **Source:** `project/Work.dc.html` (12,702 bytes). **Document title:** Our Work — SimpleX
- **H1:** Hard problems, made simple to use.
- **Interaction:** Industry filter + service filter (aria-pressed), result count (aria-live), empty state with clear action
- **Typography:** `line-mask`, `t-body`, `t-grad`, `t-h1`, `t-h2`, `t-h4`, `t-lead`, `t-mono`, `t-small`, `t-xs`
- **Grounds:** `bg-cta`, `bg-horizon`, `bg-mist`, `dark`, `photo`, `photo-meeting`, `viz`, `viz-ecommerce`, `viz-enterprise`, `viz-fintech`, `viz-healthcare`, `viz-logistics`, `viz-saas`
- **Surfaces:** `card-hover`, `gx-tag`, `lg-dark`, `panel-split`, `solid`
- **Layout:** `grid-3`, `split`, `wrap`, `wrap-row`
- **Motion hooks:** `card-hover`, `is-live`, `line-mask`, `reveal-scale`
- **Controls:** `btn`, `btn-ghost`, `btn-lg`, `btn-light`, `btn-primary`, `filter-btn`, `link-arrow`
- **Links to:** `/`, `/contact`, `/work/ledgerline`

| # | Section | Ground | Block | Heading |
|---|---|---|---|---|
| 1 | section | `bg-horizon` | — | Hard problems, made simple to use. |
| 2 | section | white | Featured | — |
| 3 | section | `bg-mist` | Filters + grid | All projects |
| 4 | section | `photo photo-meeting` | gx-block · REFERENCES | Don’t take our word for it. Take theirs. |
| 5 | section | `bg-cta dark` | — | Your project could be next. |
