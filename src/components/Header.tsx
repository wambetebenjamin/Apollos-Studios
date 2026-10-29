"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES } from "@/lib/data/site";
import { useI18n } from "./I18nProvider";
import { useSaved } from "./SavedProvider";

export function Header() {
  const pathname = usePathname() || "/";
  const { locale, setLocale, t } = useI18n();
  const { hydrated, savedSlugs, myListings } = useSaved();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  const savedTotal = hydrated ? savedSlugs.length + myListings.length : 0;

  useEffect(() => {
    setMobileOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setMoreOpen(false);
      }
    };
    const onClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const moreActive =
    isActive("/about") || isActive("/guidelines") || isActive("/contact");

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
      id="ftco-navbar"
      aria-label="Main navigation"
    >
      <div className="container">
        <Link className="navbar-brand" href="/">
          Apollos<span>Studios</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="ftco-nav"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span className="oi oi-menu" aria-hidden="true" /> {t("nav.menu")}
        </button>

        <div
          className={`collapse navbar-collapse${mobileOpen ? " show" : ""}`}
          id="ftco-nav"
        >
          <ul className="navbar-nav ml-auto align-items-lg-center">
            <li className={`nav-item${isActive("/") ? " active" : ""}`}>
              <Link href="/" className="nav-link">
                {t("nav.home")}
              </Link>
            </li>
            <li className={`nav-item${isActive("/spaces") ? " active" : ""}`}>
              <Link href="/spaces" className="nav-link">
                {t("nav.spaces")}
              </Link>
            </li>
            <li className={`nav-item${isActive("/types") ? " active" : ""}`}>
              <Link href="/types" className="nav-link">
                {t("nav.types")}
              </Link>
            </li>
            <li className={`nav-item${isActive("/cities") ? " active" : ""}`}>
              <Link href="/cities" className="nav-link">
                {t("nav.cities")}
              </Link>
            </li>
            <li className={`nav-item${isActive("/hosts") ? " active" : ""}`}>
              <Link href="/hosts" className="nav-link">
                {t("nav.hosts")}
              </Link>
            </li>
            <li className={`nav-item${isActive("/saved") ? " active" : ""}`}>
              <Link href="/saved" className="nav-link">
                {t("nav.saved")}
                {savedTotal > 0 ? (
                  <span className="ws-saved-count">{savedTotal}</span>
                ) : null}
              </Link>
            </li>

            <li
              ref={dropdownRef}
              className={`nav-item ws-nav-dropdown${moreOpen ? " is-open" : ""}${
                moreActive ? " active" : ""
              }`}
            >
              <button
                type="button"
                className="nav-link"
                aria-expanded={moreOpen}
                aria-haspopup="true"
                onClick={() => setMoreOpen((prev) => !prev)}
                style={{
                  background: "transparent",
                  border: 0,
                  cursor: "pointer",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                {t("nav.more")}{" "}
                <span
                  className="icon-angle-down"
                  aria-hidden="true"
                  style={{ marginLeft: 3 }}
                />
              </button>
              <div className="ws-nav-dropdown-menu" role="menu">
                <Link href="/about" role="menuitem">
                  {t("nav.about")}
                </Link>
                <Link href="/guidelines" role="menuitem">
                  {t("nav.guidelines")}
                </Link>
                <Link href="/contact" role="menuitem">
                  {t("nav.contact")}
                </Link>
                <Link href="/privacy" role="menuitem">
                  {t("footer.privacy")}
                </Link>
                <Link href="/terms" role="menuitem">
                  {t("footer.terms")}
                </Link>
              </div>
            </li>

            <li className="nav-item d-flex align-items-center px-lg-2 py-2 py-lg-0">
              <div className="ws-lang-group" role="group" aria-label="Language switcher">
                {LOCALES.map((opt) => (
                  <button
                    key={opt.code}
                    type="button"
                    className={`ws-lang-btn${locale === opt.code ? " is-active" : ""}`}
                    aria-pressed={locale === opt.code}
                    title={opt.native}
                    onClick={() => setLocale(opt.code)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </li>

            <li className="nav-item cta">
              <Link href="/list" className="nav-link">
                <span>{t("nav.list")}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
