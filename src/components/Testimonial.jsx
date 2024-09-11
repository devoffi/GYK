import React from "react";

function Testimonial() {
  return (
    <div className=" bg-gray-200 py-20">
      <p className="text-xl lg:text-4xl text-center font-bold mb-10">
        Why parents choose Qustodio
      </p>
      <div className="flex justify-around gap-10 px-10">
        <div className="bg-white w-1/3 rounded-xl p-8">
          <img src="https://static.qustodio.com/public-site/uploads/2023/11/22110518/allison-image%402x-1.png" />
          <p className="mt-5">
            Qustodio gives me the peace of mind that I have been looking for to
            ensure my kids are safe online.
          </p>
        </div>
        <div className="bg-white w-1/3 rounded-xl p-8">
          <img src="https://static.qustodio.com/public-site/uploads/2023/11/22104716/theresa-image%402x.png" />
          <p className="mt-5">
            We're a highly digital family but we really value screen-free time -
            Qustodio helps us get that balance.
          </p>
        </div>
        <div className="bg-white w-1/3 rounded-xl p-8">
          <img src="https://static.qustodio.com/public-site/uploads/2023/11/22105325/courtney-image%402x.png" />
          <p className="mt-5">
            With Qustodio, I don't have to struggle to balance my daughter’s
            online independence with her safety.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
