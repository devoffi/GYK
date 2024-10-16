// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import { MdOutlineLock } from "react-icons/md";
// import { GoShieldCheck } from "react-icons/go";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// const Pricing = ({ selectedPlan, onPlanSelect }) => {
//   const [amount, setAmount] = useState('');

//   useEffect(() => {
//     if (selectedPlan) {
//       setAmount(selectedPlan === 'basic' ? '10.00' : '20.00');
//     }
//   }, [selectedPlan]);

//   const initialOptions = {
//     clientId: "ASeTLjejgCUSUlXzY65o5s6iHaUTTejxLc_kKbRicH-iClmKXjlCmsvjVQ-pIkO3Dz6Xidffl-0t92-v", // Replace with your PayPal client ID
//     currency: "USD",
//     intent: "capture"
//   };

//   return (
//     <PayPalScriptProvider options={initialOptions}>
//       <div className="flex h-full flex-col items-center ">
//         <h1 className="text-2xl font-bold mb-6">Choose Your Plan</h1>
//         <div className="gap-4">
//           <div className='md:flex w-full justify-center gap-10 '>
//             <div className="relative md:w-[50%] h-fit border border-gray-200 rounded-xl p-8 bg-white hover:shadow-xl transition-shadow duration-300 mb-10">       
//               <div className="mb-6 border-b ">
//                 <h2 className="text-xl font-semibold text-gray-700 mb-2 flex gap-2"> 
//                   <MdOutlineLock color="hsl(180, 98%, 31%)" size={26} />
//                   BASIC
//                 </h2>
//                 <p className="text-gray-900 text-base font-light md:text-xl">The tools you need for core protection.</p>
//               </div>
//               <div className="text-center my-2 ">
//                 <p className="text-3xl font-medium flex items-end text-gray-800"> ₹2,070.00<span className="text-lg pb-1 text-gray-700">/year</span></p>
//                 <p className='text-start px-1 font-medium text-gray-500 pb-3'>same as ₹172.50/month</p>
//                 <button
//                   onClick={() => onPlanSelect('basic')}
//                   className="hover:text-white hover:bg-viridianGreen hover:font-[400] font-[500] w-full py-[8px] border-[2px] border-viridianGreen border-solid rounded-md bg-transparent text-black sm:text-md text-xl"
//                 >
//                   Buy now
//                 </button>
//               </div>
//             </div>

//             <div className="relative md:w-[50%] border rounded-xl p-8 bg-blue-900/90 hover:shadow-xl transition-shadow duration-300 mb-10 ">
//               <div className="absolute top-[-14px] left-3/4 transform -translate-x-3/4 bg-yellow-500 text-black text-sm font-medium rounded px-3 py-0.5 whitespace-nowrap">
//                 MOST POPULAR
//               </div>
//               <div className="mb-6 border-b ">
//                 <h2 className="text-xl font-semibold text-white mb-2 flex gap-2"> 
//                   <GoShieldCheck color="hsl(180, 98%, 31%)" size={26} />
//                   COMPLETE
//                 </h2>
//                 <p className="text-white text-base font-light md:text-xl">Advanced safety features with full customization.</p>
//               </div>
//               <div className="text-center my-2 ">
//                 <p className="text-3xl font-medium flex items-end text-white"> ₹2,070.00<span className="text-lg pb-1 text-white">/year</span></p>
//                 <p className='text-start px-1 font-medium text-white pb-3'>same as ₹172.50/month</p>
//                 <button
//                   onClick={() => onPlanSelect('advanced')}
//                   className="hover:text-white hover:bg-viridianGreen hover:font-[400] font-[500] w-full py-[8px] border-[2px] border-solid rounded-md bg-white text-black sm:text-md text-xl"
//                 >
//                   Buy now
//                 </button>
//               </div>
//             </div>
//           </div>

