import React, { useState,  useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import  Icon1  from "../assets/Icons"
import  Icon2  from "../assets/Icon2"
import  Icon3  from "../assets/Icon3"
import  Icon4  from "../assets/Icon4"
import { TbLetterG } from "react-icons/tb";
import { FaPersonChalkboard } from "react-icons/fa6";
import { MdDevices } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaLaptop } from "react-icons/fa";

function Help() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState('Family');
  const Family = [
    { id: 1, icon: TbLetterG , title: 'My GuadrMyKid Account', details: 'Everything you need to manage your account and subscription', img: 'https://via.placeholder.com/150' },
    { id: 2, icon: FaPersonChalkboard , title: " Kids' Android, Kindle & Chromebook", details: "Guides to setting up protection on your children's Android devices", img: 'https://via.placeholder.com/150' },
    { id: 3, icon: FaPersonChalkboard , title: "Parents' features", details: "How to balance screen time, filter content, and view activity reports", img: 'https://via.placeholder.com/150' },
    { id: 4, icon: MdDevices , title: "Kids' iOS (iPhone, iPad & iPod Touch)", details: "Guides to setting up protection on your children's OS devices", img: 'https://via.placeholder.com/150' },
    { id: 5, icon: IoIosPhonePortrait , title: "Parents' customization", details: "How to customize Safekidly features to supervise your family", img: 'https://via.placeholder.com/150' },
    { id: 6, icon: FaLaptop , title: "Kids' computers (Windows & Mac)", details: "Guides to setting up protection on your children's computers", img: 'https://via.placeholder.com/150' },
  ];

  const Schools = [
    { id: 1, icon: FaPersonChalkboard , title: "For parents", details: "Guides for parents invited to use Safekidly by their school", img: 'https://via.placeholder.com/150' },
    { id: 2, icon: FaLaptop , title: "For administrators", details: "Guades to setting up Safekidly Professional on your devices", img: 'https://via.placeholder.com/150' }
  ];
  const renderCards = (items) => {
    return items.map(item => (
      <div key={item.id} className="text-center bg-white text-gray-700 flex flex-col justify-center items-center m-8 py-8 px-6 rounded-lg shadow-lg hover:border-2 hover:border-blue-500">
          < item.icon className="w-20 h-20 p-4 object-cover rounded-lg bg-gray-200" /> 
        <h2 className="text-lg font-medium my-4">{item.title}</h2>
        <p className='text-sm'>{item.details}</p>
      </div>
    ));
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', query);
  };
  return (
    <div className='container mx-auto bg-green-50 rounded-b-xl'>
      <div className='text-center pt-12 pb-6 mt:pt-0 md:pb-0 md:py-16'>
        <p className='text-3xl text-gray-700'>How can we help?</p>
        <form onSubmit={handleSearch} className="mt-10 flex justify-center  ">
          <div className="relative flex justify-start border rounded mx-10 w-full md:w-3/4">
            <input
              type="text"
              value={query}
              onChange={handleChange}
              placeholder="Search..."
              className="border border-gray-300 rounded pl-16  py-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute left-3 top-2 pl-2 text-gray-400">
              <FaSearch size={30} className='my-1' />
            </span>
          </div>
        </form>
      </div>
      <div className="p-4">
        <div className="flex justify-center w-full text-[20px] gap-1  mb-4">
          <button
            className={`py-2 px-4 rounded-lg ${activeTab === 'Family' ? "text-blue-500 border border-gray-300" : 'text-gray-700'}`}
            onClick={() => setActiveTab('Family')}
          >
            Family
          </button>
          <button
            className={`py-2 px-4 rounded-lg ${activeTab === 'Schools' ? 'text-blue-500 border border-gray-300' : 'text-gray-700'}`}
            onClick={() => setActiveTab('Schools')}
          >
            Schools
          </button>
        </div>
        <div className="grid items-center grid-cols-1 md:grid-cols-3 md:gap-4">
          {activeTab === 'Family' ? renderCards(Family) : renderCards(Schools)}
        </div>
      </div>
      <div className='w-full text-start text-gray-700 px-12 my-12'>
        <p className='text-2xl font-bold py-10'>Promoted articles</p>
        <div className='flex flex-col md:flex-row w-full gap-4 '>
          <a className='md:w-4/12 hover:text-blue-500 hover:underline'>Safekidly system requirements and supported platforms</a>
          <a className='md:w-4/12 hover:text-blue-500 hover:underline'>What is Safekidly and what can I do with it?</a>
          <a className='md:w-4/12 hover:text-blue-500 hover:underline'>How to install Safekidly on a device</a>
        </div>
        <div className='flex flex-col md:flex-row w-full gap-4 py-4'>
          <a className='md:w-4/12 hover:text-blue-500 hover:underline'>What is YouTube Monitoring and what does it do?</a>
          <a className='md:w-4/12 hover:text-blue-500 hover:underline'>What is Safekidly Family Locator and how do I use it?</a>
          <a className='md:w-4/12 hover:text-blue-500 hover:underline'>What do Lock Navigation and Lock Device mean for time limits on each platform?</a>
        </div>
      </div>
      <div>
        <div className='mt-10'>
        <img src="https://help.qustodio.com/hc/theming_assets/01HZM9106ZDVDGRNK563824JNC" className='scale-100' />
        <div className='bg-gray-100 flex flex-col justify-center items-center md:mt-0' >
          <p className='text-2xl font-semibold'>Can't find what you're looking for?</p>
          <p className=''>Try our quick links</p>
        </div>
        <div className='flex mx-auto text-center bg-gray-100 py-16 justify-evenly'>
          <div className=' flex flex-col items-center justify-center '>
          <Icon1/>
          <p className='text-lg font-semibold py-2'>Gt in touch</p>
          </div>
          <div className=' flex flex-col items-center justify-center '>
          <Icon2/>
          <p className='text-lg font-semibold py-2 '>Billing issues</p>
          </div>
          <div className=' flex flex-col items-center justify-center '>
          <Icon3/>
          <p className='text-lg font-semibold py-2 '>Subscriptions</p>
          </div >
          <div className=' flex flex-col items-center justify-center '>
          <Icon4/>
          <p className='text-lg font-semibold py-2'>Technical issues</p>
          </div>
        </div>
        </div>
      </div>

    </div>
  )
}

export default Help