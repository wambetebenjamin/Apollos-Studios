export type Locale = "en" | "sw" | "fr";

export interface LocaleOption {
  code: Locale;
  label: string;
  native: string;
}

export const LOCALES: LocaleOption[] = [
  { code: "en", label: "EN", native: "English" },
  { code: "sw", label: "SW", native: "Kiswahili" },
  { code: "fr", label: "FR", native: "Français" },
];

export const site = {
  name: "Apollos Studios",
  tagline: "Space to make the work.",
  oneLiner:
    "Find rehearsal rooms, recording nooks, maker studios and creative workspaces across African cities.",
  disclaimer:
    "Independent directory only. We do not operate studios, take bookings or payments, or guarantee availability. Arrange directly with hosts. Respect house rules and local laws.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://apollos-studios.vercel.app",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "254112272061",
  phoneDisplay: "+254 112 272 061",
  email: "desk@apollosstudios.africa",
  deskLocation: "Kilimani Creative Desk, Nairobi, Kenya",
  cookieConsentKey: "apollos-studios-cookie-consent",
  localeCookieKey: "apollos-studios-locale",
  savedKey: "apollos-studios-saved",
  voice: {
    lang: "en-KE",
    rate: 0.96,
    pitch: 1.02,
  },
} as const;

export function whatsappLink(customMessage?: string): string {
  const digits = site.whatsappNumber.replace(/\D/g, "") || "254112272061";
  const text =
    customMessage ??
    "Hello Apollos Studios desk, I am looking for a creative workspace or listing details.";
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}
