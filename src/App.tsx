import React from 'react';
import './App.css';
import Hero from './Components/Hero';
import WhoIAm from './Components/WhoIAm';
import WhatIDo from './Components/WhatIDo';
import GetInTouch from './Components/GetInTouch';
import Testimonial from './Components/Testimonial';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-24">
      <Hero />
      <WhoIAm />
      <WhatIDo/>
      <Testimonial/>
      <GetInTouch/>
    </div>
  );
}

export default App;
