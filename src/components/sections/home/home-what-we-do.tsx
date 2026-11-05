import { Icon } from "@/components/ui/icon";
import { ArrowLink, RouteLink } from "@/components/ui/links";
import { CardArrow } from "@/components/ui/surface";
import type { HomeContent } from "@/content/home";
import { vars } from "./style";

export function HomeWhatWeDo({ content }: { content: HomeContent["whatWeDo"] }) {
  const count = String(content.services.length).padStart(2, "0");
  return (
    <section className="bg-ink section" aria-labelledby="wwd" style={{ zIndex: 3 }}>
      <div className="wrap split">
        <div className="sticky-col stack gap-6">
          <span className="tag" style={{ alignSelf: "flex-start" }}>
            {content.tag}
          </span>
          <h2 className="t-h1" id="wwd">
            {content.titleStart} <span className="t-tone">{content.titleTone}</span>
          </h2>
          <p className="t-lead" style={{ maxWidth: 460 }}>
            {content.lead}
          </p>
          <ArrowLink href="/services" style={{ alignSelf: "flex-start" }}>
            {content.link}
          </ArrowLink>
        </div>
        <div className="stack-cards">
          {content.services.map((service, index) => (
            <RouteLink
              key={service.href}
              href={service.href}
              pendingLook="card"
              className="glass-dark card-hover stack-card"
              style={vars({
                "--i": index,
                padding: "clamp(26px, 3cqi, 40px)",
                minHeight: 300,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 32,
                background: "linear-gradient(160deg, rgba(30,44,120,.92), rgba(16,26,82,.92))",
                borderColor: "rgba(255,255,255,.14)",
              })}
            >
              <span className="row between">
                <Icon name={service.icon} style={vars({ color: "#9DB4CC", "--icon": "56px" })} />
                <span className="idx">
                  {String(index + 1).padStart(2, "0")} / {count}
                </span>
              </span>
              <span className="stack gap-3">
                <span className="t-h3">{service.title}</span>
                <span className="t-body" style={{ maxWidth: 540 }}>
                  {service.description}
                </span>
              </span>
              <span className="row between gap-4" style={{ flexWrap: "wrap" }}>
                <span className="wrap-row gap-2">
                  {service.chips.map((chip) => (
                    <span className="chip" key={chip}>
                      {chip}
                    </span>
                  ))}
                </span>
                <CardArrow />
              </span>
            </RouteLink>
          ))}
        </div>
      </div>
    </section>
  );
}
