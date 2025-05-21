import React from 'react'
import Hero from '../components/hero/Hero.jsx'
import Popular from '../components/popular/popular.jsx'
import Offers from '../components/offers/Offers.jsx'
import NewCollection from '../collections/NewCollection.jsx'
import Newsletter from '../components/newsletter/Newsletter.jsx'

function Shop() {
  return (
    <div className='[background-color:#ffffff]'>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <Newsletter/>

    </div>
  )
}

export default Shop
