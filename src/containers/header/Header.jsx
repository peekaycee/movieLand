import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";
const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Lorem ipsum dolor sit amet consect worked!
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
          doloribus facilis minima exercitationem recusandae.
        </p>
        <div className="gpt3__header-content__input">
          <input type="input" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1600 people requested access</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>

      <div className="svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="-25 -25 250 250"
          class="float"
        >
          <defs>
            <linearGradient id="lgrad" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop
                offset="0%"
                style={{ backgroundColor: "#00FF84", opacity: 0.0 }}
              />
              <stop
                offset="100%"
                style={{ backgroundColor: "#008EE6", opacity: 0.0 }}
              />
            </linearGradient>
          </defs>
          <path
            d="M195.68453379232244 70.9402341209379 C190.07304658886113 54.681873484443315 170.2397527532207 22.38621783312221 154.26751203338017 16.005731518710533 C123.01728083487062 3.5220934380116447 40.7516899213685 10.483558569345345 21.48285963362804 38.07214949081922 C-0.11289383690328947 68.9923661953358 23.240407431512995 159.233502456635 49.49559030823566 186.30935407988187 C60.176419615907136 197.32403833881847 94.52894807006804 203.24903824343954 109.42054035685416 199.55527820957 C137.20040215858862 192.66466897896956 184.92347492740336 151.55268014430092 196.70273865400492 125.4672404632936 C202.31386721506092 113.04127233667346 200.1327851364652 83.82831029978672 195.68453379232244 70.9402341209379Z"
            stroke="none"
            fill="url(#lgrad)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
