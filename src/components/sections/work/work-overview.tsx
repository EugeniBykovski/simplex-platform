import { SeoBreadcrumbs } from "@/components/seo/seo-breadcrumbs";
import { LinkButton } from "@/components/ui/button";
import { Alert, Tag } from "@/components/ui/feedback";
import { Icon } from "@/components/ui/icon";
import { ArrowLink, RouteLink } from "@/components/ui/links";
import {
  projects,
  type Project,
  type ProjectCapability,
  type WorkOverviewCopy,
  type WorkSharedCopy,
} from "@/content/work";
import type { Locale } from "@/i18n/routing";
import { ProjectVisual } from "./project-visual";
import { WorkGrid } from "./work-grid";

/** The platforms a project ships on, in one line. */
export const platformLine = (project: Project, shared: WorkSharedCopy) =>
  project.platforms.map((platform) => shared.platforms[platform]).join(" · ");

/** The Work index: the hero, one featured project, the filterable grid and the CTA. */
export function WorkHero({ content }: { content: WorkOverviewCopy }) {
  const { hero, breadcrumb } = content;
  return (
    <section
      className="bg-horizon is-live p-[210px_0_120px] overflow-hidden"
      aria-labelledby="work-title"
    >
      <div className="wrap split items-end">
        <div className="stack gap-6">
          <SeoBreadcrumbs
            path="/work"
            label={breadcrumb.label}
            items={[{ label: breadcrumb.home, href: "/" }, { label: breadcrumb.current }]}
          />
          <h1 className="t-h1 [&:lang(ru)]:hyphens-auto" id="work-title">
            <span className="block pb-[.06em]">{hero.lines[0]} </span>
            <span className="block pb-[.06em] t-grad">{hero.lines[1]}</span>
          </h1>
        </div>
        <div className="stack gap-4">
          <p className="t-lead">{hero.lead}</p>
          <Alert tone="info" role="note">
            <b>{hero.noticeTitle}</b> {hero.notice}
          </Alert>
        </div>
      </div>
    </section>
  );
}

export function WorkFeatured({
  content,
  shared,
  locale,
}: {
  content: WorkOverviewCopy;
  shared: WorkSharedCopy;
  locale: Locale;
}) {
  const [project] = projects;
  if (!project) return null;
  const words = project.words[locale];
  return (
    <section className="p-[0_0_96px]" aria-label={content.featured.tag}>
      <div className="wrap">
        <RouteLink
          href={`/work/${project.slug}`}
          className="solid card-hover panel-split overflow-hidden rounded-[34px] [box-shadow:var(--shadow-2)] border-0 min-h-[520px]"
        >
          <div className="stack p-[clamp(28px,4cqi,56px)] justify-between gap-[32px] bg-[#EEF0F5]">
            <div className="stack gap-5">
              <div className="wrap-row gap-2">
                <Tag>{content.featured.tag}</Tag>
                <Tag>{words.category}</Tag>
              </div>
              <span className="t-h1">{project.name}</span>
              <span className="t-lead text-text">{words.tagline}</span>
            </div>
            <div className="stack gap-4">
              <span className="t-mono text-text-3">{platformLine(project, shared)}</span>
              <span className="btn btn-primary self-start">
                {content.featured.read}
                <span className="sr-only">: {project.name}</span>
                <Icon name="arrow" />
              </span>
            </div>
          </div>
          <ProjectVisual
            project={project}
            caption={words.status}
            stackCount={6}
            className="reveal-scale min-h-[320px]"
          />
        </RouteLink>
      </div>
    </section>
  );
}

const FOCUS_ORDER: readonly ProjectCapability[] = ["realtime", "payments", "ai", "marketplace"];

export function WorkProjects({
  content,
  shared,
  locale,
}: {
  content: WorkOverviewCopy;
  shared: WorkSharedCopy;
  locale: Locale;
}) {
  const { grid } = content;
  return (
    <section className="bg-mist section pt-[88px]" aria-labelledby="all">
      <WorkGrid
        copy={grid}
        locale={locale}
        platforms={[
          { id: "mobile", label: grid.platforms.mobile },
          { id: "web", label: grid.platforms.web },
        ]}
        focuses={FOCUS_ORDER.map((id) => ({ id, label: grid.capabilities[id] }))}
        emptyAction={<LinkButton href="/contact">{grid.empty.ask}</LinkButton>}
        projects={projects.map((project) => {
          const words = project.words[locale];
          const mobile = project.platforms.some((p) => p === "ios" || p === "android");
          return {
            id: project.slug,
            platforms: [
              ...(mobile ? ["mobile"] : []),
              ...(project.platforms.includes("web") ? ["web"] : []),
            ],
            focuses: project.capabilities,
            card: (
              <article className="solid card-hover stack overflow-hidden">
                <ProjectVisual
                  project={project}
                  caption={platformLine(project, shared)}
                  stackCount={3}
                  className="h-[260px] p-[18px]"
                />
                <div className="stack gap-3 p-[26px] flex-1">
                  <span className="t-mono text-text-3">{words.category}</span>
                  <h3 className="t-h4">{project.name}</h3>
                  <p className="t-small">{words.tagline}</p>
                  <div className="wrap-row gap-2 mt-[4px]">
                    {project.capabilities.map((capability) => (
                      <span className="chip" key={capability}>
                        {grid.capabilities[capability]}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-[14px]">
                    <ArrowLink href={`/work/${project.slug}`}>
                      {grid.read}
                      <span className="sr-only">: {project.name}</span>
                    </ArrowLink>
                  </div>
                </div>
              </article>
            ),
          };
        })}
      />
    </section>
  );
}

export function WorkCta({ content }: { content: WorkOverviewCopy["cta"] }) {
  return (
    <section className="bg-cta dark p-[140px_0]" aria-labelledby="work-cta">
      <div className="wrap split items-end">
        <h2 className="t-h1" id="work-cta">
          {content.title}
        </h2>
        <div className="stack gap-5">
          <p className="t-lead">{content.lead}</p>
          <div className="wrap-row gap-3">
            <LinkButton href="/contact" size="lg" arrow>
              {content.primary}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
