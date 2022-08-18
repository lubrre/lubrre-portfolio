import React from "react";

import "./styles/About.css";

// import component

import AboutIntro from './About/AboutIntro'
import AboutCV from "./About/AboutCV";

function About() {
  return (
    <div className="about">
      <AboutIntro />
      <AboutCV />
    </div>
  );
}

export default About;
