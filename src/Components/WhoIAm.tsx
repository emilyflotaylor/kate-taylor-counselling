import React from 'react';
import profilePic from '../assets/profilePic.jpeg'


const WhoIAm: React.FC = () => {
  return (

        <div className="playfair-regular text-left justify-center mt-48 grid grid-cols-1 lg:grid-cols-2 w-4/5 mx-auto lg:gap-16">
     
        <div className="relative w-full">
        {/* <h1 className="text-xl font-bold tracking-tight text-[#c87467] sm:text-2xl">   
          WHO I AM
        </h1> */}

        <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl mt-6">   
          I will help you safely face your pain, let go of unhelpful behaviours and feel empowered to live a life with more ease.
        </h1>
        <img src={profilePic} className='rounded-2xl w-[400px] mt-6' />

        <hr className="my-12 h-0.5 border-t-0 bg-gray-600 opacity-100 dark:opacity-50 lg:hidden" />
      </div>
      <div className="w-full">
      <p className="mt-6 text-2xl leading-8 text-gray-600">
      I am a fully insured, British Association of Counselling and Psychotherapy (BACP) Accredited therapist with over 10 years experience supporting people on a crisis telephone line, in a bereavement service, and with staff at a large NHS hospital and a college of further education.        </p>
      <p className="mt-6 text-2xl  leading-8 text-gray-600">
         Understanding the mind/body connection and the power of acknowledging and releasing feelings, in a healthy way, was the turning point for my own physical and mental wellbeing and is the foundation for my therapy practice.
        </p>
        <p className="mt-6 text-2xl  leading-8 text-gray-600">
          By drawing on my initial humanistic/existential training, together with a range of more mindful, creative and trauma-focused tools, including Emotional Freedom technique, I will help you explore how you feel in the present, get some healthy perspective on how the past has affected the way you feel now, but ultimately look towards a brighter future.
        </p>
      </div>
      </div>
  );
}

export default WhoIAm;


