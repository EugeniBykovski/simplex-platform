"use client";

import { useRef, type KeyboardEvent, type ReactNode } from "react";

/**
 * The menu itself opens with CSS, on hover and focus-within, so it works with no JavaScript. This
 * adds what CSS cannot: Escape to dismiss, and an accurate aria-expanded on the trigger.
 */
export function MegaMenuItem({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLLIElement>(null);

  const setExpanded = (value: boolean) => {
    ref.current?.querySelector("[aria-haspopup]")?.setAttribute("aria-expanded", String(value));
  };
  const open = () => {
    delete ref.current?.dataset.dismissed;
    setExpanded(true);
  };
  const close = () => {
    delete ref.current?.dataset.dismissed;
    setExpanded(false);
  };
  const onKeyDown = (event: KeyboardEvent<HTMLLIElement>) => {
    if (event.key !== "Escape" || !ref.current) return;
    ref.current.dataset.dismissed = "true";
    setExpanded(false);
    ref.current.querySelector<HTMLElement>("[aria-haspopup]")?.focus();
  };

  return (
    <li
      ref={ref}
      className="nav-item"
      onMouseEnter={open}
      onMouseLeave={close}
      onFocus={() => {
        if (!ref.current?.dataset.dismissed) setExpanded(true);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) close();
      }}
      onKeyDown={onKeyDown}
    >
      {children}
    </li>
  );
}
