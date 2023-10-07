import React from 'react'

import heroImg from '../assets/pexels-zack-tu-nan-8900181.jpg'

const Hero = () => {
  return (
    <div
    className='w-full mt-32 relative flex justify-end items-center '
    >
      <div className="group absolute top-28 left-14  justify-center flex items-center bg-white rounded-sm w-96 h-72">
        <div className="group w-36 h-28 rounded-sm bg-white absolute  -right-20">

        </div>
      </div>
      <div className="group absolute bottom-0 right-0  justify-center flex items-center bg-white rounded-sm w-20 h-20">
        <button
        className=' text-violet-500 absolute left-2 rounded-full   w-32 text-xl font-medium font-Merriweather bg-lemon  px-2 py-2'
        >
          Lest goooo
        </button>
      </div>
      <img src={heroImg} alt="hero" className=' w-[70%] h-full rounded-sm object-cover'/>
    </div>
  )
}

export default Hero