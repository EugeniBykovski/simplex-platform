import { LinkButton } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/controls";
import { cx } from "@/components/ui/cx";
import type { TechnologiesCopy } from "@/content/company";
import type { Locale } from "@/i18n/routing";
import { TechDirectory } from "./tech-directory";
import { TechRadar } from "./tech-radar";

const LEVEL =
  "inline-flex items-center gap-[6px] font-mono text-[10.5px] tracking-[.08em] uppercase text-[#D3D8EE]";
const SKEW = "w-[8px] h-[8px] rounded-[2px] [transform:skewX(-18deg)] flex-none";

/** The sections of Technologies.dc.html, in its order. The headline has no reveal, for LCP. */
export function TechHero({ content }: { content: TechnologiesCopy }) {
  const { hero, breadcrumb } = content;
  return (
    <section className="bg-ink p-[220px_0_110px]" aria-labelledby="tech-title">
      <div className="wrap split items-end">
        <div className="stack gap-6">
          <Breadcrumbs
            label={breadcrumb.label}
            items={[
              { label: breadcrumb.home, href: "/" },
              { label: breadcrumb.company, href: "/about" },
              { label: breadcrumb.current },
            ]}
          />
          <h1 className="t-h1 [&:lang(ru)]:hyphens-auto" id="tech-title">
            <span className="block pb-[.06em]">{hero.lines[0]} </span>
            <span className="block pb-[.06em] t-grad">{hero.lines[1]}</span>
          </h1>
        </div>
        <div className="stack gap-4">
          <p className="t-lead">{hero.lead}</p>
          <div className="wrap-row gap-5 t-small">
            <span className={LEVEL}>
              <i className={cx(SKEW, "bg-[#2F57F5]")} />
              {hero.core}
            </span>
            <span className={LEVEL}>
              <i className={cx(SKEW, "bg-[#B9C6FB]")} />
              {hero.selective}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TechList({ content, locale }: { content: TechnologiesCopy; locale: Locale }) {
  return (
    <section className="bg-mist section pt-[64px]" aria-label={content.breadcrumb.current}>
      <TechDirectory
        copy={content.directory}
        locale={locale}
        emptyAction={<LinkButton href="/contact">{content.directory.empty.ask}</LinkButton>}
      />
    </section>
  );
}

export function TechFollows({ content }: { content: TechnologiesCopy["follows"] }) {
  return (
    <section className="section" aria-labelledby="tech-follows">
      <div className="wrap split items-end">
        <h2 className="t-h2" id="tech-follows">
          {content.title}
        </h2>
        <div className="stack gap-5">
          <p className="t-lead">{content.lead}</p>
          <div className="wrap-row gap-3">
            <LinkButton href="/services/architecture-consulting" arrow>
              {content.primary}
            </LinkButton>
            <LinkButton href="/contact" variant="ghost">
              {content.secondary}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TechRadarSection({ content }: { content: TechnologiesCopy["radar"] }) {
  return (
    <section className="bg-ink section" aria-labelledby="radar">
      <div className="wrap stack gap-7">
        <div className="gx-head">
          <div className="stack gap-4">
            <span className="gx-tag">{content.tag}</span>
            <h2 className="t-h1 [&:lang(ru)]:hyphens-auto" id="radar">
              {content.title}
            </h2>
          </div>
          <p className="t-lead">{content.lead}</p>
        </div>
        <TechRadar label={content.label} rings={content.rings} />
        <p className="t-xs text-on-dark-3">{content.note}</p>
      </div>
    </section>
  );
}
