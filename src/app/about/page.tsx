import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/data/site";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Apollos Studios",
  description:
    "Why Apollos Studios exists: an artist-respectful, independent directory of rehearsal rooms, recording nooks, art studios and maker workshops across African cities.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Apollos Studios"
        subtitle="Practical, artist-respectful infrastructure for people making music, audio, visual art and physical objects."
        breadcrumbs={[{ label: "About" }]}
        backgroundImage="/images/about-studio.jpg"
      />

      <section className="ftco-section">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div
              className="col-lg-5 mb-4 mb-lg-0"
              style={{
                backgroundImage: "url('/images/about-studio.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "380px",
              }}
              role="img"
              aria-label="Working music rehearsal and recording space"
            />
            <div className="col-lg-7 pl-lg-5">
              <div className="heading-section mb-4">
                <span className="subheading">Our Purpose</span>
                <h2 className="mb-3">{site.tagline}</h2>
              </div>
              <p style={{ color: "#333" }}>
                Across Nairobi, Lagos, Accra, Johannesburg, Kampala and Dakar, extraordinary music, storytelling, painting and craft are often made against steep logistical friction: apartments too thin-walled for brass or drums, diesel generator hum bleeding into condenser microphones, or twelve-month commercial studio leases priced far out of reach for independent artists.
              </p>
              <p style={{ color: "#333" }}>
                At the same time, hundreds of musician-run rehearsal annexes, podcast desks, ceramic workshops and north-light painting bays sit quiet on Tuesday mornings or between client projects. Until now, those rooms mostly travelled by closed word-of-mouth threads.
              </p>
              <p className="mb-0" style={{ color: "#333" }}>
                <strong>Apollos Studios</strong> bridges that gap as an open, commission-free directory. We document the practical details working creatives actually ask first: room square metres, load-in ramps, inverter backup, what stays in the room, what you bring, and evening neighbour curfews.
              </p>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-md-4 mb-4 d-flex">
              <div className="p-4 bg-light border w-100">
                <span className="ws-badge ws-badge--yellow mb-3">Principle 01</span>
                <h3 className="h5 mb-2" style={{ fontWeight: 700 }}>
                  Artist-Respectful Clarity
                </h3>
                <p className="mb-0" style={{ fontSize: "14px", color: "#333" }}>
                  No inflated hype or vague brochure copy. If a room fits three people comfortably and requires drummers to pack their own cymbals, we say so plainly.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4 d-flex">
              <div className="p-4 bg-light border w-100">
                <span className="ws-badge ws-badge--yellow mb-3">Principle 02</span>
                <h3 className="h5 mb-2" style={{ fontWeight: 700 }}>
                  Zero Platform Tollbooths
                </h3>
                <p className="mb-0" style={{ fontSize: "14px", color: "#333" }}>
                  We do not insert service fees between a rehearsal room steward and a local band. Artists message hosts directly and keep 100% of studio budgets inside the creative community.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4 d-flex">
              <div className="p-4 bg-light border w-100">
                <span className="ws-badge ws-badge--yellow mb-3">Principle 03</span>
                <h3 className="h5 mb-2" style={{ fontWeight: 700 }}>
                  Good Neighbours Last Longer
                </h3>
                <p className="mb-0" style={{ fontSize: "14px", color: "#333" }}>
                  Creative spaces survive when residential compounds, shared stairwells and municipal noise rules are respected. Every listing highlights clear house etiquette.
                </p>
              </div>
            </div>
          </div>

          <div className="ws-disclaimer-banner mb-4">
            <strong>Independent Directory Notice: </strong>
            {site.disclaimer}
          </div>

          <div className="d-flex flex-wrap" style={{ gap: "12px" }}>
            <Link href="/spaces" className="btn btn-primary py-3 px-4">
              Browse Spaces
            </Link>
            <Link href="/guidelines" className="btn btn-black py-3 px-4">
              Read Studio Guidelines
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
