"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, DEMO_HERO } from "@/lib/constants";
import { IS_DEMO_DATA } from "@/lib/constants";
import { LandingVisitorCounter } from "./landing-visitor-counter";
import { cn } from "@/lib/utils";

export function LandingHero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative min-h-[90vh] overflow-hidden px-4 pt-24 pb-16 sm:px-6 sm:pt-28 md:min-h-[85vh]"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        />
        <motion.div
          className="absolute -left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-violet-500/30 via-purple-500/30 to-fuchsia-500/30 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute -right-1/4 bottom-1/4 h-[450px] w-[450px] rounded-full bg-gradient-to-r from-cyan-500/25 via-blue-500/25 to-indigo-500/25 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-pink-500/20 via-rose-500/20 to-orange-500/20 blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <motion.h1
          id="hero-title"
          className={cn(
            "neon-title text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl md:leading-tight"
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {SITE.tagline}
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-muted-foreground sm:text-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Thực chiến content, quảng cáo Meta & TikTok, funnel và đo lường — không lan man lý thuyết.
        </motion.p>

        {/* Visitor counter */}
        <motion.div
          className="mt-6 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          <LandingVisitorCounter />
        </motion.div>

        {/* Social proof + demo disclaimer */}
        <motion.div
          className="mt-6 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/80 backdrop-blur-sm px-3 py-1.5 text-sm shadow-md">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden />
            <span>
              {DEMO_HERO.rating}/5
              {IS_DEMO_DATA && (
                <span className="ml-1 inline-flex items-baseline" title="Dữ liệu demo">
                  <Info className="ml-0.5 inline h-3.5 w-3.5 text-muted-foreground" aria-label="Demo data" />
                </span>
              )}
            </span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/80 backdrop-blur-sm px-3 py-1.5 text-sm shadow-md">
            {DEMO_HERO.studentCount.toLocaleString("vi-VN")}+ học viên
            {IS_DEMO_DATA && (
              <span title="Dữ liệu demo" className="inline-flex">
                <Info className="ml-0.5 h-3.5 w-3.5 text-muted-foreground" aria-label="Demo data" />
              </span>
            )}
          </span>
        </motion.div>

        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <Button asChild size="lg" className="min-w-[160px]">
            <Link href="#gia">Đăng ký ngay</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#lo-trinh">Xem lộ trình</Link>
          </Button>
        </motion.div>

        {/* Trust badges - text only, demo */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          {DEMO_HERO.trustBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
