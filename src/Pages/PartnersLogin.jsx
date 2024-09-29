import React from "react";
import PrimaryButton from "../components/common/PrimaryButton";

function PartnersLogin() {
  return (
    <div className="lg:py-20 py-5">
      <p className="text-2xl lg:text-5xl text-center font-bold">
        Join the Qustodio Affiliate Program
      </p>
      <p className="text-lg lg:text-xl font-medium text-center mt-1 lg:mt-3">
        Earn up to 20% commission by promoting the best Parental Control app!
      </p>
      <div className=" justify-center items-center flex flex-col my-2 lg:py-8">
        <PrimaryButton>Sign up today</PrimaryButton>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-32 gap-10 lg:w-[80%] lg:mx-auto">
        <div className="w-[50%]">
          <img src="https://static.qustodio.com/public-site/uploads/2021/09/07131637/group-2%402x.png" />
        </div>
        <div className="lg:w-[80%]">
          <p className="text-lg lg:text-2xl font-bold mt-8">
            Its a win-win opportunity
          </p>

          <p className="text-lg">
            Web filtering & activity alerts Games & apps blocking + time limits
            Limit social media use Daily time limits & restricted times Custom
            routines Pause the internet Additional parent Youtube monitoring
          </p>
          <div className="my-5">
            <PrimaryButton title={"Download"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnersLogin;
