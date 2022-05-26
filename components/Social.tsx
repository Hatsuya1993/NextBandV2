import React from 'react'
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaLinkedinIn, FaPinterestP, FaSnapchat } from 'react-icons/fa'

const Social = () => {
  return (
    <div className='py-28 text-gray-400 space-y-3'>
        <div className='flex justify-center'>
          <AiFillFacebook  className='text-3xl'/>
          <AiOutlineInstagram className='text-3xl'/>
          <FaSnapchat className='text-3xl'/>
          <FaPinterestP className='text-3xl'/>
          <AiOutlineTwitter className='text-3xl'/>
          <FaLinkedinIn className='text-3xl'/>
        </div>
        <div className='text-center'>
          <p>Powered by <a className='underline' href="#">w3.css</a></p>
        </div>
    </div>
  )
}

export default Social