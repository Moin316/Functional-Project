import React from 'react'
import Nav from './Nav'
import Details from './Details'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <Nav/>
    <div className=' w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto '>
    <Link to="/details/1"
    className='mr-3 mb-3   card p-5 border shadow rounded w-[18%] h-[30vh] flex flex-col items-center justify-center'>
      <div className='hover:scale-125 ease-in-out duration-1000 w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3'
      style={{
        backgroundImage: "URL(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",}}></div>
        <h1 className='hover:text-blue-400'>
        lorem ipsum dolor sit amet, consectetur adip 
        </h1>
    </Link>
  </div>
  </>
  )
}

export default Home