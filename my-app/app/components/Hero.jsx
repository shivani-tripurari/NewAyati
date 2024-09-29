import Image from 'next/image'
import React from 'react'
import Navbar from './Navbar'
import img1 from '../assets/ayatiHero.png'

const Hero = () => {
  return (
    <>
    <div className='relative h-[100vh] md:h-[50vh] lg:h-[100vh] w-[100%] bg-hero-pattern bg-background object-contain'>
        <Navbar/>
        <div className='absolute top-36 block mt-0 md:top-20 md:flex md:items-center md:justify-evenly lg:top-36 lg:flex lg:items-center lg:justify-evenly '>
            <div className='mr-7'>


                <h1 className='text-3xl text-[#FBBC89] ml-36 my-7 md:text-4xl lg:text-6xl'>MINDFUL

    


                <br/> AND SUSTAINABLE</h1>
                {/* <h3>Ayati Lake View</h3>
                <p>View project</p> */}
            </div>
            <div className='h-[33rem] w-full md:h-[24rem] md:w-4/5 lg:w-4/5 lg:h-[33rem] bg-white'>
                <Image src={img1} className='h-full w-full object-cover bg-no-repeat' /> 
                {/* Scroll images and chnaging text */}
            </div>
        </div>
    </div>
    
    </>
  )
}


export default Hero

