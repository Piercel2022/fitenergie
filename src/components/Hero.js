import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-blue-500 text-white text-center py-20">
      <div className="container mx-auto">
        <h1 className="text-6xl font-bold">Bienvenue </h1>
        <p className="mt-4 text-lg">Votre parcours vers une vitalité optimale </p>
        <a href="#products" className="mt-8 inline-block bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
          Explorez plus
        </a>
      </div>
    </section>
  );
};

export default Hero;
