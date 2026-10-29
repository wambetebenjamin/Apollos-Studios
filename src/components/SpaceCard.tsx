import Image from "next/image";
import Link from "next/link";
import {
  amenityLabel,
  spaceTypeLabel,
  type SpaceItem,
} from "@/lib/data/spaces";
import { SaveButton } from "./SaveButton";

export function SpaceCard({ space }: { space: SpaceItem }) {
  return (
    <article className="ws-space-card">
      <div className="ws-space-card__media">
        <Link href={`/spaces/${space.slug}`} aria-label={`View ${space.name}`}>
          <Image
            src={space.image}
            alt={`${space.name} in ${space.neighbourhood}, ${space.city}`}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
          />
        </Link>
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            zIndex: 2,
          }}
        >
          <span className="ws-badge ws-badge--yellow">
            {spaceTypeLabel(space.type)}
          </span>
        </div>
        <div
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            zIndex: 2,
          }}
        >
          <SaveButton slug={space.slug} spaceName={space.name} />
        </div>
      </div>

      <div className="ws-space-card__body">
        <div className="d-flex flex-wrap align-items-center justify-content-between mb-2" style={{ gap: "6px" }}>
          <span
            style={{
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: "#3c312e",
            }}
          >
            <span className="icon-map-marker mr-1" aria-hidden="true" />
            {space.city}, {space.country}
          </span>
          <span style={{ fontSize: "12px", color: "#595959" }}>
            {space.areaSqm} sqm · {space.capacity}
          </span>
        </div>

        <h3 className="h5 mb-1" style={{ fontWeight: 700, lineHeight: 1.35 }}>
          <Link href={`/spaces/${space.slug}`} style={{ color: "#000000" }}>
            {space.name}
          </Link>
        </h3>

        <p className="mb-2" style={{ fontSize: "13px", color: "#595959" }}>
          {space.neighbourhood}
        </p>

        <p className="mb-3" style={{ fontSize: "14px", color: "#4d4d4d" }}>
          {space.summary}
        </p>

        <div className="d-flex flex-wrap mb-3" style={{ gap: "6px" }}>
          {space.amenities.slice(0, 3).map((am) => (
            <span key={am} className="ws-badge">
              {amenityLabel(am)}
            </span>
          ))}
        </div>

        <div
          className="mt-auto pt-3 d-flex flex-wrap align-items-center justify-content-between"
          style={{ borderTop: "1px solid #ececec", gap: "8px" }}
        >
          <div>
            <span
              className="d-block"
              style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: "#666" }}
            >
              Direct Host Rate
            </span>
            <strong style={{ fontSize: "14px", color: "#000000" }}>
              {space.rateSummary}
            </strong>
          </div>
          <Link
            href={`/spaces/${space.slug}`}
            className="btn btn-primary py-2 px-3"
            style={{ fontSize: "13px", fontWeight: 600 }}
          >
            Room Specs
          </Link>
        </div>
      </div>
    </article>
  );
}
