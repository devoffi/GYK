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
import AccordionIcon from '../components/common/AccordianIcon';
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
      icon :  GiSpy ,
      color: "#22c55e",
      title: "Online predators",
      des: "50% of online exploitation victims are between the ages of 12 and 15. Safekidly advice articles help you talk to your children about how to spot and avoid data thieves, groomers, sexual predators, and stalkers.",
    },
    {
      icon : TbMoodCry ,
      color: "blue",
      title: "Mental health issues",
      des: "Severe depression has increased 58% since 2010, coinciding with an increase in cell phone ownership. Safekidly can help you limit the amount of time your child spends in front of screens.",
    },
    {
      icon :  GiNightSleep,
      color: " red ",
      title: "Sleep problems",
      des: "73% of high school students dont get enough sleep. This can lead to difficulty learning, poor moods, and interpersonal conflicts. Use Safekidly to set downtimes before bed, so your kids can avoid sleep-disrupting blue light.",
    },
    {
      icon :  BsPersonLock,
      color: "green",
      title: "Online privacy",
      des: "51% of teens use social media. Safekidly helps you ensure they don't share personal information or exchange inappropriate messages with strangers.",
    },
    {
      icon :  FaRegFaceAngry ,
      color: "blue",
      title: "Cyberbullying",
      des: "33% of kids have experienced cyberbullying. Use Safekidly to monitor texts so you can catch and block bullies.",
    },
    {
      icon : FaLaptop ,
      color: "green",
      title: "Inappropriate content",
      des: "42% of kids have seen porn online. Use Safekidly to monitor YouTube viewing, filter browser results, and block adult websites to reduce the chances your child sees upsetting images or content.",
    },
    {
      icon :  IoPhonePortraitOutline ,
      color: "blue",
      title: "Online addiction",
      des: "50% of kids admit to being addicted to their smartphones. Safekidly lets you set consistent time limits on your child's devices and block apps that they use excessively.",
    },
    {
      icon :  RiShapesLine,
      color: " red ",
      title: "Education issues",
      des: "The 63% of children who have more than 2 hours of daily screen time show lower academic performance than those who spend less time online. Use Safekidly to reduce their device use and encourage them to visit educational websites.",
    },
  ];
  const accordionItems = [
    {
      icon : FaUserShield ,
      title: 'Keep them safe',
      content: (
        <>
          <p>Set up smart website filters, block apps and games, monitor YouTube and Facebook use, track location, and more.</p>
        </>
      ),
    },
    {
      icon : FaBalanceScale ,
      title: 'Create balance',
      content: (
        <>
          <p >Manage your child's screen time by setting daily limits for their devices as well as for specific apps. Protect screen-free moments such as mealtimes and bedtimes.</p>
        </>
      ),
    },
    {
      icon : ImEye,
      title: 'Get full visibility',
      content: (
        <>
          <p >View your child's online activity in real-time to see who they're talking to and what content they're accessing. Receive detailed reports via email and get alerts when limits are met or your child has a problem.</p>
        </>
      ),
    },
    {
      icon : LuBookOpen,
      title: 'Help them learn',
      content: (
        <>
          <p >Customize your settings to help your kids get the most out their education. Block certain apps and websites during school and homework hours, and allow the ones they need to complete their tasks.</p>
        </>
      ),
    },
  ]
  return (
    <SectionContainer>
      <div className="text-gray-700 bg-sky-50/50 ">
      <p className="text-xl lg:text-5xl font-bold lg:w-[60%] w-[90%] mx-auto text-center lg:pt-20 pt-10 md:pt-5">
        We ensure your child's digital activity is both balanced and safe
      </p>
      ,    
      <p className="text-center md:mt-10 w-[80%] mx-auto text-md lg:text-xl">
        Screens are a permanent part of our lives. As children use {" "}
        <strong>devices at younger ages</strong>, it's crucial{" "}
        <strong>to equip them with the right tools</strong> to foster  <strong>healthy digital habits.</strong>
      </p>

      <div className="flex flex-col lg:flex-row w-[90%] rounded-lg  bg-white gap-10 mx-auto px-10 my-10 py-10 md:py-12 justify-center items-center">
        <div className="flex flex-col mx-auto justify-center">
          <p className="text-xl lg:text-3xl font-bold">
            The first <strong className="text-blue-600">fully digital</strong>{" "}
            generation
          </p>
          <p className="mt-3 lg:mt-8 text-lg lg:text-xl">
          The number of kids owning their own smartphones is increasing.
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
        Increased time online exposes children to greater risks.
      </p>
      <p className="text-center mt-1 w-[75%] mx-auto text-md lg:text-xl py-3">
      We understand that each child encounters unique risks in their digital lives, and we provide the tools to support them in every scenario.
      </p>

      <div className="flex flex-wrap mt-5 lg:mt-16 w-full px-6 md:px-10 justify-between">
      {data.map((item, index) => {
        const colorClasses = colorMapping[item.color] || { text: "gray-500", bg: "gray-100" };
        
        return (
          <div key={index} className="md:w-[23%] bg-white rounded-xl shadow-lg p-4 my-4">
            <item.icon 
              size={40} 
              className={`m-1 text-${colorClasses.text} bg-${colorClasses.bg} p-1.5 rounded-full`} 
            />
            <p className="font-bold text-base md:text-lg my-3">{item.title}</p>
            <p className="text-sm leading-6">{item.des}</p>
          </div>
        );
      })}
    </div>

      <p className="text-xl lg:text-4xl font-bold lg:w-[40%] w-[90%] mx-auto text-center lg:pt-20 pt-5">
        Screen time is on the rise
      </p>
      <p className="text-center mt-3 w-[80%] mx-auto text-md lg:text-xl tracking-widest">
        AVERAGE TIME KIDS SPEND ONLINE EACH DAY
      </p>

      <div className="my-10 flex flex-col lg:flex-row justify-center">
        <div className="w-96 items-center flex flex-col gap-3">
          <p className=" font-bold text-lg lg:text-xl">Kids</p>
          <p className=" bg-blue-200 max-w-fit py-1 px-4 rounded-2xl">
            5 to 8 years
          </p>
          <div className="border-blue-200 border-4 p-20 rounded-full h-52 w-52 justify-center items-center flex flex-col">
            <p className="text-2xl lg:text-5xl">4.5</p>
            <p className="text-gray-400">hours/day</p>
          </div>
        </div>
        <div className="w-96 items-center flex flex-col gap-3">
          <p className=" font-bold text-lg lg:text-xl">Tweens</p>
          <p className=" bg-green-200 max-w-fit py-1 px-4 rounded-2xl">
            9 to 12 years
          </p>
          <div className="border-green-200 border-4 p-20 rounded-full h-52 w-52 justify-center items-center flex flex-col">
            <p className="text-2xl lg:text-5xl">6</p>
            <p className="text-gray-400">hours/day</p>
          </div>
        </div>
        <div className="w-96 items-center flex flex-col gap-3">
          <p className=" font-bold text-lg lg:text-xl">Teens</p>
          <p className=" bg-yellow-200 max-w-fit py-1 px-4 rounded-2xl">
            13 to 18 years
          </p>
          <div className="border-yellow-200 border-4 p-20 rounded-full h-52 w-52 justify-center items-center flex flex-col">
            <p className="text-2xl lg:text-5xl">9</p>
            <p className="text-gray-400">hours/day</p>
          </div>
        </div>
      </div>
      <p className="text-center text-base md:text-lg py-5">*Source: Common Sense Media and Safekidly</p>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-32 gap-10 w-[90%] mx-auto my-6">
        <div className='w-full md:w-1/2  text-gray-700 px-0'>
          <p className='text-lg md:text-2xl font-thin px-2 md:px-0  tracking-[1px] text-center md:text-start md:tracking-[3px]'>DIGITAL SAFETY AND WELLBEING WITH SAFEKIDLY</p>
          <p className='text-2xl md:text-4xl px-6 md:px-0 font-medium md:font-bold text-center md:text-start  py-3'>Everything you need in one place</p>
          <p className="text-lg font-extralight md:whitespace-nowrap leading-5  text-center  md:text-start">Explore the features below to see what Safekidly can do for you!</p>
          <AccordionIcon items={accordionItems} />
          <div>
            <a href="/features" className="text-blue-500 underline pt-6 pb-2" >
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
              The latest product updates and features plus handy how-tos to help
              you get the most out of Safekidly.
            </p>
          </div>
          <div className="lg:w-1/3">
            <img src="https://static.qustodio.com/public-site/uploads/2023/11/28084530/parenttips-desktop%402x.png" />
            <p className="text-lg lg:text-xl font-bold my-1 lg:my-3">
              Parenting tips
            </p>
            <p>
              Fact-based information and research on children’s health and
              safety online, with expert insights from technology, psychology,
              medicine, and more.
            </p>
          </div>
          <div className="lg:w-1/3">
            <img src="https://static.qustodio.com/public-site/uploads/2023/11/28084646/safetyguide-desktop%402x.png" />
            <p className="text-lg lg:text-xl font-bold my-1 lg:my-3">
              App safety guides & reviews
            </p>
            <p>
              Summaries, ratings, warnings, and recommendations about the apps
              and games parents need to know about.
            </p>
          </div>
        </div>
      </div>
      </div>
    </SectionContainer>
  );
}

export default Why;
