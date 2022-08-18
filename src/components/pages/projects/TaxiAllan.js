import React from "react";

import "./BaseProject.css";
import "./styles/TaxiAllan.css";

import * as BsIcons from "react-icons/bs";

function TaxiAllan() {
  return (
    <div className="base-project">
      {/* intro */}
      <h1 className="bp-title">TAXI ALLAN</h1>

      <div className="bp-intro">
        <div className="bp-intro-icon-section">
          <BsIcons.BsPersonFill className="bp-intro-icon" />
          <p className="bp-intro-title">ROLE</p>
          <p className="bp-intro-detail">
            UX Designer,<br></br>Frontend Developer
          </p>
        </div>

        <div className="bp-intro-icon-section">
          <BsIcons.BsCalendarEvent className="bp-intro-icon" />
          <p className="bp-intro-title">TIMELINE</p>
          <p className="bp-intro-detail">March to May 2022</p>
        </div>

        <div className="bp-intro-icon-section">
          <BsIcons.BsTools className="bp-intro-icon" />
          <p className="bp-intro-title">TOOLS</p>
          <p className="bp-intro-detail">
            Figma, Photoshop,<br></br> React, Javascript
          </p>
        </div>
      </div>

      <div className="bp-button-final-product">
        <a href="https://taxiallan.fr/">
          <button className="bp-final-product">View website here</button>
        </a>
      </div>

      {/* project */}

      <div className="taxi-1"></div>

      <div className="bp-context">
        <p className="context-title">Context</p>
        <p className="context-text">
          For this project, the client wanted a renewal of its identity with the
          creation of a website. The objective is to gain visibility on the
          internet in order to obtain new customers.
        </p>
      </div>

      <div className="bp-client">
        <div className="client-taxi"></div>
        <div className="client">
          <p className="client-title">company</p>
          <p className="client-text">
            Taxi Allan is an independent taxi that offers its transport services
            in the South-East of France between the Var and the
            Bouches-du-Rhône.
          </p>
        </div>
      </div>

      <div className="bp-designbrief">
        <p className="designbrief-title">Design brief</p>
        <p className="designbrief-text">
          The client wants the creation of a brand new identity that will allow
          him to identify differently against the competition. With the redesign
          and the creation of a new identity will come the creation of a
          website, which will aim to show the different services offered and to
          learn a little more about the driver.
        </p>
      </div>

      {/* app */}

      <p className="bp-title-2">main interface of taxiallan.fr</p>
      <p className="bp-text-2">
        Main pages of the app are the homepage, about your driver page, services page and contact page.
      </p>

      <div className="taxi-2"></div>

      <p className="bp-title-2">Identity</p>
      <p className="bp-title-3">Branding</p>
      <p className="bp-text-2">
        Sober and elegant. The identity of taxiallan.fr must convey an image of
        irreproachable service and trust. This is why, like New York taxis, the
        color chart is oriented towards yellow and black. Service known
        worldwide for its transport services. It is easy to attach the yellow
        and black to the taxis hence this choice for the identity of
        taxiallan.fr which will determine the whole aspect of the site, business
        cards or even the logo.
      </p>

      <div className="taxi-3"></div>

      <p className="bp-title-3">typography</p>
      <p className="bp-text-2">
        The colors of the graphic identity come from and are inspired by the
        world of New York taxis and their famous yellow cab.
      </p>

      <div className="taxi-4"></div>

      <div className="taxi-5"></div>
    </div>
  );
}

export default TaxiAllan;
