import { ArrowLink } from "@/components/ui/links";
import { cx } from "@/components/ui/cx";
import type { ArticleBlock } from "@/content/insights";
import type { Locale } from "@/i18n/routing";

/** Dates are stored as approved, in UTC, so a build can never change them. */
export function formatDate(date: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale, { dateStyle: "long", timeZone: "UTC" }).format(
    new Date(`${date}T00:00:00Z`),
  );
}

/** Initials, as no author photograph has been approved. */
export function AuthorAvatar({ name, className }: { name: string; className?: string }) {
  const initials = name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
  return (
    <span className={cx("avatar", className)} aria-hidden="true">
      {initials}
    </span>
  );
}

/** Renders the controlled block set. There is no raw HTML path. */
export function ArticleBlocks({ blocks }: { blocks: readonly ArticleBlock[] }) {
  return blocks.map((block, position) => {
    const key = `${block.type}-${position}`;
    switch (block.type) {
      case "paragraph":
        return <p key={key}>{block.text}</p>;
      case "heading":
        return (
          <h2 className="scroll-mt-[100px]" id={block.id} key={key}>
            {block.text}
          </h2>
        );
      case "subheading":
        return <h3 key={key}>{block.text}</h3>;
      case "list":
        return (
          <ul key={key}>
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        );
      case "quote":
        return (
          <blockquote className="quote relative m-[40px_0] pl-[28px]" key={key}>
            <span
              className="absolute left-[0] top-[8px] bottom-[8px] w-[3px] [background:linear-gradient(180deg,#2F57F5,#3F6A93)] [transform:skewX(-8deg)]"
              aria-hidden="true"
            />
            {block.text}
          </blockquote>
        );
      case "code":
        return (
          <figure aria-label={block.label} key={key}>
            <pre
              className="font-mono text-[13.5px] leading-[1.75] bg-[#0C123C] text-[#BAC0DC] rounded-[18px] p-[22px_24px] overflow-x-auto m-[8px_0_28px]"
              tabIndex={0}
            >
              <code>{block.code}</code>
            </pre>
          </figure>
        );
      case "callout":
        return (
          <div className="paper-card stack gap-3 p-[28px] mt-[40px]" key={key}>
            <p className="t-mono text-text-3">{block.label}</p>
            <p className="t-h4 text-text">{block.text}</p>
            <ArrowLink href={block.link.href} className="self-start no-underline">
              {block.link.label}
            </ArrowLink>
          </div>
        );
    }
  });
}
