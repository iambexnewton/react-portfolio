import React from 'react';
import { Button } from '/Users/beckynewton/Desktop/react-projects/react-portfolio/src/button.js';
// import Mailto from 'react-Mailto';
// import { Link } from 'react-router-dom';
import { homeObj } from './pages/Homepage/Data';
import './HeroSection.css';

const HeroSection = () => {
  return homeObj.map(
    ({ lightBg, topLine, headline, description, buttonLabel }) => {
      return (
        <div
          className={`container ${
            lightBg ? 'home__hero-section' : 'home__hero-section darkBg'
          }`}
        >
          <div className="row home__hero-row">
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className="heading">{headline}</h1>

                <p className={'text'}>{description}</p>
                {buttonLabel && (
                  <a href="mailto:iambexnewton@gmail.com">
                    <Button
                      target="_blank"
                      rel="noreferrer"
                      buttonColor="primary"
                    >
                      {buttonLabel}
                    </Button>
                  </a>
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
