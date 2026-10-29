import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SavedView } from "@/components/SavedView";

export const metadata: Metadata = {
  title: "Saved Spaces & My Listings",
  description:
    "View your locally saved creative workspaces and room listings submitted from this browser.",
};

export default function SavedPage() {
  return (
    <>
      <PageHero
        title="Saved Spaces & My Listings"
        subtitle="Your shortlisted studios and submitted room records, stored privately in this browser."
        breadcrumbs={[{ label: "Saved & My Listings" }]}
        backgroundImage="/images/page-banner.jpg"
      />

      <section className="ftco-section">
        <div className="container">
          <SavedView />
        </div>
      </section>
    </>
  );
}
