"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/icon";

/** The design's copy control, with its 1.8-second confirmation. */
export function ArticleCopyButton({ label, copied }: { label: string; copied: string }) {
  const [done, setDone] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <>
      <button
        className="btn-icon"
        type="button"
        aria-label={done ? copied : label}
        onClick={async () => {
          await navigator.clipboard.writeText(window.location.href);
          setDone(true);
          clearTimeout(timer.current);
          timer.current = setTimeout(() => setDone(false), 1800);
        }}
      >
        <Icon name={done ? "check" : "link"} size="md" />
      </button>
      {done ? (
        <span className="t-xs" role="status">
          {copied}
        </span>
      ) : null}
    </>
  );
}
