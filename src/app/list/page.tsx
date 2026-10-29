import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/data/site";
import { PageHero } from "@/components/PageHero";
import { ListSpaceForm } from "@/components/ListSpaceForm";

export const metadata: Metadata = {
  title: "List a Creative Space",
  description:
    "Submit your rehearsal room, recording nook, podcast booth, daylight art studio or maker workshop to the independent Apollos Studios directory.",
};

export default function ListSpacePage() {
  return (
    <>
      <PageHero
        title="List a Creative Space"
        subtitle="Share honest room specs, power backup details and house rules with working artists across your city."
        breadcrumbs={[{ label: "List a Space" }]}
        backgroundImage="/images/hosts-banner.jpg"
      />

      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <ListSpaceForm />
            </div>

            <div className="col-lg-4">
              <div className="p-4 bg-light border mb-4">
                <span className="ws-badge ws-badge--yellow mb-2">
                  Editorial Checklist
                </span>
                <h3 className="h5 mb-3" style={{ fontWeight: 700 }}>
                  What We Verify Before Publishing
                </h3>
                <ul style={{ paddingLeft: "18px", fontSize: "14px", color: "#333" }}>
                  <li className="mb-2">
                    <strong>Dedicated creative equipment:</strong> Real backline, acoustic panels, broadcast mics, easels, pottery wheels or heavy benches.
                  </li>
                  <li className="mb-2">
                    <strong>Honest power continuity:</strong> Clear statement of pure-sine inverter, UPS, solar bank or standby generator behaviour.
                  </li>
                  <li className="mb-2">
                    <strong>Transparent local rates:</strong> Published hourly and/or full-day rate band in local currency with zero hidden studio surcharges.
                  </li>
                  <li className="mb-0">
                    <strong>Privacy &amp; safety:</strong> We display your neighbourhood publicly, keeping exact street door numbers private until you confirm a session.
                  </li>
                </ul>
              </div>

              <div className="p-4 border bg-white mb-4">
                <h3 className="h6 mb-2" style={{ fontWeight: 700 }}>
                  Independent Directory Notice
                </h3>
                <p className="mb-3" style={{ fontSize: "13px", color: "#333" }}>
                  {site.disclaimer}
                </p>
                <Link href="/hosts" className="btn btn-outline-dark btn-sm py-2 px-3">
                  Read Host Tips
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
