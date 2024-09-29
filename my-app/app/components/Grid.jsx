import React from 'react'
import Image from 'next/image'
import img1 from '../assets/ayati1.jpg'
import img2 from '../assets/ayati2.png'
import img3 from '../assets/ayati6.jpg'
import img4 from '../assets/ayati7.jpg'
import img5 from '../assets/ayati8.jpg'
const Grid = () => {
  return (
    <>

        {/* <div className='relative pt-20 h-[220vh] lg:[100vh] w-[100%] bg-hero-pattern bg-background object-contain'>
            <h1 className='text-3xl md:3xl lg:text-6xl py-7 flex justify-center items-center text-center lg:text-right lg:mr-20 lg:justify-end' >BUILDING THE FUTURE 
                <br/> OF ECO LIVING</h1>
            <div className='block lg:flex lg:justify-center lg:items:center'>
                <div className='block px-7 lg:flex lg:flex-col lg:justify-evenly lg:items:center lg:mr-4'>
                    <div className='bg-white h-[20rem] w-full mb-3 lg:w-[20rem]' ><Image src={img1} className='h-full w-full object-cover'/></div>
                    <div className='bg-white h-[20rem] w-full mb-3 lg:w-[20rem]' ><Image src={img2} className='h-full w-full object-cover'/></div>
                </div>
                <div className='block px-7 lg:flex lg:flex-col lg:justify-center lg:items:center lg:mr-4' >
                    <div className='bg-white h-[40rem] w-full mb-3 lg:w-[24rem]'><Image src={img3} className='h-full w-full object-cover'/></div>
                </div>
                <div className='block px-7 lg:flex lg:flex-col lg:justify-evenly lg:items:center'>
                    <div className='bg-white h-[20rem] mb-3 w-full lg:w-[20rem]' ><Image src={img4} className='h-full w-full object-cover'/></div>
                    <div className='bg-white h-[20rem] mb-3 w-full lg:w-[20rem]' ><Image src={img5} className='h-full w-full object-cover'/></div> */}

        <div className='relative pt-20 h-[170vh] md:h-[260vh] lg:h-[140vh] w-[100%] bg-hero-pattern bg-background object-contain'>
            <h1 className='text-[#FBBC89] text-3xl md:3xl lg:text-6xl py-7 flex justify-center items-center text-center lg:text-right lg:mr-20 lg:justify-end' >BUILDING THE FUTURE 
                <br/> OF ECO LIVING</h1>
            <div className='block lg:flex lg:justify-center lg:items:center'>
                <div className='block px-7  lg:flex lg:flex-col lg:justify-evenly lg:items:center lg:mr-4'>
                    <div className='bg-white h-[12rem] md:h-[28rem] w-full mb-3 lg:h-[20rem] lg:w-[20rem]' ><Image src={img1} className='h-full w-full object-cover'/></div>
                    <div className='bg-white h-[12rem] md:h-[28rem] w-full mb-3 lg:h-[20rem] lg:w-[20rem]' ><Image src={img2} className='h-full w-full object-cover'/></div>
                </div>
                <div className='block px-7 lg:flex lg:flex-col lg:justify-center lg:items:center lg:mr-4' >
                    <div className='bg-white h-[28rem] md:h-[32rem] w-full mb-3 lg:h-[40rem] lg:w-[24rem]'><Image src={img3} className='h-full w-full object-cover'/></div>
                </div>
                <div className='block px-7  lg:flex lg:flex-col lg:justify-evenly lg:items:center'>
                    <div className='bg-white h-[12rem] md:h-[28rem] w-full mb-3 lg:h-[20rem] lg:w-[20rem]' ><Image src={img4} className='h-full w-full object-cover'/></div>
                    <div className='bg-white h-[12rem] md:h-[28rem] w-full mb-3 lg:h-[20rem] lg:w-[20rem]' ><Image src={img5} className='h-full w-full object-cover'/></div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Grid
