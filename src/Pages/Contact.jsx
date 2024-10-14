import React from "react";
import { SectionContainer } from "../components/common/SectionContainer";

function Contact() {
  return (
    <SectionContainer>
      <h1 className="text-3xl font-bold text-center pt-16 pb-6 text-gray-800">Contact us</h1>
      <div className=" md:mb-20 p-3 md:p-10 mx-auto   md:flex md:gap-28 bg-white text-gray-700 rounded-lg md:shadow-md">
        <div className="md:w-1/2 flex flex-col gap-4 md:gap-10">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-1 md:mb-4">Customer support</h2>
            <p className="mb-4">
              For customer support issues, please visit our {" "} <a href="help" className="text-blue-500  inline ">help center {" "}</a> . There
              you’ll find answers to many common questions.
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-1 md:mb-4">
              Partnership opportunities
            </h2>
            <p className="mb-4">
              If you’re an individual or a company and would like to promote
              Safekidly, you can apply to our Affiliate program. For more
              details, please visit our  <a href="/partners-login" className="text-blue-500  inline "> Affiliate program page.</a>
            </p>
          </div>
          <p>For any other request, please contact us at <a href="mailto:Support@guardmykids.com" className="text-blue-500 hover:underline inline">Support@guardmykids.com</a>.</p>
        </div>
        <div className="md:w-1/2 my-10 md:my-0">
          <div className="mb-4 md:flex gap-6 justify-between">
            <div className="font-medium">
              <h2 className="text-xl font-bold py-2">INDIA Office</h2>
              <p>1st floor here showroom building, Raithupeta,</p>
              <p>Nandigama, NTR District,</p>
              <p>Andhra Pradesh, 521185</p>
            </div>

          </div>
          <div className="mt-6">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.339852940479!2d80.289630!3d16.776290!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4f9c11e22c1d77%3A0x7f94c7f67e51e8fc!2sLocation!5e0!3m2!1sen!2sin!4v1634510024765!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy">
          </iframe>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Contact;
