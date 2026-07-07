import Link from "next/link";
import {
  Activity,
  Anchor,
  Paintbrush,
  Crown,
  Smile,
  Scissors,
  Sparkles,
  Shield,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedWrapper } from "@/components/shared/animated-wrapper";
import { TREATMENTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

// Resolved at build time — no dynamic imports.
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

/**
 * TreatmentsSection — Section 4
 *
 * Exactly 7 treatment cards in a responsive grid.
 * Each card: icon container, title, description, text link.
 * "View All Treatments" button below the grid.
 *
 * Content is fully data-driven from lib/constants.ts —
 * zero strings hardcoded in this component.
 */
export function TreatmentsSection() {
  return (
    <section
      id="treatments"
      className="section-padding bg-slate-50"
      aria-labelledby="treatments-heading"
    >
      <div className="container-padded">

        {/* Heading */}
        <AnimatedWrapper>
          <SectionHeading
            label="What We Treat"
            heading="Treatments We Offer"
            subheading="Modern procedures performed with care, precision, and your comfort in mind."
            id="treatments-heading"
          />
        </AnimatedWrapper>

        {/* Grid — 6 cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TREATMENTS.slice(0, 6).map((treatment, index) => {
            const Icon = ICON_MAP[treatment.icon];

            return (
              <AnimatedWrapper
                key={treatment.id}
                delay={Math.min(index * 0.07, 0.35)}
              >
                <article
                  className={cn(
                    "group flex flex-col h-full rounded-2xl border border-border/70 bg-white",
                    "p-6 md:p-7",
                    "hover:border-primary/25 hover:shadow-[0_4px_24px_rgba(26,86,219,0.07)]",
                    "transition-all duration-300"
                  )}
                  aria-label={treatment.title}
                >
                  {/* Icon */}
                  <div
                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 mb-5 shrink-0"
                    aria-hidden="true"
                  >
                    {Icon && (
                      <Icon
                        className="w-[18px] h-[18px] text-primary"
                        strokeWidth={1.75}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-2 mb-5">
                    <h3 className="text-[15px] font-semibold text-foreground leading-snug">
                      {treatment.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {treatment.description}
                    </p>
                  </div>

                  {/* Text link */}
                  <Link
                    href={`/treatments#${treatment.id}`}
                    className={cn(
                      "inline-flex items-center gap-1.5 text-sm font-medium text-primary mt-auto",
                      "group-hover:gap-2.5 transition-all duration-150"
                    )}
                    aria-label={`Learn more about ${treatment.title}`}
                  >
                    Learn More
                    <ArrowRight
                      className="w-3.5 h-3.5"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </Link>
                </article>
              </AnimatedWrapper>
            );
          })}
        </div>

        {/* View All */}
        <AnimatedWrapper className="flex justify-center mt-12">
          <ButtonLink
            href="/treatments"
            variant="outline"
            size="lg"
            className="rounded-xl border-border hover:bg-white font-medium px-8"
          >
            View All Treatments
          </ButtonLink>
        </AnimatedWrapper>

      </div>
    </section>
  );
}
