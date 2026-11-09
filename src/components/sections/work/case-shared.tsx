import { SeoBreadcrumbs } from "@/components/seo/seo-breadcrumbs";
import { LinkButton } from "@/components/ui/button";
import { Alert, Tag } from "@/components/ui/feedback";
import { Icon } from "@/components/ui/icon";
import { RouteLink } from "@/components/ui/links";
import { CardArrow } from "@/components/ui/surface";
import type { Project, WorkSharedCopy } from "@/content/work";
import type { Locale } from "@/i18n/routing";
import { ProjectVisual } from "./project-visual";
import { platformLine } from "./work-overview";

type PageProps = { project: Project; shared: WorkSharedCopy; locale: Locale };

/** One template for every project, so each page states the same facts in the same places. */
export function ProjectHero({ project, shared, locale }: PageProps) {
  const words = project.words[locale];
  const { breadcrumb, labels } = shared;
  const facts = [
    { key: labels.category, value: words.category },
    { key: labels.role, value: words.role },
    { key: labels.status, value: words.status },
    { key: labels.platforms, value: platformLine(project, shared) },
  ];
  return (
    <section
      className="bg-horizon is-live p-[190px_0_96px] overflow-hidden"
      aria-labelledby="project-title"
    >
      <div className="wrap stack gap-[56px]">
        <div className="split items-end">
          <div className="stack gap-6">
            <SeoBreadcrumbs
              path={`/work/${project.slug}`}
              label={breadcrumb.label}
              items={[
                { label: breadcrumb.home, href: "/" },
                { label: breadcrumb.work, href: "/work" },
                { label: project.name },
              ]}
            />
            <div className="wrap-row gap-2">
              <Tag className="h-auto min-h-[34px] py-[6px] whitespace-normal max-w-full">
                {words.category}
              </Tag>
              <Tag>{words.status}</Tag>
            </div>
            <h1 className="t-h1" id="project-title">
              {project.name}
            </h1>
            <p className="t-lead text-text">{words.tagline}</p>
          </div>
          <div className="stack gap-5">
            <p className="t-body">{words.summary}</p>
            <dl
              className="glass grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-[18px] p-[24px] rounded-[24px]"
              aria-label={labels.details}
            >
              {facts.map((fact) => (
                <div className="stack gap-1" key={fact.key}>
                  <dt className="t-mono text-text-3">{fact.key}</dt>
                  <dd className="t-small text-text">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <ProjectVisual
          project={project}
          caption={words.status}
          stackCount={8}
          className="reveal-scale rounded-[34px] min-h-[360px]"
        />
      </div>
    </section>
  );
}

export function ProjectScope({ project, shared, locale }: PageProps) {
  const words = project.words[locale];
  const { labels } = shared;
  return (
    <section className="section" aria-labelledby="built">
      <div className="wrap stack gap-8">
        <div className="split">
          <div className="stack gap-4">
            <p className="eyebrow">{labels.built}</p>
            <h2 className="t-h2" id="built">
              {labels.builtLead}
            </h2>
          </div>
          <ul className="checks">
            {words.built.map((item) => (
              <li key={item}>
                <Icon name="check" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="split">
          <div className="stack gap-4">
            <p className="eyebrow">{labels.next}</p>
            <p className="t-body">{labels.nextLead}</p>
          </div>
          <ul className="checks">
            {words.next.map((item) => (
              <li key={item}>
                <Icon name="clock" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function ProjectEngineering({ project, shared, locale }: PageProps) {
  const words = project.words[locale];
  const { labels } = shared;
  return (
    <section className="bg-mist section" aria-labelledby="engineering">
      <div className="wrap split items-start">
        <div className="stack gap-5">
          <h2 className="eyebrow" id="engineering">
            {labels.engineering}
          </h2>
          <ul className="stack gap-4">
            {words.engineering.map((item) => (
              <li className="glass p-[22px] rounded-[20px] t-body" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="stack gap-5">
          <h2 className="eyebrow">{labels.stack}</h2>
          <ul className="wrap-row gap-2">
            {project.stack.map((item) => (
              <li className="chip chip-outline" key={item}>
                {item}
              </li>
            ))}
          </ul>
          {words.note ? (
            <Alert tone="info" role="note">
              <b>{labels.note}.</b> {words.note}
            </Alert>
          ) : null}
          <p className="t-small">{shared.scope}</p>
        </div>
      </div>
    </section>
  );
}

export function ProjectNext({
  shared,
  next,
  locale,
}: {
  shared: WorkSharedCopy;
  next: Project;
  locale: Locale;
}) {
  return (
    <section className="paper p-[0]" aria-label={shared.next.label}>
      <RouteLink
        href={`/work/${next.slug}`}
        className="wrap row between gap-6 card-hover flex [padding-block:72px]"
      >
        <span className="stack gap-3">
          <span className="t-mono text-text-3">
            {shared.next.label} · {next.words[locale].category}
          </span>
          <span className="t-h1">{next.name}</span>
          <span className="t-body">{next.words[locale].tagline}</span>
        </span>
        <CardArrow />
      </RouteLink>
    </section>
  );
}

export function ProjectCta({ shared }: { shared: WorkSharedCopy }) {
  const { cta } = shared;
  return (
    <section className="bg-ink p-[120px_0]" aria-labelledby="case-cta">
      <div className="wrap split items-end">
        <h2 className="t-h1 [&:lang(ru)]:hyphens-auto" id="case-cta">
          {cta.title}
        </h2>
        <div className="stack gap-5">
          <p className="t-lead">{cta.lead}</p>
          <div className="wrap-row gap-3">
            <LinkButton href="/contact" variant="light" size="lg" arrow>
              {cta.primary}
            </LinkButton>
            <LinkButton href="/work" variant="ghost" size="lg">
              {cta.secondary}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
