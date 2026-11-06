import { LinkButton } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/controls";
import { cx } from "@/components/ui/cx";
import { Alert, DemoTag, Tag } from "@/components/ui/feedback";
import { Icon } from "@/components/ui/icon";
import { ArrowLink, RouteLink } from "@/components/ui/links";
import { SectorGround } from "@/components/ui/surface";
import type { Locale } from "@/i18n/routing";
import { workProjects, type WorkOverviewCopy, type WorkService } from "@/content/work";
import { WorkGrid } from "./work-grid";

/** The sections of Work.dc.html, in its order, without the withheld reference block (GAP-C02). */
export function WorkHero({ content }: { content: WorkOverviewCopy }) {
  const { hero, breadcrumb } = content;
  return (
    <section
      className="bg-horizon is-live p-[210px_0_120px] overflow-hidden"
      aria-labelledby="work-title"
    >
      <div className="wrap split items-end">
        <div className="stack gap-6">
          <Breadcrumbs
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

const BARS = [
  "h-[50%]",
  "h-[66%]",
  "h-[44%]",
  "h-[82%]",
  "h-[60%]",
  "h-[92%]",
  "h-[74%]",
  "h-[58%]",
] as const;

export function WorkFeatured({ content }: { content: WorkOverviewCopy }) {
  const { featured, grid } = content;
  return (
    <section className="p-[0_0_96px]" aria-label={featured.tag}>
      <div className="wrap">
        <RouteLink
          href="/work/ledgerline"
          className="solid card-hover panel-split overflow-hidden rounded-[34px] [box-shadow:var(--shadow-2)] border-0 min-h-[560px]"
        >
          <div className="stack p-[clamp(28px,4cqi,56px)] justify-between gap-[32px] bg-[#EEF0F5]">
            <div className="stack gap-5">
              <div className="wrap-row gap-2">
                <Tag>{featured.tag}</Tag>
                <Tag>{grid.industries.fintech}</Tag>
                <DemoTag>{content.hero.demoTag}</DemoTag>
              </div>
              <span className="t-h1">Ledgerline</span>
              <span className="t-lead text-text">{featured.tagline}</span>
            </div>
            <div className="stack gap-4">
              <div className="wrap-row gap-2">
                {featured.chips.map((chip) => (
                  <span className="chip chip-outline" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
              <span className="btn btn-primary self-start">
                {featured.read}
                <span className="sr-only">: Ledgerline</span>
                <Icon name="arrow" />
              </span>
            </div>
          </div>
          <SectorGround
            sector="fintech"
            className="reveal-scale rounded-[0] grid place-items-center p-[40px]"
          >
            <span className="slice" />
            <div className="mock w-full max-w-[560px]" aria-hidden="true">
              <div className="mock-bar">
                <b>{featured.mock.title}</b>
                <span className="row gap-2">
                  <span className="dot" />
                  <span className="t-xs">{featured.mock.live}</span>
                </span>
              </div>
              <div className="mock-body">
                <div className="grid-3 [--gap:10px]">
                  {featured.mock.kpis.map((kpi) => (
                    <div className="mock-kpi" key={kpi.label}>
                      <span>{kpi.label}</span>
                      <b>{kpi.value}</b>
                    </div>
                  ))}
                </div>
                <div className="bars">
                  {BARS.map((height) => (
                    <i className={height} key={height} />
                  ))}
                </div>
              </div>
            </div>
          </SectorGround>
        </RouteLink>
      </div>
    </section>
  );
}

const SERVICE_ORDER: readonly WorkService[] = [
  "custom",
  "web-mobile",
  "ai",
  "cloud",
  "design",
  "modernisation",
];
const INDUSTRY_ORDER = [
  "fintech",
  "healthcare",
  "ecommerce",
  "saas",
  "enterprise",
  "logistics",
] as const;

export function WorkProjects({ content, locale }: { content: WorkOverviewCopy; locale: Locale }) {
  const { grid, hero } = content;
  return (
    <section className="bg-mist section pt-[88px]" aria-labelledby="all">
      <WorkGrid
        copy={grid}
        locale={locale}
        industries={INDUSTRY_ORDER.map((id) => ({ id, label: grid.industries[id] }))}
        services={SERVICE_ORDER.map((id) => ({ id, label: grid.services[id] }))}
        emptyAction={<LinkButton href="/contact">{grid.empty.ask}</LinkButton>}
        projects={workProjects.map((project) => ({
          id: project.id,
          industry: project.industry,
          services: project.services,
          card: (
            <article className={cx("solid stack overflow-hidden", project.slug && "card-hover")}>
              <SectorGround
                sector={project.industry}
                className="rounded-[0] h-[240px] flex flex-wrap items-end content-end justify-between gap-[8px] p-[18px]"
              >
                <span className="slice" />
                <Tag className="text-white border-[rgba(255,255,255,.3)] bg-[rgba(255,255,255,.06)]">
                  {grid.industries[project.industry]}
                </Tag>
                <DemoTag>{hero.demoTag}</DemoTag>
              </SectorGround>
              <div className="stack gap-3 p-[26px] flex-1">
                <h3 className="t-h4">{project.name}</h3>
                <p className="t-small">{grid.lines[project.id]}</p>
                <div className="wrap-row gap-2 mt-[4px]">
                  {project.services.map((service) => (
                    <span className="chip" key={service}>
                      {grid.services[service]}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-[14px]">
                  {project.slug ? (
                    <ArrowLink href={`/work/${project.slug}`}>
                      {grid.read}
                      <span className="sr-only">: {project.name}</span>
                    </ArrowLink>
                  ) : (
                    <span className="t-xs font-mono">{grid.noCase}</span>
                  )}
                </div>
              </div>
            </article>
          ),
        }))}
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
