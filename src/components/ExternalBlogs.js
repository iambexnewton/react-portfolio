import React from "react";
import { Button } from "/Users/beckynewton/Desktop/react-projects/react-portfolio/src/button.js";
// import Mailto from 'react-Mailto';
// import { Link } from 'react-router-dom';
import { externalBlogsData } from "./pages/ExternalBlogs/Data.js";
import "./HeroSection.css";

const ExternalBlogs = () => {
  document.title = "External Blogs";
  return externalBlogsData.map(
    ({ lightBg, topLine, press, description, buttonLabel, url }) => {
      return (
        <div
          className={`container ${
            lightBg ? "home__hero-section" : "home__hero-section darkBg"
          }`}
        >
          <div className="row home__hero-row">
            <div className="home__hero-text-wrapper">
              <div className="top-line">{topLine}</div>
              <em>
                <div className="head-line">{press}</div>
              </em>
              <div className="home_button-container">
                <p className={"text"}>{description}</p>
                {buttonLabel && (
                  <Button
                    className="btn"
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
      );
    },
  );
};

export default ExternalBlogs;
