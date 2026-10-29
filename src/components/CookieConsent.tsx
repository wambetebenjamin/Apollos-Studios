"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/data/site";
import { useI18n } from "./I18nProvider";

export function CookieConsent() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const existing = window.localStorage.getItem(site.cookieConsentKey);
      if (!existing) {
        setVisible(true);
      }
    } catch {
      setVisible(false);
    }
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (visible) {
      document.body.classList.add("ws-cookie-open");
    } else {
      document.body.classList.remove("ws-cookie-open");
    }
    return () => {
      document.body.classList.remove("ws-cookie-open");
    };
  }, [visible]);

  const saveChoice = (choice: "accepted" | "essential") => {
    try {
      window.localStorage.getItem(site.cookieConsentKey);
      window.localStorage.setItem(site.cookieConsentKey, choice);
      const maxAge = 60 * 60 * 24 * 365;
      document.cookie = `${site.cookieConsentKey}=${choice}; path=/; max-age=${maxAge}; samesite=lax`;
    } catch {
      // ignore storage restrictions
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="ws-cookie-banner"
      role="region"
      aria-label={t("cookie.title")}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 mb-3 mb-lg-0">
            <p className="mb-1" style={{ color: "#fcd307", fontWeight: 700, fontSize: "14px" }}>
              {t("cookie.title")}
            </p>
            <p className="mb-0" style={{ fontSize: "13px" }}>
              {t("cookie.body")}{" "}
              <Link
                href="/privacy"
                style={{ color: "#fcd307", fontWeight: 600, textDecoration: "underline" }}
              >
                {t("cookie.learnMore")}
              </Link>
            </p>
          </div>
          <div
            className="col-lg-4 d-flex flex-wrap justify-content-lg-end"
            style={{ gap: "10px" }}
          >
            <button
              type="button"
              className="btn btn-primary btn-sm py-2 px-4"
              onClick={() => saveChoice("accepted")}
            >
              {t("cookie.accept")}
            </button>
            <button
              type="button"
              className="btn btn-white btn-sm py-2 px-4"
              onClick={() => saveChoice("essential")}
            >
              {t("cookie.essential")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
