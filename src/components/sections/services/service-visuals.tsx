import { cx } from "@/components/ui/cx";
import { Icon } from "@/components/ui/icon";
import type { ServiceSharedCopy, ServiceVisual } from "@/content/services";

type Visuals = ServiceSharedCopy["visuals"];

/** Decoration only, so none of these carry data. The bars and tracks are static. */
const CHART_HEIGHTS = ["h-[30%]", "h-[55%]", "h-[42%]", "h-[75%]", "h-[64%]", "h-[88%]"] as const;
const SPARK_HEIGHTS = [
  "h-[30%]",
  "h-[44%]",
  "h-[38%]",
  "h-[60%]",
  "h-[56%]",
  "h-[72%]",
  "h-[68%]",
  "h-[90%]",
] as const;

function CodeVisual({ content }: { content: Visuals["code"] }) {
  const keyword = "text-[#8FB2FF]";
  const type = "text-[#9DB4CC]";
  return (
    <div className="mock w-full">
      <div className="mock-bar">
        <b className="truncate">orders/fulfilment.service.ts</b>
        <span className="badge badge-graphite">{content.badge}</span>
      </div>
      <div
        className="p-[20px] font-mono text-[12.5px] leading-[1.9] bg-[#0C123C] text-[#BAC0DC] [overflow-wrap:anywhere] "
        translate="no"
      >
        <div>
          <span className={keyword}>export class</span>{" "}
          <span className={type}>FulfilmentService</span> {"{"}
        </div>
        <div className="pl-[18px]">
          <span className={keyword}>async</span> allocate(order: <span className={type}>Order</span>
          ) {"{"}
        </div>
        <div className="pl-[36px]">
          <span className={keyword}>const</span> stock = <span className={keyword}>await</span>{" "}
          this.inventory.reserve(order.lines)
        </div>
        <div className="pl-[36px]">
          <span className={keyword}>if</span> (!stock.complete){" "}
          <span className={keyword}>return</span> this.backorder(order, stock)
        </div>
        <div className="pl-[36px]">
          <span className={keyword}>return</span> this.events.publish(
          <span className="text-[#FFD996]">&apos;order.allocated&apos;</span>, order.id)
        </div>
        <div className="pl-[18px]">{"}"}</div>
        <div>{"}"}</div>
      </div>
      <div className="mock-body grid-cols-[repeat(3,minmax(0,1fr))] gap-[10px] sx-600:[&>div]:p-[6px] sx-600:[&_b]:text-[14px]">
        <div className="mock-kpi">
          <span>{content.coverage}</span>
          <b>{content.coverageValue}</b>
        </div>
        <div className="mock-kpi">
          <span>{content.build}</span>
          <b className="text-[#128A5C]">{content.buildValue}</b>
        </div>
        <div className="mock-kpi">
          <span>{content.deploy}</span>
          <b>{content.deployValue}</b>
        </div>
      </div>
    </div>
  );
}

