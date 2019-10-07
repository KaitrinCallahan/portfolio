import React from "react";
import Plx from "react-plx";
const LETTERS = [];

const DATA = [
  { ltr: "K", dur: 900, opacity: 1, trans: 100 },
  { ltr: "A", dur: 2000, opacity: 0, trans: -100 },
  { ltr: "I", dur: 600, opacity: 0, trans: 100 },
  { ltr: "T", dur: 600, opacity: 0, trans: -50 },
  { ltr: "R", dur: 2000, opacity: 0, trans: 150 },
  { ltr: "I", dur: 1700, opacity: 1, trans: 180 },
  { ltr: "N", dur: 1000, opacity: 0, trans: -150 },
  { ltr: "_", dur: 70, opacity: 0, trans: -50 },
  { ltr: " ", dur: 70, opacity: 0, trans: -50 },
  { ltr: "C", dur: 1000, opacity: 0, trans: 150 },
  { ltr: "A", dur: 1200, opacity: 0, trans: -50 },
  { ltr: "L", dur: 2000, opacity: 0, trans: 200 },
  { ltr: "L", dur: 2000, opacity: 0, trans: -200 },
  { ltr: "A", dur: 150, opacity: 0, trans: 30 },
  { ltr: "H", dur: 2950, opacity: 1, trans: 300 },
  { ltr: "A", dur: 1500, opacity: 0, trans: -100 },
  { ltr: "N", dur: 2000, opacity: 0, trans: 100 }
];

for (let i = 0; i < DATA.length; i++) {
  LETTERS.push([]);

  LETTERS[i].push({
    val: DATA[i].ltr,
    data: [
      {
        start: 55,
        startOffset: 100,
        duration: DATA[i].dur,
        easing: [0.25, 0.1, 0.53, 1],
        unit: "vh",
        properties: [
          {
            startValue: 1,
            endValue: DATA[i].opacity,
            property: "opacity"
          },
          {
            startValue: 0,
            endValue: DATA[i].trans,
            unit: "vh",
            property: "translateY"
          },
          {
            startValue: 0.9,
            endValue: 0.85,
            property: "scale"
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
        if (ltr.val === "_") {
          letters.push("______");
        } else
          letters.push(
            <Plx
              key={`${index} ${ltr}`}
              parallaxData={ltr.data}
              animateWhenNotInViewport={true}
            >
              <h1>{ltr.val}</h1>
            </Plx>
          );
      });
    });
    return letters;
  }

  render() {
    return <React.Fragment>{this.renderLetters()}</React.Fragment>;
  }
}
