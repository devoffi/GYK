import React, { useEffect } from "react";
import { SectionContainer } from "../components/common/SectionContainer";

function LegalNotic() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <SectionContainer>
      <div className="text-gray-700 text-lg font-medium my-10 md:my-20 text-center md:text-start">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold">Legal Notice</h1>

        {/* Who we are */}
        <h2 className="text-2xl font-semibold pt-8">Who we are</h2>
        <p className="py-4">
          You are accessing the website of Safekidly Technologies S.L.
          (“safeKidlys”, the “Company” or “we/us”) available at
          <a
            href="https://mdm.prabhaktech.com"
            className="text-blue-500 hover:underline inline">
            {" "}
            www.mdm.prabhaktech.com
          </a>
          (hereinafter the “Website”).
        </p>
        <p className="pt-1 pb-2">
          Safekidly Technologies is domiciled at 1st floor, Here Showroom
          Building, Raithupeta, Nandigama, NTR District, Andhra Pradesh, India.
          For inquiries, please contact us at
          <a
            href="mailto:info@prabhaktech.com"
            className="text-blue-500 hover:underline inline">
            {" "}
            info@prabhaktech.com
          </a>
          .
        </p>

        {/* Intellectual and Industrial Property */}
        <h2 className="text-2xl font-semibold pt-8">
          Intellectual and Industrial Property
        </h2>
        <p className="py-4">
          All rights of intellectual property on any contents of this Website
          including, without limitation, images, trademarks, logos, distinctive
          signs, sounds, animations, texts, and audiovisual recordings are owned
          by the Company or its licensors and are protected by national and
          international laws. Any reproduction, copying, publication,
          distribution, modification, or other use of this Website or its
          content without prior express written permission of the Company is
          strictly prohibited.
        </p>

        {/* Responsibility */}
        <h2 className="text-2xl font-semibold pt-8">Responsibility</h2>
        <p className="py-4">
          Safekidly is not responsible for the content of third-party websites
          accessible from this Website, nor the accuracy of information not
          created by us. Furthermore, we will not be responsible for technical
          issues or interruptions in accessing the website.
        </p>
        <p className="py-4">
          The Company reserves the right to update, modify, or delete
          information on its website at any time without prior notice.
        </p>

        {/* Data Protection */}
        <h2 className="text-2xl font-semibold pt-8">
          Protection of Personal Data
        </h2>
        <p className="py-4">
          We will process your personal data collected on our Website or via
          email in accordance with our
          <a href="#" className="text-blue-500 hover:underline inline">
            {" "}
            Privacy Policy
          </a>
          .
        </p>

        {/* Cookies */}
        <h2 className="text-2xl font-semibold pt-8">Cookies</h2>
        <p className="py-4">
          This Website uses cookies. Please refer to our
          <a href="#" className="text-blue-500 hover:underline inline">
            {" "}
            Cookie Policy
          </a>{" "}
          for further details.
        </p>

        {/* Services */}
        <h2 className="text-2xl font-semibold pt-8">
          Safekidly Family Services
        </h2>
        <p className="py-4">
          The services offered by Safekidly Family are regulated by our specific
          <a href="#" className="text-blue-500 hover:underline inline">
            {" "}
            Terms and Conditions
          </a>{" "}
          and
          <a href="#" className="text-blue-500 hover:underline inline">
            {" "}
            Privacy Policy
          </a>
          .
        </p>

        {/* Applicable Law */}
        <h2 className="text-2xl font-semibold pt-8">
          Applicable Law and Jurisdiction
        </h2>
        <p className="py-4">
          These terms, including our Privacy and Cookie Policies, are governed
          by Indian laws. The courts of Andhra Pradesh shall have jurisdiction
          over any disputes arising from the use of this Website.
        </p>
      </div>
    </SectionContainer>
  );
}

export default LegalNotic;
