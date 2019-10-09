import React from "react";
import ReactDOM from "react-dom";
import animateScrollTo from "animate-scroll-to";
import Plx from "react-plx";
// import Typist from "react-typist";

import Nav from "./components/common/nav";
import ShiftinText from "./components/animations/shiftin-text";
import Appear from "./components/animations/appear";
import ParaAppear from "./components/animations/paraAppear";
import "./docs.scss";
import placeholder from "./assets/img/placeholder.png";
import headshot from "./assets/img/headshot.jpg";
import hand from "./assets/img/hand.gif";
import scroll from "./assets/img/scroll.svg";
import heroDivider from "./assets/img/Oval.png";

const appearconfig = [
  {
    start: "self",
    duration: "15vh",
    // startOffset: 400,
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: "opacity"
      }
    ]
  }
];

const Example = class extends React.Component {
  handleScrollTop() {
    animateScrollTo(0, { minDuration: 3000 });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="Demo">
        <Nav />
        {/* SECTION ONE: INTRO */}
        <div className="section hero d-flex align-items-center justify-content-center">
          <div className="container text-center padding-20">
            <div className="underline">
              {/* <h1 className="">KAITRIN CALLAHAN</h1> */}
              <ShiftinText />
            </div>
            <Plx parallaxData={appearconfig} animateWhenNotInViewport={true}>
              <img src={scroll} alt="scroll down" className="bottom" />
            </Plx>
          </div>
        </div>

        {/* SECTION TWO: ABOUT */}
        <div
          className="section two d-flex justify-content-center bg-divider"
          id="about"
        >
          {/* <img
            src={heroDivider}
            className="absolute-top"
            alt="decorative divider into next section"
          /> */}
          <div className="d-flex align-items-center">
            <div className="container">
              <div className="col-md-6"></div>
              <div className="row justify-content-between align-items-center">
                <div className="col-md-6">
                  <h2 className="pushChar-bottom">Hi, i'm</h2>
                  <div className="flex-center">
                    {/* <h2 className="pushChar-left ">aitrin</h2> */}
                    <Appear label="aitrin"></Appear>

                    <ParaAppear
                      text="and I am a Web Developer/Designer with extensive
                      experience building out mobile-response websites"
                    ></ParaAppear>
                  </div>
                </div>

                <div className="col-md-6">
                  <img src={headshot} alt="picture of Kaitrin" />
                </div>
              </div>
            </div>
          </div>
          <div className="sec1-trigger"></div>
        </div>

        {/* SECTION THREE: WORK */}
        {/* <div className="section three d-flex align-items-center">
          <div className="container ">
            <div className="row justify-content-center">
              <Appear label=" work on"></Appear>
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
        </div> */}
        {/* SECTION THREE TEST */}
        <div className="section three d-flex" id="work">
          <div className="container ">
            <div className="padding-25 text-center pr-5">
              <Appear label=" work on"></Appear>
            </div>
            <div className="row justify-content-center"></div>
            <div className="row justify-content-center pt-4">
              {/* <div className="col-xs-4">
                <img src={placeholder} alt="" />
              </div>
              <div className="col-xs-4">
                <img src={placeholder} alt="" />
              </div>
              <div className="col-xs-4">
                <img src={placeholder} alt="" />
              </div> */}
              <Plx>
                <ul>
                  <li>React</li>
                  <li>Angular</li>
                  <li>HTML</li>
                  <li>CSS/Bootstrap</li>
                </ul>
              </Plx>
            </div>
          </div>
        </div>

        {/* SECTION 4: CONTACT */}
        <div className="section four d-flex align-items-center" id="contact">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6">
                <img src={hand} alt="hand saying hello"></img>
              </div>

              <div className="col-md-6 text-right">
                <h2 className="pushChar-bottom pr-5">Say</h2>
                <div className="flex-center pr-5 mr-4">
                  {/* <h2 className="pushChar-left ">aitrin</h2> */}
                  <Appear label="ello"></Appear>
                  <div>
                    <h4>
                      <a href="mailto:hello@kaitrincallahan@gmail.com?subject=Saying Hello!">
                        hello@kaitrincallahan@gmail.com
                      </a>
                    </h4>
                    <div className="social-icons">
                      <a href="./">
                        <p>linkedin</p>
                      </a>
                      <a href="./">
                        <p>Github</p>
                      </a>
                    </div>
                  </div>
                </div>
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
