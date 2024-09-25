import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../utils/Context';

const Edit = () => {
    const [products, setproducts] = useContext(ProductContext)
    const navigate = useNavigate();
    const {id} = useParams();
    const [product, setproduct] = useState({
      title: "",
      image: "",
      category: "",
      price: "",
      description: ""
    })

    const changeHandler = (e) => {
      //console.log(e.target.name, e.target.value,)
      setproduct({...product, [e.target.name]: e.target.value})
    }
  
    

    useEffect(() => {
     setproduct(products.filter((p) => p.id == id)[0]);
    }, [id])
    
    const AddProductHandler = (e) => {
      e.preventDefault();
    
      if (
        product.title.trim().length < 5 ||
        product.image.trim().length < 5 ||
        product.category.trim().length < 5 ||
        product.price.trim().length < 1 ||
        product.description.trim().length < 5
      ) {
        alert("The minimum length does not meet the requirements");
        return;
      }
       
      const pi = products.findIndex((p) => p.id ==id);
      const copyData = [...products];
      copyData[pi] = {...products[pi], ...product}
     
      setproducts(copyData);
       localStorage.setItem(
        "products",
        JSON.stringify(copyData)
       )
       navigate(-1);
    };
    console.log(products);
    
  return (
    <form onSubmit={AddProductHandler} className='flex flex-col items-center p-[5%] w-screen h-screen'>
    <h1 className='mb-5 w-1/2 text-3xl'>Edit your Product</h1>

    <input type ='url' placeholder='Image Link' className='text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3' name = 'image'
        onChange={changeHandler} value={product && product.image} />

      <input type ='text' placeholder='title' className='text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3' name = 'title'
        onChange={changeHandler} value={product && product.title} />

      <div className='w-1/2 flex justify-between'>
      <input type ='text' placeholder='Category' className='text-2xl bg-zinc-100 rounded p-3 w-[48%] mb-3' name = 'category'
        onChange={changeHandler} value={product && product.category} />

      <input type ='number' placeholder='Price' className='text-2xl bg-zinc-100 rounded p-3 w-[48%] mb-3' name = 'price'
        onChange={changeHandler} value={product && product.price} />
      </div>

      <textarea name = 'description'onChange={changeHandler} value={product && product.description} placeholder='Enter Product description here...'
       className='text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3' rows="10">
      </textarea>

    <div className='w-1/2'>
      <button type='submit'className ='py-2 px-5 border rounded border-blue-200 text-black-300 mr-2 hover:bg-sky-300'>
        Save Changes
      </button> 

      <button type='button' className='py-2 px-5 border rounded border-blue-200 text-black-300 hover:bg-red-300' onClick={() => {
          settitle("");
          setimage("");
          setcategory("");
          setprice("");
          setdescription("");
        }}>
          Reset
        </button> 
    </div>

    </form>
  )
}

export default Edit