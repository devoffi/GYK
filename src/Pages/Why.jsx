import React, { useState, useEffect } from "react";
import { SectionContainer } from "../components/common/SectionContainer";
import Collapsible from "react-collapsible";
import {
  FaChevronDown,
  FaChevronUp,
  FaShield,
  FaShieldHalved,
} from "react-icons/fa6";
import Testimonial from "../components/Testimonial";
import CreateAccount from "../components/CreateAccount";
import { FaRegFaceAngry } from "react-icons/fa6";
import { GiNightSleep } from "react-icons/gi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaLaptop } from "react-icons/fa";
import { TbMoodCry } from "react-icons/tb";
import { BsPersonLock } from "react-icons/bs";
import { GiSpy } from "react-icons/gi";
import { RiShapesLine } from "react-icons/ri";
import AccordionIcon from "../components/common/AccordianIcon";
import { LuBookOpen } from "react-icons/lu";
import { ImEye } from "react-icons/im";
import { FaBalanceScale } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa6";

function Why() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const colorMapping = {
    "#22c55e": { text: "green-500", bg: "green-100" },
    blue: { text: "blue-500", bg: "blue-100" },
    green: { text: "green-500", bg: "green-100" },
    red: { text: "red-00", bg: "red-100" },
  };

  const data = [
    {
      icon: GiSpy,
      color: "#22c55e",
      title: "Online Predators",
      des: "Half of online exploitation victims are between the ages of 12 and 15. Safekidly offers advice articles to help you teach your children how to identify and avoid threats such as data thieves, groomers, sexual predators, and stalkers.",
    },
    {
      icon: TbMoodCry,
      color: "blue",
      title: "Mental Health Concerns",
      des: "Severe depression has risen 58% since 2010, paralleling the growth in smartphone usage. Safekidly helps you manage your child's screen time, promoting healthier habits for mental well-being.",
    },
    {
      icon: GiNightSleep,
      color: "red",
      title: "Sleep Disruptions",
      des: "73% of high school students aren’t getting enough sleep, affecting learning, mood, and social interactions. Use Safekidly to set device downtime before bed, reducing exposure to sleep-disrupting blue light.",
    },
    {
      icon: BsPersonLock,
      color: "green",
      title: "Online Privacy",
      des: "51% of teens use social media. Safekidly helps ensure they protect their personal information and avoid inappropriate interactions with strangers.",
    },
    {
      icon: FaRegFaceAngry,
      color: "blue",
      title: "Cyberbullying",
      des: "One in three kids experiences cyberbullying. Safekidly lets you monitor texts to identify and block bullies, keeping your child safe online.",
    },
    {
      icon: FaLaptop,
      color: "green",
      title: "Inappropriate Content",
      des: "42% of kids have encountered pornography online. Safekidly helps you monitor YouTube, filter browser searches, and block adult content to protect your child from upsetting material.",
    },
    {
      icon: IoPhonePortraitOutline,
      color: "blue",
      title: "Smartphone Addiction",
      des: "50% of kids admit to being addicted to their smartphones. Safekidly lets you set time limits on device use and block apps that encourage excessive screen time.",
    },
    {
      icon: RiShapesLine,
      color: "red",
      title: "Educational Impact",
      des: "Children with more than two hours of screen time daily have been shown to perform worse academically. Safekidly helps reduce screen use and encourages visits to educational websites.",
    },
  ];

  const accordionItems = [
    {
      icon: FaUserShield,
      title: "Ensure Their Safety",
      content: (
        <>
          <p>
            Set up advanced filters for websites, block distracting apps and
            games, monitor social media usage on platforms like YouTube and
            Facebook, track your child's location, and much more.
          </p>
        </>
      ),
    },
    {
      icon: FaBalanceScale,
      title: "Maintain a Healthy Balance",
      content: (
        <>
          <p>
            Control your child's screen time by setting daily usage limits for
            devices and specific apps. Ensure time for important moments like
            meals and bedtime by enforcing screen-free periods.
          </p>
        </>
      ),
    },
    {
      icon: ImEye,
      title: "Monitor Their Activity",
      content: (
        <>
          <p>
            Get real-time insights into your child's online interactions,
            including who they're communicating with and what content they're
            engaging with. Receive detailed reports by email and alerts when
            limits are reached or if any concerns arise.
          </p>
        </>
      ),
    },
    {
      icon: LuBookOpen,
      title: "Support Their Learning",
      content: (
        <>
          <p>
            Optimize settings to enhance your child’s learning experience. Block
            non-educational apps and websites during school and homework time,
            while allowing access to the resources they need to stay focused and
            productive.
          </p>
        </>
      ),
    },
  ];

  return (
    <SectionContainer>
      <div className="text-gray-700 bg-sky-50/50 ">
        <p className="text-xl lg:text-5xl font-bold lg:w-[60%] w-[90%] mx-auto text-center lg:pt-20 pt-10 md:pt-5">
          Empowering Your Child’s Digital Journey: Safe and Balanced
        </p>
        <p className="text-center md:mt-10 w-[80%] mx-auto text-md lg:text-xl">
          Screens are a part of modern life. With children using devices at
          younger ages, it’s essential to provide the right tools to build{" "}
          <strong>healthy digital habits.</strong>
        </p>

        <div className="flex flex-col lg:flex-row w-[90%] rounded-lg bg-white gap-10 mx-auto px-10 my-10 py-10 md:py-12 justify-center items-center">
          <div className="flex flex-col mx-auto justify-center">
            <p className="text-xl lg:text-3xl font-bold">
              Embracing the first{" "}
              <strong className="text-blue-600">digital-native</strong>{" "}
              generation
            </p>
            <p className="mt-3 lg:mt-8 text-lg lg:text-xl">
              The number of children with their own smartphones is rapidly
              growing.
            </p>
            <p className="mt-2 lg:mt-5 text-gray-400">
              Source: Stanford Medicine, 2022
            </p>
          </div>
          <div>
            <img src="https://static.qustodio.com/public-site/uploads/2023/11/23090422/firsgeneration-desktop%402x.png" />
          </div>
        </div>

        <p className="text-xl lg:text-3xl font-bold lg:w-[70%] w-full mx-auto text-center lg:pt-20 pt-5">
          Increased online time means heightened exposure to digital risks.
        </p>
        <p className="text-center mt-1 w-[75%] mx-auto text-md lg:text-xl py-3">
          Each child faces unique challenges online. We offer tools to help keep
          them safe in every digital scenario.
        </p>

        <div className="flex flex-wrap mt-5 lg:mt-16 w-full px-6 md:px-10 justify-between">
          {data.map((item, index) => {
            const colorClasses = colorMapping[item.color] || {
              text: "gray-500",
              bg: "gray-100",
            };

            return (
              <div
                key={index}
                className="md:w-[23%] bg-white rounded-xl shadow-lg p-4 my-4">
                <item.icon
                  size={40}
                  className={`m-1 text-${colorClasses.text} bg-${colorClasses.bg} p-1.5 rounded-full`}
                />
                <p className="font-bold text-base md:text-lg my-3">
                  {item.title}
                </p>
                <p className="text-sm leading-6">{item.des}</p>
              </div>
            );
          })}
        </div>

        <p className="text-xl lg:text-4xl font-bold lg:w-[40%] w-[90%] mx-auto text-center lg:pt-20 pt-5">
          Screen time is on the rise
        </p>
        <p className="text-center mt-3 w-[80%] mx-auto text-md lg:text-xl tracking-widest">
          DAILY AVERAGE SCREEN TIME BY AGE GROUP
        </p>

        <div className="my-10 flex flex-col lg:flex-row justify-center">
          <div className="w-96 items-center flex flex-col gap-3">
            <p className="font-bold text-lg lg:text-xl">Kids</p>
            <p className="bg-blue-200 max-w-fit py-1 px-4 rounded-2xl">
              5 to 8 years
            </p>
            <div className="border-blue-200 border-4 p-20 rounded-full h-52 w-52 justify-center items-center flex flex-col">
              <p className="text-2xl lg:text-5xl">4.5</p>
              <p className="text-gray-400">hours/day</p>
            </div>
          </div>
          <div className="w-96 items-center flex flex-col gap-3">
            <p className="font-bold text-lg lg:text-xl">Tweens</p>
            <p className="bg-green-200 max-w-fit py-1 px-4 rounded-2xl">
              9 to 12 years
            </p>
            <div className="border-green-200 border-4 p-20 rounded-full h-52 w-52 justify-center items-center flex flex-col">
              <p className="text-2xl lg:text-5xl">6</p>
              <p className="text-gray-400">hours/day</p>
            </div>
          </div>
          <div className="w-96 items-center flex flex-col gap-3">
            <p className="font-bold text-lg lg:text-xl">Teens</p>
            <p className="bg-yellow-200 max-w-fit py-1 px-4 rounded-2xl">
              13 to 18 years
            </p>
            <div className="border-yellow-200 border-4 p-20 rounded-full h-52 w-52 justify-center items-center flex flex-col">
              <p className="text-2xl lg:text-5xl">9</p>
              <p className="text-gray-400">hours/day</p>
            </div>
          </div>
        </div>
        <p className="text-center text-base md:text-lg py-5">
          *Source: Common Sense Media and Safekidly
        </p>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-32 gap-10 w-[90%] mx-auto my-6">
          <div className="w-full md:w-1/2 text-gray-700 px-0  ">
            <p className="text-lg md:text-2xl font-thin px-2 md:px-0 tracking-[1px] text-center  md:text-start md:tracking-[3px]">
              DIGITAL SAFETY AND WELLBEING WITH SAFEKIDLY
            </p>
            <p className="text-2xl md:text-4xl px-6 md:px-0 font-medium md:font-bold text-center md:text-start py-3">
              Everything you need in one place
            </p>
            <p className="text-lg font-extralight md:whitespace-nowrap leading-5 text-center md:text-start">
              Explore the features below to see what Safekidly can do for you!
            </p>
            <AccordionIcon items={accordionItems} />
            <div>
              <a href="/features" className="text-blue-500 underline pt-6 pb-2">
                View all features
              </a>
            </div>
          </div>
          <div className="lg:w-[50%]">
            <video autoPlay muted loop type="webm">
              <source src="https://static.qustodio.com/public-site/uploads/2024/04/26094644/Keep-your-child-safe_EN.webm" />
            </video>
          </div>
        </div>

        <div className="w-full mx-auto my-10">
          <Testimonial />
          <CreateAccount />
        </div>

        <div>
          <p className="text-xl lg:text-4xl font-bold lg:w-[40%] w-[90%] mx-auto text-center lg:pt-20 pt-5">
            Learn how Safekidly
          </p>
          <p className="text-xl lg:text-4xl font-bold lg:w-[50%] w-[90%] mx-auto text-center lg:pt-2 pt-1">
            makes digital parenting easier
          </p>

          <div className="flex flex-col lg:flex-row gap-10 my-5 lg:my-20">
            <div className="lg:w-1/3">
              <img src="https://static.qustodio.com/public-site/uploads/2023/11/29112821/productips-desktop%402x-1.png" />
              <p className="text-lg lg:text-xl font-bold my-1 lg:my-3">
                Product tips
              </p>
              <p>
                Stay updated on new features, product improvements, and useful
                tips to get the most from Safekidly.
              </p>
            </div>
            <div className="lg:w-1/3">
              <img src="https://static.qustodio.com/public-site/uploads/2023/11/28084530/parenttips-desktop%402x.png" />
              <p className="text-lg lg:text-xl font-bold my-1 lg:my-3">
                Parenting insights
              </p>
              <p>
                Evidence-based guidance on children’s health and online safety,
                drawing on insights from technology, psychology, and more.
              </p>
            </div>
            <div className="lg:w-1/3">
              <img src="https://static.qustodio.com/public-site/uploads/2023/11/28084646/safetyguide-desktop%402x.png" />
              <p className="text-lg lg:text-xl font-bold my-1 lg:my-3">
                App safety guides
              </p>
              <p>
                Detailed reviews and recommendations on popular apps and games
                parents should be aware of.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Why;
