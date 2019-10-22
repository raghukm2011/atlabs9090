import React from 'react';
import './welcome.css';

function Welcome() {
  return (
    <div class="wrapper">
    <div class="container">
        <div class="title">
            <h1>Aeolus Tech Labs</h1>
            <p>Developing project with REACT </p>
            <div class="buttons">
                <button>Explore</button>
            </div>
        </div>
        <div class="graphic">
            <div class="clip-svg">
                <div class="night">
                    <div class="surface moveRight"></div>
                    <div class="car suspension">
                        <img src=" " alt=""/>
                    </div>
                </div>
            </div>
            <svg> 
                    <linearGradient id="linear-gradient" x1="669" y1="470" x2="669" y2="470"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#7fe0f4" />
                        <stop offset="0.1" stop-color="#76d9f1" />
                        <stop offset="0.26" stop-color="#5cc8ea" />
                        <stop offset="0.47" stop-color="#33abdd" />
                        <stop offset="0.57" stop-color="#1e9cd7" />
                        <stop offset="0.87" stop-color="#0075be" />
                        <stop offset="0.99" stop-color="#355c97" />
                    </linearGradient>
                <title>Svg_2</title>
                <clipPath id="myClip">
                    <path class="cls-1" d="M669,470" transform="translate(-557.61)" />
                    <path class="cls-2"
                        d="M700,0S549,29,558,233c0,0,2.7,95.93,52.24,184.12C649.64,487.28,720.66,534,800.53,543.66c104.88,12.76,372,45.63,429.47-115.66,0,0,6.49-75.47,66.54-111,43.34-25.61,70.46-71.68,70.46-122V0Z"
                        transform="translate(-557.61)" />
                </clipPath>
            </svg>
        </div>
    </div>
    <div class="mobile-view">
        <img src="./assets/72.jpg" alt=""/>
    </div>
    <div class="tablet-view">
        <img src="./assets/27.jpg" alt=""/>
    </div>

</div>

  );
}

export default Welcome;
