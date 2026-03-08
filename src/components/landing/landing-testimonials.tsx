"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function LandingTestimonials() {
  const [index, setIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const count = TESTIMONIALS.length;

  const go = (dir: "prev" | "next") => {
    setIndex((i) => (dir === "prev" ? (i - 1 + count) % count : (i + 1) % count));
  };

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="py-16 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          id="testimonials-title"
          className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Học viên nói gì
        </motion.h2>
        <motion.p
          className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Phản hồi minh họa từ học viên.
        </motion.p>

        <div className="relative mt-12 min-h-[260px]" ref={scrollRef}>
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="relative min-h-[240px]">
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={t.id}
                  initial={false}
                  animate={{
                    opacity: i === index ? 1 : 0,
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    pointerEvents: i === index ? "auto" : "none",
                  }}
                  transition={{ duration: 0.25 }}
                  className="p-6 sm:p-8"
                >
                  <div className="flex gap-1 text-amber-400" aria-hidden>
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-foreground">
                    <p className="text-lg leading-relaxed">&ldquo;{t.content}&rdquo;</p>
                  </blockquote>
                  <footer className="mt-4 text-sm text-muted-foreground">
                    — {t.name}, {t.role}
                  </footer>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go("prev")}
              aria-label="Xem phản hồi trước"
              className="rounded-full border border-border bg-background p-2 text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Phản hồi ${i + 1}`}
                  aria-current={i === index ? "true" : undefined}
                  className={cn(
                    "h-2 w-2 rounded-full transition-colors",
                    i === index ? "bg-primary w-6" : "bg-muted-foreground/40"
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go("next")}
              aria-label="Xem phản hồi tiếp"
              className="rounded-full border border-border bg-background p-2 text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
