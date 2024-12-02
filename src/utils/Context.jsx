import React, { createContext, useState } from 'react'
export const Productcontext=createContext();
const Context = (props ) => {
    const [products,setProducts]=useState(null);
  return (
    <Productcontext.Provider value={[products,setProducts]}>
    {props.children}
    </Productcontext.Provider>
  )
}

export default Context