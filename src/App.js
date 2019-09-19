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
          <Doors />
          <Nav />
          <span className="doors-trigger" />

          <div className="container-fluid pr-5 hero-content">
            <div className="row">
              <div class="col-sm-6"></div>
              <div class="col-sm-6">
                <ButtonPrimary
                  // onClick={() => this.handleHover()}
                  label="Give Us A Shout"
                />
                <h1 className="display-1">Web Design for the Modern World</h1>
              </div>
            </div>
          </div>

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
