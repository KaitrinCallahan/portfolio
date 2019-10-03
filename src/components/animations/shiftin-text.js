import React from "react";
import Plx from "react-plx";
const LETTERS = [];

const DATA = [
  { ltr: "K", dur: 120, trans: 150 },
  { ltr: "A", dur: 150, trans: -50 },
  { ltr: "I", dur: 150, trans: -50 },
  { ltr: "T", dur: 150, trans: -50 },
  { ltr: "R", dur: 150, trans: 50 },
  { ltr: "I", dur: 150, trans: -50 },
  { ltr: "N", dur: 150, trans: -50 }
];

for (let i = 0; i < DATA.length; i++) {
  LETTERS.push([]);

  LETTERS[i].push({
    data: [
      {
        start: 55,
        unit: "vh",
        duration: i.trans,
        properties: [
          {
            startValue: 1,
            endValue: 0.0,
            property: "opacity"
          },
          {
            startValue: 0,
            endValue: 50,
            // unit: "px",
            property: "translateY"
          }
        ]
      }
    ]
  });
}

export default class ShiftinText extends React.Component {
  renderLetters() {
    const letters = [];

    LETTERS.forEach((row, index) => {
      row.forEach((ltr, boxIndex) => {
        letters.push(
          <Plx
            key={`${index} ${boxIndex}`}
            className="ShiftinText"
            parallaxData={ltr.data}
          />
        );
      });
    });
    return letters;
  }

  render() {
    return <React.Fragment>{this.renderLetters()}</React.Fragment>;
  }
}
