import React, { useEffect, useState } from 'react';
import PrimaryButton from '../components/common/PrimaryButton'
import { BsCheckLg } from "react-icons/bs";
import AccordionIcon from '../components/common/AccordianIcon';
import { IoCallOutline } from "react-icons/io5";
import { IoHandLeftOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { TbLetterG } from "react-icons/tb";
import Carousel from 'react-multi-carousel';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { MdOutlineLock } from "react-icons/md";
import { GoShieldCheck } from "react-icons/go";


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
    <li key={i} className={`flex items-start mb-3 ${isAvailable ? '' : 'opacity-55'}`}>
      <div className="mr-2 text-green-500">
       <IoIosCheckmarkCircle size={22} />
      </div>
      <span className={isAvailable ? '' : 'text-gray-700'}>
        {text}
      </span>
    </li>
  ))}
</ul>
);


function Care() {


  const points = [
    {
      id: 1,
      text: 'Games & apps blocking',
      isAvailable: true,
    },
    {
      id: 2,
      text: 'Daily time limits',
      isAvailable: true,
    },
    {
      id: 3,
      text: 'Web filtering',
      isAvailable: true,
    },
    {
      id: 4,
      text: 'Location monitoring',
      isAvailable: true,
    },
    {
      id: 5,
      text: 'Pause internet access',
      isAvailable: true,
    }
    
    
  ]
  const points1 = [
    {
      id: 1,
      text: 'Games & apps',
      isAvailable: true,
    },
    {
      id: 2,
      text: 'Daily time limits',
      isAvailable: true,
    },
    {
      id: 3,
      text: 'Web filtering',
      isAvailable: true,
    },
    {
      id: 4,
      text: 'Location monitoring',
      isAvailable: true,
    },
    {
      id: 5,
      text: 'Pause internet access',
      isAvailable: true,
    },
    {
      id: 6,
      text: 'Custom routiness',
      isAvailable: true,
    },
    {
      id: 7,
      text: 'AI-powered search alerts',
      isAvailable: true,
    },
    {
      id: 8,
      text: 'Custom alerts',
      isAvailable: true,
    },
    {
      id: 8,
      text: 'Games & apps time limits',
      isAvailable: true,
    },
    {
      id: 9,
      text: 'Calls & messages monitoring*',
      isAvailable: true,
    },
    {
      id: 10,
      text: 'Unlimited devices*',
      isAvailable: true,
    }
    
    
  ]

  const sliderParams = {
    additionalTransfrom: 0,
    arrows: true,
    autoPlaySpeed: 3000,
    centerMode: false,
    slidesToShow: 1,
    swipeable: true,
    responsive,
  };
  const accordionItems = [
    {
      icon : IoCallOutline,
      title: 'Scheduled calls',
      content: (
        <>
          <p  className='pb-1 md:pb-1.5'>Plan ahead by booking a session with our experts at a time that suits you</p>
        </>
      ),
    },
    {
      icon : IoHandLeftOutline,
      title: 'Personalized guidance',
      content: (
        <>
          <p>Receive advice on setting up your device and customizing your rules </p>
        </>
      ),
    },
    {   
      icon : BiSupport,
      title: 'Technical support',
      content: (
        <>
          <p >Get fast, guided troubleshooting for any issues you encounter when setting up or using Safekidly</p>
        </>
      ),
    },
    {
      icon : SlCalender,
      title: 'Early access to new features',
      content: (
        <>
          <p>Be the first to know about our latest releases and try them before everyone else</p>
        </>
      ),
    },
    {
      icon : TbLetterG,
      title: 'Scheduled calls',
      content: (
        <>
          <p  className='pb-1 md:pb-1.5'>Plan ahead by booking a session with our experts at a time that suits you</p>
        </>
      ),
    },
  ]

  const [isVisible, setIsVisible] = useState(false);
  const [bCheak, setChecked] = React.useState(false);
  const [aCheak, setAchecked] = React.useState(false);
  const handleScroll = () => {
    const top = window.scrollY;
    if (top > 1100) { // Change this value as needed
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='container mx-auto '>
      <div className='flex flex-col-reverse md:flex-row my-10 md:pt-20'>
        <div className='md:w-1/2 pt-10 md:pt-0'>
            <img
              height={"100%"}
              src="https://static.qustodio.com/public-site/uploads/2024/08/30140531/Hero_Desktop_EN.webp"
            />
          </div>
        <div className='md:w-1/2 px-4'>
            <div className='w-full flex justify-center md:justify-start items-center'>
              <img
                height={"100%"}
                width={"45%"}
                src="https://static.qustodio.com/public-site/uploads/2021/10/26103853/group-50-copy%402x.png"
                />
            </div>
            <p className='text-xl md:text-3xl text-gray-700 font-medium py-8 w-full text-center md:text-start px-4 md:px-0 md:w-3/4'>Get exclusive help over the
                phone – from expert advice on
                setting up Safekidly to technical
                troubleshooting when you need
            </p>
            <div className='w-full flex justify-center md:justify-start'>
            <PrimaryButton>Buy now</PrimaryButton>
            </div>
            <span className='pt-5 text-gray-700 font-normal text-center md:text-start'>Available in English h</span>
        </div>
      </div>
      <div className='flex flex-col text-gray-700 text-center py-10'>
        <p className='text-2xl md:text-3xl font-semibold'>What is Care Plus?</p>
        <p className='text-lg px-6 md:text-xl py-5 font-medium md:px-72'>Safekidly Care Plus gives you priority help through all our available
          channels at each stage of your Safekidly journey.
        </p>
          <div className="py-8 justify-center flex flex-col md:flex-row items-center gap-4 md:gap-44 my-8 md:my-12">
            <div className="flex flex-col items-center">
              <p className="text-5xl text-center md:text-6xl font-medium">97%</p>
              <p className='text-xl text-purple-400 font-medium py-4'>Resolution rate</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-5xl text-center md:text-6xl font-medium">15 min</p>
              <p className='text-xl text-purple-400 font-medium py-4'>Avg. resolution time</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-5xl text-center md:text-6xl font-medium">99%</p>
              <p className='text-xl text-purple-400 font-medium py-4'>Happy customers</p>
            </div>
          </div>
      </div>
      <div className='md:flex md:pt-2'>
        <div className='md:w-1/2'>
            <img
              height={"100%"}
              src="https://static.qustodio.com/public-site/uploads/2024/09/03083220/Image_Desktop.webp"
            />
        </div>
        <div className='md:w-1/2 px-6 text-gray-700'>
            <p className='text-3xl font-bold px-8 md:px-0 text-center py-8 md:w-3/4'> Helping you save time </p>
            <p className='flex gap-4 text-xl font-semibold pt-4'><BsCheckLg className='text-blue-500 text-2xl bg-blue-200  rounded-full p-[2px]' /> Phone support</p>
            <span className='pl-10 py-2 text-lg md:text-xl font-medium '>Speak to our experts over the phone.</span>
            <p className='flex gap-4 text-xl font-semibold pt-4'><BsCheckLg className='text-blue-500 text-2xl bg-blue-200  rounded-full p-[2px]' /> Easy setup</p>
            <span className='pl-10 py-2 text-lg md:text-xl font-medium'>Get started quickly with step-by-step help.</span>
            <p className='flex gap-4 text-xl font-semibold pt-4'><BsCheckLg className='text-blue-500 text-2xl bg-blue-200  rounded-full p-[2px]' /> Proactive guidance</p>
            <span className='pl-10 py-2 text-lg md:text-xl font-medium'>Receive personalized advice to get more from Safekidly.</span>
        </div>
      </div>
      <div className='text-center py-16'>
        <p className='text-xl md:text-2xl font-thin px-4 md:px-0 text-gray-800 tracking-[5px]'>IT’S EASY TO GET STARTED</p>
        <p className='text-3xl font-bold py-2 text-gray-700'>How it works</p>
        <div className="md:flex justify-center gap-10 px-8 md:px-0">
          <div  className={`max-w-sm rounded-md my-10 overflow-hidden shadow-2xl bg-white transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <img
              className="w-full"
              src="https://static.qustodio.com/public-site/uploads/2024/09/03104741/1-SIgnup_Desktop.webp" // Replace with your image URL
            />
            <div className="px-6 py-4 text-gray-700 ">
              <div className="font-bold text-xl mb-2">Sign up</div>
              <p className="font-medium text-lg">Add Care Plus to your plan and we’ll get in touch</p>
            </div>
          </div>
          <div  className={`max-w-sm rounded-md my-10 overflow-hidden shadow-2xl bg-white transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <img
              className="w-full"
              src="https://static.qustodio.com/public-site/uploads/2024/08/30154520/2-BookCall_Desktop_EN.webp" // Replace with your image URL
            />
            <div className="px-6 py-4 text-gray-700 ">
              <div className="font-bold text-xl mb-2">Book a call</div>
              <p className="font-medium text-lg">Choose the day and time that is convenient for you</p>
            </div>
          </div>
          <div  className={`max-w-sm rounded-md my-10 overflow-hidden shadow-2xl bg-white transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <img
              className="w-full"
              src="https://static.qustodio.com/public-site/uploads/2024/08/30154456/3-Checkins_Desktop_EN.webp" // Replace with your image URL
            />
            <div className="px-6 py-4 text-gray-700 ">
              <div className="font-bold text-xl mb-2">Ongoing check-ins</div>
              <p className="font-medium text-lg">We’ll ensure you’re making the most of Safekidly</p>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <p className='text-4xl font-bold '>What parents are saying</p>
        <div className='w-full flex flex-col md:flex-row gap-12'>
          <div className='w-full md:w-4/12 pt-12 md:pt-6 '>
            <img
              height={"100%"}
              src="https://static.qustodio.com/public-site/uploads/2024/08/30164717/Parents_Desktop_EN.png"
            />
          </div>
          <div className='w-full md:w-4/12 flex flex-col px-8 md:pt-28 items-start '>
            <img
              height={"100%"}
              src="https://static.qustodio.com/public-site/uploads/2024/09/02142803/exports-04-parents-section-desktop-icon.png"
            />
            <p className='text-2xl text-start text-gray-800 font-bold my-4 bg-blue-50/50'>Getting a phone call from an expert to advise me on how I could do more with Safekidly is very impressive.</p>
            <p className='text-xl font-medium text-gray-600 pt-4'>Michael</p>
          </div>
          <div className='w-full md:w-4/12 flex flex-col px-8 md:pt-28 items-start '>
            <img
              height={"100%"}
              src="https://static.qustodio.com/public-site/uploads/2024/09/02142803/exports-04-parents-section-desktop-icon.png"
            />
            <p className='text-2xl text-start text-gray-800 font-bold my-4 bg-blue-50/50'>The agent was fantastic, patient, and wonderful to work with. She removed a lot of my stress.</p>
            <p className='text-xl font-medium text-gray-600 pt-4'>Stacy</p>
          </div>
          
        </div>
      </div>
      <div className='container mx-auto md:flex justify-between w-full gap-10 py-10 md:py-20 '>
        <div className='w-full md:w-1/2  text-gray-700  px-4 md:px-0'>
          <p className='text-lg md:text-2xl font-thin px-2 md:px-0  tracking-[3px] md:tracking-[5px]'>GET MORE FROM SAFEKIDLY</p>
          <p className='text-3xl md:text-4xl px-6 md:px-0 font-bold text-center md:text-start pb-6 pt-3'>Exclusive care plus features</p>
          <AccordionIcon items={accordionItems} />
        </div>
        <div className='md:w-1/2 pt-10 md:pt-20 '>
          <img
            height={"100%"}
            src="https://static.qustodio.com/public-site/uploads/2024/09/05105125/CP-Features_Desktop_EN.webp"
          />
        </div>

      </div>
      <div className='text-center text-gray-700 pt-12 px-4 md:px-0'>
        <p className='text-2xl md:text-5xl px-4 md:px-0 font-bold'>Choose the right plan for your family</p>
        <p className='text-base md:text-2xl px-6 md:px-0 font-medium md:font-semibold py-4 md:py-8 '>Safekidly Premium is here for every stage of your digital journey</p>
        <div className='flex w-full justify-center gap-10 md:py-12'>
          <div className="relative w-[34%] h-fit hidden md:block border border-gray-200 rounded-xl py-8 bg-white  hover:shadow-xl transition-shadow duration-300 mb-10">
              
              <div className="mb-6 border-b px-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-2 flex gap-2"> 
                  < MdOutlineLock color="hsl(180, 98%, 31%)" size={26} />
                  BASIC
                </h2>
                <p className="text-gray-900 text-start text-base font-light md:text-xl ">The tools you need for core protection.</p>
              </div>
              <div className="text-center my-6 ">
                <p className="text-3xl font-medium flex items-end text-gray-800 px-8"> {`${bCheak ? "₹2,300.00" :"₹2,070.00"}`} <span className="text-lg pb-1 text-gray-700">/year</span></p>
                <p className='text-start font-medium text-gray-500 pb-3 px-8'>same as {`${bCheak ? "₹191.67" :"₹172.50"}`}/month</p>
                <div className='bg-gray-100 w-full py-2 px-8'>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="hidden" // Hide the default checkbox
                      bCheak={bCheak}
                      onChange={() => setChecked(!bCheak)}
                    />
                    <div
                      className={`w-4 h-4 border-2 border-blue-500 flex items-center justify-center 
                        ${bCheak ? 'bg-blue-500' : 'bg-white'} rounded`}
                    >
                      {bCheak && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 text-white "
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-base ml-2 flex font-semibold">Add Care Plus <span className='px-1 font-light'>for ₹230.00 </span></span>
                  </label>
                  </div>
                  <div className='px-8'>
                  <a
                    className="hover:text-white hover:bg-viridianGreen hover:font-[400] font-[500] w-full py-[8px] border-[2px] border-viridianGreen border-solid rounded-md bg-transparent text-black sm:text-md text-xl bg-gray-100 mt-4 "
                  >
                    Buy now
                  </a>
                </div>
              </div>
              <List items={points} childStyle="text-[16px] font-[500] text-gray-700 px-8" />
              
          </div>
          <div className="relative w-[35%] hidden md:block border rounded-xl py-8 bg-blue-900/90  hover:shadow-xl transition-shadow duration-300 mb-10 ">
              <div className="absolute top-[-14px] left-3/4 transform -translate-x-3/4 bg-yellow-500 text-black text-sm font-medium rounded px-3 py-0.5 whitespace-nowrap">
                MOST POPULAR
              </div>
              <div className="mb-6 border-b px-8">
                <h2 className="text-xl  font-semibold text-white mb-2 flex gap-2"> 
                  < GoShieldCheck  color="hsl(180, 98%, 31%)" size={26} />
                  COMPLETE
                </h2>
                <p className="text-white text-base text-start font-light md:text-xl ">Advanced safety features with full customization.</p>
              </div>
              <div className="text-center my-6 ">
                <p className="text-3xl font-medium flex items-end text-white px-8">₹3,680.00<span className="text-lg pb-1 text-white">/year</span></p>
                <p className='text-start font-medium text-white pb-3 px-8'>same as ₹306.67/month</p>
                <div className='bg-gray-100 w-full py-2 px-8'>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="hidden" // Hide the default checkbox
                      bCheak={aCheak}
                      onChange={() => setAchecked(!aCheak)}
                    />
                    <div
                      className={`w-4 h-4 border-2 border-blue-500 flex items-center justify-center 
                        ${aCheak ? 'bg-blue-500' : 'bg-white'} rounded`}
                    >
                      {aCheak && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 text-white "
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-base ml-2 flex font-semibold">Care Plus <span className='px-1 font-light'>included free </span></span>
                  </label>
                </div>
                <div className='px-8 pt-4'>
                <a
                  className="hover:text-white hover:bg-viridianGreen hover:font-[400] font-[500] w-full py-[8px] border-[2px] border-solid rounded-md bg-white text-black sm:text-md text-xl"
                >
                  Buy now
                </a>
                </div>
              </div>
              <List items={points1} childStyle="text-[16px] font-[500] text-white px-8" />
          </div>
        </div>
        
        <Carousel {...sliderParams} className="w-full py-5 flex ">
            <div className="md:hidden  w-full relative border rounded-xl py-8 bg-blue-900/90   hover:shadow-xl transition-shadow duration-300 mb-10">
              <div className="absolute top-[-14px] left-3/4 transform -translate-x-3/4 bg-yellow-500 text-black text-sm font-medium rounded px-3 py-0.5 whitespace-nowrap">
                MOST POPULAR
              </div>
              <div className="mb-6 border-b px-8">
                <h2 className="text-xl  font-semibold text-white mb-2 flex gap-2"> 
                  < GoShieldCheck  color="hsl(180, 98%, 31%)" size={26} />
                  COMPLETE
                </h2>
                <p className="text-white text-start text-base font-light md:text-xl ">Advanced safety features with full customization.</p>
              </div>
              <div className="text-center my-6 ">
                <p className="text-3xl font-medium flex items-end text-white px-8 "> ₹3,680.00<span className="text-lg pb-1 text-white">/year</span></p>
                <p className='text-start font-medium text-white pb-3 px-8'>same as ₹306.67/month</p>
                <div className='bg-gray-100 w-full py-2 px-8'>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="hidden" // Hide the default checkbox
                      bCheak={aCheak}
                      onChange={() => setAchecked(!aCheak)}
                    />
                    <div
                      className={`w-4 h-4 border-2 border-blue-500 flex items-center justify-center 
                        ${aCheak ? 'bg-blue-500' : 'bg-white'} rounded`}
                    >
                      {aCheak && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 text-white "
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-base ml-2 flex font-semibold">Care Plus <span className='px-1 font-light'>included free </span></span>
                  </label>
                </div>
                <div className='px-8 pt-4'>
                <a
                  className="hover:text-white hover:bg-viridianGreen hover:font-[400] font-[500] w-full py-[8px] border-[2px] border-solid rounded-md bg-white text-black sm:text-md text-xl"
                >
                  Buy now
                </a>
                </div>
              </div>
              <List items={points1} childStyle="text-[16px] font-[500] text-white px-8" />
            </div>
            <div className="md:hidden  w-full relative border border-gray-200 rounded-xl py-8 bg-white  hover:shadow-xl transition-shadow duration-300 mb-10">
              <div className="mb-6 border-b ">
                <h2 className="text-xl font-semibold text-gray-700 mb-2 flex gap-2 px-8"> 
                  < MdOutlineLock color="hsl(180, 98%, 31%)" size={26}  />
                  BASIC
                </h2>
                <p className="text-gray-900 text-base font-light md:text-xl ">The tools you need for core protection.</p>
              </div>
              <div className="text-center my-6 ">
                <p className="text-3xl font-medium flex items-end text-gray-800 px-8">{`${bCheak ? "₹2,300.00" :"₹2,070.00"}`}<span className="text-lg pb-1 text-gray-700">/year</span></p>
                <p className='text-start font-medium text-gray-500 pb-3  px-8'>same as  {`${bCheak ? "₹191.67" :"₹172.50"}`}/month</p>
                <div className='bg-gray-100 w-full py-2 px-8'>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="hidden" // Hide the default checkbox
                      bCheak={bCheak}
                      onChange={() => setChecked(!bCheak)}
                    />
                    <div
                      className={`w-4 h-4 border-2 border-blue-500 flex items-center justify-center 
                        ${bCheak ? 'bg-blue-500' : 'bg-white'} rounded`}
                    >
                      {bCheak && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 text-white "
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-base ml-2 flex font-semibold">Add Care Plus <span className='px-1 font-light'>for ₹230.00 </span></span>
                  </label>
                  </div>
                  <div className='px-8'>
                  <a
                    className="hover:text-white hover:bg-viridianGreen hover:font-[400] font-[500] w-full py-[8px] border-[2px] border-viridianGreen border-solid rounded-md bg-transparent text-black sm:text-md text-xl bg-gray-100 mt-4 "
                  >
                    Buy now
                  </a>
                </div>
              </div>
              <List items={points} childStyle="text-[16px] font-[500] text-gray-700  px-8" />
              
            </div>
            
            
        </Carousel>
      </div>
      <div className='flex justify-center w-full px-4 md:px-0'>
        <p className='w-[85%] text-center md:w-4/6 text-[14px] leading-1'>* Calls & messages for iOS requires a Windows or Mac computer. Unlimited includes your family devices and does not apply to schools or businesses. Offer valid until September 30, 2024 on 1-year plans only.</p>
      </div>  
      <div className='px-4 md:px-0 w-full flex flex-col gap-3 justify-center items-center py-10 md:py-20'>
        <p className='text-xs'>AvailableFor:</p>
        <img width={400} src='https://www.qustodio.com/wp-content/themes/Divi-child/assets/dist/svg/blocks/planbox-b/device-list.svg'/>
      </div>
      
    </div>
  )
}

export default Care