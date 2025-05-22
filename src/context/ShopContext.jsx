import React from 'react'
import { createContext } from 'react'
import App from '../App'
import { all_product } from '../assets/all_product.js'
export const context = createContext()

const ShopContext = () => {
    const allProduct = { all_product }
    return (
        <context.Provider value={allProduct}>
            <App />
        </context.Provider>
    )
}

export default ShopContext
