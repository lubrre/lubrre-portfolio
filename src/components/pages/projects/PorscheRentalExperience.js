import React from "react";

import "./BaseProject.css";
import "./styles/Porsche.css";

import * as BsIcons from "react-icons/bs";

function PorscheRentalExperience() {
  return (
    <div className="base-project">
      {/* intro */}
      <h1 className="bp-title">PORSCHE RENTAL EXPERIENCE</h1>

      <div className="bp-intro">
        <div className="bp-intro-icon-section">
          <BsIcons.BsPersonFill className="bp-intro-icon" />
          <p className="bp-intro-title">ROLE</p>
          <p className="bp-intro-detail">UX Design, Ux Research</p>
        </div>

        <div className="bp-intro-icon-section">
          <BsIcons.BsCalendarEvent className="bp-intro-icon" />
          <p className="bp-intro-title">TIMELINE</p>
          <p className="bp-intro-detail">Fake project</p>
        </div>

        <div className="bp-intro-icon-section">
          <BsIcons.BsTools className="bp-intro-icon" />
          <p className="bp-intro-title">TOOLS</p>
          <p className="bp-intro-detail">Figma, Photoshop</p>
        </div>
      </div>

      {/* project */}

      <div className="porsche-1"></div>

      <div className="bp-context">
        <p className="context-title">Context</p>
        <p className="context-text">
          For this project, the client would like to create an application where
          his most loyal clients could be able to rent a car for a day, a week
          or even more. Porsche Rental Experience wants to create an unique
          renting experience with a space where his clients can communicate an
          exchange about their history with the brand and their best driving
          moments with a Porsche.
        </p>
      </div>

      <div className="bp-client">
        <div className="client-porsche"></div>
        <div className="client">
          <p className="client-title">company</p>
          <p className="client-text">
            Porsche is a German sports car manufacturer. Founded in 1931 by
            Ferdinand Porsche, then taken over by his son Ferry Porsche.
            Ferdinand Porsche is the engineer who created the first Volkswagen.
            It is chronologically the tenth brand to have joined the Volkswagen
            AG group in 2009.
          </p>
        </div>
      </div>

      <div className="bp-designbrief">
        <p className="designbrief-title">Design brief</p>
        <p className="designbrief-text">
          Porsche is looking to have an application that will allow them to
          develop a brand new vehicle rental service for their Porsche
          customers. For this project, we already have some ideas thanks to the
          client. Indeed having an already existing graphic identity that
          allowed to establish specifications quickly.
        </p>
      </div>

      {/* app */}

      <p className="bp-title-2">
        main interface of Porsche Rental Experience App
      </p>
      <p className="bp-text-2">
        Main pages of the app are the homepage and services pages.
      </p>

      <div className="porsche-2"></div>

      <p className="bp-title-2">on boarding</p>
      <p className="bp-text-2">
        Sign up, login and the walkthrought of the app makes it possible to
        realize the various functionalities.
      </p>

      <div className="porsche-3"></div>

      <p className="bp-title-2">userflow</p>
      <p className="bp-text-2">
        UX thinking was central to this project, which presents targets to
        various users while being precise.
      </p>

      <div className="porsche-4"></div>

      <p className="bp-title-2">Identity</p>
      <p className="bp-title-3">Branding</p>
      <p className="bp-text-2">
        Strong by its identity. The PORSCHE RENTAL EXPERIENCE application uses
        the graphic codes of the Porsche world. The continuity of the design
        taken up by the application is a choice made with the client in order to
        reassure its current customers as well as future customers that they are
        always in the Porsche world where quality always rhymes with performance
        and elegance.
      </p>

      <div className="porsche-5"></div>

      <p className="bp-title-3">Pictograms and CTA</p>
      <p className="bp-text-2">
        The PORSCHE RENTAL EXPERIENCE interface is sober and pays particular
        attention to the pictograms used. The Call-To-Action buttons are also
        studied in such a way as to continue the graphic charter of the client
        previously established.
      </p>

      <div className="porsche-6"></div>

      <div className="porsche-7"></div>

      <p className="bp-title-3">typography</p>
      <p className="bp-text-2">
        Colors of the app are taken from the porsche graphic charter
      </p>

      <div className="porsche-8"></div>

      <div className="porsche-9"></div>
    </div>
  );
}

export default PorscheRentalExperience;
