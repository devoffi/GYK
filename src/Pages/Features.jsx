import React, { useRef } from "react";
import { SectionContainer } from "../components/common/SectionContainer";
import PrimaryButton from "../components/common/PrimaryButton";
import CreateAccount from "../components/CreateAccount";
import { LuCheckCircle } from "react-icons/lu";
import { FaShieldAlt } from "react-icons/fa";
import { BsCardChecklist } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";

function Features() {

  const filterRef = useRef(null);
  const monitorRef = useRef(null);
  const timeLimitsRef = useRef(null);
  const locateFamilyRef = useRef(null);
  const trackCallsRef = useRef(null);
  const notificationsRef = useRef(null);

  // Function to scroll to a section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth",block: "start",
      inline: "nearest" });
  };

  return (
    <SectionContainer>
      <div className="text-gray-700">
      <p className="md:w-3/5 text-center text-2xl lg:text-5xl font-bold mx-auto mt-10 md:mt-20">
        All the tools you need to protect your kids online
      </p>
      <p className="text-lg lg:text-xl text-center my-10">
        GuardMyKids gives you the best parental control and digital wellbeing
        features in one place
      </p>
      <div className="flex flex-wrap gap-6 lg:w-[90%] mx-auto">
        <div className="hidden md:flex md:flex-wrap gap-6 ">
          <p className="px-4 py-2 border rounded-full cursor-pointer "  onClick={() => scrollToSection(filterRef)}>Filter content & apps</p>
          <p className="px-4 py-2 border rounded-full cursor-pointer " onClick={() => scrollToSection(monitorRef)}>Monitor activity</p>
          <p className="px-4 py-2 border rounded-full cursor-pointer " onClick={() => scrollToSection(timeLimitsRef)}  >Set time limits</p>
          <p className="px-4 py-2 border rounded-full cursor-pointer " onClick={() => scrollToSection(locateFamilyRef)} >Locate family</p>
          <p className="px-4 py-2 border rounded-full cursor-pointer "  onClick={() => scrollToSection(trackCallsRef)}  >Track calls & SMS</p>
          <p className="px-4 py-2 border rounded-full cursor-pointer " onClick={() => scrollToSection(notificationsRef)} >Reports, alerts & SOS</p>
        </div>
        <div className="md:hidden flex overflow-x-auto scrollbar-hidden scrollbar-hide gap-2">
          <p className="px-2 text-sm py-2 border rounded-full whitespace-nowrap">Filter content & apps</p>
          <p className="px-2 text-sm py-2 border rounded-full whitespace-nowrap">Monitor activity</p>
          <p className="px-2 text-sm py-2 border rounded-full whitespace-nowrap">Set time limits</p>
          <p className="px-2 text-sm py-2 border rounded-full whitespace-nowrap">Locate family</p>
          <p className="px-2 text-sm py-2 border rounded-full whitespace-nowrap">Track calls & SMS</p>
          <p className="px-2 text-sm py-2 border rounded-full whitespace-nowrap">Reports, alerts & SOS</p>
        </div>
      </div>



      <div className="flex flex-col gap-10 lg:w-full  mx-auto">
        <div ref={filterRef} className="flex flex-col lg:flex-row bg-blue-50 rounded-xl p-4 md:p-16 my-10 justify-center items-center lg:gap-32 gap-10">
          <div>
            <p className="text-xl flex gap-3 lg:text-4xl font-bold mt-8">
              < FaShieldAlt />
              Filter content & apps
            </p>
            <p className="text-xl pl-12 lg:text-2xl font-bold mt-1 mb-8">
              Create a safe space for your kids to explore and play online
            </p>
            <p className="text-lg  pl-12">
              Block inappropriate apps, games and websites. Allow your kids to
              view child-friendly sites and automatically block potentially
              harmful ones to prevent exposure to mature content, gambling,
              violence and other threats. Receive alerts when they try to access
              blocked content.
            </p>
          </div>
          <div>
            <video autoPlay muted loop type="webm">
              <source src="https://static.qustodio.com/public-site/uploads/2024/04/26094824/supervise-the-way-you-want_EN.webm" />
            </video>
          </div>
        </div>

        <div  ref={monitorRef} className="flex flex-col lg:flex-row justify-center items-center  lg:gap-32 gap-10">
          <div>
            <video autoPlay muted loop type="webm">
              <source src="https://static.qustodio.com/public-site/uploads/2024/04/26094644/Keep-your-child-safe_EN.webm" />
            </video>
          </div>
          <div>
            <p className="text-xl lg:text-4xl flex gap-3  font-bold mt-8">
            < BsCardChecklist />
            Monitor activity
            </p>
            <p className="text-xl pl-12 lg:text-2xl font-bold mt-1 mb-8">
            Stay involved in your child's digital life
            </p>
            <p className="text-lg pl-12">
            Log in to the real-time dashboard from any device at any time to check your child’s digital activity and adjust your settings. Easily view their activity timeline, browsing history, YouTube views, screen time and more.
            </p>
          </div>
        </div>
        <div ref={timeLimitsRef} className="flex flex-col lg:flex-row justify-center items-center bg-blue-50 rounded-xl p-4 md:p-16 my-10 lg:gap-32 gap-10">
          <div>
            <p className="text-xl flex gap-3 lg:text-4xl font-bold mt-8">
              <  FaRegClock  />
            Set time limits & routines
            </p>
            <p className="text-xl pl-12  lg:text-2xl font-bold mt-1 mb-8">
            Help your kids balance their time online
            </p>
            <p className="text-lg pl-12">
            Prevent screen addiction, preserve family time, and encourage healthy sleep patterns with consistent time limits and routines that you can easily switch between. Plus, pause the internet at the touch of a button.
            </p>
          </div>
          <div>
            <video autoPlay muted loop type="webm">
              <source src="https://static.qustodio.com/public-site/uploads/2024/04/26094824/supervise-the-way-you-want_EN.webm" />
            </video>
          </div>
        </div>

        <div ref={locateFamilyRef} className="flex flex-col lg:flex-row justify-center items-center lg:gap-32 gap-10">
          <div>
            <video autoPlay muted loop type="webm">
              <source src="https://static.qustodio.com/public-site/uploads/2024/04/26094644/Keep-your-child-safe_EN.webm" />
            </video>
          </div>
          <div>
            <p className="text-xl flex gap-3 lg:text-4xl font-bold mt-8">
              < IoLocationOutline />
            Locate family
            </p>
            <p className="text-xl  pl-12 lg:text-2xl font-bold mt-1 mb-8">
            Know where your kids are at any time
            </p>
            <p className="text-lg  pl-12 ">
            Spot your child on the map to know where they are and have been. Save most visited places like school and home and get peace of mind by receiving notifications when they arrive or leave those locations.
            </p>
          </div>
        </div>
        <div ref={trackCallsRef} className="flex flex-col lg:flex-row justify-center items-center bg-blue-50 rounded-xl p-4 md:p-16 my-10 lg:gap-20 gap-10">
          <div>
            <p className="text-xl  flex gap-3  lg:text-4xl font-bold mt-8">
              <  IoCallOutline  />
              Track calls & SMS for Android and iOS
            </p>
            <p className="text-xl  pl-12 lg:text-2xl font-bold mt-1 mb-8">
            Catch predators and cyberbullies the moment they strike
            </p>
            <p className="text-lg  pl-12">
              Detect suspicious contacts by seeing who your child exchanges calls and messages with. Read the texts they send and receive, plus set a list of blocked phone numbers.
            </p>
            <p className="text-xs p-6">** Calls and messages for iOS requires a Windows or Mac computer</p>
          </div>
          <div>
            <video autoPlay muted loop type="webm">
              <source src="https://static.qustodio.com/public-site/uploads/2024/04/26094824/supervise-the-way-you-want_EN.webm" />
            </video>
          </div>
        </div>

        <div  ref={notificationsRef} className="flex flex-col lg:flex-row justify-center items-center lg:gap-32 gap-10">
          <div>
            <video autoPlay muted loop type="webm">
              <source src="https://static.qustodio.com/public-site/uploads/2024/04/26094644/Keep-your-child-safe_EN.webm" />
            </video>
          </div>
          <div>
            <p className="text-xl flex gap-3 lg:text-4xl font-bold mt-8">
              <  IoMdNotificationsOutline />
              Get reports, alerts & SOS
            </p>
            <p className="text-xl  pl-12 lg:text-2xl font-bold mt-1 mb-8">
              Get all the info you want at the touch of a button
            </p>
            <p className="text-lg  pl-12 ">
              Receive detailed daily, weekly, and monthly reports of your child’s online activity straight to your inbox. Real-time alerts mean you’ll know as soon as they try to access blocked websites or are in trouble.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-32 gap-10 rounded-xl p-4 py-8 md:py-16 my-10 bg-green-50">
          <div className="">
            <img src="https://static.qustodio.com/public-site/uploads/2023/11/27112221/careplus-image-desktop%402x.png" />
          </div>
          <div className="lg:w-[80%]">
            <p className="text-xl lg:text-4xl font-bold mt-8">
              Make the most of GuardMyKids with Care Plus
            </p>
            <p className="text-lg lg:text-xl font-bold mt-1 mb-8">
              Care Plus is our exclusive service designed to elevate your
              GuardMyKids experience.{" "}
            </p>
            <p className="text-lg">
              Block inappropriate apps, games and websites. Allow your kids to
              view child-friendly sites and automatically block potentially
              harmful ones to prevent exposure to mature content, gambling,
              violence and other threats. Receive alerts when they try to access
              blocked content.
            </p>
            <div className="my-5 flex justify-center md:justify-start ">
              <PrimaryButton title={"Learn more"} />
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-2xl lg:text-4xl font-bold mx-auto mt-10 md:mt-20">
      GuardMyKids works on every device you need
      </p>
      <p className="text-lg lg:text-xl text-center my-5">
        Click on the icons below for more information on the features we provide
        for each platform
      </p>
      <div className="flex flex-wrap justify-center  gap-10 lg:w-[80%] mx-auto">
        <p className="px-4 py-2 border-4 rounded-lg"> Android</p>
        
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-20 gap-10 lg:w-[90%] lg:mx-auto">
        <div className="">
          <img src="https://static.qustodio.com/public-site/uploads/2023/11/27113514/ios-device%402x.png" />
        </div>
        <div className="lg:w-[80%] py-10 flex flex-col gap-1.5 ">
          <p className="text-lg lg:text-2xl font-medium mt-8 tracking-[1px] md:tracking-[3px] ">
          GuardMyKids for Android
          </p>
          <p className="text-md lg:text-lg mt-1 mb-8  ">
          For smartphones and tablets running Android 7.0 and up.
          </p>
          <p className="text-lg flex">
            < LuCheckCircle size={20} color={ "hsl(180, 98%, 31%)" } className="mt-1 mx-2 "  />
            Web filtering & activity alerts
          </p>
          <p className="text-lg flex">
            < LuCheckCircle size={20} color={ "hsl(180, 98%, 31%)" } className="mt-1 mx-2 "  />
            Games & apps blocking + time limits
          </p>
          <p className="text-lg flex">
            < LuCheckCircle size={20} color={ "hsl(180, 98%, 31%)" } className="mt-1 mx-2 "  />
            Limit social media use
          </p>
          <p className="text-lg flex">
            < LuCheckCircle size={20} color={ "hsl(180, 98%, 31%)" } className="mt-1 mx-2 "  />
            Daily time limits & restricted times
          </p>
          <p className="text-lg flex">
            < LuCheckCircle size={20} color={ "hsl(180, 98%, 31%)" } className="mt-1 mx-2 "  />
            Custom routines
          </p>
          <p className="text-lg flex">
            < LuCheckCircle size={20} color={ "hsl(180, 98%, 31%)" } className="mt-1 mx-2 "  />
            Pause the internet
          </p>
          <p className="text-lg flex">
            < LuCheckCircle size={20} color={ "hsl(180, 98%, 31%)" } className="mt-1 mx-2 "  />
            Additional parent
          </p>
          <p className="text-lg flex">
            < LuCheckCircle size={20} color={ "hsl(180, 98%, 31%)" } className="mt-1 mx-2 "  />
            Youtube monitoring
          </p>
          <p className="text-lg flex">
            < LuCheckCircle size={20} color={ "hsl(180, 98%, 31%)" } className="mt-1 mx-2 "  />
            Calls & SMS monitoring
          </p>
          <p className="text-lg flex">
            < LuCheckCircle size={20} color={ "hsl(180, 98%, 31%)" } className="mt-1 mx-2 "  />
            Location monitoring
          </p>
          <div className="my-5 md:pl-10 flex justify-center md:justify-start ">
            <PrimaryButton title={"Download"} />
          </div>
        </div>
      </div>
      <CreateAccount/>
      </div>
    </SectionContainer>
  );
}

export default Features;
