import React from 'react'
import TextInputBox from "../components/common/TextInputBox";
import PrimaryButton from "../components/common/PrimaryButton";
import logo from "../assets/images/logo1.jpg";

function Signup() {
  return (
    <div className="flex flex-col justify-center items-center container mx-auto py-8">
      <div className="">
        <img
          src={logo}
          alt="courses"
          className=" w-52 h-20 rounded-sm   object-cover"
        />
      </div>
      <div className="w-full lg:w-1/2 shadow-2xl py-16 px-24 gap-1 flex flex-col">
      <div className="mb-5">
      <p className="font-semibold text-lg">Welcome! </p>
      <p className="">Create your account and enjoy 3 days of Premium features, free! </p>
      </div>
        <div className="gap-3 flex flex-col">
        <TextInputBox label="Name" />
          <TextInputBox label="Email" />
          <TextInputBox label="Password" placeholder={"6+ characters"}/>
        </div>
        
        <div className="mx-auto my-6">
          <PrimaryButton title={"Sign up"} />
        </div>
        <div className="flex gap-2 justify-center">
          <p>Already have an account? </p>
          <a className="text-blue-600 font-medium" href="#">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
}

export default Signup