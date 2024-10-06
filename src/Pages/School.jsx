import React from 'react'
import { SectionContainer } from '../components/common/SectionContainer'
import { FaUserShield } from "react-icons/fa";

function School() {
  return (
    <div className='text-gray-700 mt-10'>
        <SectionContainer>
            <div className=' p-4 md:p-10  text-center '>
                <h1 className='font-extrabold text-3xl md:text-5xl md:px-10'>Seamless <span className='text-viridianGreen  inline md:leading-[4rem]'>digital safety for kids</span> at home, at school and everywhere in between</h1>
                <p className=' pt-10 md:pt-20 font-medium text-gray-700 text-xl leading-7'>With technology an integral part of kids’ daily lives, online safety and healthy digital habits are built at school as well as at home.<span className='inline font-extrabold text-gray-900 '>That’s why we’re excited to be a part of the Qoria group,</span>  working towards connecting families with schools through next-generation features and services.</p>
            </div>
        <div className='bg-gray-100 text-center flex flex-col justify-center items-center my-10 pb-16'>
            <img 
            className=''
                src='https://static.qustodio.com/public-site/uploads/2023/09/28060504/img-hero-schools%402x.png'
            />
            <h1 className='text-2xl md:text-3xl font-bold pt-16'>Protecting every child’s digital journey</h1>
            <h6 className='text-lg md:text-xl font-semibold py-4'>Qoria provides the world’s most comprehensive suite of child digital safety and wellbeing solutions.</h6>
            <p className='text-lg md:w-3/4 font-medium '>They include pioneering, real-time technologies, advanced reporting and education and training programmes delivered by world-leading experts.</p>
        </div>
        <div className='md:flex md:p-10'>
            <div className='md:px-10 py-2 md:py-20'>
                <p className="text-4xl md:text-xl flex md:flex-row justify-center md:justify-start items-center flex-col gap-6 lg:text-4xl font-bold mt-8">
                < FaUserShield className='' />
                Our joint mission
                </p>
                <p className="text-xl pl-16 lg:text-xl font-medium mt-1 py-6">
                    Help schools, educators and parents collaborate in building healthy digital habits and safe online environments.
                </p>
            </div>
            <div>
                <img
                src='https://static.qustodio.com/public-site/uploads/2023/09/28062016/img-mission%402x.png' 
                />
            </div>
        </div>
        <div className='flex md:flex-row flex-col md:px-10 md:py-20 bg-gray-100 rrounded-xl'>
            <div className='text-center md:hidden'>
                <p className="text-xl pl-16 lg:text-xl font-medium mt-1 py-6">
                Our global network of products and services such as Linewize, Smoothwall, Monitor and Pulse, alongside with GuardMyKids provide uninterrupted digital safety to more than 27,000 schools and 23 million students worldwide.
                </p>
            </div>
            <div className='md:w-4/5'>
                <img
                src='https://static.qustodio.com/public-site/uploads/2024/08/02080953/img_23million_kid.webp' 
                />
            </div>
            <div className='px-10 py-20 hidden md:block'>
                <p className="text-xl pl-16 lg:text-xl font-medium mt-1 py-6">
                Our global network of products and services such as Linewize, Smoothwall, Monitor and Pulse, alongside with GuardMyKids provide uninterrupted digital safety to more than 27,000 schools and 23 million students worldwide.
                </p>
            </div>
        </div>
        <div className='text-center py-16 flex flex-col justify-center items-center'>
            <h1 className='font-bold text-2xl md:text-4xl md:w-2/5'>Working together to <span className='text-viridianGreen  inline leading-8'>connect</span> schools and parents</h1>
            <p className='pt-4 pb-16 text-xl md:text-2xl tracking-widest'>A NEW CHAPTER IN ONLINE SAFETY</p>
            <img

            className='md:w-[80%]'
            src='https://static.qustodio.com/public-site/uploads/2023/09/28063955/collage-schools%402x.png'
            />
            <div className='bg-green-100 text-start text-lg rounded-xl px-4 md:px-16 py-6 md:py-10 w-full flex flex-col gap-4'>
                <p> <span className='inline font-bold '>GuardMyKids and Qoria safety platform Linewize are now integrated </span> to provide schools the tools they can share with parents for visibility over their child’s school devices outside of school hours.</p>
                <p>Our goal is to connect the educational community around each child and provide tools to schools and parents that will help them to {" "} <span className='font-bold inline text-blue-600'> create a positive digital environment.</span></p>
            </div>
        </div>
        <div className='text-center flex flex-col items-center md:py-10'>
            <h1 className=' text-xl md:text-3xl md:w-2/4 font-bold '> In participating schools powered by Linewize, parents now can: </h1>
            <div className='w-[90%] flex flex-col gap-10 py-10 md:py-20'>
                <div className='flex flex-col md:flex-row gap-10'>
                    <div className='flex flex-col md:flex-row justify-center items-center shadow-all-directions rounded-xl px-2 py-6 md:py-0   md:w-1/2'>
                        <img
                        className='w-60 h-52 p-4 '
                        src='https://static.qustodio.com/public-site/uploads/2022/11/15134435/group-2%403x-1.png' />
                        <p className=' px-4 text-2xl font-bold '>Access reports on school device activity</p>
                    </div>
                    <div className='flex flex-col md:flex-row justify-center items-center shadow-all-directions rounded-xl px-2 py-6 md:py-0   md:w-1/2'>
                        <img
                        className='w-40 p-2'
                        src='https://static.qustodio.com/public-site/uploads/2022/11/15140827/group-65-copy%403x-1.png' />
                        <p className=' py-6 px-4 text-2xl font-bold'>Control school devices when they are at home</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-10'>
                    <div className='flex flex-col md:flex-row justify-center items-center shadow-all-directions rounded-xl px-2 py-6 md:py-0   md:w-1/2'>
                        <img
                        className='w-60 h-52 p-7'
                        src='https://static.qustodio.com/public-site/uploads/2022/11/15140710/group-5-3-x%403x-1.png' />
                        <p className=' px-4 text-2xl font-bold'>Receive expert advice on digital threats and trends</p>
                    </div>
                    <div className='flex flex-col md:flex-row justify-center items-center shadow-all-directions rounded-xl px-2 py-6 md:py-0  md:w-1/2'>
                        <img
                        className='w-40  p-2'
                        src='https://static.qustodio.com/public-site/uploads/2022/11/15140958/group-65-copy%403x-2.png' />
                        <p className='py-6 px-4 text-2xl font-bold'>Manage everything from a single GuardMyKids application</p>
                    </div>
                </div>
            </div>
        </div>
        </SectionContainer>
    </div>
  )
}

export default School