import React from 'react';
import elephantImage from '../assets/AdobeStock_94910721-min.jpeg';

const Hero: React.FC = () => {
  return (
    <div className="playfair-regular text-center items-center justify-center bg-cover bg-center flex flex-col gap-12 mt-12 w-11/12 md:w-4/5 mx-auto">
   
      <div className='flex flex-col bg-[#fbdfd0] rounded-xl p-4 sm:p-6 lg:p-12 w-full'>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-gray-900">
          Kate Taylor
        </h1>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-gray-900">
          Counselling & Psychotherapy
        </h1>
        <p className="mt-6 text-xl sm:text-2xl leading-8 text-[#c87467] font-semibold">
          Compassionate guidance through life's challenges.
        </p>
      </div>
      <div className="relative w-full sm:w-4/5 md:w-3/5">
        <img src={elephantImage} className='rounded-2xl w-full' />
      </div>
    </div>
  );
}

export default Hero;
