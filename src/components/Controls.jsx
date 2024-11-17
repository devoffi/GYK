import React from "react";
import PrimaryButton from "./common/PrimaryButton";
import AccordionIcon from "../components/common/AccordianIcon";
import { FaShieldAlt } from "react-icons/fa";
import { RxActivityLog } from "react-icons/rx";
import { MdAccessTime } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TbLetterG } from "react-icons/tb";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineNotifications } from "react-icons/md";
import { Link } from "react-router-dom";

function Controls() {
  const accordionItems = [
    {
      icon: FaShieldAlt,
      title: "Filter Content & Apps",
      content: (
        <>
          <p className="pb-1 md:pb-1.5">
            Block inappropriate apps, games, and websites. Allow your kids to
            access child-friendly content while automatically preventing them
            from viewing harmful sites.
          </p>
        </>
      ),
    },
    {
      icon: RxActivityLog,
      title: "Monitor Activity",
      content: (
        <>
          <p>
            Get real-time insights into your child’s browsing history, YouTube
            activity, social media use, screen time, location, and more.
          </p>
        </>
      ),
    },
    {
      icon: MdAccessTime,
      title: "Set Time Limits",
      content: (
        <>
          <p>
            Prevent screen addiction and encourage healthy routines with time
            limits and scheduled downtime. You can also pause the internet with
            a single tap.
          </p>
        </>
      ),
    },
    {
      icon: SlCalender,
      title: "Schedule Screen-Free Moments",
      content: (
        <>
          <p>
            Create custom routines for activities like study time and bedtime.
            Choose from suggested screen-free times or set your own, and easily
            switch between them as your plans change.
          </p>
        </>
      ),
    },
    {
      icon: IoCallOutline,
      title: "Track Calls & SMS (Android & iOS)",
      content: (
        <>
          <p className="pb-1 md:pb-1.5">
            Monitor your child’s calls and messages, see who they're
            communicating with, and read their conversations. Block calls from
            specific contacts if needed.
          </p>
          <p>
            <strong>Note:</strong> Call and message monitoring on iOS requires a
            Windows or Mac computer.
          </p>
        </>
      ),
    },
    {
      icon: MdOutlineLocationOn,
      title: "Locate Family Members",
      content: (
        <>
          <p className="pb-1 md:pb-1.5">
            Track your family members' locations on a map, see where they've
            been, and receive alerts when they arrive at or leave your saved
            locations.
          </p>
        </>
      ),
    },
    {
      icon: MdOutlineNotifications,
      title: "Reports, Alerts & SOS",
      content: (
        <>
          <p className="pb-1 md:pb-1.5">
            Receive detailed daily and weekly activity reports via email. Set
            alerts for concerning online activity, and allow your kids to send
            an SOS if they need immediate help.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-10 md:gap-20 mb-20">
      <p className="lg:text-3xl text-xl font-bold text-center mt-5 md:mt-0">
        Simplified Parental Controls for Seamless Oversight
      </p>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-32 gap-10">
        <div>
          <video autoPlay muted loop type="webm">
            <source src="https://static.qustodio.com/public-site/uploads/2024/04/26094644/Keep-your-child-safe_EN.webm" />
          </video>
        </div>
        <div className="text-center md:text-start">
          <p className="text-xl lg:text-4xl font-bold my-8 whitespace-nowrap">
            Keep Your Child Safe Online
          </p>
          <p className="text-lg">
            Create a secure digital space for your child with Safekidly.
            Effortlessly monitor and manage their online activity across all
            devices, giving you peace of mind no matter where they are.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-32 gap-10">
        <div className="hidden md:block">
          <p className="text-xl lg:text-4xl font-bold my-8 whitespace-nowrap">
            Customize Your Supervision
          </p>
          <p className="text-lg">
            Control screen time, filter websites, block apps, access detailed
            reports, and more. Tailor your child’s digital experience to fit
            your family’s needs.
          </p>
        </div>
        <div>
          <video autoPlay muted loop type="webm">
            <source src="https://static.qustodio.com/public-site/uploads/2024/04/26094824/supervise-the-way-you-want_EN.webm" />
          </video>
        </div>
        <div className="md:hidden text-center md:text-start">
          <p className="text-xl lg:text-4xl font-bold my-8 whitespace-nowrap">
            Supervise Your Way
          </p>
          <p className="text-lg">
            Filter websites, set time limits, block apps, track activity, and
            more. Safekidly helps you tailor the experience to fit your child’s
            needs and your supervision preferences.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-32 gap-10">
        <div>
          <video autoPlay muted loop type="webm">
            <source src="https://static.qustodio.com/public-site/uploads/2024/04/26094831/build-positive-digital-habits.webm" />
          </video>
        </div>
        <div className="text-center md:text-start">
          <p className="text-xl lg:text-4xl font-bold my-8">
            Cultivate Healthy Digital Habits
          </p>
          <p className="text-lg">
            Help your child establish a balanced relationship with technology.
            With Safekidly, encourage real-life activities while guiding your
            child toward healthy, responsible digital habits.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center mt-10 mb-4 lg:gap-20 gap-10">
        <div className="w-full md:w-1/2 text-gray-700 px-0">
          <p className="text-lg md:text-2xl font-thin px-2 md:px-0 tracking-[1px] md:tracking-[3px]">
            SAFEKIDLY PARENTAL CONTROLS
          </p>
          <p className="text-2xl md:text-4xl px-6 md:px-0 font-medium md:font-bold text-center md:text-start pb-6 pt-3">
            Everything You Need to Safeguard Your Kids Online
          </p>
          <p className="text-lg font-extralight md:whitespace-nowrap leading-5 text-center md:text-start">
            Explore the features below to see how Safekidly can empower your
            parenting journey!
          </p>
          <AccordionIcon items={accordionItems} />
          <div>
            <a href="/features" className="text-blue-500 underline pt-6 pb-2">
              View All Features
            </a>
            <p>*Panic Button is only available for Android.</p>
            <p>
              ** Calls and messages for iOS require a Windows or Mac computer.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-gray-700 px-4 md:px-0">
          <video autoPlay muted loop type="webm">
            <source src="https://static.qustodio.com/public-site/uploads/2024/04/26094644/Keep-your-child-safe_EN.webm" />
          </video>
        </div>
      </div>

      <div className="self-center">
        <Link
          to="/signup"
          className="bg-blue-700 w-max hover:bg-blue-800 duration-500 py-2 px-4 rounded cursor-pointer text-white text-center font-medium text-lg">
          Get Started Free
        </Link>
      </div>
    </div>
  );
}

export default Controls;
