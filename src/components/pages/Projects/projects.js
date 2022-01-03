import React from "react";
import ProjectSection from "./ProjectSection";

function Projects() {
  return (
    <main className="main">
      <section className="section-wrapper">
        <div className="content-wrapper">
          <div className="section-title">Projects</div>
          <p className="text">Here is a small selection of projects.</p>
          <ProjectSection />
        </div>
      </section>
    </main>
  );
}

export default Projects;
