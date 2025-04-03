import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex space-x-3 w-full'>
      <div className='bg-white font-dm_sans h-[550px] w-[50%] rounded-xl shadow-md p-10'>
        <div>
          <div className='flex space-x-5 h-full '>
            <Link to={"/"} className='flex items-center space-x-2'>
              <h1 className='text-lg font-bold text-gray-800 font-dm'>BookTalks</h1>
            </Link>
            <input type="text" placeholder='Search Book..' className='bg-gray-100 px-3 rounded-xl text-sm w-fll w-[100%] active:border-blue-300'/>
          </div>
          <div className='my-20 flex flex-col'>
            <h1 className='text-xl font-thin font-dm'>/ / B   o   o   k    T   a   l   k   s</h1>
            <h1 className='text-5xl font-bold font-dm py-5'>STORIES THAT INSPIRE TO GROW</h1>
            <h1 className='text-sm font-thin py-5 text-gray-800'>Get Better and start learning with our audiobook sounds coming from our community's best of the best</h1>
            <div className='my-10 flex space-x-5'>
              <Link to="/register" className='w-full'>
                <button className='p-3 text-gray-800 bg-lime-400 rounded-2xl w-full hover:cursor-pointer hover:bg-lime-600 hover:scale-105 transition-all duration-300 ease-in-out'>
                  Get Started
                </button>
              </Link>
              <Link to="/books" className='w-full'>
                <button className='p-3 text-gray-800 border w-full border-lime-400 rounded-2xl hover:cursor-pointer hover:border-2 hover:scale-105 transition-all duration-300 ease-in-out'>
                  Explore Channel
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-800 font-dm_sans h-[550px] w-[50%] rounded-xl shadow-md p-5 bg-[url("/background/john.jpg")] bg-cover bg-center hover:bg-opacity-50 bg-opacity-70 hover:cursor-pointer'>
        <div>
          <div className='flex space-x-5 h-full '>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero