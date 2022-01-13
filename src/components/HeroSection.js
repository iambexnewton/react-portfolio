import React from "react";
import { Button } from "/Users/beckynewton/Desktop/react-projects/react-portfolio/src/button.js";
// import Mailto from 'react-Mailto';
// import { Link } from 'react-router-dom';
import { homeObj } from "./pages/Homepage/Data";
import "./HeroSection.css";

const HeroSection = () => {
  document.title = "Home";
  return homeObj.map(
    ({ lightBg, topLine, headLine, description, buttonLabel, url }) => {
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
                <div className="head-line">{headLine}</div>
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

export default HeroSection;
