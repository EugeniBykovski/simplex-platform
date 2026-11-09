# Vercel and domain setup

For SF-156. **Nothing here has been done.** No Vercel project, domain or DNS record exists for this site, and none was created. Hosting on Vercel is intended, but **not yet approved**.

## Compatibility, checked in a local production build

| Item | State |
|---|---|
| Build | `pnpm build` passes. Node 24 in CI and `.nvmrc`. `package.json` requires Node 20.9 or newer. **Set the Vercel project to Node 24** to match |
| Output | Standard Next.js server output. Not a static export: the proxy, Server Action, per-request Contact and Thank You pages, and 404 handling need a server |
| Static pages | All marketing, service, industry, work, company, legal and Insights pages |
| Dynamic | `/contact`, `/contact/thank-you`, both per request |
| Server Action | Contact form. Body limit 32 KB in `next.config.ts` |
| Route handlers | `/og/*` social cards, prerendered at build |
| Proxy | `src/proxy.ts`, next-intl locale routing |
| Redirects | `/en/*` to the bare path, 308, in `next.config.ts` |
| Headers | Security headers on every response, from `src/config/security-headers.ts` |
| Assets | Next.js hashes its own, as immutable. `public/images/design` and `/og/*` cache for a day |
| Fonts | `next/font` downloads Geist during the build. The build needs outbound network |
| `vercel.json` | Not needed |

## Environments

| Environment | Branch | Variables | Access |
|---|---|---|---|
| Production | `main` | See [environment matrix](environment-matrix.md) | Public, once approved |
| Preview | Any other branch, and pull requests | `NEXT_PUBLIC_SITE_URL` is the production origin. Nothing else, unless smoke-testing | **Turn on Vercel deployment protection.** A preview URL is not secret, and is noindex but not private |
| Development | Local | `.env.local`, never committed | Local |

**Never put production keys in Preview.** Use a separate Resend key, sending to a test inbox, and only for a smoke test.

## Domain checklist

| Item | Owner | Evidence needed | Status | Impact |
|---|---|---|---|---|
| Choose the domain | Founder | Written decision | **Not chosen (GAP-C08)** | Blocks everything below |
| Registrar access | Founder | Account confirmed | Unknown | Needed for DNS |
| Vercel project owner and team | Founder | Project created | Not created | Needed for deployment |
| Apex or `www` canonical | Founder | Decision | Not decided | Set `NEXT_PUBLIC_SITE_URL` to match |
| Redirect | Engineering | Vercel shows the other host redirecting, one 308 | Not configured | Prevents duplicate hosts |
| DNS | Founder, or engineering with access | Apex `A` or `ALIAS` and `www` `CNAME` as Vercel lists them | Not configured | Needed for launch |
| TLS | Vercel | Certificate active on both hosts | Not issued | Automatic, renews itself |
| Propagation | Engineering | `dig` from two resolvers, then `curl -I https://…` | Not done | |
| HSTS | Engineering | `Strict-Transport-Security` header present | Sent today, 1 year, no `includeSubDomains` or preload | Add those only once every subdomain is https |
| Email DNS | Engineering | SPF, DKIM, DMARC for the Resend sender | Not configured | See [Resend activation](resend-activation.md) |
| Existing site on the domain | Founder | Answer | Unknown (GAP-S02) | Old URLs may need redirects |

**DNS rollback:** keep the previous records and TTL noted before changing them. Lower the TTL a day ahead if anything already lives on the domain.
