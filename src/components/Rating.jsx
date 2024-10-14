import React from "react";

function Rating() {
  return (
    <div className="py-10 md:py-16 justify-center flex flex-col items-center text-gray-700">
      <p className="text-green-500 tracking-widest text-xl font-medium my-3 md:my-5">SAFEKIDLY IN NUMBERS</p>
      <p className="font-bold text-xl md:text-2xl">Expert care for your family's safety. </p>
 
      <div className="flex flex-col md:flex-row gap-8 md:gap-20 my-8 md:my-16">
        <div className="flex flex-col items-center">
          <p className="text-4xl text-center lg:text-6xl font-medium">3 billion</p>
          <p>Threats averted</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="lg:text-6xl text-4xl text-center font-medium">6 million</p>
          <p>Families protected</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="lg:text-6xl text-4xl text-center font-medium">4.3 ★</p>
          <p>Top-rated app</p>
        </div>
      </div>
    </div>
  );
}

export default Rating;
