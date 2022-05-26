import React from 'react'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {AiFillPhone} from 'react-icons/ai'
import {HiMail} from 'react-icons/hi'

const Contact = () => {
  return (
    <div className='py-20 '>
        <div className='text-center'>
        <h1 className='text-3xl'>CONTACT</h1>
        <p className='text-gray-400 py-4'>Fan ? Drop a note!</p>
        </div>
        <div className='flex flex-col items-center space-y-3 md:grid md:grid-cols-2 md:flex md:flex-col md:items-center md:px-48 lg:px-80 lg:mx-auto md:justify-center'>
            <div>
                <div className='flex items-center gap-x-4'>
                    <FaMapMarkerAlt />
                    <h4>Chicago, US</h4>
                </div>
                <div className='flex items-center gap-x-4'>
                    <AiFillPhone />
                    <h4>Phone: +00 151515s</h4>
                </div>
                <div className='flex items-center gap-x-4'>
                    <HiMail />
                    <h4>Email: mail@mail.com</h4>
                </div>
            </div>
            <div className='md:space-y-2'>
                <div className='flex flex-col md:flex md:flex-row md:space-x-2'>
                    <input placeholder='Name'  className='border p-2 w-full'/>
                    <input placeholder='Email' className='border p-2 w-full'/>
                </div>
                <div className='md:space-y-2'>
                    <div className='md:flex md:flex-col'>
                    <input placeholder='Message' className='border p-2'/>
                    </div>
                <button className='bg-black text-white p-2 item'>SEND</button>
                </div>
                <div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact