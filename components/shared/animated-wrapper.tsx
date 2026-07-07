"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "fade";

type AnimatedWrapperProps = {
  children: React.ReactNode;
  className?: string;
  /**
   * Delay in seconds before the animation starts.
   * Use staggered delays (0, 0.1, 0.2…) for card grids.
   */
  delay?: number;
  /** Animation duration in seconds. Default: 0.5 */
  duration?: number;
  /** Direction the element slides in from. Default: "up" */
  direction?: Direction;
  /**
   * Whether the animation fires only once.
   * true (default) = fire once when entering viewport.
   * false = re-fire every time the element enters viewport.
   */
  once?: boolean;
  /** Margin around the viewport used to trigger the animation. */
  margin?: string;
};

const easing = [0.25, 0.46, 0.45, 0.94] as const;

/**
 * AnimatedWrapper
 *
 * A lightweight Framer Motion scroll-reveal component.
 * Wraps children in a motion.div that animates on viewport entry.
 *
 * Design rule: the user should *feel* the page is polished,
 * not consciously notice the animation. Keep delays small and
 * distance subtle (20px max translate).
 */
export function AnimatedWrapper({
  children,
  className,
  delay = 0,
  duration = 0.5,
  direction = "up",
  once = true,
  margin = "-60px",
}: AnimatedWrapperProps) {
  const initialY =
    direction === "up" ? 20 : direction === "down" ? -20 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: initialY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin }}
      transition={{
        duration,
        delay,
        ease: easing,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
