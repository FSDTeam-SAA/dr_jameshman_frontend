import Link from "next/link";
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="container pt-28 md:pt-32 lg:pg-36 pb-10 md:pb-14 lg:pb-16">
      <article>
        <div className="rounded-2xl bg-white p-8 shadow-sm border">
          <h2 className="text-2xl font-semibold mb-2">Privacy Policy</h2>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">1. Introduction</h3>
            <p className="mt-2 text-gray-700">
              Perrystown Orthodontics is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your personal information when you visit our website.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">2. Information We Collect</h3>
            <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
              <li>
                Contact information (name, email, phone) when you book
                appointments.
              </li>
              <li>
                Patient/medical information you provide during consultations
                (with consent).
              </li>
              <li>
                Technical data (IP address, browser type, device, cookies) for
                analytics and site performance.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">
              3. How We Use Your Information
            </h3>
            <p className="mt-2 text-gray-700">
              We use personal data for purposes including:
            </p>
            <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
              <li>Booking and managing appointments.</li>
              <li>
                Communicating with you about treatments, reminders, and updates.
              </li>
              <li>Providing, improving, and personalising our services.</li>
              <li>Compliance with legal obligations.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">4. Cookies &amp; Tracking</h3>
            <p className="mt-2 text-gray-700">
              We use cookies and similar technologies to improve site experience
              and analyse usage. You can manage cookies via your browser
              settings. Third-party analytics (e.g. Google Analytics) may
              collect technical data.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">
              5. Data Sharing &amp; Third Parties
            </h3>
            <p className="mt-2 text-gray-700">
              We may share data with trusted third parties for operational
              reasons (e.g. appointment systems, payment processors) and when
              required by law. We only share the minimum necessary information
              and ensure processors provide adequate protection.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">6. Security</h3>
            <p className="mt-2 text-gray-700">
              We implement appropriate technical and organisational measures to
              protect your personal data. However no system is completely
              secure; if you suspect a data breach, contact us immediately.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">7. Data Retention</h3>
            <p className="mt-2 text-gray-700">
              We retain personal data only for as long as necessary to fulfil
              the purposes set out in this Policy and comply with legal
              obligations.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">8. Your Rights</h3>
            <p className="mt-2 text-gray-700">
              Depending on your jurisdiction, you may have the right to access,
              correct, delete, restrict processing of your personal data, or
              object to processing. To exercise rights, contact us using the
              details below.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">
              9. International Transfers
            </h3>
            <p className="mt-2 text-gray-700">
              If we transfer data outside the EEA, we will ensure appropriate
              safeguards are in place (e.g. standard contractual clauses).
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">10. Contact</h3>
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
          </section>

          <footer className="mt-4 pt-4 border-t text-sm text-gray-500">
            <div>
              For more details about how we process personal data, see our{" "}
              <Link href="/gdpr" className="underline">
                GDPR information
              </Link>
              .
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
};

export default PrivacyPolicyPage;
