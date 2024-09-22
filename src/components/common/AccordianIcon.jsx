// src/Accordion.js
import React, { useState, useRef } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { MdOutlineLock } from "react-icons/md";
import { GiShieldBash } from "react-icons/gi";
import { GoShieldCheck } from "react-icons/go";
import { GiCheckMark } from "react-icons/gi";
import { FaMinus } from "react-icons/fa6";
import { MdBalance } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { MdOutlineDevices } from "react-icons/md";




const AccordionItem = ({icon: Icon, title, content, isOpen, onToggle }) =>{
    const contentRef = useRef(null);
    return (
    
        <div className={` ${isOpen ? "border" : "shadow-all-directions"} py-4 my-5 pl-2 pr-5 rounded border-gray-300  `}>
            <h2
            onClick={onToggle}
            className={`  flex justify-between items-center  text-lg font-medium text-gray-800 cursor-pointer `}
            >
            
            <span className='flex gap-4 px-4 font-medium '> {Icon && <Icon className={` ${isOpen ? "text-viridianGreen" : "text-gray-900"}  text-2xl  mr-2 `} />}  {title}</span>
            {isOpen ? <FaChevronUp className='text-purple-600 text-xl font-thin' /> : <FaChevronDown  className='text-purple-500 text-xl font-thin' />}
            </h2>
            <div
                ref={contentRef}
                onClick={onToggle}
                className={`cursor-pointer overflow-hidden transition-height duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
            >
                <div className="px-4 py-3 font text-[16px] text-gray-700">
                {content}
                </div>
            </div>
        </div>
)};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full  mx-auto">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          icon={item.icon}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;