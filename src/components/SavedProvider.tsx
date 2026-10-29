"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { site } from "@/lib/data/site";
import type { RateBand, SpaceType } from "@/lib/data/spaces";

export interface MySubmittedListing {
  id: string;
  createdAt: string;
  spaceName: string;
  city: string;
  neighbourhood: string;
  type: SpaceType;
  rateBand: RateBand;
  rateDisplay: string;
  powerBackup: string;
  hostName: string;
  contactEmail: string;
  whatsapp: string;
  summary: string;
}

interface StoredPayload {
  savedSlugs: string[];
  myListings: MySubmittedListing[];
}

interface SavedContextValue {
  hydrated: boolean;
  savedSlugs: string[];
  myListings: MySubmittedListing[];
  isSaved: (slug: string) => boolean;
  toggleSaved: (slug: string) => void;
  clearSavedSpaces: () => void;
  addMyListing: (listing: Omit<MySubmittedListing, "id" | "createdAt">) => MySubmittedListing;
  removeMyListing: (id: string) => void;
}

const SavedContext = createContext<SavedContextValue | null>(null);

function readStorage(): StoredPayload {
  if (typeof window === "undefined") {
    return { savedSlugs: [], myListings: [] };
  }
  try {
    const raw = window.localStorage.getItem(site.savedKey);
    if (!raw) return { savedSlugs: [], myListings: [] };
    const parsed = JSON.parse(raw) as Partial<StoredPayload>;
    return {
      savedSlugs: Array.isArray(parsed.savedSlugs)
        ? parsed.savedSlugs.filter((x): x is string => typeof x === "string")
        : [],
      myListings: Array.isArray(parsed.myListings) ? parsed.myListings : [],
    };
  } catch {
    return { savedSlugs: [], myListings: [] };
  }
}

export function SavedProvider({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false);
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);
  const [myListings, setMyListings] = useState<MySubmittedListing[]>([]);

  useEffect(() => {
    const initial = readStorage();
    setSavedSlugs(initial.savedSlugs);
    setMyListings(initial.myListings);
    setHydrated(true);
  }, []);

  const persist = useCallback((nextSlugs: string[], nextListings: MySubmittedListing[]) => {
    if (typeof window === "undefined") return;
    try {
      const payload: StoredPayload = {
        savedSlugs: nextSlugs,
        myListings: nextListings,
      };
      window.localStorage.setItem(site.savedKey, JSON.stringify(payload));
    } catch {
      // Ignore storage quota errors
    }
  }, []);

  const isSaved = useCallback(
    (slug: string) => savedSlugs.includes(slug),
    [savedSlugs],
  );

  const toggleSaved = useCallback(
    (slug: string) => {
      setSavedSlugs((prev) => {
        const next = prev.includes(slug)
          ? prev.filter((item) => item !== slug)
          : [...prev, slug];
        persist(next, myListings);
        return next;
      });
    },
    [myListings, persist],
  );

  const clearSavedSpaces = useCallback(() => {
    setSavedSlugs([]);
    persist([], myListings);
  }, [myListings, persist]);

  const addMyListing = useCallback(
    (input: Omit<MySubmittedListing, "id" | "createdAt">): MySubmittedListing => {
      const entry: MySubmittedListing = {
        ...input,
        id: `local-${Date.now().toString(36)}`,
        createdAt: new Date().toISOString(),
      };
      setMyListings((prev) => {
        const next = [entry, ...prev];
        persist(savedSlugs, next);
        return next;
      });
      return entry;
    },
    [persist, savedSlugs],
  );

  const removeMyListing = useCallback(
    (id: string) => {
      setMyListings((prev) => {
        const next = prev.filter((item) => item.id !== id);
        persist(savedSlugs, next);
        return next;
      });
    },
    [persist, savedSlugs],
  );

  return (
    <SavedContext.Provider
      value={{
        hydrated,
        savedSlugs,
        myListings,
        isSaved,
        toggleSaved,
        clearSavedSpaces,
        addMyListing,
        removeMyListing,
      }}
    >
      {children}
    </SavedContext.Provider>
  );
}

export function useSaved(): SavedContextValue {
  const ctx = useContext(SavedContext);
  if (!ctx) {
    return {
      hydrated: false,
      savedSlugs: [],
      myListings: [],
      isSaved: () => false,
      toggleSaved: () => undefined,
      clearSavedSpaces: () => undefined,
      addMyListing: (input) => ({
        ...input,
        id: "noop",
        createdAt: new Date().toISOString(),
      }),
      removeMyListing: () => undefined,
    };
  }
  return ctx;
}
