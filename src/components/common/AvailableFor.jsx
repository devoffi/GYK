import React from "react";
import {
  BsApple,
  BsWindows,
  BsTablet,
  BsBook,
  BsLaptop,
  BsCircle,
} from "react-icons/bs";
import { ImAndroid } from "react-icons/im";
function AvailableFor() {
  const devices = [
    { icon: <BsApple className="text-4xl text-gray-500" />, name: "Mac" },
    { icon: <BsWindows className="text-4xl text-gray-500" />, name: "Windows" },
    { icon: <BsTablet className="text-4xl text-gray-500" />, name: "iPad" },
    { icon: <ImAndroid className="text-4xl text-gray-500" />, name: "Android" }, // Placeholder
    { icon: <BsBook className="text-4xl text-gray-500" />, name: "Kindle" },
    {
      icon: <BsLaptop className="text-4xl text-gray-500" />,
      name: "Chromebook",
    },
  ];
  return (
    <div className="py-6 md:py-0">
      <p className="text-xs md:pb-4">Available For:</p>
      <div className="flex  md:gap-4 items-center justify-between p-4">
        {devices.map((device, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className={`   text-black text-[8px] md:text-[10px] `}>
              {device.name === "Android" ? "Avilable" : "Coming Soon"}
            </span>
            {device.icon}
            <span className="mt-2 text-[12px] text-center">{device.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AvailableFor;
