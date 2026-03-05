"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { INSTRUCTOR } from "@/lib/constants";
import { IS_DEMO_DATA } from "@/lib/constants";

export function LandingInstructor() {
  return (
    <section
      id="hoc-vien"
      aria-labelledby="instructor-title"
      className="border-t border-border bg-muted/20 py-16 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          id="instructor-title"
          className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Giảng viên
        </motion.h2>

        <motion.article
          className="mt-12 flex flex-col gap-8 rounded-2xl border border-border bg-card p-6 shadow-sm md:flex-row md:items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-xl bg-muted md:h-48 md:w-48">
            <Image
              src="https://placehold.co/200x200/6366f1/ffffff?text=AV"
              alt="Ảnh giảng viên"
              width={192}
              height={192}
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold text-foreground">{INSTRUCTOR.name}</h3>
              {IS_DEMO_DATA && (
                <span title="Dữ liệu demo">
                  <Info className="h-4 w-4 text-muted-foreground" aria-label="Demo data" />
                </span>
              )}
            </div>
            <p className="mt-1 text-muted-foreground">{INSTRUCTOR.role}</p>
            <p className="mt-4 text-sm text-muted-foreground">{INSTRUCTOR.bio}</p>
            <ul className="mt-6 flex flex-wrap gap-4">
              {INSTRUCTOR.highlights.map((h) => (
                <li key={h.label} className="rounded-lg bg-muted/80 px-3 py-1.5 text-sm">
                  <span className="font-medium text-foreground">{h.value}</span>
                  <span className="ml-1 text-muted-foreground">{h.label}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-border pt-6">
              <p className="text-sm font-medium text-foreground">Timeline (demo)</p>
              <ul className="mt-3 space-y-2">
                {INSTRUCTOR.timeline.map((t) => (
                  <li key={t.year} className="flex gap-3 text-sm">
                    <span className="shrink-0 font-medium text-primary">{t.year}</span>
                    <span className="text-muted-foreground">{t.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
