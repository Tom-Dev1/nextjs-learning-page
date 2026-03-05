"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Clock, Users, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { COURSES, IS_DEMO_DATA } from "@/lib/constants";
import { cn } from "@/lib/utils";

function formatPrice(n: number) {
  return new Intl.NumberFormat("vi-VN").format(n) + "đ";
}

const neonStyles = {
  cyan: {
    bg: "bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-cyan-600/20",
    border: "border-cyan-500/30",
    glow: "shadow-[0_0_20px_rgba(6,182,212,0.3)]",
    text: "text-cyan-400",
    textGlow: "drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]",
  },
  magenta: {
    bg: "bg-gradient-to-br from-pink-500/20 via-rose-500/20 to-fuchsia-600/20",
    border: "border-pink-500/30",
    glow: "shadow-[0_0_20px_rgba(236,72,153,0.3)]",
    text: "text-pink-400",
    textGlow: "drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]",
  },
  yellow: {
    bg: "bg-gradient-to-br from-yellow-500/20 via-amber-500/20 to-orange-500/20",
    border: "border-yellow-500/30",
    glow: "shadow-[0_0_20px_rgba(234,179,8,0.3)]",
    text: "text-yellow-400",
    textGlow: "drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]",
  },
  green: {
    bg: "bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20",
    border: "border-green-500/30",
    glow: "shadow-[0_0_20px_rgba(34,197,94,0.3)]",
    text: "text-green-400",
    textGlow: "drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]",
  },
  blue: {
    bg: "bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-blue-600/20",
    border: "border-blue-500/30",
    glow: "shadow-[0_0_20px_rgba(59,130,246,0.3)]",
    text: "text-blue-400",
    textGlow: "drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]",
  },
  purple: {
    bg: "bg-gradient-to-br from-purple-500/20 via-violet-500/20 to-purple-600/20",
    border: "border-purple-500/30",
    glow: "shadow-[0_0_20px_rgba(168,85,247,0.3)]",
    text: "text-purple-400",
    textGlow: "drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]",
  },
  pink: {
    bg: "bg-gradient-to-br from-pink-500/20 via-rose-500/20 to-pink-600/20",
    border: "border-pink-500/30",
    glow: "shadow-[0_0_20px_rgba(244,63,94,0.3)]",
    text: "text-pink-400",
    textGlow: "drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]",
  },
  orange: {
    bg: "bg-gradient-to-br from-orange-500/20 via-amber-500/20 to-orange-600/20",
    border: "border-orange-500/30",
    glow: "shadow-[0_0_20px_rgba(249,115,22,0.3)]",
    text: "text-orange-400",
    textGlow: "drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]",
  },
} as const;

type NeonColor = keyof typeof neonStyles;

export function LandingCoursesList() {
  return (
    <section
      id="khoa-hoc"
      aria-labelledby="courses-title"
      className="relative overflow-hidden border-t border-border bg-gradient-to-b from-background via-background to-primary/5 py-20 px-4 sm:px-6"
    >
      {/* Neon background effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute -left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          aria-hidden
        />
        <motion.div
          className="absolute -right-1/4 bottom-1/4 h-[450px] w-[450px] rounded-full bg-pink-500/10 blur-3xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          aria-hidden
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            id="courses-title"
            className={cn(
              "text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl",
              "bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent",
              "drop-shadow-[0_0_12px_rgba(6,182,212,0.5)]"
            )}
          >
            Khóa Học Nổi Bật
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Chọn khóa học phù hợp với mục tiêu của bạn. Mỗi khóa có giá riêng và nội dung chuyên sâu.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {COURSES.map((course, i) => {
            const style = neonStyles[course.neonColor as NeonColor];
            return (
              <motion.article
                key={course.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <Card
                  className={cn(
                    "h-full flex flex-col overflow-hidden transition-all duration-300",
                    style.bg,
                    style.border,
                    "hover:shadow-lg",
                    style.glow,
                    "hover:scale-[1.02]"
                  )}
                >
                  {/* Image placeholder */}
                  <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className={cn(
                          "h-24 w-24 rounded-full",
                          style.bg,
                          "flex items-center justify-center text-2xl font-bold",
                          style.text
                        )}
                      >
                        {course.title.charAt(0)}
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 text-xs font-medium",
                          style.bg,
                          style.text
                        )}
                      >
                        {course.level}
                      </span>
                      {IS_DEMO_DATA && (
                        <span title="Dữ liệu demo">
                          <Info className="h-4 w-4 text-muted-foreground" aria-label="Demo data" />
                        </span>
                      )}
                    </div>
                    <CardTitle
                      className={cn(
                        "mt-2 text-xl font-bold leading-tight",
                        style.textGlow
                      )}
                    >
                      {course.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 text-sm">
                      {course.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 space-y-3">
                    {/* Rating & Students */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                        {course.rating}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {course.students.toLocaleString("vi-VN")}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-2">
                      {course.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {formatPrice(course.originalPrice)}
                        </span>
                      )}
                      <span className={cn("text-2xl font-bold", style.text)}>
                        {formatPrice(course.price)}
                      </span>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-0">
                    <Button
                      asChild
                      className={cn(
                        "w-full transition-all",
                        "bg-gradient-to-r from-transparent via-transparent to-transparent",
                        "border",
                        style.border,
                        "hover:" + style.bg,
                        style.text,
                        "hover:scale-105"
                      )}
                      variant="outline"
                    >
                      <Link href={`#gia?course=${course.id}`}>Đăng ký ngay</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
