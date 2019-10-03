import React, { useState, useEffect, useRef } from "react";
import icon from "../../assets/img/hamburger.svg";

const navStyle = {
  zIndex: 1,
  position: "fixed",
  width: "100vw"
};

function Nav() {
  // const [navBackground, setNavBackground] = useState(false);
  // const navRef = useRef();

  // navRef.current = navBackground;
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const show = window.scrollY > 670;
  //     if (navRef.current !== show) {
  //       setNavBackground(show);
  //       console.log("hit");
  //     }
  //   };
  //   document.addEventListener("scroll", handleScroll);
  //   return () => {
  //     document.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top p-0 navStyle"
      style={navStyle}
    >
      <span className="navbar-brand mb-0 padding-s">
        <h2></h2>
      </span>
      <button
        className="navbar-toggler padding-s"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        {<img src={icon} alt="dropdown button" />}
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="navbar-container">
          <div className="navbar-overlay-back">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Work <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
