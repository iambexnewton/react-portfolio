import React from "react";
import ProjectSection from "./ProjectSection";

function Projects() {
  document.title = "Projects";
  return (
    <main className="main">
      <section className="section-wrapper">
        <div className="content-wrapper">
          <div className="section-title">Projects</div>
          <p className="text">Here is a small selection of projects.</p>
          <ProjectSection />

          <h1 className="project-name">Northcoders Final</h1>
          <p className="information-text">
            We had a week to make an app using Tech we had not studied during
            the course.
            <h2 className="stack-title">Stack</h2>
            <p className="stack-text">Javascript, Ionic, Firebase</p>
          </p>

          <div className="video-container__wrapper">
            <div className="video-container">
              <iframe
                className="video-player"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/9quoLdRMLRU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;
