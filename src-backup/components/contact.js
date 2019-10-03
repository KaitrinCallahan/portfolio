import React from "react";
import Plx from "react-plx";
import ButtonPrimary from "./common/ButtonPrimary";

function Contact() {
  let movementConfig = [
    {
      start: ".leftWall",
      startOffset: 400,
      duration: 150,
      properties: [
        {
          startValue: 0,
          endValue: 20,
          property: "rotate"
        }
      ]
    },
    {
      start: ".leftWall",
      startOffset: 400,
      duration: 150,
      properties: [
        {
          startValue: -20,
          endValue: -50,
          unit: "%",
          property: "translateX"
        }
      ]
    },
    {
      start: ".rightWall",
      startOffset: 400,
      duration: 150,
      properties: [
        {
          startValue: 0,
          endValue: 20,
          property: "rotate"
        }
      ]
    },
    {
      start: ".rightWall",
      startOffset: 400,
      duration: 150,
      properties: [
        {
          startValue: 0,
          endValue: -50,
          unit: "%",
          property: "translateX"
        }
      ]
    }
  ];
  return (
    <React.Fragment>
      <ButtonPrimary label="Give Us A Shout" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            {/* <Plx className="leftWall" 
                        parallaxData={ movementConfig } >
                            <svg width="432px" height="178px" viewBox="0 0 432 178" version="1.1">
                                <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
                                    <g id="Artboard" transform="translate(-395.000000, -253.000000)" stroke="#2005F5" stroke-width="2">
                                        <path d="M397.5,429.5 L826,255" id="Line-5" transform="translate(611.500000, 342.500000) scale(-1, 1) translate(-611.500000, -342.500000) "></path>
                                    </g>
                                </g>
                            </svg>
                        </Plx> */}
          </div>
          <div className="col-6 contact-form">
            <form>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control border-blue"
                      id="name"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6 ">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control border-blue"
                      id="email"
                    />
                  </div>
                </div>
                <div className="col-6 text-right">
                  <button type="submit" className="">
                    Submit <i className="far fa-envelope"></i>
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                      Brief Description
                    </label>
                    <textarea
                      className="form-control border-blue"
                      id="exampleFormControlTextarea1"
                      rows="9"
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-3">
            {/* <Plx className="rightWall"
                             parallaxData= { movementConfig } >
                                 <svg width="433px" height="178px" viewBox="0 0 433 178" version="1.1">
                                    <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
                                        <g id="Artboard" transform="translate(-1313.000000, -221.000000)" stroke="#2005F5" stroke-width="2">
                                            <path d="M1315.25,397.25 L1743.75,222.75" id="Line-5"></path>
                                        </g>
                                    </g>
                                </svg>
                            </Plx> */}
          </div>
        </div>
      </div>

      <Plx className="rightWall" parallaxData={movementConfig}></Plx>
    </React.Fragment>
  );
}

export default Contact;
