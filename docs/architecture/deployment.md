# Deployment

**Nothing has been deployed**, and no hosting account, DNS record or domain has been configured. This is the guide for doing it. Launch itself belongs to SF-156.

## Hosting requirements

Any host that runs Next.js with a Node.js server works, and Vercel is the most direct. **Static export is not an option**, because `src/proxy.ts` and the 404 page need a server.

- Node.js 20.9 or newer. CI and `.nvmrc` use 24.
- pnpm 12.9.1, pinned through `packageManager` in `package.json`.
- Outbound network at build time: `next/font` downloads Geist from Google during the build, then serves it from this site. Visitors never contact Google.

## Commands

```sh
pnpm install --frozen-lockfile
pnpm build
pnpm start -p 3000
```

## Vercel setup

1. Import `EugeniBykovski/simplex-platform`. The framework and pnpm are detected.
2. Set environment variables per environment:

| Variable | Production | Preview |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://<production domain>` | `https://<production domain>` |
| `SITE_INDEXABLE` | `true`, **only when launch is approved** | `false` |

3. Leave `SITE_INDEXABLE` unset or `false` until launch. The code also blocks indexing on any `VERCEL_ENV` other than `production`.
4. Consider Vercel's deployment protection for previews, as a second layer.
5. Add the Resend variables only when SF-151 ships. See [environment-configuration.md](environment-configuration.md).

The production domain is still undecided (GAP-C08).

## GitHub

`.github/workflows/ci.yml` runs on pull requests and on pushes to `main`. It needs no secrets. Recommended, and not configured: protect `main` so the `verify` job must pass before merging. The owner's choice of working directly on `main` would need adjusting if this is turned on.

## Validate a deployment

Replace `$URL` with the deployment's address.

```sh
curl -sI $URL/nope                 # 404
curl -I $URL/                      # 200, security headers present
curl -I $URL/en                    # 307 to /
curl -s $URL/robots.txt            # Disallow on previews
curl -sI $URL/ | grep -i x-robots  # noindex on previews, absent on production
```

Then check in a browser that `/` and `/ru` load with no console errors, and that the switcher works.

## Before enabling indexing

Do not set `SITE_INDEXABLE=true` on production until:

- The placeholder home is replaced (SF-143). It carries a hard `noindex` until then.
- Routes approved for search are added to `indexableRoutes` in `src/config/routes.ts`.
- Launch blockers in the [gap register](../design/design-gap-register.md) are closed.

## Rollback

- **Vercel:** promote the previous production deployment in the dashboard, or with `vercel rollback`. This is instant, with no rebuild.
- **Other hosts:** keep the previous build artefact or image, and redeploy it.
- **Code:** use `git revert` on `main`. Do not rewrite history.
- Changing an environment variable requires a rebuild, because static pages bake in those values. An old deployment keeps its old values.
- If indexing was turned on by mistake: set `SITE_INDEXABLE=false`, rebuild, and use Search Console's removal tool.

## Logs

The application logs no secrets or personal data. Next.js logs server errors with a digest. There is no external log or monitoring service, and adding one needs approval.

## Not yet covered

Choosing the host, DNS, the Resend domain, monitoring and Search Console are all SF-156 or owner decisions.
