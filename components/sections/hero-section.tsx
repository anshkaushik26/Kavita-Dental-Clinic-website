import Image from "next/image";
import { Phone } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/button";
import { AnimatedWrapper } from "@/components/shared/animated-wrapper";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { BookingModal } from "@/components/shared/booking-modal";

/**
 * HeroSection — Section 1
 *
 * Two-column layout: typography-dominant left column, image placeholder right.
 *
 * Design decisions:
 * - h1 uses Playfair Display (via .font-heading) for warmth and authority.
 * - The badge "Serving Rohini Since 2005" establishes credibility immediately.
 * - Image placeholder is clearly branded but obviously a placeholder.
 * - Min-height dvh ensures full viewport height on all screen sizes.
 * - PT accounts for the fixed 64–80px navbar.
 */
export function HeroSection() {
  const whatsappUrl = buildWhatsAppUrl(
    siteConfig.phone.whatsapp,
    "Hello Kavita Dental Clinic,\n\nI would like to book an appointment.\n\nPlease let me know the available timings.\n\nThank you."
  );

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center bg-background pt-20 lg:pt-28"
      aria-labelledby="hero-heading"
    >
      <div className="container-padded w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center pb-16 sm:pb-24 lg:pb-0">

          {/* ── Left Column — Content ────────────────────────────── */}
          <AnimatedWrapper className="space-y-8 max-w-xl">

            {/* Trust badge */}
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 w-fit"
              aria-label="Established since 2005"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
              <span className="text-[12.5px] font-medium text-primary tracking-wide">
                Serving Rohini Since {siteConfig.established}
              </span>
            </div>

            {/* Headline — only h1 on the page */}
            <h1
              id="hero-heading"
              className="font-heading text-[52px] sm:text-[60px] lg:text-[68px] xl:text-[76px] font-bold text-foreground leading-[1.08] tracking-tight"
            >
              Your Smile,
              <br />
              Our Priority.
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[440px]">
              Experienced, gentle, and affordable dental care for families
              across Rohini, Delhi.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
              <BookingModal>
                <Button
                  size="lg"
                  className="rounded-xl font-semibold px-7 text-[15px] h-12 justify-center"
                >
                  Book Appointment
                </Button>
              </BookingModal>

              <ButtonLink
                href="https://wa.me/919868387331"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="rounded-xl font-semibold px-7 text-[15px] h-12 gap-2 justify-center bg-[#25D366] text-white hover:bg-[#20b958] border-transparent transition-colors duration-150"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                Chat on WhatsApp
              </ButtonLink>

              <ButtonLink
                href="tel:+919868387331"
                variant="outline"
                size="lg"
                className="rounded-xl font-semibold px-7 text-[15px] h-12 gap-2 justify-center border-foreground/20 hover:bg-muted transition-colors duration-150"
                aria-label="Call Us at 98683 87331"
              >
                <Phone className="w-4 h-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                Call Us
              </ButtonLink>
            </div>

          </AnimatedWrapper>

          {/* ── Right Column — Image Placeholder ────────────────── */}
          <AnimatedWrapper
            delay={0.15}
            className="order-first lg:order-last flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-100 shadow-xl shadow-black/5">
              <Image
                src="/images/hero-treatment.webp"
                alt="Kavita Dental Clinic - State of the art facility in Rohini, Delhi"
                fill
                priority
                fetchPriority="high"
                className="object-cover object-[65%_25%] scale-[0.98] origin-center rounded-[1.5rem]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimatedWrapper>

        </div>
      </div>
    </section>
  );
}
