import React from 'react';
import './App.css';
import Hero from './Components/Hero';
import WhoIAm from './Components/WhoIAm';
import WhatIDo from './Components/WhatIDo';
import GetInTouch from './Components/GetInTouch';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <WhoIAm />
      <WhatIDo/>
      <Testimonial/>

      <GetInTouch/>
      <Contact/>
    </div>
  );
}

export default App;
