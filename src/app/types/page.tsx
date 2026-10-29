import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SPACE_TYPE_GUIDES } from "@/lib/data/types-guide";
import { getSpacesByType } from "@/lib/data/spaces";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Space Types & What to Expect",
  description:
    "Short, practical guides to music writing rooms, band rehearsal floors, recording nooks, podcast booths, daylight art studios and maker workshops.",
};

export default function SpaceTypesPage() {
  return (
    <>
      <PageHero
        title="Space Types & What to Expect"
        subtitle="Practical notes on equipment, backup power, rate bands and what to ask hosts before you arrive."
        breadcrumbs={[{ label: "Space Types" }]}
        backgroundImage="/images/page-banner.jpg"
      />

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-9 text-center heading-section ftco-animate">
              <span className="subheading">Six Creative Disciplines</span>
              <h2 className="mb-3">Match Your Project to the Right Room</h2>
              <p>
                Every creative session makes different demands on acoustics, power, plumbing and daylight. Use these quick guides so neither your time nor a host&apos;s room is mismatched.
              </p>
            </div>
          </div>

          {SPACE_TYPE_GUIDES.map((guide, index) => {
            const count = getSpacesByType(guide.type).length;
            const reverse = index % 2 === 1;
            return (
              <div
                key={guide.type}
                id={guide.type}
                className={`row align-items-center mb-5 pb-5${
                  reverse ? " flex-lg-row-reverse" : ""
                }`}
                style={{ borderBottom: "1px solid #ececec" }}
              >
                <div className="col-lg-5 mb-4 mb-lg-0 ftco-animate">
                  <div
                    className="position-relative border overflow-hidden"
                    style={{ aspectRatio: "4 / 3", background: "#141313" }}
                  >
                    <Image
                      src={guide.image}
                      alt={guide.title}
                      fill
                      sizes="(max-width: 991px) 100vw, 42vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>

                <div className="col-lg-7 ftco-animate">
                  <span className="ws-badge ws-badge--yellow mb-2">
                    {count} {count === 1 ? "Space" : "Spaces"} Listed
                  </span>
                  <h3 className="h3 mb-1" style={{ fontWeight: 700 }}>
                    {guide.title}
                  </h3>
                  <p className="mb-3" style={{ fontWeight: 500, color: "#3c312e" }}>
                    {guide.subtitle}
                  </p>
                  <p className="mb-3" style={{ color: "#333" }}>
                    {guide.whatToExpect}
                  </p>

                  <div className="row mb-3">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <h4 className="h6" style={{ fontWeight: 700 }}>
                        Typical Room Setup
                      </h4>
                      <ul style={{ paddingLeft: "18px", fontSize: "14px", color: "#333" }}>
                        {guide.typicalSetup.map((item) => (
                          <li key={item} className="mb-1">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h4 className="h6" style={{ fontWeight: 700 }}>
                        Questions to Ask the Host
                      </h4>
                      <ul style={{ paddingLeft: "18px", fontSize: "14px", color: "#333" }}>
                        {guide.questionsToAskHost.map((q) => (
                          <li key={q} className="mb-1">
                            {q}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-3 bg-light border mb-3" style={{ fontSize: "13px", color: "#333" }}>
                    <strong>Typical Rate Expectation:</strong> {guide.typicalRates}
                    <br />
                    <strong>What You Usually Pack:</strong> {guide.whatToBring}
                  </div>

                  <Link
                    href={`/spaces?type=${guide.type}`}
                    className="btn btn-primary py-2 px-4"
                  >
                    Browse {guide.title}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
