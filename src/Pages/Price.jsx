import React, { useEffect } from 'react'
import { SectionContainer } from '../components/common/SectionContainer'
import PriceCard from '../components/PriceCard'
import AvailableFor from "../components/common/AvailableFor"
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import { MdOutlineLock } from "react-icons/md";
import { GiShieldBash } from "react-icons/gi";
import { GoShieldCheck } from "react-icons/go";
import { GiCheckMark } from "react-icons/gi";
import { FaMinus } from "react-icons/fa6";
import { MdBalance } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import Testimonial from  "../components/Testimonial"
import Feature from  "../components/Feature"
import { MdOutlineDevices } from "react-icons/md";
import Faq from '../components/Faq';



function Price() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const List = ({ items = [], childStyle }) => (
    <ul className={`list-none p-0 m-0 ${childStyle}`}>
      {items.map(({ text, Basic, advance }, i) => (
        <li key={i} className='flex justify-between w-full border-b py-2'>
          <p className='w-1/2 text-[14px] md:text-[18px] md:pl-12'>
            {text}
          </p>
          <div className="mr-2 w-1/2 text-green-500 flex justify-between">
            <div className=' pl-16 flex items-center'>
              {Basic ? < GiCheckMark  className='text-base md:text-xl' /> : < FaMinus  className='text-base md:text-xl text-gray-500' /> }
            </div>
            <div className='w-1/4'>
            < GiCheckMark  className='text-base md:text-xl' />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
  
  const safety = [
    {
      id: 1,
      text: 'Safe Search',
      Basic: true,
      advance:true
    },
    {
      id: 2,
      text: 'Web filtering',
      Basic: true,
      advance:true
    },
    {
      id: 3,
      text: 'Games & apps blocking',
      Basic: true,
      advance:true
    },
    {
      id: 4,
      text: 'Web activity alerts',
      Basic: false,
      advance:true
    },
    {
      id: 5,
      text: 'Blocked website alerts',
      Basic: false,
      advance:true
    },
    {
      id: 6,
      text: 'AI-powered search alerts',
      Basic: false,
      advance:true
    }
    
    
  ]
  const balance = [
    {
      id: 1,
      text: 'Daily time limits',
      Basic: true,
      advance:true
    },
    {
      id: 2,
      text: 'Pause internet access',
      Basic: true,
      advance:true
    },
    {
      id: 3,
      text: 'Device blocking routines',
      Basic: true,
      advance:true
    },
    {
      id: 4,
      text: 'Custom app & website rules routines',
      Basic: false,
      advance:true
    },
    {
      id: 5,
      text: 'Games & apps time limits',
      Basic: false,
      advance:true
    }
  ]
  const visibility = [
    {
      id: 1,
      text: '30-day activity reports',
      Basic: true,
      advance:true
    },
    {
      id: 2,
      text: 'Panic button*',
      Basic: true,
      advance:true
    },
    {
      id: 3,
      text: 'App download alerts',
      Basic: true,
      advance:true
    },
    {
      id: 4,
      text: 'YouTube monitoring',
      Basic: false,
      advance:true
    },
    {
      id: 5,
      text: 'Calls & messages monitoring*',
      Basic: false,
      advance:true
    },
  ]
  const location = [
    {
      id: 1,
      text: 'Location monitoring',
      Basic: true,
      advance:true
    },
    {
      id: 2,
      text: 'Saved places alerts',
      Basic: false,
      advance:true
    }
  ]
  const Support = [
    {
      id: 1,
      text: 'Premium email support',
      Basic: true,
      advance:true
    },
    {
      id: 2,
      text: 'Care Plus *',
      Basic: false,
      advance:true
    },

  ]

        
  return (
    <>
        < PriceCard />
        <div className='container mx-auto px-4'>


        <div className='px-4 md:px-0 w-full flex flex-col gap-3 justify-center items-center'>
          <p className='text-xs'>AvailableFor:</p>
          <img width={400} src='https://www.qustodio.com/wp-content/themes/Divi-child/assets/dist/svg/blocks/planbox-b/device-list.svg'/>
        </div>
        <div className='py-16'>
          <p className='text-center text-gray-700 text-2xl md:text-4xl font-bold'>Learn more about what's included</p>
        </div>
        <div className='w-full text-center flex '>
          <div className='w-1/2'></div>
          <div className='w-1/2 flex justify-between md:pr-16 pl-8 px-2'>
            <div className='md:flex justify-end items-end md:gap-2 '>
              < MdOutlineLock color="hsl(180, 98%, 31%)"  className='bg-green-100 rounded-full p-1 text-3xl md:text-4xl'  />
              <p className='text-[12px] md:text-[20px] font-medium'>BASIC</p>
            </div>
            <div className='md:flex justify-end items-end gap-2  ' >
              <p className='w-full flex justify-center'>
              < GoShieldCheck  color="hsl(180, 98%, 31%)" className='bg-green-100 rounded-full p-1 text-3xl md:text-4xl  ' />
              </p>
              <p className=' text-[12px] md:text-[20px] font-medium'>COMPLETE</p>
            </div>
          </div>
        </div>
        <div >
          <div className='flex justify-items-start items-start pb-2 border-gray-600 border-b-2'>
            <div className=' flex justify-end items-end  gap-2 md:gap-4 md:md:pl-12 '>
              <GiShieldBash  color='text-gray-600' className='text-2xl md:text-4xl'/>
              <p className='text-[18px] md:text-[22px] font-medium text-gray-700 '>Safety</p>
            </div>
          </div>
          <div className='py-2'>
            <List items={safety} childStyle="text-[16px] font-[500] text-gray-700" />
          </div>
          <div className='flex justify-items-start items-start pt-4 pb-2 border-gray-600 border-b-2'>
            <div className=' flex justify-end items-end  gap-2 md:gap-4 md:pl-12 '>
              <MdBalance  color='text-gray-600' className='text-2xl md:text-4xl' />
              <p className='text-[18px] md:text-[22px] font-medium text-gray-700 '>Balance</p>
            </div>
          </div>
          <div className='py-2'>
            <List items={balance} childStyle="text-[16px] font-[500] text-gray-700" />
          </div>
          <div className='flex justify-items-start items-start pt-4 pb-2 border-gray-600 border-b-2'>
            <div className=' flex justify-end items-end  gap-2 md:gap-4 md:pl-12 '>
              <MdNotificationsNone  color='text-gray-600' className='text-2xl md:text-4xl'  />
              <p className='text-[18px] md:text-[22px] font-medium text-gray-700 '>Visibility</p>
            </div>
          </div>
          <div className='py-2'>
            <List items={visibility} childStyle="text-[16px] font-[500] text-gray-700" />
          </div>
          <div className='flex justify-items-start items-start pt-4 pb-2 border-gray-600 border-b-2'>
            <div className=' flex justify-end items-end gap-2 md:gap-4 md:pl-12 '>
              < MdOutlineLocationOn color='text-gray-600' className='text-2xl md:text-4xl'  />
              <p className='text-[18px] md:text-[22px] font-medium text-gray-700 '>Location</p>
            </div>
          </div>
          <div className='py-2'>
            <List items={location} childStyle="text-[16px] font-[500] text-gray-700" />
          </div>
          <div className='flex justify-items-start items-start pt-4 pb-2 border-gray-600 border-b-2'>
            <div className=' flex justify-end items-end  gap-2 md:gap-4 md:pl-12 '>
              <BiSupport color='text-gray-600' className='text-2xl md:text-4xl'  />
              <p className='text-[18px] md:text-[22px] font-medium text-gray-700 '>Support</p>
            </div>
          </div>
          <div className='py-2'>
            <List items={Support} childStyle="text-[16px] font-[500] text-gray-700" />
          </div>
          <div className='flex flex-col justify-items-start items-start pt-4 pb-2 border-gray-600 border-b-2'>
            <div className=' flex justify-between w-full'>
              <div className='flex justify-start items-start gap-2 md:gap-4 md:pl-12 w-1/2'>
                <MdOutlineDevices color='text-gray-600' className='text-2xl md:text-4xl'  />
                <p className='text-[18px] md:text-[22px] font-medium text-gray-700 '>Coverage</p>
              </div>
              <div className='hidden md:block flex justify-end items-end gap-4 md:pl-12 w-1/2'>
                <p className='text-[18px] font-medium text-gray-700 '>Up to 5 devices protected</p>
                <p className='text-[18px] font-medium text-gray-700 '>Unlimited devices protected*</p>
              </div>
            </div>
          </div>
              <div className='md:hidden flex justify-end items-end gap-4 md:pl-12 w-full pt-2'>
                <p className='text-[14px] font-medium text-gray-700 w-4/6'>Devices protected</p>
                <p className='text-[14px] flex justify-between font-medium text-gray-700 w-2/6'><span>5</span><span>Unlimited*</span></p>
              </div>
            <p className='text-[12px] pt-8 md:pt-0'>* Panic button is only available for Android. Calls & messages for iOS requires a Windows or Mac computer. Unlimited includes your family devices and does not apply to schools or businesses. Care Plus is available upon request.</p>
        </div>
        < Testimonial/>
        < Feature />
        <Faq />
        </div>
    </>
  )
}

export default Price