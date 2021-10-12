import React from 'react';
import HeroSection from '../../HeroSection';
import BlogContainer from '../../BlogContainer';
import ProjectSection from '../Projects/ProjectSection';

function Homepage() {
  return (
    <main className="main">
      <HeroSection />
      <section>
        Projects
        <ProjectSection />
      </section>
      <BlogContainer />
    </main>
  );
}

export default Homepage;
