import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import AccordionIcon from '../components/common/AccordianIcon';
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
      icon : FaRegFaceAngry ,
      title: 'Cyberbullying',
      content: (
        <>
          <p >Use Safekidly to monitor messages, social media posts, and phone contacts to catch and block bullies immediately.</p>
        </>
      ),
    },
    {
      icon : GiNightSleep,
      title: 'Sleep problems',
      content: (
        <>
          <p>Use Safekidly to set screen-free periods before bed so your child can avoid sleep- disrupting blue light.</p>
        </>
      ),
    },
    {
      icon : IoPhonePortraitOutline ,
      title: 'Online addiction',
      content: (
        <>
          <p  className='pb-1 md:pb-1.5'>Use Safekidly to set time limits for devices and specific apps so you can stop your kids from becoming addicted to their screens.</p>
        </>
      ),
    },
    {
      icon : FaLaptop,
      title: 'Inappropriate content',
      content: (
        <>
          <p  className='pb-1 md:pb-1.5'>Use Safekidly to block adult websites and monitor your child's YouTube views to prevent them from viewing upsetting content</p>
        </>
      ),
    },
    {
      icon :  TbMoodCry ,
      title: 'Mental health problems',
      content: (
        <>
          <p  className='pb-1 md:pb-1.5'>Use Safekidly to set screen time limits and monitor social media content which can help reduce your child's risk of developing depression and low self-esteem.</p>
        </>
      ),
    },
  ]
  const accordionItems1 = [
    {
      icon : BsPersonLock ,
      title: 'Online privacy',
      content: (
        <>
          <p  className='pb-1 md:pb-1.5'> Safekidly lets you supervise your child's messages and social media posts to ensure they don't share personal information with strangers.</p>
        </>
      ),
    },
    {
      icon : GiSpy  ,
      title: 'Online predators',
      content: (
        <>
          <p>Read  Safekidly's parenting tips articles for advice on talking to your kids about avoiding online predators.</p>
        </>
      ),
    },
    {
      icon : RiShapesLine,
      title: 'Education issues',
      content: (
        <>
          <p > Safekidly enables you to filter the websites, apps and videos your child can view to reduce distractions from their education.</p>
        </>
      ),
    },
    {
      icon : GiConsoleController ,
      title: 'Gaming addiction',
      content: (
        <>
          <p>Use Safekidly to set time limits for specific games, or block them completely, to ensure your child doesn't get addicted to gaming.</p>
        </>
      ),
    },
    {
      icon : FaBalanceScaleRight,
      title: 'Online | offline balance',
      content: (
        <>
          <p  className='pb-1 md:pb-1.5'>Safekidly enables you to set screen-free periods so you can make sure your child enjoys quality time away from their devices.</p>
        </>
      ),
    }
  ]

  return (
    <div className="my-20">
      <p className="lg:text-4xl text-xl font-bold text-center">
        Were here to help with your concerns
      </p>
      <p className="text-center my-5">
        Whatever their age and needs, Safekidly parental control tools help
        reduce the risks your kids face online.
      </p>
      <div className="flex flex-col lg:flex-row md:gap-10 ">
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
