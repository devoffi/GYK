import React from "react";

function PrimaryButton({ title }) {
  return (
    <div className="bg-blue-700 w-32 p-2 rounded">
      <p className="text-white text-center font-semibold text-lg">{title}</p>
    </div>
  );
}

export default PrimaryButton;
