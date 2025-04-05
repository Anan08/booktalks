import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    try {
      const response = await fetch('http://localhost:5050/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)});
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        };
        window.location.href = '/home';
    } catch (error) {
      console.error('Error:', error);
    }
  }
  return (
    <div className='p-6 flex items-center justify-center h-screen bg-gray-100'>
      <div className='flex space-x-3 w-full'>
        <div className='bg-white font-dm_sans h-[550px] w-[50%] rounded-xl shadow-md p-10'>
            <div className='flex space-x-5 h-full items-center flex-col text-gray-800 font-dm p-10 w-full'>
              <h1 className='font-bold text-2xl text-gray-800 font-dm'>BookTalks</h1>
              <h1 className='font-bold text-lg text-lime-500 my-5'>Login</h1>
              <div className='w-full'>
                <form action="/register/{id}" method="POST" className='flex flex-col space-y-5' onSubmit={handleSubmit}>
                  <div className='text-sm w-full active: border-blue-300'>    
                    <p className='font-medium'>Username</p>
                    <input type="text" name="username" placeholder="" className='p-2 rounded-xl w-full bg-gray-100' required/>
                    <p className='font-medium'>Password</p>
                    <input type="password" name="password" placeholder="Password" className='p-2 rounded-xl w-full bg-gray-100' required/>
                  </div>
                  <div className='flex space-x-3'>
                    <button type='submit' className='p-2 bg-lime-400 rounded-2xl w-[50%] hover:cursor-pointer hover:bg-lime-700 transition-all ease-in-out hover:scale-105'>Sign Up</button>
                    <Link to="/" type='button' className='text-center p-2 rounded-2xl w-[50%] shadow-md hover:cursor-pointer hover:bg-red-200 transition-all ease-in-out hover:scale-105'>Cancel</Link>
                  </div>
                </form>
              </div>
            </div>
        </div>
        <div className={`bg-gray-800 font-dm_sans h-[550px] w-[50%] rounded-xl shadow-md p-5 bg-cover bg-center hover:bg-opacity-50 bg-opacity-70 hover:cursor-pointer`}
        style={{backgroundImage : `url("/background/john.jpg")`}}>
          <div>
              <div className='flex space-x-5 h-full '>

              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login