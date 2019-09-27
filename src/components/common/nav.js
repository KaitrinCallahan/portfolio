import React from "react";
import icon from "../../assets/img/hamburger.svg";
import { isAbsolute } from "path";

// function openNav(x) {
//   x.style.display = "block";
// }
// function closeNav(x) {
//   x.style.display = "none";
// }
const navStyle = {
  zIndex: 1,
  position: "fixed",
  width: "100vw",
  backgroundColor: "white"
};

function Nav() {
  return (
    <nav className="navbar p-0" style={navStyle}>
      <span className="navbar-brand mb-0 padding-s">
        <h2>Kaitrin Callahan</h2>
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
