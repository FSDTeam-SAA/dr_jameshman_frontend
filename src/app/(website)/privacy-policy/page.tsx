


import Link from "next/link";
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="container pt-28 md:pt-32 lg:pt-36 pb-10 md:pb-14 lg:pb-16">
      <article>
        <div className="rounded-2xl bg-white p-8 shadow-sm border">
          <h2 className="text-2xl font-semibold mb-4">
            Perrystown Orthodontics Ltd — Privacy Policy
          </h2>
          <p className="text-gray-700 mb-6">
            At Perrystown Orthodontics Ltd, we respect your privacy and are committed to protecting your personal data.
            This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website
            or use our services.
          </p>

          {/* 1. Who We Are */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold">1. Who We Are</h3>
            <p className="mt-2 text-gray-700">
              Perrystown Orthodontics Ltd is a specialist orthodontic practice based in Perrystown, Dublin 12, Ireland.
            </p>
            <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
              <li>
                Website:{" "}
                <Link
                  href="https://www.perrystownorthodontics.ie"
                  className="text-blue-600 hover:underline"
                >
                  www.perrystownorthodontics.ie
                </Link>
              </li>
              <li>Email: perrystownorthodontics@gmail.com</li>
              <li>Data Controller: Perrystown Orthodontics Ltd</li>
            </ul>
          </section>

          {/* 2. Information We Collect */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold">2. Information We Collect</h3>
            <p className="mt-2 text-gray-700">
              We collect certain information or data about you when you use our website or contact us. This includes:
            </p>
            <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
              <li>Questions, queries, or feedback you leave, including your name and email address</li>
              <li>Your IP address and browser details (e.g., version, type)</li>
              <li>Information on how you use our website, using cookies and analytics tools</li>
              <li>Details you provide to access our services (e.g., email address, contact number, or postal address)</li>
              <li>Information obtained when you join the practice, are referred to the practice, or subscribe to an email list</li>
            </ul>
          </section>

          {/* 3. Why We Collect Your Data */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold">3. Why We Collect Your Data</h3>
            <p className="mt-2 text-gray-700">
              We use this information to:
            </p>
            <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
              <li>Manage appointments, referrals, and treatment plans</li>
              <li>Respond to enquiries or feedback</li>
              <li>Improve our website and services by monitoring usage</li>
              <li>Send you information about our services if requested</li>
              <li>Meet our professional and legal obligations as a dental healthcare provider</li>
            </ul>
            <p className="mt-2 text-gray-700">
              We will never sell or share your personal data for marketing or commercial purposes.
            </p>
          </section>

          {/* 4. Lawful Basis */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold">4. Lawful Basis for Processing</h3>
            <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
              <li>Consent – when you provide information voluntarily (e.g., through our contact forms).</li>
              <li>Contract – when processing is necessary to provide orthodontic treatment or respond to your requests.</li>
              <li>Legal Obligation – to comply with Irish dental record-keeping and health regulations.</li>
              <li>Legitimate Interest – to manage and improve our website and communications.</li>
            </ul>
          </section>

          {/* 5. Sharing */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold">5. Sharing Your Information</h3>
            <p className="mt-2 text-gray-700">
              We only share your information when necessary, such as:
            </p>
            <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
              <li>With dental laboratories, specialists, or other healthcare providers directly involved in your care</li>
              <li>With service providers who securely process data on our behalf (e.g., appointment systems, cloud storage)</li>
              <li>With insurers or authorities when legally required</li>
            </ul>
            <p className="mt-2 text-gray-700">
              If we intend to refer a patient to another practitioner or to secondary care (such as a hospital),
              we will always obtain the patient’s consent before any data is shared.
              We do not share your data for marketing, market research, or advertising purposes.
            </p>
          </section>

          {/* 6. Storage & Retention */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold">6. Data Storage and Retention</h3>
            <p className="mt-2 text-gray-700">
              Personal data is stored securely within the European Union (EU) in both digital and hard copy formats.
              Some data may be stored in the United States when our providers are certified under the EU–US Data Privacy Framework.
              We retain patient records for as long as necessary to provide care and meet legal and professional obligations —
              typically 8 years after your last treatment or as required by law.
            </p>
          </section>

          {/* 7. Security */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold">7. Keeping Your Data Secure</h3>
            <p className="mt-2 text-gray-700">
              Transmitting information over the internet is not completely secure, and any data you send is at your own risk.
              Once received, we use technical and organisational measures to protect it against loss, misuse, or unauthorised access.
              Access to patient data is limited to authorised personnel only.
            </p>
          </section>

          {/* 8. Rights */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold">8. Your Rights</h3>
            <p className="mt-2 text-gray-700">
              Under the General Data Protection Regulation (GDPR), you have the following rights:
            </p>
            <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
              <li>The right to be informed</li>
              <li>The right of access</li>
              <li>The right to rectification</li>
              <li>The right to erasure (where appropriate; note that clinical records must be retained for legal periods)</li>
              <li>The right to restrict processing</li>
              <li>The right to data portability</li>
              <li>The right to object</li>
            </ul>
            <p className="mt-2 text-gray-700">
              You can learn more about these rights at{" "}
              <Link href="https://www.dataprotection.ie" className="text-blue-600 hover:underline">
                www.dataprotection.ie
              </Link>
              . To exercise these rights, contact us at perrystownorthodontics@gmail.com.
            </p>
          </section>

          {/* 9. Under 16 */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold">9. Users 16 Years and Under</h3>
            <p className="mt-2 text-gray-700">
              If you are aged 16 or under, you must obtain your parent or guardian’s permission before providing any
              personal information through our website. We do not knowingly collect data from minors without parental consent.
            </p>
          </section>

          {/* 10. Data Breach */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold">10. Data Breach Procedures</h3>
            <p className="mt-2 text-gray-700">
              In the unlikely event of a data breach, we will assess and respond immediately.
              If a breach poses a risk to your rights or freedoms, we will notify both you and the
              Data Protection Commission (DPC) within 72 hours, as required by law.
            </p>
          </section>

          {/* 11. Cookies */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold">11. Cookie Notice</h3>
            <p className="mt-2 text-gray-700">
              A “cookie” is a small piece of data sent from a website and stored on your device while browsing.
              When you visit our site, cookies help your device remember useful information such as visited pages,
              preferences, or login status.
            </p>
            <p className="mt-2 text-gray-700">
              Cookies are used to help our website function correctly and efficiently, and to improve user experience.
              Most browsers allow you to restrict or block cookies through settings. However, disabling cookies may
              affect your ability to use certain features.
            </p>
            <p className="mt-2 text-gray-700">
              For more information, visit{" "}
              <Link href="https://www.aboutcookies.org" className="text-blue-600 hover:underline">
                www.aboutcookies.org
              </Link>
              .
            </p>
          </section>

          {/* 12. Links */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold">12. Links to Other Websites</h3>
            <p className="mt-2 text-gray-700">
              Our website may contain links to other websites. This privacy policy only applies to
              www.perrystownorthodontics.ie, and we are not responsible for the privacy practices of other sites.
              If you follow a link to another website, please read their own privacy policy.
            </p>
          </section>

          {/* 13. Compliance */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold">13. Data Protection Compliance</h3>
            <p className="mt-2 text-gray-700">
              Perrystown Orthodontics Ltd aims to meet the requirements of the Data Protection Act 2018,
              the General Data Protection Regulation (EU), and guidelines from the Data Protection Commission (DPC),
              as well as professional standards set by the Dental Council of Ireland.
            </p>
          </section>

          {/* 14. Contact */}
          <section>
            <h3 className="text-lg font-semibold">14. Comments, Suggestions, or Complaints</h3>
            <p className="mt-2 text-gray-700">
              If you have any comments, questions, or concerns about this policy or how your data is handled, please contact us:
            </p>
            <div className="mt-3 rounded-md bg-gray-50 p-4 border text-sm text-gray-700">
              <p>📧 Email: perrystownorthodontics@gmail.com</p>
              <p>📞 Phone: 083 011 0533</p>
              <p>📍 Address: Perrystown Orthodontics Ltd, Perrystown, Dublin 12, Ireland</p>
            </div>
            <p className="mt-3 text-gray-700">
              If you are unsatisfied with how we handle your data, you may also contact the Data Protection Commission (DPC):<br />
              Website:{" "}
              <Link href="https://www.dataprotection.ie" className="text-blue-600 hover:underline">
                www.dataprotection.ie
              </Link>
              <br />
              Address: 21 Fitzwilliam Square South, Dublin 2, D02 RD28, Ireland
            </p>
          </section>

          <footer className="mt-8 pt-4 border-t text-sm text-gray-500">
            <p>Last Updated: March 2025</p>
          </footer>
        </div>
      </article>
    </div>
  );
};

export default PrivacyPolicyPage;
