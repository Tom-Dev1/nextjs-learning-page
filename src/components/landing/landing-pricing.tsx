"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PRICING, } from "@/lib/constants";
import { cn } from "@/lib/utils";

function formatPrice(n: number) {
  return new Intl.NumberFormat("vi-VN").format(n) + "đ";
}

export function LandingPricing() {
  const [saleOn, setSaleOn] = useState(false);

  const tiers = [
    {
      id: "starter",
      name: "Starter",
      desc: "Phù hợp người mới",
      listPrice: PRICING.listPriceStarter,
      salePrice: PRICING.saleStarter,
      popular: false,
      features: PRICING.features.starter,
      cta: "Chọn Starter",
    },
    {
      id: "pro",
      name: "Pro",
      desc: "Most popular",
      listPrice: PRICING.listPricePro,
      salePrice: PRICING.salePro,
      popular: true,
      features: PRICING.features.pro,
      cta: "Chọn Pro",
    },
    {
      id: "team",
      name: "Team",
      desc: "Cho nhóm / đồng nghiệp",
      listPrice: PRICING.listPriceTeam,
      salePrice: PRICING.saleTeam,
      popular: false,
      features: PRICING.features.team,
      cta: "Chọn Team",
    },
  ];

  return (
    <section
      id="gia"
      aria-labelledby="pricing-title"
      className="border-t border-border bg-muted/20 py-16 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          id="pricing-title"
          className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Chọn gói học
        </motion.h2>
        <motion.p
          className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Giá trong khoảng 179k–200k. Bật ưu đãi để xem giá niêm yết gạch ngang.
        </motion.p>

        {/* Toggle ưu đãi */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <label className="flex cursor-pointer items-center gap-3 rounded-full border border-border bg-card px-4 py-2">
            <span className="text-sm font-medium text-foreground">Ưu đãi tuần này</span>
            <button
              type="button"
              role="switch"
              aria-checked={saleOn}
              onClick={() => setSaleOn((v) => !v)}
              className={cn(
                "relative h-6 w-11 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                saleOn ? "bg-primary" : "bg-muted"
              )}
            >
              <span
                className={cn(
                  "absolute top-1 left-1 h-4 w-4 rounded-full bg-white transition-transform",
                  saleOn && "translate-x-5"
                )}
              />
            </button>
          </label>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Card
                className={cn(
                  "h-full flex flex-col",
                  t.popular && "ring-2 ring-primary shadow-lg"
                )}
              >
                <CardHeader className="pb-2">
                  {t.popular && (
                    <span className="mb-2 inline-block w-fit rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
                      Phổ biến nhất
                    </span>
                  )}
                  <CardTitle>{t.name}</CardTitle>
                  <CardDescription>{t.desc}</CardDescription>
                  <div className="mt-4 flex flex-wrap items-baseline gap-2">
                    {saleOn && (
                      <span className="text-lg text-muted-foreground line-through">
                        {formatPrice(t.listPrice)}
                      </span>
                    )}
                    <span className="text-2xl font-bold text-foreground">
                      {formatPrice(t.salePrice)}
                    </span>

                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button asChild className="w-full" size="lg" variant={t.popular ? "default" : "outline"}>
                    <Link href="#contact">{t.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
          <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden />
          {PRICING.guarantee}
        </p>
      </div>
    </section>
  );
}
