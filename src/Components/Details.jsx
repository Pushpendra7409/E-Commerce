import React from 'react'
import { Link } from 'react-router-dom'

const Details = () => {
  return (
    <div className='w-[70%] flex h-full justify-between items-center m-auto p-[10%]'>

     <img className='object-contain w-[40%] h-[80%]' src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Product Image" />
     <div className='content w-[50%]' >
        <h1 className='text-4xl'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
        <h3 className='text-zinc-400 my-5'>Men's clothing</h3>
        <p className='mb-3'>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
        <h2 className='text-red-300 mb-[5%]'>Pricing: $100.00</h2>
        <Link className='py-2 px-5 border rounded border-blue-200 text-blue-300 mr-5'>Edit</Link>
        <Link className='py-2 px-5 border rounded border-red-200 text-red-300'>Delete</Link>
     </div>

    </div>
  )
}

export default Details