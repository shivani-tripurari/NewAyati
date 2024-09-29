import React from 'react'
import Image from 'next/image'
import img3 from '../assets/ayati3.jpg'
import './exp.css';
const Factor = () => {
  return (
    <>

    <div className='h-[126vh] w-[100%] exp-sec'>
        <div className='p-4 block md:flex md:justify-between md:items-center lg:flex lg:justify-between lg:items-center lg:p-12'>
            <div className='ml-7'>
                <p className='text-base pl-7 md:text-lg lg:text-xl'>Why Us</p>
                <h1 className='text-3xl text-[#1B3540] p-7 md:3xl lg:text-5xl'>THE AYATI FACTOR </h1>

   

            </div>
            {/* <div className='mr-0 ml-64 mt-7 md:mt-11 lg:mt-11 lg:mr-7'>
                <h3 className='text-3xl md:text-4xl lg:text-7xl'>15+</h3>
                <p className='text-base md:text-lg lg:text-xl'>Years of experience</p>
            </div> */}
        </div>
        <div className='block relative md:flex lg:flex justify-center items-center'>

            

            <div className='absolute top-[-2rem] z-10 p-7 h-[32rem] w-full md:w-3/5 lg:w-1/2 lg:left-28'>

                <Image src={img3}/>
            </div>
            <div className='absolute top-96 pt-20 p-7 pb-10 bg-[#1B3540] w-full lg:w-2/3 lg:top-[-4rem] lg:right-0 lg:pl-36'>
                <h1 className='text-[#FBBC89]  text-2xl md:text-2xl lg:text-3xl'>WHAT IS AYATI DOING 
                    <br/>DIFFERENT FROM THE REST ?</h1>
                <ol>
                    <li className='text-sm md:text-base lg:text-lg text-[#FBBC89] p-3'>1. Pre-certified IGBC Rated Building.</li>
                    <li className='text-sm md:text-base lg:text-lg text-[#FBBC89] p-3'>2. Green-rated building materials.</li>
                    <li className='text-sm md:text-base lg:text-lg text-[#FBBC89] p-3'>3. Porotherm Brick which gives a 6-degree variation in temperature <br/>
                    between the outside and inside.</li>
                    <li className='text-sm md:text-base lg:text-lg text-[#FBBC89] p-3'>4. Eco Friendly Plaster which aids in temperature Regulation.<br/>
                     Resistant to salt, mould stains, dampness, and cracking.</li>
                    <li className='text-sm md:text-base lg:text-lg text-[#FBBC89] p-3'>5. Floor to ceiling windows in all bedrooms and living spaces.</li>
                    <li className='text-sm md:text-base lg:text-lg text-[#FBBC89] p-3'>6. Waste management.</li>
                    <li className='text-sm md:text-base lg:text-lg text-[#FBBC89] p-3'>7. Urban Farming Opportunity for residents.</li>
                </ol>
            </div>
          
        </div>
    </div>
   
    </>
  )
}

export default Factor
