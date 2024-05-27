import React from 'react';
import logoImage from '../assets/AdobeStock_125867356.jpeg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl flex justify-center py-6 mb-12">
        <img className='w-1/3 md:w-1/6 lg:w-1/8' src={logoImage} alt="Logo" />
      </div>
    </footer>
  );
};

export default Footer;
