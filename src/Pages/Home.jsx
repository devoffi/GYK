import React from "react";
import { SectionContainer } from "../components/common/SectionContainer";
import PrimaryButton from "../components/common/PrimaryButton";
import AvailableFor from "../components/common/AvailableFor";
import Rating from "../components/Rating";
import Controls from "../components/Controls";
import Concern from "../components/Concern";

function Home() {
  return (
    <SectionContainer>
      <div className="flex flex-col lg:flex-row mt-20">
        <div className=" gap-6 flex flex-col">
          <p className="lg:text-5xl font-extrabold">
            The all-in-one{" "}
            <span className="text-green-400">parental control</span> and digital
            wellbeing solution
          </p>
          <p className="text-xl">
            Over 6 million parents trust Qustodio’s parental control tools to
            keep their kids’ screen time safe and balanced on every device—from
            one easy-to-use dashboard
          </p>
          <PrimaryButton>Get started free</PrimaryButton>
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
      <p className="text-gray-400 text-center tracking-widest">FEATURED IN</p>
      <img
        className="my-10"
        src="https://static.qustodio.com/public-site/uploads/2021/08/13130800/group-16%402x.png"
      />

      <Controls/>
      <Concern/>
    </SectionContainer>
  );
}

export default Home;
