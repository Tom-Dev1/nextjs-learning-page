"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function LandingFinalCta() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [touched, setTouched] = useState({ email: false, phone: false });

  const validateEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const validatePhone = (v: string) => /^[0-9\s+]{10,}$/.test(v.trim());
  const emailValid = !email || validateEmail(email);
  const phoneValid = !phone || validatePhone(phone);
  const canSubmit = email && phone && emailValid && phoneValid;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setTouched({ email: true, phone: true });
    alert("Cảm ơn bạn!");
  };

  return (
    <section
      id="contact"
      aria-labelledby="cta-title"
      className="relative overflow-hidden border-t border-border py-20 px-4 sm:px-6"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
      <motion.div
        className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        aria-hidden
      />

      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          id="cta-title"
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Nhận lộ trình 14 ngày + bộ template miễn phí
        </motion.h2>
        <motion.p
          className="mt-4 text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Điền email và số điện thoại để nhận tài liệu.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-1 flex-col gap-1">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, email: true }))}
              aria-invalid={touched.email && !emailValid}
              aria-describedby={touched.email && !emailValid ? "email-error" : undefined}
              className="rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
            />
            {touched.email && !emailValid && (
              <span id="email-error" className="text-xs text-destructive">
                Email không hợp lệ
              </span>
            )}
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <input
              type="tel"
              placeholder="Số điện thoại"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
              aria-invalid={touched.phone && !phoneValid}
              aria-describedby={touched.phone && !phoneValid ? "phone-error" : undefined}
              className="rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
            />
            {touched.phone && !phoneValid && (
              <span id="phone-error" className="text-xs text-destructive">
                SĐT tối thiểu 10 số
              </span>
            )}
          </div>
          <Button type="submit" size="lg" disabled={!canSubmit} className="sm:self-stretch">
            Nhận tài liệu
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
