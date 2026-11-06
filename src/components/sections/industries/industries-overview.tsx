import { LinkButton } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/controls";
import { cx } from "@/components/ui/cx";
import { Icon, type GlyphName } from "@/components/ui/icon";
import { RouteLink } from "@/components/ui/links";
import { CardArrow } from "@/components/ui/surface";
import { industrySlugs } from "@/config/routes";
import {
  getIndustryPage,
  industryCatalog,
  type IndustriesOverviewCopy,
} from "@/content/industries";
import type { Locale } from "@/i18n/routing";
import { ComplianceGrid, VIZ_CLASS } from "./industry-shared";

/**
 * The sections of Industries.dc.html, in its order. The headline has no reveal animation, so it
 * paints at once, as on the other pages.
 */
export function IndustriesHero({
  content,
  locale,
}: {
  content: IndustriesOverviewCopy;
  locale: Locale;
}) {
  const { hero, breadcrumb, rows } = content;
  return (
    <section className="bg-ink p-[220px_0_120px]" aria-labelledby="industries-title">
      <div className="wrap stack gap-8">
        <div className="split items-end">
          <div className="stack gap-6">
            <Breadcrumbs
              label={breadcrumb.label}
              items={[{ label: breadcrumb.home, href: "/" }, { label: breadcrumb.current }]}
            />
            <h1 className="t-h1" id="industries-title">
              <span className="block pb-[.06em]">{hero.lines[0]} </span>
              <span className="block pb-[.06em] t-grad">{hero.lines[1]}</span>
            </h1>
          </div>
          <p className="t-lead">{hero.lead}</p>
        </div>
        <div className="stack">
          {industrySlugs.map((slug, index) => {
            const row = rows[index];
            if (!row) return null;
            const { icon, viz } = industryCatalog[slug];
            return (
              <IndustryRow
                key={slug}
                href={`/industries/${slug}`}
                n={String(index + 1).padStart(2, "0")}
                icon={icon}
                name={getIndustryPage(locale, slug).name}
                summary={row.summary}
                chips={row.chips}
                vizClass={VIZ_CLASS[viz]}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IndustryRow({
  href,
  n,
  icon,
  name,
  summary,
  chips,
  vizClass,
}: {
  href: string;
  n: string;
  icon: GlyphName;
  name: string;
  summary: string;
  chips: readonly string[];
  vizClass: string;
}) {
  return (
    <RouteLink
      href={href}
      className="group grid grid-cols-[80px_minmax(0,4fr)_minmax(0,5fr)_240px_56px] gap-[32px] items-center p-[36px_0] border-t border-t-[var(--line-dark)] transition-[background,padding] duration-[var(--dur-3)] ease-[var(--ease-out)] hover:[background:linear-gradient(90deg,rgba(255,255,255,.04),rgba(255,255,255,0))] hover:pl-[16px] sx-1100:grid-cols-[56px_minmax(0,1fr)_200px_48px] sx-760:grid-cols-[minmax(0,1fr)_48px] sx-760:gap-[16px]"
    >
      <span className="idx sx-760:col-span-full">{n}</span>
      <span className="row gap-4">
        <Icon name={icon} className="text-[#9DB4CC] [--icon:36px]" />
        <span className="t-h2 [&:lang(ru)]:hyphens-auto">{name}</span>
      </span>
      <span className="stack gap-3 sx-1100:[grid-column:2/3] sx-760:[grid-column:1/-1]">
        <span className="t-body">{summary}</span>
        <span className="wrap-row gap-2">
          {chips.map((chip) => (
            <span className="chip" key={chip}>
              {chip}
            </span>
          ))}
        </span>
      </span>
      <span
        className={cx(
          "viz h-[140px] transition-transform duration-[var(--dur-4)] ease-[var(--ease-out)] group-hover:[transform:scale(1.04)] sx-760:hidden",
          vizClass,
        )}
      >
        <span className="slice" />
      </span>
      <CardArrow />
    </RouteLink>
  );
}

const CONSTANT_ICONS: readonly GlyphName[] = ["quality", "enterprise", "cloud", "design"];

export function IndustriesConstants({ content }: { content: IndustriesOverviewCopy["constants"] }) {
  return (
    <section className="bg-mist section" aria-labelledby="constants">
      <div className="wrap stack gap-8">
        <div className="split items-end">
          <div className="stack gap-5">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 className="t-h2" id="constants">
              {content.title}
            </h2>
          </div>
          <p className="t-lead">{content.lead}</p>
        </div>
        <div className="grid-4 [--gap:16px]">
          {content.items.map((item, index) => (
            <div
              className="glass reveal p-[30px] min-h-[260px] flex flex-col justify-between"
              key={item.title}
            >
              <Icon
                name={CONSTANT_ICONS[index] ?? "quality"}
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

export function IndustriesCompliance({
  content,
}: {
  content: IndustriesOverviewCopy["compliance"];
}) {
  return (
    <ComplianceGrid
      tag={content.tag}
      title={content.title}
      lead={content.lead}
      tiles={content.tiles}
      note={content.note}
    />
  );
}

export function IndustriesCta({ content }: { content: IndustriesOverviewCopy["cta"] }) {
  return (
    <section className="bg-cta dark p-[140px_0]" aria-labelledby="industries-cta">
      <div className="wrap split items-end">
        <h2 className="t-h1" id="industries-cta">
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
