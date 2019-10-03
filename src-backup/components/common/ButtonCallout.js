import React from "react";

const ButtonCallout = props => {
  return (
    <svg width="275px" height="152px" viewBox="0 0 275 152">
      <defs>
        <text
          id="text-1"
          font-family="Share Tech Mono"
          font-size="18"
          font-weight="400"
          letter-spacing="2.296875"
          color="black"
        >
          <tspan x="65.0898438" y="37">
            {props.label}
          </tspan>
        </text>
        <filter
          x="-0.0%"
          y="-0.3%"
          width="100.1%"
          height="100.6%"
          filterUnits="objectBoundingBox"
          id="filter-2"
        >
          <feOffset
            dx="0"
            dy="0.2"
            in="SourceAlpha"
            result="shadowOffsetInner1"
          ></feOffset>
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
            result="shadowInnerInner1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            type="matrix"
            in="shadowInnerInner1"
          ></feColorMatrix>
        </filter>
        <filter
          x="-0.0%"
          y="-0.3%"
          width="100.1%"
          height="100.6%"
          filterUnits="objectBoundingBox"
          id="filter-3"
        >
          <feOffset
            dx="0"
            dy="0.2"
            in="SourceAlpha"
            result="shadowOffsetInner1"
          ></feOffset>
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
            result="shadowInnerInner1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            type="matrix"
            in="shadowInnerInner1"
          ></feColorMatrix>
        </filter>
      </defs>
      <g
        id="Welcome"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="Minimalist" transform="translate(-353.000000, -2722.000000)">
          <g
            id="Section-contact"
            transform="translate(353.000000, 2722.000000)"
          >
            <rect
              id="Rectangle"
              stroke="#CE2D4F"
              stroke-width="2"
              x="9"
              y="8"
              width="257"
              height="42"
            ></rect>
            <path
              d="M1.5,1.5 L1.5,57.2084358 L137.5,150.182981 L273.5,57.2084358 L273.5,1.5 L1.5,1.5 Z"
              id="Rectangle"
              stroke="#3B3737"
              stroke-width="3"
            ></path>
            <path
              d="M1.5,1.5 L1.5,56.5 L273.5,56.5 L273.5,1.5 L1.5,1.5 Z"
              id="Rectangle"
              stroke="#3B3737"
              stroke-width="3"
            ></path>
            <g id="Get-in-Touch" fill="#000000">
              <use fill-rule="evenodd" href="#text-1"></use>
              <use fill-opacity="1" filter="url(#filter-2)"></use>
              <use fill-opacity="1" filter="url(#filter-3)"></use>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default ButtonCallout;
