import { Button, ButtonLink } from "@/components/ui/button";
import { AnimatedWrapper } from "@/components/shared/animated-wrapper";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/utils";
import { BookingModal } from "@/components/shared/booking-modal";

/**
 * BookCtaSection — Section 8
 *
 * A strong, clean CTA band. Brand blue background — the only section
 * on the page with a filled blue background.
 *
 * Design principle: visual weight of the colour IS the design.
 * No illustrations, no gradients, no patterns — just the message
 * and the action. White space does the heavy lifting.
 */
export function BookCtaSection() {
  const whatsappUrl = buildWhatsAppUrl(
    siteConfig.phone.whatsapp,
    "Hello Kavita Dental Clinic,\n\nI would like to book an appointment.\n\nPlease let me know the available timings.\n\nThank you."
  );

  return (
    <section
      id="book"
      className="py-24 md:py-32 bg-primary"
      aria-labelledby="cta-heading"
    >
      <div className="container-padded">
        <AnimatedWrapper className="flex flex-col items-center text-center gap-8 max-w-2xl mx-auto">

          {/* Message */}
          <div className="space-y-4">
            <h2
              id="cta-heading"
              className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight"
            >
              Ready to Book Your Visit?
            </h2>
            <p className="text-base md:text-lg text-blue-100/90 leading-relaxed max-w-md mx-auto">
              Our team is ready to welcome you. Booking takes less than a minute.
            </p>
          </div>

          {/* CTA */}
          <BookingModal>
            <Button
              size="lg"
              className="rounded-xl bg-white text-primary font-semibold px-9 text-[15px] h-12 hover:bg-blue-50 shadow-[0_2px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_28px_rgba(0,0,0,0.2)] transition-all duration-200 justify-center"
            >
              Book Appointment
            </Button>
          </BookingModal>

        </AnimatedWrapper>
      </div>
    </section>
  );
}
