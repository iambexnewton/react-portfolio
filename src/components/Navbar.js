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
            Rebecca Newton
          </Link>

          <div className="menu-icon" onClick={HandleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <Link to="/" className="navlinks" onClick={closeMolibeMenu}>
              <li className="nav-item">Home</li>
            </Link>

            <Link to="/projects" className="navlinks" onClick={closeMolibeMenu}>
              <li className="nav-item">Projects</li>
            </Link>

            <Link to="/blogs" className="navlinks" onClick={closeMolibeMenu}>
              <li className="nav-item">Blogs</li>
            </Link>

            <li className="nav-btn">
              {button ? (
                <a href="mailto:iambexnewton@gmail.com">
                  <Button
                    buttonStyle="btn--outline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Say Hi
                  </Button>
                </a>
              ) : (
                <Link to="/sign-up" className="btn-link">
                  <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                    Say Hi
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
