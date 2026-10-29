"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  AMENITY_OPTIONS,
  CITY_OPTIONS,
  RATE_BAND_OPTIONS,
  SPACE_TYPE_OPTIONS,
  type AmenitySlug,
  type RateBand,
  type SpaceType,
} from "@/lib/data/spaces";
import { site } from "@/lib/data/site";
import { getRecaptchaSiteKey, getRecaptchaToken } from "@/lib/captcha";
import { useSaved } from "./SavedProvider";

export function ListSpaceForm() {
  const { addMyListing } = useSaved();
  const [spaceName, setSpaceName] = useState("");
  const [city, setCity] = useState("Nairobi");
  const [neighbourhood, setNeighbourhood] = useState("");
  const [type, setType] = useState<SpaceType>("rehearsal");
  const [rateBand, setRateBand] = useState<RateBand>("standard");
  const [rateDisplay, setRateDisplay] = useState("");
  const [areaSqm, setAreaSqm] = useState("");
  const [capacity, setCapacity] = useState("");
  const [powerBackup, setPowerBackup] = useState("");
  const [amenities, setAmenities] = useState<AmenitySlug[]>([
    "acoustic-treatment",
    "backup-power",
  ]);
  const [gearSummary, setGearSummary] = useState("");
  const [houseRules, setHouseRules] = useState("");
  const [hostName, setHostName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [agreeRules, setAgreeRules] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState(""); // honeypot

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState<string | null>(null);

  const hasRecaptcha = Boolean(getRecaptchaSiteKey());

  const toggleAmenity = (slug: AmenitySlug) => {
    setAmenities((prev) =>
      prev.includes(slug) ? prev.filter((item) => item !== slug) : [...prev, slug],
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!agreeRules) {
      setErrorMsg(
        "Please confirm that you manage this workspace and understand Apollos Studios is an independent directory.",
      );
      return;
    }

    setSubmitting(true);
    try {
      const captchaToken = await getRecaptchaToken("list_space");
      const res = await fetch("/api/list-space", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          spaceName,
          city,
          neighbourhood,
          type,
          rateBand,
          rateDisplay,
          areaSqm,
          capacity,
          powerBackup,
          amenities,
          gearSummary,
          houseRules,
          hostName,
          contactEmail,
          whatsapp,
          websiteUrl,
          captchaToken,
        }),
      });

      const data = (await res.json()) as {
        ok?: boolean;
        error?: string;
        referenceId?: string;
      };

      if (!res.ok || !data.ok) {
        setErrorMsg(
          data.error || "Unable to submit your space right now. Please check all required fields.",
        );
        setSubmitting(false);
        return;
      }

      addMyListing({
        spaceName: spaceName.trim(),
        city: city.trim(),
        neighbourhood: neighbourhood.trim(),
        type,
        rateBand,
        rateDisplay: rateDisplay.trim(),
        powerBackup: powerBackup.trim(),
        hostName: hostName.trim(),
        contactEmail: contactEmail.trim(),
        whatsapp: whatsapp.trim(),
        summary: gearSummary.trim().slice(0, 220),
      });

      setReferenceId(data.referenceId || "AS-LISTING");
    } catch {
      setErrorMsg("Network error while submitting. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (referenceId) {
    return (
      <div className="bg-light p-4 p-md-5 border" role="status" aria-live="polite">
        <span className="ws-badge ws-badge--yellow mb-3">
          Reference {referenceId}
        </span>
        <h3 className="h4 mb-3" style={{ fontWeight: 700 }}>
          Thank you. Your workspace submission is in editorial review.
        </h3>
        <p className="mb-3">
          Our desk verifies room equipment, neighbourhood details and direct host contact before publishing listings across Apollos Studios. A local copy has also been saved under <strong>My Listings</strong> in this browser.
        </p>
        <p className="mb-4" style={{ fontSize: "13px", color: "#555" }}>
          {site.disclaimer}
        </p>
        <div className="d-flex flex-wrap" style={{ gap: "12px" }}>
          <Link href="/saved" className="btn btn-primary py-2 px-4">
            View My Listings
          </Link>
          <Link href="/spaces" className="btn btn-black py-2 px-4">
            Browse Directory
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-light p-4 p-md-5 contact-form border" noValidate>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label htmlFor="ws-hp-list">Leave this field blank</label>
        <input
          id="ws-hp-list"
          type="text"
          name="websiteUrl"
          tabIndex={-1}
          autoComplete="off"
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
        />
      </div>

      <h3 className="h4 mb-2" style={{ fontWeight: 700 }}>
        Workspace &amp; Equipment Details
      </h3>
      <p className="mb-4" style={{ fontSize: "14px", color: "#555" }}>
        Be specific about room dimensions, SPL boundaries and backup power so artists know what to expect before messaging you.
      </p>

      {errorMsg ? (
        <div
          className="p-3 mb-4"
          role="alert"
          style={{
            background: "#fff5f5",
            borderLeft: "4px solid #c53030",
            color: "#742a2a",
            fontSize: "14px",
          }}
        >
          {errorMsg}
        </div>
      ) : null}

      <div className="row">
        <div className="col-md-6 form-group">
          <label htmlFor="list-space-name" style={{ fontWeight: 600, color: "#000" }}>
            Space / Studio Name *
          </label>
          <input
            id="list-space-name"
            type="text"
            required
            maxLength={120}
            className="form-control"
            placeholder="e.g. Kileleshwa Rhythm & Vocal Room"
            value={spaceName}
            onChange={(e) => setSpaceName(e.target.value)}
          />
        </div>

        <div className="col-md-6 form-group">
          <label htmlFor="list-city" style={{ fontWeight: 600, color: "#000" }}>
            City *
          </label>
          <input
            id="list-city"
            list="apollos-cities-datalist"
            type="text"
            required
            maxLength={80}
            className="form-control"
            placeholder="e.g. Nairobi, Lagos, Accra, Kigali..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <datalist id="apollos-cities-datalist">
            {CITY_OPTIONS.map((c) => (
              <option key={c.value} value={`${c.label}, ${c.country}`} />
            ))}
          </datalist>
        </div>

        <div className="col-md-6 form-group">
          <label htmlFor="list-neighbourhood" style={{ fontWeight: 600, color: "#000" }}>
            Neighbourhood / Area *
          </label>
          <input
            id="list-neighbourhood"
            type="text"
            required
            maxLength={120}
            className="form-control"
            placeholder="e.g. Kilimani off Argwings Kodhek (no door numbers)"
            value={neighbourhood}
            onChange={(e) => setNeighbourhood(e.target.value)}
          />
        </div>

        <div className="col-md-6 form-group">
          <label htmlFor="list-type" style={{ fontWeight: 600, color: "#000" }}>
            Primary Space Type *
          </label>
          <select
            id="list-type"
            className="form-control"
            value={type}
            onChange={(e) => setType(e.target.value as SpaceType)}
          >
            {SPACE_TYPE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-6 form-group">
          <label htmlFor="list-rate-band" style={{ fontWeight: 600, color: "#000" }}>
            Rate Band *
          </label>
          <select
            id="list-rate-band"
            className="form-control"
            value={rateBand}
            onChange={(e) => setRateBand(e.target.value as RateBand)}
          >
            {RATE_BAND_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label} ({opt.hint})
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-6 form-group">
          <label htmlFor="list-rate-display" style={{ fontWeight: 600, color: "#000" }}>
            Typical Hourly &amp; Day Rate (Local Currency) *
          </label>
          <input
            id="list-rate-display"
            type="text"
            required
            maxLength={100}
            className="form-control"
            placeholder="e.g. KES 2,000/hr or KES 12,000/day"
            value={rateDisplay}
            onChange={(e) => setRateDisplay(e.target.value)}
          />
        </div>

        <div className="col-md-4 form-group">
          <label htmlFor="list-area" style={{ fontWeight: 600, color: "#000" }}>
            Approx. Floor Area (sqm)
          </label>
          <input
            id="list-area"
            type="number"
            min={4}
            max={2000}
            className="form-control"
            placeholder="e.g. 34"
            value={areaSqm}
            onChange={(e) => setAreaSqm(e.target.value)}
          />
        </div>

        <div className="col-md-8 form-group">
          <label htmlFor="list-capacity" style={{ fontWeight: 600, color: "#000" }}>
            Comfortable Capacity *
          </label>
          <input
            id="list-capacity"
            type="text"
            required
            maxLength={80}
            className="form-control"
            placeholder="e.g. Up to 6 musicians, or 4 makers at benches"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />
        </div>

        <div className="col-md-12 form-group">
          <label htmlFor="list-power" style={{ fontWeight: 600, color: "#000" }}>
            Power Backup &amp; Load-In Setup *
          </label>
          <input
            id="list-power"
            type="text"
            required
            maxLength={220}
            className="form-control"
            placeholder="e.g. 5kVA pure-sine solar inverter; ground-floor courtyard load-in"
            value={powerBackup}
            onChange={(e) => setPowerBackup(e.target.value)}
          />
        </div>
      </div>

      <div className="form-group">
        <span className="d-block mb-2" style={{ fontWeight: 600, color: "#000" }}>
          Included Amenities
        </span>
        <div className="d-flex flex-wrap" style={{ gap: "8px" }}>
          {AMENITY_OPTIONS.map((am) => {
            const active = amenities.includes(am.value);
            return (
              <button
                key={am.value}
                type="button"
                className={`ws-chip${active ? " is-active" : ""}`}
                aria-pressed={active}
                onClick={() => toggleAmenity(am.value)}
              >
                {active ? <span className="icon-check" aria-hidden="true" /> : null}
                <span>{am.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="list-gear" style={{ fontWeight: 600, color: "#000" }}>
          Included Equipment &amp; What Artists Should Bring *
        </label>
        <textarea
          id="list-gear"
          rows={4}
          required
          maxLength={1200}
          className="form-control"
          placeholder="List drum kit/amps, mics, easels, wheels or benches included, plus items guests should pack..."
          value={gearSummary}
          onChange={(e) => setGearSummary(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="list-rules" style={{ fontWeight: 600, color: "#000" }}>
          House Rules &amp; Evening Curfew *
        </label>
        <textarea
          id="list-rules"
          rows={3}
          required
          maxLength={800}
          className="form-control"
          placeholder="e.g. Brass/drum curfew 21:30, smoke-free booth, 10-minute pack-down buffer..."
          value={houseRules}
          onChange={(e) => setHouseRules(e.target.value)}
        />
      </div>

      <hr className="my-4" />
      <h3 className="h5 mb-3" style={{ fontWeight: 700 }}>
        Direct Host Contact
      </h3>

      <div className="row">
        <div className="col-md-4 form-group">
          <label htmlFor="list-host-name" style={{ fontWeight: 600, color: "#000" }}>
            Host / Collective Name *
          </label>
          <input
            id="list-host-name"
            type="text"
            required
            maxLength={120}
            className="form-control"
            placeholder="Your name or collective"
            value={hostName}
            onChange={(e) => setHostName(e.target.value)}
          />
        </div>

        <div className="col-md-4 form-group">
          <label htmlFor="list-email" style={{ fontWeight: 600, color: "#000" }}>
            Booking Enquiry Email *
          </label>
          <input
            id="list-email"
            type="email"
            required
            maxLength={160}
            className="form-control"
            placeholder="studio@example.com"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
          />
        </div>

        <div className="col-md-4 form-group">
          <label htmlFor="list-whatsapp" style={{ fontWeight: 600, color: "#000" }}>
            WhatsApp Number (Optional)
          </label>
          <input
            id="list-whatsapp"
            type="tel"
            maxLength={40}
            className="form-control"
            placeholder="e.g. +254 7XX XXX XXX"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
        </div>
      </div>

      <div className="form-group mt-2">
        <label
          htmlFor="list-agree"
          className="d-flex align-items-start"
          style={{ gap: "10px", cursor: "pointer", color: "#333", fontSize: "14px" }}
        >
          <input
            id="list-agree"
            type="checkbox"
            checked={agreeRules}
            onChange={(e) => setAgreeRules(e.target.checked)}
            style={{ marginTop: "5px", minWidth: "18px", minHeight: "18px" }}
          />
          <span>
            I manage or have permission to list this space, our house rules comply with local laws, and I understand Apollos Studios is an independent directory that does not process bookings or payments.
          </span>
        </label>
      </div>

      {hasRecaptcha ? (
        <p className="mb-3" style={{ fontSize: "12px", color: "#666" }}>
          Protected by Google reCAPTCHA to prevent automated spam submissions.
        </p>
      ) : null}

      <div className="form-group mb-0">
        <button
          type="submit"
          className="btn btn-primary py-3 px-5"
          disabled={submitting}
        >
          {submitting ? "Submitting Space..." : "Submit Space Listing"}
        </button>
      </div>
    </form>
  );
}
