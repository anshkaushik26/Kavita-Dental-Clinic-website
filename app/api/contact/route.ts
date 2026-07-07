/**
 * app/api/contact/route.ts
 *
 * POST /api/contact
 * Handles contact form submissions. Validates with Zod, sends email via Resend.
 *
 * TODO: Implement full email template and Resend integration when
 *       RESEND_API_KEY is available.
 */

import { type NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import type { ApiResponse } from "@/types";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // ── Server-side validation ─────────────────────────────────────────────
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: "Validation failed.",
          error: result.error.issues[0]?.message ?? "Invalid input.",
        },
        { status: 400 }
      );
    }

    const { name, phone, email, message } = result.data;

    // ── Send email via Resend ──────────────────────────────────────────────
    // TODO: Uncomment and complete when RESEND_API_KEY is configured.
    //
    // const { Resend } = await import("resend");
    // const resend = new Resend(process.env.RESEND_API_KEY);
    //
    // await resend.emails.send({
    //   from: process.env.RESEND_FROM_EMAIL!,
    //   to:   process.env.RESEND_TO_EMAIL!,
    //   replyTo: email || undefined,
    //   subject: `New Contact from ${name} — Kavita Dental Clinic`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Email:</strong> ${email || "Not provided"}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    // Temporary: log to console in development
    if (process.env.NODE_ENV === "development") {
      console.log("[Contact Form]", { name, phone, email, message });
    }

    return NextResponse.json<ApiResponse>(
      {
        success: true,
        message: "Your message has been received. We'll contact you shortly!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[POST /api/contact]", error);
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        message: "Something went wrong. Please try again or call us directly.",
        error: "Internal server error.",
      },
      { status: 500 }
    );
  }
}
