import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import '/Users/thanhnguyen/Projects/Personal-Web/personal-web/src/styles/hexagonloader.css';

const HexagonLoader = ({ onComplete }) => {
  useEffect(() => {
    const anim = anime.timeline({
      loop: false,
      direction: 'alternate',
      complete: () => {
        document.body.style.backgroundColor = 'transparent'; // Ensure background is transparent after loading
        onComplete();
      },
    });

    anim
      .add({
        targets: '#hexagon path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutQuart',
        duration: 2000,
        delay: function (el, i) { return i * 250 },
      })
      .add({
        targets: '#hexagon #J',
        duration: 1000,
        opacity: 1,
        easing: 'easeInOutQuart'
      });
  }, [onComplete]);

  return (
    <div className="container">
      <svg id="hexagon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g>
          <g id="J" transform="translate(36, 33)" fill="#FFFFFF" style={{ opacity: 0 }} fontFamily="system-ui, Calibre-Medium, Calibre, sans-serif" 
          fontSize="50" fontWeight="400" letterSpacing="4.16666603">
            <text>
              <tspan x="0.141666985" y="33">J</tspan>
            </text>
          </g>
          <path
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 50, 5
               L 11, 27
               L 11, 72
               L 50, 95
               L 89, 73
               L 89, 28 z"
          />
        </g>
      </svg>
    </div>
  );
};

export default HexagonLoader;
