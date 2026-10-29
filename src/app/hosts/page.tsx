import type { Metadata } from "next";
import Link from "next/link";
import { HOST_BENEFITS, HOST_FAQS, HOST_TIPS } from "@/lib/data/hosts";
import { site } from "@/lib/data/site";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "For Studio Hosts & Stewards",
  description:
    "Simple host tips, room readiness standards and zero-commission listing benefits for independent studios across African cities.",
};

export default function HostsPage() {
  return (
    <>
      <PageHero
        title="For Studio Hosts & Stewards"
        subtitle="Share idle weekday hours with working musicians, podcasters, visual artists and makers on your own terms."
        breadcrumbs={[{ label: "For Hosts" }]}
        backgroundImage="/images/hosts-banner.jpg"
      />

      {/* Benefits */}
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-8 text-center heading-section ftco-animate">
              <span className="subheading">Listing Benefits</span>
              <h2 className="mb-3">Built to Respect Working Studio Stewards</h2>
              <p>
                Whether you run a converted garden rehearsal annex in Nairobi or a shared ceramic bench in Accra, Apollos Studios helps right-fit artists find you without platform middlemen.
              </p>
            </div>
          </div>

          <div className="row ftco-services">
            {HOST_BENEFITS.map((b) => (
              <div key={b.number} className="col-md-6 col-lg-3 d-flex align-self-stretch mb-4 ftco-animate">
                <div className="media block-6 services d-block w-100">
                  <div className="icon d-flex justify-content-center align-items-center mb-3">
                    <span className={b.icon} aria-hidden="true" />
                  </div>
                  <div className="media-body">
                    <span className="ws-badge mb-2">Benefit {b.number}</span>
                    <h3 className="heading">{b.title}</h3>
                    <p className="mb-0" style={{ fontSize: "14px" }}>
                      {b.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Practical Host Tips */}
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-8 text-center heading-section ftco-animate">
              <span className="subheading">Practical Host Tips</span>
              <h2 className="mb-3">Six Habits That Keep Sessions Calm</h2>
              <p>
                Clear expectations protect your microphones, amplifiers, kilns and landlord relationships.
              </p>
            </div>
          </div>

          <div className="row">
            {HOST_TIPS.map((tip, idx) => (
              <div key={tip.title} className="col-md-6 col-lg-4 mb-4 d-flex ftco-animate">
                <div className="p-4 bg-white border w-100">
                  <span className="ws-badge ws-badge--yellow mb-3">
                    Tip 0{idx + 1}
                  </span>
                  <h3 className="h5 mb-2" style={{ fontWeight: 700 }}>
                    {tip.title}
                  </h3>
                  <p className="mb-0" style={{ fontSize: "14px", color: "#333" }}>
                    {tip.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Host FAQs & CTA */}
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mb-5 mb-lg-0 ftco-animate">
              <div className="heading-section mb-4">
                <span className="subheading">Common Questions</span>
                <h2 className="h3">Host FAQ</h2>
              </div>
              {HOST_FAQS.map((faq) => (
                <div key={faq.question} className="mb-4 pb-3" style={{ borderBottom: "1px solid #ececec" }}>
                  <h3 className="h6 mb-2" style={{ fontWeight: 700 }}>
                    {faq.question}
                  </h3>
                  <p className="mb-0" style={{ fontSize: "14px", color: "#333" }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="col-lg-5 ftco-animate">
              <div className="p-4 p-md-5 bg-light border">
                <span className="ws-badge ws-badge--yellow mb-3">
                  Free Independent Listing
                </span>
                <h3 className="h4 mb-3" style={{ fontWeight: 700 }}>
                  Ready to Share Your Room Specs?
                </h3>
                <p className="mb-3" style={{ fontSize: "14px", color: "#333" }}>
                  Submission takes about five minutes. Prepare your approximate floor area, power backup setup, hourly/day rate in local currency and evening curfew rules.
                </p>
                <div className="ws-disclaimer-banner mb-4" style={{ fontSize: "12px" }}>
                  {site.disclaimer}
                </div>
                <Link href="/list" className="btn btn-primary btn-block py-3 px-4">
                  Submit a Space Listing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
