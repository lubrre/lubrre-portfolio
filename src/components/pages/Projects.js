import React from "react";

import { Link } from "react-router-dom";

import "./styles/ProjectIntro.css";

import "./styles/Projects.css";

import * as BsIcons from "react-icons/bs";

function Projects() {
  return (
    <div className="projects">
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

      <Link to="/roadart" className="project-link">
        <div className="project-container-1">
          <div className="project-container-detail">
            <Link to="/roadart">
              <p className="project-title">ROAD ART</p>
            </Link>
            <Link to="/porscherentalexperience">
              <p className="project-brand">
                discover more here <BsIcons.BsArrowUpRight />
              </p>
            </Link>
            <div className="project-category">
              <p className="category">IDENTITY</p>
              <p className="category">PHOTOGRAPHY</p>
              <p className="category">WEB DESIGN</p>
            </div>
          </div>
          <div className="img-roadart"></div>
        </div>
      </Link>

      <Link to="/weeklydesign" className="project-link">
        <div className="project-container-2">
          <div className="img-weeklydesign"></div>
          <div className="project-containerdetail">
            <Link to="/weeklydesign">
              <p className="project-title">WEEKLY DESIGN</p>
            </Link>
            <Link to="/taxiallan">
              <p className="project-brand">
                discover more here <BsIcons.BsArrowUpRight />
              </p>
            </Link>
            <div className="project-category">
              <p className="category">UX DESIGN</p>
              <p className="category">IDENTITY</p>
              <p className="category">PRINTS</p>
              <p className="category">+ MORE</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Projects;
