import { cookies } from "next/headers";
import { site, type Locale } from "./data/site";
import { normalizeLocale } from "./locale-shared";

export async function getServerLocale(): Promise<Locale> {
  try {
    const store = await cookies();
    return normalizeLocale(store.get(site.localeCookieKey)?.value);
  } catch {
    return "en";
  }
}
