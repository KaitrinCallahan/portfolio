import React from "react";
import Plx from "react-plx";

const leftDoor = [
  {
    start: "self",
    startOffset: 300,
    duration: 500,
    easing: [0.25, 0.1, 0.6, 1.5],
    properties: [
      {
        startValue: -1000,
        endValue: 0,
        property: "translateX"
      },
      {
        startValue: 0.2,
        endValue: 0.9,
        property: "opacity"
      }
    ]
  }
];

const rightDoor = [
  {
    start: ".doors-trigger",
    duration: "100vh",
    properties: [
      {
        startValue: 0,
        endValue: -100,
        unit: "vh",
        property: "translateX"
      },
      {
        startValue: 0.2,
        endValue: 0,
        property: "opacity"
      }
    ]
  }
];

const style = {
  height: "100vh",
  zIndex: -1,
  position: "absolute"
};

export default class Doors extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Plx className="Doors" parallaxData={leftDoor}>
          <svg
            viewBox="0 0 220 100"
            href="http://www.w3.org/2000/svg"
            style={style}
          >
            <rect width="100" height="100" fill="#FC9E4F" />
          </svg>
        </Plx>
        <Plx className="Doors" parallaxData={rightDoor}>
          <svg
            viewBox="0 0 220 100"
            href="http://www.w3.org/2000/svg"
            style={style}
          >
            <rect width="200" height="100" fill="#2005F5" />
          </svg>
        </Plx>
      </React.Fragment>
    );
  }
}
