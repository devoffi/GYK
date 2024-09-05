import React from "react";

function SecondaryButton({ title }) {
  return (
    <div className="bg-blue-700 w-60 p-2 rounded cursor-pointer">
      <p className="text-white text-center font-semibold text-lg">{title}</p>
    </div>
  );
}

export default SecondaryButton;
