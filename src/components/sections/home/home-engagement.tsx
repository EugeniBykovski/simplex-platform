import { Badge } from "@/components/ui/feedback";
import { Icon, type GlyphName } from "@/components/ui/icon";
import type { HomeContent } from "@/content/home";
import { vars } from "./style";

const spread = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
} as const;
const TOAST_ICONS: { icon: GlyphName; tone: string }[] = [
  { icon: "check", tone: "w-app" },
  { icon: "quality", tone: "w-app g" },
  { icon: "architecture", tone: "w-app k" },
  { icon: "cloud", tone: "w-app" },
];

/** "Transparent by default": the liquid-glass bento. */
export function HomeEngagement({ content }: { content: HomeContent["engagement"] }) {
  return (
    <section
      className="mesh-light section"
      aria-labelledby="feel"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div className="orbs" aria-hidden="true">
        <span
          className="orb orb-c"
          style={{ width: 560, height: 560, left: "-6%", top: "6%", opacity: 0.55 }}
        />
        <span
          className="orb orb-s"
          style={{ width: 520, height: 520, right: "-4%", bottom: "-10%", opacity: 0.6 }}
        />
        <span
          className="orb orb-b"
          style={{ width: 380, height: 380, left: "46%", top: "40%", opacity: 0.45 }}
        />
      </div>
      <div className="wrap stack gap-7 lift">
        <div className="split" style={{ alignItems: "end" }}>
          <div className="stack gap-5">
            <span className="g-chip" style={{ alignSelf: "flex-start" }}>
              <span className="dot dot-g" />
              {content.chip}
            </span>
            <h2 className="t-h1" id="feel">
              {content.title}
            </h2>
          </div>
          <p className="t-lead">{content.lead}</p>
        </div>
        <div className="g-bento" style={{ gridAutoRows: 220 }}>
          <div
            className="lg grain b-2 b-r2 reveal"
            style={{ ...spread, padding: "clamp(24px, 3cqi, 40px)", gap: 20 }}
          >
            <span className="row gap-2">
              <Badge isNew>{content.room.live}</Badge>
              <span className="t-mono" style={{ color: "var(--text-2)" }}>
                {content.room.label}
              </span>
            </span>
            <span className="stack gap-3">
              <b className="t-h2">{content.room.title}</b>
              <span className="t-body">{content.room.body}</span>
            </span>
            <span className="wrap-row gap-2">
              {content.room.chips.map((chip) => (
                <span className="g-chip" key={chip}>
                  {chip}
                </span>
              ))}
            </span>
          </div>
          <div className="lg reveal" style={{ ...spread, padding: 22 }}>
            <span className="w-head">
              <span className="w-app">
                <Icon name="ai" />
              </span>
              {content.agent.label}
            </span>
            <span className="g-island" style={{ alignSelf: "flex-start" }} aria-hidden="true">
              <span className="pulse" />
              {content.agent.status}
              <span className="ring-sm" style={vars({ "--p": 66 })} />
            </span>
            <span className="t-small">{content.agent.body}</span>
          </div>
          <div className="lg-dark lg-graphite reveal" style={{ ...spread, padding: 22 }}>
            <span className="w-head">
              <span className="w-app k">
                <Icon name="teams" />
              </span>
              {content.team.label}
            </span>
            <span className="avatar-stack" aria-hidden="true">
              <span className="avatar">PM</span>
              <span className="avatar c">TL</span>
              <span className="avatar s">QA</span>
              <span className="avatar">UX</span>
            </span>
            <span className="t-small" style={{ color: "var(--on-dark-2)" }}>
              {content.team.body}
            </span>
          </div>
          <div
            className="lg b-2 reveal toast-grid"
            style={{
              padding: 18,
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 12,
              alignItems: "center",
            }}
          >
            {content.toasts.map((toast, index) => {
              const design = TOAST_ICONS[index];
              return (
                <div className="g-toast lg" style={{ width: "auto" }} key={toast.title}>
                  <span className={design?.tone}>
                    {design ? <Icon name={design.icon} /> : null}
                  </span>
                  <div className="stack">
                    <b>{toast.title}</b>
                    <p>{toast.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
