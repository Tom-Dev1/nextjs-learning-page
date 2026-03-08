"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DEMO_HERO } from "@/lib/constants";
import { LandingVisitorCounter } from "./landing-visitor-counter";
import { cn } from "@/lib/utils";
import { WordRotate } from "../ui/word-rotate";
import { SparklesText } from "../ui/sparkle";
import { AuroraText } from "../ui/aurora-text";
import { Highlighter } from "../ui/highlighter";
import { TypingAnimation } from "../ui/typing-animation";
const ZALO_LINK = "https://zalo.me/0588879555";
export function LandingHero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative min-h-[90vh] overflow-hidden px-4 pt-24 pb-16 sm:px-6 sm:pt-28 md:min-h-[85vh]"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0  from-purple-900/20 via-blue-900/20 to-pink-900/20"


          style={{
            backgroundSize: "200% 200%",
          }}
        />



      </div>

      <div className="mx-auto max-w-4xl text-center">
        <h1
          id="hero-title"
          className={cn(
            " text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl md:leading-tight"
          )}

        >
          Học
          {" "}
          <Highlighter action="highlight" color="#dadcf3" animationDuration={1200} multiline={true}>
            <AuroraText>marketing</AuroraText>
          </Highlighter> {" "}
          bài bản với
          {" "}
          <Highlighter action="underline" color="#55f12e" animationDuration={1200} strokeWidth={5}>
            <SparklesText>
              <WordRotate words={["kiến thức", "nội dung", "chuyển đổi"]} duration={3000} />
            </SparklesText>
          </Highlighter> {" "}

        </h1>
        <h1 className="mt-4 text-lg  sm:text-xl"
        >Thực chiến content, quảng cáo {" "}
          <AuroraText className="text-2xl font-medium" colors={["#0065fc", "#0070f3", "#38bdf8"]}>
            <TypingAnimation
              duration={450}
              typeSpeed={100}
              deleteSpeed={50}
              loop={true}
              showCursor={true}
              blinkCursor={true}
              cursorStyle="line"
              words={["TikTok ", "Facebook ", "Google ", "Youtube "]}
            /></AuroraText>,funnel và đo lường — không lan man lý thuyết.</h1>


        {/* Visitor counter */}
        <div
          className="mt-6 flex justify-center"

        >
          <LandingVisitorCounter />
        </div>

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

            </span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/80 backdrop-blur-sm px-3 py-1.5 text-sm shadow-md">
            {DEMO_HERO.studentCount.toLocaleString("vi-VN")}+ học viên

          </span>
        </motion.div>

        <div
          className="mt-6 flex flex-wrap items-center justify-center gap-3 "

        >
          <Button asChild variant="outline" size="lg">
            <Link href={ZALO_LINK}>Đăng ký ngay</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#lo-trinh">Xem lộ trình</Link>
          </Button>
        </div>

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
