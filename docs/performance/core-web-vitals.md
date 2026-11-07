# Core Web Vitals

For SF-154. **Field data: NOT AVAILABLE.** There is no deployment, analytics or real-user source. Everything here is local lab data, and doesn't prove real-user Core Web Vitals. Targets, at the 75th percentile: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1.

## A measurement problem came first

Three Lighthouse methods disagreed badly, and the differences matter for reading any number here.

| Method | What it showed | Finding |
|---|---|---|
| Lighthouse simulated | LCP about 3.3–3.9 s everywhere, observed LCP around 100 ms | Against localhost everything finishes before LCP, so the simulation treats all JS and images as LCP dependencies. **Overstated** |
| Lighthouse applied throttling | LCP flips between about 2.0 s and exactly about 3.7 s on the same URL | **Unusable as medians of 3.** An interim run looked like "3.7 → 2.0 s", which was this flip, not a gain. It was retracted |
| Playwright harness, same throttling values | 0 of 24 runs at 3.7 s, in either headless mode | Stable. **The figures below use this** |

The 3.7 s mode is about navigation commit + 3 s, and Next's prefetches start at the same moment, suggesting no frames were produced until then. A no-framework control page was also bimodal under Lighthouse, at 1.34 or 1.67 s. **The cause inside Lighthouse's setup wasn't identified.**

## Results

**Environment:** local `next start` over HTTP/1.1, Chromium 156 headless shell, macOS, 412×823 at 1.75×, 1.44 Mbps down, 562.5 ms latency, 4× CPU, no cache, 7 fresh contexts per route. Before is `24a8eae`, measured the same way. **HTTP/2 hosting, a CDN or real devices will differ.**

| Route | LCP before, median (range) | LCP after, median (range) | CLS, worst run |
|---|---|---|---|
| `/` | 1952 (1948–2420) | **1896 (1888–1908)** | 0 |
| `/agent` | 1908 (1896–2200) | 1904 (1900–1912) | 0 |
| `/services` | 1900 (1896–2164) | 1932 (1916–1944) | 0 |
| `/services/web-development` | 1884 (1884–2132) | 1924 (1920–1928) | 0 |
| `/packages` | 2248 (1936–2252) | **1960 (1948–1972)** | 0 |
| `/industries` | 1876 (1876–2108) | 1928 (1920–1936) | 0 |
| `/work/ledgerline` | 1876 (1876–2108) | 1924 (1916–1932) | 0 |
| `/insights` | 1852 (1848–2056) | 1888 (1884–1904) | 0 |
| `/contact` | 2120 (2120–2128) | **1904 (1900–1912)** | 0 |
| `/terms` | 1852 (1840–2056) | 1884 (1880–1888) | 0 |
| `/ru` | 2572 (1956–2616) | 2632 (2632–2632) | 0.002 |

## Honest reading

- **LCP did not materially improve on typical routes.** Several medians are 30–50 ms *worse*, within what the harness can't separate from noise. Packages and Contact improved by 200–300 ms.
- **Results are far more consistent.** The worst run fell by up to 500 ms on Home, and ranges tightened on 10 of 11 routes.
- **English routes are under 2.5 s in this profile, before and after.** So is every route but `/ru`.
- **What really improved is cost:** page weight, fonts, images and main-thread work, below.

**Why LCP barely moved:** on this profile, first paint waits for the 32 KB stylesheet. Fewer fonts free bandwidth, but over HTTP/1.1 the large scripts then take it. HTTP/2 priorities could behave better. **Not measured.**

## Cost

Lighthouse transfer on Home, mobile, one run each:

| Type | Before | After |
|---|---|---|
| Fonts | 113 KB | 53 KB |
| Images | 231 KB | 51 KB |
| Scripts | 164 KB | 162 KB |
| CSS | 32 KB | 33 KB |
| **Page total, median** | **619 KiB** | **378 KiB** |
| Main-thread work | 2.5 s | 1.4 s |
| Non-composited animations | 7 | 0 |

## Home's LCP element

**The 1.90 s is flattering.** At first paint, Home's `h1` sits behind its reveal mask, so only a sliver counts (size 2,583), and the larger lead paragraph (26,488) fades in afterwards. Chrome doesn't re-record it, so the metric stops early. A visitor sees the hero finish at about 3 s under this profile, with or without this work, because of the designed 0.5 s delay and 1.2 s fade.

Starting the fade at `opacity: 0.001` would be a metric-only trick, and wasn't used. **Shortening the delay is a design decision**, listed in [remaining issues](remaining-issues.md).

## INP

**Field INP: NOT AVAILABLE.** As a lab proxy, the slowest `event` entry per scripted interaction, at 4× CPU, 3 runs. This isn't INP.

| Interaction | Median of worst event |
|---|---|
| Mega menu, desktop | 32 ms |
| Mobile menu | 48 ms |
| Estimator control | 40 ms |
| Packages tab | 64 ms |
| Work filter | 32 ms |
| Contact typing | 72 ms |

All well under 200 ms. TBT was 0–10 ms in Lighthouse.

## Lighthouse, for reference

Median perf and LCP. **Read with the caveats above.**

| Page | Simulated before | Simulated after | Applied throttling after, 5 runs |
|---|---|---|---|
| `/` | 88, 3896 ms | 95, 2847 ms | 98, 1933 ms (1926–3730) |
| `/services/web-development` | 91, 3515 ms | 95, 2915 ms | 81, 3700 ms (1945–3727) |
| `/contact` | 92, 3281 ms | 95, 2840 ms | 98, 1932 ms (1920–2723) |

The service page's 81 is the tool's flip. The simulated gain comes mostly from fewer bytes being counted, not from a proven faster paint.
