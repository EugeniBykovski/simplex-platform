"use client";

import { useEffect } from "react";

const SURFACES = ".card-hover, .glass, .glass-dark, .lg, .lg-dark";
const MAX_TILT = 4;

/**
 * Same-page links glide to their target. Only links: keyboard focus, find-in-page and the skip link
 * stay instant, as a page-wide smooth scroll would delay them. Off under reduced motion.
 */
function useSmoothAnchors() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || reduce.matches) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      const id = link ? decodeURIComponent(link.getAttribute("href")?.slice(1) ?? "") : "";
      if (!id || id === "main-content") return;
      const target = document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", `#${id}`);
      if (target.tabIndex >= 0) target.focus({ preventScroll: true });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}

/**
 * Effects added at the owner's request in SF-156 (GAP-D42). Pointer-led depth for cards and glass
 * only writes CSS custom properties; the look lives in components.css. Off for touch, coarse pointers
 * and reduced motion. One listener for the page, at most one write a frame.
 */
export function SiteEffects() {
  useSmoothAnchors();
  useEffect(() => {
    const capable = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    let current: HTMLElement | null = null;
    let frame = 0;
    let last: PointerEvent | null = null;

    const reset = (element: HTMLElement) => {
      element.style.removeProperty("--fx-rx");
      element.style.removeProperty("--fx-ry");
    };

    const apply = () => {
      frame = 0;
      if (!last) return;
      const target = (last.target as Element | null)?.closest<HTMLElement>(SURFACES) ?? null;
      if (current && current !== target) reset(current);
      current = target;
      if (!target) return;
      const box = target.getBoundingClientRect();
      const x = (last.clientX - box.left) / box.width;
      const y = (last.clientY - box.top) / box.height;
      target.style.setProperty("--fx-mx", `${(x * 100).toFixed(1)}%`);
      target.style.setProperty("--fx-my", `${(y * 100).toFixed(1)}%`);
      if (target.classList.contains("card-hover")) {
        target.style.setProperty("--fx-rx", `${((0.5 - y) * MAX_TILT).toFixed(2)}deg`);
        target.style.setProperty("--fx-ry", `${((x - 0.5) * MAX_TILT).toFixed(2)}deg`);
      }
    };

    const onMove = (event: PointerEvent) => {
      last = event;
      if (!frame) frame = requestAnimationFrame(apply);
    };
    const onLeave = () => {
      if (current) reset(current);
      current = null;
    };

    const start = () => {
      document.addEventListener("pointermove", onMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onLeave);
    };
    const stop = () => {
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
      onLeave();
    };
    const sync = () => (capable.matches ? start() : stop());

    sync();
    capable.addEventListener("change", sync);
    return () => {
      capable.removeEventListener("change", sync);
      stop();
    };
  }, []);

  return null;
}
