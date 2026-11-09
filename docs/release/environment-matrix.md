# Environment matrix

For SF-156. Every variable the code reads, from `src/config/env.ts`, `src/lib/email/delivery.ts`, `src/lib/legal/review.ts` and `next.config.ts`. **No other variable exists.** `.env.example` lists them, with no values. Only `.env.example` is tracked: `.gitignore` excludes every other `.env*` file, and none is committed.

| Variable | Exposure | Read when | Development | Preview | Production | If missing |
|---|---|---|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | **Public**, inlined | Build | Unset: `http://localhost:3000` | The production origin | The production origin | Local fallback, safe only because such builds are noindex. An indexable build fails without a public https value |
| `SITE_INDEXABLE` | Server and build | Build | Unset | Unset or `false` | `true` **only after launch approval** | `false`: noindex everywhere |
| `VERCEL_ENV` | Set by Vercel | Build and runtime | Unset | `preview` | `production` | Anything but `production` forces noindex, and refuses mock email |
| `EMAIL_PROVIDER` | Server only | Request | `mock` for QA, or unset | Unset, or `resend` for a smoke test | `resend`, once activated | Contact form unavailable |
| `RESEND_API_KEY` | **Server only, secret** | Request | Unset | A separate test key, only for a smoke test | Production sending-only key | Form unavailable |
| `CONTACT_FROM_EMAIL` | Server only | Request | Unset | Test sender on the verified domain | Approved sender | Form unavailable |
| `CONTACT_TO_EMAIL` | Server only | Request | Unset | **A test inbox, never a real one** | Approved inbox | Form unavailable |
| `CONTACT_LIVE_ENABLED` | Server only | Request | Unset | `true` only during a smoke test | `true` after activation | Form unavailable |
| `LEGAL_REVIEW_MODE` | Server and build | Build | Optional `true` for review | Optional, on a **protected** preview | **Never** | Drafts hidden |

## Guarantees enforced in code

| Rule | Where |
|---|---|
| Preview can't be indexable, even with `SITE_INDEXABLE=true` | `parseSiteEnv` |
| Indexable build needs a public https origin | `parseSiteEnv`, fails the build |
| Mock email refused in production or indexable builds | `parseSiteEnv`, and at runtime unless the host is loopback |
| Legal drafts refused in production or indexable builds | `parseSiteEnv`, `legalReviewEnabled` |
| Real delivery needs every Resend value, the live flag and an approved privacy policy | `resolveDelivery` |
| Canonicals come from `NEXT_PUBLIC_SITE_URL`, never the request's `Host` | `siteConfig`. A spoofed `Host` and `X-Forwarded-Host` were tested, and ignored |
| Server values never reach the browser | `server-only` imports, and `pnpm check:bundle` with a canary |
| No `NEXT_PUBLIC_` secret | Only the site origin is public |

`SECRET_CANARY` is read only by `scripts/check-client-bundle.mjs`, as a build-time check, and never by the site.

**Logging:** contact events log an event name, a correlation id and a provider message id. Never form content, addresses, IPs or keys. Checked in SF-151 and SF-155.
