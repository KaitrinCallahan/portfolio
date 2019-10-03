import React from "react";
import ReactDOM from "react-dom";
import Plx from "react-plx";
import animateScrollTo from "animate-scroll-to";
// import Typist from "react-typist";

import Nav from "./components/common/nav";
import ShiftinText from "./components/animations/shiftin-text";
import "./docs.scss";
import placeholder from "./assets/img/placeholder.png";

const Example = class extends React.Component {
  handleScrollTop() {
    animateScrollTo(0, { minDuration: 3000 });
  }

  render() {
    return (
      <div className="Demo">
        <Nav />
        {/* SECTION ONE: INTRO */}
        <div className="section hero d-flex align-items-center justify-content-center">
          <div className="underline">
            {/* <h1 className="">KAITRIN CALLAHAN</h1> */}
            <ShiftinText />
          </div>
        </div>

        {/* SECTION TWO: ABOUT */}
        <div className="section two d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-sm-6">
                <div classname="">
                  <h2>Hey I'm Kaitrin</h2>
                  <h3>
                    and I am a Web Developer/Designer with extensive experience
                    building out mobile-response websites
                  </h3>
                </div>
              </div>
              <div className="col-sm-6">
                <img src={placeholder} alt="picture of Kaitrin" />
              </div>
            </div>
          </div>
        </div>

        {/* SECTION THREE: WORK */}
        <div className="section three d-flex align-items-center">
          <div className="container ">
            <div className="row justify-content-center">
              <h2>I work on</h2>
            </div>
            <div className="row justify-content-center pt-4">
              <div className="col-xs-4">
                <img src={placeholder} alt="" />
              </div>
              <div className="col-xs-4">
                <img src={placeholder} alt="" />
              </div>
              <div className="col-xs-4">
                <img src={placeholder} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: CONTACT */}
        <div className="section four d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xs-6">
                <div classname="">
                  <h4>
                    <a href="mailto:hello@kaitrincallahan@gmail.com?subject=Saying Hello!">
                      hello@kaitrincallahan@gmail.com
                    </a>
                  </h4>
                </div>
                <div className="social-icons">
                  <a href="./">
                    <p>linkedin</p>
                  </a>
                  <a href="./">
                    <p>Github</p>
                  </a>
                </div>
              </div>
              <div className="col-xs-6">
                <h2>Say Hello</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Example;
ReactDOM.render(<Example />, document.getElementById("demo"));
