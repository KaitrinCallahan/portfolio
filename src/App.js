import React from "react";
import ReactDOM from "react-dom";
import Plx from "react-plx";
import animateScrollTo from "animate-scroll-to";
import Explosion from "./components/explosion";
import Phone from "./components/phone";
import StickyText from "./components/sticky-text";
import Light from "./components/light";
import Nav from "./components/common/nav.js";

import GetInTouch from "./components/GetInTouch";
import Doors from "./components/doors";
import Squares from "./components/Squares";
import CarouselPrimary from "./components/common/CarouselPrimary";
import Typist from "react-typist";
import floor from "./assets/img/triangle.svg";
import line from "./assets/img/line.svg";
import Contact from "./components/contact";
import Footer from "./components/common/Footer";
import Technologies from "./components/Technologies.js";

const raiseFloor = [
  {
    start: ".floor-trigger",
    startOffset: 0,
    duration: 250,
    easing: [0.25, 0.1, 0.6, 1.5],
    properties: [
      {
        startValue: 34,
        endValue: 13,
        unit: "vh",
        property: "translateY"
      },
      {
        startValue: 1.0,
        endValue: 1.5,

        property: "scale"
      }
    ]
  }
];
const slideIn = [
  {
    start: "self",
    startOffset: 200,
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

const floorStyle = {
  width: "100vw"
};

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
          <Nav />
          {/* <Doors /> */}

          <div className="hero-container">
            <Typist>
              <h1 className="display-3 front">
                Web Design for the Modern Age.
              </h1>
            </Typist>
          </div>
          <div className="floor-trigger"></div>
          <Plx style={floorStyle} parallaxData={raiseFloor}>
            <img src={floor} className="full" />
          </Plx>
        </div>
        <Plx parallaxData={slideIn}>
          {/* <img src={line} alt="moving line for visual effects"></img> */}
          <svg width="3610x" height="5px" viewbox="0 0 361 5">
            <rect width="100" height="100" fill="#000" />
          </svg>
        </Plx>

        <div class="container-fluid">
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