//           {selectedPlan && (
//             <div className="mt-2 w-full  flex flex-col  justify-center items-center">
//               <h3 className="text-lg font-medium ">You selected: <span className='inline font-bold'>{selectedPlan} Plan</span></h3>
//               <div className="mt-4">
//                   <PayPalButtons
//                   createOrder={(data, actions) => {
//                     return actions.order.create({
//                       purchase_units: [{
//                         amount: {
//                           currency_code: "USD",
//                           value: amount || "10.00",
//                         },
//                       }],
//                     });
//                   }}
//                   onApprove={async (data, actions) => {
//                     try {
//                       const details = await actions.order.capture();
//                       alert("Transaction complete by " + details.payer.name.given_name);
//                     } catch (error) {
//                       console.error("Error capturing order:", error);
//                       alert("Error capturing order. Please try again.");
//                     }
//                   }}
//                   onError={(err) => {
//                     console.error("PayPal payment error:", err);
//                     alert("There was an error processing your payment. Please try again.");
//                   }}
//                 />
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </PayPalScriptProvider>
//   );
// };

// Pricing.propTypes = {
//   selectedPlan: PropTypes.string,
//   onPlanSelect: PropTypes.func.isRequired,
// };

// export default Pricing;






// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import { MdOutlineLock } from "react-icons/md";
// import { GoShieldCheck } from "react-icons/go";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import axios from 'axios';

// const Pricing = ({ selectedPlan, onPlanSelect }) => {
//   const [amount, setAmount] = useState('');
//   const [isMonthly, setIsMonthly] = useState(false);
//   const [currency, setCurrency] = useState('USD'); 
//   const [exchangeRate, setExchangeRate] = useState(1);
//   const [error, setError] = useState(null);

//   // Pricing in USD
//   const prices = {
//     basic: { yearly: 25, monthly: 4 },
//     advanced: { yearly: 35, monthly: 6 }
//   };

//   useEffect(() => {
//     const fetchUserLocation = async () => {
//       try {
//         const response = await axios.get('http://ip-api.com/json/');
//         const country = response.data.country;
        
