import React, { useEffect } from "react";
import { SectionContainer } from "../components/common/SectionContainer";

function WebsitePolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <SectionContainer>
      <div className="py-10 md:py-16">
        <h1 className="text-2xl font-bold text-gray-800">
          Safekidly Privacy Policy
        </h1>
        <p className="mt-4 text-gray-600">
          Safekidly Technologies S.L. (“Company,” “We,” or “Us”) is dedicated to
          protecting the privacy of all visitors to our website
          (www.mdm.prabhaktech.com). This Privacy Policy outlines how we
          collect, use, and manage personal data obtained through our Website or
          provided to us via email or other linked websites. Note that this
          policy does not cover data processing related to our services; please
          refer to our service terms for more details.
        </p>
        <p className="mt-4 text-gray-600">
          The data controller for any personal data you share is Safekidly
          Technologies SL, located at 1st Floor, Showroom Building, Raithupeta,
          Nandigama, NTR District, Andhra Pradesh, 521185, India.
        </p>
        <p className="mt-4 text-gray-600">
          For any inquiries or concerns related to data protection, you can
          reach our Data Protection Officer at:&nbsp;
          <a
            href="mailto:info@prabhaktech.com"
            className="text-blue-500 hover:underline inline">
            info@prabhaktech.com
          </a>
        </p>

        {/* Section 1 */}
        <p className="mt-4 font-bold text-gray-800">
          1. Acceptance of This Privacy Policy
        </p>
        <p className="mt-2 text-gray-600">
          By accessing or using our Website, providing your personal
          information, or contacting us for any reason, you agree to this
          Privacy Policy. By doing so, you consent to the collection, storage,
          and processing of your personal data as described, including the
          receipt of electronic communications where applicable.
        </p>

        {/* Section 2 */}
        <p className="mt-4 font-bold text-gray-800">
          2. Personal Data Collection
        </p>
        <p className="mt-2 text-gray-600">
          <strong>Contact Data:</strong> If you email us with personal
          information, we will process the data provided to respond to your
          query.
        </p>
        <p className="mt-2 text-gray-600">
          <strong>Navigation Data:</strong> When you visit our website, we
          automatically collect the URL of the site you came from, the site you
          visit when leaving, your IP address, and browser type. This
          information is used to analyze trends and enhance the website
          experience. This data will not be shared with third parties without
          your consent. For more information, please see our&nbsp;
          <a
            href="/cookie-policy"
            className="text-blue-500 hover:underline inline">
            cookie policy
          </a>
          .
        </p>

        {/* Section 3 */}
        <p className="mt-4 font-bold text-gray-800">3. Legal Basis</p>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            Legitimate interest in managing our services and responding to your
            requests. We consider any impact on you and your rights before
            processing your data.
          </li>
          <li>Compliance with legal obligations, where applicable.</li>
        </ul>

        {/* Section 4 */}
        <p className="mt-4 font-bold text-gray-800">4. Use of Personal Data</p>
        <ul className="list-disc list-inside text-gray-600">
          <li>To contact you and personalize your experience</li>
          <li>To manage services or actions you request from us</li>
          <li>To improve our website and services</li>
        </ul>

        {/* Section 5 */}
        <p className="mt-4 font-bold text-gray-800">5. Data Disclosure</p>
        <p className="mt-2 text-gray-600">
          Your personal data is treated confidentially in compliance with
          applicable laws. Unless specified, we will not share your data with
          third parties, nor do we sell or lease personal data.
        </p>
        <p className="mt-2 text-gray-600">
          However, data may be disclosed in certain situations:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            To potential buyers or auditors during the sale or acquisition of
            the Company or part of its business.
          </li>
          <li>To other companies within our corporate group.</li>
          <li>
            To our service providers when necessary to perform services on our
            behalf. We ensure all third parties respect your data privacy and
            adhere to legal standards.
          </li>
        </ul>

        {/* Section 6 */}
        <p className="mt-4 font-bold text-gray-800">
          6. International Transfers
        </p>
        <p className="mt-2 text-gray-600">
          We may use third-party service providers who process data outside of
          India. These providers adhere to agreements that include safeguards
          like the EC model clauses to ensure data protection.
        </p>

        {/* Section 7 */}
        <p className="mt-4 font-bold text-gray-800">7. Security Measures</p>
        <p className="mt-2 text-gray-600">
          We implement appropriate security measures to protect your personal
          data against unauthorized access, alteration, or destruction, as
          required by law.
        </p>

        {/* Section 8 */}
        <p className="mt-4 font-bold text-gray-800">8. Data Retention</p>
        <p className="mt-2 text-gray-600">
          Personal data is retained only as long as necessary for the purposes
          collected, including legal or regulatory requirements. Afterward, data
          will be securely blocked and stored for up to 10 years, depending on
          applicable laws.
        </p>

        {/* Section 9 */}
        <p className="mt-4 font-bold text-gray-800">9. Your Rights</p>
        <p className="mt-2 text-gray-600">
          You have the right to access, correct, delete, or object to the
          processing of your data. You can exercise these rights by emailing us
          at&nbsp;
          <a
            href="mailto:info@prabhaktech.com"
            className="text-blue-500 hover:underline inline">
            info@prabhaktech.com
          </a>
          . Additionally, you can withdraw your consent for processing at any
          time, though this may affect our ability to provide certain services.
        </p>

        {/* Section 10 */}
        <p className="mt-4 font-bold text-gray-800">10. General</p>
        <p className="mt-2 text-gray-600">
          We may update this Privacy Policy periodically. If changes are made,
          we will notify you via email or through a prominent notice on our
          website. Continued use of our website after updates constitutes
          acceptance of the revised policy.
        </p>
        <p className="mt-2 text-gray-600">
          Unless otherwise governed by specific local regulations, this Privacy
          Policy is subject to the laws of India.
        </p>
      </div>
    </SectionContainer>
  );
}

export default WebsitePolicy;
