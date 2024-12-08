import React, { useContext, useState } from 'react'
import { Productcontext } from '../utils/Context';
import { nanoid } from 'nanoid';
const Create = () => { 
    const [products,setProducts]=useContext(Productcontext);
    const [title, setTitle]=useState("");
    const [image, setImage]=useState("");
    const [category, setCategory]=useState("");
    const [price, setPrice]=useState("");
    const [description, setDescription]=useState("");
    const AddProductHandler=(e)=>{
        e.preventDefault();
        if(title.trim().length<5||image.trim().length<5||category.trim().length<5||description.trim().length<5){
          alert("All fields must be at least 5 characters long");
          return ;
        }
        const product={
          id:nanoid(),
            title,image,category,price,description,
        }
        setProducts([...products,product]);
        setTitle(""); 
        setCategory("");




    }
  return (
    <form onSubmit={AddProductHandler}className="flex flex-col items-center p-[5%] w-screen h-screen">
      <h1 className="mb-5 text-xl w-1/2">Add New Product</h1>
      <input
        type="text"
        placeholder="Image Link"
        className="text-xl bg-zinc-300 rounded w-1/2 mb-3 p-3"
        onChange={(e) => {
          setImage(e.target.value);
        }}
        value={image}
      ></input>
      <input
        type="text"
        placeholder="title"
        className="text-xl bg-zinc-300 rounded w-1/2 mb-3 p-3"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      ></input>
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="Category"
          className="text-xl bg-zinc-300 rounded w-[45%] mb-3 p-3"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          value={category}
        ></input>
        <input
          type="number"
          placeholder="price"
          className="text-xl bg-zinc-300 rounded w-[45%] mb-3 p-3"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          value={price}
        ></input>
      </div>
      <textarea
        className="text-xl bg-zinc-300 rounded w-1/2 mb-3 p-3 h-[150px]"
        rows="10" placeholder='Enter Description Here...'
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></textarea>
      <div className='w-1/2'>
      <button
        className="self-start py-2 px-6 border rounded border-blue-200 text-blue-300 hover:text-black hover:bg-blue-300 hover:scale-105 transition-all">
            Add Product
        </button>
      </div>
    </form>
  );
}

export default Create
