import React from 'react';
import './App.css';
import Hero from './Components/Hero';
import WhoIAm from './Components/WhoIAm';
import WhatIDo from './Components/WhatIDo';
import GetInTouch from './Components/GetInTouch';
import Testimonial from './Components/Testimonial';
import Footer from './Components/Footer';
import profilePic from './assets/profilePic.jpeg'
import Quote from './Components/Quote';



const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <Quote/>

      <Testimonial/>
      <GetInTouch/>
      <Footer/>
    </div>
  );
}

export default App;
