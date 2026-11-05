import { Icon } from "@/components/ui/icon";
import { RouteLink } from "@/components/ui/links";
import type { HomeContent } from "@/content/home";
import { vars } from "./style";

export function HomeIndustries({ content }: { content: HomeContent["industries"] }) {
  return (
    <section className="section" aria-labelledby="ind">
      <div className="wrap stack gap-8">
        <div className="split" style={{ alignItems: "end" }}>
          <div className="stack gap-5">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 className="t-h1" id="ind">
              {content.title}
            </h2>
          </div>
          <p className="t-lead">{content.lead}</p>
        </div>
        <div className="grid-3" style={vars({ "--gap": "16px" })}>
          {content.cards.map((card) => (
            <RouteLink
              key={card.href}
              href={card.href}
              pendingLook="card"
              className={`ind-card viz viz-${card.viz} card-hover reveal`}
            >
              <span className="slice" />
              <span className="row between">
                <Icon name={card.icon} />
                <span className="card-arrow" style={{ borderColor: "rgba(255,255,255,.3)" }}>
                  <Icon name="arrow" />
                </span>
              </span>
              <span className="stack gap-3">
                <span className="t-h3">{card.name}</span>
                <span className="ind-more">
                  <span className="t-small" style={{ color: "#D3D8EE", display: "block" }}>
                    {card.description}
                  </span>
                </span>
              </span>
            </RouteLink>
          ))}
        </div>
      </div>
    </section>
  );
}
