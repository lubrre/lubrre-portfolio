import React from "react";

import "./styles/ProjectIntro.css";

import { Link } from "react-router-dom";

import * as BsIcons from "react-icons/bs";

function ProjectIntro() {
  return (
    <div className="project">
      <h1 className="title-project">LAST PROJECTS</h1>
      <p className="detail-text-project">
        Some of the projects listed below were created whilist studying and
        other whilist freelancing.
      </p>

      <Link to="/porscherentalexperience" className="project-link">
        <div className="project-container-1">
          <div className="project-container-detail">
            <Link to="/porscherentalexperience">
              <p className="project-title">PORSCHE RENTAL EXPERIENCE</p>
            </Link>
            <Link to="/porscherentalexperience">
              <p className="project-brand">
                discover more here <BsIcons.BsArrowUpRight />
              </p>
            </Link>
            <div className="project-category">
              <p className="category">UX DESIGN</p>
            </div>
          </div>
          <div className="img-porsche"></div>
        </div>
      </Link>

      <Link to="/taxiallan" className="project-link">
        <div className="project-container-2">
          <div className="img-taxi"></div>
          <div className="project-containerdetail">
            <Link to="/taxiallan">
              <p className="project-title">Taxi ALLAN</p>
            </Link>
            <Link to="/taxiallan">
              <p className="project-brand">
                discover more here <BsIcons.BsArrowUpRight />
              </p>
            </Link>
            <div className="project-category">
              <p className="category">UX DESIGN</p>
              <p className="category">IDENTITY</p>
              <p className="category">WEB DEVELOPEMENT</p>
            </div>
          </div>
        </div>
      </Link>

      <div className="project-btn">
        <Link to="/project" className="allworks-btn">
          <button className="work-btn">All works</button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectIntro;
