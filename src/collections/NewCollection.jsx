
import React from 'react'
import new_collections from '../assets/newcollections.js'
import Item from '../components/item/item'

function NewCollection() {
  return (
    <div>
      <div className='bg-gradient-to-b from-amber-50 to-emerald-500 h-full'>
      <h1 className='text-center text-3xl font-bold pt-10'>NEW COLLECTION</h1>

      <div className='grid grid-cols-4 gap-5 p-10'>
        {new_collections.map((item)=>{
          return(<Item id1={item.id} name={item.name} image={item.image} category={item.category} old_price={item.old_price} new_price={item.new_price}/>

          )
        })}
      </div>
      
      </div>
    </div>
  )
}

export default NewCollection
