import React from 'react'
import logo from '../assets/logo.png'
import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <header className='h-20 shadow-md sticky top-0'>
        <div className='flex justify-between items-center h-full px-4'>
          <div>
            <img src={logo} alt="Logo" width="300" height="350"/>
          </div>

          <div className='bg-red-500 w-[600px] h-[40px] rounded-md flex items-center justify-left px-4 gap-2'>
            <IoSearch />
          </div>
          <div>
            Login and My cart
          </div>
        </div>
    </header>
  )
}

export default Header
