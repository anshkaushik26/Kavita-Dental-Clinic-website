import Link from "next/link";
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Navigation,
  IndianRupee,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedWrapper } from "@/components/shared/animated-wrapper";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl, cn } from "@/lib/utils";

type ContactRowProps = {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
};

function ContactRow({ icon, label, children }: ContactRowProps) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="mt-0.5 w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"
        aria-hidden="true"
      >
        {icon}
      </div>
      <div className="space-y-0.5 min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground/70">
          {label}
        </p>
        <div className="text-sm text-foreground leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

/**
 * ContactSection — Section 9
 *
 * Two-column layout on desktop:
 * Left — structured contact information with icons and clear labels.
 * Right — Google Maps embed placeholder (correct aspect ratio, ready for real iframe).
 *
 * All contact data pulled from config/site.ts — zero hardcoded strings.
 */
export function ContactSection() {
  const whatsappUrl = buildWhatsAppUrl(
    siteConfig.phone.whatsapp,
    "Hello Kavita Dental Clinic,\n\nI would like to book an appointment.\n\nPlease let me know the available timings.\n\nThank you."
  );

  return (
    <section
      id="contact"
      className="section-padding bg-background"
      aria-labelledby="contact-heading"
    >
      <div className="container-padded">

        {/* Heading */}
        <AnimatedWrapper>
          <SectionHeading
            label="Contact Us"
            heading="Visit Our Clinic"
            subheading="We're located in Sector 24, Rohini, Delhi. Walk-ins welcome."
            id="contact-heading"
          />
        </AnimatedWrapper>

        {/* Two Column Layout */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left — Contact Information */}
          <AnimatedWrapper className="space-y-6">

            <div className="space-y-6 bg-white rounded-2xl border border-border/70 p-8">

              {/* Address */}
              <ContactRow
                icon={<MapPin className="w-4 h-4 text-primary" strokeWidth={1.75} />}
                label="Address"
              >
                <address className="not-italic">
                  {siteConfig.address.street && (
                    <>{siteConfig.address.street},&nbsp;</>
                  )}
                  {siteConfig.address.area},{" "}
                  {siteConfig.address.city},{" "}
                  {siteConfig.address.state} &ndash; {siteConfig.address.pincode}
                </address>
              </ContactRow>

              <Separator className="bg-border/50" />

              {/* Phone */}
              <ContactRow
                icon={<Phone className="w-4 h-4 text-primary" strokeWidth={1.75} />}
                label="Phone"
              >
                <div className="flex flex-col gap-1.5">
                  <a
                    href={siteConfig.phone.href}
                    className="hover:text-primary transition-colors duration-150"
                    aria-label={`Call us at ${siteConfig.phone.display}`}
                  >
                    {siteConfig.phone.display}
                  </a>
                  <a
                    href={siteConfig.secondaryPhone.href}
                    className="hover:text-primary transition-colors duration-150"
                    aria-label={`Call us at ${siteConfig.secondaryPhone.display}`}
                  >
                    {siteConfig.secondaryPhone.display}
                  </a>
                </div>
              </ContactRow>

              <Separator className="bg-border/50" />

              {/* WhatsApp */}
              <ContactRow
                icon={<MessageCircle className="w-4 h-4 text-green-600" strokeWidth={1.75} />}
                label="WhatsApp"
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline font-medium"
                  aria-label="Chat with us on WhatsApp (opens in new tab)"
                >
                  Message us on WhatsApp
                </a>
              </ContactRow>

              <Separator className="bg-border/50" />

              {/* Email */}
              <ContactRow
                icon={<Mail className="w-4 h-4 text-primary" strokeWidth={1.75} />}
                label="Email"
              >
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-primary transition-colors duration-150 break-all"
                  aria-label={`Email us at ${siteConfig.email}`}
                >
                  {siteConfig.email}
                </a>
              </ContactRow>

              <Separator className="bg-border/50" />

              {/* Hours */}
              <ContactRow
                icon={<Clock className="w-4 h-4 text-primary" strokeWidth={1.75} />}
                label="Clinic Hours"
              >
                <dl className="space-y-3 mt-0.5">
                  <div className="space-y-1">
                    <dt className="text-[13px] font-semibold text-foreground">Monday – Saturday</dt>
                    <div className="flex justify-between gap-4 text-[13px]">
                      <dd className="text-muted-foreground">Morning</dd>
                      <dd className="font-medium text-right">{siteConfig.hours.mon_sat.morning}</dd>
                    </div>
                    <div className="flex justify-between gap-4 text-[13px]">
                      <dd className="text-muted-foreground">Evening</dd>
                      <dd className="font-medium text-right">{siteConfig.hours.mon_sat.evening}</dd>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <dt className="text-[13px] font-semibold text-foreground">Sunday</dt>
                    <div className="flex justify-between gap-4 text-[13px]">
                      <dd className="text-muted-foreground">Morning</dd>
                      <dd className="font-medium text-right">{siteConfig.hours.sunday.morning}</dd>
                    </div>
                    <div className="flex justify-between gap-4 text-[13px]">
                      <dd className="text-muted-foreground">Evening</dd>
                      <dd className="font-medium text-right">{siteConfig.hours.sunday.evening}</dd>
                    </div>
                  </div>
                </dl>
              </ContactRow>

              <Separator className="bg-border/50" />

              {/* Consultation Fee */}
              <ContactRow
                icon={<IndianRupee className="w-4 h-4 text-primary" strokeWidth={1.75} />}
                label="Consultation Fee"
              >
                <div className="font-medium">
                  ₹300
                </div>
              </ContactRow>

            </div>

            {/* Directions CTA */}
            <ButtonLink
              href={siteConfig.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              className="w-full rounded-xl border-border h-11 font-medium hover:bg-muted/50 gap-2 justify-center"
              aria-label="Get directions to Kavita Dental Clinic (opens in Google Maps)"
            >
              <Navigation
                className="w-4 h-4"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              Get Directions
            </ButtonLink>

          </AnimatedWrapper>

          {/* Right — Map Embed */}
          <AnimatedWrapper delay={0.15}>
            <div
              className={cn(
                "w-full aspect-[4/3] lg:aspect-auto lg:min-h-[460px] h-full",
                "rounded-2xl overflow-hidden border border-border/70",
                "bg-slate-100 relative"
              )}
            >
              <iframe
                src={siteConfig.address.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 w-full h-full"
                title="Google Maps location of Kavita Dental Clinic"
              />
            </div>
          </AnimatedWrapper>

        </div>

      </div>
    </section>
  );
}
