import React from 'react'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  return (
      <nav className={`absolute top-0 md:left-[10vw] md:w-[55vw] w-screen flex items-center ms:justify-between justify-evenly ${inter.className}`}>
          <div className=" flex items-center justify-center">
              <img src="/logo.png" className='w-[50px] md:w-[150px]' alt="" />
          </div>
          <ul className='flex items-center justify-items-start space-x-2 md:space-x-5 text-white md:text-2xl uppercase font-[500] text-md cursor-pointer'>
              <a href='#home'>Home</a>
              <a href='#service'>Service</a>
              <a href='#contact'>Contact</a>
              <li>About Us</li>
          </ul>
    </nav>
  )
}

export default Navbar