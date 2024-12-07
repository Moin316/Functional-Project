import React, {  useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from "../utils/axios";
import Loading from './Loading';
const Details = () => {
  const {id}=useParams();
  const [details,setDetails] = useState();
  const product=async ()=>{
    try{
      const {data}=await axios.get(`/products/${id}`);
      setDetails(
        data
      )
    }
    catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    product();
  },[])
  return (details?
    <div className='w-[70%] h-full  m-auto p-[10%]  flex  justify-center items-center'>
        <img className='mr-5 object-contain h-[80%] w-[50%]' src={`${details.image}`} alt=''></img>
        <div className=' content w-[50%]'>
            <h1 className='text-2xl'> {details.title}</h1>
            <h2 className='text-zinc-500 my-3'>$ {details.price} </h2>
            <p className='text-black mb-3 '> {details.description} </p>

            <Link className='py-2 px-6 border rounded border-blue-200 text-blue-300 mb-3 mr-5 '>Edit</Link>
            <Link className='py-2 px-6 border rounded border-red-200 mb-3 text-red-500 '>Delete</Link>
        </div>
    </div>
    :<Loading/>
  )
}

export default Details