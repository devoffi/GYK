import React from "react";
import PrimaryButton from "./common/PrimaryButton";
import AccordionIcon from '../components/common/AccordianIcon';
import { FaShieldAlt } from "react-icons/fa";
import { RxActivityLog } from "react-icons/rx";
import { MdAccessTime } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TbLetterG } from "react-icons/tb";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineNotifications } from "react-icons/md";



function Controls() {

  const accordionItems = [
    {
      icon : FaShieldAlt,
      title: 'Filter content & apps',
      content: (
        <>
          <p  className='pb-1 md:pb-1.5'>Block inappropriate apps, games, and websites. Allow your kids visit child-friendly websites and automatically prevent them from viewing potentially harmful ones.</p>
        </>
      ),
    },
    {
      icon : RxActivityLog,
      title: 'Monitor activity',
      content: (
        <>
          <p>Get an easy, real-time view of your child's browsing history, YouTube views, social media use, screen time, location, and more.</p>
        </>
      ),
    },
    {
      icon : MdAccessTime,
      title: 'Set time limits',
      content: (
        <>
          <p >Prevent screen addiction, preserve family time, and encourage healthy sleep routines with consistent time limits and scheduled downtime. Plus, pause the internet at the touch of a button.</p>
        </>
      ),
    },
    {
      icon : SlCalender,
      title: 'Schedule screen-free moments',
      content: (
        <>
          <p>Create routines for specific moments of the day like study time and bedtime. Pick from suggested screen-free times, or create your own custom rules and easily switch between them when plans charge.</p>
        </>
      ),
    },
    {
      icon : IoCallOutline,
      title: 'Track calls & SMS for Android and iOS',
      content: (
        <>
          <p  className='pb-1 md:pb-1.5'>See who your child is exchanging calls and messages with, and read what they're writing. Also, block calls to and from specific contacts.</p>
          <p>**Calls and messages for IOS requires a Windows or Mac computer</p>
        </>
      ),
    },
    {
      icon : MdOutlineLocationOn,
      title: 'Locate family',
      content: (
        <>
          <p  className='pb-1 md:pb-1.5'>Check your family members' locations on the map and see where they've been. Receive alerts when they arrive and leave your saved locations.</p>
        </>
      ),
    },
    {
      icon : MdOutlineNotifications,
      title: 'Reports, alerts & SOS',
      content: (
        <>
          <p  className='pb-1 md:pb-1.5'>Receive detailed daily and weekly activity reports straight to your email. Set real-time alerts for concerning websites and online searches, plus enable your kids to send you an SOS if they need.</p>
        </>
      ),
    },
  ]

  return (
    <div className="flex flex-col gap-10 md:gap-20 mb-20">
      <p className="lg:text-3xl text-xl font-bold text-center mt-5 md:mt-0">
      Streamlined parental controls for effortless supervision.
      </p>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-32 gap-10">
        <div>
          <video autoPlay muted loop type="webm">
            <source src="https://static.qustodio.com/public-site/uploads/2024/04/26094644/Keep-your-child-safe_EN.webm" />
          </video>
        </div>
        <div className="text-center md:text-start">
          <p className="text-xl lg:text-4xl font-bold  my-8 whitespace-nowrap">
            Ensure your child’s online safety.
          </p>
          <p className="text-lg">
          Establish a secure online environment for your children with GuardMyKids. Gain peace of mind as you effortlessly monitor and manage their activity across all devices, no matter where they are.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-32 gap-10">
        <div className="hidden md:block ">
          <p className="text-xl lg:text-4xl font-bold my-8 whitespace-nowrap">
            Supervise on your own terms.
          </p>
          <p className="text-lg">
            Filter websites, set time limits, block apps, access detailed reports, and more. Customize your child’s digital experience to fit their needs and your preferences.
          </p>
        </div>
        <div>
          <video autoPlay muted loop type="webm">
            <source src="https://static.qustodio.com/public-site/uploads/2024/04/26094824/supervise-the-way-you-want_EN.webm" />
          </video>
        </div>
        <div className="md:hidden text-center md:text-start ">
          <p className="text-xl lg:text-4xl font-bold my-8 whitespace-nowrap">
            Supervise on your own terms.
          </p>
          <p className="text-lg">
            Filter websites, set time limits, block apps, access detailed reports, and more. Customize your child’s digital experience to fit their needs and your preferences.
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
            Foster healthy digital habits.
          </p>
          <p className="text-lg">
          Support your child in cultivating a healthy relationship with technology. With GuardMyKids, you can prioritize real-life activities while helping them develop balanced digital habits as they grow.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center mt-10 mb-4 lg:gap-20 gap-10">
          <div className='w-full md:w-1/2  text-gray-700 px-0'>
            <p className='text-lg md:text-2xl font-thin px-2 md:px-0  tracking-[1px] md:tracking-[3px]'>GUARDMYKIDS PARENTAL CONTROLS</p>
            <p className='text-2xl md:text-4xl px-6 md:px-0 font-medium md:font-bold text-center md:text-start pb-6 pt-3'>Everything you need to safeguard your kids online.</p>
            <p className="text-lg font-extralight md:whitespace-nowrap leading-5  text-center  md:text-start">Explore the features below to see what GuardMyKids can do for you!</p>
            <AccordionIcon items={accordionItems} />
            <div>
              <a href="/features" className="text-blue-500 underline pt-6 pb-2" >
                View all features
              </a>
              <p>*Panic Button is only available for Android.</p>
              <p>** Calls and messages for iOS requires a Windows or Mac computer</p>
            </div>
          </div>
          <div className="w-full md:w-1/2  text-gray-700  px-4 md:px-0">
            <video autoPlay muted loop type="webm">
              <source src="https://static.qustodio.com/public-site/uploads/2024/04/26094644/Keep-your-child-safe_EN.webm" />
            </video>
          </div>
      </div>
      <div className=" self-center"><PrimaryButton>Get started free</PrimaryButton></div>
    </div>
  );
}

export default Controls;
