import React from "react";
import ReactDOM from "react-dom";
import Plx from "react-plx";
import animateScrollTo from "animate-scroll-to";
import Typist from "react-typist";
import nav from "./components/common/nav.js";
import Contact from "./components/contact";
import Footer from "./components/common/Footer";
import "./docs.scss";

import RectangleAnimation from "./components/animations/rectangle";
import HeaderAnimation from "./components/animations/headerAnimation";
import Squares from "./components/animations/Squares";
import Explosion from "./components/animations/explosion";

const slideIn = [
  {
    start: ".trigger",
    startOffset: 0,
    duration: 200,
    easing: [0.25, 0.1, 0.6, 1.0],
    properties: [
      {
        startValue: -90,
        endValue: 0,
        unit: "vw",
        property: "translateX"
      }
    ]
  }
];

const testArea = {
  height: "2000px"
};

const Example = class extends React.Component {
  handleScrollTop() {
    animateScrollTo(0, { minDuration: 3000 });
  }

  render() {
    return (
      <div className="Demo">
        <div className="hero">
          {/* <Doors /> */}
          <nav />
          <div className="hero-container">
            <div className="display-container">
              <h1 className="display-4 front">Kaitrin Callahan</h1>
              <Typist>
                <h2 className="h3 pt-4">
                  Front End Developer / React / Wordpress
                </h2>
              </Typist>
              <RectangleAnimation />
            </div>
            <HeaderAnimation />
          </div>
        </div>
        {/* <Plx parallaxData={slideIn}>
          <img src={line} alt="moving line for visual effects"></img>
          <svg width="3610x" height="6px">
            <rect width="200" height="100" fill="#000" />
          </svg>
        </Plx> */}
        <div className="container-fluid pt-5">
          <h2>Goodbye to Boxed layouts</h2>
          <Squares />
        </div>

        <div className="squaresTrigger"></div>
        <div className="trigger"></div>
        <Explosion />
        <Contact />
        <div style={testArea}></div>
        <Footer />
      </div>
    );
  }
};

export default Example;
ReactDOM.render(<Example />, document.getElementById("demo"));
