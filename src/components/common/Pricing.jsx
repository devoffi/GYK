import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { MdOutlineLock } from "react-icons/md";
import { GoShieldCheck } from "react-icons/go";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import Loader from "./Loader";




const Pricing = ({
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
  const [payerror, setPayError] = useState(null);
  const [message, setMessage] = useState("");
  const [discount, setDiscount] = useState();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [loading, setLoading] = useState(false); 
  const countryCurrencyMap = {
    "AF": "AFN",
    "AL": "ALL",
    "DZ": "DZD",
    "AS": "USD",
    "AD": "EUR",
    "AO": "AOA",
    "AI": "XCD",
    "AQ": "NZD",
    "AG": "XCD",
    "AR": "ARS",
    "AM": "AMD",
    "AW": "AWG",
    "AU": "AUD",
    "AT": "EUR",
    "AZ": "AZN",
    "BS": "BSD",
    "BH": "BHD",
    "BD": "BDT",
    "BB": "BBD",
    "BY": "BYN",
    "BE": "EUR",
    "BZ": "BZD",
    "BJ": "XOF",
    "BM": "BMD",
    "BT": "INR",
    "BO": "BOB",
    "BQ": "USD",
    "BA": "BAM",
    "BW": "BWP",
    "BV": "NOK",
    "BR": "BRL",
    "IO": "USD",
    "BN": "BND",
    "BG": "BGN",
    "BF": "XOF",
    "BI": "BIF",
    "CV": "CVE",
    "KH": "KHR",
    "CM": "XAF",
    "CA": "CAD",
    "KY": "KYD",
    "CF": "XAF",
    "TD": "XAF",
    "CL": "CLP",
    "CN": "CNY",
    "CX": "AUD",
    "CC": "AUD",
    "CO": "COP",
    "KM": "KMF",
    "CD": "CDF",
    "CG": "XAF",
    "CK": "NZD",
    "CR": "CRC",
    "HR": "HRK",
    "CU": "CUP",
    "CW": "USD",
    "CY": "EUR",
    "CZ": "CZK",
    "DK": "DKK",
    "DJ": "DJF",
    "DM": "XCD",
    "DO": "DOP",
    "EC": "USD",
    "EG": "EGP",
    "SV": "USD",
    "GQ": "XAF",
    "ER": "ERN",
    "EE": "EUR",
    "SZ": "SZL",
    "ET": "ETB",
    "FK": "FKP",
    "FO": "DKK",
    "FJ": "FJD",
    "FI": "EUR",
    "FR": "EUR",
    "GF": "EUR",
    "PF": "XPF",
    "GA": "XAF",
    "GM": "GMD",
    "GE": "GEL",
    "DE": "EUR",
    "GH": "GHS",
    "GI": "GIP",
    "GR": "EUR",
    "GL": "DKK",
    "GD": "XCD",
    "GP": "EUR",
    "GU": "USD",
    "GT": "GTQ",
    "GG": "GBP",
    "GN": "GNF",
    "GW": "XOF",
    "GY": "GYD",
    "HT": "HTG",
    "HM": "AUD",
    "VA": "EUR",
    "HN": "HNL",
    "HK": "HKD",
    "HU": "HUF",
    "IS": "ISK",
    "IN": "INR",
    "ID": "IDR",
    "IR": "IRR",
    "IQ": "IQD",
    "IE": "EUR",
    "IM": "GBP",
    "IL": "ILS",
    "IT": "EUR",
    "JM": "JMD",
    "JP": "JPY",
    "JE": "GBP",
    "JO": "JOD",
    "KZ": "KZT",
    "KE": "KES",
    "KI": "AUD",
    "KP": "KPW",
    "KR": "KRW",
    "KW": "KWD",
    "KG": "KGS",
    "LA": "LAK",
    "LV": "EUR",
    "LB": "LBP",
    "LS": "LSL",
    "LR": "LRD",
    "LY": "LYD",
    "LI": "CHF",
    "LT": "EUR",
    "LU": "EUR",
    "MO": "MOP",
    "MG": "MGA",
    "MW": "MWK",
    "MY": "MYR",
    "MV": "MVR",
    "ML": "XOF",
    "MT": "EUR",
    "MH": "USD",
    "MQ": "EUR",
    "MR": "MRU",
    "MU": "MUR",
    "YT": "EUR",
    "MX": "MXN",
    "FM": "USD",
    "MD": "MDL",
    "MC": "EUR",
    "MN": "MNT",
    "ME": "EUR",
    "MS": "XCD",
    "MA": "MAD",
    "MZ": "MZN",
    "MM": "MMK",
    "NA": "NAD",
    "NR": "AUD",
    "NP": "NPR",
    "NL": "EUR",
    "NC": "XPF",
    "NZ": "NZD",
    "NI": "NIO",
    "NE": "XOF",
    "NG": "NGN",
    "NU": "NZD",
    "NF": "AUD",
    "MP": "USD",
    "NO": "NOK",
    "OM": "OMR",
    "PK": "PKR",
    "PW": "USD",
    "PS": "ILS",
    "PA": "PAB",
    "PG": "PGK",
    "PY": "PYG",
    "PE": "PEN",
    "PH": "PHP",
    "PN": "NZD",
    "PL": "PLN",
    "PT": "EUR",
    "PR": "USD",
    "QA": "QAR",
    "RE": "EUR",
    "RO": "RON",
    "RU": "RUB",
    "RW": "RWF",
    "BL": "EUR",
    "SH": "SHP",
    "KN": "XCD",
    "LC": "XCD",
    "MF": "EUR",
    "PM": "EUR",
    "VC": "XCD",
    "WS": "WST",
    "SM": "EUR",
    "ST": "STN",
    "SA": "SAR",
    "SN": "XOF",
    "RS": "RSD",
    "SC": "SCR",
    "SL": "SLL",
    "SG": "SGD",
    "SX": "USD",
    "SK": "EUR",
    "SI": "EUR",
    "SB": "AUD",
    "SO": "SOS",
    "ZA": "ZAR",
    "GS": "GBP",
    "SS": "SSP",
    "ES": "EUR",
    "LK": "LKR",
    "SD": "SDG",
    "SR": "SRD",
    "SJ": "NOK",
    "SZ": "SZL",
    "SE": "SEK",
    "CH": "CHF",
    "SY": "SYP",
    "TW": "TWD",
    "TJ": "TJS",
    "TZ": "TZS",
    "TH": "THB",
    "TL": "USD",
    "TG": "XOF",
    "TK": "AUD",
    "TO": "TOP",
    "TT": "TTD",
    "TN": "TND",
    "TR": "TRY",
    "TM": "TMT",
    "TC": "USD",
    "TV": "AUD",
    "UG": "UGX",
    "UA": "UAH",
    "AE": "AED",
    "GB": "GBP",
    "US": "USD",
    "UY": "UYU",
    "UZ": "UZS",
    "VU": "VUV",
    "VE": "VES",
    "VN": "VND",
    "WF": "XPF",
    "EH": "MAD",
    "YE": "YER",
    "ZM": "ZMW",
    "ZW": "ZWL"
};

  const prices = {
    Basic: { yearly: 2, monthly: 1 },
    Premium: { yearly: 3, monthly: 2 },
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
    setLoading(true)
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
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError({ server: error.message || "Signup failed. Please try again." });
    }
  };

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        const response = await axios.get("http://api.ipstack.com/check?access_key=62a3129031f301b98aed43afa7de3dcc");
        console.log(response?.data?.country_code)
        const countryCode =   response?.data?.country_code
        setCurrency(countryCurrencyMap[countryCode] || "USD");
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
            `https://v6.exchangerate-api.com/v6/b0c12547e82cc43ea3c02f1f/latest/USD`
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
            currency_code: currency,
            value: amount,
          },
        },
      ],
    });
  };
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      alert("Transection completed" + details.payer.name.given_name);
      creatUser();
    });
  };
  const onCancel = (data) => {
    console.log("Payment cancelled:", data);
    setAmount("0.00")
    setPayError("Something went wrong! try again..")
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
            onClick={() => setSelectedPlan(plan.id)}
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

  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "ASeTLjejgCUSUlXzY65o5s6iHaUTTejxLc_kKbRicH-iClmKXjlCmsvjVQ-pIkO3Dz6Xidffl-0t92-v",
          currency: currency,
      }}
    >
      { loading ? (
          <Loader />
        ) : (<></>)}
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
                  {currency === "INR" ? (
                    <button
                      onClick={handleRazorpayPayment}
                      className="mt-4 py-2 px-8 bg-viridianGreen text-white rounded"
                    >
                      Pay with Razorpay
                    </button>
                    ) : (
                    <PayPalButtons
                      style={{ layout: "horizontal", padding: "16px" }}
                      className="p-3"
                      createOrder={createOrder}
                      onApprove={onApprove}
                      onCancel={onCancel}
                    />
                  )}
                  </>

                ) : (
                  <p className="text-red-500">{payerror ? payerror :  "Loading payment details..."}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </PayPalScriptProvider>
  );
};



export default Pricing;
