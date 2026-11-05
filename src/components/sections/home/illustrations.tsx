import { Icon } from "@/components/ui/icon";
import { SxMark } from "@/components/ui/logo";
import { vars } from "./style";

/**
 * Illustrative interface mock-ups, drawn in HTML as on the Home board. All are decorative and hidden
 * from assistive technology, so their sample text is not translated. Bracketed figures in the
 * board's mock-ups are shown as a dash rather than invented.
 */
const chipLight = { background: "rgba(255,255,255,.7)" };

export function HeroWidgets() {
  return (
    <>
      <span
        className="hero-beam"
        aria-hidden="true"
        style={{ translate: "-50% 0", rotate: "-34deg" }}
      />
      <span
        className="hero-beam"
        aria-hidden="true"
        style={{ translate: "-50% 0", rotate: "34deg" }}
      />
      <div
        className="widget float-w"
        aria-hidden="true"
        style={{ left: "4%", top: 560, width: 230, display: "grid", gap: 12 }}
      >
        <span className="w-head">
          <SxMark size={22} />
          SimpleX Agent
          <span className="pulse" style={{ marginLeft: "auto" }} />
        </span>
        <span style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.3 }}>Stack detected</span>
        <span className="wrap-row gap-1">
          {["Next.js", "Kotlin", "AWS"].map((label) => (
            <span
              className="chip"
              key={label}
              style={{ minHeight: 24, fontSize: 11.5, ...chipLight }}
            >
              {label}
            </span>
          ))}
        </span>
      </div>
      <div
        className="widget float-w"
        aria-hidden="true"
        style={{
          right: "4%",
          top: 540,
          width: 200,
          display: "grid",
          gap: 10,
          justifyItems: "start",
        }}
      >
        <span className="w-head">
          <span className="w-app t">
            <Icon name="check" />
          </span>
          Pipeline
        </span>
        <div className="ring" style={vars({ "--p": 100, "--c": "#0C2A45", width: 72, height: 72 })}>
          <b style={{ fontSize: 13 }}>Pass</b>
        </div>
        <span className="w-sub">Build #128 · deployed to staging</span>
      </div>
    </>
  );
}

const stepLabel = { marginLeft: "auto", fontFamily: "var(--mono)" };

