"use client";
import Image from 'next/image';
import React from 'react';
import logo from "../assets/logoAyati.png";
import Link from 'next/link';
import Hamburger from 'hamburger-react';
import { useState } from 'react';

import './nav.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className='static top-0 left-0 right-0 flex items-start justify-between'>
        {/* Logo */}
        <Image 
          src={logo} 
          alt="Logo" 
          className='h-36 w-16 mx-7 md:h-52 md:w-24 md:mx-7 lg:h-64 lg:w-32 lg:mx-28' 
        />

        {/* Navbar Links (visible only on lg and above) */}
        <ul className='hidden lg:flex lg:items-start lg:justify-evenly lg:mt-7 lg:mr-24'>
          <Link href='/'>
            <li className='p-7'>
              <h3 className='text-sm md:text-xs lg:text-xl'>HOME</h3>
            </li>
          </Link>

          <Link href='/about'>
            <li className='p-7'>
              <h3 className='text-sm md:text-xs lg:text-xl'>ABOUT US</h3>
            </li>
          </Link>

          <Link href='/projects'>
            <li className='p-7'>
              <h3 className='text-sm md:text-xs lg:text-xl'>PROJECTS</h3>
            </li>
          </Link>

          <Link href='/sustain'>
            <li className='p-7'>
              <h3 className='text-sm md:text-xs lg:text-xl'>SUSTAINABILITY</h3>
            </li>
          </Link>

          <Link href='/contact'>
            <li className='p-7'>
              <h3 className='text-sm md:text-xs lg:text-xl'>CONTACT US</h3>
            </li>
          </Link>
        </ul>

        {/* Hamburger Menu (visible only on sm and md) */}
      <div className='block lg:hidden'>
        <Hamburger
          color="white"
          size={28}
          toggled={open}
          toggle={setOpen}
          className="block lg:hidden"  // Ensure it's hidden on lg and above
        />
      </div>

        {/* Mobile Menu (when Hamburger is toggled) */}
        {open && (
          <div className='text-xl text-white fixed z-20 top-0 right-0 w-screen h-screen p-4 bg-[#1B3540] block lg:hidden'>
            <header className='flex justify-end items-center p-7'>
              <Hamburger
                color="white"
                size={28}
                toggled={open}
                toggle={setOpen}
                className="block lg:hidden"  // Ensure it's hidden on lg and above
              />
            </header>
            <main className='flex items-start justify-center h-screen text-2xl text-[#FBBC89]'>
              <ul className='p-7'>
                <Link href='/'><li className='p-7 hover:scale-125'>HOME</li></Link>
                <Link href='/about'><li className='p-7 hover:scale-125'>ABOUT</li></Link>
                <Link href='/sustain'><li className='p-7 hover:scale-125'>SUSTAINABILITY</li></Link>
                <Link href='/projects'><li className='p-7 hover:scale-125'>PROJECTS</li></Link>
                <Link href='/contact'><li className='p-7 hover:scale-125'>CONTACT US</li></Link>
              </ul>
            </main>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
