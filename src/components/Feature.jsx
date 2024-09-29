import React from "react";

function Feature() {
  return (
    <div className="py-10">
      <p className="text-xl lg:text-4xl text-center font-bold mb-10">
        Featured in the media
      </p>
      <div className="flex flex-col lg:flex-row justify-evenly rounded-lg bg-green-100 py-12 md:py-20 items-center gap-10 lg:gap-0">
        <div className="w-52">
          <img src="https://static.qustodio.com/public-site/uploads/2023/11/22081232/parents-logo%402x.png" />
          <p className="text-center mt-2 lg:mt-8">
            "Everything you need to know about your kid’s screen time is
            beautifully displayed on  GuardMyKids online dashboard."
          </p>
        </div>
        <div className="w-52">
          <img src="https://static.qustodio.com/public-site/uploads/2023/11/22111239/chicago-logo%402x.png" />
          <p className="text-center mt-2 lg:mt-8">
          “Makes device monitoring easy for parents.”
          </p>
        </div>
        <div className="w-52">
          <img src="https://static.qustodio.com/public-site/uploads/2023/11/22111345/mashable-logo%402x.png" />
          <p className="text-center mt-2 lg:mt-8">
          “From YouTube monitoring to a panic button for kids away from home,  GuardMyKids covers just about everything.”
          </p>
        </div>
        <div className="w-52">
          <img src="https://static.qustodio.com/public-site/uploads/2023/11/22111520/business-logo%402x.png" />
          <p className="text-center mt-2 lg:mt-8">
          “Most complete parental control application available.”
          </p>
        </div>
      </div>
    </div>
  );
}

export default Feature;
