import React from 'react'
import Image from 'next/image'
import img1 from '@/imgs/img1.jpg'
import Navbar from '@/components/Navbar'
import Transition from '@/components/transition'

const Art = () => {
  return (
    <div>
        <Transition />
        <Navbar />
        <div>
        <div className="h-screen w-full flex items-center justify-center absolute top-0 -z-20">
    <div className='basis-1/2 h-[80%] bg-blue-40 flex flex-col items-center justify-center'>
      <h1 className='text-6xl font-bold text-center '>More's Art Gallery</h1>
      <p className='text-2xl text-center'>Welcome to More's Art Gallery a diaplay or momores art</p>
      <p> this is a talk about what ever this picture is </p>
    </div>
    <div className='basis-1/2 h-[80%]'>
      <Image className='w-full h-full' src={img1}  />
    </div>
        </div>
        </div>
    </div>
  )
}

export default Art