import React from 'react'
import { createContext } from 'react'
import App from '../App'
import { all_product } from '../assets/all_product.js'
export const data = createContext()

const ShopContext = () => {
    console.log(data)

    return (
        <data.Provider value={all_product}>
            <App />
        </data.Provider>
    )
}

export default ShopContext
