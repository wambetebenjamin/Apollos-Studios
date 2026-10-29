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
        <div className="row mb-4">
          <div className="col-12">
            <div className="ws-disclaimer-banner ws-disclaimer-banner--dark">
              <strong>{t("disclaimer.label")} </strong>
              {site.disclaimer}
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">{site.name}</h2>
              <p>{site.oneLiner}</p>
              <p className="mb-3" style={{ color: "rgba(255,255,255,0.82)" }}>
                {site.tagline}
              </p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                <li className="ftco-animate">
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact Apollos Studios on WhatsApp"
                  >
                    <span className="icon-whatsapp" aria-hidden="true" />
                  </a>
                </li>
                <li className="ftco-animate">
                  <a
                    href={`mailto:${site.email}`}
                    aria-label="Email Apollos Studios editorial desk"
                  >
                    <span className="icon-envelope" aria-hidden="true" />
                  </a>
                </li>
                <li className="ftco-animate">
                  <Link href="/spaces" aria-label="Browse creative workspaces">
                    <span className="icon-music" aria-hidden="true" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">{t("footer.directory")}</h2>
              <ul className="list-unstyled">
                <li>
                  <Link href="/spaces" className="py-2 d-block">
                    {t("nav.spaces")}
                  </Link>
                </li>
                <li>
                  <Link href="/types" className="py-2 d-block">
                    {t("nav.types")}
                  </Link>
                </li>
                <li>
                  <Link href="/cities" className="py-2 d-block">
                    {t("nav.cities")}
                  </Link>
                </li>
                <li>
                  <Link href="/hosts" className="py-2 d-block">
                    {t("nav.hosts")}
                  </Link>
                </li>
                <li>
                  <Link href="/list" className="py-2 d-block">
                    {t("nav.list")}
                  </Link>
                </li>
                <li>
                  <Link href="/saved" className="py-2 d-block">
                    {t("nav.saved")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">{t("footer.standards")}</h2>
              <ul className="list-unstyled">
                <li>
                  <Link href="/about" className="py-2 d-block">
                    {t("nav.about")}
                  </Link>
                </li>
                <li>
                  <Link href="/guidelines" className="py-2 d-block">
                    {t("nav.guidelines")}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="py-2 d-block">
                    {t("nav.contact")}
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="py-2 d-block">
                    {t("footer.privacy")}
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="py-2 d-block">
                    {t("footer.terms")}
                  </Link>
                </li>
                <li>
                  <a href="/image-credits.md" className="py-2 d-block">
                    {t("footer.credits")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-4">
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
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center">
            <p>
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
        </div>
      </div>
    </footer>
  );
}
