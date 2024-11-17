import React, { useEffect, useState } from "react";
import PrimaryButton from "../components/common/PrimaryButton";
import { BsCheckLg } from "react-icons/bs";
import AccordionIcon from "../components/common/AccordianIcon";
import { IoCallOutline } from "react-icons/io5";
import { IoHandLeftOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { TbLetterG } from "react-icons/tb";
import Carousel from "react-multi-carousel";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdOutlineLock } from "react-icons/md";
import { GoShieldCheck } from "react-icons/go";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    draggable: true,
  },
};

const List = ({ items = [], childStyle }) => (
  <ul className={`list-none p-0 m-0 ${childStyle}`}>
    {items.map(({ text, isAvailable }, i) => (
      <li
        key={i}
        className={`flex items-start mb-3 ${isAvailable ? "" : "opacity-55"}`}>
        <div className="mr-2 text-green-500">
          <IoIosCheckmarkCircle size={22} />
        </div>
        <span className={isAvailable ? "" : "text-gray-700"}>{text}</span>
      </li>
    ))}
  </ul>
);

function Care() {
  const accordionItems = [
    {
      icon: IoCallOutline,
      title: "Scheduled Calls",
      content: (
        <>
          <p className="pb-1 md:pb-1.5">
            Book a session with our experts at a time that fits your schedule.
          </p>
        </>
      ),
    },
    {
      icon: IoHandLeftOutline,
      title: "Personalized Guidance",
      content: (
        <>
          <p>
            Get tailored advice to set up your device and customize your
            preferences.
          </p>
        </>
      ),
    },
    {
      icon: BiSupport,
      title: "Technical Support",
      content: (
        <>
          <p>
            Access quick, step-by-step troubleshooting for any setup or usage
            issues.
          </p>
        </>
      ),
    },
    {
      icon: SlCalender,
      title: "Early Feature Access",
      content: (
        <>
          <p>
            Be among the first to explore new features before they’re available
            to everyone.
          </p>
        </>
      ),
    },
    {
      icon: TbLetterG,
      title: "Scheduled Calls", // Consider updating this duplicate item if needed
      content: (
        <>
          <p className="pb-1 md:pb-1.5">
            Book a session with our experts at a time that fits your schedule.
          </p>
        </>
      ),
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    const top = window.scrollY;
    if (top > 1100) {
      // Change this value as needed
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="container mx-auto">
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row my-10 md:pt-20">
        <div className="md:w-1/2 pt-10 md:pt-0">
          <img
            src="https://static.qustodio.com/public-site/uploads/2024/08/30140531/Hero_Desktop_EN.webp"
            alt="Hero"
            className="w-full"
          />
        </div>
        <div className="md:w-1/2 px-4">
          <div className="flex justify-center md:justify-start items-center">
            <img
              src="https://static.qustodio.com/public-site/uploads/2021/10/26103853/group-50-copy%402x.png"
              alt="Icon"
              className="w-1/2"
            />
          </div>
          <p className="text-xl md:text-3xl text-gray-700 font-medium py-8 text-center md:text-start">
            Get exclusive help over the phone – from expert advice on setting up
            Safekidly to technical troubleshooting.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="/signup"
              className="hover:bg-viridianGreen hover:text-white font-medium w-28 text-center py-2 border-2 border-viridianGreen rounded-md text-xl">
              Buy now
            </Link>
          </div>
          <span className="pt-5 text-gray-700 font-normal text-center md:text-start">
            Available in English
          </span>
        </div>
      </div>

      {/* What is Care Plus? */}
      <div className="text-center py-10">
        <p className="text-3xl font-semibold">What is Care Plus?</p>
        <p className="text-lg md:text-xl py-5 font-medium md:px-72">
          Safekidly Care Plus gives you priority help through all our available
          channels at each stage of your Safekidly journey.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 my-10">
          {[
            { title: "97%", subtitle: "Resolution rate" },
            { title: "15 min", subtitle: "Avg. resolution time" },
            { title: "99%", subtitle: "Happy customers" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="text-5xl font-medium">{item.title}</p>
              <p className="text-xl text-purple-400 font-medium">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Helping you save time */}
      <div className="md:flex py-10">
        <div className="md:w-1/2">
          <img
            src="https://static.qustodio.com/public-site/uploads/2024/09/03083220/Image_Desktop.webp"
            alt="Helping you save time"
            className="w-full"
          />
        </div>
        <div className="md:w-1/2 px-6 text-gray-700">
          <p className="text-3xl font-bold py-8 text-center">
            Helping you save time
          </p>
          {[
            {
              text: "Phone support",
              desc: "Speak to our experts over the phone.",
            },
            {
              text: "Easy setup",
              desc: "Get started quickly with step-by-step help.",
            },
            {
              text: "Proactive guidance",
              desc: "Receive personalized advice to get more from Safekidly.",
            },
          ].map((item, index) => (
            <div key={index} className="py-4">
              <p className="flex gap-4 text-xl font-semibold">
                <BsCheckLg className="text-blue-500 text-2xl bg-blue-200 rounded-full p-1" />{" "}
                {item.text}
              </p>
              <span className="pl-10 text-lg font-medium">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div className="text-center py-16">
        <p className="text-2xl font-thin tracking-[5px] text-gray-800">
          IT’S EASY TO GET STARTED
        </p>
        <p className="text-3xl font-bold py-4">How it works</p>
        <div className="md:flex justify-center gap-10">
          {[
            {
              imgSrc:
                "https://static.qustodio.com/public-site/uploads/2024/09/03104741/1-SIgnup_Desktop.webp",
              title: "Sign up",
              desc: "Add Care Plus to your plan and we’ll get in touch",
            },
            {
              imgSrc:
                "https://static.qustodio.com/public-site/uploads/2024/08/30154520/2-BookCall_Desktop_EN.webp",
              title: "Book a call",
              desc: "Choose a convenient time",
            },
            {
              imgSrc:
                "https://static.qustodio.com/public-site/uploads/2024/08/30154456/3-Checkins_Desktop_EN.webp",
              title: "Ongoing check-ins",
              desc: "Ensure you’re making the most of Safekidly",
            },
          ].map((step, index) => (
            <div
              key={index}
              className={`max-w-sm shadow-2xl rounded-md bg-white transition-opacity duration-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}>
              <img src={step.imgSrc} alt={step.title} className="w-full" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl">{step.title}</div>
                <p className="text-lg">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="text-center">
        <p className="text-4xl font-bold">What parents are saying</p>
        <div className="flex flex-col md:flex-row gap-12 py-10">
          <img
            src="https://static.qustodio.com/public-site/uploads/2024/08/30164717/Parents_Desktop_EN.png"
            className="md:w-1/3"
            alt="Testimonials"
          />
          {[
            {
              text: "Getting a phone call from an expert is impressive.",
              name: "Michael",
            },
            {
              text: "The agent was fantastic, patient, and reduced my stress.",
              name: "Stacy",
            },
          ].map((review, index) => (
            <div key={index} className="flex flex-col px-8">
              <img
                src="https://static.qustodio.com/public-site/uploads/2024/09/02142803/exports-04-parents-section-desktop-icon.png"
                alt="Parent Icon"
                className="w-16"
              />
              <p className="text-2xl text-gray-800 font-bold my-4 bg-blue-50">
                {review.text}
              </p>
              <p className="text-xl font-medium text-gray-600">{review.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Accordion */}
      <div className="container mx-auto md:flex gap-10 py-10">
        <div className="md:w-1/2 px-4">
          <p className="text-3xl font-bold text-center md:text-start pb-6">
            Exclusive Care Plus Features
          </p>
          <AccordionIcon items={accordionItems} />
        </div>
        <img
          src="https://static.qustodio.com/public-site/uploads/2024/09/05105125/CP-Features_Desktop_EN.webp"
          className="md:w-1/2"
          alt="Features"
        />
      </div>
    </div>
  );
}

export default Care;
