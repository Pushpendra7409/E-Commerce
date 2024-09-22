import axios from '../utils/axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from './Loading';

const Details = () => {
  const [products, setproduct] = useState(null);
  const {id} = useParams();
  console.log(id);
  const getsingleproduct = async () => {
    try{
         const {data} = await axios.get(`/products/${id}`)
         setproduct(data);
    }catch{
      console.log(error);
    }
  } 

  useEffect(() => {getsingleproduct()}, [])

  return products ?(
    <div className='w-[70%] flex h-full justify-between items-center m-auto p-[10%]'>

     <img className='object-contain w-[40%] h-[80%]' src={`${products.image}`} alt="Product Image" />
     <div className='content w-[50%]' >
        <h1 className='text-4xl'>{products.title}</h1>
        <h3 className='text-zinc-400 my-5'>{products.category}</h3>
        <p className='mb-3'>{products.description}</p>
        <h2 className='text-red-300 mb-[5%]'>{products.price}</h2>
        <Link className='py-2 px-5 border rounded border-blue-200 text-blue-300 mr-5'>Edit</Link>
        <Link className='py-2 px-5 border rounded border-red-200 text-red-300'>Delete</Link>
     </div>

    </div>
  ): (<Loading/>
  );
}

export default Details