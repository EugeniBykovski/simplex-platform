import { cx } from "@/components/ui/cx";
import { Icon } from "@/components/ui/icon";
import { ArrowLink, RouteLink } from "@/components/ui/links";
import { CardArrow } from "@/components/ui/surface";
import type { HomeContent } from "@/content/home";
import { stackIndex } from "./style";

export function HomeWhatWeDo({ content }: { content: HomeContent["whatWeDo"] }) {
  const count = String(content.services.length).padStart(2, "0");
  return (
    <section className="bg-ink section z-[3]" aria-labelledby="wwd">
      <div className="wrap split">
        <div className="sticky-col stack gap-6">
          <span className="tag self-start">{content.tag}</span>
          <h2 className="t-h1" id="wwd">
            {content.titleStart} <span className="t-tone">{content.titleTone}</span>
          </h2>
          <p className="t-lead max-w-[460px]">{content.lead}</p>
          <ArrowLink href="/services" className="self-start">
            {content.link}
          </ArrowLink>
        </div>
        <div className="stack-cards">
          {content.services.map((service, index) => (
            <RouteLink
              key={service.href}
              href={service.href}
              pendingLook="card"
              className={cx(
                cx("glass-dark card-hover stack-card", stackIndex[index]),
                "p-[clamp(26px,3cqi,40px)] min-h-[300px] flex flex-col justify-between gap-[32px] [background:linear-gradient(160deg,rgba(30,44,120,.92),rgba(16,26,82,.92))] border-[rgba(255,255,255,.14)]",
              )}
            >
              <span className="row between">
                <Icon name={service.icon} className="text-[#9DB4CC] [--icon:56px]" />
                <span className="idx">
                  {String(index + 1).padStart(2, "0")} / {count}
                </span>
              </span>
              <span className="stack gap-3">
                <span className="t-h3">{service.title}</span>
                <span className="t-body max-w-[540px]">{service.description}</span>
              </span>
              <span className="row between gap-4 flex-wrap">
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
