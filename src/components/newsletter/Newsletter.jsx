import React from 'react'

const Newsletter=()=> {
  return (
    <div className='flex flex-col justify-center items-center p-10 gap-10 bg-gradient-to-b from-amber-50 to-gray-500'>
      <h1 className='text-4xl font-bold'>Get Exclusive Offers on Your Email</h1>
      <p className='text-2xl'>Subscribe to our News letter and stay updated</p>
      <div className='flex flex-row border-2 w-md justify-between rounded-3xl'>
        <input className='text-black rounded-3xl pl-2 w-full' type="email" placeholder='Enter Your Email' />
        <button className='bg-emerald-500 font-bold p-2 cursor-pointer rounded-3xl text-white'>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
