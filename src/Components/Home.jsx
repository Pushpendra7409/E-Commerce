import React, { useContext, useEffect, useState } from 'react';
import Nav from './Nav';
import { Link, useLocation } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import Loading from './Loading';
import axios from '../utils/axios';

const Home = () => {
  const [products] = useContext(ProductContext, []);
  const { search } = useLocation();

  // Extract the category from the URL, and handle the case when it's not present
  const category = search ? decodeURIComponent(search.split('=')[1]) : '';

  const [filteredProducts, setFilteredProducts] = useState(null);

  const getProductsByCategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setFilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!category || category === "undefined") {
      setFilteredProducts(products); // Show all products if no category is selected
    } else {
      getProductsByCategory();
    }
  }, [category, products]);

  return products ? (
    <>
      <Nav />
      <div className='w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto'>
        {filteredProducts && filteredProducts.map((p, i) => (
          <Link
            key={p.id}
            to={`/details/${p.id}`}
            className='mr-3 mb-3 card p-3 border shadow rounded w-[18%] h-[25vh] flex flex-col justify-center items-center'>
            <div
              className='hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center'
              style={{ backgroundImage: `url(${p.image})` }}>
            </div>
            <h1 className='hover:text-blue-300'>{p.title}</h1>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
