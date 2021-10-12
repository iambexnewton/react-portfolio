import React from 'react';
import HeroSection from '../../HeroSection';

import { homeObjOne, homeObjTwo } from './Data';
import BlogContainer from '../../BlogContainer';
import ProjectSection from '../Projects/projects';

function Homepage() {
  return (
    <main className="main">
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <ProjectSection />
      <BlogContainer />
    </main>
  );
}

export default Homepage;
