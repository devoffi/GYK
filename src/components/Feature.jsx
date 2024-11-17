import React from "react";

function Feature() {
  return (
    <div className="py-10">
      <p className="text-xl lg:text-4xl text-center font-bold mb-10">
        Featured in the Media
      </p>
      <div className="flex flex-col lg:flex-row justify-evenly rounded-lg bg-green-100 py-12 md:py-20 items-center gap-10 lg:gap-0">
        <div className="w-52">
          <img src="https://static.qustodio.com/public-site/uploads/2023/11/22081232/parents-logo%402x.png" />
          <p className="text-center mt-2 lg:mt-8">
            "Safekidly’s online dashboard offers a seamless view of your child’s
            screen time, providing parents with clear insights and control."
          </p>
        </div>
        <div className="w-52">
          <img src="https://static.qustodio.com/public-site/uploads/2023/11/22111239/chicago-logo%402x.png" />
          <p className="text-center mt-2 lg:mt-8">
            “Safekidly makes it easy for parents to monitor and manage their
            children's devices, ensuring a safer digital experience.”
          </p>
        </div>
        <div className="w-52">
          <img src="https://static.qustodio.com/public-site/uploads/2023/11/22111345/mashable-logo%402x.png" />
          <p className="text-center mt-2 lg:mt-8">
            “With features like YouTube monitoring and a panic button, Safekidly
            ensures that parents can keep their kids safe, even when they’re out
            of sight.”
          </p>
        </div>
        <div className="w-52">
          <img src="https://static.qustodio.com/public-site/uploads/2023/11/22111520/business-logo%402x.png" />
          <p className="text-center mt-2 lg:mt-8">
            “Safekidly is the most comprehensive parental control app available
            today, giving parents full control over their children’s digital
            world.”
          </p>
        </div>
      </div>
    </div>
  );
}

export default Feature;
