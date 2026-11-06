import { LinkButton } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/controls";
import { Tag } from "@/components/ui/feedback";
import { Wordmark } from "@/components/ui/logo";
import type { AboutCopy } from "@/content/company";

const index = (position: number) => String(position + 1).padStart(2, "0");

/**
 * The sections of About.dc.html, in its order. Leadership and the photo slots are withheld, as they
 * are placeholders (GAP-C05). The headline has no reveal, for LCP.
 */
export function AboutHero({ content }: { content: AboutCopy }) {
  const { hero, breadcrumb } = content;
  return (
    <section
      className="bg-horizon is-live p-[240px_0_200px] overflow-hidden"
      aria-labelledby="about-title"
    >
      <div className="wrap stack gap-7 items-center text-center">
        <Breadcrumbs
          label={breadcrumb.label}
          items={[{ label: breadcrumb.home, href: "/" }, { label: breadcrumb.current }]}
        />
        <h1 className="t-display max-w-[1180px] [&:lang(ru)]:hyphens-auto" id="about-title">
          <span className="block pb-[.06em]">{hero.lines[0]} </span>
          <span className="block pb-[.06em] t-grad">{hero.lines[1]}</span>
        </h1>
        <p className="t-lead max-w-[640px]">{hero.lead}</p>
      </div>
    </section>
  );
}

export function AboutStory({ content }: { content: AboutCopy["story"] }) {
  return (
    <section className="section" aria-labelledby="story">
      <div className="wrap split">
        <div className="stack gap-5 sticky-col">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="t-h2" id="story">
            {content.title}
          </h2>
          <div className="paper-card p-[36px] grid place-items-center min-h-[220px]">
            <Wordmark
              label={content.logoLabel}
              className="text-[64px] [--x-accent:#2F57F5] sx-600:text-[52px]"
            />
          </div>
        </div>
        <div className="stack gap-6 prose">
          <p className="t-h3 font-[500] text-text mb-[8px]">{content.quote}</p>
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutMission({ content }: { content: AboutCopy["mission"] }) {
  return (
    <section className="bg-ink section" aria-labelledby="mission">
      <div className="wrap stack gap-8">
        <div className="stack gap-5 max-w-[1100px]">
          <Tag className="self-start">{content.tag}</Tag>
          <h2 className="t-h1 [&:lang(ru)]:hyphens-auto" id="mission">
            {content.titleStart} <span className="t-grad">{content.titleEnd}</span>
          </h2>
        </div>
        <div className="grid-3 [--gap:16px]">
          {content.philosophy.map((item) => (
            <div className="glass-dark reveal p-[32px]" key={item.label}>
              <p className="t-mono text-[#9DB4CC]">{item.label}</p>
              <h3 className="t-h4 mt-[32px]">{item.title}</h3>
              <p className="t-small mt-[10px]">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutValues({ content }: { content: AboutCopy["values"] }) {
  return (
    <section className="bg-mist section" aria-labelledby="values">
      <div className="wrap stack gap-8">
        <div className="split items-end">
          <div className="stack gap-5">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 className="t-h2" id="values">
              {content.title}
            </h2>
          </div>
          <p className="t-lead">{content.lead}</p>
        </div>
        <div className="grid-3 [--gap:16px]">
          {content.items.map((item, position) => (
            <article
              className="glass reveal p-[32px] min-h-[260px] flex flex-col justify-between gap-[24px]"
              key={item.title}
            >
              <span className="idx">{index(position)}</span>
              <div className="stack gap-2">
                <h3 className="t-h4 [&:lang(ru)]:hyphens-auto">{item.title}</h3>
                <p className="t-small">{item.body}</p>
                <p className="t-xs mt-[8px] font-mono">
                  {content.practice} {item.practice}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutWays({ content }: { content: AboutCopy["ways"] }) {
  return (
    <section className="section" aria-labelledby="ways">
      <div className="wrap split-even items-center">
        <div className="stack gap-6">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="t-h2" id="ways">
            {content.title}
          </h2>
          <p className="t-body">{content.body}</p>
          <LinkButton href="/how-we-work" arrow className="self-start">
            {content.action}
          </LinkButton>
        </div>
        <div className="grid-2 [--gap:12px]">
          {content.tiles.map((tile) => (
            <div className="paper-card p-[26px]" key={tile.label}>
              <span className="t-h3 [&:lang(ru)]:hyphens-auto">{tile.value}</span>
              <p className="t-small mt-[10px]">{tile.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutCulture({ content }: { content: AboutCopy["culture"] }) {
  return (
    <section className="section pt-[0]" aria-labelledby="culture">
      <div className="wrap stack gap-8">
        <div className="split items-end">
          <div className="stack gap-5">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 className="t-h2" id="culture">
              {content.title}
            </h2>
          </div>
          <p className="t-lead">{content.lead}</p>
        </div>
        <div className="grid-12 bento [--gap:16px]">
          <div className="dark col-span-6 stack gap-4 p-[36px] rounded-[var(--r-lg)] justify-end min-h-[300px]">
            <span className="t-mono text-[#9DB4CC]">{content.learning.label}</span>
            <p className="t-h3 [&:lang(ru)]:hyphens-auto">{content.learning.title}</p>
          </div>
          <div className="paper-card col-span-6 stack gap-4 p-[36px] justify-end min-h-[300px]">
            <span className="t-mono text-text-3">{content.guild.label}</span>
            <p className="t-h4">{content.guild.title}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutTrust({ content }: { content: AboutCopy["trust"] }) {
  return (
    <section
      className="photo photo-tower section sx-600:before:[background:linear-gradient(170deg,rgba(7,11,43,.7),rgba(7,11,43,.92))]"
      aria-labelledby="trust"
    >
      <div className="wrap stack gap-7">
        <div className="gx-head">
          <div className="stack gap-4">
            <span className="gx-tag">{content.tag}</span>
            <h2 className="t-h1 text-white [&:lang(ru)]:hyphens-auto" id="trust">
              {content.title}
            </h2>
          </div>
          <p className="t-lead text-on-dark-2">{content.lead}</p>
        </div>
        <div className="comp-grid comp-3">
          {content.tiles.map((tile) => (
            <div className="comp-tile" key={tile.seal}>
              <span className="seal" aria-hidden="true">
                {tile.seal}
              </span>
              <b>{tile.title}</b>
              <span className="t-small text-on-dark-2">{tile.body}</span>
            </div>
          ))}
        </div>
        <LinkButton href="/contact" variant="light" arrow className="self-start">
          {content.action}
        </LinkButton>
      </div>
    </section>
  );
}

export function AboutCta({ content }: { content: AboutCopy["cta"] }) {
  return (
    <section className="bg-cta dark p-[140px_0]" aria-labelledby="about-cta">
      <div className="wrap split items-end">
        <h2 className="t-h1" id="about-cta">
          {content.title}
        </h2>
        <div className="stack gap-5">
          <p className="t-lead">{content.lead}</p>
          <div className="wrap-row gap-3">
            <LinkButton href="/careers" size="lg" arrow>
              {content.primary}
            </LinkButton>
            <LinkButton href="/contact" variant="glass" size="lg">
              {content.secondary}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
