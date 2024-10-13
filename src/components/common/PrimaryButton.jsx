import React from "react";

const PrimaryButton = ({ title, children, onClick }) => {
  return (
    <div
      className="bg-blue-700 w-max hover:bg-blue-800 duration-500 py-2 px-4 rounded cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onClick()} // For accessibility
      aria-label={title || children}
    >
      <p className="text-white text-center font-medium text-lg">
        {title || children}
      </p>
    </div>
  );
};

export default PrimaryButton;
