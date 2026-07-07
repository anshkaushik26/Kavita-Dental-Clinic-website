import { cn } from "@/lib/utils";

type ToothIconProps = {
  className?: string;
  strokeWidth?: number;
};

/**
 * ToothIcon
 *
 * Custom flat SVG tooth icon used in the site logo.
 * Design: clean, modern, professional — not cartoon, not mascot.
 *
 * Two cusps visible at the crown top.
 * Two roots descending from the base.
 * No fill — stroke only, matching Lucide's visual language.
 */
export function ToothIcon({ className, strokeWidth = 1.5 }: ToothIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("w-6 h-6", className)}
      aria-hidden="true"
    >
      {/*
        Tooth anatomy:
        - Crown: wide top section with slight indent between two cusps
        - Roots: two prongs descending from the base
      */}
      <path d="M7 3C5 3 4 4.5 4 6.5C4 9 5.5 10.5 6 12.5L7.5 17.5C8 19.5 8.5 21 9.5 21C10.5 21 11 20 11.5 18.5L12 17L12.5 18.5C13 20 13.5 21 14.5 21C15.5 21 16 19.5 16.5 17.5L18 12.5C18.5 10.5 20 9 20 6.5C20 4.5 19 3 17 3C15.5 3 14.5 3.5 13.5 4C13 4.3 12.5 4.5 12 4.5C11.5 4.5 11 4.3 10.5 4C9.5 3.5 8.5 3 7 3Z" />
    </svg>
  );
}
