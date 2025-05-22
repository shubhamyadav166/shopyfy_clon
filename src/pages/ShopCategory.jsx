import React, { useContext } from 'react'
import { context } from '../context/ShopContext'

const ShopCategory = (props) => {
    const all_product = useContext(context)
    return (
        <div>
            <img className='w-full h-96' src={props.banner} alt="Loadding.................................." />
        </div>
    )
}

export default ShopCategory
