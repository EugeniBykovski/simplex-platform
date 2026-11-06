import { AnchorButton, LinkButton } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/controls";
import { cx } from "@/components/ui/cx";
import { DemoTag, Tag } from "@/components/ui/feedback";
import { Icon } from "@/components/ui/icon";
import { ArrowLink, RouteLink } from "@/components/ui/links";
import { CardArrow, SectorGround } from "@/components/ui/surface";
import { Tabs } from "@/components/ui/tabs";
import { serviceCatalog, caseStudies } from "@/content/services";
import type { IndustryPageCopy, IndustrySharedCopy, IndustryStructure } from "@/content/industries";
import { ComplianceGrid, VIZ_CLASS } from "./industry-shared";

type PageProps = { page: IndustryPageCopy; shared: IndustrySharedCopy };

const index = (position: number) => String(position + 1).padStart(2, "0");

/** The sections of IndustryPage.dc.html, in its order. The headline has no reveal, for LCP. */
export function IndustryHero({
  page,
  shared,
  structure,
}: PageProps & { structure: IndustryStructure }) {
  const { breadcrumb, hero } = shared;
  return (
    <section
      className={cx("viz rounded-[0] p-[220px_0_120px] text-white", VIZ_CLASS[structure.viz])}
      aria-labelledby="industry-title"
    >
      {structure.heroScrim ? (
        <span className="absolute inset-[0] z-[-1] bg-[rgba(7,11,43,.35)]" aria-hidden="true" />
      ) : null}
      <span className="slice top-[64%]" />
      <div className="wrap stack gap-8 relative">
        <div className="stack gap-6 max-w-[980px]">
          <Breadcrumbs
            className="on-dark text-[#E6EAF7] [&_a]:text-white"
            label={breadcrumb.label}
            items={[
              { label: breadcrumb.home, href: "/" },
              { label: breadcrumb.industries, href: "/industries" },
              { label: page.name },
            ]}
          />
          <span className="row gap-3">
            <Icon name={structure.icon} className="text-[#9DB4CC] [--icon:32px]" />
            <span className="t-mono text-[#E6EAF7]">
              {hero.eyebrow} · {page.name}
            </span>
          </span>
          <h1 className="t-h1" id="industry-title">
            <span className="block pb-[.06em]">{page.headline}</span>
          </h1>
          <p className="t-lead text-[#D3D8EE] max-w-[680px]">{page.lead}</p>
          <div className="wrap-row gap-3">
            <LinkButton href="/contact" variant="light" size="lg" arrow>
              {hero.primary}
            </LinkButton>
            <AnchorButton
              href="#projects"
              variant="ghost"
              size="lg"
              className="text-white border-[rgba(255,255,255,.3)]"
            >
              {hero.secondary}
            </AnchorButton>
          </div>
        </div>
        <div className="grid-3 [--gap:12px]">
          {page.facts.map((fact) => (
            <div className="glass-dark p-[22px] rounded-[20px]" key={fact.key}>
              <p className="t-mono text-[#C4D2E2]">{fact.key}</p>
              <p className="mt-[8px] text-white">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustryChallenges({ page, shared }: PageProps) {
  return (
    <section className="section" aria-labelledby="ch">
      <div className="wrap stack gap-8">
        <div className="split items-end">
          <div className="stack gap-5">
            <p className="eyebrow">{shared.challengesEyebrow}</p>
            <h2 className="t-h2" id="ch">
              {page.challengesTitle}
            </h2>
          </div>
          <p className="t-lead">{page.challengesIntro}</p>
        </div>
        <div className="grid-2 [--gap:16px]">
          {page.challenges.map((challenge, position) => (
            <article
              className="paper-card reveal p-[36px] grid grid-cols-[56px_minmax(0,1fr)] gap-[20px] items-start"
              key={challenge.title}
            >
              <span className="t-h3 text-text-3">{index(position)}</span>
              <div className="stack gap-2">
                <h3 className="t-h4 sx-1000:hyphens-auto sx-1000:[overflow-wrap:break-word] [&:lang(ru)]:hyphens-auto">
                  {challenge.title}
                </h3>
                <p className="t-body">{challenge.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustryOpportunities({ page, shared }: PageProps) {
  return (
    <section className="bg-ink section" aria-labelledby="op">
      <div className="wrap stack gap-8">
        <div className="split items-end">
          <div className="stack gap-5">
            <Tag className="self-start">{shared.opportunities.tag}</Tag>
            <h2 className="t-h2" id="op">
              {shared.opportunities.title}
            </h2>
          </div>
          <p className="t-lead">{page.opportunitiesLead}</p>
        </div>
        <div className="grid-3 [--gap:16px]">
          {page.opportunities.map((opportunity, position) => (
            <article
              className="glass-dark reveal p-[34px] min-h-[320px] flex flex-col justify-between gap-[32px]"
              key={opportunity.title}
            >
              <span className="idx">{index(position)}</span>
              <div className="stack gap-3">
                <h3 className="t-h3 sx-1000:hyphens-auto sx-1000:[overflow-wrap:break-word] [&:lang(ru)]:hyphens-auto">
                  {opportunity.title}
                </h3>
                <p className="t-body">{opportunity.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustryScenarios({ page, shared }: PageProps) {
  const copy = shared.scenarios;
  const items = page.scenarios.map((scenario, position) => ({
    id: String(position),
    label: scenario.title,
    panel: (
      <div className="glass split-even p-[clamp(24px,4cqi,56px)] rounded-[30px]">
        <div className="stack gap-5">
          <span className="t-mono text-text-3">
            {copy.scenario} {index(position)}
          </span>
          <h3 className="t-h2 [&:lang(ru)]:hyphens-auto">{scenario.title}</h3>
          <p className="t-body">{scenario.body}</p>
          <ArrowLink href="/contact" className="self-start">
            {copy.discuss}
          </ArrowLink>
        </div>
        <div className="stack gap-4">
          <p className="t-mono text-text-3">{copy.components}</p>
          <ul className="checks">
            {scenario.items.map((item) => (
              <li key={item}>
                <Icon name="check" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  }));
  return (
    <section className="bg-mist section" aria-labelledby="sc">
      <div className="wrap stack gap-7">
        <div className="stack gap-5">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="t-h2" id="sc">
            {copy.title}
          </h2>
        </div>
        <Tabs
          label={copy.label}
          items={items}
          className="stack gap-7"
          listClassName="self-start max-w-full"
        />
      </div>
    </section>
  );
}

export function IndustryConsiderations({ page, shared }: PageProps) {
  return (
    <section className="section" aria-labelledby="eng">
      <div className="wrap split">
        <div className="stack gap-5 sticky-col">
          <p className="eyebrow">{shared.considerations.eyebrow}</p>
          <h2 className="t-h2" id="eng">
            {shared.considerations.title}
          </h2>
          <p className="t-body">{page.considerationsLead}</p>
        </div>
        <div className="grid-2 [--gap:0_32px]">
          {page.considerations.map((item) => (
            <div
              className="stack gap-2 p-[26px_0] border-t border-t-[var(--line-2)]"
              key={item.title}
            >
              <span className="row gap-3">
                <Icon name="check" className="text-[#2F57F5] [--icon:20px]" />
                <b className="font-[600] text-[17px] [&:lang(ru)]:hyphens-auto">{item.title}</b>
              </span>
              <p className="t-small pl-[32px]">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustryCapabilities({
  page,
  shared,
  structure,
}: PageProps & { structure: IndustryStructure }) {
  const { capabilities } = shared;
  const study = caseStudies[structure.project];
  const projectCopy = shared.cases[structure.project];
  return (
    <section className="bg-mist section scroll-mt-[90px]" id="projects" aria-labelledby="caps">
      <div className="wrap stack gap-8">
        <div className="stack gap-5">
          <p className="eyebrow">{capabilities.eyebrow}</p>
          <h2 className="t-h2" id="caps">
            {page.capabilitiesTitle}
          </h2>
        </div>
        <div className="grid-4 [--gap:16px]">
          {structure.services.map((slug) => (
            <RouteLink
              key={slug}
              href={`/services/${slug}`}
              className="glass card-hover p-[26px] min-h-[200px] flex flex-col justify-between gap-[20px]"
            >
              <span className="row between">
                <Icon name={serviceCatalog[slug].icon} className="text-[#2F57F5] [--icon:36px]" />
                <CardArrow />
              </span>
              <span className="t-h5 [&:lang(ru)]:hyphens-auto">{shared.services[slug]}</span>
            </RouteLink>
          ))}
        </div>
        <div className="wrap-row between gap-4 mt-[24px] items-end">
          <h2 className="t-h3">{capabilities.projects}</h2>
          <DemoTag>{capabilities.tag}</DemoTag>
        </div>
        <RouteLink
          href={study.href}
          pendingLook="card"
          className="solid card-hover panel-split overflow-hidden rounded-[30px]"
        >
          <div className="stack gap-4 p-[clamp(24px,4cqi,48px)] justify-center">
            <span className="t-mono text-text-3">{projectCopy.industry}</span>
            <span className="t-h2">{study.name}</span>
            <span className="t-body">{projectCopy.summary}</span>
            <span className="link-arrow">
              {capabilities.read} <Icon name="arrow" />
            </span>
          </div>
          <SectorGround sector={study.viz} className="rounded-[0] min-h-[320px]">
            <span className="slice" />
          </SectorGround>
        </RouteLink>
      </div>
    </section>
  );
}

export function IndustryCompliance({ page, shared }: PageProps) {
  return (
    <ComplianceGrid
      tag={shared.compliance.tag}
      title={page.complianceTitle}
      lead={shared.compliance.lead}
      tiles={page.compliance}
      note={shared.compliance.note}
    />
  );
}

export function IndustryCta({ page, shared }: PageProps) {
  return (
    <section className="bg-cta dark p-[140px_0]" aria-labelledby="industry-cta">
      <div className="wrap split items-end">
        <h2 className="t-h1 [&:lang(ru)]:hyphens-auto" id="industry-cta">
          {page.cta}
        </h2>
        <div className="stack gap-5">
          <p className="t-lead">{shared.cta.lead}</p>
          <div className="wrap-row gap-3">
            <LinkButton href="/contact" size="lg" arrow>
              {shared.cta.primary}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
