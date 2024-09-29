import React from "react";
import { SectionContainer } from "../components/common/SectionContainer";
import PrimaryButton from "../components/common/PrimaryButton";
import AvailableFor from "../components/common/AvailableFor";
import Rating from "../components/Rating";
import Controls from "../components/Controls";
import Concern from "../components/Concern";
import Testimonial from "../components/Testimonial";
import Feature from "../components/Feature";
import CreateAccount from "../components/CreateAccount";

function Home() {
  return (
    <SectionContainer>
      <div className="flex flex-col lg:flex-row mt-10 md:mt-20">
        <div className="  text-center md:text-start gap-6 flex flex-col">
          <p className="text-3xl lg:text-5xl font-extrabold  ">
            A comprehensive {" "}
            <span className="text-green-400">solution for managing</span> parental controls and digital wellbeing.
          </p>
          <p className=" text-lg md:text-xl">
            Join over 6 million parents who trust GuardMyKids to ensure their kids' screen time is safe and balanced across all devices, all from a single, user-friendly dashboard.
          </p>
          <div className="flex justify-center md:justify-start ">
            <PrimaryButton>Get started free</PrimaryButton>
          </div>
          <AvailableFor />
        </div>
        <div>
          <img
            height={"100%"}
            src="https://static.qustodio.com/public-site/uploads/2023/11/29122115/hero-image-en%402x-1.png"
          />
        </div>
      </div>

      {/* rating section */}

      <Rating />
      <div className="hidden">
        <p className="text-gray-400 text-center tracking-widest">FEATURED IN</p>
        <img
        className="my-10"
        src="https://static.qustodio.com/public-site/uploads/2021/08/13130800/group-16%402x.png"
        />
      </div>

      <Controls />
      <Concern />
      <Testimonial />
      <Feature />
      <CreateAccount/>
    </SectionContainer>
  );
}

export default Home;
