import React from 'react';

const products = [
  { id: 1, title: "Fitness", description: "Mega Fitness Bundle.", imgUrl: "https://via.placeholder.com/150" },
  { id: 2, title: "Santé", description: "This is an awesome product.", imgUrl: "https://via.placeholder.com/150" },
  { id: 3, title: "Bienetre", description: "This is an awesome product.", imgUrl: "https://via.placeholder.com/150" },
];

const Products = () => {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {products.map(product => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg p-6">
              <img src={product.imgUrl} alt={product.title} className="w-full h-48 object-cover rounded-md" />
              <h3 className="text-xl font-semibold mt-4">{product.title}</h3>
              <p className="mt-2 text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
