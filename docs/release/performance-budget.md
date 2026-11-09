# Performance budget

For SF-156. Method and history: [core-web-vitals.md](../performance/core-web-vitals.md). **All lab data from local production builds. Field data: NOT AVAILABLE**, as nothing is deployed and there is no measurement source.

| Metric | Target, p75 | Lab result | Status |
|---|---|---|---|
| LCP | ≤ 2.5 s | 1.8–2.0 s on English routes under real throttling. Russian Home about 2.6 s | Met in lab, except Russian Home |
| INP | ≤ 200 ms | Field not available. Lab proxy 32–64 ms, with SF-156's effects active | Proxy within |
| CLS | ≤ 0.1 | 0 to 0.006 | Met in lab |
| JS, gzipped | 110 KB budget | About 151 KB. React and Next.js alone are 122 KB | **Over budget.** Raise to 160 KB, recommended in SF-154 |

## Lighthouse, production build, clean headless profile, one run each

| Route | Desktop P / A / BP / SEO | Mobile P / A / BP / SEO | Mobile LCP |
|---|---|---|---|
| `/` | 100 / 100 / 100 / 66 | 95 / 100 / 100 / 66 | 2.8 s |
| `/agent` | 100 / 100 / 100 / 66 | 95 / 100 / 100 / 66 | 2.8 s |
| `/services` | 100 / 100 / 100 / 66 | 95 / 100 / 100 / 66 | 2.8 s |
| `/services/web-development` | 100 / 100 / 100 / 66 | 95 / 100 / 100 / 66 | 2.9 s |
| `/industries` | 100 / 100 / 100 / 66 | 96 / 100 / 100 / 66 | 2.8 s |
| `/industries/fintech` | 100 / 100 / 100 / 66 | 94 / 100 / 100 / 66 | 3.0 s |
| `/work` | 100 / 100 / 100 / 66 | 94 / 100 / 100 / 66 | 3.0 s |
| `/insights` | 100 / 100 / 100 / 66 | 97 / 100 / 100 / 66 | 2.6 s |
| `/contact` | 100 / 100 / 100 / 66 | 95 / 100 / 100 / 66 | 2.8 s |

Mobile LCP here is Lighthouse's **simulation**, which overstates it against localhost. Measured with applied throttling, the same pages paint at about 1.9–2.0 s. SEO 66 is the intended `noindex`: see the [SEO launch checklist](seo-launch-checklist.md).

**After this table, the industry hero preload** took FinTech's mobile LCP under applied throttling from 2.59 s to 1.83 s, and Logistics to 1.87 s.

## Watch after launch

Field LCP on mobile, the Russian pages' late Cyrillic font, and backdrop-filter cost on low-end phones.
