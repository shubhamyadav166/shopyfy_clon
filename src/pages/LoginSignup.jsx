import React from 'react'

function LoginSignup() {
  return (
    <div className='bg-gradient-to-b from-emerald-500 to-amber-50 flex justify-center items-center h-screen'>
      <div className='flex flex-col absolute w-sm bg-amber-50 '>
        <h1 className='p-5 text-3xl font-bold'> Sign Up </h1>
        <div className='flex flex-col gap-5 justify-center px-10 py-10'>
          <input className='border p-3 w-full' type="text" name="name" placeholder='Enter Your Name' />
          <input className='border p-3 w-full' type="text" name="email" placeholder='Enter Your Email' />
          <input className='border p-3 w-full' type="text" name="password" placeholder='Enter Your Password' />
          <button className='bg-red-500 border rounded p-1'>Continue</button>
          <p>Already have an account ? <span className='text-red-600 hover:underline'>Login here</span></p>
          <p className='flex '>
            <input type="checkbox" className='hover:border-blue-900' />
            <p className='px-2'>By continuing,<span className='text-blue-700 '> i agree</span> to the terms of use & privacy</p>
          </p>
        </div>
        <p></p>
      </div>
    </div >
  )
}

export default LoginSignup
