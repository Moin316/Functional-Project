import React, { useEffect,useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { Productcontext } from '../utils/Context'
import Loading from './Loading'
import axios from "../utils/axios"
const Home = () => {
  const [products] = useContext(Productcontext);
  const {search}=useLocation();
  const category=decodeURIComponent(search.split("=")[1]);
  const [filteredProducts,setFilteredProducts]=useState(products);
  const getCategoryProducts=async()=>{
    try{
      const { data }=await axios.get(`/products/category/${category}`);
      setFilteredProducts(data);
      // console.log(filteredProducts);
    }
    catch(error){
      console.log(error);
    }
  };
  useEffect(()=>{
    if(!filteredProducts||category=='undefined') setFilteredProducts(products);
    if(category!="undefined") getCategoryProducts();
  },[category,products]);
  return (products?
    <>
    <Nav/>
    <div className=' w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto '>
    {filteredProducts&&filteredProducts.map((p,i)=>
    <Link key={i} to={`/details/${p.id}`} className='mr-3 mb-3   card p-5 border shadow rounded w-[18%] h-[30vh] flex flex-col items-center justify-center'>

      <div className='hover:scale-125 ease-in-out duration-1000 w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3'
      style={{
        backgroundImage: `url(${p.image})`,}}></div>
        <h1 className='hover:text-blue-400 font-normal text-xs'>
        {p.title} 
        </h1>
    </Link>)
    }
  </div>
  </>:<Loading/>
  )
}

export default Home