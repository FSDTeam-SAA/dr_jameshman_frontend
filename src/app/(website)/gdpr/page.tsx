import Link from "next/link";
import React from "react";

const GdprPage = () => {
  return (
    <div className="container pt-28 md:pt-32 lg:pg-36 pb-10 md:pb-14 lg:pb-16">
      <article>
        <div className="rounded-2xl bg-white p-8 shadow-sm border">
          <h2 className="text-2xl font-semibold mb-2">
            GDPR & Data Protection
          </h2>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">1. Controller</h3>
            <p className="mt-2 text-gray-700">
              Perrystown Orthodontics is the data controller responsible for
              your personal data collected via this website. Contact details are
              below.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">2. Lawful Bases</h3>
            <p className="mt-2 text-gray-700">
              We process personal data on lawful bases including consent,
              performance of a contract (appointments/treatment), legal
              obligations, and legitimate interests (site administration,
              security).
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">3. Your Rights under GDPR</h3>
            <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
              <li>Right to access your personal data.</li>
              <li>Right to rectification of inaccurate data.</li>
              <li>Right to erasure (in certain circumstances).</li>
              <li>Right to restrict or object to processing.</li>
              <li>Right to data portability.</li>
              <li>
                Right to withdraw consent at any time (where processing is based
                on consent).
              </li>
            </ul>
            <p className="mt-2 text-gray-700">
              To exercise any of these rights, contact us using the details
              below. We will respond within applicable legal timeframes.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">4. Complaints</h3>
            <p className="mt-2 text-gray-700">
              If you believe your data protection rights have been violated, you
              may file a complaint with the Data Protection Commission (Ireland)
              or other supervisory authority in your country.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">
              5. Data Security &amp; Processors
            </h3>
            <p className="mt-2 text-gray-700">
              We use processors (appointment systems, analytics, hosting
              providers). We ensure contracts are in place requiring appropriate
              security and confidentiality measures.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">
              6. Retention &amp; Deletion
            </h3>
            <p className="mt-2 text-gray-700">
              We retain personal data in line with clinical best practices and
              legal obligations. Where you request deletion, we will remove data
              unless retention is required by law or for legitimate business
              reasons.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">
              7. Contact &amp; Data Protection Officer
            </h3>
            <div className="mt-3 rounded-md bg-gray-50 p-4 border text-sm">
              <div>
                📧{" "}
                <a
                  href="mailto:perrystownorthodontics@gmail.com"
                  className="hover:underline"
                >
                  perrystownorthodontics@gmail.com
                </a>
              </div>
              <div className="mt-1">
                📍 44 Muckross Avenue, Perrystown, Dublin 12, D12VK49
              </div>
            </div>
            <p className="mt-2 text-gray-700">
              If you have privacy concerns or wish to exercise your rights,
              contact us by email. For unresolved complaints you may contact the
              Irish Data Protection Commission: <em>www.dataprotection.ie</em>.
            </p>
          </section>

          <footer className="mt-4 pt-4 border-t text-sm text-gray-500">
            <div>
              These pages summarise key points about your privacy rights. For
              full details see our{" "}
              <Link href="/privacy-policy" className="underline">
                Privacy Policy
              </Link>
              .
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
};

export default GdprPage;
