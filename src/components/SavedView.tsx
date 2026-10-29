"use client";

import Link from "next/link";
import { SPACES, rateBandLabel, spaceTypeLabel } from "@/lib/data/spaces";
import { useSaved } from "./SavedProvider";
import { SpaceCard } from "./SpaceCard";

export function SavedView() {
  const {
    hydrated,
    savedSlugs,
    myListings,
    clearSavedSpaces,
    removeMyListing,
  } = useSaved();

  const savedSpaces = SPACES.filter((s) => savedSlugs.includes(s.slug));

  if (!hydrated) {
    return (
      <div className="p-4 bg-light border">
        <p className="mb-0">Loading your browser-saved spaces and listings...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="p-4 mb-5 bg-light border">
        <p className="mb-0" style={{ color: "#333333", fontSize: "14px" }}>
          <strong>Light Local Saves Only:</strong> Your saved spaces and submitted room drafts live privately in this browser&apos;s local storage (<code>apollos-studios-saved</code>). There is no tracking account, password wall or host analytics dashboard.
        </p>
      </div>

      {/* Section 1: Saved Spaces */}
      <div className="mb-5 pb-3">
        <div className="d-flex flex-wrap align-items-center justify-content-between mb-4" style={{ gap: "12px" }}>
          <div>
            <span className="subheading text-uppercase" style={{ fontSize: "12px", letterSpacing: "2px", fontWeight: 600 }}>
              Shortlist
            </span>
            <h2 className="h3 mb-0" style={{ fontWeight: 700 }}>
              Saved Spaces ({savedSpaces.length})
            </h2>
          </div>
          {savedSpaces.length > 0 ? (
            <button
              type="button"
              className="btn btn-black py-2 px-3"
              onClick={clearSavedSpaces}
            >
              Clear Saved Spaces
            </button>
          ) : null}
        </div>

        {savedSpaces.length === 0 ? (
          <div className="p-4 border bg-white">
            <p className="mb-3">
              You have not bookmarked any spaces in this browser yet. Tap the <strong>Save</strong> button on any rehearsal room, vocal booth or maker bench to compare options before messaging hosts.
            </p>
            <Link href="/spaces" className="btn btn-primary py-2 px-4">
              Browse Directory
            </Link>
          </div>
        ) : (
          <div className="row">
            {savedSpaces.map((space) => (
              <div key={space.slug} className="col-md-6 col-lg-4 mb-4 d-flex">
                <SpaceCard space={space} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Section 2: My Listings */}
      <div>
        <div className="d-flex flex-wrap align-items-center justify-content-between mb-4" style={{ gap: "12px" }}>
          <div>
            <span className="subheading text-uppercase" style={{ fontSize: "12px", letterSpacing: "2px", fontWeight: 600 }}>
              Submitted from This Browser
            </span>
            <h2 className="h3 mb-0" style={{ fontWeight: 700 }}>
              My Listings ({myListings.length})
            </h2>
          </div>
          <Link href="/list" className="btn btn-primary py-2 px-4">
            Submit Another Space
          </Link>
        </div>

        {myListings.length === 0 ? (
          <div className="p-4 border bg-white">
            <p className="mb-3">
              No space listings have been submitted from this browser yet. When you submit a room via <strong>List a Space</strong>, a local copy is kept here for your records while our editorial desk verifies your details.
            </p>
            <Link href="/list" className="btn btn-black py-2 px-4">
              List a Space
            </Link>
          </div>
        ) : (
          <div className="row">
            {myListings.map((item) => (
              <div key={item.id} className="col-md-6 mb-4 d-flex">
                <div className="p-4 border bg-white w-100 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex flex-wrap align-items-center justify-content-between mb-2" style={{ gap: "8px" }}>
                      <span className="ws-badge ws-badge--yellow">
                        {spaceTypeLabel(item.type)}
                      </span>
                      <span className="ws-badge">
                        Submitted · Pending Desk Review
                      </span>
                    </div>
                    <h3 className="h5 mb-1" style={{ fontWeight: 700 }}>
                      {item.spaceName}
                    </h3>
                    <p className="mb-2" style={{ fontSize: "13px", color: "#595959" }}>
                      {item.neighbourhood}, {item.city} · {rateBandLabel(item.rateBand)} ({item.rateDisplay})
                    </p>
                    <p className="mb-2" style={{ fontSize: "14px" }}>
                      {item.summary}
                    </p>
                    <p className="mb-3" style={{ fontSize: "13px", color: "#4d4d4d" }}>
                      <strong>Power Backup:</strong> {item.powerBackup}
                      <br />
                      <strong>Host Contact:</strong> {item.hostName} ({item.contactEmail})
                    </p>
                  </div>
                  <div className="pt-3 d-flex flex-wrap justify-content-between align-items-center" style={{ borderTop: "1px solid #ececec", gap: "8px" }}>
                    <span style={{ fontSize: "12px", color: "#666" }}>
                      Saved locally {new Date(item.createdAt).toLocaleDateString()}
                    </span>
                    <button
                      type="button"
                      className="btn btn-outline-dark btn-sm py-1 px-3"
                      onClick={() => removeMyListing(item.id)}
                    >
                      Remove Local Copy
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
