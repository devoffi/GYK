import React from "react";
import {
    BsFacebook,
    BsTwitter,
    BsInstagram,
    BsLinkedin,
    BsGoogle,
    BsHousesFill
} from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div
            className="text-white footer-bg bg-oxfordBlue bg-no-repeat bg-center bg-cover"
            id="contact us"
        >
            <div className="container px-4 py-20 m-auto">
                <div className="flex flex-wrap gap-4 mb-4">
                    <div className="w-[220px]">
                        <p className="text-2xl font-bold mb-6">About us</p>
                        <Link
                            to="/partners-login" // Change href to to
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                           Partners
                        </Link>
                        <Link
                            to="/contact" // Change href to to
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                           Contact us
                        </Link>
                    </div>
                    <div className="w-[220px]">
                        <p className="text-2xl font-bold mb-6">Product</p>
                        <Link
                            to="/why" // Change href to to
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Why GuardMyKids
                        </Link>
                        <Link
                            to="/features" // Change href to to
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Features
                        </Link>
                        <Link
                            to="/get-started" // Change href to to
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Get started
                        </Link>
                        <Link
                            to="/downloads" // Change href to to
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Downloads
                        </Link>
                        <Link
                            to="/pricing" // Change href to to
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Pricing
                        </Link>
                        <Link
                            to="/school" // Change href to to
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Schools
                        </Link>
                    </div>
                    <div className="w-[220px]">
                        <p className="text-2xl font-bold mb-6">Resources</p>
                        <Link
                            to="/help" // Change href to to
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Help
                        </Link>
                        <Link
                            to="/product-tips" // Change href to to
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Learn
                        </Link>
                    </div>
                    <div className="w-[220px]">
                        <p className="text-2xl font-bold mb-6">Legal</p>
                        <Link
                            to="/product-privacy" // Change href to to
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Product privacy policy
                        </Link>
                        <Link
                            to="/web-privacy" // Change href to to
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Website privacy policy
                        </Link>
                        <Link
                            to="/cookie-policy" // Change href to to
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Cookie policy
                        </Link>
                        <Link
                            to="/legal-notice" // Change href to to
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Legal notice
                        </Link>
                    </div>
                    <div className="w-[220px]">
                        <p className="text-2xl font-bold mb-6">Find us</p>
                        <p className="text-xl font-semibold text-viridianGreen mb-3 flex gap-3">
                            <span className="rounded-full bg-viridianGreen p-1.5">
                                <BsHousesFill color="white" />
                            </span> 
                            Europe
                        </p>
                        <p className="text-base text-lightGray hover:text-white mb-3">
                            Roger de Flor 193, bajos 08013 Barcelona, Spain
                        </p>
                        <p className="text-xl font-semibold text-viridianGreen mb-3 mt-6 flex gap-3">
                            <span className="rounded-full bg-viridianGreen p-1.5">
                                <BsHousesFill color="white" />
                            </span> 
                            North America
                        </p>
                        <p className="text-base text-lightGray hover:text-white mb-3">
                            227 W Trade St #1100 Carillon Tower, Charlotte, NC 28202 USA
                        </p>
                        <form className="relative mt-6 hidden">
                            <input
                                type="text"
                                placeholder="Email address"
                                className="border-none outline-none text-eerieBlack py-3 pl-6 pr-36 text-lg rounded-lg"
                            />
                            <button className="absolute right-0 top-0 bg-viridianGreen py-3 text-lg px-5 rounded-r-lg">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <hr />
                <div className="flex flex-col sm:flex-row gap-5 justify-between items-center mt-6">
                    <div className="text-xl flex sm:text-2xl uppercase font-semibold">
                        GUARDMYKIDS <span className="text-xs flex items-end pb-1 lowercase">.com</span>
                    </div>

                    <p className="flex justify-center items-center text-sm text-lightGray">
                        &copy; 2024 Dev All Rights Reserved
                    </p>
                    <div className="flex gap-2 text-lightGray">
                        <Link
                            to="#" // Change href to to
                            className="p-[10px] rounded-full bg-independence hover:bg-viridianGreen"
                        >
                            <BsFacebook />
                        </Link>
                        <Link
                            to="#" // Change href to to
                            className="p-[10px] rounded-full bg-independence hover:bg-viridianGreen"
                        >
                            <BsTwitter />
                        </Link>
                        <Link
                            to="#" // Change href to to
                            className="p-[10px] rounded-full bg-independence hover:bg-viridianGreen"
                        >
                            <BsInstagram />
                        </Link>
                        <Link
                            to="#" // Change href to to
                            className="p-[10px] rounded-full bg-independence hover:bg-viridianGreen"
                        >
                            <BsLinkedin />
                        </Link>
                        <Link
                            to="#" // Change href to to
                            className="p-[10px] rounded-full bg-independence hover:bg-viridianGreen"
                        >
                            <BsGoogle />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
