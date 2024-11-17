import React, { useState, useEffect } from "react";
import axios from "axios";
import PrimaryButton from "../components/common/PrimaryButton";
import logo from "../assets/images/logo1.jpg";
import Pricing from "../components/common/Pricing";
import Loader from "../components/common/Loader";
import { countries } from "../components/common/Counties";
import { Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [callCode, setCallCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{10,}$/;
  const regexStr = /^[0-9]{10,13}$/;
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const signupUser = async (userData) => {
    const response = await axios.post(
      "https://mdm.prabhaktech.com/api/email-validation",
      userData
    );
    return response.data;
  };

  const verifyOtp = async (otpData) => {
    const response = await axios.post(
      "https://mdm.prabhaktech.com/api/verify-otp",
      otpData
    );
    return response.data;
  };

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        // const response = await axios.get("http://api.ipstack.com/check?access_key=62a3129031f301b98aed43afa7de3dcc");
        // const countryCode =   response?.data?.country_code
        const response = await axios.get(
          "https://api.ipgeolocation.io/ipgeo?apiKey=33cc459168d049d7afcde66aa8ffe758"
        );
        // console.log(response?.data?.calling_code)
        const callCode = response?.data?.calling_code;
        setCallCode(callCode);
      } catch (err) {
        console.error("Error fetching user location:", err);
      }
    };

    fetchUserLocation();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage("");

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
    } else if (
      phone_number.length < 10 ||
      phone_number.length > 15 ||
      !regexStr.test(phone_number)
    ) {
      newErrors.phoneNumber = "Please enter a valid phone number"; // Set the error message
    }
    if (!password) newErrors.password = "Password is required";
    if (!password || !passwordRegex.test(password)) {
      newErrors.password =
        "Password must be at least 10 characters long, contain at least one letter, one number, and one special character.";
    }
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const userData = {
      validation: "user",
      name,
      email,
      phone_number,
      password,
    };
    setLoading(true);
    try {
      await signupUser(userData);
      setSuccessMessage(
        "Signup successful! Please check your email for verification."
      );
      setIsOtpSent(true);
    } catch (error) {
      setErrors({ server: "Email already exist." });
    } finally {
      setLoading(false);
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
      await verifyOtp({ validation: "user", email, otp });
      setSuccessMessage(
        "Email verification successful! You can now choose plane "
      );
      setOtpVerified(true);
    } catch (error) {
      setErrors({ server: "OTP verification failed. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const handleCountryChange = (e) => {
    setCallCode(e.target.value); // Update the selected country code
  };

  return (
    <div className="flex flex-col h-full justify-center items-center container mx-auto py-8 px-4">
      <div>
        <img
          src={logo}
          alt="courses"
          className="w-52 h-20 rounded-sm object-cover"
        />
      </div>
      {loading ? <Loader /> : <></>}
      <div
        className={` ${
          loading ? "opacity-50" : ""
        } w-full lg:w-1/2 shadow-2xl px-4 py-5  gap-1 flex flex-col bg-gray-100 rounded-xl `}>
        {!isOtpSent ? (
          <div className="mb-5 text-center">
            <p className="font-semibold text-lg">Welcome!</p>
            <p className="py-2">
              Create your account and enjoy 3 days of Premium features, free!
            </p>
          </div>
        ) : !otpVerified ? (
          <p className="py-2 w-full text-center">Verify your email</p>
        ) : (
          <></>
        )}

        {successMessage && (
          <p className="text-green-600 text-center py-2">{successMessage}</p>
        )}

        {!isOtpSent ? (
          <form className="gap-2 flex flex-col md:px-4" onSubmit={handleSubmit}>
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
              <div className="flex gap-2 border rounded w-full outline-none">
                <select
                  value={callCode}
                  onChange={handleCountryChange}
                  className="py-1 w-1/2 text-center px-2 outline-none">
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name.length > 15
                        ? country.name.slice[(0, 15)]
                        : country.name}{" "}
                      {country.code}
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
              {errors.phoneNumber && (
                <p className="text-red-600">{errors.phoneNumber}</p>
              )}
            </label>
            <label className="mb-1">
              Password
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="10+ characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border rounded py-1 px-2 w-full pr-10 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1"
                  aria-label={showPassword ? "Hide password" : "Show password"}>
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-600">{errors.password}</p>
              )}
            </label>
            <label className="mb-1">
              Confirm Password
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="border rounded py-1 px-2 w-full pr-10 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1"
                  aria-label={showPassword ? "Hide password" : "Show password"}>
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-600">{errors.confirmPassword}</p>
              )}
            </label>
            {errors.server && (
              <p className="text-red-600 text-center">{errors.server}</p>
            )}
            <div className="flex justify-center items-center w-full my-6 ">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="mr-2 w-10"
              />
              <label className="text-sm whitespace-nowrap ">
                <label className="text-sm  ">
                  I agree to the{" "}
                  <Link to="/terms" className="text-blue-600 inline ">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/product-privacy" className="text-blue-600 inline">
                    Privacy Policy
                  </Link>
                  .
                </label>
              </label>
            </div>
            <div className="mx-auto my-6">
              <button
                disabled={!isChecked}
                onClick={handleSubmit}
                className={` ${
                  isChecked ? "bg-blue-700" : "bg-blue-400"
                } w-max hover:bg-blue-800 duration-500 py-2 px-4 rounded cursor-pointer text-white text-center font-medium text-lg `}>
                Sign Up
              </button>
            </div>
          </form>
        ) : !otpVerified ? (
          <form
            className="gap-2 flex flex-col md:px-4 "
            onSubmit={handleOtpSubmit}>
            <label className="mb-1">
              Enter OTP
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="border border-blue-800 rounded py-1 px-2 w-full outline-none my-2"
              />
              {errors.otp && <p className="text-red-600">{errors.otp}</p>}
              {errors.server && (
                <p className="text-red-600 text-center">{errors.server}</p>
              )}
            </label>
            <div className="mx-auto my-6">
              <PrimaryButton title="Verify OTP" onClick={handleOtpSubmit} />
            </div>
          </form>
        ) : (
          <div className="mt-6">
            <Pricing
              name={name}
              email={email}
              phone_number={phone_number}
              password={password}
              callCode={callCode}
            />
          </div>
        )}

        <div
          className={`flex gap-2 justify-center ${isOtpSent ? "hidden" : ""}`}>
          {/* <p>Already have an account? </p> */}
          {/* <a className="text-blue-600 font-medium" href="/login">Log in</a> */}
        </div>
      </div>
    </div>
  );
}

export default Signup;
