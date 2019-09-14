// import React from 'react';
// import Plx from 'react-plx';

// const lightData = [
//     {
//         start: 'self',
//         startOffset: 50,
//         duration: 400,
//         easing: [0.25, 0.1, 0.6, 1.5],
//         properties: [
//             {
//                 startValue: 90,
//                 endvalue: 0,
//                 property: 'rotate',
//             },
//             {
//                 startValue: 0,
//                 endValue: 1,
//                 property: 'scale',
//             },
//             {
//                 startvalue: 0,
//                 endValue: -200,
//                 property: 'translateX',
//             },
//         ],
//     },
// ];

// export default class Light extends React.Component {
//     render() {
//         return (
//             <Plx
//                 className='Phone'
//                 parallaxData={ lightData }
//             >
//                 <svg width="1024px" height="545px" viewBox="0 0 1024 545" className='Light-svg'>
//                     <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.15">
//                         <g id="Minimalist" transform="translate(0.000000, -2829.000000)" fill="#1145F1">
//                             <g id="Contact" transform="translate(0.000000, 2658.609942)">
//                                 <polygon id="Rectangle" points="493 219.813026 558.425073 170.390058 1024 715.422967 1024 714.813026 0 714.813026 430.105977 182.472701"></polygon>
//                             </g>
//                         </g>
//                     </g>
//                 </svg>
//             </Plx>
//         )
//     }
// }
import React from 'react';
import Plx from "react-plx";

const lightData = [
    {
      start: 'self',
      startOffset: 300,
      duration: 500,
      easing: [0.25, 0.1, 0.6, 1.5],
      properties: [
        {
          startValue: 90,
          endValue: 0,
          property: 'rotate',
        },
        {
          startValue: 0,
          endValue: 1,
          property: 'scale',
        },
        {
            startValue: -200,
            endValue: 0,
            property: 'translateX',
          },
      ],
    },
  ];

export default class Light extends React.Component {
  render() {
    return (
      <Plx
        className='Phone'
        parallaxData={ lightData }
      >
        <svg width="1024px" height="545px" viewBox="0 0 1024 545" className='Light-svg'>
            <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.15">
                <g id="Minimalist" transform="translate(0.000000, -2829.000000)" fill="#1145F1">
                    <g id="Contact" transform="translate(0.000000, 2658.609942)">
                        <polygon id="Rectangle" points="493 219.813026 558.425073 170.390058 1024 715.422967 1024 714.813026 0 714.813026 430.105977 182.472701"></polygon>
                    </g>
                </g>
            </g>
        </svg>
      </Plx>
    );
  }
}