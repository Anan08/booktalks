import React from 'react';
import Hero from '../components/Hero';
import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <div className='p-6 flex justify-center bg-gray-100 h-screen'>
        <Hero/>
        <Outlet/>      
    </div>
  )
}

export default Home