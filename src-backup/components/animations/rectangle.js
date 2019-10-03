import React from "react";
import Plx from "react-plx";
import rectangle from "../../assets/img/rectangle.svg";
import rectangle2 from "../../assets/img/rectangle2.svg";
import logo from "../../assets/img/logo.svg";
import blob from "../../assets/img/blob.svg";

const wallStyle = {
  position: "absolute",
  zIndex: 1,
  left: "45vw",
  top: "35vh"
};
const blobStyle = {
  position: "absolute",
  zIndex: 1,
  left: "33vw",
  top: "30vh"
};
const offset = 800;
const pushWall = [
  {
    start: "self",
    startOffset: 100,
    duration: 100,
    easing: [0.25, 0.1, 0.6, 1.0],
    properties: [
      {
        startValue: 90.0,
        endValue: 0,
        property: "rotate"
      },
      {
        startValue: 0.6,
        endValue: 1.2,

        property: "scale"
      }
      // {
      //   startValue: 0.0,
      //   endValue: 0.8,
      //   property: "opacity"
      // }
    ]
  },
  {
    start: "self",
    startOffset: 0,
    duration: 50,
    easing: [0.25, 0.1, 0.6, 1.0],
    properties: [
      {
        startValue: 0.0,
        endValue: 0.8,
        property: "opacity"
      }
    ]
  }
];
const blobappear = [
  {
    start: "self",
    startOffset: 700,
    duration: 100,
    easing: [0.25, 0.1, 0.6, 1.0],
    properties: [
      {
        startValue: 0.0,
        endValue: 1.0,
        property: "opacity"
      }
    ]
  }
];

function RectangleAnimation() {
  return (
    <React.Fragment>
      <Plx style={wallStyle} parallaxData={pushWall}>
        <img src={logo} className="full" />
      </Plx>
      <Plx style={blobStyle} parallaxData={blobappear}>
        <img src={blob} className="full" />
      </Plx>
      {/* <Plx style={wallStyle} parallaxData={pushWall}>
        <img src={rectangle} className="full" />
      </Plx>
      <img style={wallStyle} src={rectangle2} className="full"></img> */}
    </React.Fragment>
  );
}

export default RectangleAnimation;
