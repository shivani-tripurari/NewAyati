import React from 'react'
import insta from '../assets/insta.svg'
import facebook from '../assets/facebook.svg'
import Image from 'next/image'
import Link from 'next/link'
import GetInTouch from './GetInTouch'
const Footer = () => {
  return (
    <>
      <div className='h-[90vh] md:h-[70vh] lg:h-[90vh] bg-[#FBBC89]'>
        <GetInTouch/>
        <div className='ml-12 lg:ml-20 mt-20 flex flex-col lg:flex-row items-start lg:items-end justify-between'>
          <div className='flex flex-col lg:flex-row items-start justify-evenly'>
            {/* text */}
            <div className='mr-20 text-xl'>
              <ul>
                <li>Terms and Conditions</li>
                <li>User's guide</li>
                <li>Support Center</li>
                <li>Press info</li>
              </ul>
            </div>
            <div className='text-xl'>
             <ul>
                <Link href='/'> <li>Home</li> </Link>
                <Link href='/about'><li>About us</li></Link>
                <Link href='/projects'><li>Projects</li></Link>
                <Link href='/sustain'><li>Sustainablity</li></Link>
                <Link href='/contact'><li>Contact us</li></Link>
             </ul>
            </div>
          </div>
          <div className='flex flex-row justify-center items-end mr-32'>
            {/* socials */}
            <Image src={insta} className='h-7 w-7 m-3' />
            <Image src={facebook} className='h-7 w-7 m-3' />
          </div>
        </div>
      </div>
    </>
)};

export default Footer
