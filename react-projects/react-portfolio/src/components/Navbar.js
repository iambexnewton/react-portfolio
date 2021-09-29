import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

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

  window.addEventListener('resize', showButton);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMolibeMenu}>
            {/* <MdFingerprint className="navbar-icon" /> Portfolio */}
            Portfolio
          </Link>

          <div className="menu-icon" onClick={HandleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="navlinks">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="navlinks">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blogs" className="navlinks">
                Blogs
              </Link>
            </li>

            <li className="nav-btn">
              {button ? (
                <Link to="/sign-up" className="btn-link">
                  <Button buttonStyle="btn--outline">Say Hi</Button>
                </Link>
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
