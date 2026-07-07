/**
 * types/index.ts
 *
 * Shared TypeScript interfaces and types for the Kavita Dental Clinic website.
 * Import from here to keep types consistent across components, API routes, and utilities.
 */

// ─── API Response ────────────────────────────────────────────────────────────

export type ApiResponse<T = null> = {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
};

// ─── Email ───────────────────────────────────────────────────────────────────

export type EmailPayload = {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
};

// ─── Navigation ──────────────────────────────────────────────────────────────

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
};

// ─── UI Component helpers ────────────────────────────────────────────────────

export type WithClassName = {
  className?: string;
};

export type WithChildren = {
  children: React.ReactNode;
};

export type WithChildrenAndClassName = WithChildren & WithClassName;

// ─── Section IDs (for anchor navigation) ─────────────────────────────────────

export type SectionId =
  | "hero"
  | "services"
  | "about"
  | "why-us"
  | "gallery"
  | "testimonials"
  | "faq"
  | "contact";

// ─── Google Reviews (if fetching later) ──────────────────────────────────────

export type Testimonial = {
  id: string;
  name: string;
  avatar?: string;
  rating: number;          // 1–5
  text: string;
  date: string;            // ISO date string
  service?: string;        // service they came in for
};
