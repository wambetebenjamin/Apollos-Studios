"use client";

import React, { createContext, useCallback, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/lib/data/site";
import { getDict, type DictKey } from "@/lib/i18n";
import { localeCookieString } from "@/lib/locale-shared";

interface I18nContextValue {
  locale: Locale;
  setLocale: (next: Locale) => void;
  t: (key: DictKey) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const router = useRouter();

  const setLocale = useCallback(
    (next: Locale) => {
      setLocaleState(next);
      if (typeof document !== "undefined") {
        document.cookie = localeCookieString(next);
        document.documentElement.lang = next;
      }
      router.refresh();
    },
    [router],
  );

  const dict = getDict(locale);
  const t = useCallback((key: DictKey) => dict[key] ?? key, [dict]);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    const fallback = getDict("en");
    return {
      locale: "en",
      setLocale: () => undefined,
      t: (key: DictKey) => fallback[key] ?? key,
    };
  }
  return ctx;
}
