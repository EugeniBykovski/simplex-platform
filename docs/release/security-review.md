# Security review

For SF-156. Headers read from a local production build's responses. Earlier reviews: [security-boundaries.md](../architecture/security-boundaries.md).

| Header | Value | Note |
|---|---|---|
| `Content-Security-Policy` | `default-src 'self'`, scripts and styles `'self' 'unsafe-inline'`, images `'self' data:`, fonts and connections `'self'`, `object-src 'none'`, `base-uri 'self'`, `form-action 'self'`, `frame-ancestors 'none'` | No third-party origin, no wildcard. **`'unsafe-inline'` for scripts is a deliberate trade-off:** static pages can't carry per-request nonces, and Next.js inlines bootstrap scripts. A nonce CSP would make every page dynamic. Revisit if a page ever handles secrets |
| `Strict-Transport-Security` | `max-age=31536000` | Sent on every response. Ignored over local http. No `includeSubDomains` or preload until subdomains are known |
| `X-Content-Type-Options` | `nosniff` | |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | |
| `Permissions-Policy` | Camera, microphone, geolocation off | |
| `X-Frame-Options` | `DENY` | **Added in SF-156**, for browsers without `frame-ancestors` |
| `Cross-Origin-Opener-Policy` | `same-origin` | **Added in SF-156** |
| `X-Robots-Tag` | `noindex, nofollow` | Non-indexable builds only |
| `X-Powered-By` | Not sent | |

**Checked:** pages, the contact page, social cards, images and `robots.txt` all carry the same set. Menus, fonts, images, the form and the Server Action still work.

| Area | Result |
|---|---|
| Host header | A spoofed `Host` or `X-Forwarded-Host` doesn't change canonicals or social URLs |
| Secrets | None in Git. Canary build clean. No `NEXT_PUBLIC_` secret |
| Contact | See [Resend activation](resend-activation.md#abuse-protection). **Cross-instance rate limiting is missing**, which blocks real delivery |
| Errors | 404 and error pages show no stack or detail |
| Source maps | **Not published**, which is Next.js's default. Kept that way. If error monitoring is added, upload maps privately to that service at build time, and don't serve them |
| Dependencies | No new ones in SF-156 |
