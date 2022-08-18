import React from "react";

import "./BaseProject.css";
import "./styles/RoadArt.css";

import * as BsIcons from "react-icons/bs";

function RoadArt() {
  return (
    <div className="base-project">
      {/* intro */}
      <h1 className="bp-title">ROAD ART</h1>

      <div className="bp-intro">
        <div className="bp-intro-icon-section">
          <BsIcons.BsPersonFill className="bp-intro-icon" />
          <p className="bp-intro-title">ROLE</p>
          <p className="bp-intro-detail">
            Graphic designer,<br></br>Webdesigner,<br></br>Photographer
          </p>
        </div>

        <div className="bp-intro-icon-section">
          <BsIcons.BsCalendarEvent className="bp-intro-icon" />
          <p className="bp-intro-title">TIMELINE</p>
          <p className="bp-intro-detail">JUNE 2017</p>
        </div>

        <div className="bp-intro-icon-section">
          <BsIcons.BsTools className="bp-intro-icon" />
          <p className="bp-intro-title">TOOLS</p>
          <p className="bp-intro-detail">
            Wordpress, Photoshop<br></br>Illustrator, Lightroom CC
          </p>
        </div>
      </div>

      {/* project */}

      <div className="roadart-1"></div>

      <div className="bp-context">
        <p className="context-title">Context</p>
        <p className="context-text">
          For this project, the client wanted a complete overhaul of his
          website, which he mainly uses as a blog. The main goal was to display
          the services that the store could offer with the creation and
          restoration of vintage bikes as well as simple maintenance.
        </p>
      </div>

      <div className="bp-client">
        <div className="client-roadart"></div>
        <div className="client">
          <p className="client-title">company</p>
          <p className="client-text">
            Road Art is a bike shop founded by Thomas. Passionate about cycling,
            and more mainly fixed gear. He opened in 2012 in Marseille, Road
            Art. Place where enthusiasts meet, where they have their bikes
            serviced or where they find vintage bike parts found by Thomas in
            his spare time.
          </p>
        </div>
      </div>

      <div className="bp-designbrief">
        <p className="designbrief-title">Design brief</p>
        <p className="designbrief-text">
          The client wants the creation of a brand new identity that will allow
          him to identify himself in a different way with the arrival of the new
          site.<br></br>A clear identification of the services offered will be
          mandatory in order to make the site visually pleasant and
          understandable for visitors while having a daily blog part fed by the
          client.
        </p>
      </div>

      {/* app */}

      <p className="bp-title-2">main interface of Road Art</p>
      <p className="bp-text-2">
        Main pages of the app are the homepage, user profil and the search page.
      </p>

      <div className="roadart-2"></div>

      <p className="bp-title-2">Identity</p>
      <p className="bp-title-3">Branding</p>
      <p className="bp-text-2">
        Minimalist and sporty. Road Art's identity must convey an image of
        trustworthy and family service. Relying on white and warm tones. The
        blog brings a clear image with a simple navigation system. In addition,
        the use of banners on the home page allows you to immediately realize
        the services offered by Road Art in the shop.
      </p>

      <div className="roadart-3"></div>

      <p className="bp-title-3">Banners</p>
      <p className="bp-text-2">
        In order to quickly identify the services offered by the store. I
        decided to create a series of banners. Highlighting the know-how of Road
        Art as well as its main partner, Brompton.
      </p>

      <div className="roadart-4"></div>

      <p className="bp-title-3">Shop Curtain Customization</p>
      <p className="bp-text-2">
        Once the shop closed, the customer wanted to say hello to people who
        continued to pedal at night. The message RIDE SAFE has therefore been
        affixed by two graffiti artists to the curtain of the store.
      </p>

      <div className="roadart-5"></div>

      <p className="bp-title-3">Creation of a flag to be visible on events</p>
      <p className="bp-text-2">
        The shop sometimes realizing events or simply to be visible in the
        street a flag was created detailing the services of Road Art.
      </p>

      <div className="roadart-6"></div>
    </div>
  );
}

export default RoadArt;
