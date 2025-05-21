import React from 'react'

const Item = (props) => {


  return (

    <div className='flex flex-col justify-center items-center m-2'>
      <div className='text-center font-medium text-2xl border-2 rounded-3xl'>
        <img className='h-65 w-70 rounded-t-3xl' src={props.image} alt="" />
        <p className='bg-gray-400 border-2  text-center'>{props.name}</p>
        <h1 className='text-xl'> <button className='text-green-600'> New Price </button> ${props.new_price}</h1>
        <h1 className='text-xl'> <button className='text-red-600'> Old Price </button> ${props.old_price}</h1>
      </div>
    </div>
  )
}

export default Item