export function AgentWidgets() {
  return (
    <div className="grid-2 widget-grid" style={vars({ "--gap": "14px" })} aria-hidden="true">
      <div
        className="widget widget-dark wspan2"
        style={{
          gridColumn: "span 2",
          background: "linear-gradient(165deg, rgba(20,27,85,.92), rgba(7,11,43,.94))",
          display: "grid",
          gap: 14,
        }}
      >
        <span className="w-head">
          <SxMark size={24} />
          SimpleX Agent · acme/checkout
          <span className="row gap-2" style={{ marginLeft: "auto", fontWeight: 500 }}>
            <span className="pulse" />
            Working
          </span>
        </span>
        <div className="agent-step">
          <span className="ok">
            <Icon name="check" />
          </span>
          Mapped 9 domains in the repository
          <span className="t-xs" style={stepLabel}>
            done
          </span>
        </div>
        <div className="agent-step">
          <span className="ok">
            <Icon name="check" />
          </span>
          Billing module + webhooks · PR #412
          <span className="t-xs" style={stepLabel}>
            review
          </span>
        </div>
        <div className="agent-step run">
          <span className="ok">
            <span className="spinner" style={{ width: 12, height: 12, borderWidth: 1.5 }} />
          </span>
          Staging environment via Terraform
          <span className="t-xs" style={stepLabel}>
            running
          </span>
        </div>
      </div>
      <div
        className="widget"
        style={{
          minHeight: 200,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <span className="w-head">
          <span className="w-app">
            <Icon name="custom" />
          </span>
          Detected stack
        </span>
        <span
          className="stack gap-1"
          style={{ fontSize: 15, fontWeight: 600, letterSpacing: "-.01em" }}
        >
          <span>Next.js 15</span>
          <span>Kotlin · Spring</span>
          <span>PostgreSQL · AWS</span>
        </span>
        <span className="w-sub">Sample stack</span>
      </div>
      <div
        className="widget"
        style={{
          minHeight: 200,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <span className="w-head">
          <span className="w-app t">
            <Icon name="quality" />
          </span>
          Tests
        </span>
        <div className="ring" style={vars({ "--p": 100, "--c": "#0C2A45" })}>
          <b>48</b>
        </div>
        <span className="w-sub">Sample output</span>
      </div>
      <div
        className="widget wspan2"
        style={{
          gridColumn: "span 2",
          display: "flex",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <span className="w-head" style={{ flex: "none" }}>
          <span className="w-app m">
            <Icon name="cloud" />
          </span>
          Ecosystem
        </span>
        <span className="wrap-row gap-2">
          {["Web app", "API", "Worker", "CI/CD", "IaC", "Dashboards"].map((label) => (
            <span className="chip" key={label} style={chipLight}>
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
    <div className="pkg-vis mesh-light" style={{ alignItems: "center" }} aria-hidden="true">
      <div
        className="phone"
        style={vars({ "--pw": "100px", transform: "rotate(-6deg)", marginRight: -12 })}
      >
        <div className="phone-screen dark">
          <span className="phone-island" />
          <div className="phone-status">
            <span>9:41</span>
            <i />
          </div>
          <div className="phone-body">
            <span className="ph-h">Hello, Alex</span>
            <div
              className="ph-card"
              style={{
                height: "3.4em",
                background: "linear-gradient(150deg, rgba(47,87,245,.9), rgba(26,44,140,.8))",
              }}
            />
            <div className="ph-card" style={{ height: "2em" }} />
            <div className="ph-card" style={{ height: "2em" }} />
          </div>
        </div>
      </div>
      <div className="phone android" style={vars({ "--pw": "100px", transform: "rotate(5deg)" })}>
        <div className="phone-screen">
          <span className="phone-island" />
          <div className="phone-status">
            <span>9:41</span>
            <i />
          </div>
          <div className="phone-body">
            <span className="ph-h">Checkout</span>
            <div className="ph-card" style={{ height: "2.6em" }} />
            <div className="ph-card" style={{ height: "2.6em" }} />
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
      <span style={{ opacity: 0.6, fontSize: 11 }}>{label}</span>
      <b>{value}</b>
    </div>
  );
  return (
    <div
      className="pkg-vis mesh-light"
      style={{ alignItems: "center", padding: 18 }}
      aria-hidden="true"
    >
      <div className="desk-win dark" style={{ width: "100%" }}>
        <div className="win-bar">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          <span className="ttl">Ops Console</span>
        </div>
        <div style={{ padding: 12, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
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
      className="pkg-vis"
      style={{
        background: "linear-gradient(150deg, #1E4268, #08192B)",
        alignItems: "center",
        padding: 18,
        gap: 10,
      }}
      aria-hidden="true"
    >
      <div className="browser" style={{ flex: 1 }}>
        <div className="browser-bar">
          <span className="url">admin.yourproduct.com</span>
        </div>
        <div style={{ padding: 10, display: "grid", gap: 6 }}>
          <div className="mock-line" style={{ width: "50%", height: 8, background: "#070B2B" }} />
          <div className="mock-line" style={{ width: "90%" }} />
          <div className="mock-line" style={{ width: "70%" }} />
          <div className="mock-line" style={{ width: "80%" }} />
        </div>
      </div>
      <div className="phone" style={vars({ "--pw": "86px" })}>
        <div className="phone-screen">
          <span className="phone-island" />
          <div className="phone-status">
            <span>9:41</span>
            <i />
          </div>
          <div className="phone-body">
            <div
              className="ph-card"
              style={{ height: "3em", background: "linear-gradient(150deg, #2F57F5, #070B2B)" }}
            />
            <div className="ph-card" style={{ height: "2em" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function LedgerMock() {
  return (
    <div className="mock" style={{ width: "100%", maxWidth: 560 }} aria-hidden="true">
      <div className="mock-bar">
        <b style={{ fontSize: 13 }}>Ledgerline · Treasury</b>
        <span className="row gap-2">
          <span className="dot" />
          <span className="t-xs">Live</span>
        </span>
      </div>
      <div className="mock-body">
        <div className="grid-3" style={vars({ "--gap": "10px" })}>
          <div className="mock-kpi">
            <span>Positions</span>
            <b>EUR 48.2m</b>
          </div>
          <div className="mock-kpi">
            <span>Reconciled</span>
            <b>99.4%</b>
          </div>
          <div className="mock-kpi">
            <span>Exceptions</span>
            <b>7</b>
          </div>
        </div>
        <div className="mock-kpi">
          <div className="row between">
            <span>Intraday cash · by bank</span>
            <span className="badge-soft badge">Today</span>
          </div>
          <div className="bars" style={{ marginTop: 12 }}>
            {[40, 62, 48, 80, 56, 92, 70, 64, 86, 58].map((height, index) => (
              <i key={index} style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
        <div className="mock-row">
          <span className="dot dot-o" />
          <span style={{ flex: 1 }}>FX settlement mismatch · Bank 03</span>
          <span className="badge">Review</span>
        </div>
      </div>
    </div>
  );
}

export function CareMock() {
  return (
    <div className="row gap-5" style={{ alignItems: "flex-end" }} aria-hidden="true">
      <div className="mock" style={{ width: 230, borderRadius: 30, padding: 10 }}>
        <div
          style={{
            borderRadius: 22,
            background: "#F4F6FB",
            padding: "18px 16px",
            display: "grid",
            gap: 12,
          }}
        >
          <span className="t-xs" style={{ fontFamily: "var(--mono)" }}>
            STEP 2 OF 4
          </span>
          <b style={{ fontSize: 18, letterSpacing: "-.02em" }}>What brings you in today?</b>
          <div className="mock-row" style={{ borderColor: "#2F57F5" }}>
            <span className="dot dot-b" />
            New symptoms
          </div>
          <div className="mock-row">
            <span className="dot dot-m" />
            Follow-up visit
          </div>
          <div className="mock-row">
            <span className="dot" />
            Prescription
          </div>
          <div
            style={{
              height: 40,
              borderRadius: 12,
              background: "#070B2B",
              color: "#fff",
              display: "grid",
              placeItems: "center",
              fontSize: 12,
            }}
          >
            Continue
          </div>
        </div>
      </div>
      <div className="mock hide-sm" style={{ width: 300 }}>
        <div className="mock-bar">
          <b>Triage queue</b>
          <span className="t-xs">Clinic A</span>
        </div>
        <div className="mock-body" style={{ gap: 8 }}>
          <div className="mock-row">
            <span className="dot dot-o" />
            <span style={{ flex: 1 }}>Patient #2041</span>
            <span className="badge">Urgent</span>
          </div>
          <div className="mock-row">
            <span className="dot dot-b" />
            <span style={{ flex: 1 }}>Patient #2042</span>
            <span className="badge badge-soft">Today</span>
          </div>
          <div className="mock-row">
            <span className="dot dot-m" />
            <span style={{ flex: 1 }}>Patient #2043</span>
            <span className="badge badge-graphite">Routine</span>
          </div>
          <div className="mock-line" style={{ width: "70%" }} />
          <div className="mock-line" style={{ width: "45%" }} />
        </div>
      </div>
    </div>
  );
}

export function RouteMock() {
  return (
    <div className="mock" style={{ width: "100%", maxWidth: 560 }} aria-hidden="true">
      <div className="mock-bar">
        <b style={{ fontSize: 13 }}>Routewise · Dispatch</b>
        <span className="t-xs">Region North</span>
      </div>
      <div style={{ position: "relative", height: 300, background: "#EEF2FA" }}>
        <svg
          viewBox="0 0 560 300"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        >
          <path
            d="M0 220 L140 160 L260 200 L380 90 L560 120"
            fill="none"
            stroke="#D5DCEC"
            strokeWidth="10"
          />
          <path
            d="M60 40 L180 110 L300 60 L420 180 L520 250"
            fill="none"
            stroke="#D5DCEC"
            strokeWidth="10"
          />
          <path
            d="M40 250 C120 200 160 120 240 130 S360 210 430 120 S500 60 530 70"
            fill="none"
            stroke="#2F57F5"
            strokeWidth="3"
          />
          <path
            d="M70 60 C150 90 200 200 290 210 S420 230 500 160"
            fill="none"
            stroke="#3F6A93"
            strokeWidth="3"
            strokeDasharray="6 6"
          />
          <circle cx="40" cy="250" r="7" fill="#070B2B" />
          <circle cx="240" cy="130" r="6" fill="#2F57F5" />
          <circle cx="430" cy="120" r="6" fill="#2F57F5" />
          <circle cx="530" cy="70" r="8" fill="#9DB4CC" stroke="#070B2B" strokeWidth="2" />
          <circle cx="290" cy="210" r="6" fill="#3F6A93" />
          <circle cx="500" cy="160" r="8" fill="#9DB4CC" stroke="#070B2B" strokeWidth="2" />
        </svg>
        <div
          className="mock-row"
          style={{ position: "absolute", left: 14, bottom: 14, width: 220 }}
        >
          <span className="dot dot-b" />
          <span style={{ flex: 1 }}>Route 12 · 18 stops</span>
          <span className="t-xs">On time</span>
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
    <div className="stack gap-3" style={{ marginInline: "calc(var(--gutter) * -1)" }}>
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
