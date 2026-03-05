"use client";

import { motion } from "framer-motion";
import {
  Target,
  FileText,
  TrendingUp,
  BarChart3,
  Users,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";
import { BENEFITS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  target: Target,
  fileText: FileText,
  trendingUp: TrendingUp,
  barChart: BarChart3,
  users: Users,
  refreshCw: RefreshCw,
};

export function LandingBenefits() {
  return (
    <section
      id="benefits-section"
      aria-labelledby="benefits-title"
      className="py-16 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          id="benefits-title"
          className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Lợi ích khi học
        </motion.h2>
        <motion.p
          className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Nội dung thực chiến, có hệ thống, áp dụng ngay vào công việc.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => {
            const Icon = icons[b.icon] ?? Target;
            return (
              <motion.article
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className={cn(
                  "group rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md hover:shadow-primary/5"
                )}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
