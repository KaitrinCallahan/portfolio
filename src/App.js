import React from 'react'
import ReactDOM from 'react-dom';
import animateScrollTo from 'animate-scroll-to';
import Nav from './assets/nav';
import Explosion from './explosion';
import Phone from './phone';
import StickyText from "./sticky-text";
import Light from './light';
import Plx from "react-plx";
import './docs.scss';

const titleData = [
  {
    start: 'self',
    startOffset: 50,
    duration: 200,
    properties: [
      {
        startValue: 1,
        endValue: -360,
        property: 'rotate',
      },
      {
        startValue: '#e34e47',
        endValue: '#995eb2',
        property: 'color',
      },
    ],
  },
];

const Example = class extends React.Component {
  handleScrollTop() {
    animateScrollTo(0, { minDuration: 3000 });
  }

  render() {
    return (
      <div className='Demo'>
        <Nav />
        <div className='Content'>
          <Plx
            tagName='h1'
            className='Examples'
            parallaxData={ titleData }
            // eslint-disable-next-line no-console
            onPlxStart={ () => console.log('Plx - onPlxStart callback ') }
            // eslint-disable-next-line no-console
            onPlxEnd={ () => console.log('Plx - onPlxEnd callback') }
          >
            Examples
          </Plx>
          <h3>Make things explode</h3>
          <Explosion />
          <h3>Animate nested elements</h3>
          <Phone />
          <div className='StickyText-trigger' />
          <StickyText />
          <Light />
        </div>

        <div className='Footer'>
          <div className='Content'>
            <h1>Plx</h1>
            <h2>React Parallax component</h2>
            <div>Awesome isn&#39;t it?</div>
            <div className='Footer-links'>
              <a href='https://muffinman.io'>My blog</a>
              <a href='https://www.npmjs.com/package/react-plx'>npm</a>
              <a href='https://github.com/Stanko/react-plx'>GitHub</a>
            </div>
            <button onClick={ () => this.handleScrollTop() }>Back to top</button>
          </div>
        </div>
      </div>
    );
  }
};

export default Example;
ReactDOM.render(<Example />, document.getElementById('demo'));
