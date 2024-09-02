import React from "react";

function TextInputBox({ label, placeholder }) {
  return (
    <div>
      <p>{label}</p>
      <div className="border hover:border-blue-400 w-full p-3 border-lightGray rounded">
        <input className="outline-none" placeholder={placeholder}></input>
      </div>
    </div>
  );
}

export default TextInputBox;
