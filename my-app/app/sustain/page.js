import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import abtImg from '../assets/ayati9.png';
import Footer from '../components/Footer';
const SustainPage = () => {
  return (
    <>
        <div className='relative bg-[#FBBC89] pb-10 w-[100%]'>
            <div className='bg-[#1B3540] h-[32vh] lg:h-[56vh]'>
                <Navbar/>
                <h1 className='text-[#FBBC89] text-5xl lg:text-7xl absolute top-56 left-[21%] lg:left-[39%] '>Sustainabilty</h1>
            </div>
            <div className='ml-3 lg:ml-20 mt-20 flex flex-col lg:flex-row items-center justify-evenly'>
              <div className='w-full lg:w-[40%] lg:ml-20 p-7'>
            {/* text */}
            <h1 className='text-[#1B3540] text-center lg:text-left text-3xl font-medium lg:text-5xl mb-4 pb-7 uppercase'>Sustainability<br/>
            The Smart Way</h1>
            <h3 className='text-[#1B3540] text-2xl lg:text-3xl font-bold uppercase mb-3 pr-3'>We build green.</h3>
            <p className='text-[#1B3540] text-base text-justify pr-3'>The most important benefit green buildings offer is to our climate and the natural environment. Green buildings not only reduce or eliminate negative impacts on the environment by using less water, energy or natural resources but contribute to the increase in biodiversity by encouraging plantations and maintaining water bodies on site.</p>
            <p className='pt-3 text-[#1B3540] text-base text-justify pr-3'>Green buildings certified by the Indian Green Building Council (IGBC) results in energy savings of 40-50% and water savings of 20-30% compared to conventional buildings in India. This results in cost savings on utility bills for tenants or households (through energy and water efficiency).</p>
            <p className='pt-3 text-[#1B3540] text-base text-justify pr-3'>An IGBC certified green building also addresses better health of the occupants by ensuring better daylighting, cross ventilation, and use of low VOC [Volatile Organic Compounds] products. It also encourages giving occupants access to health facilities like gym and walking trail.</p>
            <p className='mt-3 p-3 bg-[#1B3540] text-[#FBBC89] text-base text-justify pr-3'>Living in a green building is a giant step towards decreasing our carbon footprint and leaving a healthier planet behind for our children.
            </p>
            </div>
        <div>
            {/* image */}
            <div className='w-[90%] ml-4 lg:w-[70%] lg:h-5/6 lg:ml-10'>
                <Image src={abtImg} className='object-contain w-full'/>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default SustainPage
