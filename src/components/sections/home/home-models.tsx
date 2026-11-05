import { LinkButton } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import type { HomeContent } from "@/content/home";
import { vars } from "./style";

export function HomeModels({ content }: { content: HomeContent["models"] }) {
  return (
    <section className="bg-ink section" aria-labelledby="models">
      <div className="wrap stack gap-8">
        <div className="split" style={{ alignItems: "end" }}>
          <div className="stack gap-5">
            <span className="tag" style={{ alignSelf: "flex-start" }}>
              {content.tag}
            </span>
            <h2 className="t-h1" id="models">
              {content.title}
            </h2>
          </div>
          <p className="t-lead">{content.lead}</p>
        </div>
        <div className="grid-3" style={vars({ "--gap": "16px" })}>
          {content.cards.map((card) => (
            <article
              className={`glass-dark model-card ${card.featured ? "is-featured " : ""}reveal`}
              key={card.label}
            >
              <div className="row between">
                <span className="idx">{card.label}</span>
                <Icon name={card.icon} style={vars({ color: "#9DB4CC", "--icon": "40px" })} />
              </div>
              <div className="stack gap-3">
                <h3 className="t-h3">{card.title}</h3>
                <p className="t-body">{card.description}</p>
              </div>
              <div className="stack gap-3" style={{ marginTop: "auto" }}>
                <p className="t-mono" style={{ color: "var(--on-dark-3)" }}>
                  {content.bestFor}
                </p>
                <ul className="checks">
                  {card.best.map((item) => (
                    <li key={item}>
                      <Icon name="check" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <LinkButton
                href="/contact"
                variant={card.featured ? "light" : "ghost"}
                arrow
                style={{ alignSelf: "flex-start" }}
              >
                {card.cta}
              </LinkButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
