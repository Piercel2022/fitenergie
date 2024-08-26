import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white  text-center py-6" style={footerStyle}>
      <div className="container mx-auto text-center" style={iconContainerStyle}>
       
        <a href="https://www.instagram.com/vitaforme_officiel" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
        <FaInstagram style={iconStyle} />
        </a>
        <p className="mt-4">&copy; {new Date().getFullYear()} VitaForme. Tous droits reservés.</p>
      </div>
    </footer>
  );
};
const footerStyle = {
  padding: '20px',
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
};

const iconContainerStyle = {
  margin: '10px 0',
};

const iconStyle = {
  fontSize: '24px',
  color: '#fff',
  margin: '0 10px',
  
};

export default Footer;
