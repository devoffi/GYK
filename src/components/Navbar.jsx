import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa6";
import { BsArrowUpRight } from "react-icons/bs";
import { FaListCheck } from "react-icons/fa6";
import { BsRocketTakeoff } from "react-icons/bs";
import { RiFolderDownloadLine } from "react-icons/ri";
import { MdDevices } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";
import { IoMdHelpCircleOutline } from "react-icons/io";
import icon from "../assets/images/img1.jpg";
import logo from "../assets/images/logo1.jpg";
import { Link } from "react-scroll";

const Header = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(false);
  const [product, setProduct] = useState(false);
  const [learn, setLern] = useState(false);
  const [support, setSupport] = useState(false);

  const handleProduct = () => {
    setProduct(true);
  };
  const hideProduct = () => {
    setProduct(false);
  };
  const handleLearn = () => {
    setLern(!learn);
  };
  const handleSupport = () => {
    setSupport(!support);
  };
  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 992) {
        setToggle(false);
      }
    });
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  });
  return (
    <div
            className={`${
                active ? "shadow-lg" : ""
            } w-full px-3 top-0 left-0 z-20 bg-viridianGreen text-white sticky`}
        >
            <div className="py-3 transition-all duration-300 container m-auto flex items-center justify-between">
                <div className="flex text-xl sm:text-2xl uppercase font-semibold cursor-pointer"  onClick={() => navigate('/')}>
                  <img src={logo} alts="courses" className='w-30 h-12 rounded-sm shadow-2xl  object-cover'/>
               </div>
                <div
                    className={`${
                        toggle
                            ? "top-[65px] md:top-[63px] py-12 gap-8"
                            : "top-[-1000px] gap-16 py-0"
                    } flex md:flex-row flex-col items-center absolute z-10 left-0 bg-viridianGreen w-full md:w-auto md:static transition-all duration-300`}
                >
                    <div className="flex flex-col md:flex-row items-center gap-10  sm:text-lg text-md">
                      <li className="font-medium cursor-pointer hover:text-lightGray md:hidden">
                        <a
                          href="/"
                          smooth={true}
                          duration={100}
                          offset={-50}
                          onClick={() => setToggle(false)}>
                          Home
                        </a>
                      </li>
                      <div
                        className=" relative  flex-row font-medium cursor-pointer group hover:text-lightGray hidden md:block">
                        <a
                          className="flex gap-2 "
                          smooth={true}
                          duration={100}
                          offset={-50}
                          onClick={() => setToggle(false)}>
                          Product{" "}
                          <FaChevronDown
                            className="mt-2 group-hover:rotate-180"
                            size={13}
                          />
                        </a>
                        <div
                          className={` absolute  z-10 mt-0  origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none   hidden group-hover:block `}
                          tabIndex="-1"
                          style={{
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "750px",
                          }}>
                          <div className="py-1 w-full" role="none">
                            <div className=" flex px-4 py-2 text-sm text-gray-700 w-full gap-5"  >
                              <div  onClick={() => navigate('/why')} className='category bg-white px-2 pb-4 shadow-xl rounded-md flex items-center  justify-between border border-transparent hover:bg-gray-50 hover:border-[#1a9068] hover:cursor-pointer group/edit' style={{width : "365px"}}>
                                  <div className="flex">
                                      <img src={icon} alt="courses" className='w-20 h-15  object-cover'/>
                                  </div>
                                  <div className="rounded-lg  group-hover">
                                      <p className="text-base whitespace-nowrap pt-1 font-bold flex items-start "> Why GuardMyKid </p>
                                      <p className="text-xs">
                                          Protecting your kids' digital lives is crucial
                                      </p>
                                  </div>
                                  <BsArrowUpRight size={13} style={{ color:'#1a9068' }} className='icon items-start mt-7 '/>
                              </div>
                              <div onClick={() => navigate('/features')} className='category bg-white px-2 pb-4 shadow-xl rounded-md flex items-center  justify-between border border-transparent hover:border-[#1a9068] hover:cursor-pointer group/edit' style={{width : "365px"}}>
                                  <div className="flex pt-4  pl-3">
                                      < FaListCheck size={25} color="hsl(180, 98%, 31%)" />
                                  </div>
                                  <div className="rounded-lg  group-hover pl-4">
                                      <p className="text-base whitespace-nowrap pt-1 font-bold flex items-start "> Features </p>
                                      <p className="text-xs">
                                      Balance screen time, filter content, and view activity reports in the way that suits your family.
                                      </p>
                                  </div>
                                  <BsArrowUpRight size={25} style={{ color:'#1a9068' }} className='icon items-start mt-11'/>
                              </div>
                            </div>
                            <div className=" flex px-4 py-2 text-sm text-gray-700 w-full gap-5"  role="menuitem"  tabIndex="-1"  id="menu-item-0">
                              <div   onClick={() => navigate('/get-started')} className='category bg-white px-2 pb-4 shadow-2xl rounded-md flex items-center  justify-between border border-transparent hover:border-[#1a9068] hover:cursor-pointer group/edit' style={{width : "365px"}}>
                                  <div className="flex pt-4  pl-3">
                                      <BsRocketTakeoff size={25} color="hsl(180, 98%, 31%)" />
                                  </div>
                                  <div className="rounded-lg  group-hover pl-4">
                                      <p className="text-base whitespace-nowrap pt-1 font-bold flex items-start "> Get Started </p>
                                      <p className="text-xs">
                                      Start protecting and supervising your child in just a few minutes with simple, easy setup.
                                      </p>
                                  </div>
                                  <BsArrowUpRight size={23} style={{ color:'#1a9068' }} className='icon items-start mt-10'/>
                              </div>
                              <div  onClick={() => navigate('/downloads')} className='category bg-white px-2 py-3 pb-4 shadow-2xl rounded-md flex items-center  justify-between border border-transparent hover:border-[#1a9068] hover:cursor-pointer group/edit' style={{width : "365px"}}>
                                  <div className="flex pt-2  pl-3 ">
                                      <RiFolderDownloadLine size={25} color="hsl(180, 98%, 31%)" />
                                  </div>
                                  <div className="rounded-lg  group-hover pl-3">
                                      <p className="text-base whitespace-nowrap pt-1 font-bold flex items-start "> Downloads </p>
                                      <p className="text-xs">
                                      Get GuearMyKid for every device, from smartphones and tablets to desktops and more ... 
                                      </p>
                                  </div>
                                  <BsArrowUpRight size={23} style={{ color:'#1a9068' }} className='icon items-start mt-11 '/>
                              </div>
                            </div>
                            
                          
                          </div>
                        </div>
                      </div>
                      <li className="font-medium cursor-pointer hover:text-lightGray md:hidden">
                        <a
                          href="/why"
                          smooth={true}
                          duration={100}
                          offset={-50}
                          onClick={() => setToggle(false)}>
                          Why GardmyKid
                        </a>
                      </li>
                      <li className="font-medium cursor-pointer hover:text-lightGray md:hidden">
                        <a
                          href="/features"
                          smooth={true}
                          duration={100}
                          offset={-50}
                          onClick={() => setToggle(false)}>
                          Features
                        </a>
                      </li>
                      <li className="font-medium cursor-pointer hover:text-lightGray md:hidden">
                        <a
                          href="/getStarted"
                          smooth={true}
                          duration={100}
                          offset={-50}
                          onClick={() => setToggle(false)}>
                          How to get Started
                        </a>
                      </li>
                      <li className="font-medium cursor-pointer hover:text-lightGray md:hidden">
                        <a
                          href="/downloads"
                          smooth={true}
                          duration={100}
                          offset={-50}
                          onClick={() => setToggle(false)}>
                          Downloads
                        </a>
                      </li>
                      <li className="font-medium cursor-pointer hover:text-lightGray">
                        <a
                          href="/pricing"
                          smooth={true}
                          duration={100}
                          offset={-50}
                          onClick={() => setToggle(false)}>
                          Pricing
                        </a>
                      </li>
                      <li className="font-medium cursor-pointer hover:text-lightGray md:hidden">
                        <a
                          href="/learn"
                          smooth={true}
                          duration={100}
                          offset={-50}
                          onClick={() => setToggle(false)}>
                          Learn
                        </a>
                      </li>
                      <li className="font-medium cursor-pointer hover:text-lightGray md:hidden">
                        <a
                          href="/help"
                          smooth={true}
                          duration={100}
                          offset={-50}
                          onClick={() => setToggle(false)}>
                          Support
                        </a>
                      </li>
                      <li className="font-medium cursor-pointer hover:text-lightGray md:hidden">
                        <a
                          href="/family-stories"
                          smooth={true}
                          duration={100}
                          offset={-50}
                          onClick={() => setToggle(false)}>
                          Family Stories
                        </a>
                      </li>
                      <div
                        className=" relative  flex-row font-medium cursor-pointer group hover:text-lightGray hidden md:block">
                        <a
                          
                          className="flex gap-2 "
                          smooth={true}
                          duration={100}
                          offset={-50}
                          onClick={() => setToggle(false)}>
                          Learn{" "}
                          <FaChevronDown
                            className="mt-2 group-hover:rotate-180"
                            size={13}
                          />
                        </a>
                        <div
                          className={` absolute  z-10 mt-0  origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  hidden group-hover:block `}
                          tabIndex="-1"
                          style={{
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "750px",
                          }}>
                          <div className="py-1 w-full" role="none">
                            <div className=" flex px-4 py-2 text-sm text-gray-700 w-full gap-5"  >
                              <div onClick={() => navigate('/product-tips')} className='category bg-white px-2 pb-4 shadow-xl rounded-md flex items-center  justify-between border border-transparent hover:bg-gray-50 hover:border-[#1a9068] hover:cursor-pointer group/edit' style={{width : "365px"}}>
                                  <div className="flex px-4">
                                      < MdDevices  size={25} color="hsl(180, 98%, 31%)" />
                                  </div>
                                  <div className="rounded-lg  group-hover">
                                      <p className="text-base whitespace-nowrap pt-1 font-bold flex items-start "> Products tips </p>
                                      <p className="text-xs">
                                        The latest product updates and features  help you get the most out of guradmykid
                                      </p>
                                  </div>
                                  <BsArrowUpRight size={23} style={{ color:'#1a9068' }} className='icon items-start mt-7 '/>
                              </div>
                              <div onClick={() => navigate('/safety-guide')} className='category bg-white px-2 pb-4 shadow-xl rounded-md flex items-center  justify-between border border-transparent hover:border-[#1a9068] hover:cursor-pointer group/edit' style={{width : "365px"}}>
                                  <div className="flex pt-4  px-2">
                                      < AiOutlineSafety  size={25} color="hsl(180, 98%, 31%)" />
                                  </div>
                                  <div className="rounded-lg  group-hover pl-4">
                                      <p className="text-base whitespace-nowrap pt-1 font-bold flex items-start "> Safety guides </p>
                                      <p className="text-xs">
                                      Summaries, ratings, warnings and recommendations about the apps and games parents need to know about.
                                      </p>
                                  </div>
                                  <BsArrowUpRight size={25} style={{ color:'#1a9068' }} className='icon items-start mt-11'/>
                              </div>
                            </div>
                            <div className=" flex px-4 py-2 text-sm text-gray-700 w-full gap-5"  role="menuitem"  tabIndex="-1"  id="menu-item-0">
                              <div onClick={() => navigate('/parenting-tip')} className='category bg-white px-2 pb-4 shadow-2xl rounded-md flex items-center  justify-between border border-transparent hover:border-[#1a9068] hover:cursor-pointer group/edit' style={{width : "365px"}}>
                                  <div className="flex pt-4  pl-3">
                                      <FaRegLightbulb size={25} color="hsl(180, 98%, 31%)" />
                                  </div>
                                  <div className="rounded-lg  group-hover px-4">
                                      <p className="text-base whitespace-nowrap pt-1 font-bold flex items-start "> Parenting tips </p>
                                      <p className="text-xs">
                                      Fact-based information and research on children's health and safety online, with expert insights.
                                      </p>
                                  </div>
                                  <BsArrowUpRight size={23} style={{ color:'#1a9068' }} className='icon items-start mt-10'/>
                              </div>
                              <div onClick={() => navigate('/family-stories')} className='category bg-white px-2 py-3 pb-4 shadow-2xl rounded-md flex items-center  justify-between border border-transparent hover:border-[#1a9068] hover:cursor-pointer group/edit' style={{width : "365px"}}>
                                  <div className="flex pt-2  px-2 ">
                                      <AiOutlineSafety  size={25} color="hsl(180, 98%, 31%)" />
                                  </div>
                                  <div className="rounded-lg  group-hover px-4">
                                      <p className="text-base whitespace-nowrap pt-1 font-bold flex items-start "> Family stories  </p>
                                      <p className="text-xs">
                                      "Qustodio gives me the peace of mind that I have been looking for to ensure my kids are safe"
                                      </p>
                                  </div>
                                  <BsArrowUpRight size={23} style={{ color:'#1a9068' }} className='icon items-start mt-11 '/>
                              </div>
                            </div>
                            
                          
                          </div>
                        </div>
                      </div>
                      <div className="relative flex-row font-medium cursor-pointer group hover:text-lightGray hidden md:block">
                        <a
                          className="flex gap-2"
                          smooth={true}
                          duration={100}
                          offset={-50}
                          onClick={() => setToggle(false)}
                        >
                          Support{" "}
                          <FaChevronDown
                            className="mt-2 group-hover:rotate-180 transition-transform"
                            size={13}
                          />
                        </a>
                        <div
                          className="absolute z-10 mt-0 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden group-hover:block"
                          tabIndex="-1"
                          style={{
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "750px",
                          }}
                        >
                          <div className="py-1 w-full" role="none">
                            <div className="flex px-4 py-2 text-sm text-gray-700 w-full gap-5">
                              <div
                                onClick={() => navigate('/help')}
                                className='category bg-white px-2 pb-4 shadow-xl rounded-md flex items-center justify-between border border-transparent hover:bg-gray-50 hover:border-[#1a9068] hover:cursor-pointer group/edit'
                                style={{ width: "365px" }}
                              >
                                <div className="flex pt-4 px-4">
                                  <IoMdHelpCircleOutline size={25} color="hsl(180, 98%, 31%)" />
                                </div>
                                <div className="rounded-lg group-hover">
                                  <p className="text-base whitespace-nowrap pt-1 font-bold flex items-start">Help center</p>
                                  <p className="text-xs">
                                    Step-by-step guides and videos to help you set up, use, and troubleshoot Qustodio
                                  </p>
                                </div>
                                <BsArrowUpRight size={13} style={{ color: '#1a9068' }} className='icon items-start mt-7' />
                              </div>
                              <div
                                onClick={() => navigate('/care')}
                                className='category bg-white px-2 pb-4 shadow-xl rounded-md flex items-center justify-between border border-transparent hover:bg-gray-50 hover:border-[#1a9068] hover:cursor-pointer group/edit'
                                style={{ width: "365px" }}
                              >
                                <div className="flex pt-4 px-4">
                                  <IoMdHelpCircleOutline size={25} color="hsl(180, 98%, 31%)" />
                                </div>
                                <div className="rounded-lg group-hover">
                                  <p className="text-base whitespace-nowrap pt-1 font-bold flex items-start">Care</p>
                                  <p className="text-xs">
                                    Personalized support and guidance from dedicated experts throughout your Qustodio journey.
                                  </p>
                                </div>
                                <BsArrowUpRight size={13} style={{ color: '#1a9068' }} className='icon items-start mt-7' />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-5"   >
                      <a
                        onClick={() => setToggle(false)}
                        href="/login"
                        className="hover:text-viridianGreen hover:bg-white font-[700] w-max px-[25px] py-[10px] border-[2px] border-white border-solid rounded-md bg-transparent text-white sm:text-md text-sm"
                      >
                        Login
                      </a>
                      <a
                        onClick={() => setToggle(false)}
                        href="/signup"
                        className="btn btn-secondary sm:text-md text-sm"
                      >
                        SignUp
                      </a>
                   </div>
                </div>
                {!toggle && (
                    <HiMenuAlt1
                        className=" cursor-pointer Static md:hidden text-white font-bold text-2xl"
                        onClick={() => setToggle(true)}
                    />
                )}
                {toggle && (
                    <HiX
                        className="cursor-pointer static md:hidden text-white font-bold text-2xl"
                        onClick={() => setToggle(false)}
                    />
                )}
            </div>
        </div>
  );
};

export default Header;

