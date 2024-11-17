import React, { useRef, useEffect } from "react";
import { SectionContainer } from "../components/common/SectionContainer";
import CreateAccount from "../components/CreateAccount";
import Faq from "../components/Faq";
import { PiNumberOneBold } from "react-icons/pi";

function GetStarted() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const createAccountRef = useRef(null);
  const installRef = useRef(null);
  const superviseRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SectionContainer>
      <div className="text-gray-700">
        {/* Header Section */}
        <p className="text-center text-2xl lg:text-5xl font-bold mx-auto mt-10 md:mt-20">
          Getting Started with Safekidly
        </p>
        <p className="text-lg lg:text-xl text-center my-5 lg:w-[65%] mx-auto">
          Follow these three easy steps to secure your child's devices and
          monitor their online activity right away.
        </p>

        {/* Navigation Buttons for Steps */}
        <div className="hidden md:block">
          <div className="flex flex-wrap gap-5 lg:w-[80%] mx-auto justify-center items-center lg:my-10">
            <p
              onClick={() => scrollToSection(createAccountRef)}
              className="cursor-pointer px-4 py-2 border rounded-full">
              1. Create Your Account
            </p>
            <p
              onClick={() => scrollToSection(installRef)}
              className="cursor-pointer px-4 py-2 border rounded-full">
              2. Install Safekidly on Your Child’s Devices
            </p>
            <p
              onClick={() => scrollToSection(superviseRef)}
              className="cursor-pointer px-4 py-2 border rounded-full">
              3. Start Monitoring
            </p>
          </div>
        </div>

        {/* Mobile Navigation (Horizontal Scroll) */}
        <div className="md:hidden flex overflow-x-auto gap-2">
          <p
            onClick={() => scrollToSection(createAccountRef)}
            className="cursor-pointer px-4 py-2 border rounded-full whitespace-nowrap">
            1. Create Your Account
          </p>
          <p
            onClick={() => scrollToSection(installRef)}
            className="cursor-pointer px-4 py-2 border rounded-full whitespace-nowrap">
            2. Install Safekidly
          </p>
          <p
            onClick={() => scrollToSection(superviseRef)}
            className="cursor-pointer px-4 py-2 border rounded-full whitespace-nowrap">
            3. Start Monitoring
          </p>
        </div>

        {/* Step 1: Create Account */}
        <div
          className="flex flex-col gap-20 lg:w-full mx-auto pt-8"
          ref={createAccountRef}>
          <div className="flex flex-col lg:flex-row px-6 md:px-32 py-2 md:py-8 bg-blue-50 rounded-xl justify-center items-center lg:gap-32 gap-10">
            <div>
              <p className="text-xl lg:text-4xl flex font-bold mt-8">
                <span className="text-viridianGreen bg-green-200 p-1 mx-3 rounded-full">
                  <PiNumberOneBold />
                </span>
                Create Your Account
              </p>
              <p className="text-lg my-6 lg:my-10">
                Sign up for a free Safekidly account. Once you're set up, you
                can choose to upgrade to a Premium plan that best fits your
                family's needs.
              </p>
            </div>
            <div>
              <img
                src="https://static.qustodio.com/public-site/uploads/2023/11/23143028/createacoount-image%402x.png"
                alt="Create Account"
              />
            </div>
          </div>

          {/* Step 2: Install Safekidly */}
          <div
            className="flex flex-col lg:flex-row justify-center items-center lg:gap-32 gap-10"
            ref={installRef}>
            <div className="w-[70%]">
              <img
                src="https://static.qustodio.com/public-site/uploads/2023/11/23150606/installqustodio-image%402x.png"
                alt="Install Safekidly"
              />
            </div>
            <div>
              <p className="text-xl lg:text-4xl font-bold mt-8 text-center lg:text-start">
                <span className="text-viridianGreen mx-1 inline ">2.</span>{" "}
                Install Safekidly on Your Child’s Devices
              </p>
              <p className="text-lg lg:my-4">
                After creating your account, install Safekidly on your child's
                devices to protect them—whether it's a smartphone, tablet,
                computer, or Kindle.
              </p>
              <div className="flex flex-wrap gap-5 justify-center">
                <p className="px-4 py-2 border rounded-lg">Android</p>
              </div>
              <div className="flex flex-col gap-4 mt-8">
                <p className="text-md lg:text-2xl mb-8">
                  How to install Safekidly on an Android device (Android OS 7 or
                  higher)
                </p>
                <p className="bg-green-50 text-lg py-4 flex rounded-xl">
                  <span className="text-xl font-bold mx-6">1.</span> Download
                  the Kids App from Google Play on your child's device.
                </p>
                <p className="bg-green-50 text-lg py-4 flex rounded-xl">
                  <span className="text-xl font-bold mx-6">2.</span> Log in
                  using your Safekidly credentials.
                </p>
                <p className="bg-green-50 text-lg py-4 flex rounded-xl">
                  <span className="text-xl font-bold mx-6">3.</span> Follow the
                  step-by-step setup instructions.
                </p>
                <p className="bg-green-50 text-lg py-4 flex rounded-xl">
                  <span className="text-xl font-bold mx-6">4.</span> Accept all
                  permissions to ensure complete protection and monitoring.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3: Start Supervising */}
          <div
            className="flex flex-col lg:flex-row justify-center items-center lg:gap-32 gap-10"
            ref={superviseRef}>
            <div className="lg:w-[80%]">
              <p className="text-xl lg:text-4xl font-bold text-center mt-8">
                <span className="text-viridianGreen mx-1 inline ">3.</span>{" "}
                Start Monitoring!
              </p>
              <p className="text-lg lg:my-10">
                Download the parent app or sign in on the web to access your
                dashboard. From here, monitor your child's activity in
                real-time, set alerts, and customize preferences for a seamless
                experience.
              </p>
            </div>
            <div>
              <img
                src="https://static.qustodio.com/public-site/uploads/2023/11/23170259/startsupervising-image%402x.png"
                alt="Start Supervising"
              />
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <CreateAccount />
        <Faq />
      </div>
    </SectionContainer>
  );
}

export default GetStarted;
