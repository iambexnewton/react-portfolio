import React from 'react';
import { Button } from '/Users/beckynewton/Desktop/react-projects/react-portfolio/src/button.js';
import { Link } from 'react-router-dom';
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
                <p className={'home__hero-subtitle'}>{description}</p>
                {buttonLabel && (
                  <Link to="/email">
                    <Button buttonColor="primary">{buttonLabel}</Button>
                  </Link>
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
