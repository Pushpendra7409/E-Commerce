import React, { useState } from 'react'

const Create = () => {
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  const AddProductHandler = (e) => {
      e.preventDefault();
      const product = {
        title,
        image,
        category,
        price,
        description
      };
      console.log(product);
  };

  return (
    <form onSubmit={AddProductHandler} className='flex flex-col items-center p-[5%] w-screen h-screen'>
    <h1 className='mb-5 w-1/2 text-3xl'>Add New Product</h1>

    <input type ='url' placeholder='Image Link' className='text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
        onChange={(e) => setimage(e.target.value)} value={image} />

      <input type ='text' placeholder='title' className='text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
        onChange={(e) => settitle(e.target.value)} value={title} />

      <div className='w-1/2 flex justify-between'>
      <input type ='text' placeholder='Category' className='text-2xl bg-zinc-100 rounded p-3 w-[48%] mb-3'
        onChange={(e) => setcategory(e.target.value)} value={category} />

      <input type ='number' placeholder='Price' className='text-2xl bg-zinc-100 rounded p-3 w-[48%] mb-3'
        onChange={(e) => setprice(e.target.value)} value={price} />
      </div>

      <textarea onChange={(e) => setdescription(e.target.value)} value={description} placeholder='Enter Product description here...'
       className='text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3' rows="10">
      </textarea>

    <div className='w-1/2'>
      <button className ='py-2 px-5 border rounded border-blue-200 text-black-300 mr-2 hover:bg-sky-300'>
        Add new Product
      </button> 

      <button className ='py-2 px-5 border rounded border-blue-200 text-black-300 hover:bg-red-300'>
        Reset
      </button> 
    </div>

    </form>
  )
}

export default Create