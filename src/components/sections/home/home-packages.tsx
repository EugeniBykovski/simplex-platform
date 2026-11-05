import { Badge } from "@/components/ui/feedback";
import { ArrowLink, RouteLink } from "@/components/ui/links";
import type { HomeContent } from "@/content/home";
import { DesktopVisual, FullCycleVisual, PhonePairVisual } from "./illustrations";
import { vars } from "./style";

const CARDS = [
  {
    href: "/packages",
    className: "lg-dark pkg-card card-hover reveal",
    visual: <PhonePairVisual />,
    avatars: [
      ["iOS", ""],
      ["BE", " c"],
    ],
  },
  {
    href: "/services/desktop-development",
    className: "lg-dark pkg-card card-hover reveal",
    visual: <DesktopVisual />,
    avatars: [
      ["DT", ""],
      ["QA", " s"],
    ],
  },
  {
    href: "/packages",
    className: "lg-dark lg-cobalt pkg-card card-hover glow-cobalt reveal",
    visual: <FullCycleVisual />,
    avatars: [
      ["PM", ""],
      ["BE", " c"],
      ["FE", " s"],
      ["MB", ""],
    ],
    tone: "#DCE4FF",
  },
] as const;

export function HomePackages({ content }: { content: HomeContent["packages"] }) {
  return (
    <section
      className="mesh-graphite section"
      aria-labelledby="pk"
      style={{ position: "relative", overflow: "hidden", color: "#fff" }}
    >
      <div className="orbs" aria-hidden="true">
        <span
          className="orb orb-c"
          style={{ width: 640, height: 640, left: "30%", top: "20%", opacity: 0.6 }}
        />
        <span
          className="orb orb-g"
          style={{ width: 420, height: 420, right: "-4%", top: "-10%", opacity: 0.45 }}
        />
      </div>
      <div className="wrap lift stack gap-8">
        <div className="split" style={{ alignItems: "end" }}>
          <div className="stack gap-5">
            <span className="g-chip on-dark" style={{ alignSelf: "flex-start" }}>
              <Badge isNew>{content.isNew}</Badge>
              {content.chip}
            </span>
            <h2 className="t-h1" id="pk">
              {content.title}
            </h2>
          </div>
          <div className="stack gap-5">
            <p className="t-lead" style={{ color: "var(--on-dark-2)" }}>
              {content.lead}
            </p>
            <ArrowLink href="/packages" style={{ color: "#fff" }}>
              {content.link}
            </ArrowLink>
          </div>
        </div>
        <div className="grid-3" style={vars({ "--gap": "16px", alignItems: "stretch" })}>
          {content.cards.map((card, index) => {
            const design = CARDS[index];
            if (!design) return null;
            const tone = "tone" in design ? design.tone : undefined;
            return (
              <RouteLink
                key={card.label}
                href={design.href}
                pendingLook="card"
                className={design.className}
              >
                {design.visual}
                <span className="row between">
                  <span className="t-mono" style={{ color: tone ?? "var(--on-dark-3)" }}>
                    {card.label}
                  </span>
                  <span className="pkg-team">
                    <span className="avatar-stack" aria-hidden="true">
                      {design.avatars.map(([label, variant]) => (
                        <span className={`avatar${variant}`} key={label}>
                          {label}
                        </span>
                      ))}
                    </span>
                    <b style={{ fontSize: 13 }}>{card.team}</b>
                  </span>
                </span>
                <span className="stack gap-2">
                  <b className="t-h3">{card.title}</b>
                  <span className="t-body" style={{ color: tone ?? "var(--on-dark-2)" }}>
                    {card.body}
                  </span>
                </span>
              </RouteLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}
