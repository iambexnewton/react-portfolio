import React from 'react';
import './Footer.css';
import { Button } from '../../../button';
import { Link } from 'react-router-dom';
import { FaGithubAlt, FaTwitter, FaLinkedin, FaMedium } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <div></div>
            <Link to="/">Contact</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Twitter</Link>
            <Link to="/">LinkedIn</Link>
            <Link to="/">Github</Link>
            <Link to="/">Medium</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <Link
            className="social-icon-link"
            to="/"
            target="_blank"
            aria-label="Github"
          >
            <FaGithubAlt />
          </Link>

          <Link
            className="social-icon-link"
            to="/"
            target="_blank"
            aria-label="Twitter"
          >
            <FaTwitter />
          </Link>
          <Link
            className="social-icon-link"
            to="/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </Link>
          <Link
            className="social-icon-link"
            to="/"
            target="_blank"
            aria-label="Medium"
          >
            <FaMedium />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Footer;
