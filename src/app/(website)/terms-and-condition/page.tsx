
import React from "react";

const TermsAndConditionPage = () => {
  return (
    <div className="container pt-28 md:pt-32 lg:pt-36 pb-10 md:pb-14 lg:pb-16">
      <article className="lg:col-span-3">
        <div className="rounded-2xl bg-white p-8 shadow-sm border">
          <h2 className="text-2xl font-semibold mb-2">Terms &amp; Conditions</h2>
          <p className="text-sm text-gray-500 mb-6">
            Welcome to Perrystown Orthodontics. By using our website or booking an appointment online, you agree
            to the following terms and conditions. Please read them carefully.
          </p>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">1. About Us</h3>
            <p className="mt-2 text-gray-700">
              This website is operated by Perrystown Orthodontics Ltd, based in Perrystown, Dublin 12, Ireland.
              You can contact us at{" "}
              <a
                href="mailto:perrystownorthodontics@gmail.com"
                className="underline"
              >
                perrystownorthodontics@gmail.com
              </a>.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">2. Website Use</h3>
            <p className="mt-2 text-gray-700">
              Our website is for general information only. It does not replace a consultation with a qualified
              orthodontist. We do our best to keep information accurate and up to date, but we make no guarantees
              as to completeness or suitability for your personal circumstances.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">3. Appointments &amp; Bookings</h3>
            <p className="mt-2 text-gray-700">
              Online booking is available for convenience. Appointments are only confirmed once you receive a
              confirmation email. If you need to cancel or reschedule, please give as much notice as possible.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">4. Treatments &amp; Results</h3>
            <p className="mt-2 text-gray-700">
              All treatments are tailored to the individual. Results may vary depending on your oral health,
              lifestyle, and compliance with professional advice. We do not guarantee specific results.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">5. Intellectual Property</h3>
            <p className="mt-2 text-gray-700">
              {/* All text, photos, and materials on this site are the property of Perrystown Orthodontics Ltd and may
              not be copied or used without permission. */}
              All text, photos, and materials on this site are the property of <strong>Perrystown Orthodontics Ltd</strong> (to be changed to - Ortholife Ltd) and may not be copied or used without permission.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">6. Limitation of Liability</h3>
            <p className="mt-2 text-gray-700">
              We do not accept responsibility for any loss or damage arising from use of this website or reliance
              on its content. Nothing in these terms limits your statutory rights under Irish law.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold">7. Governing Law</h3>
            <p className="mt-2 text-gray-700">
              These terms are governed by the laws of Ireland, and any disputes shall be subject to the exclusive
              jurisdiction of the Irish courts.
            </p>
          </section>

          <footer className="mt-6 pt-4 border-t text-sm text-gray-500">
            <div>Last Updated: March 2025</div>
           
          </footer>
        </div>
      </article>
    </div>
  );
};

export default TermsAndConditionPage;
