"use client";
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import img1 from '../assets/pro1.jpg'
import img2 from '../assets/pro2.jpg'
import { useRouter } from 'next/navigation'

const ProjectPage = () => {

    const router = useRouter();
    const goTo = (pagePath) =>{
        router.push(pagePath);
    }

  return (
   <>
    <div className=' bg-[#FBBC89] pb-10 w-[100%]'>
            <div className='bg-[#1B3540]  mb-20 pb-20'>
                <Navbar/>
                <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[#FBBC89] text-5xl lg:text-7xl pt-24 pb-20 lg:pb-3 lg:pt-10 '>Projects</h1>
        </div>
            </div>
            <div>
                <h2 className='uppercase p-2 ml-5 mt-10  text-2xl lg:text-4xl lg:ml-20 lg:mt-16 text-[#1B3540]'>Ongoing Projects</h2>
            </div>
            <div className='mb-20 ml-5 lg:ml-20 flex justify-start gap-x-5 lg:gap-x-16 items-center flex-col lg:flex-row'>
                <div className='h-96 w-80 m-1'>
                    <Image src={img1} className='h-3/4 w-full object-contain'/>
                    <h3 className='text-[#1B3540] font-bold text-xl lg:text-2xl font italic'>Ayati Hill Top</h3>
                    <p className='text-[#1b3540] text-base lg:text-lg'>77,400 sq ft | 2 Cellars | 2800 Sq Yards <br/>
                    Gym & Spa | Party Area | Power Backup</p>
                    <button onClick={()=>goTo("sustain")} className='mt-1 rounded-lg w-[7rem] p-2 bg-[#1E3A45] font-bold text-lg'>View</button>
                </div>
                <div className='h-96 w-80 m-1'>
                    <Image src={img2} className='h-3/4 w-full object-contain'/>
                    <h3 className='text-[#1B3540] font-bold text-xl lg:text-2xl font italic' >Ayati Lake View</h3>
                    <p className='text-[#1b3540] text-base lg:text-lg'>77,400 sq ft | 2 Cellars | 2800 Sq Yards <br/>
                    Gym & Spa | Party Area | Power Backup</p>
                    <button onClick={()=>goTo("about")} className='mt-1 rounded-lg w-[7rem] p-2 bg-[#1E3A45] font-bold text-lg'>View</button>
                </div>
            </div>
            <div>
                <h2 className='uppercase p-2 ml-5 mt-10  text-2xl lg:text-4xl lg:ml-20 lg:mt-16 text-[#1B3540]'>Upcoming Projects</h2>
            </div>
            <div className='mb-10 ml-5 lg:ml-20 flex justify-start gap-x-5 lg:gap-x-16 items-center flex-col lg:flex-row'>
                <div className='h-96 w-80 m-1'>
                    <Image src={img1} className='h-3/4 w-full object-contain'/>
                    <h3 className='text-[#1B3540] font-bold text-xl lg:text-2xl font italic'>Ayati Hill Top</h3>
                    <p className='text-[#1b3540] text-base lg:text-lg'>77,400 sq ft | 2 Cellars | 2800 Sq Yards <br/>
                    Gym & Spa | Party Area | Power Backup</p>
                    <button className='mt-1 rounded-lg w-[7rem] p-2 bg-[#1E3A45] font-bold text-lg'>View</button>
                </div>
                <div className='h-96 w-80 m-1'>
                    <Image src={img2} className='h-3/4 w-full object-contain'/>
                    <h3 className='text-[#1B3540] font-bold text-xl lg:text-2xl font italic' >Ayati Lake View</h3>
                    <p className='text-[#1b3540] text-base lg:text-lg'>77,400 sq ft | 2 Cellars | 2800 Sq Yards <br/>
                    Gym & Spa | Party Area | Power Backup</p>
                    <button className='mt-1 rounded-lg w-[7rem] p-2 bg-[#1E3A45] font-bold text-lg'>View</button>
                </div>
            </div>
            <Footer/>
    </div>
  </>
  )
}

export default ProjectPage
