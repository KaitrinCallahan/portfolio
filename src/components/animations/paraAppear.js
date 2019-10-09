import React from "react";
import Plx from "react-plx";

const appearData = [
  {
    start: ".sec1-trigger",
    duration: "30vh",
    startOffset: 650,
    properties: [
      {
        startValue: 0.0,
        endValue: 1,
        property: "opacity"
      }
    ]
  }
];

const ParaAppear = props => {
  return (
    // renderAppear({props.label})
    <Plx className="appear-text" parallaxData={appearData}>
      <h3>{props.text}</h3>
    </Plx>
  );
};

export default ParaAppear;
// export default class ParaAppear extends React.Component {
//   render() {
//     return (
//       <Plx className="appear-text" parallaxData={appearData}>
//         <h3>TEST</h3>
//       </Plx>
//     );
//   }
// }
