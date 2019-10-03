import React from "react";
import Plx from "react-plx";

const BOXES_PER_ROW = 4;
const ROWS = 3;
const BOXES = [];

const COLORS = [
  "#2005F5",
  "#CE2D4F",
  "#E6E8E6",
  "#F4FF52",
  "#D1D5FE",
  "#2005F5",
  "#CE2D4F",
  "#E6E8E6",
  "#F4FF52",
  "#D1D5FE",
  "#2005F5",
  "#CE2D4F",
  "#E6E8E6",
  "#F4FF52",
  "#D1D5FE",
  "#2005F5"
];

for (let i = 0; i < ROWS; i++) {
  BOXES.push([]);
  for (let j = 0; j < BOXES_PER_ROW; j++) {
    const top = i < ROWS / 2;
    const yFactor = top ? -1 : 1;
    const left = j < BOXES_PER_ROW / 2;
    const xFactor = left ? -1 : 1;
    const inside = (i === 1 || i === 2) && (j === 1 || j === 2); // I was lazy to write generic formula
    const scaleFactor = inside ? 0.5 : 1;
    const start = inside ? 40 : 100;
    const offset = inside ? 40 : 100;
    const rotationFactor = Math.random() > 0.5 ? 180 : -180;

    const color = COLORS[i * ROWS + j];

    BOXES[i].push({
      data: [
        {
          start: "self",
          startOffset: "40vh",
          duration: 500,
          name: "first",
          properties: [
            {
              startValue: 1,
              endValue: 0,
              property: "opacity"
            },
            {
              startValue: 0,
              endValue: Math.random() * rotationFactor,
              property: "rotate"
            },
            {
              startValue: 1,
              endValue: 1 + Math.random() * scaleFactor,
              property: "scale"
            },
            {
              startValue: 0,
              endValue: (start + Math.random() * offset) * xFactor,
              property: "translateX",
              unit: "%"
            },
            {
              startValue: 0,
              endValue: (start + Math.random() * offset) * yFactor,
              property: "translateY",
              unit: "%"
            }
          ]
        }
      ],
      style: {
        backgroundColor: color,
        borderRadius: 0
      }
    });
  }
}

export default class Explosion extends React.Component {
  renderBoxes() {
    const boxes = [];

    BOXES.forEach((row, index) => {
      row.forEach((box, boxIndex) => {
        boxes.push(
          <Plx
            key={`${index} ${boxIndex}`}
            className="Explosion-box"
            parallaxData={box.data}
            style={box.style}
          />
        );
      });
    });

    return boxes;
  }

  render() {
    return <div className="Explosion">{this.renderBoxes()}</div>;
  }
}
