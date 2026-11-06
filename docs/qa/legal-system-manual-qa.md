# Legal and system: manual QA

Manual record for SF-152, against design version `1793953114-553b`. No test tooling was added to the repository. Inspection ran from helpers outside it, against production builds on free ports, with each server started and stopped by PID.

**Browser actually inspected: Chromium only, in emulated viewports.** Safari, Firefox, physical iOS and Android, and screen readers were **not** checked.

**This is a source-render comparison, not a published-canvas comparison.** No lawyer reviewed anything here, and these checks say nothing about legal adequacy.

## Layout

| Check | Result |
|---|---|
| Public build | 152 views: 4 pages × 2 languages × 19 widths, 320 to 2560. No overflow, clipped text or console errors |
| Review-mode build | 152 views, same matrix. None |
| Header, footer | No navbar overflow. Footer base row reads correctly |

Viewed by eye: [public at 1440](evidence/sf-152/public-1440.jpg), [review beside source](evidence/sf-152/review-vs-source-1440.jpg), [390](evidence/sf-152/mobile-390.jpg), [768](evidence/sf-152/tablet-768.jpg), [404](evidence/sf-152/not-found.jpg). Viewing found the storage panel's intro taking the larger prose size, now fixed.

## Publication status, on the real registry

| Check | Result |
|---|---|
| All six pages | 200, "Not yet published", `noindex, nofollow` in meta and header |
| Draft text in public HTML | Absent, for ten sample strings, both languages |
| Draft text in `.next/static` and prerendered output | Absent |
| Effective or modified dates | None |
| Canonical | Own path. Russian canonicalises to English |
| hreflang, structured data | None |
| Sitemap | No legal page |
| `LEGAL_REVIEW_MODE` with `VERCEL_ENV=production` or an indexable build | `parseSiteEnv` refuses both |

## Approved path, with a temporary fixture

English privacy and terms were set to approved under a fake "QA Fixture" authority, in an indexable local build. **The registry was restored afterwards, and that text is confirmed absent from `src`. Nothing was approved.**

| Check | Result |
|---|---|
| Approved page | `index, follow`, real chips, no notice |
| Cookie Policy, still draft | `noindex`, notice |
| Russian privacy, still draft | `noindex`, notice, link to English |
| Sitemap | Only the two approved English pages, with `lastmod` |
| Contact note | Becomes a link to the policy |
| Contact, Resend against a local stub | Live, and 12 of 12 delivery checks pass |

**Back on the real registry, with every email value set and enabled:** the form is unavailable in both languages. **Real Resend was never called.**

## Storage audit

Details are in the [inventory](../content/cookie-storage-inventory.md).

| Check | Result |
|---|---|
| Pages crawled | 72, none dead |
| Third-party requests, third-party scripts, iframes | None |
| `localStorage`, `sessionStorage`, IndexedDB | Empty |
| Cookies after the crawl | None |
| Cookies after an accepted form | `contact_confirmation`: `HttpOnly`, `Lax`, 15 minutes, path `/` |
| `Secure` attribute | Not seen on local http. **Not verified on https** |
| Host's own cookies | **Unknown. No host is chosen** |
| Switches or checkboxes on the cookie page | 0 |
| "Cookie settings" in the footer | 0 |

## Navigation

28 checks in review mode, at 1440, 768 and 390, plus Russian at 390. 0 failures.

| Check | Result |
|---|---|
| Contents | 6 links. Each updates the hash and lands clear of the sticky header |
| Position | Sticky above 1000, in flow below |
| Touch targets | 38 px on desktop, 44 px as pills |
| Headings | One `h1`, no nesting skipped |
| Current document | One `aria-current="page"` |
| Keyboard | Focus ring visible |
| Footer base | Real routes only |
| `href="#"` | None across 72 pages |

## 404

| URL | Result |
|---|---|
| `/nope`, `/404`, `/privacy-policy/x`, `/contact/nope` | 404, English, `noindex` |
| `/ru/nope` | 404, Russian |
| `/en/terms` | 307 to `/terms` |
| Public text | No stack trace or error detail |
| Sitemap | No entry |

The error boundary has no board and wasn't changed.

## Contact dependency

| Check | Result |
|---|---|
| Form collects personal data | Yes: name, email, company, description |
| Privacy notice | Disclosure beside the form, stating the policy isn't published |
| Mock active | Only with `EMAIL_PROVIDER=mock` on loopback |
| Real delivery | Not enabled, and refused without an approved policy |
| Finding | With no configuration, the form's fields and submit are disabled, so public visitors can neither enter nor send anything. **No personal data is collected in production today** |

## Accessibility

| Check | Result |
|---|---|
| Lighthouse accessibility | 100 on all six legal pages, public state. **The 404 could not be scored: Lighthouse produced no result for a 404 response** |
| Semantics | `main`, `nav` with names, `section`, `dl`, `role="note"` |
| Reduced motion | Layout checks ran with it on |
| Contrast | Lighthouse only |
| Screen reader | **Not tested** |

## Lighthouse

One mobile run per page, simulated throttling, local production build, public state. **Indicative only.**

| Page | Performance | Accessibility | Best practices | SEO | LCP | CLS | TBT | Weight |
|---|---|---|---|---|---|---|---|---|
| `/privacy-policy` | 94 | 100 | 100 | 66 | 3.1 s | 0 | 0 ms | 362 KiB |
| `/cookie-policy` | 94 | 100 | 100 | 66 | 3.1 s | 0 | 0 ms | 362 KiB |
| `/terms` | 94 | 100 | 100 | 66 | 3.1 s | 0 | 0 ms | 361 KiB |
| `/ru/privacy-policy` | 94 | 100 | 100 | 66 | 3.1 s | 0 | 0 ms | 367 KiB |
| `/ru/cookie-policy` | 94 | 100 | 100 | 66 | 3.1 s | 0 | 0 ms | 368 KiB |
| `/ru/terms` | 94 | 100 | 100 | 66 | 3.1 s | 0 | 0 ms | 367 KiB |

SEO is 66 because of the deliberate `noindex`. **LCP remains above the 2.5 s target**, for SF-154.

## Open

- **Legal approval of every document, in each language.**
- The host's cookies, and `Secure` on https.
- Published-canvas comparison.
- Safari, Firefox, physical devices and a screen-reader pass.
- Native Russian review.
