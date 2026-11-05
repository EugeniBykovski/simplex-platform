# Security boundaries

The audit below reflects the code at the end of SF-141. The site has no accounts, database or stored user data, and it sets no cookies. Form security is specified in [contact-and-email.md](contact-and-email.md) for SF-151.

## Audit

| Area | Finding | Control | Verified by |
|---|---|---|---|
| Secrets in client bundles | None | `server-only` on email config, no `NEXT_PUBLIC_` secrets | `pnpm check:bundle` with a canary |
| Server and client modules | One client boundary with data needs: only `common` and `errors` messages reach the browser | Provider receives named namespaces | Search of `.next/static` |
| Open redirects | The only redirect is next-intl's `/en` removal | Tested with `//evil.example`, `/en//evil.example` and encoded variants | `tests/e2e/security.spec.ts` |
| Untrusted query parameters | Not read anywhere | Test confirms a script payload is not reflected | `tests/e2e/security.spec.ts` |
| HTML injection | No `dangerouslySetInnerHTML` | SF-153 JSON-LD must escape `<` when it adds any | Code search |
| External links | None yet | New ones need `rel="noopener noreferrer"` with `target="_blank"` | Review |
| Remote images | None allowed: `remotePatterns` is empty | Optimiser returns 400 for remote URLs | `tests/e2e/platform.spec.ts` |
| Error exposure | Error pages never render `error.message` | Generic localised text | Tested with a temporary throwing page, since removed |
| Dependencies | `pnpm audit --prod` reports none | Run again before release | SF-156 |
| Cookies and tracking | None | Locale cookie disabled | `tests/e2e/locale-routing.spec.ts` |

## Security headers

Defined in `src/config/security-headers.ts`, applied to all responses, tested on `/`, `/ru` and `/nope`. They are off in `next dev`, whose tooling needs `eval`.

| Header | Value | Note |
|---|---|---|
| `Content-Security-Policy` | See below | |
| `Strict-Transport-Security` | `max-age=31536000` | No `includeSubDomains` or `preload` until the domain is known |
| `X-Content-Type-Options` | `nosniff` | |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | |
| `X-Robots-Tag` | `noindex, nofollow` | Non-indexable builds only |

### Content Security Policy

```
default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';
img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self';
form-action 'self'; frame-ancestors 'none'
```

**Limitation:** `script-src` allows `'unsafe-inline'`. Next.js inlines bootstrap scripts, and nonces would force every page to render dynamically, losing static delivery. This reduces, but does not remove, protection against injected scripts, so the main defence stays not rendering untrusted HTML at all. Consider hash-based CSP in SF-156 if the framework's support is mature by then.

**What was tested:** `/`, `/ru` and `/nope` load in Chromium with no violations or console errors. That covers Geist fonts, data-URI icons and hydration. **Not yet tested against the full design**, since those pages do not exist. Each page ticket must keep `tests/e2e/platform.spec.ts` passing for its route. `data:` in `img-src` is needed for the design's masked icons and noise texture.

A new external service, such as a scheduling embed or analytics, needs an explicit CSP change plus a privacy-policy entry.

## Rules for later tickets

- Server-only code imports `server-only`.
- Never put a secret in a `NEXT_PUBLIC_` variable.
- Never render visitor input as HTML, and never build a redirect target from a query parameter.
- `/contact?intent=` (GAP-F06), if built, must allow-list its values.
- Never log personal data or keys.
- Forms need the server-side rules in [contact-and-email.md](contact-and-email.md).
