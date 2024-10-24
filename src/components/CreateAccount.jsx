import React, { useState, useEffect } from "react";
import TextInputBox from "./common/TextInputBox";
import PrimaryButton from "./common/PrimaryButton";
import axios from 'axios';
import { countries } from './common/Counties';
import SuccessPopup from "./common/SuccessPopup"; 
import { Link } from 'react-router-dom';


function CreateAccount() {

  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [callCode, setCallCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [amount, setAmount] = useState("0.00");
  const [currency, setCurrency] = useState("USD");
  const [referal, setReferal] = useState("");
  const [exchangeRate, setExchangeRate] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); 
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{10,}$/;
  const regexStr = /^[0-9]{10,13}$/;
  const [showPopup, setShowPopup] = useState(false); 


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
        username:email,
        phone_number: callCode+phone_number,
        password,
        confirm_password: password,
        referral_code: referal,
        payment_amount: amount,
        currency: currency,
        subscription_plan: {
          plan_name: "free",
          payment_id: "",
          subscription_status: "active",
          expiry_date: (newExpiryDate.setDate(currentDate.getDate() + 3), newExpiryDate.toISOString().split("T")[0]) 
        },
        status: "active",
      },
    };
    try {
      await createUser(userData);
      // window.location.href = "https://mdm.prabhaktech.com";
      setLoading(false)
      setShowPopup(true);
    } catch (error) {
      setLoading(false)
      setError({ server: error.message || "Signup failed. Please try again." });
    }
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
    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";


    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log("creating.........")
    creatUser()
  };
  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        // const response = await axios.get("http://api.ipstack.com/check?access_key=62a3129031f301b98aed43afa7de3dcc");
        // const countryCode =   response?.data?.country_code
        const response = await axios.get("https://api.ipgeolocation.io/ipgeo?apiKey=33cc459168d049d7afcde66aa8ffe758");
        // console.log(response?.data?.calling_code)
        const callCode =   response?.data?.calling_code
        setCallCode(callCode);
      } catch (err) {
        console.error("Error fetching user location:", err);
      }
    };

    fetchUserLocation();
  }, []);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleCountryChange = (e) => {
    setCallCode(e.target.value); // Update the selected country code
  };

  return (
    <div className="flex flex-col lg:flex-row bg-blue-50 rounded-lg py-20 gap-10 justify-center">
      <div className="lg:w-[45%]">
        <img src="https://static.qustodio.com/public-site/uploads/2024/05/08151750/Signupform_image-en.png" />
      </div>
      <div className="lg:w-[45%]">
        <div className="flex gap-3 justify-center">
          <p className="text-xl lg:text-3xl font-bold">Create your </p>
          <p className="text-xl lg:text-3xl font-bold text-blue-600">FREE</p>
          <p className="text-xl lg:text-3xl font-bold">account now</p>
        </div>
        <p className="text-md lg:text-xl font-medium mt-2 text-center">
          And enjoy a trial of our Premium parental control features
        </p>

        <div className="flex flex-col justify-center mt-8">
          <div className="gap-3 flex flex-col w-80 mx-auto">
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
          </div>

          <div className="flex justify-center items-center w-full my-6 ">
            <input 
              type="checkbox" 
              checked={isChecked} 
              onChange={handleCheckboxChange} 
              className="mr-1 w-10" 
            />
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
          </div>

          <div className="mx-auto ">
            <button 
              disabled={!isChecked} 
              onClick={ handleSubmit}
              className= {` ${ isChecked ?"bg-blue-700" : "bg-blue-400" } w-max hover:bg-blue-800 duration-500 py-2 px-4 rounded cursor-pointer text-white text-center font-medium text-lg `}>
              Create an account
            </button> 
            {/* <PrimaryButton 
              title={""} 
              disabled={!isChecked} 
            /> */}
          </div>
        </div>
        {showPopup && <SuccessPopup onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
}

export default CreateAccount;
