import React, { createContext, useState } from 'react'
export const Productcontext=createContext();
const Context = (props ) => {
    const [val,setVal]=useState(null);
  return (
    <div>
    {props.children}
    </div>
  )
}

export default Context