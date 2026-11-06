# Environment configuration

Rules live in `src/config/env.ts`. The template is `.env.example`. **Real values never go in Git:** `.gitignore` excludes every `.env*` file except the template.

## Variables

| Variable | Exposure | Used now | Required | Validated |
|---|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Public, inlined into pages | Yes | Only when `SITE_INDEXABLE=true` | At build and at startup. Must be an origin with no path |
| `SITE_INDEXABLE` | Server and build | Yes | No, defaults to `false` | Must be `true` or `false`. A typo fails the build |
| `VERCEL_ENV` | Set by Vercel | Yes | No | Anything other than `production` forces non-indexable |
| `EMAIL_PROVIDER` | Server only | Yes | No. Unset means the form is unavailable | `mock` or `resend`, per request. `mock` fails the build when indexable or `VERCEL_ENV=production` |
| `RESEND_API_KEY` | **Server only, secret** | With `resend` | For real delivery | Per request. Missing means unavailable |
| `CONTACT_FROM_EMAIL` | Server only | With `resend` | For real delivery | Must be one plain address |
| `CONTACT_TO_EMAIL` | Server only | With `resend` | For real delivery | Must be one plain address |
| `CONTACT_LIVE_ENABLED` | Server only | With `resend` | For real delivery | Must be exactly `true`. Set only after the [activation procedure](contact-and-email.md#activation-procedure) |

`CONTACT_TO_EMAIL` replaces the earlier `CONTACT_INBOX_EMAIL`, following the SF-151 amendment. Nothing was deployed with the old name.

There are no analytics identifiers, because no analytics provider has been approved (GAP-F03).

## Environments

| Environment | `NEXT_PUBLIC_SITE_URL` | `SITE_INDEXABLE` | Result |
|---|---|---|---|
| Local, CI | Unset | Unset | Builds. Canonical uses `http://localhost:3000`. `noindex`, `X-Robots-Tag`, robots disallow all |
| Preview | Production domain | `false` | `noindex`. Canonicals point at production, never at the preview URL |
| Production | Production domain | `true` | Indexing allowed per page |

| Environment | `EMAIL_PROVIDER` | Other email values | Form |
|---|---|---|---|
| Local | Unset | | Unavailable |
| Local QA | `mock` | | Demo mode, on a loopback host only |
| Preview | Unset, or `resend` with a test inbox only for the smoke test | Separate key and inbox. **Never a real inbox** | Unavailable until `CONTACT_LIVE_ENABLED=true` |
| Production | `resend` | Production key, verified sender, approved recipient, and `CONTACT_LIVE_ENABLED=true` once activated | **Unavailable today** |

`EMAIL_PROVIDER=mock` on a preview or a public host shows the unavailable state.

A missing URL is safe outside production because those builds are always `noindex`. A build that may be indexed has to name a public `https` origin, or it fails.

**Set `NEXT_PUBLIC_SITE_URL` before building.** Static pages bake it in, and changing it needs a rebuild. `SITE_INDEXABLE` is also read at build time for static pages and headers.

## Boundaries

- Anything prefixed `NEXT_PUBLIC_` ends up in browser code. Never use the prefix for a secret.
- Read email settings only through `resolveDelivery` in `src/lib/email/delivery.ts`, which uses `getEmailConfig()` in `src/lib/email/config.ts`. It imports `server-only`, so importing it from a Client Component fails the build.
- Error messages name variables and never print secret values.
- `pnpm check:bundle` searches browser files after a build for server variable names and for a canary value. See [security-boundaries.md](security-boundaries.md).

## Commands

```sh
cp .env.example .env.local     # optional for local work
pnpm dev
```

Check a production-like build locally, without touching real services:

```sh
NEXT_PUBLIC_SITE_URL=https://example.com SITE_INDEXABLE=true pnpm build
```
