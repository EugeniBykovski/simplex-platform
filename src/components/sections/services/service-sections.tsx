import { SeoBreadcrumbs } from "@/components/seo/seo-breadcrumbs";
import { AnchorButton, LinkButton } from "@/components/ui/button";
import { Accordion } from "@/components/ui/controls";
import { cx } from "@/components/ui/cx";
import { DemoTag } from "@/components/ui/feedback";
import { Icon } from "@/components/ui/icon";
import { ArrowLink, RouteLink, TextLink } from "@/components/ui/links";
import { CardArrow, SectorGround } from "@/components/ui/surface";
import type { ServiceSlug } from "@/config/routes";
import { getProject } from "@/content/work";
import type { Locale } from "@/i18n/routing";
import {
  serviceCatalog,
  type ServicePageCopy,
  type ServiceSharedCopy,
  type ServiceStructure,
} from "@/content/services";
import { ServiceHeroVisual } from "./service-visuals";

const number = (index: number) => String(index + 1).padStart(2, "0");

/**
 * The sections of ServicePage.dc.html, in its order. The board is one template, driven by slug: it
 * varies the hero's ground, panel, button and illustration, so these are shared rather than copied.
 * The headline has no reveal animation, so it paints at once.
 */
export function ServiceHero({
  page,
  shared,
  structure,
  path,
  contactHref = "/contact",
}: {
  page: ServicePageCopy;
  shared: ServiceSharedCopy;
  structure: ServiceStructure;
  path: string;
  contactHref?: string;
}) {
  const dark = structure.theme === "dark";
  const panel = dark
    ? "glass-dark"
    : structure.visual === "arch"
      ? "viz viz-enterprise"
      : "viz viz-light";
  return (
    <section
      className={cx(dark ? "bg-ink" : "bg-horizon is-live", "p-[200px_0_130px] overflow-hidden")}
      aria-labelledby="service-title"
    >
      <div className="wrap split items-center">
        <div className="stack gap-6">
          <SeoBreadcrumbs
            path={path}
            label={shared.breadcrumb.label}
            items={[
              { label: shared.breadcrumb.home, href: "/" },
              { label: shared.breadcrumb.services, href: "/services" },
              { label: page.short },
            ]}
          />
          <p className="eyebrow">
            {structure.idx} · {page.title}
          </p>
          <h1
            className="t-h1 pb-[.06em] [overflow-wrap:break-word] [&:lang(ru)]:hyphens-auto"
            id="service-title"
          >
            {page.headline}
          </h1>
          <p className="t-lead">{page.lead}</p>
          <div className="wrap-row gap-3 stack-sm">
            <LinkButton href={contactHref} variant={dark ? "light" : "primary"} size="lg" arrow>
              {shared.hero.primaryCta}
            </LinkButton>
            <AnchorButton href="#cases" variant="ghost" size="lg">
              {shared.hero.relatedCta}
            </AnchorButton>
          </div>
          <ul className="checks mt-[8px]">
            {page.glance.map((item) => (
              <li key={item}>
                <Icon name="check" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div
          className={cx(
            panel,
            "p-[22px] rounded-[30px] min-h-[460px] grid gap-[14px] content-center relative overflow-hidden",
          )}
          aria-hidden="true"
        >
          <DemoTag className="justify-self-start">{shared.hero.illustrative}</DemoTag>
          <ServiceHeroVisual visual={structure.visual} content={shared.visuals} />
        </div>
      </div>
    </section>
  );
}

export function ServiceProblem({ page, eyebrow }: { page: ServicePageCopy; eyebrow: string }) {
  return (
    <section className="paper section" aria-labelledby="problem">
      <div className="wrap split">
        <div className="stack gap-5 sticky-col">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="t-h2" id="problem">
            {page.problem}
          </h2>
        </div>
        <ol className="stack">
          {page.pains.map((pain, index) => (
            <li
              className="row gap-6 reveal items-start p-[32px_0] border-t border-line-2"
              key={pain}
            >
              <span className="t-h3 text-text-3 w-[64px] flex-none">{number(index)}</span>
              <p className="t-lead text-text">{pain}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ServiceCapabilities({ page, eyebrow }: { page: ServicePageCopy; eyebrow: string }) {
  return (
    <section className="section" aria-labelledby="caps">
      <div className="wrap stack gap-8">
        <div className="split items-end">
          <div className="stack gap-5">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="t-h2" id="caps">
              {page.capsTitle}
            </h2>
          </div>
          <p className="t-lead">{page.capsIntro}</p>
        </div>
        <div className="grid-3 [--gap:16px]">
          {page.caps.map((cap, index) => (
            <article
              className="solid card-hover reveal p-[32px] min-h-[250px] flex flex-col justify-between gap-[24px]"
              key={cap.title}
            >
              <span className="idx">{number(index)}</span>
              <div className="stack gap-2">
                <h3 className="t-h4 [overflow-wrap:break-word] [&:lang(ru)]:hyphens-auto">
                  {cap.title}
                </h3>
                <p className="t-small">{cap.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceValue({
  page,
  content,
}: {
  page: ServicePageCopy;
  content: ServiceSharedCopy["value"];
}) {
  return (
    <section className="bg-ink section" aria-labelledby="value">
      <div className="wrap stack gap-8">
        <div className="split items-end">
          <div className="stack gap-5">
            <span className="tag self-start">{content.tag}</span>
            <h2 className="t-h2" id="value">
              {content.title}
            </h2>
          </div>
          <p className="t-lead">{content.lead}</p>
        </div>
        <div className="grid-4 [--gap:16px]">
          {page.value.map((item) => (
            <div
              className="glass-dark reveal p-[30px] min-h-[260px] flex flex-col justify-between gap-[24px]"
              key={item.title}
            >
              <Icon name="arrow-ur" className="[--icon:28px] text-[#9DB4CC]" />
              <div className="stack gap-2">
                <h3 className="t-h4">{item.title}</h3>
                <p className="t-small">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceProcess({
  page,
  content,
}: {
  page: ServicePageCopy;
  content: ServiceSharedCopy["process"];
}) {
  return (
    <section className="bg-ink section pt-[0]" aria-labelledby="proc">
      <div className="wrap stack gap-8">
        <div className="hr" />
        <div className="wrap-row between gap-5 items-end">
          <h2 className="t-h3" id="proc">
            {content.title}
          </h2>
          <ArrowLink href="/how-we-work">{content.link}</ArrowLink>
        </div>
        <ol className="process grid-cols-[repeat(4,minmax(0,1fr))]">
          {/* A list item rather than the board's span, because a list may only contain items. */}
          <li className="process-rail" aria-hidden="true">
            <i />
          </li>
          {page.steps.map((step, index) => (
            <li className="process-step" key={step.title}>
              <span className="process-dot">{number(index)}</span>
              <div className="stack gap-2">
                <h3 className="t-h5">{step.title}</h3>
                <p className="t-small">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ServiceFit({
  page,
  tech,
  uses,
}: {
  page: ServicePageCopy;
  tech: ServiceSharedCopy["tech"];
  uses: ServiceSharedCopy["uses"];
}) {
  return (
    <section className="section" aria-labelledby="uses">
      <div className="wrap split">
        <div className="stack gap-6 sticky-col">
          <p className="eyebrow">{tech.eyebrow}</p>
          <div className="wrap-row gap-2">
            {page.tech.map((item) => (
              <span className="chip chip-outline min-h-[40px] text-[14.5px]" key={item}>
                {item}
              </span>
            ))}
          </div>
          <p className="t-small">
            {tech.note} <TextLink href="/technologies">{tech.link}</TextLink>
          </p>
        </div>
        <div className="stack gap-5">
          <div className="stack gap-4">
            <p className="eyebrow">{uses.eyebrow}</p>
            <h2 className="t-h2" id="uses">
              {uses.title}
            </h2>
          </div>
          <div>
            {page.uses.map((use, index) => (
              <Accordion key={use.title} summary={use.title} defaultOpen={index === 0}>
                {use.body}
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceRelated({
  structure,
  relatedPages,
  shared,
  industries,
  locale,
}: {
  structure: ServiceStructure;
  relatedPages: Record<ServiceSlug, ServicePageCopy>;
  shared: ServiceSharedCopy;
  industries: readonly { href: string; name: string }[];
  locale: Locale;
}) {
  return (
    <section className="bg-mist section scroll-mt-[90px]" id="cases" aria-labelledby="rel">
      <div className="wrap stack gap-8">
        <div className="stack gap-5">
          <p className="eyebrow">{shared.related.eyebrow}</p>
          <h2 className="t-h2" id="rel">
            {shared.related.title}
          </h2>
        </div>
        <div className="grid-3 [--gap:16px]">
          {structure.related.map((slug) => (
            <RouteLink
              key={slug}
              href={`/services/${slug}`}
              className="glass card-hover p-[28px] min-h-[230px] flex flex-col justify-between gap-[24px]"
            >
              <span className="row between">
                <Icon name={serviceCatalog[slug].icon} className="text-[#2F57F5] [--icon:40px]" />
                <CardArrow />
              </span>
              <span className="stack gap-2">
                <span className="t-h4">{relatedPages[slug].title}</span>
                <span className="t-small">{relatedPages[slug].blurb}</span>
              </span>
            </RouteLink>
          ))}
        </div>
        {industries.length > 0 ? (
          <nav className="wrap-row gap-2 items-center" aria-label={shared.industries}>
            <span className="t-small mr-[8px]">{shared.industries}</span>
            {industries.map((industry) => (
              <RouteLink
                className="chip chip-outline min-h-[36px]"
                href={industry.href}
                key={industry.href}
              >
                {industry.name}
              </RouteLink>
            ))}
          </nav>
        ) : null}
        {structure.cases.length > 0 ? (
          <>
            <h2 className="t-h3 mt-[32px]">{shared.cases.title}</h2>
            <div className="grid-2 [--gap:16px]">
              {structure.cases.map((slug) => {
                const project = getProject(slug);
                const words = project.words[locale];
                return (
                  <RouteLink
                    key={slug}
                    href={`/work/${slug}`}
                    pendingLook="card"
                    className="solid card-hover overflow-hidden grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))]"
                  >
                    <SectorGround
                      sector={project.ground}
                      className="rounded-[0] min-h-[220px] grid place-items-center"
                    >
                      <span className="slice" />
                      <Icon name={project.icon} className="relative text-white [--icon:56px]" />
                    </SectorGround>
                    <div className="stack gap-3 p-[28px] justify-between">
                      <span className="t-mono text-text-3">{words.category}</span>
                      <span className="t-h4">{project.name}</span>
                      <span className="t-small">{words.tagline}</span>
                      <span className="link-arrow">
                        {shared.cases.read} <Icon name="arrow" />
                      </span>
                    </div>
                  </RouteLink>
                );
              })}
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}

export function ServiceFirst30({ content }: { content: ServiceSharedCopy["first30"] }) {
  return (
    <section className="section" aria-labelledby="d30">
      <div className="wrap stack gap-8">
        <div className="gx-head">
          <div className="stack gap-4">
            <span className="gx-tag">{content.tag}</span>
            <h2 className="t-h1" id="d30">
              {content.title}
            </h2>
          </div>
          <p className="t-lead">{content.lead}</p>
        </div>
        <div className="tl">
          {content.steps.map((step) => (
            <div className="tl-step" key={step.mark}>
              <span className="tl-dot">{step.mark}</span>
              <b className="t-h4">{step.title}</b>
              <p className="t-small">{step.body}</p>
            </div>
          ))}
        </div>
        {/* sx-1000 replaces the source's rule keyed to its inline style. */}
        <div className="photo photo-meeting rounded-[28px] p-[clamp(24px,3cqi,40px)] grid grid-cols-[minmax(0,1.4fr)_auto] gap-[24px] items-center sx-1000:grid-cols-[minmax(0,1fr)]">
          <span className="stack gap-2">
            <b className="t-h3 text-white">{content.sprintTitle}</b>
            <span className="t-body text-on-dark-2">{content.sprintBody}</span>
          </span>
          <LinkButton href="/contact" variant="light" size="lg" arrow>
            {content.sprintCta}
          </LinkButton>
        </div>
      </div>
    </section>
  );
}

export function ServiceCta({
  page,
  content,
  contactHref = "/contact",
}: {
  page: ServicePageCopy;
  content: ServiceSharedCopy["cta"];
  contactHref?: string;
}) {
  return (
    <section className="bg-cta dark p-[140px_0]" aria-labelledby="service-cta">
      <div className="wrap split items-end">
        <h2 className="t-h1 [overflow-wrap:break-word] [&:lang(ru)]:hyphens-auto" id="service-cta">
          {page.cta}
        </h2>
        <div className="stack gap-5">
          <p className="t-lead">{content.lead}</p>
          <div className="wrap-row gap-3">
            <LinkButton href={contactHref} size="lg" arrow>
              {content.primary}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
