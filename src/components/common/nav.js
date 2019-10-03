import React from "react";
import icon from "../../assets/img/hamburger.svg";
const navStyle = {
  // zIndex: 1,
  position: "fixed",
  top: 0,
  right: 0
  // width: "100vw"
};

function Nav() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg p-0 navStyle" style={navStyle}>
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
      <div className="navbar vertical-nav">
        <div>
          <a href="./linkedin">linkedin</a>
        </div>
        <div>
          <a href="./github">Github</a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Nav;
