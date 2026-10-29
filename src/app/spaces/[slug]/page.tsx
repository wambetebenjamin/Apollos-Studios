import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  SPACES,
  amenityLabel,
  getSpaceBySlug,
  rateBandLabel,
  spaceTypeLabel,
} from "@/lib/data/spaces";
import { site, whatsappLink } from "@/lib/data/site";
import { PageHero } from "@/components/PageHero";
import { SaveButton } from "@/components/SaveButton";
import { SpaceCard } from "@/components/SpaceCard";

export function generateStaticParams() {
  return SPACES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const space = getSpaceBySlug(slug);
  if (!space) {
    return { title: "Space Not Found" };
  }
  return {
    title: `${space.name} (${space.city})`,
    description: space.summary,
    openGraph: {
      title: `${space.name} | ${site.name}`,
      description: space.summary,
      images: [{ url: space.image }],
    },
  };
}

export default async function SpaceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const space = getSpaceBySlug(slug);
  if (!space) {
    notFound();
  }

  const related = SPACES.filter(
    (s) =>
      s.slug !== space.slug &&
      (s.citySlug === space.citySlug || s.type === space.type),
  ).slice(0, 3);

  const mailSubject = encodeURIComponent(
    `Studio enquiry via Apollos Studios: ${space.name}`,
  );
  const mailBody = encodeURIComponent(
    `Hello ${space.hostName},\n\nI found ${space.name} on Apollos Studios and would like to ask about availability.\n\nPreferred dates & hours:\nNumber of people:\nDiscipline / instruments / media:\n\nThank you!`,
  );

  return (
    <>
      <PageHero
        title={space.name}
        subtitle={`${space.neighbourhood}, ${space.city}, ${space.country}`}
        breadcrumbs={[
          { label: "Spaces", href: "/spaces" },
          { label: space.name },
        ]}
        backgroundImage={space.image}
      />

      <section className="ftco-section">
        <div className="container">
          <div className="row">
            {/* Left / Main Specifications Column */}
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div
                className="position-relative mb-4 border overflow-hidden"
                style={{ aspectRatio: "16 / 10", background: "#141313" }}
              >
                <Image
                  src={space.image}
                  alt={`${space.name} in ${space.city}`}
                  fill
                  priority
                  sizes="(max-width: 991px) 100vw, 66vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div
                className="d-flex flex-wrap align-items-center justify-content-between mb-4"
                style={{ gap: "12px" }}
              >
                <div className="d-flex flex-wrap" style={{ gap: "8px" }}>
                  <span className="ws-badge ws-badge--yellow">
                    {spaceTypeLabel(space.type)}
                  </span>
                  <span className="ws-badge">
                    {rateBandLabel(space.rateBand)}
                  </span>
                  <span className="ws-badge">
                    {space.areaSqm} sqm · {space.capacity}
                  </span>
                </div>
                <SaveButton slug={space.slug} spaceName={space.name} />
              </div>

              <h2 className="h3 mb-3" style={{ fontWeight: 700 }}>
                About This Room
              </h2>
              {space.description.map((para, idx) => (
                <p key={idx} className="mb-3" style={{ color: "#333333" }}>
                  {para}
                </p>
              ))}

              {/* Key Room Specs Grid */}
              <div className="row mt-4 mb-4">
                <div className="col-md-6 mb-3">
                  <div className="p-3 bg-light border h-100">
                    <span
                      className="d-block mb-1"
                      style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#555" }}
                    >
                      Power &amp; Backup Continuity
                    </span>
                    <p className="mb-0" style={{ fontSize: "14px", color: "#000" }}>
                      {space.powerBackup}
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="p-3 bg-light border h-100">
                    <span
                      className="d-block mb-1"
                      style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#555" }}
                    >
                      Load-In &amp; Access
                    </span>
                    <p className="mb-0" style={{ fontSize: "14px", color: "#000" }}>
                      {space.loadIn}
                    </p>
                  </div>
                </div>
                <div className="col-md-12 mb-3">
                  <div className="p-3 bg-light border">
                    <span
                      className="d-block mb-1"
                      style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#555" }}
                    >
                      Acoustics, Ventilation &amp; Daylight
                    </span>
                    <p className="mb-0" style={{ fontSize: "14px", color: "#000" }}>
                      {space.acousticOrLightNote}
                    </p>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <h3 className="h5 mb-3" style={{ fontWeight: 700 }}>
                Room Amenities
              </h3>
              <div className="d-flex flex-wrap mb-4" style={{ gap: "8px" }}>
                {space.amenities.map((am) => (
                  <span key={am} className="ws-badge">
                    <span className="icon-check mr-1" aria-hidden="true" />
                    {amenityLabel(am)}
                  </span>
                ))}
              </div>

              {/* Gear Included */}
              <h3 className="h5 mb-3" style={{ fontWeight: 700 }}>
                Equipment &amp; Fixtures Included
              </h3>
              <ul className="mb-4" style={{ color: "#333333", paddingLeft: "20px" }}>
                {space.gearIncluded.map((item) => (
                  <li key={item} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>

              {/* Artist Brings */}
              <h3 className="h5 mb-3" style={{ fontWeight: 700 }}>
                What Artists &amp; Guests Should Pack
              </h3>
              <ul className="mb-4" style={{ color: "#333333", paddingLeft: "20px" }}>
                {space.artistBrings.map((item) => (
                  <li key={item} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>

              {/* House Rules */}
              <h3 className="h5 mb-3" style={{ fontWeight: 700 }}>
                House Rules &amp; Neighbour Etiquette
              </h3>
              <ul className="mb-4" style={{ color: "#333333", paddingLeft: "20px" }}>
                {space.houseRules.map((rule) => (
                  <li key={rule} className="mb-2">
                    {rule}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right / Direct Host Contact Sidebar */}
            <div className="col-lg-4">
              <div className="p-4 bg-light border mb-4">
                <span
                  className="d-block mb-1"
                  style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "#555" }}
                >
                  Published Direct Rates
                </span>
                <p className="h4 mb-3" style={{ fontWeight: 800, color: "#000" }}>
                  {space.rateSummary}
                </p>

                <div className="mb-3 pb-3" style={{ borderBottom: "1px solid #e2e2e2", fontSize: "14px" }}>
                  {space.hourlyRate ? (
                    <div className="d-flex justify-content-between mb-1">
                      <span style={{ color: "#555" }}>Hourly block:</span>
                      <strong style={{ color: "#000" }}>{space.hourlyRate}</strong>
                    </div>
                  ) : null}
                  {space.dayRate ? (
                    <div className="d-flex justify-content-between mb-1">
                      <span style={{ color: "#555" }}>Day session:</span>
                      <strong style={{ color: "#000" }}>{space.dayRate}</strong>
                    </div>
                  ) : null}
                  <div className="d-flex justify-content-between">
                    <span style={{ color: "#555" }}>Operating hours:</span>
                    <strong style={{ color: "#000" }}>{space.hours}</strong>
                  </div>
                </div>

                <div className="mb-4" style={{ fontSize: "14px" }}>
                  <span
                    className="d-block mb-1"
                    style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#555" }}
                  >
                    Stewarded By
                  </span>
                  <strong className="d-block" style={{ color: "#000" }}>
                    {space.hostName}
                  </strong>
                  <span className="d-block" style={{ color: "#555", fontSize: "13px" }}>
                    {space.hostRole}
                  </span>
                  <span className="d-block mt-1" style={{ color: "#333", fontSize: "12px" }}>
                    {space.hostResponseNote}
                  </span>
                </div>

                <a
                  href={`mailto:${space.contactEmail}?subject=${mailSubject}&body=${mailBody}`}
                  className="btn btn-primary btn-block py-3 px-4 mb-2"
                >
                  <span className="icon-envelope mr-2" aria-hidden="true" />
                  Email Host Directly
                </a>

                <a
                  href={whatsappLink(space.whatsappPrompt)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-black btn-block py-3 px-4 mb-3"
                >
                  <span className="icon-whatsapp mr-2" aria-hidden="true" />
                  Enquire on WhatsApp
                </a>

                <div className="ws-disclaimer-banner" style={{ fontSize: "12px" }}>
                  {site.disclaimer}
                </div>
              </div>

              <div className="p-4 border bg-white">
                <h3 className="h6 mb-2" style={{ fontWeight: 700 }}>
                  First time booking a studio?
                </h3>
                <p className="mb-3" style={{ fontSize: "13px" }}>
                  Read our space-type checklist and shared studio etiquette before confirming your session slot.
                </p>
                <div className="d-flex flex-wrap" style={{ gap: "8px" }}>
                  <Link href="/types" className="btn btn-outline-dark btn-sm py-2 px-3">
                    Space Types Guide
                  </Link>
                  <Link href="/guidelines" className="btn btn-outline-dark btn-sm py-2 px-3">
                    Studio Guidelines
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {related.length > 0 ? (
            <div className="mt-5 pt-5" style={{ borderTop: "1px solid #eaeaea" }}>
              <div className="heading-section mb-4">
                <span className="subheading">More Options</span>
                <h2 className="h3">Related Rooms in {space.city} &amp; Beyond</h2>
              </div>
              <div className="row">
                {related.map((item) => (
                  <div key={item.slug} className="col-md-6 col-lg-4 mb-4 d-flex">
                    <SpaceCard space={item} />
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
