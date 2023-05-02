import React from 'react'
import Image from 'next/image'
import img2 from '@/imgs/IMG2.jpg'
import Link from 'next/link'
import Transition from '@/components/transition'


const Hero = () => {
  return (
    <div className='w-full h-screen flex flex-col bg-slate-400 items-center justify-center'>
        <Transition />
        <h1 className='text-5xl z-30 text-white'> Welcome To Momores Art Gallery </h1>
        <Image className='w-full h-screen absolute top-0' src={img2} />
        <p className='z-30 text-xl text-white'> An artisitic journey </p>
        <Link href="Art" className='z-30 py-2 px-4 bg-black text-white rounded hover:scale-105 active:scale-90 duration-700'> 
        click here for picture</Link>
    </div>
  )
}

export default Hero