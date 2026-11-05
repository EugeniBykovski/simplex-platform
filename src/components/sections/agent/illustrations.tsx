import { cx } from "@/components/ui/cx";
import { DemoTag } from "@/components/ui/feedback";
import { Icon } from "@/components/ui/icon";
import { SxMark } from "@/components/ui/logo";
import type { AgentContent } from "@/content/agent";

/**
 * The hero's agent window. It is a labelled illustration: nothing in it is live, and its text
 * reaches screen readers through the figure's name, which says so. The two small widgets hide at
 * 860 px and below, where the board lets them cover the window (GAP-D15).
 */
export function AgentSessionMock({ content }: { content: AgentContent["hero"]["mock"] }) {
  return (
    <figure className="widget-stack min-h-[560px] sx-860:min-h-[0]" aria-label={content.label}>
      <div className="widget widget-dark agent-shell p-[0] max-w-[540px] ml-auto">
        <div className="row between gap-3 p-[16px_20px] border-b border-[rgba(255,255,255,.1)]">
          <span className="row gap-3 min-w-[0]">
            <SxMark className="[--m:30px]" />
            <b className="text-[14px] whitespace-nowrap">{content.name}</b>
            <span className="t-xs font-mono truncate sx-600:hidden">{content.repository}</span>
          </span>
          <DemoTag>{content.status}</DemoTag>
        </div>
        <div className="stack gap-4 p-[20px]">
          <div className="agent-line">
            <span className="who bg-[rgba(255,255,255,.12)]">{content.you}</span>
            <span className="opacity-[.9]">{content.request}</span>
          </div>
          <div className="agent-line">
            <span className="who bg-[linear-gradient(140deg,#3B8CFF,#2F57F5)]">{content.ai}</span>
            <span className="opacity-[.9]">
              {content.answerStart}
              <b>{content.answerStack}</b>
              {content.answerEnd}
            </span>
          </div>
          <div className="stack gap-2">
            {content.steps.map((step) => (
              <div className={cx("agent-step", step.running && "run")} key={step.text}>
                <span className="ok">
                  {step.running ? (
                    <span className="spinner w-[12px] h-[12px] border-[1.5px]" />
                  ) : (
                    <Icon name="check" />
                  )}
                </span>
                {step.text}
                <span className="t-xs ml-auto font-mono">{step.state}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="widget float-w w-[160px] h-[170px] left-[0] top-[10px] flex flex-col justify-between sx-860:hidden"
        aria-hidden="true"
      >
        <span className="w-head">
          <span className="w-app t">
            <Icon name="check" />
          </span>
          {content.testsTitle}
        </span>
        <div className="ring [--p:100] [--c:#0C2A45]">
          <b>
            <Icon name="check" />
          </b>
        </div>
        <span className="w-sub">{content.testsNote}</span>
      </div>
      <div
        className="widget float-w w-[160px] h-[170px] left-[0] bottom-[20px] flex flex-col justify-between sx-860:hidden"
        aria-hidden="true"
      >
        <span className="w-head">
          <span className="w-app">
            <Icon name="custom" />
          </span>
          {content.stackTitle}
        </span>
        <span className="stack gap-1 text-[13px] font-[500]">
          {content.stackItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </span>
        <span className="w-sub">{content.stackNote}</span>
      </div>
    </figure>
  );
}

const SPARK_HEIGHTS = [
  "h-[30%]",
  "h-[45%]",
  "h-[38%]",
  "h-[60%]",
  "h-[52%]",
  "h-[74%]",
  "h-[66%]",
  "h-[88%]",
  "h-[80%]",
  "h-[95%]",
] as const;

/** Decoration only. The bars carry no data. */
export function SparkBars() {
  return (
    <div className="spark" aria-hidden="true">
      {SPARK_HEIGHTS.map((height) => (
        <i className={height} key={height} />
      ))}
    </div>
  );
}

const CHART_HEIGHTS = ["h-[30%]", "h-[52%]", "h-[44%]", "h-[70%]", "h-[62%]", "h-[84%]"] as const;

/**
 * A conceptual mock-up of the agent inside a customer's product. The side panel stacks under the
 * chart at 600 px and below, where the board's fixed 220 px column would leave the chart no room.
 */
export function EmbedMock({ content }: { content: AgentContent["embed"]["mock"] }) {
  return (
    <div className="mock w-full max-w-[520px]" aria-hidden="true">
      <div className="mock-bar">
        <b>{content.bar}</b>
        <span className="t-xs">{content.view}</span>
      </div>
      <div className="grid grid-cols-[minmax(0,1fr)_220px] sx-600:grid-cols-[minmax(0,1fr)]">
        <div className="mock-body">
          <div className="mock-line w-[40%] h-[12px] bg-[#070B2B]" />
          <div className="grid-2 [--gap:8px]">
            <div className="mock-kpi h-[80px]" />
            <div className="mock-kpi h-[80px]" />
          </div>
          <div className="bars">
            {CHART_HEIGHTS.map((height) => (
              <i className={height} key={height} />
            ))}
          </div>
        </div>
        <div className="border-l border-line bg-[rgba(244,246,251,.9)] p-[14px] grid gap-[10px] content-start sx-600:border-l-0 sx-600:border-t">
          <span className="row gap-2 text-[12px] font-[600]">
            <span className="w-app w-[18px] h-[18px] rounded-[6px]">
              <Icon name="ai" className="[--icon:11px]" />
            </span>
            {content.assistant}
          </span>
          <div className="text-[12px] p-[8px_10px] rounded-[12px] bg-white border border-line">
            {content.question}
          </div>
          <div className="text-[12px] p-[8px_10px] rounded-[12px] bg-[#E8EEFF] text-[#1E3FBF]">
            {content.answer}
          </div>
          <div className="min-h-[32px] rounded-[10px] bg-[#070B2B] text-white text-[11.5px] grid place-items-center p-[4px_8px] text-center">
            {content.action}
          </div>
        </div>
      </div>
    </div>
  );
}
