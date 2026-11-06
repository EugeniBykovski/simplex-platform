import { Fragment } from "react";
import { LinkButton } from "@/components/ui/button";
import { Accordion, Breadcrumbs } from "@/components/ui/controls";
import { Tag } from "@/components/ui/feedback";
import { Icon } from "@/components/ui/icon";
import { ArrowLink } from "@/components/ui/links";
import type { HowWeWorkCopy } from "@/content/company";

const index = (position: number) => String(position + 1).padStart(2, "0");

function Checks({ items }: { items: readonly string[] }) {
  return (
    <ul className="checks">
      {items.map((item) => (
        <li key={item}>
          <Icon name="check" />
          {item}
        </li>
      ))}
    </ul>
  );
}

/** The sections of HowWeWork.dc.html, in its order. The headline has no reveal, for LCP. */
export function HowHero({ content }: { content: HowWeWorkCopy }) {
  const { hero, breadcrumb } = content;
  return (
    <section className="bg-ink p-[230px_0_140px] overflow-hidden" aria-labelledby="how-title">
      <div className="wrap stack gap-8">
        <Breadcrumbs
          label={breadcrumb.label}
          items={[{ label: breadcrumb.home, href: "/" }, { label: breadcrumb.current }]}
        />
        <div className="split items-end">
          <h1 className="t-display [&:lang(ru)]:hyphens-auto" id="how-title">
            <span className="block pb-[.06em]">{hero.lines[0]} </span>
            <span className="block pb-[.06em] t-grad">{hero.lines[1]}</span>
          </h1>
          <p className="t-lead">{hero.lead}</p>
        </div>
        <div className="chain" aria-hidden="true">
          {hero.chain.map((stage, position) => (
            <Fragment key={stage}>
              {position > 0 ? <b /> : null}
              <span>{stage}</span>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowPrinciples({ content }: { content: HowWeWorkCopy["principles"] }) {
  return (
    <section className="bg-mist section" aria-labelledby="pr">
      <div className="wrap stack gap-8">
        <div className="split items-end">
          <div className="stack gap-5">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 className="t-h2" id="pr">
              {content.title}
            </h2>
          </div>
          <p className="t-lead">{content.lead}</p>
        </div>
        <div className="grid-4 [--gap:16px]">
          {content.items.map((item, position) => (
            <article
              className="glass reveal p-[32px] min-h-[340px] flex flex-col justify-between gap-[28px]"
              key={item.title}
            >
              <span className="t-h1 t-grad text-[64px]">{index(position)}</span>
              <div className="stack gap-3">
                <h3 className="t-h4 [&:lang(ru)]:hyphens-auto">{item.title}</h3>
                <p className="t-small">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/** The rail grows with scroll through a CSS timeline, so there is no scroll handler or trap. */
export function HowMethod({ content }: { content: HowWeWorkCopy["method"] }) {
  return (
    <section className="bg-ink section" aria-labelledby="meth">
      <div className="wrap split">
        <div className="sticky-col stack gap-6">
          <Tag className="self-start">{content.tag}</Tag>
          <h2 className="t-h1" id="meth">
            {content.titleStart} <span className="t-tone">{content.titleEnd}</span>
          </h2>
          <p className="t-lead">{content.lead}</p>
          <LinkButton href="/contact" variant="light" arrow className="self-start">
            {content.action}
          </LinkButton>
        </div>
        <ol className="story relative">
          <li className="story-rail" aria-hidden="true">
            <i />
          </li>
          {content.stages.map((stage, position) => (
            <li className="story-step" key={stage.title}>
              <span className="story-num">{index(position)}</span>
              <div className="story-body glass-dark stack gap-4 p-[clamp(22px,2.6cqi,36px)]">
                <div className="stack gap-2">
                  <h3 className="t-h3 [&:lang(ru)]:hyphens-auto">{stage.title}</h3>
                  <p className="t-body">{stage.body}</p>
                </div>
                <div className="grid-2 [--gap:16px]">
                  <div className="stack gap-2">
                    <span className="t-xs">{content.durationLabel}</span>
                    <span>{stage.duration}</span>
                  </div>
                  <div className="stack gap-2">
                    <span className="t-xs">{content.outputLabel}</span>
                    <span>{stage.output}</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function HowRhythm({ content }: { content: HowWeWorkCopy["rhythm"] }) {
  return (
    <section className="section" aria-labelledby="rh">
      <div className="wrap split">
        <div className="stack gap-5 sticky-col">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="t-h2" id="rh">
            {content.title}
          </h2>
          <p className="t-body">{content.body}</p>
        </div>
        <div className="stack">
          {content.items.map((item) => (
            <div
              className="grid-12 reveal [--gap:0_24px] p-[26px_0] border-t border-t-[var(--line-2)] items-baseline"
              key={item.when}
            >
              <span className="t-mono col-span-3 text-text-3 [&:lang(ru)]:hyphens-auto">
                {item.when}
              </span>
              <span className="t-h5 col-span-4 [overflow-wrap:anywhere] [&:lang(ru)]:hyphens-auto">
                {item.title}
              </span>
              <span className="t-small col-span-5">{item.body}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const BURN_UP = [
  "h-[20%]",
  "h-[28%]",
  "h-[37%]",
  "h-[45%]",
  "h-[52%]",
  "h-[61%]",
  "h-[70%]",
  "h-[76%]",
] as const;

export function HowTransparency({ content }: { content: HowWeWorkCopy["transparency"] }) {
  const { mock } = content;
  return (
    <section className="bg-mist section" aria-labelledby="vis">
      <div className="wrap split-even items-center">
        <div className="stack gap-6">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="t-h2" id="vis">
            {content.title}
          </h2>
          <Checks items={content.checks} />
        </div>
        <div className="glass p-[22px] rounded-[28px]">
          <div className="mock [box-shadow:none]" aria-hidden="true">
            <div className="mock-bar">
              <b className="truncate">{mock.title}</b>
              <span className="badge badge-graphite">{mock.badge}</span>
            </div>
            <div className="mock-body">
              <div className="grid-3 [--gap:10px]">
                {mock.kpis.map((kpi) => (
                  <div className="mock-kpi" key={kpi}>
                    <span>{kpi}</span>
                    <b>—</b>
                  </div>
                ))}
              </div>
              <div className="mock-kpi">
                <div className="row between">
                  <span>{mock.burnup}</span>
                  <span className="t-xs">{mock.illustrative}</span>
                </div>
                <div className="bars mt-[12px]">
                  {BURN_UP.map((height) => (
                    <i className={height} key={height} />
                  ))}
                </div>
              </div>
              <div className="mock-row">
                <span className="dot dot-o" />
                <span className="flex-1 min-w-[0]">{mock.risk}</span>
                <span className="badge">{mock.riskBadge}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SPARK = [
  "h-[18%]",
  "h-[26%]",
  "h-[35%]",
  "h-[44%]",
  "h-[52%]",
  "h-[63%]",
  "h-[70%]",
  "h-[81%]",
  "h-[86%]",
] as const;

export function HowReport({ content }: { content: HowWeWorkCopy["report"] }) {
  const { mock } = content;
  return (
    <section className="bg-mist section" aria-labelledby="rep">
      <div className="wrap grid grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-[32px] items-center sx-1000:grid-cols-[minmax(0,1fr)]">
        <div className="stack gap-5">
          <span className="gx-tag">{content.tag}</span>
          <h2 className="t-h1 [&:lang(ru)]:hyphens-auto" id="rep">
            {content.title}
          </h2>
          <p className="t-lead">{content.lead}</p>
          <Checks items={content.checks} />
        </div>
        <div className="gx-dark stack gap-4 p-[28px]" aria-hidden="true">
          <div className="row between gap-3">
            <span className="stack min-w-[0]">
              <span className="gx-label">{mock.label}</span>
              <b className="text-[20px]">{mock.title}</b>
            </span>
            <span className="badge-new">{mock.badge}</span>
          </div>
          <div className="grid-4 [--gap:10px]">
            {mock.tiles.map((tile) => (
              <div className="win-tile" key={tile}>
                <span className="t-xs">{tile}</span>
                <b>—</b>
              </div>
            ))}
          </div>
          <div className="win-tile">
            <span className="t-xs">{mock.burnup}</span>
            <div className="spark h-[90px] mt-[10px]">
              {SPARK.map((height) => (
                <i className={height} key={height} />
              ))}
            </div>
          </div>
          <div className="stack">
            <div className="gx-row">
              <span className="row gap-2">
                <span className="dot bg-[#F0A23B]" />
                {mock.risk}
              </span>
              <span className="t-xs flex-none">{mock.riskOwner}</span>
            </div>
            <div className="gx-row">
              <span className="row gap-2">
                <span className="dot dot-b" />
                {mock.decision}
              </span>
              <span className="t-xs flex-none">{mock.decisionStatus}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowFaq({ content }: { content: HowWeWorkCopy["faq"] }) {
  return (
    <section className="section" aria-labelledby="faq">
      <div className="wrap split">
        <div className="stack gap-5">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="t-h2" id="faq">
            {content.title}
          </h2>
          <ArrowLink href="/contact" className="self-start">
            {content.action}
          </ArrowLink>
        </div>
        <div>
          {content.items.map((item, position) => (
            <Accordion key={item.question} summary={item.question} defaultOpen={position === 0}>
              {item.answer}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowCta({ content }: { content: HowWeWorkCopy["cta"] }) {
  return (
    <section className="bg-cta dark p-[140px_0]" aria-labelledby="how-cta">
      <div className="wrap split items-end">
        <h2 className="t-h1 [&:lang(ru)]:hyphens-auto" id="how-cta">
          {content.title}
        </h2>
        <div className="stack gap-5">
          <p className="t-lead">{content.lead}</p>
          <div className="wrap-row gap-3">
            <LinkButton href="/contact" size="lg" arrow>
              {content.primary}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
