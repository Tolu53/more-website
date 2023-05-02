import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='top-0 absolute bg-black h-12 w-full flex justify-center items-center -z-10 '>
        <Link href="Hero" className='text-white hover:scale-110 duration-700 active:scale-90'> Home </Link>
    </div>
  )
}

export default Navbar