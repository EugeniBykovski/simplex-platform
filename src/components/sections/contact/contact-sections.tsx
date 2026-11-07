import { SeoBreadcrumbs } from "@/components/seo/seo-breadcrumbs";
import { AnchorButton, LinkButton } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { ArrowLink, RouteLink, TextLink } from "@/components/ui/links";
import { SxMark } from "@/components/ui/logo";
import type { ContactCopy } from "@/content/contact";

/** The left column of Contact.dc.html, without the placeholder email address (GAP-C08). */
export function ContactIntro({ content }: { content: ContactCopy }) {
  const { hero, next, careers, breadcrumb } = content;
  return (
    <div className="stack gap-8">
      <div className="stack gap-6">
        <SeoBreadcrumbs
          path="/contact"
          label={breadcrumb.label}
          items={[{ label: breadcrumb.home, href: "/" }, { label: breadcrumb.current }]}
        />
        <h1 className="t-h1 [&:lang(ru)]:hyphens-auto">
          <span className="block pb-[.06em]">{hero.lines[0]} </span>
          <span className="block pb-[.06em] t-grad">{hero.lines[1]}</span>
        </h1>
        <p className="t-lead">{hero.lead}</p>
      </div>
      <div className="stack gap-4">
        <h2 className="t-mono text-text-3 font-normal">{next.title}</h2>
        <ol className="stack gap-3">
          {next.steps.map((step, position) => (
            <li
              className="glass row gap-4 p-[18px_20px] rounded-[18px] items-start"
              key={step.title}
            >
              <span className="idx pt-[3px]">{String(position + 1).padStart(2, "0")}</span>
              <span className="stack gap-1">
                <b>{step.title}</b>
                <span className="t-small">{step.body}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
      <p className="t-small">
        {careers.before} <TextLink href="/careers">{careers.link}</TextLink>
      </p>
    </div>
  );
}

/**
 * The scheduler's composition with no fake calendar (GAP-F01). No slots, no booking state: there is
 * nothing real to show until a calendar provider is chosen.
 */
export function ContactScheduler({ content }: { content: ContactCopy["scheduler"] }) {
  return (
    <section className="paper section" aria-labelledby="book">
      <div className="wrap grid grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-[32px] items-center sx-1000:grid-cols-[minmax(0,1fr)]">
        <div className="stack gap-5">
          <span className="gx-tag">{content.tag}</span>
          <h2 className="t-h1 [&:lang(ru)]:hyphens-auto" id="book">
            {content.title}
          </h2>
          <p className="t-lead">{content.lead}</p>
          <ul className="checks">
            {content.points.map((point) => (
              <li key={point}>
                <Icon name="check" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="gx-panel stack gap-5 p-[28px]">
          <span className="gx-label">{content.panel.label}</span>
          <h3 className="t-h4">{content.panel.title}</h3>
          <p className="t-body">{content.panel.body}</p>
          <AnchorButton href="#contact-form" size="lg" arrow className="w-full">
            {content.panel.action}
          </AnchorButton>
        </div>
      </div>
    </section>
  );
}

export type ThankYouState = "confirmed" | "demo" | "neutral";

export function ThankYouHero({
  content,
  state,
}: {
  content: ContactCopy["thankYou"];
  state: ThankYouState;
}) {
  const words = content[state];
  return (
    <section className="bg-horizon is-live p-[240px_0_200px] overflow-hidden">
      <div className="wrap stack gap-7 items-center text-center">
        <SxMark live className="[--m:80px] [filter:drop-shadow(0_24px_30px_rgba(7,11,43,.25))]" />
        <h1 className="t-display max-w-[1000px] [&:lang(ru)]:hyphens-auto">
          <span className="block pb-[.06em]">{words.lines[0]} </span>
          <span className="block pb-[.06em] t-grad">{words.lines[1]}</span>
        </h1>
        <p className="t-lead max-w-[600px]">{words.lead}</p>
        {state === "confirmed" ? (
          <div className="grid-3 [--gap:12px] w-full max-w-[980px] mt-[24px] text-left">
            {content.confirmed.steps.map((step) => (
              <div className="glass p-[22px] rounded-[20px]" key={step.label}>
                <span className="idx">{step.label}</span>
                <p className="mt-[10px] font-medium">{step.title}</p>
              </div>
            ))}
          </div>
        ) : null}
        {state === "neutral" ? (
          <LinkButton href="/contact" size="lg" arrow>
            {content.neutral.action}
          </LinkButton>
        ) : null}
      </div>
    </section>
  );
}

export function ThankYouMore({ content }: { content: ContactCopy["thankYou"]["more"] }) {
  return (
    <section className="section-sm">
      <div className="wrap stack gap-6">
        <h2 className="t-h3">{content.title}</h2>
        <div className="grid-3 [--gap:16px]">
          {content.cards.map((card) => (
            <RouteLink
              href={card.href}
              className="solid card-hover stack gap-4 p-[28px] min-h-[200px] justify-between"
              key={card.href}
            >
              <Icon name={card.icon} className="text-[#2F57F5] [--icon:36px]" />
              <span className="stack gap-1">
                <b className="t-h5">{card.title}</b>
                <span className="t-small">{card.body}</span>
              </span>
            </RouteLink>
          ))}
        </div>
        <ArrowLink href="/" className="self-start">
          {content.home}
        </ArrowLink>
      </div>
    </section>
  );
}
