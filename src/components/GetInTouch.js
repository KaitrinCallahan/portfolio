import React from "react";
import Plx from "react-plx";
import ButtonCallout from "./common/ButtonCallout";

const data = [
  {
    start: "self",
    startOffset: 300,
    duration: 500,
    easing: [0.0, 0.1, 0.6, 1.5],
    properties: [
      {
        startValue: -10,
        endValue: 30,
        property: "rotate"
      },
      {
        startValue: 0.5,
        endValue: 1.1,
        property: "scale"
      }
    ]
  }
];

export default class GetInTouch extends React.Component {
  render() {
    return (
      <Plx className="Callout" parallaxData={data}>
        <ButtonCallout label="Get in Touch" />
      </Plx>
    );
  }
}
