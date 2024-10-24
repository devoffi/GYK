import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PrimaryButton from "../components/common/PrimaryButton";
import logo from "../assets/images/logo1.jpg";
import Pricing from '../components/common/Pricing';
import countryCurrencyMap from '../components/common/countryCurrencyMap'; 
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { countries } from '../components/common/Counties';
import { Link } from 'react-router-dom';
import SuccessPopup from "../components/common/SuccessPopup"; 

function Loader() {
  return (
    <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
      <svg aria-hidden="true" className="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  ); 
}

function Signup() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [loading, setLoading] = useState(false); 
  const [otpVerified, setOtpVerified] = useState(false);
  const [error, setError] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(1);
  const [callCode, setCallCode] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [amount, setAmount] = useState('');
  const [payerror, setPayError] = useState(null);
  const [plainId, setPlainId] = useState('');
  const [referal, setReferal] = useState("");
  const [message, setMessage] = useState("");
  const [discount, setDiscount] = useState();
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{10,}$/;
  const regexStr = /^[0-9]{10,13}$/; 
  const [isChecked, setIsChecked] = useState(false);
  const [showPopup, setShowPopup] = useState(false); 
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const signupUser = async (userData) => {
    const response = await axios.post('https://mdm.prabhaktech.com/api/email-validation', userData);
    return response.data;
  };

  const verifyOtp = async (otpData) => {
    const response = await axios.post('https://mdm.prabhaktech.com/api/verify-otp', otpData);
    return response.data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage('');

    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) newErrors.email = "Invalid email format";
    }
    if (!phone_number) newErrors.phoneNumber = "Phone number is required";
    if (!phone_number) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (phone_number.length < 10 || phone_number.length > 15 || !regexStr.test(phone_number)) {
        newErrors.phoneNumber = "Please enter a valid phone number"; // Set the error message
    }
    if (!password) newErrors.password = "Password is required";
    if (!password || !passwordRegex.test(password)) {
        newErrors.password = "Password must be at least 10 characters long, contain at least one letter, one number, and one special character.";
    }
    if (password && password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const userData = {"validation": "partner", name, email, phone_number, password };
    setLoading(true); // Start loading
    try {
      await signupUser(userData);
      setSuccessMessage('Signup successful! Please check your email for verification.');
      setIsOtpSent(true); // Show OTP input
    } catch (error) {
      setErrors({ server: 'Email is already exist' });
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    if (!otp) {
      setErrors({ otp: "OTP is required" });
      return;
    }

    setLoading(true); // Start loading
    try {
      await verifyOtp({"validation":"partner", email, otp });
      setSuccessMessage('Email verification successful! You can now choose plane ');
      setOtpVerified(true); 
    } catch (error) {
      setErrors({ server: 'OTP verification failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        const response = await axios.get("https://api.ipgeolocation.io/ipgeo?apiKey=33cc459168d049d7afcde66aa8ffe758");
        const countryCode =   response?.data?.country_code2
        const callCode =   response?.data?.calling_code
        setCallCode(callCode);
        setCurrency(countryCurrencyMap[countryCode] || "USD");
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
          const response = await axios.get(`https://v6.exchangerate-api.com/v6/b0c12547e82cc43ea3c02f1f/latest/USD`);
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
    let calculatedAmount = (1 * exchangeRate).toFixed(2);
    if (discount && discount > 0) {
      const discountAmount = (calculatedAmount * (discount / 100)).toFixed(2);
      calculatedAmount = (calculatedAmount - discountAmount).toFixed(2);
    }
    setAmount(calculatedAmount);
  }, [exchangeRate, discount]);
  const creatUser = async () => {
    setLoading(true)

    const userData = {
      user_details: {
        validation: "partner",
        name,
        email,
        phone_number: callCode+phone_number,
        username : email,
        password,
        confirm_password: password,
        referral_code: referal,
        payment_amount: amount,
        currency: currency,
        subscription_plan: {
          payment_id: plainId,
        },
        status: "active",
      },
    };
    try {
      await createUser(userData);
      // window.location.href = "https://mdm.prabhaktech.com";
      setShowPopup(true);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError({ server: "Email already exist." });
    }
  };

  const createUser = async (userData) => {
    const response = await axios.post(
      "https://mdm.prabhaktech.com/api/create-user",
      userData
    );
    return response.data;
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (plainId) {
        creatUser();
    }
  }, [plainId]);

  const handleRazorpayPayment = async () => {
    const options = {
      key: "rzp_live_wWYL886Z2NVQAe",
      amount: (amount * 100).toString(),
      currency: "INR",
      name: "Prabhak Tech Solutions Pvt Ltd.",
      description: "Purchase Description",
      image: "https://example.com/logo.png",
      handler: (response) => {
        // alert(
        //   `Payment successful! Payment ID: ${response.razorpay_payment_id}`
        // );
        // creatUser();
        setPlainId(response.razorpay_payment_id)
      },
      prefill: {
        name: name,
        email: email,
        contact: phone_number,
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
  const handleInputChange = (e) => {
    setReferal(e.target.value);
  };
  const handleCountryChange = (e) => {
    setCallCode(e.target.value); // Update the selected country code
  };


  const handleRefSubmit = async () => {
    try {
      if (referal.length > 2) {
        const response = await axios.post(
          "https://mdm.prabhaktech.com/api/validate-referralcode",
          { referral_code: referal }
        );
        if (response?.status === 200) {
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

  const createOrder = (data, actions) => {

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
      // alert("Transection completed" + details.payer.name.given_name);
      // creatUser();
      setPlainId(details.payer.name.given_name)
    });
  };

  return (
    <div className="flex flex-col h-full justify-center items-center container mx-auto py-8 px-4">
      <div>
        <img src={logo} alt="courses" className="w-52 h-20 rounded-sm object-cover" />
      </div>
      { loading ? (
          <Loader />
        ) : (<></>)}
      <div className={` ${loading ? "opacity-50" : ""} w-full lg:w-1/2 shadow-2xl px-4 py-5 lg:px-24 gap-1 flex flex-col bg-gray-100 rounded-xl `}>
        {!isOtpSent ? (
          <div className="mb-5 text-center">
            <p className="font-semibold text-lg">Welcome!</p>
            <p className='py-2'>Join us as Partner</p>
          </div>
        ) : !otpVerified ?  (
          <p className='py-2 w-full text-center'>Verify your email</p>
        ) : (<></>)}

        {successMessage && <p className="text-green-600 text-center py-2">{successMessage}</p>}

        
        {!isOtpSent ? (
          <form className="gap-2 flex flex-col" onSubmit={handleSubmit}>
            <label className="mb-1">
              Name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-blue-800 rounded py-1 px-2 w-full outline-none"
              />
              {errors.name && <p className="text-red-600">{errors.name}</p>}
            </label>
            <label className="mb-1">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded py-1 px-2 w-full outline-none"
              />
              {errors.email && <p className="text-red-600">{errors.email}</p>}
            </label>
            <label className="mb-1">
              Phone Number
              <div className='flex gap-2 border rounded w-full outline-none'>
                <select
                  value={callCode}
                  onChange={handleCountryChange}
                  className="py-1 w-1/2 text-center px-2 outline-none"
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name.length >15 ? country.name.slice[0,15] : country.name} {country.code}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  value={phone_number}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="py-1 w-1/2 px-2 outline-none"
                />
              </div>
              {errors.phoneNumber && <p className="text-red-600">{errors.phoneNumber}</p>}
            </label>
            <label className="mb-1">
              Password
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="10+ characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border rounded py-1 px-2 w-full pr-10 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              {errors.password && <p className="text-red-600">{errors.password}</p>}
            </label>
            <label className="mb-1">
              Confirm Password
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="border rounded py-1 px-2 w-full pr-10 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword}</p>}
            </label>
            <div className="flex justify-center items-center w-full my-6 ">
            <input 
              type="checkbox" 
              checked={isChecked} 
              onChange={handleCheckboxChange} 
              className="mr-2 w-10" 
            />
            <label className="text-sm whitespace-nowrap ">
            <label className="text-sm  ">
            I agree to the{' '}
              <Link
                    to="/terms"
                    className="text-blue-600 inline "
                >
                    Terms of Service
                </Link>{' '}
                and{' '}
                <Link
                    to="/product-privacy"
                    className="text-blue-600 inline"
                >
                    Privacy Policy
                </Link>.
            </label>
            </label>
          </div>
            {errors.server && <p className="text-red-600 text-center">{errors.server}</p>}
            <div className="mx-auto my-6">
            <button 
              disabled={!isChecked} 
              onClick={ handleSubmit}
              className= {` ${ isChecked ?"bg-blue-700" : "bg-blue-400" } w-max hover:bg-blue-800 duration-500 py-2 px-4 rounded cursor-pointer text-white text-center font-medium text-lg `}>
              Sign Up
            </button> 
            </div>
          </form>
        ) : !otpVerified ?  (
          <form className="gap-2 flex flex-col" onSubmit={handleOtpSubmit}>
            <label className="mb-1">
              Enter OTP
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="border border-blue-800 rounded py-1 px-2 w-full outline-none my-2"
              />
              {errors.otp && <p className="text-red-600">{errors.otp}</p>}
              {errors.server && <p className="text-red-600 text-center">{errors.server}</p>}
            </label>
            <div className="mx-auto my-6">
              <PrimaryButton title="Verify OTP" onClick={handleOtpSubmit} />
            </div>
          </form>
        ): (
          <PayPalScriptProvider
          options={{
            "client-id":
              "ASeTLjejgCUSUlXzY65o5s6iHaUTTejxLc_kKbRicH-iClmKXjlCmsvjVQ-pIkO3Dz6Xidffl-0t92-v",
              currency: currency,
          }}
        >
          <div className="mt-6">
            <div className="flex flex-col gap-2">
            <div className="w-full my-6">
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
                  onClick={handleRefSubmit}
                >
                  Verify
                </button>
              </div>
              {message && <p className="text-black ">{message}</p>}
            </div>
            <p className='text-center'>Please confirm your {amount} payment:</p>
            <div className="mx-auto my-6">
              
              <div className="mt-4">
                {/* Conditionally render PayPal buttons only if amount is properly set */}
                {amount && parseFloat(amount) > 0 ? (
                  <>
                  {currency === "INR" ? (
                    <button
                      onClick={handleRazorpayPayment}
                      className="mt-4 py-2 px-8 bg-viridianGreen text-white rounded"
                    >
                      Pay Now
                    </button>
                     ) : (
                    <PayPalButtons
                      style={{
                        layout: 'vertical',
                        color: 'blue',
                        shape: 'rect', 
                        label: 'pay', 
                        height: 40 
                    }}
                      className="p-3"
                      createOrder={createOrder}
                      onApprove={onApprove}
                    />
                  )}
                  </>

                ) : (
                  <p className="text-red-500">{payerror ? payerror :  "Loading payment details..."}</p>
                )}
              </div>
            </div>
          </div>
          {showPopup && <SuccessPopup onClose={() => setShowPopup(false)} />}
          </div>
          </PayPalScriptProvider>
        )}

        <div className={`flex gap-2 justify-center ${isOtpSent ? "hidden" : ""}`}>
        </div>
      </div>
    </div>
  );
}

export default Signup;
