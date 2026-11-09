import { Icon } from "@/components/ui/icon";
import { SxMark } from "@/components/ui/logo";

/**
 * Illustrative interface mock-ups, drawn in HTML as on the Home board. All are decorative and hidden
 * from assistive technology, so their sample text is not translated. Bracketed figures in the
 * board's mock-ups are shown as a dash rather than invented. The hero widgets hide at 1100 px and
 * below, as the stylesheet intends: the board's inline display overrode that rule (GAP-D12).
 */
export function HeroWidgets() {
  return (
    <>
      <span className="hero-beam [translate:-50%_0] [rotate:-34deg]" aria-hidden="true" />
      <span className="hero-beam [translate:-50%_0] [rotate:34deg]" aria-hidden="true" />
      <div
        className="widget float-w fx-parallax-hero sx-1100:hidden left-[4%] top-[560px] w-[230px] grid gap-[12px]"
        aria-hidden="true"
      >
        <span className="w-head">
          <SxMark className="[--m:22px]" />
          SimpleX Agent
          <span className="pulse ml-auto" />
        </span>
        <span className="text-[14px] font-[600] leading-[1.3]">Stack detected</span>
        <span className="wrap-row gap-1">
          {["Next.js", "Kotlin", "AWS"].map((label) => (
            <span
              className="chip min-h-[24px] text-[11.5px] [background:rgba(255,255,255,.7)]"
              key={label}
            >
              {label}
            </span>
          ))}
        </span>
      </div>
      <div
        className="widget float-w fx-parallax-hero sx-1100:hidden right-[4%] top-[540px] w-[200px] grid gap-[10px] justify-items-start"
        aria-hidden="true"
      >
        <span className="w-head">
          <span className="w-app t">
            <Icon name="check" />
          </span>
          Pipeline
        </span>
        <div className="ring [--p:100] [--c:#0C2A45] w-[72px] h-[72px]">
          <b className="text-[13px]">Pass</b>
        </div>
        <span className="w-sub">Build #128 · deployed to staging</span>
      </div>
    </>
  );
}

