import React from "react";

function Testimonial() {
  return (
    <div className=" bg-gray-200 rounded-lg py-12 md:py-20">
      <p className="text-xl lg:text-4xl text-center font-bold mb-10">
        Why Parents Trust Safekidly
      </p>
      <div className="flex flex-col lg:flex-row justify-around gap-10 px-6 md:px-10">
        <div className="bg-white lg:w-1/3 rounded-xl p-8">
          <img src="https://static.qustodio.com/public-site/uploads/2023/11/22110518/allison-image%402x-1.png" />
          <p className="mt-5">
            Safekidly has given me the peace of mind I needed to ensure my
            children stay safe online, knowing they’re protected at all times.
          </p>
        </div>
        <div className="bg-white lg:w-1/3 rounded-xl p-8">
          <img src="https://static.qustodio.com/public-site/uploads/2023/11/22104716/theresa-image%402x.png" />
          <p className="mt-5">
            As a family that thrives in the digital world, Safekidly has been
            essential in helping us maintain a healthy balance between screen
            time and real life.
          </p>
        </div>
        <div className="bg-white lg:w-1/3 rounded-xl p-8">
          <img src="https://static.qustodio.com/public-site/uploads/2023/11/22105325/courtney-image%402x.png" />
          <p className="mt-5">
            Thanks to Safekidly, I can effortlessly manage my daughter’s online
            freedom while ensuring her safety, all from one easy-to-use
            platform.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
