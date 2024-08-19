import React from 'react';

// Import local images
import product1Image from '../assets/images/fitness.jpg'
import product2Image from '../assets/images/sante.jpg';
import product3Image from '../assets/images/bientre.jpg';

const products = [
  { id: 1, title: "Fitness", 
description: "Le Bundle Méga Fitness est un produit puissant et renforcé qui contient 58 e-books sur la santé et le fitness. Ces e-books couvrent une large gamme d'exercices pour des parties spécifiques du corps. En outre, le bundle contient 5000 articles sur la santé et le fitness", 
imgSrc: product1Image, link: "https://digistore24.com/redir/556489/PIiercel" },
  { id: 2, title: "Santé", description: "This is an awesome product.", imgSrc: product2Image, link: "https://example.com/product2" },
  { id: 3, title: "Bien-être", description: "This is an awesome product.", imgSrc: product3Image, link: "https://example.com/product3" },
];

const Products = () => {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Nos Produits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {products.map(product => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg p-6">
              <img src={product.imgSrc} alt={product.title} className="w-full h-48 object-cover rounded-md" />
              <h3 className="text-xl font-semibold mt-4">
                <a href={product.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {product.title}
                </a>
              </h3>
              <p className="mt-2 text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Products;