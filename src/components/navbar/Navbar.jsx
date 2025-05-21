import React from 'react'
import { useState } from 'react'
import logo from '../../assets/logo.png'
import cart from '../../assets/cart.jpg'
import { Link,NavLink } from 'react-router-dom'
function Navbar() {
  const [count, setCount] = useState(4)
  const [menu, setmenu] = useState("home")
  return (
    <div className='border-b-2 border-gray-950 w-full p-1 flex justify-between px-4 font-medium items-center'>
      <div className='flex justify-center items-center '>
        <Link className='decoration-0' to="/"> <img className='h-15 w-15 rounded-3xl' src={logo} alt="" /></Link>
        <Link className='decoration-0' to="/"> <p className='text-2xl font-bold ml-5'>Shopify</p></Link>
      </div>

      <ul className='flex justify-between gap-10 cursor-pointer '>
        <li onClick={() => setmenu("home")} className='hover:text-blue-100'><Link className='' to="/">Home</Link>  {menu === "home" ? <hr /> : <></>}</li>
        <li onClick={() => setmenu("men")} className='hover:text-blue-100'><Link className='decoration-0' to="/men">Men</Link>
          {menu === "men" ? <hr /> : <></>}</li>
        <li onClick={() => setmenu("women")} className='hover:text-blue-100'><Link to="/women" activeStyle={{
          color:'red',
          fontWeight:'bold'
         }}>Women</Link>{menu === "women" ? <hr /> : <></>}</li>
        <li onClick={() => setmenu("kids")} className='hover:text-blue-100'><Link className='decoration-0' to="/kids">Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className='flex'>
        <Link className='decoration-0' to="/login"> <button className='border-2 border-gray-400 rounded-2xl my-1 text-xl font-medium px-5'>Login</button></Link>
        <div className='flex '>
          <Link className='decoration-0' to="/cart"><img className='h-10 w-12 rounded-xl ml-10' src={cart} alt="" /></Link>
          <p className='mb-4 mr-8 rounded-4xl bg-red-500 text-white justify-start items-start'>{count}</p>
        </div>
      </div>
    </div>
  )
}
export default Navbar
