"use client";

import { useMemo, useState } from "react";
import {
  AMENITY_OPTIONS,
  CITY_OPTIONS,
  RATE_BAND_OPTIONS,
  SPACES,
  SPACE_TYPE_OPTIONS,
  type AmenitySlug,
  type BillingMode,
  type CitySlug,
  type RateBand,
  type SpaceType,
} from "@/lib/data/spaces";
import { useI18n } from "./I18nProvider";
import { SpaceCard } from "./SpaceCard";

export function SpacesExplorer({
  initialCity = "",
  initialType = "",
}: {
  initialCity?: string;
  initialType?: string;
}) {
  const { t } = useI18n();

  const validInitialCity = CITY_OPTIONS.some((c) => c.value === initialCity)
    ? (initialCity as CitySlug)
    : "";
  const validInitialType = SPACE_TYPE_OPTIONS.some((s) => s.value === initialType)
    ? (initialType as SpaceType)
    : "";

  const [query, setQuery] = useState("");
  const [city, setCity] = useState<CitySlug | "">(validInitialCity);
  const [type, setType] = useState<SpaceType | "">(validInitialType);
  const [rateBand, setRateBand] = useState<RateBand | "">("");
  const [billing, setBilling] = useState<BillingMode | "">("");
  const [selectedAmenities, setSelectedAmenities] = useState<AmenitySlug[]>([]);

  const toggleAmenity = (slug: AmenitySlug) => {
    setSelectedAmenities((prev) =>
      prev.includes(slug) ? prev.filter((a) => a !== slug) : [...prev, slug],
    );
  };

  const resetAll = () => {
    setQuery("");
    setCity("");
    setType("");
    setRateBand("");
    setBilling("");
    setSelectedAmenities([]);
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SPACES.filter((space) => {
      if (city && space.citySlug !== city) return false;
      if (type && space.type !== type) return false;
      if (rateBand && space.rateBand !== rateBand) return false;
      if (billing && !space.billingModes.includes(billing)) return false;
      if (
        selectedAmenities.length > 0 &&
        !selectedAmenities.every((am) => space.amenities.includes(am))
      ) {
        return false;
      }
      if (q) {
        const haystack = [
          space.name,
          space.city,
          space.country,
          space.neighbourhood,
          space.summary,
          ...space.gearIncluded,
          space.hostName,
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [billing, city, query, rateBand, selectedAmenities, type]);

  const hasActiveFilters =
    Boolean(query.trim()) ||
    Boolean(city) ||
    Boolean(type) ||
    Boolean(rateBand) ||
    Boolean(billing) ||
    selectedAmenities.length > 0;

  return (
    <div>
      <div className="ws-filter-bar mb-5">
        <div className="row">
          <div className="col-md-12 mb-3">
            <label
              htmlFor="space-search-input"
              className="d-block mb-1"
              style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#000" }}
            >
              {t("filter.search")}
            </label>
            <input
              id="space-search-input"
              type="search"
              className="form-control"
              placeholder="e.g. Kilimani, Surulere, drum kit, solar inverter, kiln, podcast..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="col-sm-6 col-lg-3 mb-3">
            <label
              htmlFor="filter-city"
              className="d-block mb-1"
              style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#000" }}
            >
              {t("filter.city")}
            </label>
            <select
              id="filter-city"
              className="form-control"
              value={city}
              onChange={(e) => setCity(e.target.value as CitySlug | "")}
            >
              <option value="">{t("filter.allCities")}</option>
              {CITY_OPTIONS.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}, {c.country}
                </option>
              ))}
            </select>
          </div>

          <div className="col-sm-6 col-lg-3 mb-3">
            <label
              htmlFor="filter-type"
              className="d-block mb-1"
              style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#000" }}
            >
              {t("filter.type")}
            </label>
            <select
              id="filter-type"
              className="form-control"
              value={type}
              onChange={(e) => setType(e.target.value as SpaceType | "")}
            >
              <option value="">{t("filter.allTypes")}</option>
              {SPACE_TYPE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="col-sm-6 col-lg-3 mb-3">
            <label
              htmlFor="filter-rate"
              className="d-block mb-1"
              style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#000" }}
            >
              {t("filter.rateBand")}
            </label>
            <select
              id="filter-rate"
              className="form-control"
              value={rateBand}
              onChange={(e) => setRateBand(e.target.value as RateBand | "")}
            >
              <option value="">{t("filter.allRates")}</option>
              {RATE_BAND_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="col-sm-6 col-lg-3 mb-3">
            <label
              htmlFor="filter-billing"
              className="d-block mb-1"
              style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#000" }}
            >
              {t("filter.billing")}
            </label>
            <select
              id="filter-billing"
              className="form-control"
              value={billing}
              onChange={(e) => setBilling(e.target.value as BillingMode | "")}
            >
              <option value="">{t("filter.allBilling")}</option>
              <option value="hourly">{t("filter.hourly")}</option>
              <option value="day">{t("filter.day")}</option>
            </select>
          </div>
        </div>

        <div className="mt-2">
          <span
            className="d-block mb-2"
            style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#000" }}
          >
            {t("filter.amenities")}
          </span>
          <div className="d-flex flex-wrap" style={{ gap: "8px" }}>
            {AMENITY_OPTIONS.map((am) => {
              const active = selectedAmenities.includes(am.value);
              return (
                <button
                  key={am.value}
                  type="button"
                  className={`ws-chip${active ? " is-active" : ""}`}
                  aria-pressed={active}
                  onClick={() => toggleAmenity(am.value)}
                >
                  {active ? (
                    <span className="icon-check" aria-hidden="true" />
                  ) : null}
                  <span>{am.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div
          className="mt-4 pt-3 d-flex flex-wrap align-items-center justify-content-between"
          style={{ borderTop: "1px solid #e5e5e5", gap: "10px" }}
        >
          <p className="mb-0" style={{ fontSize: "14px", color: "#333333" }}>
            {t("filter.showing")} <strong>{filtered.length}</strong> of{" "}
            <strong>{SPACES.length}</strong> {t("filter.spacesWord")}
          </p>
          {hasActiveFilters ? (
            <button
              type="button"
              className="btn btn-black py-2 px-3"
              onClick={resetAll}
            >
              {t("filter.reset")}
            </button>
          ) : null}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="p-5 bg-light border text-center">
          <h3 className="h4 mb-2" style={{ fontWeight: 700 }}>
            No spaces match that exact combination yet
          </h3>
          <p className="mb-4 mx-auto" style={{ maxWidth: "34rem" }}>
            Try removing one amenity chip or switching rate bands, or submit a room you know in that neighbourhood so other creatives can find it.
          </p>
          <button
            type="button"
            className="btn btn-primary py-2 px-4"
            onClick={resetAll}
          >
            {t("filter.reset")}
          </button>
        </div>
      ) : (
        <div className="row">
          {filtered.map((space) => (
            <div key={space.slug} className="col-md-6 col-lg-4 mb-4 d-flex">
              <SpaceCard space={space} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
