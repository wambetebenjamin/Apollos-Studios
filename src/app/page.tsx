import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/data/site";
import {
  SPACES,
  SPACE_TYPE_OPTIONS,
  getFeaturedSpaces,
} from "@/lib/data/spaces";
import { CITY_PROFILES } from "@/lib/data/cities";
import { getServerLocale } from "@/lib/locale";
import { getDict, type DictKey } from "@/lib/i18n";
import { SpaceCard } from "@/components/SpaceCard";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";

export default async function HomePage() {
  const locale = await getServerLocale();
  const dict = getDict(locale);
  const t = (key: DictKey) => dict[key];
  const featured = getFeaturedSpaces();

  return (
    <>
      {/* 1. Whitespace Signature Hero */}
      <section
        className="hero-wrap ws-home-hero"
        style={{ backgroundImage: "url('/images/hero-studio.jpg')" }}
      >
        <div className="overlay" />
        <div className="ws-home-hero__accent" aria-hidden="true" />
        <div className="container">
          <div className="row no-gutters slider-text align-items-center">
            <div className="col-lg-8 ftco-animate">
              <div className="text">
                <span className="subheading">{t("hero.kicker")}</span>
                <h1 className="mb-4">{t("hero.title")}</h1>
                <p className="mb-4" style={{ maxWidth: "38rem" }}>
                  {t("hero.subtitle")}
                </p>
                <div className="d-flex flex-wrap align-items-center mb-4" style={{ gap: "12px" }}>
                  <Link href="/spaces" className="btn btn-primary py-3 px-4">
                    {t("hero.browse")}
                  </Link>
                  <Link href="/list" className="btn btn-white py-3 px-4">
                    {t("hero.list")}
                  </Link>
                </div>
                <div className="d-flex flex-wrap align-items-center" style={{ gap: "8px" }}>
                  {CITY_PROFILES.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/spaces?city=${c.slug}`}
                      className="ws-hero-city-pill"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Space Matters + 4 Discipline Pillars (Exact Whitespace Welcome Section) */}
      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container">
          <div className="row no-gutters">
            <div
              className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center"
              style={{
                backgroundImage: "url('/images/about-studio.jpg')",
                minHeight: "420px",
              }}
              role="img"
              aria-label="Musician adjusting studio microphone and stand before rehearsal"
            />
            <div className="col-md-7 wrap-about pb-md-5 ftco-animate">
              <div className="heading-section mb-4 pt-5 pl-md-5">
                <div className="pr-md-5 mr-md-5">
                  <span className="subheading">{t("home.whySubheading")}</span>
                  <h2 className="mb-4">{t("home.whyHeading")}</h2>
                </div>
                <p>
                  Creative work asks for physical honesty: four hours where a drummer can lock a groove without an angry knock on the door, a silent vocal booth that runs on solar batteries when grid power dips, a sink built for stoneware clay, or five metres of north daylight in front of an easel.
                </p>
                <p>
                  Apollos Studios catalogues real, working rooms stewarded by musicians, engineers, sculptors and printmakers across African cities. Every listing states clear room dimensions, power backup, hourly or day rate bands and house rules so you can reach hosts directly and get straight to making.
                </p>
                <div className="ws-disclaimer-banner mt-4">
                  <strong>{t("disclaimer.label")} </strong>
                  {site.disclaimer}
                </div>
              </div>
            </div>
          </div>

          <div className="row py-5 ftco-services">
            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services d-block">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-idea" aria-hidden="true" />
                </div>
                <div className="media-body mt-2">
                  <h3 className="heading">Rehearsal &amp; Live Rooms</h3>
                  <p>
                    Treated floors with drum shells, bass/guitar backline, vocal PA wedges and clear evening SPL curfews.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services d-block">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-innovation" aria-hidden="true" />
                </div>
                <div className="media-body mt-2">
                  <h3 className="heading">Recording &amp; Podcast Nooks</h3>
                  <p>
                    Inverter-backed booths for dry-hire producers, solo vocalists, audiobooks and four-mic roundtables.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services d-block">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-analysis" aria-hidden="true" />
                </div>
                <div className="media-body mt-2">
                  <h3 className="heading">Daylight Visual Art Bays</h3>
                  <p>
                    High-wall studios with steady natural light, H-frame easels, pinning walls and deep brush sinks.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services d-block">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-ux-design" aria-hidden="true" />
                </div>
                <div className="media-body mt-2">
                  <h3 className="heading">Maker, Clay &amp; Stitch Benches</h3>
                  <p>
                    Pottery wheels, scheduled kiln shelves, textile print tables and dust-extracted joinery bays by the day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Whitespace Counter Strip */}
      <section
        className="ftco-section ftco-counter img"
        id="section-counter"
        style={{ backgroundImage: "url('/images/counter-bg.jpg')" }}
      >
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-10 text-center heading-section heading-section-white ftco-animate">
              <span className="subheading">{t("home.counterSubheading")}</span>
              <h2 className="mb-0">{t("home.counterHeading")}</h2>
            </div>
          </div>
          <div className="row d-md-flex align-items-center justify-content-center">
            <div className="col-lg-10">
              <div className="row d-md-flex align-items-center">
                <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number={SPACES.length}>
                        {SPACES.length}
                      </strong>
                      <span>Verified Spaces</span>
                    </div>
                  </div>
                </div>
                <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number={CITY_PROFILES.length}>
                        {CITY_PROFILES.length}
                      </strong>
                      <span>African Cities</span>
                    </div>
                  </div>
                </div>
                <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number={SPACE_TYPE_OPTIONS.length}>
                        {SPACE_TYPE_OPTIONS.length}
                      </strong>
                      <span>Space Disciplines</span>
                    </div>
                  </div>
                </div>
                <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number={100}>
                        100
                      </strong>
                      <span>% Direct Host Contact</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Creative Workspaces */}
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section ftco-animate">
              <span className="subheading">{t("home.featuredSubheading")}</span>
              <h2 className="mb-3">{t("home.featuredHeading")}</h2>
              <p>{t("home.featuredLead")}</p>
            </div>
          </div>

          <div className="row">
            {featured.map((space) => (
              <div key={space.slug} className="col-md-6 col-lg-4 mb-4 d-flex ftco-animate">
                <SpaceCard space={space} />
              </div>
            ))}
          </div>

          <div className="row mt-4">
            <div className="col-12 text-center">
              <Link href="/spaces" className="btn btn-black py-3 px-5">
                Explore All {SPACES.length} Spaces
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How to Book or List (Practical 4-Step Guide) */}
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-8 text-center heading-section ftco-animate">
              <span className="subheading">{t("home.howSubheading")}</span>
              <h2 className="mb-3">{t("home.howHeading")}</h2>
              <p>
                No middleman checkout fees or opaque calendar holds. Just honest specs and direct communication between working creatives.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4 d-flex ftco-animate">
              <div className="p-4 bg-white border w-100">
                <span className="ws-badge ws-badge--yellow mb-3">Step 01</span>
                <h3 className="h5 mb-2" style={{ fontWeight: 700 }}>
                  Filter Real Specs
                </h3>
                <p className="mb-0" style={{ fontSize: "14px" }}>
                  Narrow by city, discipline, hourly or full-day rate band, inverter backup and ground load-in.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4 d-flex ftco-animate">
              <div className="p-4 bg-white border w-100">
                <span className="ws-badge ws-badge--yellow mb-3">Step 02</span>
                <h3 className="h5 mb-2" style={{ fontWeight: 700 }}>
                  Check Gear &amp; Rules
                </h3>
                <p className="mb-0" style={{ fontSize: "14px" }}>
                  Read what stays in the room, what you pack (cymbals, SD cards, clay, brushes) and evening curfews.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4 d-flex ftco-animate">
              <div className="p-4 bg-white border w-100">
                <span className="ws-badge ws-badge--yellow mb-3">Step 03</span>
                <h3 className="h5 mb-2" style={{ fontWeight: 700 }}>
                  Arrange Directly
                </h3>
                <p className="mb-0" style={{ fontSize: "14px" }}>
                  Message the host via WhatsApp or email with your session dates, headcount and project scope.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4 d-flex ftco-animate">
              <div className="p-4 bg-white border w-100">
                <span className="ws-badge ws-badge--yellow mb-3">Step 04</span>
                <h3 className="h5 mb-2" style={{ fontWeight: 700 }}>
                  Respect the Room
                </h3>
                <p className="mb-0" style={{ fontSize: "14px" }}>
                  Start pack-down on time, coil shared cables neatly and leave benches ready for the next artist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Whitespace Rate Band Cards (.block-7) */}
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section ftco-animate">
              <span className="subheading">{t("home.ratesSubheading")}</span>
              <h2 className="mb-3">{t("home.ratesHeading")}</h2>
              <p>
                Hosts publish rates in local currency (KES, NGN, GHS, ZAR, UGX, XOF). Use our three directory rate bands to compare rooms quickly.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 ftco-animate d-flex mb-4">
              <div className="block-7 w-100 d-flex flex-column justify-content-between">
                <div className="text-center">
                  <h3 className="heading-2">Community &amp; Solo Band</h3>
                  <span className="price">
                    <span className="number" style={{ fontSize: "26px" }}>
                      Hourly Nooks
                    </span>
                  </span>
                  <span className="excerpt d-block">
                    Approx. USD 6 to 15/hr · USD 25 to 55/day
                  </span>
                  <h4 className="heading-2 mb-3">Commonly Includes</h4>
                  <ul className="pricing-text mb-4">
                    <li>
                      <strong>Dry-hire</strong> vocal &amp; podcast booths
                    </li>
                    <li>
                      <strong>Shared</strong> print, stitch &amp; wood benches
                    </li>
                    <li>
                      <strong>Community</strong> acoustic rehearsal rooms
                    </li>
                    <li>
                      <strong>Battery UPS</strong> or solar backup lighting
                    </li>
                  </ul>
                </div>
                <Link href="/spaces" className="btn btn-primary d-block px-3 py-3">
                  Browse Budget Band
                </Link>
              </div>
            </div>

            <div className="col-md-4 ftco-animate d-flex mb-4">
              <div className="block-7 w-100 d-flex flex-column justify-content-between">
                <div className="text-center">
                  <h3 className="heading-2">Working Studio Band</h3>
                  <span className="price">
                    <span className="number" style={{ fontSize: "26px" }}>
                      Half &amp; Full Days
                    </span>
                  </span>
                  <span className="excerpt d-block">
                    Approx. USD 16 to 35/hr · USD 60 to 130/day
                  </span>
                  <h4 className="heading-2 mb-3">Commonly Includes</h4>
                  <ul className="pricing-text mb-4">
                    <li>
                      <strong>Full backline</strong> band rehearsal rooms
                    </li>
                    <li>
                      <strong>North-light</strong> painting &amp; canvas bays
                    </li>
                    <li>
                      <strong>Ceramic wheel</strong> &amp; sculpture workshops
                    </li>
                    <li>
                      <strong>Pure-sine</strong> solar inverter power
                    </li>
                  </ul>
                </div>
                <Link href="/spaces" className="btn btn-primary d-block px-3 py-3">
                  Browse Working Studios
                </Link>
              </div>
            </div>

            <div className="col-md-4 ftco-animate d-flex mb-4">
              <div className="block-7 w-100 d-flex flex-column justify-content-between">
                <div className="text-center">
                  <h3 className="heading-2">Ensemble &amp; Suite Band</h3>
                  <span className="price">
                    <span className="number" style={{ fontSize: "26px" }}>
                      Session Lock-Outs
                    </span>
                  </span>
                  <span className="excerpt d-block">
                    Approx. USD 36+/hr · USD 140+/day
                  </span>
                  <h4 className="heading-2 mb-3">Commonly Includes</h4>
                  <ul className="pricing-text mb-4">
                    <li>
                      <strong>12-piece</strong> live arrangement lofts
                    </li>
                    <li>
                      <strong>Inline console</strong> + iso room suites
                    </li>
                    <li>
                      <strong>24-track</strong> multitrack capture options
                    </li>
                    <li>
                      <strong>Three-phase</strong> conditioned backup power
                    </li>
                  </ul>
                </div>
                <Link href="/spaces" className="btn btn-primary d-block px-3 py-3">
                  Browse Production Suites
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Voices from Artists & Hosts (Swiper Testimony Section) */}
      <section className="ftco-section testimony-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section ftco-animate">
              <span className="subheading">{t("home.voicesSubheading")}</span>
              <h2 className="mb-3">{t("home.voicesHeading")}</h2>
            </div>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* 8. Browse by City Grid */}
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-8 text-center heading-section ftco-animate">
              <span className="subheading">Multi-City Directory</span>
              <h2 className="mb-3">Creative Neighbourhoods Across Six Cities</h2>
              <p>
                Explore studio clusters, transit and load-in realities, and active listings in each city.
              </p>
            </div>
          </div>

          <div className="row">
            {CITY_PROFILES.map((city) => (
              <div key={city.slug} className="col-md-6 col-lg-4 mb-4 d-flex ftco-animate">
                <div className="ws-space-card">
                  <div className="ws-space-card__media">
                    <Link href={`/spaces?city=${city.slug}`}>
                      <Image
                        src={city.image}
                        alt={`${city.name}, ${city.country}`}
                        fill
                        sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                      />
                    </Link>
                    <div style={{ position: "absolute", top: 12, left: 12 }}>
                      <span className="ws-badge ws-badge--yellow">
                        {city.country}
                      </span>
                    </div>
                  </div>
                  <div className="ws-space-card__body">
                    <h3 className="h5 mb-2" style={{ fontWeight: 700 }}>
                      <Link href={`/spaces?city=${city.slug}`} style={{ color: "#000" }}>
                        {city.name}
                      </Link>
                    </h3>
                    <p className="mb-3" style={{ fontSize: "14px" }}>
                      {city.headline}
                    </p>
                    <div className="mt-auto pt-2 d-flex justify-content-between align-items-center">
                      <Link
                        href={`/spaces?city=${city.slug}`}
                        className="btn btn-primary py-2 px-3"
                        style={{ fontSize: "13px" }}
                      >
                        View {city.name} Rooms
                      </Link>
                      <Link
                        href={`/cities#${city.slug}`}
                        style={{ fontSize: "13px", fontWeight: 600, color: "#000" }}
                      >
                        City Guide &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Pre-Footer Host CTA Band */}
      <section className="ws-host-cta-band">
        <div className="container">
          <div className="ws-host-cta-card ftco-animate">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-8 mb-4 mb-lg-0 heading-section">
                <span className="subheading">
                  For Studio Stewards &amp; Collectives
                </span>
                <h2 className="mb-3" style={{ fontSize: "clamp(24px, 3vw, 32px)" }}>
                  {t("home.ctaTitle")}
                </h2>
                <p className="mb-0">{t("home.ctaBody")}</p>
              </div>
              <div
                className="col-lg-4 d-flex flex-wrap justify-content-lg-end"
                style={{ gap: "12px" }}
              >
                <Link href="/list" className="btn btn-primary py-3 px-4">
                  {t("nav.list")}
                </Link>
                <Link href="/hosts" className="btn btn-black py-3 px-4">
                  Host Tips
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
