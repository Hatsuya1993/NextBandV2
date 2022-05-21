import React from 'react'
import {BiDownArrow, BiSearchAlt2} from 'react-icons/bi'

const NavBar = () => {
  return (
    <div className='bg-black p-3 text-white flex justify-between items-center'>
        <ul className='text-xl flex space-x-4 sm:'>
            <li>HOME</li>
            <li>BAND</li>
            <li>TOUR</li>
            <li>CONTACT</li>
            <li className='flex items-center'>MORE <BiDownArrow /></li>
        </ul>
        <BiSearchAlt2 className='w-10 h-10'/>
    </div>
  )
}

export default NavBar