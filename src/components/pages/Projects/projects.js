import React from 'react';

import './projects.css';

function ProjectSection({ image, project, information, stack, alt }) {
  return (
    <>
      <div className="project-container">
        <div className="project-full-wrapper">
          <div className="project-individual">
            <div className="project-image-wrapper">
              <img src={image} alt={alt} className="project-image" />
            </div>

            <div className="projects-text-container">
              <div className="projects-text-wrapper">
                <h1 className="project-name">{project}</h1>

                <p className="information-text">{information}</p>
              </div>

              <div className="stack-text-wrapper">
                <h2 className="stack-title">Stack</h2>
                <p className="stack-text">{stack}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectSection;
