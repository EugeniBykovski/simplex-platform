import { DemoTag } from "@/components/ui/feedback";
import { ArrowLink, RouteLink } from "@/components/ui/links";
import type { HomeContent } from "@/content/home";
import { vars } from "./style";

/** Sample articles. The article route takes a slug the design does not define, so cards use /insights. */
export function HomeInsights({ content }: { content: HomeContent["insights"] }) {
  const minutes = (count: number) => content.minutes.replace("{count}", String(count));
  const [first, second] = content.cards;
  if (!first || !second) return null;
  const cardStyle = {
    padding: 32,
    display: "flex",
    flexDirection: "column",
    gap: 14,
    flex: 1,
  } as const;

  return (
    <section className="section" aria-labelledby="ins">
      <div className="wrap stack gap-7">
        <div className="wrap-row between gap-5" style={{ alignItems: "flex-end" }}>
          <div className="stack gap-5">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 className="t-h1" id="ins">
              {content.title}
            </h2>
          </div>
          <div className="stack gap-3" style={{ alignItems: "flex-start" }}>
            <DemoTag>{content.sample}</DemoTag>
            <ArrowLink href="/insights">{content.link}</ArrowLink>
          </div>
        </div>
        <div className="grid-12 bento bento-md" style={vars({ "--gap": "16px" })}>
          <RouteLink
            href="/insights"
            pendingLook="card"
            className="solid card-hover reveal"
            style={{
              gridColumn: "span 7",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              className="viz viz-enterprise"
              style={{
                borderRadius: 0,
                height: 360,
                display: "flex",
                alignItems: "flex-end",
                padding: 24,
              }}
            >
              <span className="slice" />
              <span className="tag" style={{ color: "#fff", borderColor: "rgba(255,255,255,.3)" }}>
                {content.featured.tag}
              </span>
            </div>
            <div className="stack gap-3" style={{ padding: 32 }}>
              <h3 className="t-h3">{content.featured.title}</h3>
              <p className="t-body">{content.featured.body}</p>
              <p className="t-xs" style={{ marginTop: 8 }}>
                {minutes(content.featured.minutes)}
              </p>
            </div>
          </RouteLink>
          <div className="stack gap-4" style={{ gridColumn: "span 5" }}>
            {[
              { card: first, badge: "badge badge-soft" },
              { card: second, badge: "badge badge-graphite" },
            ].map(({ card, badge }) => (
              <RouteLink
                key={card.title}
                href="/insights"
                pendingLook="card"
                className="solid card-hover reveal"
                style={cardStyle}
              >
                <span className={badge} style={{ alignSelf: "flex-start" }}>
                  {card.tag}
                </span>
                <h3 className="t-h4">{card.title}</h3>
                <p className="t-small">{card.body}</p>
                <p className="t-xs" style={{ marginTop: "auto" }}>
                  {minutes(card.minutes)}
                </p>
              </RouteLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
