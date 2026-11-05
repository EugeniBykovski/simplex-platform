import type { HomeContent } from "@/content/home";
import { vars } from "./style";

const column = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
} as const;

export function HomeWhy({ content }: { content: HomeContent["why"] }) {
  const [first, second, third, fourth, fifth, sixth] = content.cards;
  if (!first || !second || !third || !fourth || !fifth || !sixth) return null;

  return (
    <section className="section" aria-labelledby="why">
      <div className="wrap stack gap-8">
        <div className="split" style={{ alignItems: "end" }}>
          <div className="stack gap-5">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 className="t-h1 reveal" id="why">
              {content.title}
            </h2>
          </div>
          <p className="t-lead reveal">{content.lead}</p>
        </div>
        <div className="grid-12 bento" style={vars({ "--gap": "16px" })}>
          <article
            className="paper-card reveal"
            style={{
              ...column,
              gridColumn: "span 7",
              padding: 40,
              minHeight: 340,
              gap: 40,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              className="tex-grid"
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.6,
                maskImage: "linear-gradient(90deg, transparent 30%, #000)",
                WebkitMaskImage: "linear-gradient(90deg, transparent 30%, #000)",
              }}
            />
            <span className="idx" style={{ position: "relative" }}>
              {first.label}
            </span>
            <div className="stack gap-3" style={{ position: "relative", maxWidth: 480 }}>
              <h3 className="t-h3">{first.title}</h3>
              <p className="t-body">{first.body}</p>
            </div>
          </article>
          <article
            className="dark reveal"
            style={{
              ...column,
              gridColumn: "span 5",
              padding: 40,
              borderRadius: "var(--r-lg)",
              minHeight: 340,
              gap: 40,
            }}
          >
            <span className="idx">{second.label}</span>
            <div className="stack gap-3">
              <h3 className="t-h3">{second.title}</h3>
              <p className="t-body">{second.body}</p>
            </div>
          </article>
          {[third, fourth, fifth].map((card) => (
            <article
              className="solid reveal"
              key={card.label}
              style={{ ...column, gridColumn: "span 4", padding: 36, minHeight: 300, gap: 32 }}
            >
              <span className="idx">{card.label}</span>
              <div className="stack gap-3">
                <h3 className="t-h4">{card.title}</h3>
                <p className="t-small">{card.body}</p>
              </div>
            </article>
          ))}
          <article
            className="bg-horizon reveal"
            style={{
              gridColumn: "span 12",
              padding: "clamp(28px, 4cqi, 56px)",
              minHeight: 280,
              borderRadius: "var(--r-lg)",
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
              gap: 32,
              alignItems: "end",
              border: "1px solid var(--line)",
            }}
          >
            <div className="stack gap-4">
              <span className="idx">{sixth.label}</span>
              <h3 className="t-h2">{sixth.title}</h3>
            </div>
            <p className="t-lead" style={{ color: "var(--text)" }}>
              {sixth.body}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
