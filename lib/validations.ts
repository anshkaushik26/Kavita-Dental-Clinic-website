/**
 * lib/validations.ts
 *
 * Zod schemas for all user-facing forms.
 * These schemas are shared between client components (React Hook Form)
 * and server actions / API routes (server-side validation).
 */

import { z } from "zod";

// ─── Contact Form ────────────────────────────────────────────────────────────

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your full name (at least 2 characters).")
    .max(100, "Name must be under 100 characters."),

  phone: z
    .string()
    .regex(
      /^[6-9]\d{9}$/,
      "Please enter a valid 10-digit Indian mobile number."
    ),

  email: z
    .string()
    .email("Please enter a valid email address.")
    .optional()
    .or(z.literal("")),

  message: z
    .string()
    .min(10, "Please describe how we can help you (at least 10 characters).")
    .max(1000, "Message must be under 1000 characters."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

// ─── Appointment Booking Form ────────────────────────────────────────────────

export const appointmentFormSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your full name.")
    .max(100),

  phone: z
    .string()
    .regex(
      /^[6-9]\d{9}$/,
      "Please enter a valid 10-digit Indian mobile number."
    ),

  email: z
    .string()
    .email("Please enter a valid email address.")
    .optional()
    .or(z.literal("")),

  service: z
    .string()
    .min(1, "Please select a service."),

  preferredDate: z
    .string()
    .min(1, "Please select a preferred date."),

  preferredTime: z
    .enum(["morning", "afternoon", "evening"], {
      error: "Please select a preferred time slot.",
    }),

  notes: z
    .string()
    .max(500, "Notes must be under 500 characters.")
    .optional()
    .or(z.literal("")),
});

export type AppointmentFormValues = z.infer<typeof appointmentFormSchema>;

// ─── Time slot options (used in select inputs) ───────────────────────────────

export const TIME_SLOT_OPTIONS = [
  { value: "morning",   label: "Morning (10 AM – 1 PM)" },
  { value: "afternoon", label: "Afternoon (1 PM – 5 PM)" },
  { value: "evening",   label: "Evening (5 PM – 8 PM)" },
] as const;
