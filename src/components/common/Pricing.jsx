import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { MdOutlineLock } from "react-icons/md";
import { GoShieldCheck } from "react-icons/go";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Pricing = ({ selectedPlan, onPlanSelect }) => {
  const [amount, setAmount] = useState('');

  useEffect(() => {
    if (selectedPlan) {
      setAmount(selectedPlan === 'basic' ? '10.00' : '20.00');
    }
  }, [selectedPlan]);

  const initialOptions = {
    clientId: "ASeTLjejgCUSUlXzY65o5s6iHaUTTejxLc_kKbRicH-iClmKXjlCmsvjVQ-pIkO3Dz6Xidffl-0t92-v", // Replace with your PayPal client ID
    currency: "USD",
    intent: "capture"
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <div className="flex h-full flex-col items-center ">
        <h1 className="text-2xl font-bold mb-6">Choose Your Plan</h1>
        <div className="gap-4">
          <div className='md:flex w-full justify-center gap-10 '>
            <div className="relative md:w-[50%] h-fit border border-gray-200 rounded-xl p-8 bg-white hover:shadow-xl transition-shadow duration-300 mb-10">       
              <div className="mb-6 border-b ">
                <h2 className="text-xl font-semibold text-gray-700 mb-2 flex gap-2"> 
                  <MdOutlineLock color="hsl(180, 98%, 31%)" size={26} />
                  BASIC
                </h2>
                <p className="text-gray-900 text-base font-light md:text-xl">The tools you need for core protection.</p>
              </div>
              <div className="text-center my-2 ">
                <p className="text-3xl font-medium flex items-end text-gray-800"> ₹2,070.00<span className="text-lg pb-1 text-gray-700">/year</span></p>
                <p className='text-start px-1 font-medium text-gray-500 pb-3'>same as ₹172.50/month</p>
                <button
                  onClick={() => onPlanSelect('basic')}
                  className="hover:text-white hover:bg-viridianGreen hover:font-[400] font-[500] w-full py-[8px] border-[2px] border-viridianGreen border-solid rounded-md bg-transparent text-black sm:text-md text-xl"
                >
                  Buy now
                </button>
              </div>
            </div>

            <div className="relative md:w-[50%] border rounded-xl p-8 bg-blue-900/90 hover:shadow-xl transition-shadow duration-300 mb-10 ">
              <div className="absolute top-[-14px] left-3/4 transform -translate-x-3/4 bg-yellow-500 text-black text-sm font-medium rounded px-3 py-0.5 whitespace-nowrap">
                MOST POPULAR
              </div>
              <div className="mb-6 border-b ">
                <h2 className="text-xl font-semibold text-white mb-2 flex gap-2"> 
                  <GoShieldCheck color="hsl(180, 98%, 31%)" size={26} />
                  COMPLETE
                </h2>
                <p className="text-white text-base font-light md:text-xl">Advanced safety features with full customization.</p>
              </div>
              <div className="text-center my-2 ">
                <p className="text-3xl font-medium flex items-end text-white"> ₹2,070.00<span className="text-lg pb-1 text-white">/year</span></p>
                <p className='text-start px-1 font-medium text-white pb-3'>same as ₹172.50/month</p>
                <button
                  onClick={() => onPlanSelect('advanced')}
                  className="hover:text-white hover:bg-viridianGreen hover:font-[400] font-[500] w-full py-[8px] border-[2px] border-solid rounded-md bg-white text-black sm:text-md text-xl"
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>

          {selectedPlan && (
            <div className="mt-2 w-full  flex flex-col  justify-center items-center">
              <h3 className="text-lg font-medium ">You selected: <span className='inline font-bold'>{selectedPlan} Plan</span></h3>
              <div className="mt-4">
                  <PayPalButtons
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [{
                        amount: {
                          currency_code: "USD",
                          value: amount || "10.00",
                        },
                      }],
                    });
                  }}
                  onApprove={async (data, actions) => {
                    try {
                      const details = await actions.order.capture();
                      alert("Transaction complete by " + details.payer.name.given_name);
                    } catch (error) {
                      console.error("Error capturing order:", error);
                      alert("Error capturing order. Please try again.");
                    }
                  }}
                  onError={(err) => {
                    console.error("PayPal payment error:", err);
                    alert("There was an error processing your payment. Please try again.");
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </PayPalScriptProvider>
  );
};

Pricing.propTypes = {
  selectedPlan: PropTypes.string,
  onPlanSelect: PropTypes.func.isRequired,
};

export default Pricing;
