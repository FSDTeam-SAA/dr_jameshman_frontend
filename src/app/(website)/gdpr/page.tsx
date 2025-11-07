
import React from "react";

const GdprPage = () => {
  return (
    <div className="container pt-28 md:pt-32 lg:pg-36 pb-10 md:pb-14 lg:pb-16">
      <article>
        <div className="rounded-2xl bg-white p-8 shadow-sm border">
          <h2 className="text-2xl font-semibold mb-2">GDPR Policy</h2>
          <p className="text-sm text-gray-500 mb-6">
            This GDPR Policy explains how Perrystown Orthodontics Ltd complies
            with the General Data Protection Regulation (EU). Please read this
            carefully to understand how we collect, use, and protect your
            personal data.
          </p>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">1. Data Controller</h3>
            <p className="mt-2 text-gray-700">
              Perrystown Orthodontics Ltd is the data controller responsible for
              personal data collected via our website and during clinical
              interactions.
            </p>
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
              <div className="mt-1">📍 Perrystown, Dublin 12, Ireland</div>
            </div>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">
              2. Legal Bases for Processing
            </h3>
            <p className="mt-2 text-gray-700">
              We process personal data on the following lawful bases:
            </p>
            <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
              <li>Consent (e.g., marketing communications)</li>
              <li>Contract (providing treatment and services you request)</li>
              <li>Legal obligation (record keeping required by health authorities)</li>
              <li>Legitimate interest (clinic administration and safety)</li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">3. Data We Process</h3>
            <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
              <li>Contact details and communication records</li>
              <li>Health and dental information required for treatment</li>
              <li>Payment and billing information</li>
              <li>Website or cookie data (if applicable)</li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">4. Children’s Data</h3>
            <p className="mt-2 text-gray-700">
              Perrystown Orthodontics provides services to children and young
              people as patients, but we only collect personal data from minors
              with appropriate parental or guardian consent.
            </p>
            <p className="mt-2 text-gray-700">
              If you are under 16 years old, please ensure your parent or
              guardian gives permission before submitting any personal data
              online.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">5. Data Retention</h3>
            <p className="mt-2 text-gray-700">
              We retain patient records for as long as required by Irish dental
              and medical record-keeping laws, typically up to 8 years after
              treatment ends, unless a longer period is legally required.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">6. Data Sharing</h3>
            <p className="mt-2 text-gray-700">
              We may share data with the following, where necessary:
            </p>
            <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
              <li>Dental labs, specialists, or other healthcare providers</li>
              <li>Software or IT support providers (under GDPR-compliant agreements)</li>
              <li>Insurers or regulatory bodies when legally required</li>
            </ul>
            <p className="mt-2 text-gray-700">
              We do not transfer personal data outside the EU unless adequate
              safeguards are in place.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">7. Your Rights Under GDPR</h3>
            <p className="mt-2 text-gray-700">
              You have the right to:
            </p>
            <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
              <li>Access, correct, or delete your personal data</li>
              <li>Restrict or object to processing</li>
              <li>Request data portability</li>
              <li>Lodge a complaint with the Data Protection Commission</li>
            </ul>
            <p className="mt-2 text-gray-700">
              Requests can be sent to{" "}
              <a
                href="mailto:perrystownorthodontics@gmail.com"
                className="underline"
              >
                perrystownorthodontics@gmail.com
              </a>
              . We aim to respond within 30 days.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">8. Data Breach Procedures</h3>
            <p className="mt-2 text-gray-700">
              If a data breach occurs, we will assess its impact immediately. If
              there’s a risk to your rights or freedoms, we will notify both you
              and the Data Protection Commission within 72 hours, as required by
              law.
            </p>
          </section>

          <footer className="mt-4 pt-4 border-t text-sm text-gray-500">
            <div>Last Updated: March 2025</div>
          
          </footer>
        </div>
      </article>
    </div>
  );
};

export default GdprPage;
