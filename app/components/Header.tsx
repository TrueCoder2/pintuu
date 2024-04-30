import Image from 'next/image'

import app from "../firbase/firbaseConfig"
import { getFirestore } from "firebase/firestore";

import { FaSearch } from "react-icons/fa";
import { GoBellFill } from "react-icons/go";
import { AiTwotoneMessage } from "react-icons/ai";
import React from 'react'

const Header = () => {

  const db = getFirestore(app);
 
  return (
    <div className=' flex items-center gap-3 md:gap-2 p-4 w-full'>
        <Image src="/logo.png" alt="logo" height={50} width={50}
        className='rounded-full p-3 hover:bg-gray-300 cursor-pointer' />
        <button className='text-white bg-black px-4 p-2 rounded-full'>Home</button>
        <button className='font-semibold px-4 p-2 rounded-full'>Create</button>
        <div className=' items-center bg-[#e9e9e9] rounded-full gap-3 p-3 w-full hidden md:flex'>
        <FaSearch  className='text-[20px] text-gray-500'/>
        <input type="text" placeholder='Search' className='text-black bg-transparent outline-none w-full' />
        </div>
        <FaSearch className='text-[25px]  text-gray-500 md:hidden'/>
        <GoBellFill className='text-[20px] md:text-[40px] text-gray-600 cursor-pointer hover:bg-gray-300 rounded-full '/>
        <AiTwotoneMessage className='text-[20px] md:text-[40px] text-gray-700 cursor-pointer hover:bg-gray-300 rounded-full '/>
        <Image src='https://randomuser.me/api/portraits/women/75.jpg' alt='user image' width={50} height={50}
        className='rounded-full p-3 hover:bg-gray-300 cursor-pointer'/>
    </div>
    
  )
}

export default Header