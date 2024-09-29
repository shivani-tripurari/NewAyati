import React from 'react'
import './footer.css'
const GetInTouch = () => {
  return (
    <div className='pl-10 pt-16 lg:pl-20 '>
      <h1 className='uppercase text-xl font-bold lg:text-3xl pt-2 lg:pt-7 text-[#1E3A45]'>Get In Touch</h1>
      <p className='text-base lg:text-xl font-thin pt-2 text-[#1E3A45]'>If you want to know more about us and our projects</p>
      <div className='flex flex-col lg:flex-row justify-start items-center pt-10'>
        <form onSubmit="">
            {/* <label for="name" className='text-[#1E3A45]'>Name</label> */}
            <input id="name" placeholder='Name' className='mr-11 mb-3 text-[#000000] border-b-2 border-white w-80 lg:w-[36rem] focus:outline-none '/>
            {/* <lable for="email">Email</lable> */}
            <input id='email' placeholder="E-mail" className='mb-3 text-[#000000] border-b-2 border-white w-80 lg:w-[36rem] focus:outline-none '/>
        </form>
      </div>
      <button className='mt-7 rounded-lg w-[7rem] p-2 bg-[#1E3A45] font-bold text-lg'>Sign-up</button>
    </div>
  )
}

export default GetInTouch
