import React from "react";
import PrimaryButton from "../components/common/PrimaryButton";

function FamilyStories() {
  return (
    <div className="pt-5 lg:pt-20 bg-gray-200">
      <p className="text-2xl lg:text-5xl font-bold text-center">
        Real stories from parents like you
      </p>
      <p className="text-lg lg:text-xl font-bold text-center lg:mt-3 mb-2 lg:mb-10">
        Learn how families of all types use Safekidly to stay safe online and
        balance their screen time.
      </p>
      <div className="lg:w-[80%] mx-auto flex flex-col gap-10">
        <div className="flex items-center h-full  bg-white gap-5 custom-clip">
          <video
            type="video/mp4"
            controls
            className="lg:w-[70%]"
            src="https://static.qustodio.com/public-site/uploads/2024/04/26094824/supervise-the-way-you-want_EN.webm"
          />
          <div className="lg:w-[20%] mx-auto custom-clip  ">
            <p className="text-xl lg:text-3xl font-bold text-center">
              The Lancaster Family
            </p>
            <p className="text-md lg:text-lg text-center lg:mt-3 lg:my-10">
              2 parents, 2 kids
            </p>
            <div>
              <p className="font-bold my-3">Favorite Safekidly features:</p>
              <p> Time Limits</p>
              <p> Apps & game blocking</p>
            </div>
          </div>
        </div>

        <div className="flex items-center h-full  bg-white gap-5 custom-clip">
          <video
            type="video/mp4"
            controls
            className="lg:w-[70%]"
            src="https://static.qustodio.com/public-site/uploads/2024/04/26094824/supervise-the-way-you-want_EN.webm"
          />
          <div className="lg:w-[20%] mx-auto custom-clip  ">
            <p className="text-xl lg:text-3xl font-bold text-center">
              The Lancaster Family
            </p>
            <p className="text-md lg:text-lg text-center lg:mt-3 lg:my-10">
              2 parents, 2 kids
            </p>
            <div>
              <p className="font-bold my-3">Favorite Safekidly features:</p>
              <p> Time Limits</p>
              <p> Apps & game blocking</p>
            </div>
          </div>
        </div>

        <div className="flex items-center h-full  bg-white gap-5 custom-clip">
          <video
            type="video/mp4"
            controls
            className="lg:w-[70%]"
            src="https://static.qustodio.com/public-site/uploads/2024/04/26094824/supervise-the-way-you-want_EN.webm"
          />
          <div className="lg:w-[20%] mx-auto custom-clip  ">
            <p className="text-xl lg:text-3xl font-bold text-center">
              The Lancaster Family
            </p>
            <p className="text-md lg:text-lg text-center lg:mt-3 lg:my-10">
              2 parents, 2 kids
            </p>
            <div>
              <p className="font-bold my-3">Favorite Safekidly features:</p>
              <p> Time Limits</p>
              <p> Apps & game blocking</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5 lg:pt-20">
        <p className="text-xl lg:text-3xl font-bold text-center">
          Recommended by experts
        </p>
        <div className="flex flex-col lg:flex-row mt-2 lg:mt-10">
          <div className="lg:w-1/4 flex flex-col gap-5 justify-center items-center lg:px-10">
            <img
              className="w-20 h-20"
              src="https://static.qustodio.com/public-site/uploads/2022/02/28052601/bitmap.png"
            />
            <p className="text-center font-bold">Dr. Nicole Beurkens</p>
            <p>Holistic psychologist</p>
            <p className="text-center font-bold mt-2">
              “I have been recomending Safekidly to my clients for years with
              great success.”
            </p>
          </div>
          <div className="lg:w-1/4 flex flex-col gap-5 justify-center items-center lg:px-10">
            <img
              className="w-20 h-20"
              src="https://static.qustodio.com/public-site/uploads/2022/02/28054038/bitmap-1.png"
            />
            <p className="text-center font-bold">Maria Guerrero</p>
            <p>Family psychologist</p>
            <p className="text-center font-bold mt-2">
              “Consistency and communication are the keys to good parenting.
              Safekidly helps families with both.”
            </p>
          </div>
          <div className="lg:w-1/4 flex flex-col gap-5 justify-center items-center lg:px-10">
            <img
              className="w-20 h-20"
              src="https://static.qustodio.com/public-site/uploads/2022/02/28054233/bitmap-2.png"
            />
            <p className="text-center font-bold">Marc Masip</p>
            <p>Child psychologist & addiction specialist</p>
            <p className="text-center font-bold mt-2">
              “Kids are over-dosing on screen time. I recommend Safekidly over
              and over again to parents who need help combating online addiction
              and finding balance.”
            </p>
          </div>
          <div className="lg:w-1/4 flex flex-col gap-5 justify-center items-center lg:px-10">
            <img
              className="w-20 h-20"
              src="https://static.qustodio.com/public-site/uploads/2022/02/28052601/bitmap.png"
            />
            <p className="text-center font-bold">Dr. Nicole Beurkens</p>
            <p>Holistic psychologist</p>
            <p className="text-center font-bold mt-2">
              “I have been recomending Safekidly to my clients for years with
              great success.”
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-400 py-5 lg:py-20 mt-4 lg:mt-12">
        <div className="lg:w-[70%] flex flex-col gap-5 justify-center items-center mx-auto">
          <p className="text-xl lg:text-3xl font-bold text-white">
          Ready to protect your family too?
          </p>
          <p className="text-lg lg:text-xl text-white text-center">
          Join the millions of parents who already use GuardMyKids’s features to keep their kids safe online and create screen time balance.


          </p>
          <PrimaryButton>Get started free</PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default FamilyStories;
