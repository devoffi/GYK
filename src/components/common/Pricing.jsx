import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { MdOutlineLock } from "react-icons/md";
import { GoShieldCheck } from "react-icons/go";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";

const Pricing = ({
  selectedPlan,
  onPlanSelect,
  name,
  email,
  phone_number,
  username,
  password,
}) => {
  const [isMonthly, setIsMonthly] = useState(false);
  const [amount, setAmount] = useState("0.00");
  const [currency, setCurrency] = useState("USD");
  const [referal, setReferal] = useState("");
  const [exchangeRate, setExchangeRate] = useState(1);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [discount, setDiscount] = useState();

  const prices = {
    Basic: { yearly: 1, monthly: 7 },
    Premium: { yearly: 3, monthly: 5 },
  };
  const handleInputChange = (e) => {
    setReferal(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      if (referal.length > 2) {
        const response = await axios.post(
          "https://mdm.prabhaktech.com/api/validate-referralcode",
          { referral_code: referal }
        );
        if (response?.status === 200) {
          console.log(response?.data?.message);
          setMessage(response?.data?.message);
          setDiscount(response?.data?.discount_percentage);
        } else {
          setMessage("invalid referal");
        }
      }
    } catch (err) {
      console.log(err);
      setMessage("invalid referal");
    }
  };

  const createUser = async (userData) => {
    const response = await axios.post(
      "https://mdm.prabhaktech.com/api/create-user",
      userData
    );
    return response.data;
  };
  const creatUser = async () => {
    const currentDate = new Date();
    const newExpiryDate = new Date(currentDate);

    const userData = {
      user_details: {
        validation: "user",
        name,
        email,
        phone_number,
        username,
        password,
        confirm_password: password,
        referral_code: referal,
        payment_amount: amount,
        currency: currency,
        subscription_plan: {
          plan_name: selectedPlan,
          subscription_status: "active",
          expiry_date: isMonthly
            ? newExpiryDate.setMonth(currentDate.getMonth() + 1) &&
              newExpiryDate.toISOString().split("T")[0]
            : newExpiryDate.setFullYear(currentDate.getFullYear() + 1) &&
              newExpiryDate.toISOString().split("T")[0],
        },
        status: "active",
      },
    };
    try {
      await createUser(userData);
      console.log("Signup successful! Please login");
      window.location.href = "https://mdm.prabhaktech.com";
    } catch (error) {
      setError({ server: error.message || "Signup failed. Please try again." });
    }
  };

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        const response = await axios.get("http://ip-api.com/json/");
        const country = response.data.country;

        const currencyMap = {
          USA: "USD",
          China: "CNY",
          India: "INR",
          // Add more countries and their currencies as needed
        };
        setCurrency(currencyMap[country] || "USD");
      } catch (err) {
        console.error("Error fetching user location:", err);
        setError("Failed to fetch user location");
      }
    };

    fetchUserLocation();
  }, []);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      if (currency !== "USD") {
        try {
          const response = await axios.get(
            `https://v6.exchangerate-api.com/v6/64fc3b3c664efa7d97d80956/latest/USD`
          );
          setExchangeRate(response.data.conversion_rates[currency]);
        } catch (err) {
          setError("Failed to fetch exchange rate");
          console.error(err);
        }
      }
    };

    fetchExchangeRate();
  }, [currency]);

  useEffect(() => {
    if (selectedPlan) {
      const baseAmount = isMonthly
        ? prices[selectedPlan].monthly
        : prices[selectedPlan].yearly;
      let calculatedAmount = (baseAmount * exchangeRate).toFixed(2);
      if (discount && discount > 0) {
        const discountAmount = (calculatedAmount * (discount / 100)).toFixed(2);
        calculatedAmount = (calculatedAmount - discountAmount).toFixed(2);
      }
      setAmount(calculatedAmount);
    }
  }, [selectedPlan, isMonthly, exchangeRate, message]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleRazorpayPayment = async () => {
    const options = {
      key: "rzp_live_wWYL886Z2NVQAe",
      amount: (amount * 100).toString(),
      currency: "INR",
      name: "Your Company Name",
      description: "Purchase Description",
      image: "https://example.com/logo.png",
      handler: (response) => {
        alert(
          `Payment successful! Payment ID: ${response.razorpay_payment_id}`
        );
        creatUser();
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Customer Address",
      },
      theme: {
        color: "#F37254",
      },
    };
    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };
  const createOrder = (data, actions) => {
    console.log("Amount before creating order:", amount, currency);

    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: amount,
          },
        },
      ],
    });
  };
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      alert("Transection completed" + details.payer.name.given_name);
    });
  };

  const renderCards = () => {
    const plans = [
      {
        id: "Basic",
        title: "BASIC",
        description: "The tools you need for core protection.",
        priceYearly: (prices.Basic.yearly * exchangeRate).toFixed(2),
        priceMonthly: (prices.Basic.monthly * exchangeRate).toFixed(2),
        icon: <MdOutlineLock color="hsl(180, 98%, 31%)" size={26} />,
      },
      {
        id: "Premium",
        title: "COMPLETE",
        description: "Advanced safety features with full customization.",
        priceYearly: (prices.Premium.yearly * exchangeRate).toFixed(2),
        priceMonthly: (prices.Premium.monthly * exchangeRate).toFixed(2),
        icon: <GoShieldCheck color="hsl(180, 98%, 31%)" size={26} />,
      },
    ];

    return plans.map((plan) => (
      <div
        key={plan.id}
        className={`relative md:w-[50%] border rounded-xl p-8 ${
          plan.id === "Premium" ? "bg-blue-900/90" : "bg-white"
        } hover:shadow-xl transition-shadow duration-300 mb-10`}
      >
        {plan.id === "Premium" && (
          <div className="absolute top-[-14px] left-3/4 transform -translate-x-3/4 bg-yellow-500 text-black text-sm font-medium rounded px-3 py-0.5 whitespace-nowrap">
            MOST POPULAR
          </div>
        )}
        <div className="mb-6 border-b">
          <h2
            className={`text-xl font-semibold ${
              plan.id === "Premium" ? "text-white" : "text-gray-700"
            } mb-2 flex gap-2`}
          >
            {plan.icon}
            {plan.title}
          </h2>
          <p
            className={`text-base font-light md:text-xl ${
              plan.id === "Premium" ? "text-white" : "text-gray-900"
            }`}
          >
            {plan.description}
          </p>
        </div>
        <div className="text-center my-2">
          <p
            className={`text-3xl font-medium flex items-end ${
              plan.id === "Premium" ? "text-white" : "text-gray-800"
            }`}
          >
            <span className=" px-2 text-[18px] flex justify-end">
              {currency}
            </span>
            {isMonthly ? plan.priceMonthly : plan.priceYearly}
            <span
              className={`text-lg pb-1 ${
                plan.id === "Premium" ? "text-white" : "text-gray-700"
              }`}
            >
              /{isMonthly ? "month" : "year"}
            </span>
          </p>
          {isMonthly ? (
            <p
              className={`text-start px-1 font-medium ${
                plan.id === "Premium" ? "text-white" : "text-gray-500"
              } pb-3`}
            >
              same as {currency}{" "}
              {(parseFloat(plan.priceMonthly) / 30).toFixed(2)}/day
            </p>
          ) : (
            <p
              className={`text-start px-1 font-medium ${
                plan.id === "Premium" ? "text-white" : "text-gray-500"
              } pb-3`}
            >
              same as {currency}{" "}
              {(parseFloat(plan.priceYearly) / 12).toFixed(2)}/month
            </p>
          )}
          <button
            onClick={() => onPlanSelect(plan.id)}
            className={`hover:text-white hover:bg-viridianGreen hover:font-[400] font-[500] w-full py-[8px] border-[2px] border-viridianGreen border-solid rounded-md ${
              plan.id === "Premium"
                ? "bg-white text-black"
                : "bg-transparent text-black"
            } sm:text-md text-xl`}
          >
            Buy now
          </button>
        </div>
      </div>
    ));
  };

  console.log(amount);
  console.log("Selected Plan:", selectedPlan);
  console.log("Is Monthly:", isMonthly);
  console.log("Exchange Rate:", exchangeRate);

  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "ASeTLjejgCUSUlXzY65o5s6iHaUTTejxLc_kKbRicH-iClmKXjlCmsvjVQ-pIkO3Dz6Xidffl-0t92-v",
        currency: currency,
      }}
    >
      <div className="flex h-full flex-col items-center">
        <h1 className="text-2xl font-bold mb-6">Choose Your Plan</h1>
        <div className="flex mb-4">
          <button
            onClick={() => setIsMonthly(false)}
            className={`py-2 px-4 rounded-lg ${
              !isMonthly
                ? "text-blue-500 border border-gray-300"
                : "text-gray-700"
            }`}
          >
            Yearly
          </button>
          <button
            onClick={() => setIsMonthly(true)}
            className={`py-2 px-4 rounded-lg ${
              isMonthly
                ? "text-blue-500 border border-gray-300"
                : "text-gray-700"
            }`}
          >
            Monthly
          </button>
        </div>
        <div className="gap-4">
          <div className="md:flex w-full justify-center gap-10">
            {renderCards()}
          </div>

          <div>
            <h2>Referral Code </h2>
            <div className="flex gap-5">
              <input
                type="text"
                value={referal}
                onChange={handleInputChange}
                placeholder="Enter your referral code"
                className="w-1/2 px-4  py-1.5 my-2 rounded-md outline-none"
              />
              <button
                className=" my-2  px-8 bg-viridianGreen text-white rounded"
                onClick={handleSubmit}
              >
                Verify
              </button>
            </div>
            {message && <p className="text-black ">{message}</p>}
          </div>

          {selectedPlan && (
            <div className="mt-2 w-full flex flex-col justify-center items-center">
              <h3 className="text-lg font-medium">
                You selected:{" "}
                <span className="inline font-bold">
                  {selectedPlan} Plan {amount}
                </span>
              </h3>
              <div className="mt-4">
                {/* Conditionally render PayPal buttons only if amount is properly set */}
                {amount && parseFloat(amount) > 0 ? (
                  <>
                    <button
                      onClick={handleRazorpayPayment}
                      className="mt-4 py-2 px-8 bg-viridianGreen text-white rounded"
                    >
                      Pay with Razorpay
                    </button>

                    <PayPalButtons
                      style={{ layout: "horizontal", padding: "16px" }}
                      className="p-3"
                      createOrder={createOrder}
                      onApprove={onApprove}
                    />
                  </>
                ) : (
                  <p className="text-red-500">Loading payment details...</p>
                )}
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
