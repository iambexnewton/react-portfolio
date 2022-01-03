import React from "react";
import "./projects.css";
import { projectObj } from "./project-data";
import { Button } from "../../../button";

const ProjectSection = () => {
  return (
    <div className="project-container">
      {projectObj.map(
        ({ image, project, information, stack, alt, buttonLabel, url }) => {
          return (
            <a href={url} target="_blank" rel="noreferrer">
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
                      {url && (
                        <Button
                          url={url}
                          target="_blank"
                          rel="noreferrer"
                          buttonColor="primary"
                        >
                          {buttonLabel}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          );
        },
      )}
    </div>
  );
};

export default ProjectSection;
