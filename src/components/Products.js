import React from 'react';

// Import local images
import product1Image from '../assets/images/fitness.jpg';
import product2Image from '../assets/images/sante.jpg';
import product3Image from '../assets/images/bientre.jpg';

const products = [
  { id: 1, title: "Fitness", 
description: "Le Bundle Méga Fitness est un produit puissant et renforcé qui contient 58 e-books sur la santé et le fitness. Ces e-books couvrent une large gamme d'exercices pour des parties spécifiques du corps. En outre, le bundle contient 5000 articles sur la santé et le fitness", 
imgSrc: product1Image, link: "https://digistore24.com/redir/556489/PIiercel" },
  { id: 2, title: "Santé", description: "Le secret volcanique pour une perte de poids saine. Profiter d’une perte de poids saine et durable LavaSlim et ses 6 ingrédients naturels puissants, venant des volcans, et testés par des études cliniques.", imgSrc: product2Image, link: "https://lavaslim.co/#aff=PIiercel" },
  { id: 3, title: "Bien-être - Musique de fond", description: "Notre bibliothèque de 32 clips audio de haute qualité. Que vous soyez une agence de marketing, un producteur de vidéos ou un créateur de contenu, accédez instantanément à des clips composés professionnellement, parfaits pour tout projet vidéo", imgSrc: product3Image, link: "https://www.digistore24.com/redir/556453/PIiercel/" },
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