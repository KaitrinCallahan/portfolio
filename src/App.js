import React from "react";
import ReactDOM from "react-dom";
import Plx from "react-plx";
import animateScrollTo from "animate-scroll-to";
import Explosion from "./components/explosion";
import Phone from "./components/phone";
import StickyText from "./components/sticky-text";
import Light from "./components/light";
import Nav from "./components/common/nav";
import ButtonPrimary from "./components/common/ButtonPrimary";
import GetInTouch from "./components/GetInTouch";
import Doors from "./components/doors";

const titleData = [
  {
    start: "self",
    startOffset: 50,
    duration: 200,
    properties: [
      {
        startValue: 1,
        endValue: -360,
        property: "rotate"
      },
      {
        startValue: "#e34e47",
        endValue: "#995eb2",
        property: "color"
      }
    ]
  }
];

const Example = class extends React.Component {
  handleScrollTop() {
    animateScrollTo(0, { minDuration: 3000 });
  }

  render() {
    return (
      <div className="Demo">
        <div class="hero">
          {/* <Doors /> */}

          <div class="hero">
            <Nav />
            <div class="hero-container">
              <h1 class="display-1">Web Design for the Modern Age.</h1>
            </div>
          </div>
          <div class="divider-pink"></div>
          <div class="section section-1 container">
            <div class="divider-black"></div>
            <h1 class="display-4">Put Your Ideas in the Spotlight</h1>
          </div>
          <div class="section section-2 container">
            <ButtonPrimary
              // onClick={() => this.handleHover()}
              label="Give Us A Shout"
            />
          </div>
          <span className="doors-trigger" />

          {/* <Plx
            tagName="h1"
            className="Examples"
            parallaxData={titleData}
            // eslint-disable-next-line no-console
            onPlxStart={() => console.log("Plx - onPlxStart callback ")}
            // eslint-disable-next-line no-console
            onPlxEnd={() => console.log("Plx - onPlxEnd callback")}
          >
            Examples
          </Plx> */}

          {/* <h3>Make things explode</h3>
          <Explosion />
          <h3>Animate nested elements</h3>
          <Phone />
          <div className="StickyText-trigger" />
          <StickyText /> */}
          {/* <GetInTouch />
          <Light /> */}
        </div>

        <div className="Footer">
          <div className="Content">
            <h1>Plx</h1>
            <h2>React Parallax component</h2>
            <div>Awesome isn&#39;t it?</div>
            <div className="Footer-links">
              <a href="https://muffinman.io">My blog</a>
              <a href="https://www.npmjs.com/package/react-plx">npm</a>
              <a href="https://github.com/Stanko/react-plx">GitHub</a>
            </div>
            <button onClick={() => this.handleScrollTop()}>Back to top</button>
          </div>
        </div>
      </div>
    );
  }
};

export default Example;
ReactDOM.render(<Example />, document.getElementById("demo"));
