import React from 'react';

const WhatIDo: React.FC = () => {
  return (
    <div className="playfair-regular text-left justify-center mt-48 grid grid-cols-1 lg:grid-cols-2 w-4/5 mx-auto lg:gap-16">
      <div className="relative w-full">
        <h1 className="text-xl font-bold tracking-tight text-[#c87467] sm:text-2xl">   
          WHAT I DO
        </h1>
        <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl mt-6">   
          I have helped people from all walks of life navigate grief and loss, anxiety, depression, work-stress, ME/Chronic Fatigue, women’s and relationship issues.
        </h1>
        <hr className="my-12 h-0.5 border-t-0 bg-gray-600 opacity-100 dark:opacity-50 lg:hidden" />
      </div>
      <div className="w-full">
        <p className="text-lg leading-8 text-gray-600 lg:mt-14">
          I understand our reactions to life’s inevitable challenges are often automatic, unconscious and unhelpful coping mechanisms, rooted in our past. What is triggered often relates to old attachment and trauma wounds.
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          I also have empathy for the reasons you might consciously work hard at masking, numbing or suppressing your pain. It might be to protect your loved ones or to prevent social stigma or discrimination.
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          But my professional and personal life have demonstrated that these ways of living are hard work and your true self, who needs and deserves to be accepted and loved to thrive, gets lost in the process. This can become incredibly debilitating, leading to periods of depression, anxiety, physical illness, addiction or even breakdown.
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
        My many years of working in a bereavement service have shown me how beautifully resilient humans can be even with the heaviest burden to carry. I believe a safe, trusting and non-judgemental relationship with the right therapist, empowers clients to bring about permanent, positive change.
        </p>
      </div>
    </div>
  );
}

export default WhatIDo;
