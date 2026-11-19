import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { IoSearch } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";

const Header = () => {
  const [search, setSearch] = useState("");
  
  return (
    <header className='h-25 shadow-md fixed top-0 left-0 right-0 z-50 bg-white'>
        <div className='flex justify-around items-center h-full'>
          <div>
            <img src={logo} alt="Logo" width="150" height="500"/>
          </div>

          <div>
            <p className='font-bold text-xl'>Delivery in 16 minutes</p>
            <p>Airoli, Navi Mumbai, Maharashatra</p>
          </div>

          <div className='w-[500px] h-[50px] bg-[#F8F8F8] rounded-lg flex items-center justify-left px-4 gap-2 border-1 border-gray-100 '>
            <IoSearch className='h-5 w-5' />
            <input value={search} onChange={e => setSearch(e.target.value)} className='focus:outline-hidden w-full'/>
          </div>
            <button className=' px-5 py-3 text-font-["Okra-Medium",_sans-serif] text-xl' >Login</button>
            <button className='flex items-center px-6 py-3 bg-gray-200 shadow-md rounded-md text-white gap-2 font-bold text-base'><LuShoppingCart className='h-6 w-6' strokeWidth={3}/>My Cart</button>
        </div>
    </header>
  )
}

export default Header
