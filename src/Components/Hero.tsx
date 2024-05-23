import React from 'react';
import elephantImage from '../assets/AdobeStock_94910721-min.jpeg';

const Hero: React.FC = () => {
  return (
    <div className="playfair-regular text-center items-center justify-center bg-cover bg-center flex flex-col gap-12">
      <div className='flex flex-col  '>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Kate Taylor
        </h1>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Counselling & Psychotherapy
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Compassionate guidance through life's challenges.
        </p>
      </div>
      <img src={elephantImage} className='rounded-2xl sm:w-3/5' />

    </div>
  );
}

export default Hero;
