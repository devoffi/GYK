import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import AccordionIcon from "../components/common/AccordianIcon";
import { FaShieldAlt } from "react-icons/fa";
import { RxActivityLog } from "react-icons/rx";
import { MdAccessTime } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TbLetterG } from "react-icons/tb";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineNotifications } from "react-icons/md";

import { FaRegFaceAngry } from "react-icons/fa6";
import { GiNightSleep } from "react-icons/gi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaLaptop } from "react-icons/fa";
import { TbMoodCry } from "react-icons/tb";
import { BsPersonLock } from "react-icons/bs";
import { GiSpy } from "react-icons/gi";
import { RiShapesLine } from "react-icons/ri";
import { GiConsoleController } from "react-icons/gi";
import { FaBalanceScaleRight } from "react-icons/fa";

function Concern() {
  const accordionItems = [
    {
      icon: FaRegFaceAngry,
      title: "Cyberbullying",
      content: (
        <>
          <p>
            Safekidly helps you monitor messages, social media posts, and
            contacts to detect and block cyberbullies immediately.
          </p>
        </>
      ),
    },
    {
      icon: GiNightSleep,
      title: "Sleep Issues",
      content: (
        <>
          <p>
            Set screen-free periods before bedtime with Safekidly to reduce
            exposure to sleep-disrupting blue light.
          </p>
        </>
      ),
    },
    {
      icon: IoPhonePortraitOutline,
      title: "Screen Addiction",
      content: (
        <>
          <p className="pb-1 md:pb-1.5">
            Safekidly allows you to set time limits on devices and apps, helping
            prevent your kids from becoming addicted to their screens.
          </p>
        </>
      ),
    },
    {
      icon: FaLaptop,
      title: "Inappropriate Content",
      content: (
        <>
          <p className="pb-1 md:pb-1.5">
            Block adult websites and monitor YouTube activity with Safekidly to
            protect your child from disturbing content.
          </p>
        </>
      ),
    },
    {
      icon: TbMoodCry,
      title: "Mental Health",
      content: (
        <>
          <p className="pb-1 md:pb-1.5">
            Safekidly helps reduce the risk of depression and low self-esteem by
            limiting screen time and monitoring social media activity.
          </p>
        </>
      ),
    },
  ];

  const accordionItems1 = [
    {
      icon: BsPersonLock,
      title: "Online Privacy",
      content: (
        <>
          <p className="pb-1 md:pb-1.5">
            Safekidly allows you to monitor your child's messages and social
            media posts to protect them from sharing personal information with
            strangers.
          </p>
        </>
      ),
    },
    {
      icon: GiSpy,
      title: "Online Predators",
      content: (
        <>
          <p>
            Explore Safekidly's parenting tips for advice on how to talk to your
            kids about avoiding online predators.
          </p>
        </>
      ),
    },
    {
      icon: RiShapesLine,
      title: "Education Focus",
      content: (
        <>
          <p>
            Safekidly helps you filter websites, apps, and videos to minimize
            distractions and keep your child focused on their education.
          </p>
        </>
      ),
    },
    {
      icon: GiConsoleController,
      title: "Gaming Addiction",
      content: (
        <>
          <p>
            Set time limits or block specific games with Safekidly to prevent
            your child from becoming addicted to gaming.
          </p>
        </>
      ),
    },
    {
      icon: FaBalanceScaleRight,
      title: "Balance Online & Offline Time",
      content: (
        <>
          <p className="pb-1 md:pb-1.5">
            Safekidly allows you to set screen-free periods, helping your child
            enjoy quality time away from their devices.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="my-20">
      <p className="lg:text-4xl text-xl font-bold text-center">
        We're Here to Address Your Concerns
      </p>
      <p className="text-center my-5">
        No matter your child’s age or needs, Safekidly’s parental control tools
        are designed to minimize the online risks they face.
      </p>
      <div className="flex flex-col lg:flex-row md:gap-10">
        <div className="lg:w-[30%] flex justify-center items-center py-6">
          <img src="https://static.qustodio.com/public-site/uploads/2023/11/16115935/studykid-image-en%402x.png" />
        </div>
        <div className="lg:w-[30%]">
          <AccordionIcon items={accordionItems} />
        </div>
        <div className="lg:w-[30%]">
          <AccordionIcon items={accordionItems1} />
        </div>
      </div>
    </div>
  );
}

export default Concern;
