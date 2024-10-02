import React, { useRef } from "react";
import { SectionContainer } from "../components/common/SectionContainer";
import CreateAccount from "../components/CreateAccount";
import Faq from "../components/Faq";
import { PiNumberOneBold } from "react-icons/pi";

function GetStarted() {
  const createAccountRef = useRef(null);
  const installRef = useRef(null);
  const superviseRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SectionContainer>
      <div className="text-gray-700">
        <p className="text-center text-2xl lg:text-5xl font-bold mx-auto mt-10 md:mt-20">
          Getting started with GuardMyKids
        </p>
        <p className="text-lg lg:text-xl text-center my-5 lg:w-[65%] mx-auto">
          Follow these three simple steps to start protecting your child's devices
          and supervising their online activity immediately.
        </p>
        <div className="hidden md:block">
          <div className="flex flex-wrap gap-5 lg:w-[80%] mx-auto justify-center items-center lg:my-10">
            <p onClick={() => scrollToSection(createAccountRef)} className="cursor-pointer px-4 py-2 border rounded-full">1. Create your account</p>
            <p onClick={() => scrollToSection(installRef)} className="cursor-pointer px-4 py-2 border rounded-full">2. Install GuardMyKids on your child's devices</p>
            <p onClick={() => scrollToSection(superviseRef)} className="cursor-pointer px-4 py-2 border rounded-full">3. Start supervising</p>
          </div>
        </div>

        <div className="md:hidden flex overflow-x-auto scrollbar-hidden scrollbar-hide gap-2">
          <p onClick={() => scrollToSection(createAccountRef)} className="cursor-pointer px-4 py-2 border rounded-full whitespace-nowrap">1. Create your account</p>
          <p onClick={() => scrollToSection(installRef)} className="cursor-pointer px-4 py-2 border rounded-full whitespace-nowrap">2. Install GuardMyKids on your child's devices</p>
          <p onClick={() => scrollToSection(superviseRef)} className="cursor-pointer px-4 py-2 border rounded-full whitespace-nowrap ">3. Start supervising</p>
        </div>

        <div className="flex flex-col gap-20 lg:w-full mx-auto pt-8" ref={createAccountRef}>
          <div className="flex flex-col lg:flex-row px-6 md:px-32 py-2 md:py-8 bg-blue-50 rounded-xl justify-center items-center lg:gap-32 gap-10">
            <div>
              <p className="text-xl lg:text-4xl flex font-bold  mt-8">
                <span className="text-viridianGreen bg-green-200 p-1 mx-3 rounded-full">< PiNumberOneBold  /></span>
                Create your account
              </p>
              <p className="text-lg my-6 lg:my-10">
                Sign up for your free GuardMyKids account and then decide if you want
                to upgrade to a Premium plan that suits your family.
              </p>
            </div>
            <div>
              <img src="https://static.qustodio.com/public-site/uploads/2023/11/23143028/createacoount-image%402x.png" alt="Create Account" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-32 gap-10" ref={installRef}>
            <div className="w-[70%]">
              <img src="https://static.qustodio.com/public-site/uploads/2023/11/23150606/installqustodio-image%402x.png" alt="Install GuardMyKids" />
            </div>
            <div>
              <p className="text-xl lg:text-4xl md:flex font-bold mt-8 text-center md:text-start">
                <span className=" text-viridianGreen  mx-3"><span className="  rounded-full pb-2.5 ">2.</span></span>
                Install GuardMyKids on your child's devices
              </p>
              <p className="text-lg lg:my-4">
                Once you've created your account, you're ready to install GuardMyKids
                on your child's devices. Protect everything, from smartphones and
                tablets, to computers and Kindles.
              </p>
              <div className="flex flex-wrap gap-5 mx-auto justify-center">
                <p className="px-4 py-2 border rounded-lg">Android</p>
                
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-md lg:text-2xl my-10 mb-8">
                How to install GuardMyKids on your child’s Android phone or tablet (Android OS 7 or higher)
                </p>
                <p className="bg-green-50 text-lg py-4 flex rounded-xl ">
                  <span className="text-xl font-bold mx-6">1.</span>
                  Download Kids App GuardMyKids from Google Play onto your child’s device.
                </p>
                <p className="bg-green-50 text-lg py-4 flex rounded-xl ">
                  <span className="text-xl font-bold mx-6">2.</span>
                  Log in with your GuardMyKids account credentials.
                </p>
                <p className="bg-green-50 text-lg py-4 flex rounded-xl">
                  <span className="text-xl font-bold mx-6">3.</span>
                  Follow the step-by-step instructions.
                </p>
                <p className="bg-green-50 text-lg py-4 flex rounded-xl">
                  <span className="text-xl font-bold mx-6">4.</span>
                  Accept all permissions to ensure full protection and to be able to start supervising.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-32 gap-10" ref={superviseRef}>
            <div className="lg:w-[80%]">
              <p className="text-xl lg:text-4xl md:flex font-bold text-center mt-8">
              <span className=" text-viridianGreen mx-3"><span className="  rounded-full pb-2.5 ">3.</span></span>                Start supervising!
              </p>
              <p className="text-lg lg:my-10">
                Download the parent app or sign in to your account on the web to
                view your dashboard. There, you can see your child's real-time
                online activity, and set your preferences to receive reports and
                alerts by email. Customize your settings in exactly the way you
                need to make GuardMyKids work for you and your family.
              </p>
            </div>
            <div>
              <img src="https://static.qustodio.com/public-site/uploads/2023/11/23170259/startsupervising-image%402x.png" alt="Start Supervising" />
            </div>
          </div>
        </div>
        
        <CreateAccount />
        <Faq />
      </div>
    </SectionContainer>
  );
}

export default GetStarted;
