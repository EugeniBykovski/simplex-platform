# Route SEO matrix

Measured for SF-153 from a production build's raw server HTML, not from source code. **Build settings: `SITE_INDEXABLE=true` with `NEXT_PUBLIC_SITE_URL=https://example.com`, a stand-in, because no production domain is approved.** Paths are shown without that origin. "Robots" is what a launched site would serve, and **nothing is indexed today**: default builds are `noindex` everywhere.

"In-page links in" counts English pages linking here from inside `main`, leaving out the header and footer, which link widely. Every route also returns the security headers in [security-boundaries.md](../architecture/security-boundaries.md). No route has a noted SEO defect left, other than the approval status shown. Sitewide findings are in [technical-audit.md](technical-audit.md).

To index a route: close its blocker, then add it to `indexableRoutes` in `src/config/routes.ts`. Robots tags, sitemap and structured data all follow.

## English

| Route | HTTP | Robots | Title | Desc len | Canonical | Social card | Structured data | Sitemap | In-page links in | Approval status |
|---|---|---|---|---|---|---|---|---|---|---|
| `/` | 200 | index | SimpleX — Complex engineering. Clear outcomes. | 100 | `/` | `/og/home` | Organization, WebSite | Yes | 36 | Listed in `indexableRoutes`. Claims still need founder sign-off (GAP-C10) |
| `/contact/thank-you` | 200 | noindex | Thank you — SimpleX | 65 | `/contact/thank-you` | `/og/home` | None | No | n/a | Never indexed |
| `/privacy-policy` | 200 | noindex | Privacy Policy — SimpleX | 51 | `/privacy-policy` | `/og/home` | None | No | 2 | Legal draft (GAP-C09) |
| `/cookie-policy` | 200 | noindex | Cookie Policy — SimpleX | 73 | `/cookie-policy` | `/og/home` | None | No | 2 | Legal draft (GAP-C09) |
| `/terms` | 200 | noindex | Terms of Use — SimpleX | 51 | `/terms` | `/og/home` | None | No | 2 | Legal draft (GAP-C09) |
| `/services` | 200 | index | Services — SimpleX | 158 | `/services` | `/og/services` | BreadcrumbList | Yes | 14 | Listed in `indexableRoutes`. Claims still need founder sign-off (GAP-C10) |
| `/services/custom-software-development` | 200 | index | Custom Software Development — SimpleX | 101 | `/services/custom-software-development` | `/og/services/custom-software-development` | Service, BreadcrumbList | Yes | 7 | Listed in `indexableRoutes`. Claims still need founder sign-off (GAP-C10) |
| `/services/enterprise-software` | 200 | index | Enterprise Software — SimpleX | 99 | `/services/enterprise-software` | `/og/services/enterprise-software` | Service, BreadcrumbList | Yes | 3 | Listed in `indexableRoutes`. Claims still need founder sign-off (GAP-C10) |
| `/services/web-development` | 200 | index | Web Development — SimpleX | 154 | `/services/web-development` | `/og/services/web-development` | Service, BreadcrumbList | Yes | 7 | Listed in `indexableRoutes`. Claims still need founder sign-off (GAP-C10) |
| `/services/mobile-development` | 200 | index | Mobile Development — SimpleX | 138 | `/services/mobile-development` | `/og/services/mobile-development` | Service, BreadcrumbList | Yes | 6 | Listed in `indexableRoutes`. Claims still need founder sign-off (GAP-C10) |
| `/services/desktop-development` | 200 | index | Desktop Applications & Programs — SimpleX | 148 | `/services/desktop-development` | `/og/services/desktop-development` | Service, BreadcrumbList | Yes | 3 | Listed in `indexableRoutes`. Claims still need founder sign-off (GAP-C10) |
| `/services/ai-engineering` | 200 | index | AI Engineering & Intelligent Automation — SimpleX | 150 | `/services/ai-engineering` | `/og/services/ai-engineering` | Service, BreadcrumbList | Yes | 7 | Listed in `indexableRoutes`. Claims still need founder sign-off (GAP-C10) |
| `/services/cloud-devops` | 200 | index | Cloud Engineering & DevOps — SimpleX | 152 | `/services/cloud-devops` | `/og/services/cloud-devops` | Service, BreadcrumbList | Yes | 13 | Listed in `indexableRoutes`. Claims still need founder sign-off (GAP-C10) |
| `/services/legacy-modernization` | 200 | index | Legacy Modernization — SimpleX | 147 | `/services/legacy-modernization` | `/og/services/legacy-modernization` | Service, BreadcrumbList | Yes | 7 | Listed in `indexableRoutes`. Claims still need founder sign-off (GAP-C10) |
| `/services/quality-engineering` | 200 | index | Quality Engineering & Test Automation — SimpleX | 146 | `/services/quality-engineering` | `/og/services/quality-engineering` | Service, BreadcrumbList | Yes | 10 | Listed in `indexableRoutes`. Claims still need founder sign-off (GAP-C10) |
| `/services/architecture-consulting` | 200 | index | Software Architecture & Technical Consulting — SimpleX | 127 | `/services/architecture-consulting` | `/og/services/architecture-consulting` | Service, BreadcrumbList | Yes | 10 | Listed in `indexableRoutes`. Claims still need founder sign-off (GAP-C10) |
| `/services/product-design` | 200 | index | Product Design & UI/UX — SimpleX | 159 | `/services/product-design` | `/og/services/product-design` | Service, BreadcrumbList | Yes | 8 | Listed in `indexableRoutes`. Claims still need founder sign-off (GAP-C10) |
| `/services/dedicated-teams` | 200 | index | Dedicated Engineering Teams — SimpleX | 150 | `/services/dedicated-teams` | `/og/services/dedicated-teams` | Service, BreadcrumbList | Yes | 1 | Listed in `indexableRoutes`. Claims still need founder sign-off (GAP-C10) |
| `/packages` | 200 | noindex | Build packages — SimpleX | 156 | `/packages` | `/og/packages` | None | No | 2 | Commercial terms unconfirmed |
| `/agent` | 200 | noindex | SimpleX Agent — engineering agent concept | 158 | `/agent` | `/og/agent` | None | No | 2 | Capabilities unverified (GAP-C01) |
| `/industries` | 200 | noindex | Industries — SimpleX | 129 | `/industries` | `/og/industries` | None | No | 6 | Industry claims unconfirmed |
| `/industries/fintech` | 200 | noindex | FinTech software engineering — SimpleX | 147 | `/industries/fintech` | `/og/industries/fintech` | None | No | 6 | Industry claims unconfirmed |
| `/industries/healthcare` | 200 | noindex | Healthcare software engineering — SimpleX | 139 | `/industries/healthcare` | `/og/industries/healthcare` | None | No | 6 | Industry claims unconfirmed |
| `/industries/ecommerce` | 200 | noindex | E-commerce software engineering — SimpleX | 104 | `/industries/ecommerce` | `/og/industries/ecommerce` | None | No | 6 | Industry claims unconfirmed |
| `/industries/saas` | 200 | noindex | SaaS software engineering — SimpleX | 127 | `/industries/saas` | `/og/industries/saas` | None | No | 6 | Industry claims unconfirmed |
| `/industries/enterprise` | 200 | noindex | Enterprise software engineering — SimpleX | 125 | `/industries/enterprise` | `/og/industries/enterprise` | None | No | 6 | Industry claims unconfirmed |
| `/industries/logistics` | 200 | noindex | Logistics software engineering — SimpleX | 118 | `/industries/logistics` | `/og/industries/logistics` | None | No | 6 | Industry claims unconfirmed |
| `/work` | 200 | noindex | Our Work — demonstration projects — SimpleX | 152 | `/work` | `/og/work` | None | No | 5 | Demonstrations, never indexed as client work (GAP-C02) |
| `/how-we-work` | 200 | noindex | How We Work — SimpleX | 156 | `/how-we-work` | `/og/how-we-work` | None | No | 16 | Company claims unconfirmed (GAP-C10) |
| `/about` | 200 | noindex | About — SimpleX | 140 | `/about` | `/og/about` | None | No | 2 | Company claims unconfirmed (GAP-C10) |
| `/insights` | 200 | noindex | Insights — SimpleX | 112 | `/insights` | `/og/insights` | None | No | 2 | No published articles |
| `/careers` | 200 | noindex | Careers — SimpleX | 130 | `/careers` | `/og/careers` | None | No | 2 | No live roles |
| `/contact` | 200 | noindex | Contact — SimpleX | 130 | `/contact` | `/og/contact` | None | No | 33 | Delivery not live |
| `/work/simplefit-boxing` | 200 | noindex | SimpleFit Boxing - Project - SimpleX | varies | `/work/simplefit-boxing` | `/og/work/simplefit-boxing` | None | No | n/a | Approved project, not yet approved for indexing (GAP-C02) |
| `/work/financialpress` | 200 | noindex | FinancialPress - Project - SimpleX | varies | `/work/financialpress` | `/og/work/financialpress` | None | No | n/a | Approved project, not yet approved for indexing (GAP-C02) |
| `/work/hobworks` | 200 | noindex | Hobworks - Project - SimpleX | varies | `/work/hobworks` | `/og/work/hobworks` | None | No | n/a | Approved project, not yet approved for indexing (GAP-C02) |
| `/work/simple-house` | 200 | noindex | Simple House - Project - SimpleX | varies | `/work/simple-house` | `/og/work/simple-house` | None | No | n/a | Approved project, not yet approved for indexing (GAP-C02) |
| `/work/simple-market` | 200 | noindex | Simple Market - Project - SimpleX | varies | `/work/simple-market` | `/og/work/simple-market` | None | No | n/a | Approved project, not yet approved for indexing (GAP-C02) |
| `/work/deeply` | 200 | noindex | Deeply - Project - SimpleX | varies | `/work/deeply` | `/og/work/deeply` | None | No | n/a | Approved project, not yet approved for indexing (GAP-C02) |
| `/work/wait` | 200 | noindex | Wait - Project - SimpleX | varies | `/work/wait` | `/og/work/wait` | None | No | n/a | Approved project, not yet approved for indexing (GAP-C02) |
| `/work/anyway` | 200 | noindex | AnyWay - Project - SimpleX | varies | `/work/anyway` | `/og/work/anyway` | None | No | n/a | Approved project, not yet approved for indexing (GAP-C02) |
| `/technologies` | 200 | noindex | Technologies — SimpleX | 150 | `/technologies` | `/og/technologies` | None | No | 13 | Company claims unconfirmed (GAP-C10) |

