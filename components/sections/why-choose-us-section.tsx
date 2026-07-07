import { Shield, Award, IndianRupee } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedWrapper } from "@/components/shared/animated-wrapper";
import { TRUST_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

// Icon map — resolved at build time, no dynamic imports needed.
const ICON_MAP: Record<string, LucideIcon> = {
  Shield,
  Award,
  IndianRupee,
};

/**
 * WhyChooseUsSection — Section 2
 *
 * Three trust cards establishing the clinic's core value propositions.
 * Design: clean, minimal, no exaggeration.
 * Slightly tinted background alternates visually from the white hero.
 */
export function WhyChooseUsSection() {
  return (
    <section
      id="why-us"
      className="section-padding bg-slate-50"
      aria-labelledby="why-us-heading"
    >
      <div className="container-padded">

        {/* Heading */}
        <AnimatedWrapper>
          <SectionHeading
            label="Why Choose Us"
            heading="Two Decades of Trusted Care"
            subheading="Built one smile at a time, right here in Rohini."
            id="why-us-heading"
          />
        </AnimatedWrapper>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRUST_ITEMS.map((item, index) => {
            const Icon = ICON_MAP[item.icon];

            return (
              <AnimatedWrapper key={item.id} delay={index * 0.1}>
                <article
                  className={cn(
                    "group h-full rounded-2xl border border-border/70 bg-white",
                    "p-8",
                    "hover:border-primary/20 hover:shadow-[0_4px_24px_rgba(26,86,219,0.07)]",
                    "transition-all duration-300"
                  )}
                  aria-label={item.heading}
                >
                  {/* Icon container */}
                  <div
                    className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 mb-6"
                    aria-hidden="true"
                  >
                    {Icon && (
                      <Icon
                        className="w-5 h-5 text-primary"
                        strokeWidth={1.75}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.heading}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </article>
              </AnimatedWrapper>
            );
          })}
        </div>

      </div>
    </section>
  );
}
