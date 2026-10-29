import type { Metadata } from "next";
import { site } from "@/lib/data/site";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use and independent directory disclaimer for Apollos Studios.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Use"
        subtitle="Clear terms governing use of the Apollos Studios independent creative workspace directory."
        breadcrumbs={[{ label: "Terms of Use" }]}
        backgroundImage="/images/page-banner.jpg"
      />

      <section className="ftco-section">
        <div className="container" style={{ maxWidth: "54rem" }}>
          <div className="ws-disclaimer-banner mb-5">
            <strong>Core Directory Disclaimer: </strong>
            {site.disclaimer}
          </div>

          <h2 className="h4 mb-3" style={{ fontWeight: 700 }}>
            1. Independent Directory Role Only
          </h2>
          <p className="mb-4" style={{ color: "#333" }}>
            Apollos Studios publishes informational listings about rehearsal rooms, recording nooks, podcast booths, visual art studios and maker workshops across African cities. We do not own, lease, manage or inspect physical rooms on a real-time basis, and we are not a party to any rental, booking, engineering or kiln-firing agreement between artists and hosts.
          </p>

          <h2 className="h4 mb-3" style={{ fontWeight: 700 }}>
            2. Direct Arrangements, Rates &amp; Availability
          </h2>
          <p className="mb-4" style={{ color: "#333" }}>
            Published hourly and day rate bands are indicative figures supplied by studio hosts in local currency. Availability, deposits, cancellation terms, equipment substitutions and engineer fees must always be confirmed directly in writing with the host prior to travelling or transferring funds.
          </p>

          <h2 className="h4 mb-3" style={{ fontWeight: 700 }}>
            3. House Rules, Safety &amp; Local Laws
          </h2>
          <p className="mb-4" style={{ color: "#333" }}>
            Visiting creatives and studio hosts are each responsible for personal safety, equipment insurance, electrical/solvent precautions, sound-level curfews and full compliance with applicable municipal and national laws.
          </p>

          <h2 className="h4 mb-3" style={{ fontWeight: 700 }}>
            4. Accuracy of Host Submissions
          </h2>
          <p className="mb-4" style={{ color: "#333" }}>
            By submitting a room through List a Space, you confirm that you have authority to advertise the workspace, that equipment and power descriptions are truthful, and that we may edit formatting for clarity or remove listings reported as unsafe, closed or misleading.
          </p>

          <h2 className="h4 mb-3" style={{ fontWeight: 700 }}>
            5. Limitation of Liability
          </h2>
          <p className="mb-0" style={{ color: "#333" }}>
            To the fullest extent permitted by applicable law, Apollos Studios provides directory information &ldquo;as is&rdquo; without warranties of merchantability, availability or fitness for a particular session, and shall not be liable for session cancellations, equipment damage or disputes between users and third-party studio hosts.
          </p>
        </div>
      </section>
    </>
  );
}
