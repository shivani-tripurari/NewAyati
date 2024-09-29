import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import abtImg from '../assets/ayati9.png';
import fac1 from '../assets/factor1.png';
import fac2 from '../assets/factor2.png';
import fac3 from '../assets/factor3.png';
import fac4 from '../assets/factor4.png';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className='relative bg-[#FBBC89] pb-10 w-[100%]'>
      <div className='bg-[#1B3540] h-[32vh] lg:h-[56vh]'>
        <Navbar/>
        <h1 className='text-[#FBBC89] text-5xl lg:text-7xl absolute top-56 left-[31%] lg:left-[39%] '>About Us</h1>
      </div>
      <div className='ml-3 lg:ml-20 mt-20 flex flex-col lg:flex-row items-center justify-evenly'>
        <div className='w-full lg:w-[40%] lg:ml-20 p-7'>
            {/* text */}
            <h1 className='text-[#1B3540] text-center lg:text-left text-3xl font-medium lg:text-5xl mb-4 pb-7 uppercase'>Building a Sustainable Hyderabad</h1>
            <p className='text-[#1B3540] text-base text-justify pr-3'>Ayati Properties is established by an Architect and a Civil Engineer with an experience of 16 years with proficiency in the fields of Mining, Architecture, Infra, and Engineering. They aim to develop boutique projects in and around the city of Hyderabad while drawing from their decade and a half of learning in construction and its complimentary fields aiming to close the identified gaps and missed opportunities in the housing sector. Rahul Reddy and Tuljha Reddy draw from 16 years of their onsite experience as they insist on Sustainable Architecture and emphasise on Services Planning at Ayati Properties along with good construction practices and Maximised Space Utilisation.<br/>
            At Ayati Properties staying rooted in traditional environments and understanding everyday living is at the core of its Sustainable design. The team is environmentally conscious with a clear goal in mind to assemble and execute well designed co-living spaces with the know-how as to how to achieve it.<br/>
            Aspirations for mindful co-living guide their purpose in creating an urban space for community living. Inspired by rural and social engineering, the projects undertaken by Ayati focus on sustainable community living that is rooted in traditional wisdom. To reach these aspirations at Ayati Properties, the personnel are consciously aware of the choices made during construction.<br/>
            Being a boutique establishment gives them a breadth of freedom compared to other builders in the market. Led and managed by young partners with an inclination towards tradition, their diverse yet complementary fields of expertise in architecture, interior design and infra adds to their repertoire.</p>
        </div>
        <div>
            {/* image */}
            <div className='w-[90%] ml-4 lg:w-[70%] lg:h-5/6 lg:ml-10'>
                <Image src={abtImg} className='object-contain w-full'/>
            </div>
        </div>
      </div>
      <div>
        <div className='mt-40 flex flex-col items-center justify-center'>
            <h2 className='text-[#1B3540] text-3xl lg:text-5xl uppercase pb-7'>The Ayati Factor</h2>
            <p className='text-[#1B3540] text-base'>Why is Ayati different from the rest?</p>
        </div>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-x-10 mt-10'>
            <div className='border border-black h-[22rem] w-64 mb-4'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='h-52 w-52 m-7'>
                        <Image src={fac1} className='h-full w-full object-cover'/>
                    </div>
                    <div>
                        <h3 className='text-[#1B3540] text-base px-3 uppercase text-center'>Pre-certified IGBC
                        Rated Building</h3>
                    </div>
                </div>
            </div>
            <div className='border border-black h-[22rem] w-64 mb-4'>
            <div className='flex flex-col justify-center items-center'>
                    <div className='h-52 w-52 m-7'>
                        <Image src={fac2} className='h-full w-full object-cover'/>
                    </div>
                    <div>
                        <h3 className='text-[#1B3540] text-base px-3 uppercase text-center'>Pre-certified IGBC
                        Rated Building</h3>
                    </div>
                </div>
            </div>
            <div className='border border-black h-[22rem] w-64 mb-4'>
            <div className='flex flex-col justify-center items-center'>
                    <div className='h-52 w-52 m-7'>
                        <Image src={fac3} className='h-full w-full object-cover'/>
                    </div>
                    <div>
                        <h3 className='text-[#1B3540] text-base px-3 uppercase text-center'>Pre-certified IGBC
                        Rated Building</h3>
                    </div>
                </div>
            </div>
            <div className='border border-black h-[22rem] w-64 mb-4'>
            <div className='flex flex-col justify-center items-center'>
                    <div className='h-52 w-52 m-7'>
                        <Image src={fac4} className='h-full w-full object-cover'/>
                    </div>
                    <div>
                        <h3 className='text-[#1B3540] text-base px-3 uppercase text-center'>Pre-certified IGBC
                        Rated Building</h3>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className='mt-20 mb-20 bg-[#1B3540] h-[56vh] lg:h-[40vh] w-full'>
        <h1 className=' pt-16 text-[#fbbc89] ml-7 mr-7 text-2xl lg:text-3xl lg:ml-16 lg:mr-12 font-semibold '>Ayati strives to innovate in areas that most others don’t giving their clients a range of benefits.</h1>
        <p className='text-[#ffffff] text-base font-semibold ml-7 mr-10 mt-7 lg:ml-16 lg:pr-32 pb-20 lg:pb-20'>Well-designed and earmarked spaces in landscape and outdoor design maximise space utilisation and use the available spaces according to different age groups - ranging from tot lots & barbeque spaces, outdoor dining, party areas, walking trails around the property and other socially interactive spaces.<br/>
Apart from the above social spaces, interested residents are given a designated space for urban farming which can be used for herbs, spices and vegetable gardening. This practice encourages social bonding, a sense of community and hobby time.</p>
      </div>
      <Footer/>
    </div>
  )
}

export default AboutPage
