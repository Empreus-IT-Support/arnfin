"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

// useLayoutEffect on the client so the element is hidden before first paint
// (no flash), useEffect on the server to avoid the SSR warning.
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Fades content up as it scrolls into view.
 *
 * Markup renders visible by default and is only hidden once JS confirms it can
 * animate — so content is never trapped invisible if scripts fail or
 * IntersectionObserver is missing. Honours prefers-reduced-motion.
 *
 * Drives style directly on the node rather than through setState: this is an
 * external-system sync, and setState in an effect causes cascading renders.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") return;

    el.style.opacity = "0";
    el.style.transform = "translateY(14px)";
    el.style.transition = `opacity .6s ease ${delay}ms, transform .6s cubic-bezier(.22,.61,.36,1) ${delay}ms`;

    const reveal = () => {
      el.style.opacity = "1";
      el.style.transform = "none";
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          reveal();
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    io.observe(el);

    return () => io.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
