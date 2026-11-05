import { Accordion } from "@/components/ui/controls";
import type { AgentContent } from "@/content/agent";

export function AgentFaq({ content }: { content: AgentContent["faq"] }) {
  return (
    <section className="section" aria-labelledby="faq">
      <div className="wrap split">
        <div className="stack gap-5">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="t-h2" id="faq">
            {content.title}
          </h2>
        </div>
        <div>
          {content.items.map((item, index) => (
            <Accordion key={item.question} summary={item.question} defaultOpen={index === 0}>
              {item.answer}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
