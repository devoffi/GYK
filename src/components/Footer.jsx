import React from "react";
import {
    BsFacebook,
    BsTwitter,
    BsInstagram,
    BsLinkedin,
    BsGoogle,
    BsHousesFill
} from "react-icons/bs";

const Footer = () => {

    return (
        <div
            className="text-white footer-bg bg-oxfordBlue  bg-no-repeat bg-center bg-cover"
            id="contact us"
        >
            <div className="container px-4 py-20 m-auto">
                <div className="flex flex-wrap gap-4 mb-4">
                    <div className="w-[220px]">
                        <p className="text-2xl font-bold mb-6">
                            About us
                        </p>
                        <a
                            href="partners-login"
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                           Partners
                        </a>
                        <a
                            href="contact"
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                           Contact us
                        </a>
                    </div>
                    <div className="w-[220px]">
                        <p className="text-2xl font-bold mb-6">Product</p>
                        <a
                            href="why"
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Why GuardMyKids
                        </a>
                        <a
                            href="features"
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Features
                        </a>
                        <a
                            href="get-started"
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Get started
                        </a>
                        <a
                            href="downloads"
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Downloads
                        </a>
                        <a
                            href="pricing"
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Pricing
                        </a>
                        <a
                            href="school"
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Schools
                        </a>
                    </div>
                    <div className="w-[220px]">
                        <p className="text-2xl font-bold mb-6">Resources</p>
                        <a
                            href="help"
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Help
                        </a>
                        <a
                            href="product-tips"
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Learn
                        </a>
                       
                        
                    </div>
                    <div className="w-[220px]">
                        <p className="text-2xl font-bold mb-6">Legal</p>
                        <a
                            href="product-privacy"
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Product privacy policy
                        </a>
                        <a
                            href="web-privacy"
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Website privacy policy
                        </a>
                        <a
                            href="cookie-policy"
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Cookie policy
                        </a>
                        <a
                            href="legal-notice"
                            className="text-base text-lightGray hover:text-white mb-3"
                        >
                            Legal notice
                        </a>
                     
                    </div>
                    <div className="w-[220px]">
                        <p className="text-2xl font-bold mb-6">
                            Find us
                        </p>
                        <p className="text-xl font-semibold text-viridianGreen mb-3 flex gap-3">
                          <p className="rounded-full bg-viridianGreen p-1.5"> < BsHousesFill color="white" /> </p> Europe
                        </p>
                        <p className="text-base text-lightGray hover:text-white mb-3">
                            Roger de Flor 193, bajos 08013 Barcelona, Spain
                        </p>
                        <p className="text-xl font-semibold text-viridianGreen mb-3 mt-6 flex gap-3">
                          <p className="rounded-full bg-viridianGreen p-1.5"> < BsHousesFill color="white" /> </p> North America
                        </p>
                        <p className="text- text-lightGray hover:text-white mb-3">
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
                        GUARDMYKIDS <span className="text-xs flex  items-end pb-1 lowercase">.com</span>
                    </div>

                    <p className="flex justify-center items-center text-sm text-lightGray">
                        &copy; 2024 Dev All Rights Reserved
                    </p>
                    <div className="flex gap-2 text-lightGray">
                        <a
                            href="#"
                            className="p-[10px] rounded-full bg-independence hover:bg-viridianGreen"
                        >
                            <BsFacebook />
                        </a>
                        <a
                            href="#"
                            className="p-[10px] rounded-full bg-independence hover:bg-viridianGreen"
                        >
                            <BsTwitter />
                        </a>
                        <a
                            href="#"
                            className="p-[10px] rounded-full bg-independence hover:bg-viridianGreen"
                        >
                            <BsInstagram />
                        </a>
                        <a
                            href="#"
                            className="p-[10px] rounded-full bg-independence hover:bg-viridianGreen"
                        >
                            <BsLinkedin />
                        </a>
                        <a
                            href="#"
                            className="p-[10px] rounded-full bg-independence hover:bg-viridianGreen"
                        >
                            <BsGoogle />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
