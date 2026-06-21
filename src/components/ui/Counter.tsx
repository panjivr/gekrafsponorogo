"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

/**
 * Count-up animation that runs once when scrolled into view.
 * Renders a pre-formatted `display` value at rest; animates toward `value`.
 */
export default function Counter({
  value,
  display,
  suffix = "",
}: {
  value: number;
  display: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setN(value);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // easeOutExpo for a snappy, decelerating count
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setN(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);

  // Format like the canonical display (e.g. 26000 -> "26K").
  const formatted =
    value >= 1000 ? `${Math.round(n / 1000)}K` : `${n}`;

  return (
    <span ref={ref} className="font-stat tabular-nums">
      {inView ? formatted : display}
      {suffix}
    </span>
  );
}
