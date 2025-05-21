import React from 'react'
import Item from '../item/item'
import data_product from '../../assets/data.js'


const Popular = () => {
  return (
    <div className='bg-linear-to-b from-amber-50 to-emerald-500'>
       <div className='justify-center flex'><h1 className='text-3xl text-center font-bold m-5 border-b-3 w-78'>POPULAR IN WOMEN</h1></div>
       
      <div className='grid grid-cols-4 mx-15'>
        {data_product.map((item, i) => {

        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
      })
      }
      </div>
    </div>
  )
}

export default Popular
