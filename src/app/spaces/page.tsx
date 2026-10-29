import type { Metadata } from "next";
import { site } from "@/lib/data/site";
import { PageHero } from "@/components/PageHero";
import { SpacesExplorer } from "@/components/SpacesExplorer";

export const metadata: Metadata = {
  title: "Browse Creative Spaces",
  description:
    "Filter rehearsal rooms, recording nooks, podcast booths, daylight visual art studios and maker benches across African cities.",
};

export default async function SpacesPage({
  searchParams,
}: {
  searchParams: Promise<{ city?: string; type?: string }>;
}) {
  const resolved = await searchParams;
  const initialCity = typeof resolved.city === "string" ? resolved.city : "";
  const initialType = typeof resolved.type === "string" ? resolved.type : "";

  return (
    <>
      <PageHero
        title="Creative Workspaces Directory"
        subtitle="Filter by African city, creative discipline, hourly or day rate band, and practical room amenities."
        breadcrumbs={[{ label: "Spaces" }]}
        backgroundImage="/images/page-banner.jpg"
      />

      <section className="ftco-section">
        <div className="container">
          <div className="ws-disclaimer-banner mb-4">
            <strong>Independent Directory Notice: </strong>
            {site.disclaimer}
          </div>

          <SpacesExplorer
            key={`${initialCity}-${initialType}`}
            initialCity={initialCity}
            initialType={initialType}
          />
        </div>
      </section>
    </>
  );
}
