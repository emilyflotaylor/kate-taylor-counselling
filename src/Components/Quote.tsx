import React from 'react';
import profilePic from '../assets/profilePic.jpeg';

// Reusable Text Block Component
const TextBlock: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => (
    <p className={`mt-6 text-lg sm:text-xl md:text-2xl leading-8 text-gray-600 ${className}`}>
      {text}
    </p>
  );
  
  // Reusable Header Component
  const Header: React.FC<{ text: string }> = ({ text }) => (
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mt-12">
      {text}
    </h1>
  );
  

const Quote: React.FC = () => {
  return (
    <div className="playfair-regular text-center justify-center w-full sm:w-4/5 md:w-3/4 lg:w-1/2 mx-auto mt-12 px-4 sm:px-6 md:px-8">
      <Header text="I will help you safely face your pain, let go of unhelpful behaviours and feel empowered to live a life with more ease." />
      
      <div className="w-full">
        <TextBlock text="I am a fully insured, British Association of Counselling and Psychotherapy (BACP) Accredited therapist with over 10 years experience supporting people on a crisis telephone line, in a bereavement service, and with staff at a large NHS hospital and a college of further education." />
        <TextBlock text="Understanding the mind/body connection and the power of acknowledging and releasing feelings, in a healthy way, was the turning point for my own physical and mental wellbeing and is the foundation for my therapy practice." />
        <TextBlock text="By drawing on my initial humanistic/existential training, together with a range of more mindful, creative and trauma-focused tools, including Emotional Freedom technique, I will help you explore how you feel in the present, get some healthy perspective on how the past has affected the way you feel now, but ultimately look towards a brighter future." />
      </div>

      <div className="w-full flex items-center justify-center">
        <img src={profilePic} className="rounded-2xl w-80 mt-12" />
      </div>
      
      <div className="w-full">
        <Header text="I believe a safe, trusting and non-judgemental relationship with the right therapist, empowers clients to bring about permanent, positive change." />
        <TextBlock text="I understand our reactions to life’s inevitable challenges are often automatic, unconscious and unhelpful coping mechanisms, rooted in our past. What is triggered often relates to old attachment and trauma wounds." />
        <TextBlock text="I also have empathy for the reasons you might consciously work hard at masking, numbing or suppressing your pain. It might be to protect your loved ones or to prevent social stigma or discrimination." />
        <TextBlock text="But my professional and personal life have demonstrated that these ways of living are hard work and your true self, who needs and deserves to be accepted and loved to thrive, gets lost in the process. This can become incredibly debilitating, leading to periods of depression, anxiety, physical illness, addiction or even breakdown." />
        <Header text="I have helped people from all walks of life navigate anxiety, depression, work-stress, grief and loss, ME/Chronic Fatigue, women’s and relationship issues." />
      </div>
    </div>
  );
}

export default Quote;
