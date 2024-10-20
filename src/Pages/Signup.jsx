import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PrimaryButton from "../components/common/PrimaryButton";
import logo from "../assets/images/logo1.jpg";
import Pricing from '../components/common/Pricing';
import Loader from '../components/common/Loader';




function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [loading, setLoading] = useState(false); 
  const [otpVerified, setOtpVerified] = useState(false);
   
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
    if (!username) newErrors.username = "Username is required";
    if (!password) newErrors.password = "Password is required";
    if (password && password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const userData = {"validation": "user", name, email, phone_number, username, password };
    setLoading(true);
    try {
      await signupUser(userData);
      setSuccessMessage('Signup successful! Please check your email for verification.');
      setIsOtpSent(true); 
    } catch (error) {
      setErrors({ server: error.message || 'Signup failed. Please try again.' });
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
      await verifyOtp({"validation": "user", email, otp });
      setSuccessMessage('Email verification successful! You can now choose plane ');
      setOtpVerified(true); 
    } catch (error) {
      setErrors({ server: 'OTP verification failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="flex flex-col h-full justify-center items-center container mx-auto py-8 px-4">
      <div>
        <img src={logo} alt="courses" className="w-52 h-20 rounded-sm object-cover" />
      </div>
      { loading ? (
          <Loader />
        ) : (<></>)}
      <div className={` ${loading ? "opacity-50" : ""} w-full lg:w-1/2 shadow-2xl px-4 py-5  gap-1 flex flex-col bg-gray-100 rounded-xl `}>
        {!isOtpSent ? (
          <div className="mb-5 text-center">
            <p className="font-semibold text-lg">Welcome!</p>
            <p className='py-2'>Create your account and enjoy 3 days of Premium features, free!</p>
          </div>
        ) : !otpVerified ?  (
          <p className='py-2 w-full text-center'>Verify your email</p>
        ) : (<></>)}

        {successMessage && <p className="text-green-600 text-center py-2">{successMessage}</p>}

        
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
              <input
                type="number"
                value={phone_number}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="border rounded py-1 px-2 w-full outline-none"
              />
              {errors.phoneNumber && <p className="text-red-600">{errors.phoneNumber}</p>}
            </label>
            <label className="mb-1">
              Username
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border rounded py-1 px-2 w-full outline-none"
              />
              {errors.username && <p className="text-red-600">{errors.username}</p>}
            </label>
            <label className="mb-1">
              Password
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="6+ characters"
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
            {errors.server && <p className="text-red-600 text-center">{errors.server}</p>}
            <div className="mx-auto my-6">
              <PrimaryButton title="Sign up" onClick={handleSubmit} />
            </div>
          </form>
        ) : !otpVerified ?  (
          <form className="gap-2 flex flex-col md:px-4 " onSubmit={handleOtpSubmit}>
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
          <div className="mt-6">
            <Pricing 
              name={name}
              email={email}
              phone_number={phone_number}
              username={username}
              password={password}
               />
          </div>
        )}

        <div className={`flex gap-2 justify-center ${isOtpSent ? "hidden" : ""}`}>
          {/* <p>Already have an account? </p> */}
          {/* <a className="text-blue-600 font-medium" href="/login">Log in</a> */}
        </div>
      </div>
    </div>
  );
}

export default Signup;
