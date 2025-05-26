import React, { useContext } from 'react'
import { data } from '../context/ShopContext.jsx'
import { useParams } from 'react-router-dom'

function Product() {
  const all_product = useContext(data)
  const productId = useParams()
  const product = all_product.find((e) => e.id === productId)

  return (
    <div className=''>
      Product
    </div>
  )
}

export default Product
