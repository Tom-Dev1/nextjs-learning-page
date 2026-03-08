"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ZaloIcon from "@/app/icons/icons8-zalo.svg";

// Link Zalo - có thể thay đổi theo nhu cầu
const ZALO_LINK = "https://zalo.me/0588879555"; // Thay số điện thoại thật

export function ContactButton() {
  return (
    <motion.div
      className="fixed bottom-24 right-6 z-40"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: [0, -3, 3, -3, 3, -2, 2, -2, 2, 0],
        y: [0, -2, 2, -2, 2, -1, 1, -1, 1, 0],
        rotate: [0, -2, 2, -2, 2, -1, 1, -1, 1, 0],
      }}
      transition={{
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
        x: {
          duration: 0.6,
          repeat: Infinity,
          repeatDelay: 2.5,
          ease: "easeInOut",
        },
        y: {
          duration: 0.6,
          repeat: Infinity,
          repeatDelay: 2.5,
          ease: "easeInOut",
        },
        rotate: {
          duration: 0.6,
          repeat: Infinity,
          repeatDelay: 2.5,
          ease: "easeInOut",
        },
      }}
    >
      <motion.a
        href={ZALO_LINK}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          size="icon"
          className={cn(
            "h-14 w-14 rounded-full shadow-xl",
            "bg-transparent hover:bg-transparent",
            "transition-all duration-200",
            "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
            "relative p-0"
          )}
          aria-label="Liên hệ qua Zalo"
        >
          <Image
            src={ZaloIcon}
            alt="Zalo"
            width={56}
            height={56}
            className="rounded-full"
            unoptimized
          />
        </Button>
      </motion.a>
    </motion.div>
  );
}

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Hiển thị nút khi scroll xuống hơn 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className={cn(
              "h-12 w-12 rounded-full shadow-lg",
              "bg-primary text-primary-foreground",
              "hover:bg-primary/90 hover:scale-110",
              "transition-all duration-200",
              "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            )}
            aria-label="Lên đầu trang"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
