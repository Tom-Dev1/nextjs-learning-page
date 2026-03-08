"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, TrendingUp, TrendingDown } from "lucide-react";
import { useCountUp } from "@/hooks/use-count-up";

const BASE_VISITORS = 200;
const VARIATION_RANGE = 15; // ±15 visitors (dao động 10-20)

export function LandingVisitorCounter() {
  const [currentVisitors, setCurrentVisitors] = useState(BASE_VISITORS);
  const [isIncreasing, setIsIncreasing] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Initial random value within range
    const initialValue = BASE_VISITORS + Math.floor(Math.random() * VARIATION_RANGE * 2) - VARIATION_RANGE;
    setCurrentVisitors(initialValue);

    const updateVisitors = () => {
      setIsAnimating(true);

      // Random change: -15 to +15, dao động trong khoảng 10-20
      const randomChange = Math.random() < 0.7
        ? Math.floor(Math.random() * 11) - 5 // 70% chance: small change ±5 (dao động nhẹ)
        : Math.floor(Math.random() * VARIATION_RANGE * 2) - VARIATION_RANGE; // 30% chance: larger change ±15

      setCurrentVisitors((prev) => {
        const newValue = prev + randomChange;
        // Keep within BASE ± VARIATION_RANGE
        const clampedValue = Math.max(
          BASE_VISITORS - VARIATION_RANGE,
          Math.min(BASE_VISITORS + VARIATION_RANGE, newValue)
        );
        setIsIncreasing(clampedValue > prev);
        return clampedValue;
      });

      setTimeout(() => setIsAnimating(false), 1000);
    };

    // Update every 2-4 seconds for more real-time feel
    intervalRef.current = setInterval(updateVisitors, 2000 + Math.random() * 2000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const displayedCount = useCountUp(currentVisitors, 1000, true, {
    decimals: 0,
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      className="relative inline-flex items-center gap-2 rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm px-4 py-2.5 shadow-lg"
    >
      <Users className="h-4 w-4 text-primary" aria-hidden />
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-muted-foreground">Đang online:</span>
        <div className="relative flex items-center gap-1.5">
          <motion.span
            key={currentVisitors}
            initial={false}
            animate={{
              scale: isAnimating ? [1, 1.05, 1] : 1,
            }}
            transition={{ duration: 0.4 }}
            className="font-bold text-foreground tabular-nums"
          >
            {displayedCount}
          </motion.span>
          <AnimatePresence mode="wait" initial={false}>
            {isIncreasing ? (
              <motion.div
                key="up"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center text-green-500"
              >
                <TrendingUp className="h-3.5 w-3.5" aria-label="Tăng" />
              </motion.div>
            ) : (
              <motion.div
                key="down"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center text-red-500"
              >
                <TrendingDown className="h-3.5 w-3.5" aria-label="Giảm" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

    </motion.div>
  );
}
