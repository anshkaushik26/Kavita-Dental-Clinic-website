import type { Metadata } from "next";
import {
  Activity,
  Anchor,
  Paintbrush,
  Crown,
  Smile,
  Scissors,
  Sparkles,
  Shield,
  Clock,
  CheckCircle2
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AnimatedWrapper } from "@/components/shared/animated-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/shared/booking-modal";
import { TREATMENTS } from "@/lib/constants";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Treatments",
  description: "Explore our comprehensive range of dental treatments including root canals, implants, cosmetic dentistry, and preventive care.",
};

const ICON_MAP: Record<string, LucideIcon> = {
  Activity,
  Anchor,
  Paintbrush,
  Crown,
  Smile,
  Scissors,
  Sparkles,
  Shield,
};

export default function TreatmentsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 pt-24 md:pt-32 pb-24 bg-slate-50">
        <div className="container-padded">
          {/* Hero Section */}
          <AnimatedWrapper>
            <SectionHeading
              label="Comprehensive Care"
              heading="Our Dental Treatments"
              subheading="From routine check-ups to complex full-mouth rehabilitations, we offer a complete range of dental services under one roof."
            />
          </AnimatedWrapper>

          {/* Treatments Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {TREATMENTS.map((treatment, index) => {
              const Icon = ICON_MAP[treatment.icon];

              return (
                <AnimatedWrapper key={treatment.id} delay={Math.min(index * 0.05, 0.4)}>
                  <article
                    id={treatment.id}
                    className="scroll-mt-32 flex flex-col h-full rounded-3xl border border-border/70 bg-white p-6 md:p-8 hover:border-primary/25 hover:shadow-[0_8px_30px_rgba(26,86,219,0.08)] transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 shrink-0">
                        {Icon && <Icon className="w-6 h-6 text-primary" strokeWidth={1.75} />}
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-foreground leading-snug mb-1.5">
                          {treatment.title}
                        </h2>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {treatment.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col sm:flex-row gap-6 mb-8 bg-slate-50/50 p-5 rounded-2xl border border-border/50">
                      {treatment.benefits && (
                        <div className="flex-1 space-y-3">
                          <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            Key Benefits
                          </h4>
                          <ul className="space-y-2">
                            {treatment.benefits.map((benefit, i) => (
                              <li key={i} className="text-[13.5px] text-muted-foreground flex items-start gap-2 leading-tight">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0 mt-1" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {treatment.duration && (
                        <div className="sm:w-1/3 shrink-0 space-y-3 border-t sm:border-t-0 sm:border-l border-border/50 pt-4 sm:pt-0 sm:pl-6">
                          <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                            <Clock className="w-4 h-4 text-primary" />
                            Duration
                          </h4>
                          <p className="text-[13.5px] text-muted-foreground leading-tight">
                            {treatment.duration}
                          </p>
                        </div>
                      )}
                    </div>

                    <BookingModal>
                      <Button
                        size="lg"
                        className="w-full sm:w-auto mt-auto rounded-xl font-semibold h-12"
                      >
                        Book Appointment
                      </Button>
                    </BookingModal>
                  </article>
                </AnimatedWrapper>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
