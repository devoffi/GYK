import React from "react";
import TextInputBox from "./common/TextInputBox";
import PrimaryButton from "./common/PrimaryButton";

function CreateAccount() {
  return (
    <div className="flex flex-col lg:flex-row bg-blue-50 rounded-lg py-20 gap-10 justify-center">
      <div className="lg:w-[45%]">
        <img src="https://static.qustodio.com/public-site/uploads/2024/05/08151750/Signupform_image-en.png" />
      </div>
      <div className="lg:w-[45%]">
        <div className="flex gap-3 justify-center">
          <p className="text-xl lg:text-3xl font-bold">Create your </p>
          <p className="text-xl lg:text-3xl font-bold text-blue-600">FREE</p>
          <p className="text-xl lg:text-3xl font-bold">account now</p>
        </div>
        <p className="text-md lg:text-xl font-medium mt-2 text-center">
          And enjoy a trial of our Premium parental control features
        </p>

        <div className="flex flex-col justify-center mt-8">
          <div className="gap-3 flex flex-col w-80  mx-auto">
            <TextInputBox label="Name" />
            <TextInputBox label="Email" />
            <TextInputBox label="Password" placeholder={"6+ characters"} />
          </div>

          <div className="mx-auto my-6">
            <PrimaryButton title={"Create an account"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
