import React, { useState } from "react";
import AccordionIcon from '../components/common/AccordianIcon';
import { FaAndroid } from "react-icons/fa6";


function Downloads() {


  const accordionItems = [
    {
      icon :  FaAndroid  ,
      title: ' Android ',
      content: (
        <>
          <p  className='pb-1 md:pb-1.5'>Safekidly works on Android devices running Android 7 and above.</p>
          <a className="btn  btn-primary text-white ">Download</a>
        </>
      ),
    },
  ]


  return (
    <div className="text-gray-700">
      <p className="md:w-3/5 text-center text-2xl lg:text-5xl font-bold mx-auto mt-10 md:mt-20">
        Download Safekidly for free
      </p>
      <p className="text-lg lg:text-2xl text-center my-6">
      Get everything you need to keep your kids safe online by installing Safekidly now
      </p>
      
      <div className="my-20 lg:w-[80%] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          <div className="lg:w-[30%]">
            <img src="https://static.qustodio.com/public-site/uploads/2023/11/28100027/childrendevice-image-en%402x.png" />
          </div>
          <div className="lg:w-[60%]">
            <div>
              <p className="lg:text-4xl text-xl font-bold text-center">
                Download on childrens devices
              </p>
              <p className="text-center my-5 text-md lg:text-lg">
                Below you can find all the kids devices that Safekidly can
                protect. Click to check that your kids devices are compatible
                and to start downloading.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row  justify-center gap-5 lg:gap-10">
              <div className="w-full lg:w-[70%] md:mt-16">
              <AccordionIcon items={accordionItems} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-10  mt-16 lg:mt-20">
          <div className="lg:w-[60%]">
            <div>
              <p className="lg:text-4xl text-xl font-bold text-center">
                Download on parents devices
              </p>
              <p className="text-center my-5 text-md lg:text-lg">
                Download Safekidly on your own iOS or Android device, or log in
                to Safekidly Web, to check your childs activity, set rules, and
                edit your notifications.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center  gap-5 lg:gap-10">
              <div className="lg:w-[70%] md:mt-16">
                <AccordionIcon items={accordionItems} />
              </div>
            </div>
          </div>
          <div className="lg:w-[30%]">
            <img src="https://static.qustodio.com/public-site/uploads/2023/11/28100136/parentdevice-image-en%402x.png" />
          </div>
        </div>
      </div>
      <div className="h-48 bg-blue-600 w-full justify-center items-center flex flex-col">
        <p className="lg:text-4xl text-xl font-bold text-center text-white">
          Download on childrens devices
        </p>
        <p className="lg:text-2xl text-lg font-bold text-center text-white underline">
          Contact us
        </p>
      </div>
    </div>
  );
}

export default Downloads;
