/**
 * lib/constants.ts
 * Single source of truth for all static content rendered across the site.
 * No strings should be hardcoded inside component files.
 */

import type { NavItem } from "@/types";

// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_LINKS: NavItem[] = [
  { label: "Home",       href: "/" },
  { label: "Doctors",    href: "/#doctors" },
  { label: "Treatments", href: "/treatments" },
  { label: "Reviews",    href: "/#reviews" },
  { label: "Gallery",    href: "/#gallery" },
  { label: "FAQs",       href: "/#faqs" },
  { label: "Contact",    href: "/#contact" },
];

// ─── Trust / Why Choose Us ───────────────────────────────────────────────────

export type TrustItem = {
  id: string;
  icon: string;        // Lucide icon name
  heading: string;
  description: string;
};

export const TRUST_ITEMS: TrustItem[] = [
  {
    id: "trusted",
    icon: "Shield",
    heading: "Trusted",
    description:
      "20+ years of dental care for families and individuals across Rohini, Delhi.",
  },
  {
    id: "professional",
    icon: "Award",
    heading: "Professional",
    description:
      "BDS-qualified doctors with modern equipment and rigorous clinical hygiene.",
  },
  {
    id: "affordable",
    icon: "IndianRupee",
    heading: "Affordable",
    description:
      "Transparent pricing with no hidden costs. Quality care within your reach.",
  },
];

// ─── Doctors ─────────────────────────────────────────────────────────────────

export type Doctor = {
  id: string;
  name: string;
  qualification: string;
  experience: string;
  bio: string;
  image: string;
  objectPositionClass?: string;
};

export const DOCTORS: Doctor[] = [
  {
    id: "dr-neha-kaushik",
    name: "Dr. Neha Kaushik",
    qualification: "BDS",
    experience: "22+ Years",
    bio: "Dr. Neha Kaushik brings over two decades of clinical experience to every patient interaction. Her gentle approach and thorough care have made her a trusted name for families across Rohini.",
    image: "/images/dr neha.png",
    objectPositionClass: "object-top",
  },
  {
    id: "dr-praveen-kaushik",
    name: "Dr. Praveen Kaushik",
    qualification: "BDS",
    experience: "22+ Years",
    bio: "Dr. Praveen Kaushik combines precision and patience in every procedure. With 22+ years of practice, he specialises in restorative dentistry and complex dental rehabilitation.",
    image: "/images/Dr praveen.png",
    objectPositionClass: "object-top",
  },
];

// ─── Treatments ──────────────────────────────────────────────────────────────
// Exactly 7 as per product specification.

export type Treatment = {
  id: string;
  icon: string;         // Lucide icon name
  title: string;
  description: string;
  duration?: string;
  benefits?: string[];
};

