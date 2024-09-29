import React from "react";

function Testimonial() {
  return (
    <div className=" bg-gray-200 rounded-lg py-12 md:py-20">
      <p className="text-xl lg:text-4xl text-center font-bold mb-10">
        Why parents choose GuardMyKids
      </p>
      <div className="flex flex-col lg:flex-row justify-around gap-10 px-6 md:px-10">
        <div className="bg-white lg:w-1/3 rounded-xl p-8">
          <img src="https://static.qustodio.com/public-site/uploads/2023/11/22110518/allison-image%402x-1.png" />
          <p className="mt-5">
          GuardMyKids provides me with the reassurance I've been seeking to keep my children safe online.
          </p>
        </div>
        <div className="bg-white lg:w-1/3 rounded-xl p-8">
          <img src="https://static.qustodio.com/public-site/uploads/2023/11/22104716/theresa-image%402x.png" />
          <p className="mt-5">
          As a digitally savvy family, we truly appreciate our screen-free time—GuardMyKids helps us maintain that balance.
          </p>
        </div>
        <div className="bg-white lg:w-1/3 rounded-xl p-8">
          <img src="https://static.qustodio.com/public-site/uploads/2023/11/22105325/courtney-image%402x.png" />
          <p className="mt-5">
          With GuardMyKids, I can effortlessly balance my daughter’s online independence with her safety.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
