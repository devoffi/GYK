import React from "react";

function PrimaryButton({ title,children }) {
  return (
    <div className="bg-blue-700 w-max hover:bg-blue-800 duration-500 py-2 px-4 rounded cursor-pointer">
      <p className="text-white text-center font-semibold text-lg">{title || children}</p>
    </div>
  );
}

export default PrimaryButton;
