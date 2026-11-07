# Remaining performance and asset issues

For SF-154.

## Blocked

| Issue | Needs |
|---|---|
| **Rights for the 7 background images are unknown** (GAP-A01) | Owner confirms origin |
| Social cards unapproved (GAP-A02) | Owner approval |
| **Field Core Web Vitals: NOT AVAILABLE** | Deployment and an approved measurement source (GAP-F03) |

## Decisions for the owner

| Issue | Trade-off |
|---|---|
| **Home's hero fade delay.** The lead appears after a designed 0.5 s, plus 1.2 s fade | Shorter is faster to read, but changes approved motion. Not changed |
| Budget of 110 KB gzipped JS | React and Next.js alone are 122 KB. **Recommend raising to about 160 KB**, or accepting a stack change |
| Router prefetching, about 37 KB after load on Home | Instant navigation against data use. Kept |

## Technical

| Issue | Note |
|---|---|
| Russian pages load Cyrillic late, with LCP 2.63 s on `/ru`. It's over target | Consider per-locale fonts when Russian is approved. A noindex draft today |
| LCP is limited by the 31 KB render-blocking stylesheet | Critical-CSS extraction is possible, but risky for this design. Re-measure on real hosting first |
| next-intl's ICU parser in the browser, 14 KB | Would need replacing its client navigation |
| Backdrop-filter cost on low-end phones (GAP-V05) | Needs a real device. Glass is unchanged |
| `/en/` takes two redirects | From SF-153. Minor |

## Not verified

Safari, iOS, Firefox, physical devices and screen readers. HTTP/2, CDN and host caching. The cause inside Lighthouse of its 3.7 s mode.
