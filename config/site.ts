/**
 * config/site.ts
 *
 * Single source of truth for all site-wide metadata and clinic information.
 * Import this wherever you need clinic details — never hardcode strings in components.
 */

export type SiteConfig = {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  phone: {
    display: string;
    href: string;
    whatsapp: string;
  };
  secondaryPhone: {
    display: string;
    href: string;
  };
  email: string;
  address: {
    street: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    googleMapsUrl: string;
    googleMapsEmbed: string;
  };
  hours: {
    mon_sat: { morning: string; evening: string };
    sunday: { morning: string; evening: string };
  };
  social: {
    instagram?: string;
    facebook?: string;
    whatsapp: string;
  };
  established: number;
};

export const siteConfig: SiteConfig = {
  name: "Kavita Dental Clinic",
  shortName: "Kavita Dental",
  tagline: "Your Smile, Our Priority.",
  description:
    "Serving Rohini since 2005 with experienced, gentle, and affordable dental care. Expert treatments including teeth whitening, root canals, braces, implants, and more.",
  url: "https://kavitadentalclinic.in", // TODO: Update with final production domain

  ogImage: "/og-image.jpg",

  phone: {
    display: "+91 98683 87331",
    href: "tel:+919868387331",
    whatsapp: "919868387331",
  },
  secondaryPhone: {
    display: "+91 80761 49078",
    href: "tel:+918076149078",
  },

  email: "anshneha26@gmail.com",

  address: {
    street: "GF-173, Pocket-13",
    area: "Sector-24, Rohini",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110085",
    googleMapsUrl: "https://maps.app.goo.gl/DvzucS2JyEj7i1YZ9", 
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.7324730336!2d77.08859731108335!3d28.72754007551119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d06c7df78667d%3A0xbad6ffc80fc4e108!2sKavita%20Dental%20Clinic(%20SINCE%202005)!5e0!3m2!1sen!2sin!4v1783264129228!5m2!1sen!2sin",
  },

  hours: {
    mon_sat: { morning: "9:30 AM – 2:00 PM", evening: "5:00 PM – 8:30 PM" },
    sunday: { morning: "By Appointment", evening: "Closed" },
  },

  social: {
    instagram: undefined,             // TODO: Add Instagram handle
    facebook: undefined,              // TODO: Add Facebook page URL
    whatsapp: "919868387331",
  },

  established: 2005,
};
