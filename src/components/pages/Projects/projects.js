import React from 'react';
import ProjectSection from './ProjectSection';

function Projects() {
  return (
    <main className="main">
      <section className="section-wrapper">
        <div className="content-wrapper">
          <div className="top-line">
            Here is a small selection of projects I have created...
          </div>
          <ProjectSection />
        </div>
      </section>
    </main>
  );
}

export default Projects;
