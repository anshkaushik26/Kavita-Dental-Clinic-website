import Image from "next/image";
import { User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedWrapper } from "@/components/shared/animated-wrapper";
import { DOCTORS } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * DoctorsSection — Section 3
 *
 * Two equal profile cards. No visual hierarchy between the doctors —
 * identical sizing, spacing, and component structure for both.
 *
 * Portrait placeholder uses correct aspect ratio (3:4 portrait)
 * ready to swap in a real <Image> with one line change.
 */
export function DoctorsSection() {
  return (
    <section
      id="doctors"
      className="section-padding bg-background"
      aria-labelledby="doctors-heading"
    >
      <div className="container-padded">

        {/* Heading */}
        <AnimatedWrapper>
          <SectionHeading
            heading="Our Doctors"
            subheading="Experienced, caring professionals committed to your comfort."
            id="doctors-heading"
          />
        </AnimatedWrapper>

        {/* Doctor Cards — equal sizing enforced */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {DOCTORS.map((doctor, index) => (
            <AnimatedWrapper key={doctor.id} delay={index * 0.12}>
              <article
                className={cn(
                  "group rounded-2xl border border-border/70 bg-white overflow-hidden",
                  "hover:border-primary/20 hover:shadow-[0_4px_24px_rgba(26,86,219,0.07)]",
                  "transition-all duration-300"
                )}
                aria-label={`${doctor.name}, ${doctor.qualification}`}
              >

                {/* Portrait */}
                <div className="aspect-[3/4] w-full bg-slate-100 relative overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={`Portrait of ${doctor.name}`}
                    fill
                    className={cn("object-cover", doctor.objectPositionClass)}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Info */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-bold text-foreground leading-tight">
                        {doctor.name}
                      </h3>
                      <Badge
                        variant="secondary"
                        className="shrink-0 text-[11px] font-semibold tracking-wide px-2.5"
                      >
                        {doctor.qualification}
                      </Badge>
                    </div>
                    <p className="text-sm font-medium text-primary">
                      {doctor.experience} Experience
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {doctor.bio}
                  </p>
                </div>

              </article>
            </AnimatedWrapper>
          ))}
        </div>

      </div>
    </section>
  );
}
