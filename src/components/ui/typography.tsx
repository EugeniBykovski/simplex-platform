import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "./cx";

/** Uppercase mono label with the design's cut marker. */
export function Eyebrow({ className, ...rest }: HTMLAttributes<HTMLParagraphElement>) {
  return <p {...rest} className={cx("eyebrow", className)} />;
}

export function GradientText({ children }: { children: ReactNode }) {
  return <span className="t-grad">{children}</span>;
}

type HeadingLevel = 1 | 2 | 3 | 4 | 5;
export type HeadingStyle = "display" | "h1" | "h2" | "h3" | "h4" | "h5";

/** Keeps the semantic level independent of the visual size, as the design often needs. */
export function Heading({
  level,
  look,
  className,
  ...rest
}: HTMLAttributes<HTMLHeadingElement> & { level: HeadingLevel; look: HeadingStyle }) {
  const Tag = `h${level}` as const;
  return <Tag {...rest} className={cx(`t-${look}`, className)} />;
}

/**
 * A headline whose lines slide up from a mask on load. Each line must read as part of one phrase,
 * so a space is kept between them for screen readers and search engines.
 */
export function MaskedHeading({
  level = 1,
  look = "display",
  lines,
  className,
  ...rest
}: HTMLAttributes<HTMLHeadingElement> & {
  level?: HeadingLevel;
  look?: HeadingStyle;
  lines: readonly { text: string; gradient?: boolean }[];
}) {
  const Tag = `h${level}` as const;
  return (
    <Tag {...rest} className={cx(`t-${look}`, className)}>
      {lines.map(({ text, gradient }, index) => (
        <span className="line-mask" key={text}>
          <span className={gradient ? "t-grad" : undefined}>
            {text}
            {index < lines.length - 1 ? " " : null}
          </span>
        </span>
      ))}
    </Tag>
  );
}
