import React from 'react'

const TourDates = () => {
  return (
    <div className='py-36 bg-black'>
        <div className='text-center space-y-3'>
        <h1 className='text-3xl text-white'>TOUR DATES</h1>
        <p className='text-gray-400'>Remember to book your tickets!</p>
        </div>
        <div className='p-10 lg:px-56'>
            <div className='bg-white p-2 flex space-x-4 items-center'>
                <p>September</p>
                <span className='bg-red-500 p-1 text-white'>Sold out</span>
            </div>
            <div className='bg-white p-2 flex space-x-4 items-center border-2'>
                <p>October</p>
                <span className='bg-red-500 p-1 text-white'>Sold out</span>
            </div>
            <div className='bg-white p-2 flex space-x-4 items-center justify-between'>
                <p>November</p>
                <span className='bg-black rounded-full w-6 text-center text-white'>3</span>
            </div>
        </div>
        <div className='p-10 grid gap-3 grid-cols-1 lg:grid-cols-3 place-items-center lg:px-56'>
            <div className='w-56 lg:w-auto'>
                <img className='lg:w-auto' src="https://www.w3schools.com/w3images/newyork.jpg" alt="" />
                <div className='p-3 bg-white space-y-3 lg:w-auto'>
                <p>New York</p>
                <p className='text-gray-400'>Fri 27 Nov 2016</p>
                <p className=''>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                <button className='bg-black text-white p-2'>Buy Tickets</button>
                </div>
            </div>
            <div className='w-56 lg:w-auto'>
                <img className='lg:w-auto' src="https://www.w3schools.com/w3images/sanfran.jpg" alt="" />
                <div className='p-3 bg-white space-y-3 lg:w-auto'>
                <p>San Francisco</p>
                <p className='text-gray-400'>Sun 29 Nov 2016</p>
                <p className=''>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                <button className='bg-black text-white p-2'>Buy Tickets</button>
                </div>
            </div>
            <div className='w-56 lg:w-auto'>
                <img className='lg:w-auto' src="https://www.w3schools.com/w3images/paris.jpg" alt="" />
                <div className='p-3 bg-white space-y-3 lg:w-auto'>
                <p>Paris</p>
                <p className='text-gray-400'>Sat 28 Nov 2016</p>
                <p className=''>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                <button className='bg-black text-white p-2'>Buy Tickets</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TourDates