import React from 'react'

const Description = () => {
  return (
    <div className='py-14'>
      <div className='space-y-5 text-center'>
        <h1 className='text-4xl'>THE BAND</h1>
        <h6 className='text-gray-400'>We love music</h6>
        <p className='px-10 sm:px-40 lg:px-96 text-left'>We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div className='py-9 space-y-7 lg:flex lg:justify-center lg:space-x-24 lg:items-end'>
        <div className='text-center'>
          <p>Name</p>
          <img className='mx-auto' src="https://www.w3schools.com/w3images/bandmember.jpg" alt="" />
        </div>
        <div className='text-center'>
          <p>Name</p>
          <img className='mx-auto' src="https://www.w3schools.com/w3images/bandmember.jpg" alt="" />
        </div>
        <div className='text-center'>
          <p>Name</p>
          <img className='mx-auto' src="https://www.w3schools.com/w3images/bandmember.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Description