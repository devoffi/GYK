import React, { useEffect } from "react";
import { SectionContainer } from "../components/common/SectionContainer";
import PrimaryButton from "../components/common/PrimaryButton";
import AvailableFor from "../components/common/AvailableFor";
import Rating from "../components/Rating";
import Controls from "../components/Controls";
import Concern from "../components/Concern";
import Testimonial from "../components/Testimonial";
import Feature from "../components/Feature";
import CreateAccount from "../components/CreateAccount";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <SectionContainer>
      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row mt-10 md:mt-20 gap-10">
        {/* Left Column - Text and Call to Action */}
        <div className="text-center md:text-start flex flex-col gap-6">
          <p className="text-3xl lg:text-5xl font-extrabold leading-tight">
            Discover a complete{" "}
            <span className="text-green-400">parental control solution</span> to
            foster healthy digital habits.
          </p>
          <p className="text-lg md:text-xl">
            Join over 6 million families worldwide who trust Safekidly to create
            a balanced screen time experience for their kids, all through an
            intuitive, all-in-one dashboard.
          </p>
          <p className="text-lg md:text-xl">
            Empower your children to explore the digital world safely while
            ensuring their online activities align with your family’s values.
          </p>
          <div className="flex justify-center md:justify-start mt-4">
            <Link
              to="/signup"
              className="bg-blue-700 hover:bg-blue-800 transition duration-300 py-3 px-6 rounded-md cursor-pointer text-white text-center font-semibold text-lg">
              Start your free journey
            </Link>
          </div>
          <AvailableFor />
        </div>

        {/* Right Column - Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            className="w-full lg:w-auto"
            src="https://static.qustodio.com/public-site/uploads/2023/11/29122115/hero-image-en%402x-1.png"
            alt="Safekidly Dashboard Preview"
          />
        </div>
      </div>

      {/* Rating Section */}
      <Rating />

      {/* Featured In Section (Hidden by default) */}
      <div className="hidden">
        <p className="text-gray-400 text-center tracking-widest">FEATURED IN</p>
        <img
          className="my-10 mx-auto"
          src="https://static.qustodio.com/public-site/uploads/2021/08/13130800/group-16%402x.png"
          alt="Featured in media outlets"
        />
      </div>

      {/* Additional Sections */}
      <Controls />
      <Concern />
      <Testimonial />
      <Feature />
      <CreateAccount />
    </SectionContainer>
  );
}

export default Home;
