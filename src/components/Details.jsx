import React from 'react'
import { Link } from 'react-router-dom'
const Details = () => {
  return (
    <div className='w-[70%] h-full  m-auto p-[10%]  flex  justify-center items-center'>
        <img className='mr-5 object-contain h-[80%] w-[50%]' src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' alt=''></img>
        <div className=' content w-[50%]'>
            <h1 className='text-2xl'> Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops </h1>
            <h2 className='text-zinc-500 my-3'>$ 109.95 </h2>
            <p className='text-black mb-3 '> Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday </p>

            <Link className='py-2 px-6 border rounded border-blue-200 text-blue-300 mb-3 mr-5 '>Edit</Link>
            <Link className='py-2 px-6 border rounded border-red-200 mb-3 text-red-500 '>Delete</Link>
        </div>
    </div>
  )
}

export default Details