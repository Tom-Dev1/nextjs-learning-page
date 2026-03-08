"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Clock, Users } from "lucide-react";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { COURSES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { AuroraText } from "../ui/aurora-text";
import { Button } from "../ui/button";
import { MagicCard } from "../ui/magic-card";
const ZALO_LINK = "https://zalo.me/0588879555";
function formatPrice(n: number) {
  return new Intl.NumberFormat("vi-VN").format(n) + "đ";
}


export function LandingCoursesList() {
  return (
    <section
      id="khoa-hoc"
      aria-labelledby="courses-title"
      className="relative overflow-hidden border-t border-border bg-gradient-to-b from-background via-background to-primary/5 py-20 px-4 sm:px-6"
    >

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


            )}
          >
            <AuroraText>Khóa Học Nổi Bật</AuroraText>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Chọn khóa học phù hợp với mục tiêu của bạn. Mỗi khóa có giá riêng và nội dung chuyên sâu.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {COURSES.map((course, i) => {
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

                <MagicCard
                  className={cn(
                    "h-full flex flex-col overflow-hidden transition-all duration-300",
                    "hover:shadow-lg border-border"
                  )}
                >
                  {/* Image placeholder */}
                  <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className={cn(
                          "h-24 w-24 rounded-full bg-primary/10",
                          "flex items-center justify-center text-2xl font-bold text-primary"
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
                          "bg-primary/10 text-primary"
                        )}
                      >
                        {course.level}
                      </span>

                    </div>
                    <CardTitle
                      className={cn(
                        "mt-2 text-xl font-bold leading-tight text-foreground"
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
                    <div className="flex items-center gap-4 text-sm ">
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
                      <span className={cn("text-2xl font-bold text-foreground")}>
                        {formatPrice(course.price)}
                      </span>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-0">
                    <Button asChild variant="outline" size="lg">
                      <Link href={ZALO_LINK}>Đăng ký ngay</Link>
                    </Button>
                  </CardFooter>
                </MagicCard>
              </motion.article>

            );
          })}
        </div>
      </div>
    </section>
  );
}
