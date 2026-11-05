import { LinkButton } from "@/components/ui/button";
import { cx } from "@/components/ui/cx";
import { Icon } from "@/components/ui/icon";
import { MaskedHeading } from "@/components/ui/typography";
import type { HomeContent } from "@/content/home";
import { HeroWidgets } from "./illustrations";
import { stackIndex } from "./style";

/** The pinned hero, and the three statement cards that rise over it. */
export function HomeHero({
  hero,
  statements,
}: {
  hero: HomeContent["hero"];
  statements: HomeContent["statements"];
}) {
  return (
    <div className="hero-stage">
      <section
        className="hero-pin bg-horizon is-live min-h-[960px] flex items-start justify-center p-[250px_0_340px] overflow-hidden"
        aria-labelledby="hero-title"
      >
        <HeroWidgets />
        <div className="hero-content wrap stack items-center text-center gap-[30px] relative">
          <p className="eyebrow fade-in">{hero.eyebrow}</p>
          <MaskedHeading
            id="hero-title"
            className="max-w-[1180px]"
            lines={[{ text: hero.lines[0] }, { text: hero.lines[1], gradient: true }]}
          />
          <p className="t-lead fade-in max-w-[620px]">{hero.lead}</p>
          <div className="wrap-row gap-3 fade-in stack-sm justify-center">
            <LinkButton href="/contact" size="lg" arrow>
              {hero.primaryCta}
            </LinkButton>
            <LinkButton href="/services" variant="glass" size="lg">
              {hero.secondaryCta}
            </LinkButton>
          </div>
          <span className="scroll-cue fade-in mt-[36px]" aria-hidden="true">
            {hero.scroll}
            <i />
          </span>
        </div>
      </section>

      <section className="over mt-[-300px] pb-[140px]" aria-label={statements.label}>
        <div className="wrap stack-cards max-w-[1100px]">
          {statements.items.map((item, index) => (
            <article
              className={cx(
                cx("glass-frost stack-card", stackIndex[index]),
                "p-[clamp(28px,5cqi,72px)] min-h-[380px] flex flex-col justify-between gap-[48px]",
              )}
              key={item.counter}
            >
              <div className="row between gap-4">
                <span className="t-mono text-text-3">{item.counter}</span>
                <Icon name={item.icon} size="lg" className="text-ink" />
              </div>
              <h2 className="t-h1 max-w-[820px]">{item.title}</h2>
              <p className="t-lead max-w-[640px] text-text">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
