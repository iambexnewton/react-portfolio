import React from 'react';
import HeroSection from '../../HeroSection';

import { homeObjOne, homeObjTwo } from './Data';
import { projectObjOne } from '../Projects/project-data';
import BlogContainer from '../../BlogContainer';
import ProjectSection from '../Projects/projects';

function Homepage() {
  return (
    <main className="main">
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <ProjectSection {...projectObjOne} />
      <BlogContainer />
    </main>
  );
}

export default Homepage;
