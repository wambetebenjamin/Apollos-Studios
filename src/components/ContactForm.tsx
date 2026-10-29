"use client";

import React, { useState } from "react";
import { getRecaptchaSiteKey, getRecaptchaToken } from "@/lib/captcha";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Listing update or city suggestion");
  const [message, setMessage] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState(""); // honeypot

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [sentRef, setSentRef] = useState<string | null>(null);

  const hasRecaptcha = Boolean(getRecaptchaSiteKey());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSubmitting(true);

    try {
      const captchaToken = await getRecaptchaToken("contact_desk");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
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
          data.error || "Please check all fields and try sending your note again.",
        );
        setSubmitting(false);
        return;
      }

      setSentRef(data.referenceId || "AS-DESK");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setErrorMsg("Unable to reach the editorial desk right now. You can also email or WhatsApp us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (sentRef) {
    return (
      <div className="bg-light p-4 p-md-5 border" role="status" aria-live="polite">
        <span className="ws-badge ws-badge--yellow mb-3">
          Note Received · {sentRef}
        </span>
        <h3 className="h4 mb-2" style={{ fontWeight: 700 }}>
          Thank you for writing to the Apollos Studios desk.
        </h3>
        <p className="mb-4">
          We review directory corrections, host updates and new city recommendations every business day in Nairobi.
        </p>
        <button
          type="button"
          className="btn btn-black py-2 px-4"
          onClick={() => setSentRef(null)}
        >
          Send Another Message
        </button>
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
        <label htmlFor="ws-hp-contact">Leave this field blank</label>
        <input
          id="ws-hp-contact"
          type="text"
          name="websiteUrl"
          tabIndex={-1}
          autoComplete="off"
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
        />
      </div>

      <h3 className="h4 mb-2" style={{ fontWeight: 700 }}>
        Message the Editorial Desk
      </h3>
      <p className="mb-4" style={{ fontSize: "14px", color: "#555" }}>
        For studio availability or session pricing, please contact the host directly on each room&apos;s page. Use this desk form for listing edits, community questions or suggesting spaces.
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

      <div className="form-group">
        <label htmlFor="contact-name" style={{ fontWeight: 600, color: "#000" }}>
          Your Name *
        </label>
        <input
          id="contact-name"
          type="text"
          required
          maxLength={120}
          className="form-control"
          placeholder="Your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="contact-email" style={{ fontWeight: 600, color: "#000" }}>
          Your Email *
        </label>
        <input
          id="contact-email"
          type="email"
          required
          maxLength={160}
          className="form-control"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="contact-subject" style={{ fontWeight: 600, color: "#000" }}>
          Topic *
        </label>
        <select
          id="contact-subject"
          className="form-control"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="Listing update or rate change">Listing update or rate change</option>
          <option value="Suggest a city or studio collective">Suggest a city or studio collective</option>
          <option value="Report inaccurate listing details">Report inaccurate listing details</option>
          <option value="Press or community partnership">Press or community partnership</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="contact-message" style={{ fontWeight: 600, color: "#000" }}>
          Message *
        </label>
        <textarea
          id="contact-message"
          cols={30}
          rows={6}
          required
          maxLength={2000}
          className="form-control"
          placeholder="Share the studio name, city and how we can help..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      {hasRecaptcha ? (
        <p className="mb-3" style={{ fontSize: "12px", color: "#666" }}>
          Protected by Google reCAPTCHA against automated spam.
        </p>
      ) : null}

      <div className="form-group mb-0">
        <button
          type="submit"
          className="btn btn-primary py-3 px-5"
          disabled={submitting}
        >
          {submitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
