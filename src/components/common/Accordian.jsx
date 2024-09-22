// src/Accordion.js
import React, { useState, useRef } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const AccordionItem = ({ title, content, isOpen, onToggle }) =>{
    const contentRef = useRef(null);
    return (
    
        <div className={` ${isOpen ? "border" : "border-b"} py-2 my-1 pr-5 border-gray-300  `}>
            <h2
            onClick={onToggle}
            className={` ${isOpen ? "px-4" : ""} flex justify-between items-center  text-lg font-medium text-gray-800 cursor-pointer `}
            >
            <span>{title}</span>
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
