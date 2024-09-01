import React, { useEffect, useState } from "react";
import { navlinks } from "../assets/data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa6"; 
import { Link } from "react-scroll";

  


   
const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState(false);
    const [product, setProduct] = useState(false);
    const [learn, setLern] = useState(false);
    const [suppert, setSupport] = useState(false);
    const handleMouseEnter = () => {
        setProduct(!product)
    }
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
            } w-full px-1 top-0 left-0 z-20 bg-viridianGreen text-white sticky`}
        >
            <div className="py-3 transition-all duration-300 container m-auto flex items-center justify-between ">
                <div className="flex text-xl sm:text-2xl uppercase font-semibold">
                    GUARDMYKIDS <span className="text-xs flex  items-end pb-1 lowercase">.com</span>
                </div>
                <div
                    className={`${
                        toggle
                            ? "top-[50px] md:top-[63px] py-12 gap-8"
                            : "top-[-1000px] gap-16 py-0"
                    } flex md:flex-row flex-col items-center absolute z-10 left-0 bg-viridianGreen w-full md:w-auto md:static transition-all duration-300 justify-between`}
                >
                    <div className="flex flex-col md:flex-row items-center gap-10  sm:text-lg text-md">
                    <li className="font-medium cursor-pointer hover:text-lightGray md:hidden">
                        <a
                            href="/"
                            spy={true}
                            smooth={true}
                            duration={100}
                            offset={-50}
                            onClick={() => setToggle(false)}
                        >
                            Home
                        </a>
                    </li> 
                    <div className=" relative  flex-row font-medium cursor-pointer group hover:text-lightGray hidden md:block"
                         onMouseEnter={handleMouseEnter}
                         onMouseLeave={handleMouseEnter}
                    >
                        <a
                            className="flex gap-2 "
                            spy={true}
                            smooth={true}
                            duration={100}
                            offset={-50}
                            onClick={() => setToggle(false)}
                        >
                            Product <FaChevronDown className="mt-2 group-hover:rotate-180" size={13} />
                        </a>
                        <div className={` absolute -right-20 z-10 mt-0 w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${product ? " " : "hidden" }  `} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <div class="py-1 w-[100%] flex" role="none">
                                {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                                <div class="block px-4 py-2 text-sm text-gray-700 w-1/4" role="menuitem" tabindex="-1" id="menu-item-0">
                                    Account settings
                                </div>
                              
                                </div>
                            </div>
                        </div>
                    <li className="font-medium cursor-pointer hover:text-lightGray md:hidden">
                        <a
                            href="/why"
                            spy={true}
                            smooth={true}
                            duration={100}
                            offset={-50}
                            onClick={() => setToggle(false)}
                        >
                            Why GardmyKid
                        </a>
                    </li>
                    <li className="font-medium cursor-pointer hover:text-lightGray md:hidden">
                        <a
                            href="/features"
                            spy={true}
                            smooth={true}
                            duration={100}
                            offset={-50}
                            onClick={() => setToggle(false)}
                        >
                            Features
                        </a>
                    </li>
                    <li className="font-medium cursor-pointer hover:text-lightGray md:hidden">
                        <a
                            href="/getStarted"
                            spy={true}
                            smooth={true}
                            duration={100}
                            offset={-50}
                            onClick={() => setToggle(false)}
                        >
                            How to get Started
                        </a>
                    </li>
                    <li className="font-medium cursor-pointer hover:text-lightGray md:hidden">
                        <a
                            href="/downloads"
                            spy={true}
                            smooth={true}
                            duration={100}
                            offset={-50}
                            onClick={() => setToggle(false)}
                        >
                            Downloads
                        </a>
                    </li>
                    <li className="font-medium cursor-pointer hover:text-lightGray">
                        <a
                            href="/pricing"
                            spy={true}
                            smooth={true}
                            duration={100}
                            offset={-50}
                            onClick={() => setToggle(false)}
                        >
                            Pricing
                        </a>
                    </li>
                    <li className="font-medium cursor-pointer group hover:text-lightGray">
                        <a
                            href="/learn"
                            className="flex gap-2"
                            spy={true}
                            smooth={true}
                            duration={100}
                            offset={-50}
                            onClick={() => setToggle(false)}
                        >
                            Learn <FaChevronDown className="mt-2 group-hover:rotate-180  hidden md:block " size={13} />
                        </a>
                    </li>
                    <li className="font-medium cursor-pointer group hover:text-lightGray">
                        <a
                            href="/support"
                            className="flex gap-2"
                            spy={true}
                            smooth={true}
                            duration={100}
                            offset={-50}
                            onClick={() => setToggle(false)}
                        > 
                            Support <FaChevronDown className="mt-2 group-hover:rotate-180 hidden md:block" size={13} />
                        </a>
                    </li>

                    <li className="font-medium cursor-pointer hover:text-lightGray md:hidden">
                        <a
                            href="/blog"
                            spy={true}
                            smooth={true}
                            duration={100}
                            offset={-50}
                            onClick={() => setToggle(false)}
                        >
                            Family Stories
                        </a>
                    </li>
                    </div>
                    <div className="flex gap-5">
                        <button className=" hover:text-viridianGreen hover:bg-white font-[700] w-max px-[25px] py-[10px] border-[2px] border-white border-solid rounded-md bg-transparent text-white sm:text-md text-sm">
                            Login
                        </button>
                        <button className="btn btn-secondary sm:text-md text-sm ">
                            SignUp
                        </button>
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