//         const currencyMap = {
//           "Afghanistan": "AFN",
//           "Albania": "ALL",
//           "Algeria": "DZD",
//           "Andorra": "EUR",
//           "Angola": "AOA",
//           "Antigua and Barbuda": "XCD",
//           "Argentina": "ARS",
//           "Armenia": "AMD",
//           "Australia": "AUD",
//           "Austria": "EUR",
//           "Azerbaijan": "AZN",
//           "Bahamas": "BSD",
//           "Bahrain": "BHD",
//           "Bangladesh": "BDT",
//           "Barbados": "BBD",
//           "Belarus": "BYN",
//           "Belgium": "EUR",
//           "Belize": "BZD",
//           "Benin": "XOF",
//           "Bhutan": "BTN",
//           "Bolivia": "BOB",
//           "Bosnia and Herzegovina": "BAM",
//           "Botswana": "BWP",
//           "Brazil": "BRL",
//           "Brunei": "BND",
//           "Bulgaria": "BGN",
//           "Burkina Faso": "XOF",
//           "Burundi": "BIF",
//           "Cabo Verde": "CVE",
//           "Cambodia": "KHR",
//           "Cameroon": "XAF",
//           "Canada": "CAD",
//           "Central African Republic": "XAF",
//           "Chad": "XAF",
//           "Chile": "CLP",
//           "China": "CNY",
//           "Colombia": "COP",
//           "Comoros": "KMF",
//           "Congo, Democratic Republic of the": "CDF",
//           "Congo, Republic of the": "XAF",
//           "Costa Rica": "CRC",
//           "Croatia": "HRK",
//           "Cuba": "CUP",
//           "Cyprus": "EUR",
//           "Czech Republic": "CZK",
//           "Denmark": "DKK",
//           "Djibouti": "DJF",
//           "Dominica": "XCD",
//           "Dominican Republic": "DOP",
//           "Ecuador": "USD",
//           "Egypt": "EGP",
//           "El Salvador": "USD",
//           "Equatorial Guinea": "XAF",
//           "Eritrea": "ERN",
//           "Estonia": "EUR",
//           "Eswatini": "SZL",
//           "Ethiopia": "ETB",
//           "Fiji": "FJD",
//           "Finland": "EUR",
//           "France": "EUR",
//           "Gabon": "XAF",
//           "Gambia": "GMD",
//           "Georgia": "GEL",
//           "Germany": "EUR",
//           "Ghana": "GHS",
//           "Greece": "EUR",
//           "Grenada": "XCD",
//           "Guatemala": "GTQ",
//           "Guinea": "GNF",
//           "Guinea-Bissau": "XOF",
//           "Guyana": "GYD",
//           "Haiti": "HTG",
//           "Honduras": "HNL",
//           "Hungary": "HUF",
//           "Iceland": "ISK",
//           "India": "INR",
//           "Indonesia": "IDR",
//           "Iran": "IRR",
//           "Iraq": "IQD",
//           "Ireland": "EUR",
//           "Israel": "ILS",
//           "Italy": "EUR",
//           "Jamaica": "JMD",
//           "Japan": "JPY",
//           "Jordan": "JOD",
//           "Kazakhstan": "KZT",
//           "Kenya": "KES",
//           "Kiribati": "AUD",
//           "Korea, North": "KPW",
//           "Korea, South": "KRW",
//           "Kuwait": "KWD",
//           "Kyrgyzstan": "KGS",
//           "Laos": "LAK",
//           "Latvia": "EUR",
//           "Lebanon": "LBP",
//           "Lesotho": "LSL",
//           "Liberia": "LRD",
//           "Libya": "LYD",
//           "Liechtenstein": "CHF",
//           "Lithuania": "EUR",
//           "Luxembourg": "EUR",
//           "Madagascar": "MGA",
//           "Malawi": "MWK",
//           "Malaysia": "MYR",
//           "Maldives": "MVR",
//           "Mali": "XOF",
//           "Malta": "EUR",
//           "Marshall Islands": "USD",
//           "Mauritania": "MRU",
//           "Mauritius": "MUR",
//           "Mexico": "MXN",
//           "Micronesia": "USD",
//           "Moldova": "MDL",
//           "Monaco": "EUR",
//           "Mongolia": "MNT",
//           "Montenegro": "EUR",
//           "Morocco": "MAD",
//           "Mozambique": "MZN",
//           "Myanmar": "MMK",
//           "Namibia": "NAD",
//           "Nauru": "AUD",
//           "Nepal": "NPR",
//           "Netherlands": "EUR",
//           "New Zealand": "NZD",
//           "Nicaragua": "NIO",
//           "Niger": "XOF",
//           "Nigeria": "NGN",
//           "North Macedonia": "MKD",
//           "Norway": "NOK",
//           "Oman": "OMR",
//           "Pakistan": "PKR",
//           "Palau": "USD",
//           "Palestine": "ILS",
//           "Panama": "PAB",
//           "Papua New Guinea": "PGK",
//           "Paraguay": "PYG",
//           "Peru": "PEN",
//           "Philippines": "PHP",
//           "Poland": "PLN",
//           "Portugal": "EUR",
//           "Qatar": "QAR",
//           "Romania": "RON",
//           "Russia": "RUB",
//           "Rwanda": "RWF",
//           "Saint Kitts and Nevis": "XCD",
//           "Saint Lucia": "XCD",
//           "Saint Vincent and the Grenadines": "XCD",
//           "Samoa": "WST",
//           "San Marino": "EUR",
//           "Sao Tome and Principe": "STN",
//           "Saudi Arabia": "SAR",
//           "Senegal": "XOF",
//           "Serbia": "RSD",
//           "Seychelles": "SCR",
//           "Sierra Leone": "SLL",
//           "Singapore": "SGD",
//           "Slovakia": "EUR",
//           "Slovenia": "EUR",
//           "Solomon Islands": "AUD",
//           "Somalia": "SOS",
//           "South Africa": "ZAR",
//           "South Sudan": "SSP",
//           "Spain": "EUR",
//           "Sri Lanka": "LKR",
//           "Sudan": "SDG",
//           "Suriname": "SRD",
//           "Sweden": "SEK",
//           "Switzerland": "CHF",
//           "Syria": "SYP",
//           "Taiwan": "TWD",
//           "Tajikistan": "TJS",
//           "Tanzania": "TZS",
//           "Thailand": "THB",
//           "Togo": "XOF",
//           "Tonga": "TOP",
//           "Trinidad and Tobago": "TTD",
//           "Tunisia": "TND",
//           "Turkey": "TRY",
//           "Turkmenistan": "TMT",
//           "Tuvalu": "AUD",
//           "Uganda": "UGX",
//           "Ukraine": "UAH",
//           "United Arab Emirates": "AED",
//           "United Kingdom": "GBP",
//           "United States": "USD",
//           "Uruguay": "UYU",
//           "Uzbekistan": "UZS",
//           "Vanuatu": "VUV",
//           "Vatican City": "EUR",
//           "Venezuela": "VES",
//           "Vietnam": "VND",
//           "Yemen": "YER",
//           "Zambia": "ZMW",
//           "Zimbabwe": "ZWL"
//       };
      
