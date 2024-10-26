
import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { MdOutlineLock } from "react-icons/md";
import { GoShieldCheck } from "react-icons/go";
import { Link } from 'react-router-dom';
import axios from "axios";
import countryCurrencyMap from './common/countryCurrencyMap';


const responsive = {

  
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    draggable: true,
  },
};

const List = ({ items = [], childStyle }) => (
  <ul className={`list-none p-0 m-0 ${childStyle}`}>
    {items.map(({ text, isAvailable }, i) => (
      <li key={i} className={`flex items-start mb-3 ${isAvailable ? '' : 'opacity-55'}`}>
        <div className="mr-2 text-green-500">
          <IoIosCheckmarkCircle size={22} />
        </div>
        <span className={isAvailable ? '' : 'text-gray-700'}>
          {text}
        </span> 
      </li>
    ))}
  </ul>
);

const Package = () => {
  const [activeTab, setActiveTab] = useState('yearly');
  const [exchangeRate, setExchangeRate] = useState(1);
  const [currency, setCurrency] = useState("USD");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        // const response = await axios.get("http://api.ipstack.com/check?access_key=62a3129031f301b98aed43afa7de3dcc");
        // const countryCode =   response?.data?.country_code
        const response = await axios.get("https://api.ipgeolocation.io/ipgeo?apiKey=33cc459168d049d7afcde66aa8ffe758");
        const countryCode =   response?.data?.country_code2
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
  const points = [
    { id: 1, text: 'Games & apps blocking', isAvailable: true },
    { id: 2, text: 'Daily time limits', isAvailable: true },
    { id: 3, text: 'Web filtering', isAvailable: true },
    { id: 4, text: 'Location monitoring', isAvailable: true },
    { id: 5, text: 'Pause internet access', isAvailable: true }
  ];

  const points1 = [
    { id: 1, text: 'Games & apps', isAvailable: true },
    { id: 2, text: 'Daily time limits', isAvailable: true },
    { id: 3, text: 'Web filtering', isAvailable: true },
    { id: 4, text: 'Location monitoring', isAvailable: true },
    { id: 5, text: 'Pause internet access', isAvailable: true },
    { id: 6, text: 'Custom routines', isAvailable: true },
    { id: 7, text: 'AI-powered search alerts', isAvailable: true },
    { id: 8, text: 'Custom alerts', isAvailable: true },
    { id: 9, text: 'Games & apps time limits', isAvailable: true },
    { id: 10, text: 'Calls & messages monitoring*', isAvailable: true },
    { id: 11, text: 'Unlimited devices*', isAvailable: true }
  ];

  const sliderParams = {
    additionalTransfrom: 0,
    arrows: true,
    autoPlaySpeed: 3000,
    centerMode: false,
    slidesToShow: 1,
    swipeable: true,
    responsive,
  };

  const pricing = {
    BASIC: { yearly: 12.744, monthly: 1.18 },
    COMPLETE: { yearly: 23.22, monthly: 2.15 },
  };

  return (
    <div className="container mx-auto px-2 py-12">
      <div className="flex flex-col justify-center items-center text-center w-full mb-8">
        <p className='font-titan text-2xl md:text-5xl w-full md:w-3/4 text-gray-800'>
          The Back to School
          <span className='text-blue-700 px-3 inline'>sale</span>{' '} 
          is now on
        </p>
        <p className="w-full md:w-3/4 text-lg text-gray-700 py-8">
        <span className="text-gray-700 py-2">Select the yearly plan and get 10% discount.</span>

          {/* Give your child the tools to excel this new school year. Use code{' '} */}
          {/* <span className="bg-viridianGreen text-white font-bold px-2 py-0.5 rounded inline">
            BTS10
          </span>{' '} to
          <span className='px-2 font-semibold w-fit inline'> unlock our most advanced digital safety features with 10% off.</span> */}
        </p>
      </div>

      {/* Tab Buttons */}
      <div className="flex justify-center mb-6">
        <button
          className={`px-4 py-2 font-semibold ${activeTab === 'yearly' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700'} rounded-l`}
          onClick={() => setActiveTab('yearly')}
        >
          Yearly
        </button>
        <button
          className={`px-4 py-2 font-semibold ${activeTab === 'monthly' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700'} rounded-r`}
          onClick={() => setActiveTab('monthly')}
        >
          Monthly
        </button>
      </div>

      <div className='flex w-full justify-center gap-10'>
        {/* BASIC Package */}
        <div className="relative w-[34%] hidden md:block border border-gray-200 rounded-xl p-8 bg-white hover:shadow-xl transition-shadow duration-300 mb-10">
          <div className="mb-6 border-b">
            <h2 className="text-xl font-semibold text-gray-700 mb-2 flex gap-2"> 
              <MdOutlineLock color="hsl(180, 98%, 31%)" size={26} />
              BASIC
            </h2>
            <p className="text-gray-900 text-base font-light md:text-xl">The tools you need for core protection.</p>
          </div>
          <div className="text-center my-6">
            <p className="text-3xl font-medium flex items-end text-gray-800">
            {currency} {(pricing.BASIC[activeTab] * exchangeRate).toFixed(2) }
              <span className="text-lg pb-1 text-gray-700">/{activeTab === 'monthly' ? 'month' : 'year'}</span>
            </p>
            <p className='text-start px-1 font-medium text-gray-500 pb-3'>
              {/* same as ₹{pricing.BASIC[activeTab]/12}/{activeTab === 'monthly' ? 'day' : 'month'} */}
            </p>
            <Link to="/signup" className="hover:text-white hover:bg-viridianGreen hover:font-[400] font-[500] w-full py-[8px] border-[2px] border-viridianGreen border-solid rounded-md bg-transparent text-black sm:text-md text-xl">
              Buy now
            </Link>
          </div>
          <List items={points} childStyle="text-[16px] font-[500] text-gray-700" />
        </div>

        {/* COMPLETE Package */}
        <div className="relative w-[35%] hidden md:block border rounded-xl p-8 bg-blue-900/90 hover:shadow-xl transition-shadow duration-300 mb-10">
          <div className="absolute top-[-14px] left-3/4 transform -translate-x-3/4 bg-yellow-500 text-black text-sm font-medium rounded px-3 py-0.5 whitespace-nowrap">
            MOST POPULAR
          </div>
          <div className="mb-6 border-b">
            <h2 className="text-xl font-semibold text-white mb-2 flex gap-2"> 
              <GoShieldCheck color="hsl(180, 98%, 31%)" size={26} />
              COMPLETE
            </h2>
            <p className="text-white text-base font-light md:text-xl">Advanced safety features with full customization.</p>
          </div>
          <div className="text-center my-6">
            <p className="text-3xl font-medium flex items-end text-white">
            {currency} {(pricing.COMPLETE[activeTab] * exchangeRate).toFixed(2)}
              <span className="text-lg pb-1 text-white">/{activeTab === 'monthly' ? 'month' : 'year'}</span>
            </p>
            <p className='text-start px-1 font-medium text-white pb-3'>
              {/* same as ₹{pricing.COMPLETE[activeTab]}/{activeTab === 'monthly' ? 'day' : 'month'} */}
            </p>
            <Link to="/signup" className="hover:text-white hover:bg-viridianGreen hover:font-[400] font-[500] w-full py-[8px] border-[2px] border-solid rounded-md bg-white text-black sm:text-md text-xl">
              Buy now
            </Link>
          </div>
          <List items={points1} childStyle="text-[16px] font-[500] text-white" />
        </div>
      </div>

      <Carousel {...sliderParams} className="w-full py-5 flex">
        {/* Carousel Mobile BASIC Package */}
        <div className="md:hidden w-full relative border border-gray-200 rounded-xl p-8 bg-white hover:shadow-xl transition-shadow duration-300 mb-10">
          <div className="mb-6 border-b">
            <h2 className="text-xl font-semibold text-gray-700 mb-2 flex gap-2"> 
              <MdOutlineLock color="hsl(180, 98%, 31%)" size={26} />
              BASIC
            </h2>
            <p className="text-gray-900 text-base font-light md:text-xl">The tools you need for core protection.</p>
          </div>
          <div className="text-center my-6">
            <p className="text-3xl font-medium flex items-end text-gray-800">
            {currency} {(pricing.BASIC[activeTab] * exchangeRate).toFixed(2)} 
              <span className="text-lg pb-1 text-gray-700">/{activeTab === 'monthly' ? 'month' : 'year'}</span>
            </p>
            
            <Link  to="/signup" className="hover:text-white hover:bg-viridianGreen hover:font-[400] font-[500] w-full py-[8px] border-[2px] border-viridianGreen border-solid rounded-md bg-transparent text-black sm:text-md text-xl">
              Buy now
            </Link>
          </div>
          <List items={points} childStyle="text-[16px] font-[500] text-gray-700" />
        </div>

        {/* Carousel Mobile COMPLETE Package */}
        <div className="md:hidden w-full relative border border-gray-200 rounded-xl p-8 bg-white hover:shadow-xl transition-shadow duration-300 mb-10">
          <div className="absolute top-[-14px] left-3/4 transform -translate-x-3/4 bg-yellow-500 text-black text-sm font-medium rounded px-3 py-0.5 whitespace-nowrap">
            MOST POPULAR
          </div>
          <div className="mb-6 border-b">
            <h2 className="text-xl font-semibold text-gray-700 mb-2 flex gap-2"> 
              <GoShieldCheck color="hsl(180, 98%, 31%)" size={26} />
              COMPLETE
            </h2>
            <p className="text-gray-900 text-base font-light md:text-xl">Advanced safety features with full customization.</p>
          </div>
          <div className="text-center my-6">
            <p className="text-3xl font-medium flex items-end text-gray-800">
              {currency} {(pricing.COMPLETE[activeTab] * exchangeRate).toFixed(2)}
              <span className="text-lg pb-1 text-gray-700">/{activeTab === 'monthly' ? 'month' : 'year'}</span>
            </p>
            
            <Link  to="/signup" className="hover:text-white hover:bg-viridianGreen hover:font-[400] font-[500] w-full py-[8px] border-[2px] border-viridianGreen border-solid rounded-md bg-transparent text-black sm:text-md text-xl">
              Buy now
            </Link>
          </div>
          <List items={points1} childStyle="text-[16px] font-[500] text-gray-700" />
        </div>
      </Carousel>

      <div className='flex justify-center w-full'>
        <p className='w-[85%] text-center md:w-4/6 text-[14px] leading-1'>* Calls & messages for iOS requires a Windows or Mac computer. Unlimited includes your family devices and does not apply to schools or businesses. Offer valid until September 30, 2024 on 1-year plans only.</p>
      </div>  
    </div>
  );
};

export default Package;

