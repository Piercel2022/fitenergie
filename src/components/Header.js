import React from 'react';
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">
        <img src={logo} width={150}   alt="logo"/></div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="text-gray-600 hover:text-gray-800">Home</a></li>
            <li><a href="#products" className="text-gray-600 hover:text-gray-800">Produits</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
