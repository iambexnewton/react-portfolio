import React from 'react';
import './Footer.css';
import { Button } from '../../../button';
import { Link, NavLink } from 'react-router-dom';
import {
  FaGithubAlt,
  FaTwitter,
  FaLinkedin,
  FaMedium,
  FaEnvelopeSquare,
} from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer-container">
      {/* <div className="footer-link-items">
        <h2>Social Media</h2>
        <Link to="/https://twitter.com/hellobexnewton">Twitter</Link>
        <Link to="/">LinkedIn</Link>
        <Link to="/">Github</Link>
        <Link to="/">Medium</Link>
      </div> */}

      <div className="social-icons">
        <div className="social-media-wrap">
          <a
            href="https://www.linkedin.com/in/rebecca-newton-43b1b3209/"
            className="social-icon-link"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            className="social-icon-link"
            href="https://github.com/iambexnewton"
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
          >
            <FaGithubAlt />
          </a>

          <a
            className="social-icon-link"
            href="mailto:iambexnewton@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Email"
          >
            <FaEnvelopeSquare />
          </a>

          <a
            className="social-icon-link"
            href="/https://twitter.com/hellobexnewton"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>

          <a
            className="social-icon-link"
            href="https://iambexnewton.medium.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Medium"
          >
            <FaMedium />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
