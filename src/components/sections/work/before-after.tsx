"use client";

import { useRef, type ReactNode } from "react";

/**
 * The design's drag-to-compare block. The position is a runtime value, so it is set on the element
 * rather than in a class. Both panes arrive server-rendered, and a native range input gives keyboard
 * support. At 600 and below the panes stack and the source's own rule hides the input.
 */
export function BeforeAfter({ label, children }: { label: string; children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  return (
    <div
      className="ba [--cut:50%] [&:lang(ru)]:sx-860:h-[580px] [&:lang(ru)]:sx-600:h-auto"
      ref={root}
    >
      {children}
      <input
        className="peer"
        type="range"
        min={8}
        max={92}
        defaultValue={50}
        aria-label={label}
        onInput={(event) => {
          root.current?.style.setProperty("--cut", `${event.currentTarget.value}%`);
        }}
      />
      <span className="ba-handle after:outline-offset-[2px] peer-focus-visible:after:outline-[3px] peer-focus-visible:after:outline-[#2F57F5]" />
    </div>
  );
}
