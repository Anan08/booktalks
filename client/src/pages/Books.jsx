import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const books = [{
    name : "Tale Beyond the tomb",
    image : "/placeholder/reader.jpg",
    author : "John Doe",
    duration : "2h 30m",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    link : "/audio/tales.mp3"
},{
    name : "The Lost City",
    image : "/placeholder/reader.jpg",
    author : "John Doe",
    duration : "2h 30m",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    link : "/audio/tales.mp3"
},{
    name : "The Lost City",
    image : "/placeholder/reader.jpg",
    author : "John Doe",
    duration : "2h 30m",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    link : "/audio/tales.mp3"
},{ 
    name : "The Lost City",
    image : "/placeholder/reader.jpg",
    author : "John Doe",
    duration : "2h 30m",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    link : "/audio/tales.mp3"
}];

const Books = () => {
    const [audio, setAudio] = useState(null)
    const [background, setBackground] = useState("/background/john.jpg");
    const playAudio = (id) => {
        if (audio) {
            audio.pause();
            setAudio(null);
        } else {
            const newAudio = new Audio("/placeholder/audio.mp3");
            newAudio.play();
            setBackground(books[id].image);
            setAudio(newAudio);
        }
    }

  return (
    <div className='p-6 bg-gray-100'>
        <div className='flex space-x-3 w-full'>
        <div className='bg-white font-dm_sans h-[550px] w-[50%] rounded-xl shadow-md p-10'>
            <div>
            <div className='flex space-x-5 h-full '>
                <Link to={"/"} className='flex items-center space-x-2'>
                    <h1 className='text-lg font-bold text-gray-800 font-dm'>BookTalks</h1>
                </Link>
                <input type="text" placeholder='Search Book..' className='bg-gray-100 px-3 rounded-xl text-sm w-[100%] active:border-blue-300'/>
            </div>
            <div className='my-20 flex flex-col overflow-scroll h-[400px] pr-14'>
                {books.map((book, index) => (
                    <button key={index} onClick={() => playAudio(index)} className='my-2 space-x-5 flex justify-start items-center border-b p-3 border-b-lime-300 hover:cursor-pointer hover:bg-lime-100 hover:scale-105 transition-all duration-300 ease-in-out'>
                        <img src={book.image} className='rounded-full w-10 h-10 object-cover '/>
                        <div className='flex justify-between w-full items-center '>
                            <div className='text-left w-full'>
                                <h1 className='text-sm text-gray-800 font-dm'>{book.name}</h1>
                                <h1 className='text-sm text-gray-400 font-dm'>{book.author}</h1>
                            </div>
                            <h1 className='text-sm text-gray-400'>{book.duration}</h1>
                        </div>
                    </button>
                ))}
            </div>
            </div>
        </div>
        <div className={`bg-gray-800 font-dm_sans h-[550px] w-[50%] rounded-xl shadow-md p-5 bg-cover bg-center hover:bg-opacity-50 bg-opacity-70 hover:cursor-pointer`}
        style={{
            backgroundImage : `url(${background})`
        }}>
            <div>
            <div className='flex space-x-5 h-full '>

            </div>
            </div>
        </div>
        <Outlet/>
        </div>
    </div>
  )
}


export default Books