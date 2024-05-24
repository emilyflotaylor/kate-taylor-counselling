import React from 'react';
import profilePic from '../assets/IMG_9253.jpg';

const WhoIAm: React.FC = () => {
  return (
    <div className="playfair-regular text-left justify-center mt-48 grid grid-cols-1 lg:grid-cols-2 w-4/5 gap-16 mx-auto items-center">
      <div className="relative grid-cols-1 w-full">
        <div className='text-2xl text-center'> Placeholder for picture</div>
      </div>
      <div className='grid-cols-1 lg:grid-cols-2'>
        <h1 className="text-xl font-bold tracking-tight text-[#c87467] sm:text-2xl">   
          WHO I AM
        </h1>
        <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl mt-6">   
          I am a fully insured, British Association of Counselling and Psychotherapy (BACP) Accredited therapist with over 10 years experience supporting people on a crisis telephone line, in a bereavement service, and with staff at a large NHS hospital and a college of further education. 
        </h1>
        <hr className="my-12 h-0.5 border-t-0 bg-gray-600 opacity-100 dark:opacity-50" />
        <p className="mt-6 text-lg leading-8 text-gray-600">
          My many years of working in a bereavement service have shown me how beautifully resilient humans can be even with the heaviest burden to carry. Understanding the mind/body connection and the power of acknowledging and releasing feelings, in a healthy way, was the turning point for my own physical and mental wellbeing and is the foundation for my therapy practice.
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          By drawing on my initial humanistic/existential training, together with a range of more mindful, creative and trauma-focused tools, including Emotional Freedom technique, I will help you explore how you feel in the present, get some healthy perspective on how the past has affected the way you feel now, but ultimately look towards a brighter future. I will help you safely face your pain, let go of unhelpful behaviours and feel empowered to live a life with more ease.
        </p>
      </div>
    </div>
  );
}

export default WhoIAm;
