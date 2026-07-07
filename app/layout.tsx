import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";
import "./globals.css";

// ─── Fonts ────────────────────────────────────────────────────────────────────

/** Inter — primary body font (all UI text, forms, labels, buttons) */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/** Playfair Display — display/heading font (h1, h2, hero headline) */
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

/** Geist Mono — code/mono font (dev use only, rarely visible in production) */
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "dental clinic Rohini",
    "dentist in Rohini Delhi",
    "teeth whitening Rohini",
    "root canal treatment Delhi",
    "braces Rohini",
    "dental implants Delhi",
    "affordable dentist Delhi",
    "Kavita Dental Clinic",
    "family dentist Rohini",
    "pediatric dentist Delhi",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteUrl("/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [absoluteUrl("/og-image.jpg")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48",  type: "image/x-icon" },
      { url: "/favicon.ico", sizes: "32x32",  type: "image/x-icon" },
      { url: "/favicon.ico", sizes: "16x16",  type: "image/x-icon" },
    ],
    // apple: "/apple-touch-icon.png"  — add a 180×180 PNG here for iOS home-screen
  },
  // manifest: "/site.webmanifest"  — add for PWA installability
  verification: {
    google: "RPr0f1FpC10w7twd",
  },
};

export const viewport: Viewport = {
  themeColor: "#1A56DB",
  width: "device-width",
  initialScale: 1,
};

// ─── Root Layout ─────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`
        ${inter.variable}
        ${playfairDisplay.variable}
        ${geistMono.variable}
        h-full
        antialiased
      `}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "Kavita Dental Clinic",
              "alternateName": "Kavita Dental Clinic Since 2005",
              "url": "https://kavitadentalclinic.in",
              "description": "Experienced, gentle, and affordable dental care for families across Rohini, Delhi since 2005.",
              "telephone": "+91-98683-87331",
              "email": "anshneha26@gmail.com",
              "foundingDate": "2005",
              "priceRange": "₹₹",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "GF-173, Pocket-13, Sector-24, Rohini",
                "addressLocality": "New Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110085",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "28.72754",
                "longitude": "77.08860"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                  "opens": "09:30",
                  "closes": "14:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                  "opens": "17:00",
                  "closes": "20:30"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "185"
              }
            })
          }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
