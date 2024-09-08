import React from "react";

function Rating() {
  return (
    <div className="py-10 justify-center flex flex-col items-center">
      <p className="text-green-500 tracking-widest text-xl font-medium my-5">QUSTODIO IN NUMBERS</p>
      <p className="font-bold text-2xl">Family safety in expert hands </p>
 
      <div className="flex gap-20 my-16">
        <div className="flex flex-col items-center">
          <p className="text-2xl text-center lg:text-6xl font-medium">3 billion</p>
          <p>Threats averted</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="lg:text-6xl text-2xl text-center font-medium">6 million</p>
          <p>Families protected</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="lg:text-6xl text-2xl text-center font-medium">4.3 ★</p>
          <p>Top-rated app</p>
        </div>
      </div>
    </div>
  );
}

export default Rating;
