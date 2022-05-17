import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const HandleClick = () => setClick(!click);
  const closeMolibeMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMolibeMenu}>
            Portfolio
          </Link>

          <div className="menu-icon" onClick={HandleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <Link to="/about" className="navlinks" onClick={closeMolibeMenu}>
              <li className="nav-item">About</li>
            </Link>

            <Link to="/projects" className="navlinks" onClick={closeMolibeMenu}>
              <li className="nav-item">Projects</li>
            </Link>

            <Link to="/blogs" className="navlinks" onClick={closeMolibeMenu}>
              <li className="nav-item">Blogs</li>
            </Link>

            <Link to="/talks" className="navlinks" onClick={closeMolibeMenu}>
              <li className="nav-item">Tech Talks</li>
            </Link>

            <Link
              href="mailto:iambexnewton@gmail.com"
              to="/contact"
              className="navlinks"
              onClick={closeMolibeMenu}
              target="_blank"
              rel="noreferrer"
            >
              <li className="nav-item">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
