
import React, { useContext, useEffect } from 'react'
import { data } from '../context/ShopContext'
import dropdown from '../assets/dropdown_icon.png'
import Item from '../components/item/item'
import { useState } from 'react'
const ShopCategory = (props) => {
    const all_product = useContext(data)
    // const all_products = allProduct.all_product


    return (

        <div>
            <img className='w-full h-96' src={props.banner} alt="Loadding.................................." />
            <div>
                <div className='flex justify-between px-50 my-10'>
                    <span> out of 36</span>
                    <div className='flex'> <h1 className='px-1'>short by</h1> <img className='h-5 pt-1 ' src={dropdown} alt="" /> </div>
                </div>
                <div className='bg-gradient-to-b from-amber-50 to-emerald-500'>
                    <div className='grid grid-cols-4 gap-4 '>

                        {all_product.map((item, i) => {
                            if (item.category === props.category) {

                                return (


                                    <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

                                )
                            }


                        })}


                    </div>
                    <div className=' flex justify-center m-10 p-10'>
                        <button className='bg-slate-400 p-2 border-1 5 rounded-4xl'>Explore More...</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ShopCategory
