import React, {  useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from "../utils/axios";
import Loading from './Loading';
import { Productcontext } from '../utils/Context';
import { useNavigate } from 'react-router-dom';
const Details = () => {
  const {id}=useParams();
  const [products, setProducts] = useContext(Productcontext);
  const [product,setProduct]=useState(null);
  const [details,setDetails] = useState();
  const navigate=useNavigate();
  // const product=async ()=>{
  //   try{
  //     const {data}=await axios.get(`/products/${id}`);
  //     setDetails(
  //       data
  //     )
  //   }
  //   catch(error){
  //     console.log(error);
  //   }
  // }
  // useEffect(()=>
  //   product();
  // },[])
  useEffect(()=>{
    if(!details ){
      setDetails(products.filter((p)=>p.id==id)[0]);
    }
  })
  const productDeleteHandler=(i)=>{
    const filteredProducts =products.filter(p=>p.id!=i)
    setProducts(filteredProducts);
    localStorage.setItem('products',JSON.stringify(filteredProducts));
    navigate('/');
  }
  return details ? (
    <div className="w-[70%] h-full  m-auto p-[10%]  flex  justify-center items-center">
      <img
        className="mr-5 object-contain h-[80%] w-[50%]"
        src={`${details.image}`}
        alt=""
      ></img>
      <div className=" content w-[50%]">
        <h1 className="text-2xl"> {details.title}</h1>
        <h2 className="text-zinc-500 my-3">$ {details.price} </h2>
        <p className="text-black mb-3 "> {details.description} </p>

        <Link to={`/edit/${details.id}`} className="py-2 px-6 border rounded border-blue-200 text-blue-300 mb-3 mr-5 ">
          Edit
        </Link>
        <button
          onClick={()=>productDeleteHandler(details.id)}
          className="py-2 px-6 border rounded border-red-200 mb-3 text-red-500 "
        >
          Delete
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Details