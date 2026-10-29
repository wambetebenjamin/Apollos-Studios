import { site, type Locale } from "./data/site";

export function normalizeLocale(raw: string | undefined | null): Locale {
  if (raw === "sw" || raw === "fr" || raw === "en") return raw;
  return "en";
}

export function localeCookieString(locale: Locale): string {
  const maxAge = 60 * 60 * 24 * 365;
  return `${site.localeCookieKey}=${locale}; path=/; max-age=${maxAge}; samesite=lax`;
}
