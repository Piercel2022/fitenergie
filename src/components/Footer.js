import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>Suivez nous sur Instagram</p>
        <a href="https://www.instagram.com/vitaforme_officiel" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
          @vitaforme_officiel
        </a>
        <p className="mt-4">&copy; {new Date().getFullYear()} VitaForme. Tous droits reservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
