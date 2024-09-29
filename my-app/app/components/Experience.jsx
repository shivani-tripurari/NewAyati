"use client";

import {motion,AnimatePresence} from 'framer-motion';
import React from 'react'
import Image from 'next/image';
import img3 from '../assets/ayati3.jpg'
import './exp.css';
const Experience = () => {
  return (
    <>
    <div className='h-[112vh] md:h-[90vh] lg:h-[112vh] w-[100%] exp-sec'>
        <div className='p-4 block md:flex md:justify-between md:items-center lg:flex lg:justify-between lg:items-center lg:p-20'>
            <div className='ml-7'>
                <p className='text-base md:text-lg lg:text-xl'>Who we are</p>
                <h1 className='text-3xl text-[#1B3540] md:text-3xl lg:text-7xl'>WE USE TRADITION <br/>
                 TO BREAK IT.</h1>
            </div>
            <div className='mr-0 ml-64 mt-7 md:mt-11 lg:mt-11 lg:mr-7'>
                <h3 className='text-3xl md:text-4xl lg:text-7xl'>15+</h3>
                <p className='text-base md:text-lg lg:text-xl'>Years of experience</p>
            </div>
        </div>
        <div className='block relative md:flex lg:flex justify-center items-center'>
            <motion.div 
                initial={{x:20, opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{ease:'easeInOut', duration:0.75}}
                className='absolute top-[-2rem] z-10 p-7 h-[25rem] w-full md:w-3/5 lg:w-1/2 lg:left-28'>
                <Image src={img3}/>
            </motion.div>
            <div className='absolute top-96 pt-20 p-7 pb-10 bg-[#1B3540] w-full lg:w-2/3 lg:top-[-4rem] lg:right-0 lg:pl-36'>
                <h1 className='text-[#FBBC89]  text-3xl md:text-4xl lg:text-5xl'>Resilient in a constantly 
                    <br/>evolving world.</h1>
                <h3 className='pt-4 text-base text-white md:text-xl lg:text-xl'>We are committed to delivering absolute client satisfaction while increasing shareholder value by building on what we're best at - creative designs, sustainable construction, timely completion, and quality craftsmanship.</h3>
            </div>
            {/* <div>
                <h3 className='text-[#1B3540] absolute z-50 bottom-0'>KNOW MORE</h3>
            </div> */}
        </div>
    </div>
    </>
  )
}

export default Experience
