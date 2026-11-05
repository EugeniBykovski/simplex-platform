# SimpleX website

Company website for SimpleX. Next.js App Router, strict TypeScript, Tailwind CSS, next-intl (English and Russian). The approved visual source is the [SimpleX Claude Design canvas](https://claude.ai/artifact/SHq68U3eVzySjKWCjgFwkG), pinned at version `1793869596-167d`.

**Status:** architecture and foundation only. No design pages are implemented yet.

## Getting started

Needs Node 20.9 or newer and pnpm.

```sh
pnpm install
cp .env.example .env.local
pnpm dev
```

| Command                    | Purpose                                                                                     |
| -------------------------- | ------------------------------------------------------------------------------------------- |
| `pnpm dev`                 | Development server                                                                          |
| `pnpm build`, `pnpm start` | Production build and server                                                                 |
| `pnpm verify`              | Typecheck, lint, i18n parity, docs validation, build                                        |
| `pnpm check:i18n`          | Fails on key, ICU or plural drift between languages                                         |
| `pnpm smoke:404`           | Against a running build, checks 404s are server-rendered in both languages (set `BASE_URL`) |
| `pnpm validate:docs`       | Fails on invalid JSON, dead links or broken coverage in `docs/`                             |

## Documentation

Start with the [system design](docs/architecture/system-design.md) and the [gap register](docs/design/design-gap-register.md), which lists the decisions waiting on the owner.

**Architecture:** [system design](docs/architecture/system-design.md) · [i18n](docs/architecture/i18n.md) · [route matrix](docs/architecture/route-matrix.md) · [route registry](docs/architecture/route-registry.json) · [component boundaries](docs/architecture/component-boundaries.md) · [contact and email](docs/architecture/contact-and-email.md) · [roadmap](docs/architecture/implementation-roadmap.md)

**Design:** [artboard inventory](docs/design/artboard-inventory.md) ([JSON](docs/design/artboard-inventory.json)) · [design system](docs/design/design-system-specification.md) · [components](docs/design/component-inventory.md) · [responsive](docs/design/responsive-specification.md) · [motion](docs/design/motion-interaction-specification.md) · [assets](docs/design/asset-manifest.md) · [gaps](docs/design/design-gap-register.md)

**Content:** [claims register](docs/content/content-and-claims-register.md)

**SEO:** [architecture](docs/seo/seo-architecture.md) · [page matrix](docs/seo/page-seo-matrix.md)

**QA:** [visual regression](docs/qa/visual-regression-strategy.md) · [test matrix](docs/qa/test-matrix.md)

## Rules worth knowing

- Use `Link`, `redirect` and `usePathname` from `@/i18n/navigation`. ESLint enforces this.
- Components are server components unless they need browser state.
- Never fill a `[bracketed]` placeholder with a guess, and never remove a demonstration label from content that is not real. See the [claims register](docs/content/content-and-claims-register.md).
- Russian pages stay out of search until their family is `approved` in `src/i18n/translation-status.ts`.