//         setCurrency(currencyMap[country] || 'USD');
//       } catch (err) {
//         console.error('Error fetching user location:', err);
//         setError('Failed to fetch user location');
//       }
//     };

//     fetchUserLocation();
//   }, []);

//   useEffect(() => {
//     const fetchExchangeRate = async () => {
//       if (currency !== 'USD') {
//         try {
//           const response = await axios.get(`https://v6.exchangerate-api.com/v6/64fc3b3c664efa7d97d80956/latest/USD`);
//           setExchangeRate(response.data.conversion_rates[currency]);
//         } catch (err) {
//           setError('Failed to fetch exchange rate');
//           console.error(err);
//         }
//       }
//     };

//     fetchExchangeRate();
//   }, [currency]);

//   useEffect(() => {
//     if (selectedPlan) {
//       const baseAmount = isMonthly ? prices[selectedPlan].monthly : prices[selectedPlan].yearly;
//       setAmount((baseAmount * exchangeRate).toFixed(2));
//     }
//   }, [selectedPlan, isMonthly, exchangeRate]);

//   const initialOptions = {
//     clientId: "ASeTLjejgCUSUlXzY65o5s6iHaUTTejxLc_kKbRicH-iClmKXjlCmsvjVQ-pIkO3Dz6Xidffl-0t92-v", // Replace with your PayPal client ID
//     currency: currency,
//     intent: "capture"
//   };

//   const renderCards = () => {
//     const plans = [
//       {
//         id: 'basic',
//         title: 'BASIC',
//         description: 'The tools you need for core protection.',
//         priceYearly: (prices.basic.yearly * exchangeRate).toFixed(2),
//         priceMonthly: (prices.basic.monthly * exchangeRate).toFixed(2),
//         icon: <MdOutlineLock color="hsl(180, 98%, 31%)" size={26} />,
//       },
//       {
//         id: 'advanced',
//         title: 'COMPLETE',
//         description: 'Advanced safety features with full customization.',
//         priceYearly: (prices.advanced.yearly * exchangeRate).toFixed(2),
//         priceMonthly: (prices.advanced.monthly * exchangeRate).toFixed(2),
//         icon: <GoShieldCheck color="hsl(180, 98%, 31%)" size={26} />,
//       }
//     ];

