# Production readiness

SF-156, the release-acceptance index. Decisions: [GO / NO-GO](go-no-go.md).

| Area | Document | Status |
|---|---|---|
| Environment | [environment-matrix.md](environment-matrix.md) | Ready |
| Hosting and domain | [vercel-domain-setup.md](vercel-domain-setup.md) | Ready to configure. **Domain blocked** |
| Email | [resend-activation.md](resend-activation.md) | Ready to activate. **Credentials, domain and rate limit blocked** |
| Privacy and analytics | [privacy-analytics-consent.md](privacy-analytics-consent.md) | **Legal blocked.** No analytics |
| SEO | [seo-launch-checklist.md](seo-launch-checklist.md) | **Intentionally blocked**, ready to enable |
| Content | [content-approval.md](content-approval.md) | **Founder approval pending** |
| Security | [security-review.md](security-review.md) | Ready |
| Performance | [performance-budget.md](performance-budget.md) | Lab within target, except Russian Home and the JS budget |
| Rollout, rollback, operations | [rollout-rollback.md](rollout-rollback.md) | Prepared, untested |
| QA | [release-readiness.md](../qa/release-readiness.md) | SF-155 |

## Changes made in SF-156

| Change | Why |
|---|---|
| `X-Frame-Options: DENY`, `Cross-Origin-Opener-Policy: same-origin` | Hardening |
| Social cards cache for a day, both languages | Were `max-age=0` |
| Industry hero image preloaded, AVIF only | It was the LCP element, found late |
| Owner-requested effects: smooth scrolling for same-page links, 3D card tilt, a glass highlight that follows the pointer, parallax on decorative layers | Owner request (GAP-D42). All off under reduced motion, pointer effects off on touch. Pixel-identical to SF-155 at rest |
| Reveal animations release the element when finished | A finished reveal held `transform: none` and cancelled the hover lift on revealed cards |

## Lighthouse remediation

The founder's report, Performance 97, Accessibility 100, Best Practices 100, SEO 66 at `http://localhost:3001/`, was investigated before anything changed.

### Runtime

**Very likely `next dev`.** The server had stopped before it could be inspected. Next.js 16 writes development output to `.next/dev`, which was written that morning, while the production `BUILD_ID` dated from two days earlier. Every development-specific warning in the report matches. **This is an inference, not an inspection.**

### Finding by finding

| Warning | In development | In production | Action |
|---|---|---|---|
| Blocked from indexing | Yes | **Yes, intended:** `noindex` and `Disallow` without `SITE_INDEXABLE=true` | None. With indexing enabled, approved pages score SEO 100 |
| Missing source maps | Yes | Yes, intended | **Kept off.** Publishing them would expose source. Upload privately to an error monitor if one is added |
| Render-blocking CSS, 80 ms | Yes | 100–110 ms estimated, 31 KB gzipped | `inlineCss` tested and **rejected**: first paint halved, but Home CLS rose to 0.101, and simulated LCP worsened |
| Network dependency tree | Yes | Yes, fonts after CSS | Preloads already in place since SF-154 |
| Legacy JavaScript, 8 KiB | Yes | 13 KiB | Next.js's own polyfills, such as `Array.prototype.at` and `Object.hasOwn`, inside its framework chunk. **Not actionable** without patching Next.js |
| Minify JavaScript, 204 KiB | Yes | **None.** Production is minified | Development only |
| Unused JavaScript, 521 KiB | Yes, including extensions | **About 30 KiB**, framework | All 19 client components are real interactions, so no change |
| bfcache, `no-store` and WebSocket | Yes | **Passes** on Home, Services and Contact | Development's hot-reload socket. Closed as not applicable |
| Minify CSS, 8 KiB | Yes | **None.** Production is minified | Development only |
| Extension scripts | Yes: Loom and others | None. Clean headless profile | Not ours |

### Clean production Lighthouse, one run each

Desktop: **Performance 100, Accessibility 100, Best Practices 100** on 9 routes. Mobile: Performance **94–97**, Accessibility 100, Best Practices 100. SEO **66 everywhere by design**. Full table: [performance budget](performance-budget.md).

With indexing enabled on a stand-in domain: **SEO 100** on Home, Services and a service page. 66 remains only on unapproved pages, which is the content gate working.
