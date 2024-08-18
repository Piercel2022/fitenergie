import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>Follow us on Instagram</p>
        <a href="https://www.instagram.com/bundlefit2024" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
          @bundlefit2024
        </a>
        <p className="mt-4">&copy; {new Date().getFullYear()} Fitenergie. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
