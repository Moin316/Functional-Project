import React, { createContext, useState,useEffect } from 'react'
export const Productcontext=createContext();
import axios from "./axios";
const Context = (props ) => {
    const [products,setProducts]=useState(null);
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