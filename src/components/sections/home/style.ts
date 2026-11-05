import type { CSSProperties } from "react";

/** Inline style with custom properties, which the design uses heavily. */
export const vars = (style: Record<string, string | number>) => style as CSSProperties;
