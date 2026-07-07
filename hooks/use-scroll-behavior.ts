"use client";

import { useState, useEffect, useRef } from "react";

type ScrollBehavior = {
  /** True once the user has scrolled past 60px — triggers glass navbar */
  scrolled: boolean;
  /** False when scrolling down, true when scrolling up or at top */
  visible: boolean;
};

/**
 * useScrollBehavior
 *
 * Tracks scroll position (for glass nav) and scroll direction (for hide/show nav).
 * Uses passive event listener for performance. Debounced via requestAnimationFrame.
 */
export function useScrollBehavior(): ScrollBehavior {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const SCROLL_THRESHOLD = 60;   // px before glass effect activates
    const HIDE_THRESHOLD   = 8;    // px delta before hiding nav

    const onScroll = () => {
      if (ticking.current) return;

      ticking.current = true;
      requestAnimationFrame(() => {
        const currentY = window.scrollY;

        // Glass effect
        setScrolled(currentY > SCROLL_THRESHOLD);

        // Show / hide
        if (currentY < SCROLL_THRESHOLD) {
          // Always show at top
          setVisible(true);
        } else if (currentY < lastScrollY.current - HIDE_THRESHOLD) {
          // Scrolling up — reveal
          setVisible(true);
        } else if (currentY > lastScrollY.current + HIDE_THRESHOLD) {
          // Scrolling down — hide
          setVisible(false);
        }

        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { scrolled, visible };
}
