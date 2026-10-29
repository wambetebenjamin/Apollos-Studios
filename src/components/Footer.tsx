"use client";

import Link from "next/link";
import { site, whatsappLink } from "@/lib/data/site";
import { useI18n } from "./I18nProvider";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12">
            <div className="ws-disclaimer-banner ws-disclaimer-banner--dark">
              <strong>{t("disclaimer.label")} </strong>
              {site.disclaimer}
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="ftco-footer-widget">
              <Link href="/" className="ws-footer-brand">
                Apollos<span>Studios</span>
              </Link>
              <p className="mb-2" style={{ fontWeight: 600, color: "#ffffff" }}>
                {site.tagline}
              </p>
              <p className="mb-4">{site.oneLiner}</p>
              <ul className="ftco-footer-social">
                <li>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact Apollos Studios on WhatsApp"
                    title="WhatsApp Desk"
                  >
                    <span className="icon-whatsapp" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    aria-label="Email Apollos Studios editorial desk"
                    title="Email Editorial Desk"
                  >
                    <span className="icon-envelope" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <Link
                    href="/spaces"
                    aria-label="Browse creative workspaces"
                    title="Browse Creative Spaces"
                  >
                    <span className="icon-music" aria-hidden="true" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-6 col-md-6 col-lg-2 mb-4">
            <div className="ftco-footer-widget">
              <h2 className="ftco-heading-2">{t("footer.directory")}</h2>
              <ul className="list-unstyled mb-0">
                <li>
                  <Link href="/spaces">{t("nav.spaces")}</Link>
                </li>
                <li>
                  <Link href="/types">{t("nav.types")}</Link>
                </li>
                <li>
                  <Link href="/cities">{t("nav.cities")}</Link>
                </li>
                <li>
                  <Link href="/hosts">{t("nav.hosts")}</Link>
                </li>
                <li>
                  <Link href="/list">{t("nav.list")}</Link>
                </li>
                <li>
                  <Link href="/saved">{t("nav.savedFull")}</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-6 col-md-6 col-lg-3 mb-4">
            <div className="ftco-footer-widget">
              <h2 className="ftco-heading-2">{t("footer.standards")}</h2>
              <ul className="list-unstyled mb-0">
                <li>
                  <Link href="/about">{t("nav.about")}</Link>
                </li>
                <li>
                  <Link href="/guidelines">{t("nav.guidelines")}</Link>
                </li>
                <li>
                  <Link href="/contact">{t("nav.contact")}</Link>
                </li>
                <li>
                  <Link href="/privacy">{t("footer.privacy")}</Link>
                </li>
                <li>
                  <Link href="/terms">{t("footer.terms")}</Link>
                </li>
                <li>
                  <a href="/image-credits.md">{t("footer.credits")}</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <div className="ftco-footer-widget">
              <h2 className="ftco-heading-2">{t("footer.questions")}</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon icon-map-marker" aria-hidden="true" />
                    <span className="text">{site.deskLocation}</span>
                  </li>
                  <li>
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="icon icon-whatsapp" aria-hidden="true" />
                      <span className="text">WhatsApp: {site.phoneDisplay}</span>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${site.email}`}>
                      <span className="icon icon-envelope" aria-hidden="true" />
                      <span className="text">{site.email}</span>
                    </a>
                  </li>
                </ul>
              </div>
              <Link href="/list" className="btn btn-primary btn-sm px-4 py-2">
                {t("nav.list")}
              </Link>
            </div>
          </div>
        </div>

        <div className="ws-footer-bottom">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-2 mb-lg-0 text-center text-lg-left">
              <p className="mb-0">
                Copyright &copy; {year} {site.name}. All rights reserved | Design
                adapted from Whitespace by{" "}
                <a
                  href="https://colorlib.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Colorlib
                </a>{" "}
                (CC BY 3.0) | Photography via{" "}
                <a
                  href="https://www.pexels.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pexels
                </a>
              </p>
            </div>
            <div className="col-lg-5 text-center text-lg-right">
              <span className="ws-footer-cities">
                Nairobi · Lagos · Accra · Johannesburg · Kampala · Dakar
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