//     return plans.map((plan) => (
//       <div key={plan.id} className={`relative md:w-[50%] border rounded-xl p-8 ${plan.id === 'advanced' ? 'bg-blue-900/90  ' : 'bg-white'} hover:shadow-xl transition-shadow duration-300 mb-10`}>
//         {plan.id === 'advanced' && (
//           <div className="absolute top-[-14px] left-3/4 transform -translate-x-3/4 bg-yellow-500 text-black text-sm font-medium rounded px-3 py-0.5 whitespace-nowrap">
//             MOST POPULAR
//           </div>
//         )}
//         <div className="mb-6 border-b">
//           <h2 className={`text-xl font-semibold ${plan.id === 'advanced' ? 'text-white' : 'text-gray-700'} mb-2 flex gap-2`}>
//             {plan.icon}
//             {plan.title}
//           </h2>
//           <p className={`text-base font-light md:text-xl ${plan.id === 'advanced' ? 'text-white' : 'text-gray-900'}`}>{plan.description}</p>
//         </div>
//         <div className="text-center my-2">
//           <p className={`text-3xl font-medium flex items-end ${plan.id === 'advanced' ? 'text-white' : 'text-gray-800'}`}>
//             {isMonthly ? plan.priceMonthly : plan.priceYearly}
//             <span className={`text-lg pb-1 ${plan.id === 'advanced' ? 'text-white' : 'text-gray-700'}`}>/{isMonthly ? 'month' : 'month'}</span>
//           </p>
//           {isMonthly ? (
//             <p className={`text-start px-1 font-medium ${plan.id === 'advanced' ? 'text-white' : 'text-gray-500'} pb-3`}>
//               same as {currency} {(parseFloat(plan.priceMonthly) / 30).toFixed(2)}/day
//             </p>
//           ) : (
//             <p className={`text-start px-1 font-medium ${plan.id === 'advanced' ? 'text-white' : 'text-gray-500'} pb-3`}>
//               same as {currency} {(parseFloat(plan.priceYearly) / 12).toFixed(2)}/month
//             </p>
//           )}
//           <button
//             onClick={() => onPlanSelect(plan.id)}
//             className={`hover:text-white hover:bg-viridianGreen hover:font-[400] font-[500] w-full py-[8px] border-[2px] border-viridianGreen border-solid rounded-md ${plan.id === 'advanced' ? 'bg-white text-black' : 'bg-transparent text-black'} sm:text-md text-xl`}
//           >
//             Buy now
//           </button>
//         </div>
//       </div>
//     ));
//   };

//   return (
//     <PayPalScriptProvider options={initialOptions}>
//       <div className="flex h-full flex-col items-center">
//         <h1 className="text-2xl font-bold mb-6">Choose Your Plan</h1>
//         <div className="flex mb-4">
//           <button onClick={() => setIsMonthly(false)} className={`py-2 px-4 rounded-lg ${!isMonthly ? "text-blue-500 border border-gray-300" : 'text-gray-700'}`}>
//             Yearly
//           </button>
//           <button onClick={() => setIsMonthly(true)} className={`py-2 px-4 rounded-lg ${isMonthly ? 'text-blue-500 border border-gray-300' : 'text-gray-700'}`}>
//             Monthly
//           </button>
//         </div>
//         <div className="gap-4">
//           <div className='md:flex w-full justify-center gap-10'>
//             {renderCards()}
//           </div>

//           {selectedPlan && (
//             <div className="mt-2 w-full flex flex-col justify-center items-center">
//               <h3 className="text-lg font-medium">You selected: <span className='inline font-bold'>{selectedPlan} Plan</span></h3>
//               <div className="mt-4">
//                 <PayPalButtons
//                   createOrder={(data, actions) => {
//                     return actions.order.create({
//                       purchase_units: [{
//                         amount: {
//                           currency_code: currency,
//                           value: amount || "10.00",
//                         },
//                       }],
//                     });
//                   }}
//                   onApprove={async (data, actions) => {
//                     try {
//                       const details = await actions.order.capture();
//                       alert("Transaction complete by " + details.payer.name.given_name);
//                     } catch (error) {
//                       console.error("Error capturing order:", error);
//                       alert("Error capturing order. Please try again.");
//                     }
//                   }}
//                   onError={(err) => {
//                     console.error("PayPal payment error:", err);
//                     alert("There was an error processing your payment. Please try again.");
//                   }}
//                 />
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </PayPalScriptProvider>
//   );
// };

