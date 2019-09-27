import React from "react";
import Plx from "react-plx";

const pinkConfig = [
  {
    start: ".squaresTrigger",
    startOffset: 70,
    duration: 500,
    easing: [0.25, 0.1, 0.6, 1],
    properties: [
      {
        startValue: -100,
        endValue: -4,
        unit: "vw",
        property: "translateX"
      },
      {
        startValue: 1.0,
        endValue: 0.6,
        property: "opacity"
      }
    ]
  }
];
const blueConfig = [
  {
    start: ".squaresTrigger",
    startOffset: 0,
    duration: 500,
    easing: [0.25, 0.1, 0.6, 1],
    properties: [
      {
        startValue: 100,
        endValue: 4,
        unit: "vw",
        property: "translateX"
      },
      {
        startValue: 1.0,
        endValue: 0.6,
        property: "opacity"
      }
    ]
  }
];

const style = {
  position: "absolute"
};
const style2 = {
  position: "absolute"
};

export default class Squares extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <Plx parallaxData={pinkConfig}>
          <svg width="200" height="200" style={style}>
            <rect width="100" height="100" fill="#CE2D4F" />
          </svg>
        </Plx> */}

        <Plx parallaxData={blueConfig}>
          <svg
            width="200"
            height="200"
            href="http://www.w3.org/2000/svg"
            style={style2}
          >
            <rect width="100" height="100" fill="#2005F5" />
          </svg>
        </Plx>
      </React.Fragment>
    );
  }
}
