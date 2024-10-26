import React from 'react'
import Navbar from '../components/Navbar'
import './contact.css'
import Footer from '../components/Footer'
import Image from 'next/image'
import call from '../assets/phone.svg'
import location from '../assets/location.svg'
const ContactPage = () => {
  return (
    <>
    <div className=' bg-[#1B3540] pb-20 pt-0'>
        <Navbar/>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[#FBBC89] text-5xl lg:text-7xl pt-12 pb-20 lg:pb-10 lg:pt-2 '>Contact Us</h1>
        </div>
        <div className='h-4 w-full bg-[#FBBC89]'></div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-[#FBBC89] text-3xl lg:text-5xl pt-12 pb-2 lg:pb-1 lg:pt-2 '>Let's start a conversation</h1>
        <h3 className='text-[#FBBC89] text-center text-lg lg:text-lg pb-10 lg:pb-5'>If you like to meet new people and start interesting conversations, you're just like us!</h3>
      </div>
      <div className='hidden lg:mt-20 lg:mb-10 lg:flex lg:justify-center lg:items-start'>
  <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 w-[64rem]'>
    {/* Left Form Section */}
    <div className=' col-span-3'>
      <div className='bg-[#FABB88]  p-10 w-full'>
        <div className='flex flex-col justify-center items-center pt-10 pb-16'>
        <form onSubmit="">
  <div className='flex flex-col mb-7'>
    <label htmlFor="name" className='text-black mb-1'>Name*</label>
    <input id="name" placeholder='Name' className=' text-base lg:text-lg text-[#ffffff] border-b-2 border-white w-40 lg:w-[36rem] focus:outline-none'/>
  </div>

  <div className='flex flex-col mb-7'>
    <label htmlFor='email' className='text-black mb-1'>E-mail*</label>
    <input id='email' placeholder="E-mail" className='text-base lg:text-lg text-[#ffffff] border-b-2 border-white w-40 lg:w-[36rem] focus:outline-none'/>
  </div>

  <div className='flex flex-col mb-7'>
    <label htmlFor="country" className='text-black mb-1'>Country*</label>
    <input id="country" placeholder='Country' className='text-base lg:text-lg text-[#ffffff] border-b-2 border-white w-40 lg:w-[36rem] focus:outline-none'/>
  </div>

  <div className='flex flex-col mb-7'>
    <label htmlFor='subject' className='text-black mb-1'>Subject*</label>
    <input id='subject' placeholder="Subject" className='text-base lg:text-lg text-[#ffffff] border-b-2 border-white w-40 lg:w-[36rem] focus:outline-none'/>
  </div>

  <div className='flex flex-col mb-7'>
    <label htmlFor='message' className='text-black mb-1'>Message*</label>
    <textarea id='message' placeholder="Message" className='block text-base lg:text-lg text-[#ffffff] bg-transparent border-b-2 border-white w-40 md:w-96 lg:w-[36rem] focus:outline-none resize-none' rows="8"/>
  </div>
  <button className='mt-7 rounded-lg p-2 pl-4 pr-4 bg-[#1E3A45] font-bold text-lg'>Request a call-back</button>
</form>
        </div>
      </div>
    </div>

    {/* Right Contact Information Section */}
    <div className='hidden lg:flex lg:justify-center lg:items-center lg:ml-4 col-span-1 w-full'>
      <div className='flex flex-col justify-center items-start gap-y-10'>
        {/* Address Section */}
        <div className='flex flex-col justify-center items-start pl-8'>
          <div className='flex justify-center items-center h-16 w-16 rounded-full bg-[#FBBC89] mb-2'>
            <Image src={location} alt='location' className='w-10 h-10'/>
          </div>
          <p className='text-[#FBBC89] text-lg font-bold pl-1'>H.No 8-2-676/1/B/A/A/1&A,</p>
          <p className='text-[#FBBC89] text-lg font-bold pl-1'>3rd Floor MVR Estate,</p>
          <p className='text-[#FBBC89] text-lg font-bold pl-1'>Road No 13 Banjara Hills,</p>
          <p className='text-[#FBBC89] text-lg font-bold pl-1'>Hyderabad 500034, India.</p>
        </div>
        {/* Contact Numbers */}
        <div className='flex flex-col justify-center items-start pl-8 pb-4'>
          <div className='flex justify-center items-center h-16 w-16 rounded-full bg-[#FBBC89] mb-2'>
            <Image src={call} alt='call' className='w-10 h-10'/>
          </div>
          <p className='text-[#FBBC89] text-lg font-bold pl-1'>Landline: +91 40 4858 1777</p>
          <p className='text-[#FBBC89] text-lg font-bold pl-1'>Mobile: +91 77990 89922</p>
        </div>
        {/* Sales Enquiries */}
        <div className='flex flex-col justify-center items-start pl-8 pb-1'>
          <h3 className='uppercase text-[#FBBC89] text-3xl'>Sales enquiries</h3>
          <p className='text-[#FBBC89] text-lg font-bold pl-1'>For sales enquiries, call us on +91 7799089922</p>
        </div>
        {/* Careers */}
        <div className='flex flex-col justify-center items-start pl-8 pb-1'>
          <h3 className='uppercase text-[#FBBC89] text-3xl'>Careers</h3>
          <p className='text-[#FBBC89] text-lg font-bold pl-1'>For career opportunities, call us on +91 7799089922</p>
        </div>
        {/* Collaborate */}
        <div className='flex flex-col justify-center items-start pl-8 pb-0'>
          <h3 className='uppercase text-[#FBBC89] text-3xl'>Collaborate</h3>
          <p className='text-[#FBBC89] text-lg font-bold pl-1'>For collaboration, call us on +91 7799089922</p>
        </div>
      </div>
    </div>
  </div>
</div>


  
     <div className='flex justify-center items-center lg:hidden mb-20'>
     <div className='w-[87%]'>
      <div className='bg-[#FABB88] p-10 w-full'>
        {/* <div className='flex flex-col justify-center items-center pt-10'> */}
        <form onSubmit="">
  <div className='flex flex-col mb-7'>
    <label htmlFor="name" className='text-white mb-1'>Name*</label>
    <input id="name" placeholder='Name' className='mr-11 text-base lg:text-lg text-[#000000] border-b-2 border-white w-[87%] lg:w-[36rem] focus:outline-none'/>
  </div>

  <div className='flex flex-col mb-7'>
    <label htmlFor='email' className='text-white mb-1'>E-mail*</label>
    <input id='email' placeholder="E-mail" className='mr-11 text-base lg:text-lg text-[#000000] border-b-2 border-white w-[87%] lg:w-[36rem] focus:outline-none'/>
  </div>

  <div className='flex flex-col mb-7'>
    <label htmlFor="country" className='text-white mb-1'>Country*</label>
    <input id="country" placeholder='Country' className=' mr-11 text-base lg:text-lg text-[#000000] border-b-2 border-white w-[87%] lg:w-[36rem] focus:outline-none'/>
  </div>

  <div className='flex flex-col mb-7'>
    <label htmlFor='subject' className='text-white mb-1'>Subject*</label>
    <input id='subject' placeholder="Subject" className='mr-11 text-base lg:text-lg text-[#000000] border-b-2 border-white w-[87%] lg:w-[36rem] focus:outline-none'/>
  </div>

  <div className='flex flex-col mb-7'>
    <label htmlFor='message' className='text-white mb-1'>Message*</label>
    <textarea id='message' placeholder="Message" className='block bg-transparent text-base lg:text-lg text-[#000000] border-b-2 border-white w-[87%] md:w-96 lg:w-[36rem] focus:outline-none resize-none' rows="4"/>
  </div>
  <button className='mt-7 rounded-lg p-2 bg-[#1E3A45] font-bold text-sm'>Request a call-back</button>
</form>

        {/* </div> */}
      </div>
      </div>
     </div>


      <div className='flex flex-col justify-center gap-y-8 items-start lg:hidden '>
        <div className='flex flex-col justify-center items-start pl-8'>
          <div className='flex justify-center items-center h-16 w-16 rounded-full bg-[#FBBC89] mb-2'>
            <Image src={location} alt='call' className='w-10 h-10'/>
          </div>
          <p className='text-[#FBBC89] text-lg font-bold pl-1'>H.No 8-2-676/1/B/A/A/1&A,</p>
          <p className='text-[#FBBC89] text-lg font-bold pl-1'>3rd Floor MVR Estate,</p>
          <p className='text-[#FBBC89] text-lg font-bold pl-1'>Road No 13 Banjara Hills,</p>
          <p className='text-[#FBBC89] text-lg font-bold pl-1'>Hyderabad 500034, India.</p>
        </div>
        <div className='flex flex-col justify-center items-start pl-8 pb-4'>
          <div className=' flex justify-center items-center h-16 w-16 rounded-full bg-[#FBBC89] mb-2'>
            <Image src={call} alt='call' className='w-10 h-10'/>
          </div>
          <p className='text-[#FBBC89] text-lg font-bold pl-1'>Landline: +91 40 4858 1777</p>
          <p className='text-[#FBBC89] text-lg font-bold pl-1'>Mobile: +91 77990 89922</p>
        </div>
        <div className='flex flex-col justify-center items-start pl-8 pb-1'>
          <h3 className='uppercase text-[#FBBC89] text-3xl'>Sales enquiries</h3>
          <p className='text-[#FBBC89] text-lg font-bold pl-1'>If you would have any enquiries related </p>
          <p className='text-[#FBBC89] text-lg font-bold pl-1'>to sales, call us on ++91 7799089922</p>
        </div>
        <div className='flex flex-col justify-center items-start pl-8 pb-1'>
          <h3 className='uppercase text-[#FBBC89] text-3xl'>Carrers</h3>
          <p className='text-[#FBBC89] text-lg font-bold pl-1'>If you would have any enquiries related </p>
          <p className='text-[#FBBC89] text-lg font-bold pl-1'>to sales, call us on ++91 7799089922</p>
        </div>
        <div className='flex flex-col justify-center items-start pl-8 pb-4'>
          <h3 className='uppercase text-[#FBBC89] text-3xl'>Collaborate</h3>
          <p className='text-[#FBBC89] text-lg font-bold pl-1'>If you would have any enquiries related </p>
          <p className='text-[#FBBC89] text-lg font-bold pl-1'>to sales, call us on ++91 7799089922</p>
        </div>
      </div>
      <div className='mt-20 mb-10 pt-4 pb-12 flex flex-col justify-center items-center '>
        <h3 className='uppercase text-[#FBBC89] text-3xl'>Google maps location</h3>
        <div className='mt-4 bg-black h-96 w-[87%]'></div>
      </div>

      <Footer/>
    </>
  )
}

export default ContactPage
