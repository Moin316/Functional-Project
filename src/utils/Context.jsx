import React, { createContext, useState,useEffect, useContext } from 'react'
export const Productcontext=createContext();
import axios from "./axios";
const Context = (props ) => {
    const [products,setProducts]=useState(JSON.parse(localStorage.getItem('products'))||null);
    const getProducts=async()=>{
      try{
        const {data}=await axios.get("/products");
        setProducts(data);
      }
      catch(error){
        console.log(error);
      }
    }
    useEffect(()=>{
      getProducts();
    },[]);
  return (
    <Productcontext.Provider value={[products,setProducts]}>
    {props.children}
    </Productcontext.Provider>
  )
}

export default Context