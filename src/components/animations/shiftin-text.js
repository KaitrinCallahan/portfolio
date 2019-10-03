import React from "react";
import Plx from "react-plx";
const LETTERS = [];


const DATA = [
  { ltr: "K", dur: 500, opacity: 1, trans: 103 },
  { ltr: "A", dur: 650, opacity: 0, trans: -50 },
  { ltr: "I", dur: 150, opacity: 1, trans: -50 },
  { ltr: "T", dur: 150, opacity: 0, trans: -50 },
  { ltr: "R", dur: 150, opacity: 0, trans: 50 },
  { ltr: "I", dur: 1100, opacity: 1, trans: 187 },
  { ltr: "N", dur: 150, opacity: 0, trans: 40 },
  { ltr: "_", dur: 70, opacity: 0, trans: -50 },
  { ltr: "C", dur: 150, opacity: 0, trans: 70 },
  { ltr: "A", dur: 50, opacity: 0, trans: -50 },
  { ltr: "L", dur: 150, opacity: 0, trans: -300 },
  { ltr: "L", dur: 100, opacity: 0, trans: 100 },
  { ltr: "A", dur: 150, opacity: 0, trans: 30 },
  { ltr: "H", dur: 1600, opacity: 1, trans: 307 },
  { ltr: "A", dur: 150, opacity: 0, trans: 350 },
  { ltr: "N", dur: 150, opacity: 0, trans: 50 },

];

for (let i = 0; i < DATA.length; i++) {
  LETTERS.push([]);

  LETTERS[i].push({
    val: DATA[i].ltr,
    data: [
      {
        start: 55,
        duration: DATA[i].dur,
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
            startValue: 1,
            endValue: .85,
            property: "scale"
          },
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
        if(ltr.val === "_"){
          letters.push("______")
        }
        else
        letters.push(
          <Plx
            key={`${index} ${ltr}`}
            parallaxData={ltr.data}
            animateWhenNotInViewport={ true }
          ><h1>{ltr.val}</h1>
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
