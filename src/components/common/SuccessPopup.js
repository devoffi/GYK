import React from 'react';

const SuccessPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white flex flex-col justify-center items-center rounded-lg p-6 max-w-sm text-center">
        <h2 className="text-lg text-green-500 font-bold">Signup Successful!</h2>
        <p className="mt-2">Your account has been created successfully.</p>
        <button
          onClick={() => {
            onClose();
            window.location.href = "https://mdm.prabhaktech.com";
          }}
          className="mt-8 bg-blue-600 text-white py-2 px-4 rounded"
        >
          Login Here
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;
