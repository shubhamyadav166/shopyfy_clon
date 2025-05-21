import React from 'react'
import exclu from '../../assets/exclu.webp'


const Offers = () => {
    return (
        <div className='flex justify-center p-20 bg-gradient-to-b from-amber-50 to-gray-500'>
            <div className=' flex justify-between h-80 bg-linear-to-b from-amber-50 to-emerald-500 '>
                <div className='mt-20 pl-20 flex flex-col gap-3 '>
                    <h1 className='text-5xl font-bold '>Excusive</h1>
                    <h1 className='text-4xl font-bold'>Offers for You</h1>
                    <p>ONLY ON BEST SELLERS PRODUCT</p>
                    <button className='bg-red-600 text-xl font-bold text-amber-50   rounded-3xl px-2'>Check Now</button>
                </div>
                <div className='mr-0 justify-end items-end'>
                    <img className='h-76 mr-0' src={exclu} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Offers
