import React from "react";

import './AboutIntro.css'

import * as BsIcons from "react-icons/bs";

import { Link } from "react-router-dom";

function AboutIntro() {
  return (
    <div>
      <h1 className="about-title">
        <span className="about-title-little">UX</span> DESIGNER<br></br>FRONTEND
        DEV
      </h1>

      <div className="about-container-img">
        <div className="about-container-text">
          <div className="about-container-location">
            <p className="location-title">LOCATION</p>
            <p className="location-text">Marseille, France</p>
          </div>
          <div className="about-container-social">
            <p className="social-title">SOCIAL MEDIA</p>
            <a href="https://www.instagram.com/lubrre/"><BsIcons.BsInstagram className="social-icon" /></a>
          </div>
        </div>

        <div className="about-img"></div>
      </div>

      <p className="about-text-intro">
        Hi ! My name is Lucas Barrere<br></br>and I am a junior UX
        Designer<span className="sm-hidden3">/</span><span className="sm-show1"><br></br></span>Frontend developer. When creating user interface, my main focus
        is finding the perfect balance between functionality and aesthetics.
      </p>
      <p className="about-text-intro-little">
        But don't take my word for it,<br></br>have a look at my{"\u00a0"}
        <Link to="/project" className="about-text-intro-little">
          projects
        </Link>
      </p>
    </div>
  );
}

export default AboutIntro;
