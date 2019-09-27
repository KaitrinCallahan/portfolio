import React from "react";
import Plx from "react-plx";

const leftDoor = [
  {
    start: "self",
    startOffset: 0,
    duration: 1000,
    easing: [0.25, 0.1, 0.6, 1.5],
    properties: [
      {
        startValue: 0,
        endValue: 200,
        unit: "vw",
        property: "translateX"
      },
      {
        startValue: 1.0,
        endValue: 1.0,
        property: "opacity"
      }
    ]
  }
];

const style = {
  height: "100vh"
};

const style2 = {
  position: "absolute",
  zIndex: 0,
  top: 0,
  left: "50vw"
};

export default class Doors extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Plx style={style2} parallaxData={leftDoor}>
          <svg
            viewBox="0 0 220 100"
            href="http://www.w3.org/2000/svg"
            style={style}
          >
            <rect width="100" height="100" fill="#fff" />
          </svg>
        </Plx>
      </React.Fragment>
    );
  }
}
