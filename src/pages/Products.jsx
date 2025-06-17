import products from '../data/products';
import ProductCard from "../components/ProductsCard";
import React from 'react';

const Products = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-16 px-6 md:px-12 lg:px-24">
      <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
        Fresh Finds
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
