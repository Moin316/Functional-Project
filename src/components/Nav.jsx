import React from 'react'

const Nav = () => {
  return (
    <nav className='w-[15%] h-screen bg-zinc-100 flex flex-col items-center pt-5'>
      <a className='py-2 px-6 border rounded border-blue-200 text-blue-300 mb-3' href='/create'>Add New Product</a>
      <hr className="my-3 w-[80%]"/ >
      <h1 className='text-2xl mb-3 w-[80%] '>Category Filter</h1>
      <ul className='w-[80%] '>
        <li className='mb-3  flex items-center'><span className=' w-[15px] h-[15px] bg-blue-100 rounded-full mr-2'></span>cat 1</li>
        <li className='mb-3  flex items-center'><span className=' w-[15px] h-[15px] bg-red-100 rounded-full mr-2'></span>cat 1</li>
        <li className='mb-3 flex items-center'><span className=' w-[15px] h-[15px] bg-green-100 rounded-full mr-2'></span>cat 1</li>
        
      </ul>
    </nav> 
  )
}

export default Nav