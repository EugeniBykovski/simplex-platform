import { LinkButton } from "@/components/ui/button";
import { Accordion } from "@/components/ui/controls";
import { cx } from "@/components/ui/cx";
import { Tag } from "@/components/ui/feedback";
import { Icon } from "@/components/ui/icon";
import { ArrowLink } from "@/components/ui/links";
import type { TelegramCopy } from "@/content/services/telegram";

/**
 * The Telegram service's own sections, added in SF-157 with no design board (GAP-D43). Built only
 * from the site's existing classes, so it reads as part of the service template.
 */
export function TelegramPlatforms({ content }: { content: TelegramCopy["platforms"] }) {
  return (
    <section className="bg-mist section" aria-labelledby="tg-platforms">
      <div className="wrap stack gap-8">
        <div className="split [align-items:end]">
          <div className="stack gap-5">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 className="t-h2" id="tg-platforms">
              {content.title}
            </h2>
          </div>
          <p className="t-lead">{content.lead}</p>
        </div>
        <ul className="grid-3 [--gap:16px]">
          {content.items.map((item) => (
            <li className="glass stack gap-4 p-[28px] rounded-[24px]" key={item.name}>
              <Tag
                className={cx(
                  "self-start",
                  item.status === "official" && "border-[var(--signal)] text-[var(--signal)]",
                )}
              >
                {content.status[item.status]}
              </Tag>
              <h3 className="t-h4">{item.name}</h3>
              <p className="t-small">{item.body}</p>
            </li>
          ))}
        </ul>
        <p className="t-small max-w-[860px]">{content.note}</p>
      </div>
    </section>
  );
}

export function TelegramAiIntegrations({
  ai,
  integrations,
}: {
  ai: TelegramCopy["ai"];
  integrations: TelegramCopy["integrations"];
}) {
  return (
    <section className="section" aria-labelledby="tg-ai">
      <div className="wrap split items-start">
        <div className="stack gap-5">
          <p className="eyebrow">{ai.eyebrow}</p>
          <h2 className="t-h2" id="tg-ai">
            {ai.title}
          </h2>
          <p className="t-lead">{ai.body}</p>
          <ul className="checks">
            {ai.points.map((point) => (
              <li key={point}>
                <Icon name="check" />
                {point}
              </li>
            ))}
          </ul>
          <ArrowLink href="/services/ai-engineering" className="self-start">
            {ai.link}
          </ArrowLink>
        </div>
        <div className="paper-card stack gap-5 p-[32px]">
          <p className="eyebrow">{integrations.eyebrow}</p>
          <h3 className="t-h3">{integrations.title}</h3>
          <ul className="wrap-row gap-2">
            {integrations.items.map((item) => (
              <li
                className="chip h-auto min-h-[32px] py-[6px] whitespace-normal max-w-full"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="t-small">{integrations.note}</p>
        </div>
      </div>
    </section>
  );
}

export function TelegramSecurityFaq({
  security,
  faq,
  cta,
}: {
  security: TelegramCopy["security"];
  faq: TelegramCopy["faq"];
  cta: string;
}) {
  return (
    <section className="bg-ink dark section" aria-labelledby="tg-faq">
      <div className="wrap split items-start">
        <div className="stack gap-5">
          <p className="eyebrow">{security.eyebrow}</p>
          <h2 className="t-h2">{security.title}</h2>
          <ul className="checks">
            {security.points.map((point) => (
              <li key={point}>
                <Icon name="check" />
                {point}
              </li>
            ))}
          </ul>
          <LinkButton href="/contact?service=telegram-bots" variant="light" arrow>
            {cta}
          </LinkButton>
        </div>
        <div className="stack gap-5">
          <p className="eyebrow">{faq.eyebrow}</p>
          <h2 className="t-h3" id="tg-faq">
            {faq.title}
          </h2>
          <div className="stack">
            {faq.items.map((item, index) => (
              <Accordion key={item.q} summary={item.q} defaultOpen={index === 0}>
                {item.a}
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
