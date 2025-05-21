import React, { useEffect } from "react";
import TextInputBox from "../components/common/TextInputBox";
import PrimaryButton from "../components/common/PrimaryButton";
import logo from "../assets/images/logo4.jpeg";

function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center container mx-auto py-10">
      <div className="">
        <img
          src={logo}
          alt="courses"
          className=" w-52 h-20 rounded-sm  object-cover"
        />
      </div>
      <div className="w-full lg:w-1/2 shadow-2xl lg:py-16 px-4 py-5 lg:px-24 gap-1 flex flex-col">
      <div className="mb-5">
      <p className="font-semibold text-lg">Welcome Back! </p>
      </div>
        <div className="gap-3 flex flex-col">
          <TextInputBox label="Email" />
          <TextInputBox label="Password" />
        </div>
        <a className="text-blue-600 font-medium" href="/forgot-password">
          Forgot your password ?
        </a>
        <div className="mx-auto my-6">
          <PrimaryButton title={"Log in"} />
        </div>
        <div className="flex gap-2 justify-center">
          <p>First time here? </p>
          <a className="text-blue-600 font-medium" href="/signup">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
