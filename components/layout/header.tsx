"use client";

import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { ToothIcon } from "@/components/shared/tooth-icon";
import { MobileNav } from "./mobile-nav";
import { NAV_LINKS } from "@/lib/constants";
import { useScrollBehavior } from "@/hooks/use-scroll-behavior";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl, cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { BookingModal } from "@/components/shared/booking-modal";

/**
 * Header
 *
 * Sticky navbar with three behavioural states:
 * 1. At top: fully transparent, blends into the hero.
 * 2. Scrolled down: glass effect (white/blur, subtle border + shadow).
 * 3. Scrolling down past threshold: slides above viewport.
 * 4. Scrolling up: slides back into view.
 *
 * All transitions are CSS-based (not Framer Motion) for 60fps performance.
 */
export function Header() {
  const { scrolled, visible } = useScrollBehavior();
  const whatsappUrl = buildWhatsAppUrl(
    siteConfig.phone.whatsapp,
    "Hello Kavita Dental Clinic,\n\nI would like to book an appointment.\n\nPlease let me know the available timings.\n\nThank you."
  );

  return (
    <header
      className={cn(
        // Layout
        "fixed inset-x-0 top-0 z-50",
        // Transition
        "transition-all duration-300 ease-in-out",
        // Glass effect when scrolled
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-border/50 shadow-[0_1px_16px_rgba(0,0,0,0.05)]"
          : "bg-transparent border-b border-transparent",
        // Hide/show on scroll direction
        !visible && "-translate-y-full"
      )}
    >
      <div className="container-padded">
        <div className="flex h-16 md:h-20 items-center justify-between gap-6">

          {/* ── Logo ─────────────────────────────────────────────── */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0 group"
            aria-label="Kavita Dental Clinic — Home"
          >
            <ToothIcon
              className="w-[22px] h-[22px] shrink-0 text-primary transition-colors duration-200"
              strokeWidth={1.75}
            />
            <span className="text-[15px] font-semibold text-foreground tracking-tight leading-none">
              Kavita{" "}
              <span className="text-primary">Dental</span>{" "}
              Clinic
            </span>
          </Link>

          {/* ── Desktop Navigation ────────────────────────────────── */}
          <nav
            className="hidden md:flex items-center gap-7"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13.5px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── Actions ───────────────────────────────────────────── */}
          <div className="flex items-center gap-2">
            <BookingModal>
              <Button
                className="hidden sm:inline-flex rounded-lg text-[13.5px] font-medium px-5 h-[42px]"
              >
                Book Appointment
              </Button>
            </BookingModal>

            <a
              href="https://wa.me/919868387331"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center w-[42px] h-[42px] rounded-full bg-[#25D366] text-white hover:bg-[#20b958] transition-all duration-200 hover:scale-105 shadow-sm ml-1.5 mr-1"
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>

            {/* Mobile hamburger */}
            <MobileNav />
          </div>

        </div>
      </div>
    </header>
  );
}
