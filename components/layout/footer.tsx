import Link from "next/link";
import { ToothIcon } from "@/components/shared/tooth-icon";
import { NAV_LINKS } from "@/lib/constants";
import { siteConfig } from "@/config/site";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Clock, Mail, ExternalLink } from "lucide-react";

/**
 * Footer
 *
 * Site-wide footer. Four columns on desktop, stacked on mobile.
 * Dark background — final visual punctuation of the page.
 *
 * Attribution: "Designed & Developed by Ansh Kaushik" — bottom right.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="container-padded py-16 md:py-20">

        {/* ── Main Grid ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Column 1 — Brand */}
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 w-fit group">
              <ToothIcon
                className="w-5 h-5 text-slate-300"
                strokeWidth={1.75}
              />
              <span className="text-[14px] font-semibold text-slate-200 tracking-tight">
                Kavita Dental Clinic
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 max-w-[220px]">
              {siteConfig.tagline}
              <br />
              Serving Rohini since {siteConfig.established}.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-slate-200 transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-slate-500" strokeWidth={1.5} />
                <span className="text-sm text-slate-400 leading-relaxed">
                  {siteConfig.address.street && `${siteConfig.address.street}, `}
                  {siteConfig.address.area},{" "}
                  {siteConfig.address.city} {siteConfig.address.pincode}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 shrink-0 text-slate-500" strokeWidth={1.5} />
                <a
                  href={siteConfig.phone.href}
                  className="text-sm text-slate-400 hover:text-slate-200 transition-colors duration-150"
                >
                  {siteConfig.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 shrink-0 text-slate-500" strokeWidth={1.5} />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-slate-400 hover:text-slate-200 transition-colors duration-150 break-all"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 — Hours */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Clinic Hours
            </h3>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-slate-500" strokeWidth={1.5} />
                <div className="space-y-1 text-sm text-slate-400">
                  <div>
                    <span className="text-slate-300 font-medium">Monday – Saturday</span>
                    <br />
                    <span className="block mt-1">Morning: {siteConfig.hours.mon_sat.morning}</span>
                    <span className="block">Evening: {siteConfig.hours.mon_sat.evening}</span>
                  </div>
                  <div>
                    <span className="text-slate-300 font-medium">Sunday</span>
                    <br />
                    <span className="block mt-1">Morning: {siteConfig.hours.sunday.morning}</span>
                    <span className="block">Evening: {siteConfig.hours.sunday.evening}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* ── Bottom Bar ────────────────────────────────────────────── */}
        <Separator className="my-10 bg-slate-800" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Designed &amp; Developed by{" "}
            <a
              href="https://www.linkedin.com/in/ansh-kaushik-b9114b347"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors duration-150 font-medium"
              aria-label="Ansh Kaushik on LinkedIn (opens in new tab)"
            >
              Ansh Kaushik
              <ExternalLink className="w-3 h-3" strokeWidth={1.75} aria-hidden="true" />
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
