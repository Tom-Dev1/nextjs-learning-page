"use client";

import { useState, useEffect, useRef } from "react";

/**
 * Hook đếm số từ 0 đến end với duration (ms).
 * Hỗ trợ reduced motion: nhảy thẳng đến end.
 */
export function useCountUp(
  end: number,
  duration: number,
  enabled: boolean,
  options?: { suffix?: string; prefix?: string; decimals?: number }
) {
  const [value, setValue] = useState(0);
  const startTime = useRef<number | null>(null);
  const raf = useRef<ReturnType<typeof requestAnimationFrame> | null>(null);
  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (!enabled) return;
    if (prefersReducedMotion) {
      setValue(end);
      return;
    }
    startTime.current = null;
    const step: FrameRequestCallback = (timestamp) => {
      if (startTime.current === null) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - (1 - progress) ** 4;
      setValue(easeOutQuart * end);
      if (progress < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => {
      if (raf.current !== null) {
        cancelAnimationFrame(raf.current);
      }
    };
  }, [end, duration, enabled, prefersReducedMotion]);

  const decimals = options?.decimals ?? 0;
  const formatted =
    (options?.prefix ?? "") +
    (decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString()) +
    (options?.suffix ?? "");
  return formatted;
}