export function AgentWidgets() {
  return (
    <div className="grid-2 widget-grid [--gap:14px]" aria-hidden="true">
      <div className="widget widget-dark wspan2 col-span-2 [background:linear-gradient(165deg,rgba(20,27,85,.92),rgba(7,11,43,.94))] grid gap-[14px]">
        <span className="w-head">
          <SxMark className="[--m:24px]" />
          SimpleX Agent · acme/checkout
          <span className="row gap-2 ml-auto font-[500]">
            <span className="pulse" />
            Working
          </span>
        </span>
        <div className="agent-step">
          <span className="ok">
            <Icon name="check" />
          </span>
          Mapped 9 domains in the repository
          <span className="t-xs ml-auto font-mono">done</span>
        </div>
        <div className="agent-step">
          <span className="ok">
            <Icon name="check" />
          </span>
          Billing module + webhooks · PR #412
          <span className="t-xs ml-auto font-mono">review</span>
        </div>
        <div className="agent-step run">
          <span className="ok">
            <span className="spinner w-[12px] h-[12px] border-[1.5px]" />
          </span>
          Staging environment via Terraform
          <span className="t-xs ml-auto font-mono">running</span>
        </div>
      </div>
      <div className="widget min-h-[200px] flex flex-col justify-between">
        <span className="w-head">
          <span className="w-app">
            <Icon name="custom" />
          </span>
          Detected stack
        </span>
        <span className="stack gap-1 text-[15px] font-[600] tracking-[-.01em]">
          <span>Next.js 15</span>
          <span>Kotlin · Spring</span>
          <span>PostgreSQL · AWS</span>
        </span>
        <span className="w-sub">Sample stack</span>
      </div>
      <div className="widget min-h-[200px] flex flex-col justify-between">
        <span className="w-head">
          <span className="w-app t">
            <Icon name="quality" />
          </span>
          Tests
        </span>
        <div className="ring [--p:100] [--c:#0C2A45]">
          <b>48</b>
        </div>
        <span className="w-sub">Sample output</span>
      </div>
      <div className="widget wspan2 col-span-2 flex items-center gap-[16px] flex-wrap">
        <span className="w-head flex-none">
          <span className="w-app m">
            <Icon name="cloud" />
          </span>
          Ecosystem
        </span>
        <span className="wrap-row gap-2">
          {["Web app", "API", "Worker", "CI/CD", "IaC", "Dashboards"].map((label) => (
            <span className="chip [background:rgba(255,255,255,.7)]" key={label}>
              {label}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}

export function PhonePairVisual() {
  return (
    <div className="pkg-vis mesh-light items-center" aria-hidden="true">
      <div className="phone [--pw:100px] [transform:rotate(-6deg)] mr-[-12px]">
        <div className="phone-screen dark">
          <span className="phone-island" />
          <div className="phone-status">
            <span>9:41</span>
            <i />
          </div>
          <div className="phone-body">
            <span className="ph-h">Hello, Alex</span>
            <div className="ph-card h-[3.4em] [background:linear-gradient(150deg,rgba(47,87,245,.9),rgba(26,44,140,.8))]" />
            <div className="ph-card h-[2em]" />
            <div className="ph-card h-[2em]" />
          </div>
        </div>
      </div>
      <div className="phone android [--pw:100px] [transform:rotate(5deg)]">
        <div className="phone-screen">
          <span className="phone-island" />
          <div className="phone-status">
            <span>9:41</span>
            <i />
          </div>
          <div className="phone-body">
            <span className="ph-h">Checkout</span>
            <div className="ph-card h-[2.6em]" />
            <div className="ph-card h-[2.6em]" />
            <span className="ph-btn">Pay</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DesktopVisual() {
  const tile = (label: string, value: string) => (
    <div className="win-tile">
      <span className="opacity-[0.6] text-[11px]">{label}</span>
      <b>{value}</b>
    </div>
  );
  return (
    <div className="pkg-vis mesh-light items-center p-[18px]" aria-hidden="true">
      <div className="desk-win dark w-[100%]">
        <div className="win-bar">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          <span className="ttl">Ops Console</span>
        </div>
        <div className="p-[12px] grid grid-cols-[1fr_1fr_1fr] gap-[8px]">
          {tile("Queue", "—")}
          {tile("Devices", "—")}
          {tile("Sync", "OK")}
        </div>
      </div>
    </div>
  );
}

export function FullCycleVisual() {
  return (
    <div
      className="pkg-vis [background:linear-gradient(150deg,#1E4268,#08192B)] items-center p-[18px] gap-[10px]"
      aria-hidden="true"
    >
      <div className="browser flex-1">
        <div className="browser-bar">
          <span className="url">admin.yourproduct.com</span>
        </div>
        <div className="p-[10px] grid gap-[6px]">
          <div className="mock-line w-[50%] h-[8px] [background:#070B2B]" />
          <div className="mock-line w-[90%]" />
          <div className="mock-line w-[70%]" />
          <div className="mock-line w-[80%]" />
        </div>
      </div>
      <div className="phone [--pw:86px]">
        <div className="phone-screen">
          <span className="phone-island" />
          <div className="phone-status">
            <span>9:41</span>
            <i />
          </div>
          <div className="phone-body">
            <div className="ph-card h-[3em] [background:linear-gradient(150deg,#2F57F5,#070B2B)]" />
            <div className="ph-card h-[2em]" />
          </div>
        </div>
      </div>
    </div>
  );
}

const MARQUEES = [
  [
    "TypeScript",
    "React",
    "Next.js",
    "Kotlin",
    "Spring Boot",
    ".NET",
    "Go",
    "Python",
    "PostgreSQL",
    "Kafka",
    "Swift",
    "Flutter",
  ],
  [
    "AWS",
    "Azure",
    "Google Cloud",
    "Kubernetes",
    "Terraform",
    "GitHub Actions",
    "OpenTelemetry",
    "Playwright",
    "LangGraph",
    "Vector search",
    "dbt",
    "Snowflake",
  ],
];

export function TechMarquees() {
  return (
    <div className="stack gap-3 mx-[calc(var(--gutter)_*_-1)]">
      {MARQUEES.map((names, row) => (
        <div className={row ? "marquee rev" : "marquee"} aria-hidden="true" key={row}>
          <div className="marquee-track">
            {[...names, ...names].map((name, index) => (
              <span key={`${name}-${index}`}>
                <i />
                {name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