// Pricing.propTypes = {
//   selectedPlan: PropTypes.string,
//   onPlanSelect: PropTypes.func.isRequired,
// };

// export default Pricing;



import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { MdOutlineLock } from "react-icons/md";
import { GoShieldCheck } from "react-icons/go";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from 'axios';

const Pricing = ({ selectedPlan, onPlanSelect }) => {
  const [amount, setAmount] = useState('');
  const [isMonthly, setIsMonthly] = useState(false);
  const [currency, setCurrency] = useState('USD'); // Default currency
  const [exchangeRate, setExchangeRate] = useState(1);
  const [error, setError] = useState(null);

  // Pricing in USD
  const prices = {
    basic: { yearly: 25, monthly: 4 },
    advanced: { yearly: 30, monthly: 7 }
  };

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        const response = await axios.get('http://ip-api.com/json/');
        const country = response.data.country;
        
        const currencyMap = {
          "USA": "USD",
          "China": "CNY",
          "India": "INR",
          // Add more countries and their currencies as needed
        };
        
        setCurrency(currencyMap[country] || 'USD'); // Default to USD if country not found
      } catch (err) {
        console.error('Error fetching user location:', err);
        setError('Failed to fetch user location');
      }
    };

    fetchUserLocation();
  }, []);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      if (currency !== 'USD') {
        try {
          const response = await axios.get(`https://v6.exchangerate-api.com/v6/64fc3b3c664efa7d97d80956/latest/USD`);
          setExchangeRate(response.data.conversion_rates[currency]);
        } catch (err) {
          setError('Failed to fetch exchange rate');
          console.error(err);
        }
      }
    };

    fetchExchangeRate();
  }, [currency]);

  useEffect(() => {
    if (selectedPlan) {
      const baseAmount = isMonthly ? prices[selectedPlan].monthly : prices[selectedPlan].yearly;
      setAmount((baseAmount * exchangeRate).toFixed(2));
    }
  }, [selectedPlan, isMonthly, exchangeRate]);

  const handleRazorpayPayment = async () => {
    const options = {
      key: "rzp_live_wWYL886Z2NVQAe", // Replace with your Razorpay key
      amount: (amount * 100).toString(), // Amount is in paise
      currency: currency,
      name: "Your Company Name",
      description: "Purchase Description",
      image: "https://example.com/logo.png", // Your logo
      handler: (response) => {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        // Handle successful payment here (e.g., update backend)
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999"
      },
      notes: {
        address: "Customer Address"
      },
      theme: {
        color: "#F37254"
      }
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  const initialOptions = {
    clientId: "ASeTLjejgCUSUlXzY65o5s6iHaUTTejxLc_kKbRicH-iClmKXjlCmsvjVQ-pIkO3Dz6Xidffl-0t92-v", // Replace with your PayPal client ID
    currency: currency,
    intent: "capture"
  };

  const renderCards = () => {
    const plans = [
      {
        id: 'basic',
        title: 'BASIC',
        description: 'The tools you need for core protection.',
        priceYearly: (prices.basic.yearly * exchangeRate).toFixed(2),
        priceMonthly: (prices.basic.monthly * exchangeRate).toFixed(2),
        icon: <MdOutlineLock color="hsl(180, 98%, 31%)" size={26} />,
      },
      {
        id: 'advanced',
        title: 'COMPLETE',
        description: 'Advanced safety features with full customization.',
        priceYearly: (prices.advanced.yearly * exchangeRate).toFixed(2),
        priceMonthly: (prices.advanced.monthly * exchangeRate).toFixed(2),
        icon: <GoShieldCheck color="hsl(180, 98%, 31%)" size={26} />,
      }
    ];

    return plans.map((plan) => (
      <div key={plan.id} className={`relative md:w-[50%] border rounded-xl p-8 ${plan.id === 'advanced' ? 'bg-blue-900/90' : 'bg-white'} hover:shadow-xl transition-shadow duration-300 mb-10`}>
        {plan.id === 'advanced' && (
          <div className="absolute top-[-14px] left-3/4 transform -translate-x-3/4 bg-yellow-500 text-black text-sm font-medium rounded px-3 py-0.5 whitespace-nowrap">
            MOST POPULAR
          </div>
        )}
        <div className="mb-6 border-b">
          <h2 className={`text-xl font-semibold ${plan.id === 'advanced' ? 'text-white' : 'text-gray-700'} mb-2 flex gap-2`}>
            {plan.icon}
            {plan.title}
          </h2>
          <p className={`text-base font-light md:text-xl ${plan.id === 'advanced' ? 'text-white' : 'text-gray-900'}`}>{plan.description}</p>
        </div>
        <div className="text-center my-2">
          <p className={`text-3xl font-medium flex items-end ${plan.id === 'advanced' ? 'text-white' : 'text-gray-800'}`}>
            {isMonthly ? plan.priceMonthly : plan.priceYearly}
            <span className={`text-lg pb-1 ${plan.id === 'advanced' ? 'text-white' : 'text-gray-700'}`}>/{isMonthly ? 'month' : 'year'}</span>
          </p>
          {isMonthly ? (
            <p className={`text-start px-1 font-medium ${plan.id === 'advanced' ? 'text-white' : 'text-gray-500'} pb-3`}>
              same as {currency} {(parseFloat(plan.priceMonthly) / 30).toFixed(2)}/day
            </p>
          ) : (
            <p className={`text-start px-1 font-medium ${plan.id === 'advanced' ? 'text-white' : 'text-gray-500'} pb-3`}>
              same as {currency} {(parseFloat(plan.priceYearly) / 12).toFixed(2)}/month
            </p>
          )}
          <button
            onClick={() => onPlanSelect(plan.id)}
            className={`hover:text-white hover:bg-viridianGreen hover:font-[400] font-[500] w-full py-[8px] border-[2px] border-viridianGreen border-solid rounded-md ${plan.id === 'advanced' ? 'bg-white text-black' : 'bg-transparent text-black'} sm:text-md text-xl`}
          >
            Buy now
          </button>
        </div>
      </div>
    ));
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <div className="flex h-full flex-col items-center">
        <h1 className="text-2xl font-bold mb-6">Choose Your Plan</h1>
        <div className="flex mb-4">
          <button onClick={() => setIsMonthly(false)} className={`py-2 px-4 rounded-lg ${!isMonthly ? "text-blue-500 border border-gray-300" : 'text-gray-700'}`}>
            Yearly
          </button>
          <button onClick={() => setIsMonthly(true)} className={`py-2 px-4 rounded-lg ${isMonthly ? 'text-blue-500 border border-gray-300' : 'text-gray-700'}`}>
            Monthly
          </button>
        </div>
        <div className="gap-4">
          <div className='md:flex w-full justify-center gap-10'>
            {renderCards()}
          </div>

          {selectedPlan && (
            <div className="mt-2 w-full flex flex-col justify-center items-center">
              <h3 className="text-lg font-medium">You selected: <span className='inline font-bold'>{selectedPlan} Plan</span></h3>
              <div className="mt-4">
                <PayPalButtons
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [{
                        amount: {
                          currency_code: currency,
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
                <button 
                  // onClick={handleRazorpayPayment} 
                  className="mt-4 py-2 px-8 bg-viridianGreen text-white rounded">
                  Pay with Razorpay
                </button>
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
