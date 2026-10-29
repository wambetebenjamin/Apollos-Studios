import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CITY_PROFILES } from "@/lib/data/cities";
import { getSpacesByCity } from "@/lib/data/spaces";
import { PageHero } from "@/components/PageHero";
import { SpaceCard } from "@/components/SpaceCard";

export const metadata: Metadata = {
  title: "Cities & Creative Neighbourhoods",
  description:
    "Explore rehearsal rooms, recording nooks, podcast booths, art studios and maker workshops across Nairobi, Lagos, Accra, Johannesburg, Kampala and Dakar.",
};

export default function CitiesPage() {
  return (
    <>
      <PageHero
        title="Creative Cities Across Africa"
        subtitle="Neighbourhood studio notes, commute & load-in tips, power backup realities and verified spaces across six cities."
        breadcrumbs={[{ label: "Cities" }]}
        backgroundImage="/images/page-banner.jpg"
      />

      <section className="ftco-section">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center mb-5" style={{ gap: "10px" }}>
            {CITY_PROFILES.map((c) => (
              <a key={c.slug} href={`#${c.slug}`} className="ws-chip">
                {c.name}, {c.country}
              </a>
            ))}
          </div>

          {CITY_PROFILES.map((city) => {
            const citySpaces = getSpacesByCity(city.slug);
            return (
              <div
                key={city.slug}
                id={city.slug}
                className="mb-5 pb-5"
                style={{ borderBottom: "1px solid #e6e6e6" }}
              >
                <div className="row align-items-center mb-4">
                  <div className="col-lg-5 mb-4 mb-lg-0 ftco-animate">
                    <div
                      className="position-relative border overflow-hidden"
                      style={{ aspectRatio: "16 / 10", background: "#141313" }}
                    >
                      <Image
                        src={city.image}
                        alt={`${city.name}, ${city.country}`}
                        fill
                        sizes="(max-width: 991px) 100vw, 42vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>

                  <div className="col-lg-7 ftco-animate">
                    <span className="ws-badge ws-badge--yellow mb-2">
                      {city.country} · {city.currency}
                    </span>
                    <h2 className="h2 mb-2" style={{ fontWeight: 700 }}>
                      {city.name}
                    </h2>
                    <p className="mb-3" style={{ fontWeight: 500, color: "#3c312e" }}>
                      {city.headline}
                    </p>
                    <p className="mb-3" style={{ color: "#333" }}>
                      {city.sceneNote}
                    </p>

                    <div className="mb-3">
                      <span
                        className="d-block mb-2"
                        style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#555" }}
                      >
                        Active Studio Neighbourhoods
                      </span>
                      <div className="d-flex flex-wrap" style={{ gap: "6px" }}>
                        {city.creativeNeighbourhoods.map((hood) => (
                          <span key={hood} className="ws-badge">
                            {hood}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 bg-light border mb-3" style={{ fontSize: "13px", color: "#333" }}>
                      <strong>Commute &amp; Load-In Tip:</strong> {city.practicalTip}
                      <br />
                      <strong>Power Continuity:</strong> {city.powerAndAccessNote}
                    </div>

                    <Link
                      href={`/spaces?city=${city.slug}`}
                      className="btn btn-primary py-2 px-4"
                    >
                      Filter All {city.name} Spaces ({citySpaces.length})
                    </Link>
                  </div>
                </div>

                {citySpaces.length > 0 ? (
                  <div className="row mt-4">
                    {citySpaces.map((space) => (
                      <div key={space.slug} className="col-md-6 mb-4 d-flex ftco-animate">
                        <SpaceCard space={space} />
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}

          <div className="p-4 p-md-5 bg-light border text-center">
            <h3 className="h4 mb-2" style={{ fontWeight: 700 }}>
              Stewarding a space in Kigali, Addis Ababa, Abidjan, Dar es Salaam or Cape Town?
            </h3>
            <p className="mb-4 mx-auto" style={{ maxWidth: "40rem" }}>
              We expand city landings as local studio hosts submit verified rooms. Share your space specs or suggest a studio collective to our editorial desk.
            </p>
            <div className="d-flex flex-wrap justify-content-center" style={{ gap: "12px" }}>
              <Link href="/list" className="btn btn-primary py-2 px-4">
                List a Space
              </Link>
              <Link href="/contact" className="btn btn-black py-2 px-4">
                Suggest a City
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
