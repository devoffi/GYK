import React, { useEffect } from "react";
import TextInputBox from "../components/common/TextInputBox";
import PrimaryButton from "../components/common/PrimaryButton";
import logo from "../assets/images/logo4.jpeg";
import SecondaryButton from "../components/common/SecondaryButton";

function ForgotPassword() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center container mx-auto py-10">
      <div className="">
        <img
          src={logo}
          alt="courses"
          className=" w-52 h-20 rounded-sm object-cover"
        />
      </div>
      <div className="w-full lg:w-1/2 shadow-2xl lg:py-16 px-4 py-5 lg:px-24 gap-1 flex flex-col">
        <div className="mb-5">
          <p className="font-semibold text-lg text-center">Recover password</p>
          <p className="text-center">
            Please enter the email address used to create your Safekidly account
            below:{" "}
          </p>
        </div>
        <div className="gap-3 flex flex-col">
          <TextInputBox placeholder={"Email address"} />
        </div>

        <div className="mx-auto my-6">
          <SecondaryButton title={"Recover password"} />
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
