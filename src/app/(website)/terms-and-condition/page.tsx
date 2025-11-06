import Link from "next/link";
import React from "react";

const TermsAndConditionPage = () => {
  return (
    <div className="container pt-28 md:pt-32 lg:pg-36 pb-10 md:pb-14 lg:pb-16">
      {/* Content */}
      <article className="lg:col-span-3">
        <div className="rounded-2xl bg-white p-8 shadow-sm border">
          <h2 className="text-2xl font-semibold mb-2">
            Terms &amp; Conditions
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Welcome to Perrystown Orthodontics. By accessing or using our
            website (the “Site”), you agree to comply with and be bound by these
            Terms and Conditions. Please read them carefully before using our
            services.
          </p>

          <section id="acceptance" className="mb-6">
            <h3 className="text-lg font-semibold">1. Acceptance of Terms</h3>
            <p className="mt-2 text-gray-700">
              By visiting or using our website, you confirm that you have read,
              understood, and agreed to these Terms and Conditions. If you do
              not agree, please do not use the Site.
            </p>
          </section>

          <section id="services" className="mb-6">
            <h3 className="text-lg font-semibold">2. Services</h3>
            <p className="mt-2 text-gray-700">
              Perrystown Orthodontics provides information about our orthodontic
              treatments, team, and contact options. All information on this
              website is for general informational purposes only and should not
              be considered medical advice. For personalized dental or
              orthodontic care, please book a consultation with one of our
              qualified professionals.
            </p>
          </section>

          <section id="appointments" className="mb-6">
            <h3 className="text-lg font-semibold">
              3. Appointments &amp; Cancellations
            </h3>
            <p className="mt-2 text-gray-700">
              You may request appointments through our online booking form,
              email, or phone. We kindly ask for at least 24 hours’ notice for
              appointment cancellations or rescheduling. Failure to provide
              adequate notice may result in a cancellation fee.
            </p>
          </section>

          <section id="intellectual" className="mb-6">
            <h3 className="text-lg font-semibold">4. Intellectual Property</h3>
            <p className="mt-2 text-gray-700">
              All website content, including text, images, graphics, logos, and
              videos, is the property of Perrystown Orthodontics unless
              otherwise stated. You may not copy, reproduce, or distribute any
              material from this website without prior written permission.
            </p>
          </section>

          <section id="use" className="mb-6">
            <h3 className="text-lg font-semibold">5. Website Use</h3>
            <p className="mt-2 text-gray-700">
              You agree not to misuse this website by introducing viruses,
              attempting unauthorized access, or interfering with its
              functionality. We reserve the right to restrict or terminate
              access to users who violate these terms.
            </p>
          </section>

          <section id="links" className="mb-6">
            <h3 className="text-lg font-semibold">6. External Links</h3>
            <p className="mt-2 text-gray-700">
              Our website may contain links to external websites. Perrystown
              Orthodontics is not responsible for the content, privacy policies,
              or practices of any third-party sites.
            </p>
          </section>

          <section id="liability" className="mb-6">
            <h3 className="text-lg font-semibold">
              7. Limitation of Liability
            </h3>
            <p className="mt-2 text-gray-700">
              While we strive to keep all information accurate and up to date,
              Perrystown Orthodontics does not guarantee that the website will
              always be available, error-free, or complete. We are not liable
              for any loss or damage resulting from your use of the website or
              reliance on its content.
            </p>
          </section>

          <section id="changes" className="mb-6">
            <h3 className="text-lg font-semibold">8. Changes to Terms</h3>
            <p className="mt-2 text-gray-700">
              We may update these Terms &amp; Conditions periodically. Any
              changes will be posted on this page with an updated “Last Updated”
              date.
            </p>
          </section>

          <section id="contact" className="mb-6">
            <h3 className="text-lg font-semibold">9. Contact Us</h3>
            <p className="mt-2 text-gray-700">
              If you have any questions about these Terms, please contact us at:
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
              <div className="mt-1">
                📍 44 Muckross Avenue, Perrystown, Dublin 12, D12VK49
              </div>
            </div>
          </section>

          <footer className="mt-4 pt-4 border-t text-sm text-gray-500">
            <div>
              These Terms and Conditions constitute the entire agreement between
              you and Perrystown Orthodontics relating to your use of the Site.
            </div>
            <div className="mt-2">
              For our{" "}
              <Link href="/privacy-policy" className="underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/gdpr" className="underline">
                GDPR information
              </Link>
              , please visit the respective pages.
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
};

export default TermsAndConditionPage;