export const TREATMENTS: Treatment[] = [
  {
    id: "root-canal",
    icon: "Activity",
    title: "Root Canal Treatment",
    description:
      "Pain-free RCT using modern rotary instruments and apex locators for faster, comfortable recovery.",
    duration: "45-60 minutes per session",
    benefits: [
      "Relieves severe tooth pain immediately",
      "Saves the natural tooth from extraction",
      "Prevents the spread of dental infection",
    ],
  },
  {
    id: "dental-implants",
    icon: "Anchor",
    title: "Dental Implants",
    description:
      "Permanent, natural-looking tooth replacements anchored securely into the jawbone for life.",
    duration: "Varies (Surgical phase: 1-2 hours)",
    benefits: [
      "Functions and looks like a natural tooth",
      "Prevents jawbone loss and preserves facial structure",
      "Durable, long-lasting permanent solution",
    ],
  },
  {
    id: "crowns-bridges",
    icon: "Crown",
    title: "Crowns & Bridges",
    description:
      "Durable ceramic and zirconia restorations that protect and rebuild damaged or missing teeth.",
    duration: "2 sessions (Prep and Fitting)",
    benefits: [
      "Restores normal chewing and speaking ability",
      "Protects weak or heavily decayed teeth",
      "Matches the exact shade of natural teeth",
    ],
  },
  {
    id: "dentures",
    icon: "Smile",
    title: "Dentures",
    description:
      "Custom-fitted full and partial dentures crafted for comfort, function, and a confident smile.",
    duration: "Multiple sessions (Impressions to Fitting)",
    benefits: [
      "Replaces multiple missing teeth affordably",
      "Improves facial muscle support and aesthetics",
      "Removable and easy to clean",
    ],
  },
  {
    id: "tooth-extraction",
    icon: "Scissors",
    title: "Tooth Extraction",
    description:
      "Safe, gentle extractions performed with precision to minimise discomfort and support fast healing.",
    duration: "30-45 minutes",
    benefits: [
      "Removes severely damaged or impacted teeth",
      "Alleviates pain and prevents crowding",
      "Performs painlessly under local anaesthesia",
    ],
  },
  {
    id: "scaling-cleaning",
    icon: "Sparkles",
    title: "Scaling & Teeth Cleaning",
    description:
      "Professional cleaning that removes tartar, brightens your smile, and protects long-term gum health.",
    duration: "30-45 minutes",
    benefits: [
      "Removes hardened plaque and tartar",
      "Prevents cavities and severe gum disease",
      "Eliminates bad breath and surface stains",
    ],
  },
  {
    id: "tooth-fillings",
    icon: "Paintbrush",
    title: "Tooth-Coloured Fillings",
    description:
      "Invisible composite fillings that restore decayed teeth while matching your natural shade.",
    duration: "30 minutes",
    benefits: [
      "Stops tooth decay from spreading further",
      "Blends invisibly with natural tooth enamel",
      "Restores the structural integrity of the tooth",
    ],
  },
  {
    id: "teeth-whitening",
    icon: "Sparkles",
    title: "Teeth Whitening",
    description:
      "Advanced clinical whitening treatments to lift deep stains and instantly brighten your smile.",
    duration: "45-60 minutes",
    benefits: [
      "Dramatically brightens smile by several shades",
      "Safe professional-grade bleaching agents",
      "Fast, immediate results in a single visit",
    ],
  },
  {
    id: "pediatric-dentistry",
    icon: "Smile",
    title: "Pediatric Dentistry",
    description:
      "Gentle, child-friendly dental care focusing on prevention, education, and comfortable treatments.",
    duration: "30 minutes",
    benefits: [
      "Creates a positive, fear-free dental experience",
      "Monitors proper jaw and tooth development",
      "Protects primary teeth with sealants and fluoride",
    ],
  },
  {
    id: "braces-aligners",
    icon: "Activity",
    title: "Braces & Aligners",
    description:
      "Orthodontic solutions including traditional braces and clear aligners to straighten misaligned teeth.",
    duration: "Ongoing (Monthly adjustments)",
    benefits: [
      "Corrects bite issues and crooked teeth",
      "Improves overall oral hygiene access",
      "Enhances facial profile and confidence",
    ],
  },
  {
    id: "smile-designing",
    icon: "Paintbrush",
    title: "Smile Designing",
    description:
      "Comprehensive cosmetic makeovers using veneers, crowns, and contouring for the perfect smile.",
    duration: "Varies based on treatment plan",
    benefits: [
      "Completely transforms smile aesthetics",
      "Custom-designed to match facial proportions",
      "Addresses multiple cosmetic flaws at once",
    ],
  },
  {
    id: "preventive-care",
    icon: "Shield", // Need to ensure Shield is imported in components that use ICON_MAP if not already. But ICON_MAP in treatments-section is local. I will update it.
    title: "Preventive Dental Care",
    description:
      "Routine check-ups, sealants, and fluoride treatments to maintain optimal oral health and catch issues early.",
    duration: "30 minutes",
    benefits: [
      "Identifies dental issues before they become severe",
      "Saves time and money on complex future treatments",
      "Maintains strong enamel and healthy gums",
    ],
  }
];

// ─── Reviews (Placeholders) ──────────────────────────────────────────────────

export type ReviewPlaceholder = {
  id: string;
  initials: string;
  name: string;        // Clearly marked placeholder
  rating: number;
  text: string;        // Clearly marked placeholder
  timeAgo: string;
};

export const REVIEWS_PLACEHOLDER: ReviewPlaceholder[] = [
  {
    id: "review-1",
    initials: "SM",
    name: "Suman Manon",
    rating: 5,
    text: "I recently had a chance to visit Dr. Neha in her clinic in Rohini Sec 24. She is very knowledgeable, professional and patiently answered all of my questions and guided me for the treatment. The service is good and efficient. I highly recommend her for any dental problems. Wishing her success and growth.",
    timeAgo: "11 months ago",
  },
  {
    id: "review-2",
    initials: "RK",
    name: "Rohit Kalra",
    rating: 5,
    text: "We had a great experience at Kavita Dental Clinic during my father's consultation. Dr. Neha was highly professional and provided excellent care. The clinic was clean, and the staff was friendly. We appreciate the efficient and effective service. Highly recommended for dental care.",
    timeAgo: "2 years ago",
  },
  {
    id: "review-3",
    initials: "SS",
    name: "Saarthak Saran",
    rating: 5,
    text: "Kavita Dental Clinic is one place for all your dental care. Doctor Neha is a very professional individual who really put all her best efforts while providing the treatment. I've got two RCTs done here and I can vouch for this clinic. Their fees are also very nominal.",
    timeAgo: "2 years ago",
  },
];

