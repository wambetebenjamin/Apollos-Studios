import type { Metadata } from "next";
import { site, whatsappLink } from "@/lib/data/site";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Editorial Desk",
  description:
    "Contact the Apollos Studios editorial desk in Nairobi for directory updates, listing edits, community questions or suggesting creative spaces.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Apollos Studios"
        subtitle="Reach our editorial desk for listing updates, corrections or city suggestions."
        breadcrumbs={[{ label: "Contact" }]}
        backgroundImage="/images/page-banner.jpg"
      />

      <section className="ftco-section contact-section">
        <div className="container">
          <div className="row d-flex mb-5 contact-info">
            <div className="col-md-12 mb-4">
              <h2 className="h3" style={{ fontWeight: 700 }}>
                Editorial Desk Information
              </h2>
              <p style={{ color: "#333", maxWidth: "46rem" }}>
                Please note: Apollos Studios does not hold studio calendars or process bookings. To reserve a specific rehearsal room, vocal booth or workshop, open that space in the directory and message its host directly.
              </p>
            </div>

            <div className="col-md-4 d-flex mb-3">
              <div className="bg-light p-4 border w-100">
                <span
                  className="d-block mb-1"
                  style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#555" }}
                >
                  Editorial Desk
                </span>
                <p className="mb-0" style={{ color: "#000", fontWeight: 600 }}>
                  {site.deskLocation}
                </p>
              </div>
            </div>

            <div className="col-md-4 d-flex mb-3">
              <div className="bg-light p-4 border w-100">
                <span
                  className="d-block mb-1"
                  style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#555" }}
                >
                  WhatsApp Desk
                </span>
                <p className="mb-0">
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#000", fontWeight: 600 }}
                  >
                    {site.phoneDisplay}
                  </a>
                </p>
              </div>
            </div>

            <div className="col-md-4 d-flex mb-3">
              <div className="bg-light p-4 border w-100">
                <span
                  className="d-block mb-1"
                  style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#555" }}
                >
                  Email
                </span>
                <p className="mb-0">
                  <a
                    href={`mailto:${site.email}`}
                    style={{ color: "#000", fontWeight: 600 }}
                  >
                    {site.email}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="row block-9">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <ContactForm />
            </div>

            <div className="col-lg-4">
              <div className="p-4 border bg-white h-100 d-flex flex-column justify-content-between">
                <div>
                  <span className="ws-badge ws-badge--yellow mb-3">
                    Response Window
                  </span>
                  <h3 className="h5 mb-3" style={{ fontWeight: 700 }}>
                    How Editorial Review Works
                  </h3>
                  <p style={{ fontSize: "14px", color: "#333" }}>
                    We read every note Monday through Saturday (09:00 to 18:00 EAT). Rate updates and equipment changes from verified hosts are typically published within one business day.
                  </p>
                  <p style={{ fontSize: "14px", color: "#333" }}>
                    If you are writing on WhatsApp, include the studio name and city in your opening message for faster routing.
                  </p>
                </div>

                <div className="ws-disclaimer-banner mt-4" style={{ fontSize: "12px" }}>
                  {site.disclaimer}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
