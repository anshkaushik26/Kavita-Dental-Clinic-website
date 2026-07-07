/**
 * app/api/appointment/route.ts
 *
 * POST /api/appointment
 * Handles appointment booking form submissions.
 * Validates with Zod, sends notification email via Resend.
 *
 * TODO: Implement full email template and Resend integration.
 */

import { type NextRequest, NextResponse } from "next/server";
import { appointmentFormSchema } from "@/lib/validations";
import type { ApiResponse } from "@/types";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // ── Server-side validation ─────────────────────────────────────────────
    const result = appointmentFormSchema.safeParse(body);

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

    const { name, phone, email, service, preferredDate, preferredTime, notes } =
      result.data;

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
    //   subject: `New Appointment Request — ${name} (${service})`,
    //   html: `
    //     <h2>New Appointment Request</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Email:</strong> ${email || "Not provided"}</p>
    //     <p><strong>Service:</strong> ${service}</p>
    //     <p><strong>Preferred Date:</strong> ${preferredDate}</p>
    //     <p><strong>Preferred Time:</strong> ${preferredTime}</p>
    //     <p><strong>Notes:</strong> ${notes || "None"}</p>
    //   `,
    // });

    if (process.env.NODE_ENV === "development") {
      console.log("[Appointment Form]", {
        name, phone, email, service, preferredDate, preferredTime, notes,
      });
    }

    return NextResponse.json<ApiResponse>(
      {
        success: true,
        message:
          "Appointment request received! We'll confirm your slot by phone within a few hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[POST /api/appointment]", error);
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        message: "Something went wrong. Please call us directly to book.",
        error: "Internal server error.",
      },
      { status: 500 }
    );
  }
}
