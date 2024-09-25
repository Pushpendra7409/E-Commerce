import axios from '../utils/axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Loading from './Loading';
import { ProductContext } from '../utils/Context';

const Details = () => {
  const navigate = useNavigate();
  const [products, setproducts] = useContext(ProductContext); // Correctly get setproducts
  const [product, setProduct] = useState(null);
  const { id } = useParams();
 

  // Find the product based on the id from the products array
  useEffect(() => {
    if (!product) {
      const foundProduct = products.find((p) => p.id == id);
      setProduct(foundProduct);
    }
  }, [id, products, product]);

  // Function to handle product deletion
  const ProductDeleteHandler = (id) => {
    const FilteredProducts = products.filter(p => p.id !== id);
    
    // Update the product state and localStorage
    setproducts(FilteredProducts);
    localStorage.setItem("products", JSON.stringify(FilteredProducts));

    // Navigate back to the home page after deletion
    navigate('/');
  };

  return product ? (
    <div className='w-[70%] flex h-full justify-between items-center m-auto p-[10%]'>
      <img className='object-contain w-[40%] h-[80%]' src={`${product.image}`} alt="Product Image" />
      <div className='content w-[50%]'>
        <h1 className='text-4xl'>{product.title}</h1>
        <h3 className='text-zinc-400 my-5'>{product.category}</h3>
        <p className='mb-3'>{product.description}</p>
        <h2 className='text-red-300 mb-[5%]'>{product.price}</h2>
        <Link className='py-2 px-5 border rounded border-blue-200 text-blue-300 mr-5'>Edit</Link>
        <button onClick={() => ProductDeleteHandler(product.id)} 
        className='py-2 px-5 border rounded border-red-200 text-red-300'>Delete</button>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Details;
