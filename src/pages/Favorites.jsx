import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard'; 

const Favorites = () => {

  const likedProducts = useSelector((state) => state.like.items);

  return (
    <div className="container py-6">
      <h1 className="text-2xl font-bold mb-6">Favorites</h1>
      {likedProducts.length === 0 ? (
        <p>You have no favorite items yet.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {likedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
