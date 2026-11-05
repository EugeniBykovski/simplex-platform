import { cx } from "@/components/ui/cx";
import { Badge } from "@/components/ui/feedback";
import { ArrowLink, RouteLink } from "@/components/ui/links";
import type { HomeContent } from "@/content/home";
import { DesktopVisual, FullCycleVisual, PhonePairVisual } from "./illustrations";

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
    labelClass: "text-[#DCE4FF]",
    bodyClass: "text-[#DCE4FF]",
  },
] as const;

export function HomePackages({ content }: { content: HomeContent["packages"] }) {
  return (
    <section
      className="mesh-graphite section relative overflow-hidden text-white"
      aria-labelledby="pk"
    >
      <div className="orbs" aria-hidden="true">
        <span className="orb orb-c w-[640px] h-[640px] left-[30%] top-[20%] opacity-[0.6]" />
        <span className="orb orb-g w-[420px] h-[420px] right-[-4%] top-[-10%] opacity-[0.45]" />
      </div>
      <div className="wrap lift stack gap-8">
        <div className="split [align-items:end]">
          <div className="stack gap-5">
            <span className="g-chip on-dark self-start">
              <Badge isNew>{content.isNew}</Badge>
              {content.chip}
            </span>
            <h2 className="t-h1" id="pk">
              {content.title}
            </h2>
          </div>
          <div className="stack gap-5">
            <p className="t-lead text-on-dark-2">{content.lead}</p>
            <ArrowLink href="/packages" className="text-white">
              {content.link}
            </ArrowLink>
          </div>
        </div>
        <div className="grid-3 [--gap:16px] items-stretch">
          {content.cards.map((card, index) => {
            const design = CARDS[index];
            if (!design) return null;
            const labelClass = "labelClass" in design ? design.labelClass : "text-on-dark-3";
            const bodyClass = "bodyClass" in design ? design.bodyClass : "text-on-dark-2";
            return (
              <RouteLink
                key={card.label}
                href={design.href}
                pendingLook="card"
                className={design.className}
              >
                {design.visual}
                <span className="row between">
                  <span className={cx("t-mono", labelClass)}>{card.label}</span>
                  <span className="pkg-team">
                    <span className="avatar-stack" aria-hidden="true">
                      {design.avatars.map(([label, variant]) => (
                        <span className={`avatar${variant}`} key={label}>
                          {label}
                        </span>
                      ))}
                    </span>
                    <b className="text-[13px]">{card.team}</b>
                  </span>
                </span>
                <span className="stack gap-2">
                  <b className="t-h3">{card.title}</b>
                  <span className={cx("t-body", bodyClass)}>{card.body}</span>
                </span>
              </RouteLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}
