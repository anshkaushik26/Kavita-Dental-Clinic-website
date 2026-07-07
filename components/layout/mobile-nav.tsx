"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ToothIcon } from "@/components/shared/tooth-icon";
import { BookingModal } from "@/components/shared/booking-modal";
import { NAV_LINKS } from "@/lib/constants";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl, cn } from "@/lib/utils";

/**
 * MobileNav
 *
 * Hamburger button that opens a right-side Sheet drawer containing
 * the full navigation. Accessible: sr-only SheetTitle, focus-trapping,
 * and ESC-to-close via the Base UI Dialog primitive.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const whatsappUrl = buildWhatsAppUrl(
    siteConfig.phone.whatsapp,
    "Hello Kavita Dental Clinic,\n\nI would like to book an appointment.\n\nPlease let me know the available timings.\n\nThank you."
  );

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* SheetTrigger renders as <button> by default in Base UI */}
      <SheetTrigger
        className={cn(
          "md:hidden inline-flex items-center justify-center",
          "h-9 w-9 rounded-lg",
          "text-muted-foreground hover:text-foreground hover:bg-muted",
          "transition-colors duration-150",
          "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
        )}
        aria-label="Open navigation menu"
      >
        <Menu className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
      </SheetTrigger>

      <SheetContent side="right" className="w-72 p-0 flex flex-col">
        <SheetHeader className="px-6 pt-6 pb-4 border-b border-border">
          {/* Visually hidden title for screen readers */}
          <SheetTitle className="sr-only">Navigation</SheetTitle>

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5"
            aria-label="Home"
          >
            <ToothIcon className="w-5 h-5 text-primary" strokeWidth={1.75} />
            <span className="text-[14px] font-semibold text-foreground tracking-tight">
              Kavita <span className="text-primary">Dental</span> Clinic
            </span>
          </Link>
        </SheetHeader>

        <nav className="flex-1 px-3 py-4" aria-label="Mobile navigation">
          <ul className="space-y-0.5" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center px-3 py-3.5 rounded-lg",
                    "text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted",
                    "transition-colors duration-150 min-h-[44px]"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className="px-6 py-6 border-t border-border"
        >
          <BookingModal>
            <Button
              className="w-full rounded-lg font-medium justify-center"
            >
              Book Appointment
            </Button>
          </BookingModal>
        </div>
      </SheetContent>
    </Sheet>
  );
}