function ArchVisual({ layers }: { layers: Visuals["arch"] }) {
  return (
    <div className="arch w-full">
      {layers.map((layer) => (
        <div className="arch-layer" key={layer.label}>
          <span className="arch-label">{layer.label}</span>
          <div className="arch-nodes">
            {layer.nodes.map((node) => (
              <span
                className={cx("arch-node", node.highlight && "hl", node.dashed && "border-dashed")}
                key={node.name}
              >
                {node.name}
                {node.note ? <small>{node.note}</small> : null}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function DeviceVisual({ content }: { content: Visuals["device"] }) {
  return (
    <div className="row gap-4 items-end w-full justify-center">
      <div className="mock flex-1 max-w-[420px] min-w-[0]">
        <div className="mock-bar">
          <span className="row gap-2 min-w-[0]">
            <span className="dot dot-b" />
            <b className="truncate">{content.address}</b>
          </span>
          <span className="t-xs">{content.sample}</span>
        </div>
        <div className="mock-body">
          <div className="mock-line w-[40%] h-[14px] bg-[#070B2B]" />
          <div className="mock-line w-[85%]" />
          <div className="mock-line w-[70%]" />
          <div className="grid-3 [--gap:8px]">
            <div className="mock-kpi h-[80px]" />
            <div className="mock-kpi h-[80px]" />
            <div className="mock-kpi h-[80px]" />
          </div>
          <div className="bars">
            {CHART_HEIGHTS.map((height) => (
              <i className={height} key={height} />
            ))}
          </div>
        </div>
      </div>
      <div className="mock hide-sm w-[170px] rounded-[28px] p-[8px] flex-none">
        <div className="rounded-[21px] bg-paper p-[16px_12px] grid gap-[10px]">
          <div className="mock-line w-[60%] h-[12px] bg-[#070B2B]" />
          <div className="mock-row">
            <span className="dot" />
            {content.overview}
          </div>
          <div className="mock-row">
            <span className="dot dot-b" />
            {content.activity}
          </div>
          <div className="mock-row">
            <span className="dot dot-m" />
            {content.settings}
          </div>
          <div className="h-[36px] rounded-[10px] bg-[#070B2B]" />
        </div>
      </div>
    </div>
  );
}

const DESKTOP_ICONS = ["building", "logistics", "mobile", "cloud"] as const;

function DesktopVisual({ content }: { content: Visuals["desktop"] }) {
  return (
    <div className="desk-win dark w-full">
      <div className="win-bar">
        <span className="dots">
          <i />
          <i />
          <i />
        </span>
        <span className="ttl">{content.title}</span>
        <span className="badge-new">{content.status}</span>
      </div>
      <div className="win-body min-h-[340px]">
        <div className="win-side">
          {content.nav.map((item, index) => (
            <span className={index === 0 ? "on" : undefined} key={item}>
              <Icon name={DESKTOP_ICONS[index] ?? "building"} />
              {item}
            </span>
          ))}
        </div>
        <div className="win-main">
          <div className="grid-3 [--gap:8px]">
            <div className="win-tile">
              <span className="opacity-[.6]">{content.jobs}</span>
              <b>{content.sample}</b>
            </div>
            <div className="win-tile">
              <span className="opacity-[.6]">{content.devices}</span>
              <b>{content.sample}</b>
            </div>
            <div className="win-tile">
              <span className="opacity-[.6]">{content.sync}</span>
              <b>{content.syncValue}</b>
            </div>
          </div>
          <div className="win-tile flex-1">
            <div className="spark h-[110px]">
              {SPARK_HEIGHTS.map((height) => (
                <i className={height} key={height} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GraphVisual({ content }: { content: Visuals["graph"] }) {
  const track = "h-[6px] rounded-[3px] bg-[#EEF2FA]";
  const bar = "h-full rounded-[3px] bg-[linear-gradient(90deg,#2F57F5,#3F6A93)]";
  const row = "mock-row flex-col items-stretch gap-[8px]";
  return (
    <div className="mock w-full">
      <div className="mock-bar">
        <b className="truncate">{content.title}</b>
        <span className="badge badge-graphite">{content.badge}</span>
      </div>
      <div className="mock-body">
        <div className={row}>
          <div className="row between">
            <span>{content.groundedness}</span>
            <b>{content.sample}</b>
          </div>
          <div className={track}>
            <div className={cx(bar, "w-[94%]")} />
          </div>
        </div>
        <div className={row}>
          <div className="row between">
            <span>{content.relevance}</span>
            <b>{content.sample}</b>
          </div>
          <div className={track}>
            <div className={cx(bar, "w-[91%]")} />
          </div>
        </div>
        <div className={row}>
          <div className="row between">
            <span>{content.guardrails}</span>
            <b>{content.sample}</b>
          </div>
          <div className={track}>
            <div className="w-[2%] h-full rounded-[3px] bg-[#128A5C]" />
          </div>
        </div>
        <div className="grid-2 [--gap:10px]">
          <div className="mock-kpi">
            <span>{content.latency}</span>
            <b>{content.sample}</b>
          </div>
          <div className="mock-kpi">
            <span>{content.cost}</span>
            <b>{content.sample}</b>
          </div>
        </div>
      </div>
    </div>
  );
}

const PIPELINE_DOT = { done: "dot-m", active: "dot-b", queued: undefined } as const;

function PipelineVisual({ steps }: { steps: Visuals["pipeline"] }) {
  return (
    <div className="stack gap-3 w-full">
      {steps.map((step, index) => (
        <div className="glass-dark row between gap-3 p-[16px_18px] rounded-[16px]" key={step.title}>
          <span className="row gap-3 min-w-[0]">
            <span className="idx">{String(index + 1).padStart(2, "0")}</span>
            <b className="font-[500]">{step.title}</b>
          </span>
          <span className="row gap-2 flex-none">
            <span className="t-xs">{step.note}</span>
            <span className={cx("dot", PIPELINE_DOT[step.state])} />
          </span>
        </div>
      ))}
    </div>
  );
}

function TeamVisual({ content }: { content: Visuals["team"] }) {
  return (
    <div className="grid-3 [--gap:12px] w-full">
      {content.roles.map((role, index) => (
        <div
          className="glass stack gap-3 p-[16px] rounded-[18px] items-start"
          key={`${role}-${index}`}
        >
          <span className="ph w-[52px] h-[52px] rounded-[16px] p-[0]" />
          <b className="text-[14px]">{role}</b>
          <span className="t-xs">{content.note}</span>
        </div>
      ))}
    </div>
  );
}

/** One hero illustration per page, chosen by slug in catalog.ts. All are labelled illustrative. */
export function ServiceHeroVisual({
  visual,
  content,
}: {
  visual: ServiceVisual;
  content: Visuals;
}) {
  switch (visual) {
    case "code":
      return <CodeVisual content={content.code} />;
    case "arch":
      return <ArchVisual layers={content.arch} />;
    case "device":
      return <DeviceVisual content={content.device} />;
    case "desktop":
      return <DesktopVisual content={content.desktop} />;
    case "graph":
      return <GraphVisual content={content.graph} />;
    case "pipeline":
      return <PipelineVisual steps={content.pipeline} />;
    case "team":
      return <TeamVisual content={content.team} />;
  }
}
