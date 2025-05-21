import React from 'react'
import { createContext } from 'react'
import { all_product } from '../assets/all_product.js'

const shopcontext = createContext()
const ShopContextProvider = (props) => {
    const contextValue = { all_product }
    return (
        <shopcontext.Provider value={contextValue}>
            {props.children}
        </shopcontext.Provider>
    )
}

export default ShopContextProvider
export { shopcontext }