// ─── Gallery ─────────────────────────────────────────────────────────────────

export type GalleryItem = {
  id: string;
  category: string;
  label: string;
  aspectClass: string;  // Tailwind aspect ratio class
  image: string;
  objectPositionClass?: string;
};

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: "gallery-1", category: "Clinic Exterior", label: "Clinic Exterior", aspectClass: "aspect-[4/3]", image: "/images/clinic-exterior.webp", objectPositionClass: "object-center" },
  { id: "gallery-2", category: "Reception",       label: "Reception Area",  aspectClass: "aspect-[4/3]", image: "/images/reception 2.webp", objectPositionClass: "object-center" },
  { id: "gallery-3", category: "Dental Camp",     label: "Dental Camp",     aspectClass: "aspect-[4/3]", image: "/images/camp.webp", objectPositionClass: "object-center" },
  { id: "gallery-4", category: "Dental Chair",    label: "Dental Chair",    aspectClass: "aspect-[4/3]", image: "/images/treatment-room.webp", objectPositionClass: "object-center" },
  { id: "gallery-5", category: "Doctors at Work", label: "Doctors at Work", aspectClass: "aspect-[4/3]", image: "/images/treatment-chair.webp", objectPositionClass: "object-center" },
  { id: "gallery-6", category: "Doctors at Work", label: "Doctors at Work", aspectClass: "aspect-[4/3]", image: "/images/t2.webp", objectPositionClass: "object-[center_20%]" },
  { id: "gallery-7", category: "Equipment",       label: "Equipment",       aspectClass: "aspect-[4/3]", image: "/images/interior.jpg", objectPositionClass: "object-center" },
  { id: "gallery-8", category: "Patient Treatment",label: "Patient Treatment",aspectClass: "aspect-[4/3]", image: "/images/hero-treatment.webp", objectPositionClass: "object-[center_30%]" },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────
// Exactly 7 questions as per product specification.

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Do I need to book an appointment?",
    answer:
      "Booking an appointment is recommended to minimise your waiting time. However, we do our best to accommodate walk-in patients during clinic hours.",
  },
  {
    id: "faq-2",
    question: "What are your clinic timings?",
    answer:
      "We are open Monday to Saturday from 9:30 AM to 2:00 PM, and 5:00 PM to 8:30 PM. Sunday morning visits are available by appointment only (evening closed).",
  },
  {
    id: "faq-3",
    question: "Do you treat children?",
    answer:
      "Yes, we provide gentle, child-friendly dental care. Our doctors are experienced in handling young patients with patience and care, making their first dental visits as comfortable as possible.",
  },
  {
    id: "faq-4",
    question: "Is Root Canal Treatment painful?",
    answer:
      "Modern root canal treatment, when performed correctly, is no more uncomfortable than a routine filling. We use local anaesthesia and rotary endodontics to ensure the procedure is smooth and virtually pain-free.",
  },
  {
    id: "faq-5",
    question: "Do you accept walk-in patients?",
    answer:
      "Yes, we welcome walk-in patients subject to availability. To avoid long waits, we recommend calling ahead or booking an appointment in advance.",
  },
  {
    id: "faq-6",
    question: "Where is the clinic located?",
    answer:
      "Kavita Dental Clinic is located at GF-173, Pocket-13, Sector-24, Rohini, Delhi – 110085. Please refer to the map on this page or use the directions link for turn-by-turn navigation.",
  },
  {
    id: "faq-7",
    question: "How can I contact the clinic during an emergency?",
    answer:
      "For dental emergencies, please call us directly on our phone number or message us on WhatsApp. We will do our best to arrange an emergency appointment as quickly as possible.",
  },
  {
    id: "faq-8",
    question: "What is the consultation fee?",
    answer:
      "The consultation fee is ₹300. We accept Cash, UPI and all major Debit and Credit Cards.",
  },
  {
    id: "faq-9",
    question: "Which payment methods do you accept?",
    answer:
      "We accept Cash, UPI and all major Debit and Credit Cards.",
  },
];

// ─── Stats ───────────────────────────────────────────────────────────────────

export type StatItem = {
  value: string;
  suffix: string;
  label: string;
};

export const STATS: StatItem[] = [
  { value: "20", suffix: "+", label: "Years of Practice" },
  { value: "2",  suffix: "",  label: "Expert Dentists" },
  { value: "7",  suffix: "",  label: "Dental Treatments" },
];
