import React from 'react'
import hand_icon from '../../assets/hand_icon.png'
import arrowicon from '../../assets/arrowicon.jpeg'
import girlimage from '../../assets/girlimage.png'

function Hero() {
  return (
    <div className='flex bg-gradient-to-b from-white to-gray-500 h-screen text-white justify-around items-center'>
      <div className='m-15 flex flex-col gap-7'>

        <h1 className='text-2xl font-bold'>Best Deal ! ! Best Price ! ! </h1>

        <div className='flex items-center gap-2 '>
          <p className='text-5xl font-bold'>new</p>
          <img className='h-12 pt-2 rounded-4xl' src={hand_icon} alt="" />
        </div>
        <div className='text-5xl font-bold flex flex-col gap-5'>
          <p>Collection </p>
          <p>for Every One</p>
        </div>

        <div className='mt-10'>
          <button className='flex items-center bg-red-500 font-medium text-white rounded-4xl gap-1 p-2'>
            <p>Latest_Collection</p>
            <img className='bg-red-500 h-3 ' src={arrowicon} alt="" />
          </button>
        </div>
      </div>



      <div className='flex justify-center items-center'>
        <img src={girlimage} alt="" />
      </div>
    </div>
  )
}

export default Hero
