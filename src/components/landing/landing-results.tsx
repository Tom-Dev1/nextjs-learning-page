"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CASE_STUDIES } from "@/lib/constants";
import { useCountUp } from "@/hooks/use-count-up";

function ResultCard({
  title,
  before,
  after,
  unit,
  suffix,
  label,
}: {
  title: string;
  before: number;
  after: number;
  unit?: string;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const afterFormatted = useCountUp(after, 1500, inView, {
    suffix: suffix ?? unit ?? "",
    decimals: unit === "x" ? 1 : 0,
  });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl border border-border bg-card p-6 shadow-sm"
    >
      <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      <p className="mt-2 flex items-baseline gap-1">
        {before > 0 && (
          <span className="text-2xl text-muted-foreground line-through">
            {before}
            {unit ?? suffix ?? ""}
          </span>
        )}
        <span className="text-3xl font-bold text-foreground">
          {afterFormatted}
        </span>

      </p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </motion.article>
  );
}

export function LandingResults() {
  return (
    <section
      id="ket-qua"
      aria-labelledby="results-title"
      className="py-16 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          id="results-title"
          className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Kết quả học viên
        </motion.h2>


        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {CASE_STUDIES.map((c) => (
            <ResultCard
              key={c.title}
              title={c.title}
              before={c.before}
              after={c.after}
              unit={"unit" in c ? c.unit : undefined}
              suffix={"suffix" in c ? c.suffix : undefined}
              label={c.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
