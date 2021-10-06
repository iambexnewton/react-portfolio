import React from 'react';
import HeroSection from '../../HeroSection';

import { homeObjOne, homeObjTwo } from './Data';

function Homepage() {
  return (
    <main className="main">
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
    </main>
  );
}

export default Homepage;