## Russian

All draft, so all `noindex`, with a self-referencing canonical and no hreflang until reviewed. See [international-seo.md](international-seo.md).

| Route | HTTP | Robots | Title | Desc len | Canonical | Social card | Structured data | Sitemap | In-page links in | Approval status |
|---|---|---|---|---|---|---|---|---|---|---|
| `/ru` | 200 | noindex | SimpleX — Сложная инженерия. Понятный результат. | 125 | `/ru` | `/ru/og/home` | None | No | n/a | Russian draft. Listed in `indexableRoutes` |
| `/ru/contact/thank-you` | 200 | noindex | Спасибо — SimpleX | 66 | `/ru/contact/thank-you` | `/ru/og/home` | None | No | n/a | Russian draft. Never indexed |
| `/ru/services` | 200 | noindex | Услуги — SimpleX | 143 | `/ru/services` | `/ru/og/services` | None | No | n/a | Russian draft. Listed in `indexableRoutes` |
| `/ru/services/custom-software-development` | 200 | noindex | Разработка ПО на заказ — SimpleX | 114 | `/ru/services/custom-software-development` | `/ru/og/services/custom-software-development` | None | No | n/a | Russian draft. Listed in `indexableRoutes` |
| `/ru/services/enterprise-software` | 200 | noindex | Корпоративное ПО — SimpleX | 100 | `/ru/services/enterprise-software` | `/ru/og/services/enterprise-software` | None | No | n/a | Russian draft. Listed in `indexableRoutes` |
| `/ru/services/web-development` | 200 | noindex | Веб-разработка — SimpleX | 150 | `/ru/services/web-development` | `/ru/og/services/web-development` | None | No | n/a | Russian draft. Listed in `indexableRoutes` |
| `/ru/services/mobile-development` | 200 | noindex | Мобильная разработка — SimpleX | 151 | `/ru/services/mobile-development` | `/ru/og/services/mobile-development` | None | No | n/a | Russian draft. Listed in `indexableRoutes` |
| `/ru/services/desktop-development` | 200 | noindex | Десктопные приложения и программы — SimpleX | 160 | `/ru/services/desktop-development` | `/ru/og/services/desktop-development` | None | No | n/a | Russian draft. Listed in `indexableRoutes` |
| `/ru/services/ai-engineering` | 200 | noindex | Инженерия ИИ и интеллектуальная автоматизация — SimpleX | 140 | `/ru/services/ai-engineering` | `/ru/og/services/ai-engineering` | None | No | n/a | Russian draft. Listed in `indexableRoutes` |
| `/ru/services/cloud-devops` | 200 | noindex | Облачная инженерия и DevOps — SimpleX | 145 | `/ru/services/cloud-devops` | `/ru/og/services/cloud-devops` | None | No | n/a | Russian draft. Listed in `indexableRoutes` |
| `/ru/services/legacy-modernization` | 200 | noindex | Модернизация legacy-систем — SimpleX | 155 | `/ru/services/legacy-modernization` | `/ru/og/services/legacy-modernization` | None | No | n/a | Russian draft. Listed in `indexableRoutes` |
| `/ru/services/quality-engineering` | 200 | noindex | Инженерия качества и автоматизация тестирования — SimpleX | 132 | `/ru/services/quality-engineering` | `/ru/og/services/quality-engineering` | None | No | n/a | Russian draft. Listed in `indexableRoutes` |
| `/ru/services/architecture-consulting` | 200 | noindex | Архитектура ПО и технический консалтинг — SimpleX | 120 | `/ru/services/architecture-consulting` | `/ru/og/services/architecture-consulting` | None | No | n/a | Russian draft. Listed in `indexableRoutes` |
| `/ru/services/product-design` | 200 | noindex | Продуктовый дизайн и UI/UX — SimpleX | 140 | `/ru/services/product-design` | `/ru/og/services/product-design` | None | No | n/a | Russian draft. Listed in `indexableRoutes` |
| `/ru/services/dedicated-teams` | 200 | noindex | Выделенные инженерные команды — SimpleX | 140 | `/ru/services/dedicated-teams` | `/ru/og/services/dedicated-teams` | None | No | n/a | Russian draft. Listed in `indexableRoutes` |
| `/ru/packages` | 200 | noindex | Пакеты разработки — SimpleX | 152 | `/ru/packages` | `/ru/og/packages` | None | No | n/a | Russian draft. Commercial terms unconfirmed |
| `/ru/agent` | 200 | noindex | SimpleX Agent — концепция инженерного агента | 158 | `/ru/agent` | `/ru/og/agent` | None | No | n/a | Russian draft. Capabilities unverified (GAP-C01) |
| `/ru/industries` | 200 | noindex | Отрасли — SimpleX | 142 | `/ru/industries` | `/ru/og/industries` | None | No | n/a | Russian draft. Industry claims unconfirmed |
| `/ru/industries/fintech` | 200 | noindex | Разработка ПО для финтеха — SimpleX | 138 | `/ru/industries/fintech` | `/ru/og/industries/fintech` | None | No | n/a | Russian draft. Industry claims unconfirmed |
| `/ru/industries/healthcare` | 200 | noindex | Разработка ПО для здравоохранения — SimpleX | 148 | `/ru/industries/healthcare` | `/ru/og/industries/healthcare` | None | No | n/a | Russian draft. Industry claims unconfirmed |
| `/ru/industries/ecommerce` | 200 | noindex | Разработка ПО для e-commerce — SimpleX | 101 | `/ru/industries/ecommerce` | `/ru/og/industries/ecommerce` | None | No | n/a | Russian draft. Industry claims unconfirmed |
| `/ru/industries/saas` | 200 | noindex | Разработка ПО для SaaS — SimpleX | 135 | `/ru/industries/saas` | `/ru/og/industries/saas` | None | No | n/a | Russian draft. Industry claims unconfirmed |
| `/ru/industries/enterprise` | 200 | noindex | Разработка ПО для корпораций — SimpleX | 118 | `/ru/industries/enterprise` | `/ru/og/industries/enterprise` | None | No | n/a | Russian draft. Industry claims unconfirmed |
| `/ru/industries/logistics` | 200 | noindex | Разработка ПО для логистики — SimpleX | 120 | `/ru/industries/logistics` | `/ru/og/industries/logistics` | None | No | n/a | Russian draft. Industry claims unconfirmed |
| `/ru/work` | 200 | noindex | Проекты — демонстрации — SimpleX | 151 | `/ru/work` | `/ru/og/work` | None | No | n/a | Russian draft. Demonstrations, never indexed as client work (GAP-C02) |
| `/ru/how-we-work` | 200 | noindex | Как мы работаем — SimpleX | 151 | `/ru/how-we-work` | `/ru/og/how-we-work` | None | No | n/a | Russian draft. Company claims unconfirmed (GAP-C10) |
| `/ru/about` | 200 | noindex | О компании — SimpleX | 160 | `/ru/about` | `/ru/og/about` | None | No | n/a | Russian draft. Company claims unconfirmed (GAP-C10) |
| `/ru/insights` | 200 | noindex | Статьи — SimpleX | 113 | `/ru/insights` | `/ru/og/insights` | None | No | n/a | Russian draft. No published articles |
| `/ru/careers` | 200 | noindex | Карьера — SimpleX | 125 | `/ru/careers` | `/ru/og/careers` | None | No | n/a | Russian draft. No live roles |
| `/ru/contact` | 200 | noindex | Контакты — SimpleX | 130 | `/ru/contact` | `/ru/og/contact` | None | No | n/a | Russian draft. Delivery not live |
| `/ru/work/simplefit-boxing` | 200 | noindex | SimpleFit Boxing - Проект - SimpleX | varies | `/ru/work/simplefit-boxing` | `/ru/og/work/simplefit-boxing` | None | No | n/a | Russian draft. Not yet approved for indexing (GAP-C02) |
| `/ru/work/financialpress` | 200 | noindex | FinancialPress - Проект - SimpleX | varies | `/ru/work/financialpress` | `/ru/og/work/financialpress` | None | No | n/a | Russian draft. Not yet approved for indexing (GAP-C02) |
| `/ru/work/hobworks` | 200 | noindex | Hobworks - Проект - SimpleX | varies | `/ru/work/hobworks` | `/ru/og/work/hobworks` | None | No | n/a | Russian draft. Not yet approved for indexing (GAP-C02) |
| `/ru/work/simple-house` | 200 | noindex | Simple House - Проект - SimpleX | varies | `/ru/work/simple-house` | `/ru/og/work/simple-house` | None | No | n/a | Russian draft. Not yet approved for indexing (GAP-C02) |
| `/ru/work/simple-market` | 200 | noindex | Simple Market - Проект - SimpleX | varies | `/ru/work/simple-market` | `/ru/og/work/simple-market` | None | No | n/a | Russian draft. Not yet approved for indexing (GAP-C02) |
| `/ru/work/deeply` | 200 | noindex | Deeply - Проект - SimpleX | varies | `/ru/work/deeply` | `/ru/og/work/deeply` | None | No | n/a | Russian draft. Not yet approved for indexing (GAP-C02) |
| `/ru/work/wait` | 200 | noindex | Wait - Проект - SimpleX | varies | `/ru/work/wait` | `/ru/og/work/wait` | None | No | n/a | Russian draft. Not yet approved for indexing (GAP-C02) |
| `/ru/work/anyway` | 200 | noindex | AnyWay - Проект - SimpleX | varies | `/ru/work/anyway` | `/ru/og/work/anyway` | None | No | n/a | Russian draft. Not yet approved for indexing (GAP-C02) |
| `/ru/technologies` | 200 | noindex | Технологии — SimpleX | 157 | `/ru/technologies` | `/ru/og/technologies` | None | No | n/a | Russian draft. Company claims unconfirmed (GAP-C10) |
| `/ru/privacy-policy` | 200 | noindex | Политика конфиденциальности — SimpleX | 56 | `/ru/privacy-policy` | `/ru/og/home` | None | No | n/a | Russian draft. Legal draft (GAP-C09) |
| `/ru/cookie-policy` | 200 | noindex | Политика использования cookie — SimpleX | 84 | `/ru/cookie-policy` | `/ru/og/home` | None | No | n/a | Russian draft. Legal draft (GAP-C09) |
| `/ru/terms` | 200 | noindex | Условия использования — SimpleX | 56 | `/ru/terms` | `/ru/og/home` | None | No | n/a | Russian draft. Legal draft (GAP-C09) |

## System

| Route | HTTP | Robots | Canonical | Sitemap |
|---|---|---|---|---|
| Any unknown path, unknown slug, `/404` | 404 | `noindex` | None | No |
| `/ru/` + unknown path | 404, Russian | `noindex` | None | No |
| `/careers/*` | 404: no live roles | `noindex` | None | No |
| `/insights/*` | 404: no published article | `noindex` | None | No |
| `/og/*` | Image for known cards, otherwise 404 | Not a page | None | No |
