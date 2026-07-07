import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn — Merge Tailwind classes safely, resolving conflicts intelligently.
 * Usage: cn("px-4 py-2", isActive && "bg-primary", className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * formatPhone — Format a raw phone number for display.
 * e.g. "9876543210" → "+91 98765 43210"
 */
export function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10) {
    return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;
  }
  if (digits.length === 12 && digits.startsWith("91")) {
    const local = digits.slice(2);
    return `+91 ${local.slice(0, 5)} ${local.slice(5)}`;
  }
  return raw;
}

/**
 * buildWhatsAppUrl — Construct a WhatsApp click-to-chat URL.
 * @param number  - raw number (digits only, with country code)
 * @param message - optional pre-filled message
 */
export function buildWhatsAppUrl(number: string, message?: string): string {
  const encoded = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${number}${encoded}`;
}

/**
 * slugify — Convert a string to a URL-safe slug.
 * e.g. "Root Canal Treatment" → "root-canal-treatment"
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * absoluteUrl — Prefix a relative path with the site's base URL.
 * Falls back to localhost in development.
 */
export function absoluteUrl(path: string): string {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
