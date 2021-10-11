import React from 'react';
import HeroSection from '../../HeroSection';

import { homeObjOne, homeObjTwo } from './Data';
import BlogContainer from '../../BlogContainer';

function Homepage() {
  return (
    <main className="main">
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <BlogContainer />
    </main>
  );
}

export default Homepage;
