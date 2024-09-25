import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function Help() {
  
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState('fruits');
  const fruits = [
    { id: 1, title: 'My GuadrMyKid Account', details: 'Everything you need to manage your account and subscription', img: 'https://via.placeholder.com/150' },
    { id: 2, title: " Kids' Android, Kindle & Chromebook", details: "Guides to setting up protection on your children's Android devices", img: 'https://via.placeholder.com/150' },
    { id: 3, title: "Parents' features", details: "How to balance screen time, filter content, and view activity reports", img: 'https://via.placeholder.com/150' },
    { id: 4, title: "Kids' iOS (iPhone, iPad & iPod Touch)", details: "Guides to setting up protection on your children's OS devices", img: 'https://via.placeholder.com/150' },
    { id: 5, title: "Parents' customization", details: "How to customize Qustodio's features to supervise your family", img: 'https://via.placeholder.com/150' },
    { id: 6, title: "Kids' computers (Windows & Mac)", details: "Guides to setting up protection on your children's computers", img: 'https://via.placeholder.com/150' },
  ];

  const vegetables = [
    { id: 1, title: "For parents", details: "Guides for parents invited to use Qustodio by their school", img: 'https://via.placeholder.com/150' },
    { id: 2, title: "For administrators", details: "Guades to setting up Qustodio Professional on your devices", img: 'https://via.placeholder.com/150' }
  ];
  const renderCards = (items) => {
    return items.map(item => (
      <div key={item.id} className="text-center text-gray-700 flex flex-col justify-center items-center m-8 py-4 px-6 rounded-lg shadow-lg">
        <img src={item.img} alt={item.title} className="w-24 h-24 object-cover rounded-lg" />
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
    <div className='container mx-auto'>
      <div className='text-center py-16'>
        <p className='text-3xl text-gray-700'>How can we help?</p>
        <form onSubmit={handleSearch} className="mt-10 flex justify-center  ">
          <div className="relative flex justify-start border rounded w-3/4">
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
        <div className="flex justify-center w-full text-[20px] gap-1 border border-gray-300 mb-4">
          <button
            className={`py-2 px-4 rounded-lg ${activeTab === 'fruits' ? "text-blue-500 border border-gray-300" : 'text-gray-700'}`}
            onClick={() => setActiveTab('fruits')}
          >
            Family
          </button>
          <button
            className={`py-2 px-4 rounded-lg ${activeTab === 'vegetables' ? 'text-blue-500 border border-gray-300' : 'text-gray-700'}`}
            onClick={() => setActiveTab('vegetables')}
          >
            Schools
          </button>
        </div>
        <div className="grid items-center grid-cols-1 md:grid-cols-3 gap-4">
          {activeTab === 'fruits' ? renderCards(fruits) : renderCards(vegetables)}
        </div>
      </div>
      <div className='w-full text-start text-gray-700'>
        <p className='text-2xl font-bold py-10'>Promoted articles</p>
        <div className='flex w-full gap-4 '>
          <a className='w-4/12 hover:text-blue-500 hover:underline'>Qustodio system requirements and supported platforms</a>
          <a className='w-4/12 hover:text-blue-500 hover:underline'>What is Qustodio and what can I do with it?</a>
          <a className='w-4/12 hover:text-blue-500 hover:underline'>How to install Qustodio on a device</a>
        </div>
        <div className='flex w-full gap-4 py-4'>
          <a className='w-4/12 hover:text-blue-500 hover:underline'>What is YouTube Monitoring and what does it do?</a>
          <a className='w-4/12 hover:text-blue-500 hover:underline'>What is Qustodio's Family Locator and how do I use it?</a>
          <a className='w-4/12 hover:text-blue-500 hover:underline'>What do Lock Navigation and Lock Device mean for time limits on each platform?</a>
        </div>
      </div>

    </div>
  )
}

export default Help