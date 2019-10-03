import React from "react";
import Plx from "react-plx";
import floor from "../../assets/img/triangle.svg";
import rectangle from "../../assets/img/rectangle.svg";
import yellow from "../../assets/img/yellow.svg";

function HeaderAnimation() {
  const floorStyle = {
    // width: "100vw"
  };

  const raiseFloor = [
    {
      start: "self",
      startOffset: 0,
      duration: 250,
      easing: [0.25, 0.1, 0.6, 1.5],
      properties: [
        {
          startValue: 23,
          endValue: 6,
          unit: "vh",
          property: "translateY"
        },
        {
          startValue: 1.0,
          endValue: 1.5,

          property: "scale"
        }
      ]
    }
  ];

  return (
    <React.Fragment>
      {/* <Plx style={wallStyle} parallaxData={pushWall}>
        <img src={rectangle} className="full" />
      </Plx>
      <Plx style={wallStyle} parallaxData={pushWall2}>
        <img src={rectangle} className="full" />
      </Plx> */}
      <Plx style={floorStyle} parallaxData={raiseFloor}>
        <img src={floor} className="full" />
      </Plx>
    </React.Fragment>
  );
}

export default HeaderAnimation;
