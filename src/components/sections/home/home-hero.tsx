import { LinkButton } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { MaskedHeading } from "@/components/ui/typography";
import type { HomeContent } from "@/content/home";
import { HeroWidgets } from "./illustrations";
import { vars } from "./style";

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
        className="hero-pin bg-horizon is-live"
        aria-labelledby="hero-title"
        style={{
          minHeight: 960,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "250px 0 340px",
          overflow: "hidden",
        }}
      >
        <HeroWidgets />
        <div
          className="hero-content wrap stack"
          style={{ alignItems: "center", textAlign: "center", gap: 30, position: "relative" }}
        >
          <p className="eyebrow fade-in">{hero.eyebrow}</p>
          <MaskedHeading
            id="hero-title"
            style={{ maxWidth: 1180 }}
            lines={[{ text: hero.lines[0] }, { text: hero.lines[1], gradient: true }]}
          />
          <p className="t-lead fade-in" style={{ maxWidth: 620 }}>
            {hero.lead}
          </p>
          <div className="wrap-row gap-3 fade-in stack-sm" style={{ justifyContent: "center" }}>
            <LinkButton href="/contact" size="lg" arrow>
              {hero.primaryCta}
            </LinkButton>
            <LinkButton href="/services" variant="glass" size="lg">
              {hero.secondaryCta}
            </LinkButton>
          </div>
          <span className="scroll-cue fade-in" style={{ marginTop: 36 }} aria-hidden="true">
            {hero.scroll}
            <i />
          </span>
        </div>
      </section>

      <section
        className="over"
        aria-label={statements.label}
        style={{ marginTop: -300, paddingBottom: 140 }}
      >
        <div className="wrap stack-cards" style={{ maxWidth: 1100 }}>
          {statements.items.map((item, index) => (
            <article
              className="glass-frost stack-card"
              key={item.counter}
              style={vars({
                "--i": index,
                padding: "clamp(28px, 5cqi, 72px)",
                minHeight: 380,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 48,
              })}
            >
              <div className="row between gap-4">
                <span className="t-mono" style={{ color: "var(--text-3)" }}>
                  {item.counter}
                </span>
                <Icon name={item.icon} size="lg" style={{ color: "var(--ink)" }} />
              </div>
              <h2 className="t-h1" style={{ maxWidth: 820 }}>
                {item.title}
              </h2>
              <p className="t-lead" style={{ maxWidth: 640, color: "var(--text)" }}>
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
