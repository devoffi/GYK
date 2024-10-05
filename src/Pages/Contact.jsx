import React from "react";
import { SectionContainer } from "../components/common/SectionContainer";

function Contact() {
  return (
    <SectionContainer>
      <div className=" my-16 p-10 mx-auto   flex md:gap-28 bg-white text-gray-700 rounded-lg shadow-md">
        <div className="w-1/2 flex flex-col gap-10">
          <div>
            <h2 className="text-4xl font-bold mb-4">Customer support</h2>
            <p className="mb-4">
              For customer support issues, please visit our {" "} <a href="help" className="text-blue-500  inline ">help center {" "}</a> . There
              you’ll find answers to many common questions.
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Partnership opportunities
            </h2>
            <p className="mb-4">
              If you’re an individual or a company and would like to promote
              GuardMyKids, you can apply to our Affiliate program. For more
              details, please visit our  <a href="/partners-login" className="text-blue-500  inline "> Affiliate program page.</a>
            </p>
          </div>
          <p>For any other request, please contact us at <a href="mailto:info@qustodio.com" className="text-blue-500 hover:underline inline">info@qustodio.com</a>.</p>
        </div>
        <div className="w-1/2">
          <div className="mb-4 flex gap-6 justify-between">
            <div className="font-medium">
              <h2 className="text-xl font-bold py-2">U.S. Office</h2>
              <p>227 W Trade St #1100</p>
              <p>Carillon Tower</p>
              <p>Charlotte, NC 28202 USA</p>
            </div>
            <div className="font-medium">
              <h2  className="text-xl font-bold py-2">U.S. Office</h2>
              <p>227 W Trade St #1100</p>
              <p>Carillon Tower</p>
              <p>Charlotte, NC 28202 USA</p>
            </div>
          </div>
          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.339852940479!2d77.2219193143719!3d28.612912482500904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c1c1c7e5d4eab%3A0x639ad4976fa660e0!2sIndia%20Gate%2C%20Rajpath%2C%20Central%20Secretariat%2C%20New%20Delhi%2C%20Delhi%20110001%2C%20India!5e0!3m2!1sen!2sin!4v1634510024765!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Contact;
