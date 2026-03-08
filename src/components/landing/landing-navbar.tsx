"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { SITE, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";

const ZALO_LINK = "https://zalo.me/0588879555";
export function LandingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileOpen]);

  return (
    <>
      <header
        role="banner"
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border/50 bg-background/80 backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link
            href="#"
            className="text-lg font-bold tracking-tight text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
            aria-label={`${SITE.name} - Trang chủ`}
          >
            {SITE.name}
          </Link>

          <nav aria-label="Điều hướng chính" className="hidden md:flex md:items-center md:gap-1">
            {NAV_LINKS.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href={ZALO_LINK}>Đăng ký ngay</Link>
            </Button>
            <ThemeToggle className="hidden sm:flex" />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Mở menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Sidebar Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-[101] w-[min(320px,85vw)] bg-card border-l border-border shadow-2xl transition-transform duration-300 ease-out overflow-y-auto",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-full flex-col gap-4 p-6">
          {/* Close button */}
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="absolute right-4 top-4 rounded-md p-1 hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring transition-colors"
            aria-label="Đóng menu"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Navigation */}
          <nav className="mt-8 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Button asChild variant="outline" size="lg">
            <Link href={ZALO_LINK} onClick={() => setMobileOpen(false)}>
              Đăng ký ngay
            </Link>
          </Button>

          {/* Theme Toggle */}
          <div className="mt-auto pt-4">
            <AnimatedThemeToggler />
          </div>
        </div>
      </div>
    </>
  );
}
