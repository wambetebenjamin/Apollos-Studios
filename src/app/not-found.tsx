import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export default function NotFound() {
  return (
    <>
      <PageHero
        title="Room or Page Not Found"
        subtitle="The studio listing or page you requested may have moved or paused enquiries."
        breadcrumbs={[{ label: "404" }]}
      />
      <section className="ftco-section">
        <div className="container text-center">
          <h2 className="h3 mb-3" style={{ fontWeight: 700 }}>
            Let&apos;s get you back to a working room
          </h2>
          <p className="mb-4 mx-auto" style={{ maxWidth: "34rem", color: "#333" }}>
            Explore active rehearsal rooms, recording nooks, podcast booths, art studios and maker workshops across six African cities.
          </p>
          <div className="d-flex flex-wrap justify-content-center" style={{ gap: "12px" }}>
            <Link href="/spaces" className="btn btn-primary py-3 px-4">
              Browse Spaces
            </Link>
            <Link href="/" className="btn btn-black py-3 px-4">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
