"use client";

import { motion } from "framer-motion";
import { PROBLEMS, SOLUTIONS } from "@/lib/constants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function LandingProblemSolution() {
  return (
    <section
      id="loi-ich"
      aria-labelledby="problem-solution-title"
      className="border-t border-border bg-muted/30 py-16 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          id="problem-solution-title"
          className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Bạn đang gặp khó?
        </motion.h2>
        <motion.p
          className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Những vấn đề phổ biến — và cách khóa học giúp bạn giải quyết.
        </motion.p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <motion.div
            className="space-y-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-foreground">Vấn đề</h3>
            <ul className="space-y-3">
              {PROBLEMS.map((p, i) => (
                <motion.li
                  key={p.title}
                  variants={item}
                  className="flex gap-3 rounded-lg border border-border bg-card p-4"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-sm font-medium text-destructive">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-medium text-foreground">{p.title}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="space-y-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-foreground">Giải pháp từ khóa học</h3>
            <ul className="space-y-3">
              {SOLUTIONS.map((s, i) => (
                <motion.li
                  key={s.title}
                  variants={item}
                  className="flex gap-3 rounded-lg border border-border bg-card p-4"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-medium text-foreground">{s.title}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
