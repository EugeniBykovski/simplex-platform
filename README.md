# SimpleX website

Company website for SimpleX. Next.js App Router, strict TypeScript, Tailwind CSS, next-intl (English and Russian). The approved visual source is the [SimpleX Claude Design canvas](https://claude.ai/artifact/SHq68U3eVzySjKWCjgFwkG), pinned at version `1793869596-167d`.

**Status:** foundation and design system are built. No design pages are implemented yet, and nothing is deployed.

## Getting started

Needs Node 20.9 or newer (`.nvmrc` has 24) and pnpm. No environment variables are required for local work.

```sh
pnpm install
pnpm dev
```

| Command                    | Purpose                                                                                                                                                                             |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm dev`                 | Development server                                                                                                                                                                  |
| `pnpm build`, `pnpm start` | Production build and server                                                                                                                                                         |
| `pnpm verify`              | Format, types, lint, unit tests, i18n, docs, build, client-bundle check                                                                                                             |
| `pnpm test:unit`           | Vitest                                                                                                                                                                              |
| `pnpm test:e2e`            | Playwright on Chromium, Firefox and WebKit, against a production build on a free port. Run `pnpm build:test` first, and `pnpm exec playwright install chromium firefox webkit` once |
| `pnpm check:i18n`          | Fails on key, ICU or plural drift between languages                                                                                                                                 |
| `pnpm check:bundle`        | Fails if server-only values reach browser files                                                                                                                                     |
| `pnpm smoke:404`           | Checks server-rendered 404s on a running site (set `BASE_URL`)                                                                                                                      |
| `pnpm validate:docs`       | Fails on invalid JSON, dead links or broken coverage in `docs/`                                                                                                                     |

## Documentation

Start with the [system design](docs/architecture/system-design.md) and the [gap register](docs/design/design-gap-register.md), which lists the decisions waiting on the owner.

**Architecture:** [system design](docs/architecture/system-design.md) · [i18n](docs/architecture/i18n.md) · [route matrix](docs/architecture/route-matrix.md) · [route registry](docs/architecture/route-registry.json) · [component boundaries](docs/architecture/component-boundaries.md) · [contact and email](docs/architecture/contact-and-email.md) · [environment](docs/architecture/environment-configuration.md) · [deployment](docs/architecture/deployment.md) · [security](docs/architecture/security-boundaries.md) · [roadmap](docs/architecture/implementation-roadmap.md)

**Design:** [artboard inventory](docs/design/artboard-inventory.md) ([JSON](docs/design/artboard-inventory.json)) · [design system](docs/design/design-system-specification.md) · [components](docs/design/component-inventory.md) · [component implementation](docs/design/component-implementation.md) · [responsive](docs/design/responsive-specification.md) · [motion](docs/design/motion-interaction-specification.md) · [assets](docs/design/asset-manifest.md) · [gaps](docs/design/design-gap-register.md)

**Content:** [claims register](docs/content/content-and-claims-register.md)

**SEO:** [architecture](docs/seo/seo-architecture.md) · [page matrix](docs/seo/page-seo-matrix.md)

**QA:** [visual regression](docs/qa/visual-regression-strategy.md) · [test matrix](docs/qa/test-matrix.md)

## Rules worth knowing

- Use `Link`, `redirect` and `usePathname` from `@/i18n/navigation`. ESLint enforces this.
- Components are server components unless they need browser state.
- Link to site routes through `RouteLink` or `LinkButton`, and add a route to `implementedRoutes` when its page ships.
- Do not name a Tailwind class like a design class. `pnpm check:bundle` catches collisions.
- Never fill a `[bracketed]` placeholder with a guess, and never remove a demonstration label from content that is not real. See the [claims register](docs/content/content-and-claims-register.md).
- Russian pages stay out of search until their family is `approved` in `src/i18n/translation-status.ts`.
