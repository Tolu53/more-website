import React from 'react'
import { motion } from 'framer-motion'

const Transition = () => {
  return (
    <motion.div
    initial={{ x: "0"}}
    animate={{ x: "-100vw" }}
     className='w-full h-screen z-40 bg-red-200 top-0 absolute duration-1000'>

    </motion.div>
  )
}

export default Transition