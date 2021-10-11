import React from 'react';
import './Footer.css';
import { Button } from '../../../button';
import { Link, NavLink } from 'react-router-dom';
import {
  FaGithubAlt,
  FaTwitter,
  FaLinkedin,
  FaMedium,
  FaEnvelope,
  FaEnvelopeOpen,
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

      <div className="social-media-wrap">
        <Link
          className="social-icon-link"
          Link
          to="/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </Link>

        <Link
          className="social-icon-link"
          href=""
          target="_blank"
          aria-label="Github"
        >
          <FaGithubAlt />
        </Link>

        <Link
          className="social-icon-link"
          to="/"
          target="_blank"
          aria-label="Email"
        >
          <FaEnvelopeSquare />
        </Link>

        <Link
          className="social-icon-link"
          to="/https://twitter.com/hellobexnewton"
          target="_blank"
          aria-label="Twitter"
        >
          <FaTwitter />
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
    </div>
  );
}

export default Footer;
