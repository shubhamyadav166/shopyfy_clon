import React from 'react'
import logo from "../../assets/logo.png"
import instagram from "../../assets/instagram.png"
import facebook from "../../assets/facebook.png"
import whatsapp from "../../assets/whatsapp.png"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className='flex flex-col items-center gap-10 m-5'>
      <div className='flex gap-5 justify-center pr-10'>
        <img className='h-15' src={logo} alt="" />
        <h1 className='text-3xl font-bold '>Shopify</h1>
      </div>

      <ul className='flex gap-12 text-xl  '>
        <li><Link to="/about">About</Link></li>
        <li> <Link to="/product">Products</Link></li>
        <li><Link to="/offices">Offices</Link></li>
        <li><Link to="/company">Company</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className='flex gap-10 justify-center'>
        <img className='h-10' src={instagram} alt="" />
        <img className='h-10' src={facebook} alt="" />
        <img className='h-10' src={whatsapp} alt="" />
      </div>
      <div>
        <h1 className='text-xl'>Copyright @ 2023 all right reserved</h1>
      </div>
    </div>
  )
}

export default Footer
