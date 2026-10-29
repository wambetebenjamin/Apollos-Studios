import type { Metadata } from "next";
import { site } from "@/lib/data/site";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Apollos Studios handles contact messages, space submissions, browser cookies and local saved preferences.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="Plain-language details on what we store, what stays in your browser and how to request removal."
        breadcrumbs={[{ label: "Privacy Policy" }]}
        backgroundImage="/images/page-banner.jpg"
      />

      <section className="ftco-section">
        <div className="container" style={{ maxWidth: "54rem" }}>
          <p className="mb-4" style={{ fontSize: "13px", color: "#555" }}>
            Last updated: October 2026
          </p>

          <h2 className="h4 mb-3" style={{ fontWeight: 700 }}>
            1. Minimal Data Principle
          </h2>
          <p className="mb-4" style={{ color: "#333" }}>
            Apollos Studios operates an independent creative workspace directory. You can browse every space, city guide and host tip without creating an account, logging in or sharing personal data.
          </p>

          <h2 className="h4 mb-3" style={{ fontWeight: 700 }}>
            2. Local Browser Storage &amp; Preferences
          </h2>
          <p className="mb-2" style={{ color: "#333" }}>
            We store three functional keys locally on your device so the site works smoothly without tracking profiles:
          </p>
          <ul className="mb-4" style={{ paddingLeft: "20px", color: "#333" }}>
            <li className="mb-2">
              <code>{site.cookieConsentKey}</code>: Remembers whether you accepted or limited cookie preferences so the banner stays dismissed.
            </li>
            <li className="mb-2">
              <code>{site.localeCookieKey}</code>: Remembers your chosen interface language (English, Kiswahili or Français).
            </li>
            <li className="mb-2">
              <code>{site.savedKey}</code>: Stores your Saved Spaces shortlist and local copies of My Listings inside your browser&apos;s <code>localStorage</code>. You can clear these at any time on the Saved &amp; My Listings page.
            </li>
          </ul>

          <h2 className="h4 mb-3" style={{ fontWeight: 700 }}>
            3. Contact &amp; Space Listing Submissions
          </h2>
          <p className="mb-4" style={{ color: "#333" }}>
            When you submit the Contact form or List a Space form, we process the name, email, optional WhatsApp number and workspace specifications you provide solely to verify and publish your directory listing or answer your enquiry. To prevent automated spam, forms use server rate limiting, a honeypot check and optional Google reCAPTCHA verification.
          </p>

          <h2 className="h4 mb-3" style={{ fontWeight: 700 }}>
            4. Direct Communication With Hosts
          </h2>
          <p className="mb-4" style={{ color: "#333" }}>
            When you email or WhatsApp a studio host using links on a listing page, you communicate directly with that independent host or email/messaging provider under their respective terms and privacy practices. Apollos Studios does not intercept or store private booking threads.
          </p>

          <h2 className="h4 mb-3" style={{ fontWeight: 700 }}>
            5. Updating or Removing Your Listing Data
          </h2>
          <p className="mb-0" style={{ color: "#333" }}>
            Hosts may request edits or full removal of a published directory entry at any time by emailing{" "}
            <a href={`mailto:${site.email}`} style={{ color: "#000", fontWeight: 600 }}>
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
