import React from "react";
import { SectionContainer } from "../components/common/SectionContainer";
import CreateAccount from "../components/CreateAccount";
import Faq from "../components/Faq"

function GetStarted() {
  return (
    <SectionContainer>
      <p className="text-center text-2xl lg:text-5xl font-bold mx-auto mt-20">
        Getting started with Qustodio
      </p>
      <p className="text-lg lg:text-xl text-center my-5 lg:w-[65%] mx-auto ">
        Follow these three simple steps to start protecting your childs devices
        and supervising their online activity immediately.
      </p>
      <div className="flex flex-wrap gap-5 lg:w-[80%] mx-auto justify-center items-center lg:my-10">
        <p className="px-4 py-2 border rounded-lg">1. Create your account</p>
        <p className="px-4 py-2 border rounded-lg">
          2. Install Qustodio on your child's devices
        </p>
        <p className="px-4 py-2 border rounded-lg">3. Start supervising</p>
      </div>

      <div className="flex flex-col gap-20 lg:w-[80%] mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-32 gap-10">
          <div>
            <p className="text-xl lg:text-4xl font-bold mt-8">
              Create your account
            </p>

            <p className="text-lg lg:my-10">
              Sign up for your free Qustodio account and then decide if you want
              to upgrade to a Premium plan that suits your family.
            </p>
          </div>
          <div>
            <img src="https://static.qustodio.com/public-site/uploads/2023/11/23143028/createacoount-image%402x.png" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-32 gap-10">
          <div className="w-[70%]">
            <img src="https://static.qustodio.com/public-site/uploads/2023/11/23150606/installqustodio-image%402x.png" />
          </div>
          <div>
            <p className="text-xl lg:text-4xl font-bold mt-8">
              Install Qustodio on your childs devices
            </p>

            <p className="text-lg lg:my-10">
              Once youve created your account, youre ready to install Qustodio
              on your childs devices. Protect everything, from smartphones and
              tablets, to computers and Kindles.
            </p>
            <div className="flex flex-wrap gap-5 mx-auto">
              <p className="px-4 py-2 border rounded-lg"> Android</p>
              <p className="px-4 py-2 border rounded-lg">iPhone & iPad</p>
              <p className="px-4 py-2 border rounded-lg"> Windows</p>
              <p className="px-4 py-2 border rounded-lg"> Mac</p>
              <p className="px-4 py-2 border rounded-lg"> Chromebook</p>
              <p className="px-4 py-2 border rounded-lg"> Kindle</p>
            </div>

            <div className="flex flex-col gap-10">
              <p className="text-md lg:text-2xl my-10 mb-8">
                How to install Qustodio on your childs Windows laptop or
                computer (Windows 10 or higher)
              </p>
              <p className="bg-green-50 py-4 px-10">
                Download Qustodio for Windows from our download page onto your
                childs device.{" "}
              </p>
              <p className="bg-green-50 py-4 px-10">
                Log in with your parent account credentials.
              </p>
              <p className="bg-green-50 py-4 px-10">
                Follow the step-by-step instructions.
              </p>
              <p className="bg-green-50 py-4 px-10">
                Accept all permissions to ensure full protection and to be able
                to start supervising.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-32 gap-10">
          <div className="lg:w-[80%]">
            <p className="text-xl lg:text-4xl font-bold mt-8">
              Start supervising!
            </p>

            <p className="text-lg lg:my-10">
              Download the parent app or sign in to your account on the web to
              view your dashboard. There, you can see your childs real-time
              online activity, and set your preferences to receive reports and
              alerts by email. Customize your settings in exactly the way you
              need to make Qustodio work for you and your family.
            </p>
          </div>
          <div>
            <img src="https://static.qustodio.com/public-site/uploads/2023/11/23170259/startsupervising-image%402x.png" />
          </div>
        </div>
      </div>
      <CreateAccount/>
      < Faq />
    </SectionContainer>
  );
}

export default GetStarted;
