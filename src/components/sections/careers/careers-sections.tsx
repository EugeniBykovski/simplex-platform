import { SeoBreadcrumbs } from "@/components/seo/seo-breadcrumbs";
import { AnchorButton, LinkButton } from "@/components/ui/button";
import { Icon, type GlyphName } from "@/components/ui/icon";
import { RouteLink } from "@/components/ui/links";
import { CardArrow } from "@/components/ui/surface";
import type { CareersCopy, JobPosition } from "@/content/careers";
import type { Locale } from "@/i18n/routing";

/**
 * The sections of Careers.dc.html, in its order. Benefits are withheld, since none is confirmed
 * (GAP-C06). The headline has no reveal, for LCP.
 */
export function CareersHero({ content }: { content: CareersCopy }) {
  const { hero, breadcrumb } = content;
  return (
    <section
      className="bg-horizon is-live p-[230px_0_170px] overflow-hidden"
      aria-labelledby="careers-title"
    >
      <div className="wrap split items-end">
        <div className="stack gap-6">
          <SeoBreadcrumbs
            path="/careers"
            label={breadcrumb.label}
            items={[{ label: breadcrumb.home, href: "/" }, { label: breadcrumb.current }]}
          />
          <h1 className="t-display [&:lang(ru)]:hyphens-auto" id="careers-title">
            <span className="block pb-[.06em]">{hero.lines[0]} </span>
            <span className="block pb-[.06em] t-grad">{hero.lines[1]}</span>
          </h1>
        </div>
        <div className="stack gap-5">
          <p className="t-lead">{hero.lead}</p>
          <div className="wrap-row gap-3">
            <AnchorButton href="#roles" size="lg" arrow>
              {hero.primary}
            </AnchorButton>
            <LinkButton href="/about" variant="glass" size="lg">
              {hero.secondary}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}

const CULTURE_ICONS: readonly GlyphName[] = ["architecture", "teams", "quality"];

export function CareersCulture({ content }: { content: CareersCopy["culture"] }) {
  return (
    <section className="section" aria-labelledby="cult">
      <div className="wrap stack gap-8">
        <div className="split items-end">
          <div className="stack gap-5">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 className="t-h2" id="cult">
              {content.title}
            </h2>
          </div>
          <p className="t-lead">{content.lead}</p>
        </div>
        <div className="grid-3 [--gap:16px]">
          {content.items.map((item, position) => (
            <div
              className="paper-card reveal p-[32px] min-h-[280px] flex flex-col justify-between gap-[24px]"
              key={item.title}
            >
              <Icon
                name={CULTURE_ICONS[position] ?? "quality"}
                className="text-[#2F57F5] [--icon:40px]"
              />
              <div className="stack gap-2">
                <h3 className="t-h4 [&:lang(ru)]:hyphens-auto">{item.title}</h3>
                <p className="t-small">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CareersRoles({
  content,
  positions,
  locale,
}: {
  content: CareersCopy["roles"];
  positions: readonly JobPosition[];
  locale: Locale;
}) {
  const category = new Intl.PluralRules(locale).select(positions.length);
  const count = (content.count[category] ?? content.count.other).replace(
    "{count}",
    String(positions.length),
  );
  return (
    <section className="bg-mist section scroll-mt-[90px]" id="roles" aria-labelledby="open">
      <div className="wrap stack gap-6">
        <div className="wrap-row between gap-4 items-end">
          <div className="stack gap-4">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 className="t-h2" id="open">
              {content.title}
            </h2>
          </div>
          {positions.length > 0 ? <span className="t-small">{count}</span> : null}
        </div>
        {positions.length > 0 ? (
          <div className="solid rounded-[24px] p-[8px_24px]">
            {positions.map((position) => {
              const job = position.copy[locale];
              return (
                <RouteLink
                  href={`/careers/${position.slug}`}
                  className="grid grid-cols-[minmax(0,5fr)_minmax(0,2fr)_minmax(0,2fr)_minmax(0,2fr)_44px] gap-[24px] items-center p-[24px_8px] border-t border-t-[var(--line-2)] first:border-t-0 transition-[background,padding] duration-[var(--dur-3)] ease-[var(--ease-out)] hover:bg-[rgba(7,11,43,.03)] hover:pl-[16px] sx-860:grid-cols-[minmax(0,1fr)_44px] sx-860:gap-[8px]"
                  key={position.slug}
                >
                  <span className="stack gap-1">
                    <b className="t-h5">{job.title}</b>
                    <span className="t-xs font-mono">{position.reference}</span>
                  </span>
                  <span className="t-small sx-860:col-[1/2]">{job.team}</span>
                  <span className="t-small sx-860:col-[1/2]">{job.location}</span>
                  <span className="t-small sx-860:col-[1/2]">{job.type}</span>
                  <CardArrow />
                </RouteLink>
              );
            })}
          </div>
        ) : (
          <div className="solid stack gap-4 p-[56px_32px] items-center text-center rounded-[24px]">
            <h3 className="t-h4 [&:lang(ru)]:hyphens-auto">{content.empty.title}</h3>
            <p className="t-body max-w-[420px]">{content.empty.body}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export function CareersProcess({ content }: { content: CareersCopy["process"] }) {
  return (
    <section className="section" aria-labelledby="proc">
      <div className="wrap stack gap-8">
        <div className="split items-end">
          <div className="stack gap-5">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 className="t-h2" id="proc">
              {content.title}
            </h2>
          </div>
          <p className="t-lead">{content.lead}</p>
        </div>
        <ol className="process grid-cols-[repeat(4,minmax(0,1fr))]">
          {content.steps.map((step, position) => (
            <li
              className="stack gap-3 pr-[24px] border-t-[2px] border-t-[var(--ink)] pt-[20px]"
              key={step.title}
            >
              <span className="t-mono text-text-3">{String(position + 1).padStart(2, "0")}</span>
              <b className="t-h5 [&:lang(ru)]:hyphens-auto">{step.title}</b>
              <span className="t-small">{step.body}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function CareersOnboarding({ content }: { content: CareersCopy["onboarding"] }) {
  return (
    <section className="section" aria-labelledby="d90">
      <div className="wrap stack gap-8">
        <div className="gx-head">
          <div className="stack gap-4">
            <span className="gx-tag">{content.tag}</span>
            <h2 className="t-h1 [&:lang(ru)]:hyphens-auto" id="d90">
              {content.title}
            </h2>
          </div>
          <p className="t-lead">{content.lead}</p>
        </div>
        <div className="tl">
          {content.steps.map((step) => (
            <div className="tl-step" key={step.mark}>
              <span className="tl-dot">{step.mark}</span>
              <b className="t-h4 [&:lang(ru)]:hyphens-auto">{step.title}</b>
              <p className="t-small">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CareersCta({ content }: { content: CareersCopy["cta"] }) {
  return (
    <section className="bg-cta dark p-[140px_0]" aria-labelledby="careers-cta">
      <div className="wrap split items-end">
        <h2 className="t-h1" id="careers-cta">
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
