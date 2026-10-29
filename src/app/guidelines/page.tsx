import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/data/site";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Studio Guidelines & Etiquette",
  description:
    "Shared practical rules for artists and studio hosts using Apollos Studios: punctuality, gear care, sound levels, ventilation and local law compliance.",
};

export default function GuidelinesPage() {
  return (
    <>
      <PageHero
        title="Studio Guidelines & Etiquette"
        subtitle="Practical shared habits that protect delicate equipment, creative focus and neighbourhood goodwill."
        breadcrumbs={[{ label: "Guidelines" }]}
        backgroundImage="/images/page-banner.jpg"
      />

      <section className="ftco-section">
        <div className="container">
          <div className="ws-disclaimer-banner mb-5">
            <strong>Independent Directory Notice: </strong>
            {site.disclaimer}
          </div>

          <div className="row mb-5">
            <div className="col-lg-6 mb-4">
              <div className="p-4 p-md-5 bg-light border h-100">
                <span className="ws-badge ws-badge--yellow mb-3">
                  For Visiting Artists, Bands &amp; Makers
                </span>
                <h2 className="h4 mb-3" style={{ fontWeight: 700 }}>
                  Six Commitments When Using a Space
                </h2>
                <ol style={{ paddingLeft: "20px", color: "#333", fontSize: "14px" }}>
                  <li className="mb-3">
                    <strong>Respect the changeover clock:</strong> Begin wrapping cables, wiping clay splash pans or packing cymbals 10 to 15 minutes before your booked slot ends so the next artist starts on time.
                  </li>
                  <li className="mb-3">
                    <strong>Declare full headcount &amp; gear upfront:</strong> Tell the host in advance if you are bringing extra horn players, cameras, kilns loads or guests so ventilation and power loads stay safe.
                  </li>
                  <li className="mb-3">
                    <strong>Protect phantom power &amp; tube amps:</strong> Never hot-unplug XLR condenser microphones with +48V active or switch off amplifier heads without muting master volume first.
                  </li>
                  <li className="mb-3">
                    <strong>Keep liquids off consoles &amp; benches:</strong> Water bottles stay capped on the floor away from mixing desks, stageboxes, sewing motors and electrical outlets.
                  </li>
                  <li className="mb-3">
                    <strong>Clean wet &amp; dusty stations properly:</strong> Wet-sponge ceramic tables (never dry-sweep silica dust), seal solvent rags in metal bins and rinse print screens immediately.
                  </li>
                  <li className="mb-0">
                    <strong>Honour compound &amp; street curfews:</strong> Keep courtyard doors latched during loud takes and load vans quietly during evening residential hours.
                  </li>
                </ol>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="p-4 p-md-5 bg-white border h-100">
                <span className="ws-badge ws-badge--yellow mb-3">
                  For Studio Hosts &amp; Stewards
                </span>
                <h2 className="h4 mb-3" style={{ fontWeight: 700 }}>
                  Six Standards for Listed Rooms
                </h2>
                <ol style={{ paddingLeft: "20px", color: "#333", fontSize: "14px" }}>
                  <li className="mb-3">
                    <strong>Accurate equipment descriptions:</strong> Only list microphones, backline amplifiers, wheels or easels that are maintained in working order for booked sessions.
                  </li>
                  <li className="mb-3">
                    <strong>Electrical &amp; earthing safety:</strong> Ensure grounded outlets, surge protection and safe cable routing across rehearsal floors and wet workshop zones.
                  </li>
                  <li className="mb-3">
                    <strong>Clear fire exits &amp; ventilation:</strong> Keep exits unlocked and unobstructed from the inside, and provide fresh air exchange in enclosed vocal booths and painting rooms.
                  </li>
                  <li className="mb-3">
                    <strong>Upfront written rate confirmation:</strong> State clearly before any deposit whether engineering assistance, cymbal hire, kiln firing or overtime blocks carry separate charges.
                  </li>
                  <li className="mb-3">
                    <strong>Welcoming, harassment-free rooms:</strong> Treat artists of every gender, age, background and experience level with professional dignity.
                  </li>
                  <li className="mb-0">
                    <strong>Compliance with local laws:</strong> Operate within municipal noise, zoning, safety and business regulations in your city.
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="p-4 bg-light border d-flex flex-wrap align-items-center justify-content-between" style={{ gap: "12px" }}>
            <div>
              <h3 className="h5 mb-1" style={{ fontWeight: 700 }}>
                Need to flag an outdated listing or safety concern?
              </h3>
              <p className="mb-0" style={{ fontSize: "14px", color: "#333" }}>
                Reach our editorial desk directly and we will review or remove non-compliant listings promptly.
              </p>
            </div>
            <Link href="/contact" className="btn btn-black py-2 px-4">
              Contact Editorial Desk
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
