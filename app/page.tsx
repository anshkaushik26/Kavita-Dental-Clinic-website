import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { DoctorsSection } from "@/components/sections/doctors-section";
import { TreatmentsSection } from "@/components/sections/treatments-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { FaqSection } from "@/components/sections/faq-section";
import { BookCtaSection } from "@/components/sections/book-cta-section";
import { ContactSection } from "@/components/sections/contact-section";

/**
 * HomePage — app/page.tsx
 *
 * Composes all 10 sections of the homepage in specification order.
 * This file should remain lean — section logic lives in components/sections/.
 *
 * Section order (fixed, per product specification):
 *  1. Hero
 *  2. Why Choose Us
 *  3. Doctors
 *  4. Treatments
 *  5. Reviews
 *  6. Gallery (Inside Our Clinic)
 *  7. FAQ
 *  8. Book Appointment CTA
 *  9. Contact + Map
 * 10. Footer (rendered in layout or here)
 */
export default function HomePage() {
  return (
    <>
      <Header />

      <main id="main-content" className="flex-1">
        <HeroSection />
        <WhyChooseUsSection />
        <DoctorsSection />
        <TreatmentsSection />
        <ReviewsSection />
        <GallerySection />
        <FaqSection />
        <BookCtaSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
