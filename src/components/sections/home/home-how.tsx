import { Fragment } from "react";
import { LinkButton } from "@/components/ui/button";
import type { HomeContent } from "@/content/home";

export function HomeHow({ content }: { content: HomeContent["how"] }) {
  return (
    <section className="bg-ink bg-ink-left section" aria-labelledby="how">
      <div className="wrap split">
        <div className="sticky-col stack gap-6">
          <span className="tag self-start">{content.tag}</span>
          <h2 className="t-h1" id="how">
            {content.titleStart} <span className="t-tone">{content.titleTone}</span>
          </h2>
          <p className="t-lead max-w-[440px]">{content.lead}</p>
          <div className="chain" aria-hidden="true">
            {content.chain.map((stage, index) => (
              <Fragment key={stage}>
                {index > 0 ? <b /> : null}
                <span>{stage}</span>
              </Fragment>
            ))}
          </div>
          <LinkButton href="/how-we-work" variant="light" arrow className="self-start">
            {content.cta}
          </LinkButton>
        </div>
        <ol className="story relative">
          {/* A list item rather than the board's span, because a list may only contain items. */}
          <li className="story-rail" aria-hidden="true">
            <i />
          </li>
          {content.steps.map((step) => (
            <li className="story-step" key={step.n}>
              <span className="story-num">{step.n}</span>
              <div className="story-body glass-dark stack gap-5 p-[clamp(24px,3cqi,40px)]">
                <div className="stack gap-3">
                  <span className="t-mono text-[#9DB4CC]">{step.kicker}</span>
                  <h3 className="t-h3">{step.title}</h3>
                  <p className="t-body">{step.description}</p>
                </div>
                <div className="stack gap-2">
                  <span className="t-xs">{content.receive}</span>
                  <div className="wrap-row gap-2">
                    {step.out.map((item) => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
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
