import React, { useContext } from 'react'
import { Productcontext } from '../utils/Context'
import { Link } from 'react-router-dom';

const Nav = () => {
  const [products]=useContext(Productcontext);
  const distinct = products && products.reduce((acc, currentVal) =>[...acc,currentVal.category],[]);
  const distinct_category = [...new Set(distinct)].sort();
  console.log(distinct_category);
  const generateRandomColor = () => {
    return `rgba(${(Math.random() * 255).toFixed()}, ${(
      Math.random() * 255
    ).toFixed()}, ${(Math.random() * 255).toFixed()}, 0.4)`;
  };
  console.log(generateRandomColor());
  return (
    <nav className='w-[15%] h-screen bg-zinc-100 flex flex-col items-center pt-5'>
      <a className='py-2 px-6 border rounded border-blue-200 text-blue-300 mb-3' href='/create'>Add New Product</a>
      <hr className="my-3 w-[80%]"/ >
      <h1 className='text-2xl mb-3 w-[80%] '>Category Filter</h1>
      <div className='w-[80%] '>
      {distinct_category.map((category,index) => (
        <Link key={index} to={`/?category=${category}`} className='mb-3  flex items-center'>
        <span style={{backgroundColor:generateRandomColor()}} className=' w-[15px] h-[15px] bg-blue-100 rounded-full mr-2'>
        </span>{`${category}`}</Link>)
      )
      }
      </div>
    </nav> 
  )
}

export default Nav