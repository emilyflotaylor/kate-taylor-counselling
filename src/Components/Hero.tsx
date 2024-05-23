import React from 'react';
import elephantImage from '../assets/AdobeStock_94910721-min.jpeg';


const Hero: React.FC = () => {
  return (
    <div className="playfair-regular text-center items-center justify-center mt-48 bg-cover bg-center flex flex-col">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
      Kate Taylor Counselling & Psychotherapy
    </h1>
    <p className="mt-6 text-lg leading-8 text-gray-600">
      Compassionate guidance through life's challenges.
    </p>
    <img src={elephantImage} className='mt-12 w-3/5 rounded-2xl'/>
   
  </div>

  );
}

export default Hero;
