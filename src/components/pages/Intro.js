import React from "react";

import "./styles/Intro.css";

function Intro() {
  return (
    <div className="intro">
      <div className="intro-img"></div>
      <div className="intro-container">
        <span className='hidden-sm1'><h2 className="intro-name">Lucas Barrere</h2></span>
        <h1 className="intro-title">PORTFOLIO</h1>
        <p className="intro-self">of a self-taught</p>
        <p className="intro-spe"><span className="intro-span">UX</span> Designer <span className='hidden-sm2'>/</span> Frontend Dev</p>
      </div>
    </div>
  );
}

export default Intro;
