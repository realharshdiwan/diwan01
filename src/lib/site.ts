export const SITE = {
  name: "Diwan Mercantile",
  tagline: "Independent software studio, Bengaluru",
  description:
    "Diwan Mercantile is an independent software studio in Bengaluru. We build web systems, internal tools, and automation for the part of the business nobody photographs.",
  url: "https://www.diwanmercantile.in",
  locale: "en_IN",
  contactEmail: "diwanmercantileindia@gmail.com",
  basedIn: "Bengaluru, Karnataka",
} as const;

/** Publishable identifiers only. Never PAN, bank, mobile, or address. */
export const REGISTRATION = {
  enterpriseType: "Micro enterprise",
  gstin: "29KBKPD1056A1ZW",
  udyam: "UDYAM-KR-03-0729192",
  locality: "Bengaluru, Karnataka",
} as const;

export const NAV = [
  { label: "Studio", href: "#studio" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Contact", href: "#contact" },
] as const;
