import React from "react";
import Plx from "react-plx";

const appearData = [
  {
    start: "self",
    duration: "20vh",
    // startOffset: 400,
    properties: [
      {
        startValue: 0.8,
        endValue: 1,
        property: "opacity"
      }
    ]
  }
];

const Appear = props => {
  return (
    // renderAppear({props.label})
    <Plx
      className="pushChar-left"
      parallaxData={appearData}
      animateWhenNotInViewport={true}
    >
      <h2>{props.label}</h2>
    </Plx>
  );
};

export default Appear;
