import React from "react";

import "./AboutCV.css";

function AboutCV() {
  return (
    <div>
      <h2 className="about-me">
        <span className="me">about </span>me
      </h2>
      <div className="about-container-myself">
        <p className="myself-text">
          And here are a few more things about me. I very passionate about web
          design and web development.
        </p>
        <div className="about-container-myself-detail">
          <p className="myself-text-detail">
            I started my journey quite some time ago as a graphic designer, but
            missing something in my life and having a special affinity for
            website, I decided to switched to web design and web development.
            Fast forward, after having taking classes to learn web developement
            I wasn't sure about my choice because it didn't give me joy and
            excitement of creation from scratch. That's why I focus myself more
            on the web design part. So here I am, full of enthusiam and ideas,
            ready to conquer the aùazing world of design.
          </p>
          <p className="myself-text-detail">
            And one more thing. I am curious. I love to explore the world and
            all the possibilies it offers, to constantly learn and try new
            things.
          </p>
        </div>
      </div>

      <div className="about-container-myself">
        <p className="myself-text">SKILLS</p>
        <div className="about-container-myself-detail">
          <p className="myself-text-detail">
            I have good knowledge of Abode suite by my past as a graphic
            designer but that's not all I also have good knowledge of Figma,
            HTML, CSS and Javascript. I can do research, customer journey map,
            user flow maps, wire-framing, prototyping and design. I can easily
            do a competitor analysis. I am kind of an overthinker when it comes
            to solutions to problem which helps me considerably to come up with
            the ideal UX approaches for different scenarios. My mission to
            create a product that perfectly solves users problems, whilist
            meeting business goals.
          </p>
        </div>
      </div>

      <div className="about-container-myself">
        <p className="myself-text">EXPERIENCE</p>
        <div className="about-container-myself-detail">
          <p className="myself-text-detail">
            My past experience taught me a lot. I have been a Apple Specialist
            for three years which taught me patience, team work and finding
            solutions for clients pretty fast to lead to a sale. I understand
            problems and can easily find a solution to solve it. My experience
            as a graphic designer taught me to develop an infinite curiosity and
            to ever learn new stuffs, trends, or methods to do things.
          </p>
        </div>
      </div>

      <div className="about-container-myself">
        <p className="myself-text">HOOBIES</p>
        <div className="about-container-myself-detail">
          <p className="myself-text-detail">
            But that's not everything about me. In fact my first passion and my
            deepest connection is with cars. And what I mean by cars is
            everything related with the automobile world, so racing and his
            history, car culture, modifying a car, driving. It's more than a
            passion, it's a way of life. I breathe, eat and sleep with cars in
            my mind. <br></br>
            This passion thought me so much, design and power but also
            curiosity. It taught me how to do an informative watch.
          </p>
        </div>
      </div>

      <div className="about-container-education">
        <h3 className="education-title">EDUCATION</h3>

        <div className="education-container">
          <div className="container-1">
            <div className="container-1-detail">
              <p className="detail-1-title">WEB DEVELOPER</p>
              <p className="detail-1-text">OpenClassrooms, 2021</p>
            </div>
            <div className="container-1-degree"></div>
          </div>

          <div className="container-education-multiple">
            <div className="education-multiple">
              <div className="multiple-container">
                <p className="multiple-title">REACT</p>
                <p className="multiple-text">Udemy 2022</p>
              </div>
            </div>

            <div className="education-multiple">
              <div className="multiple-container">
                <p className="multiple-title">JAVASCRIPT</p>
                <p className="multiple-text">Udemy 2022</p>
              </div>
            </div>

            <div className="education-multiple">
              <div className="multiple-container">
                <p className="multiple-title">FIGMA AND WEBFLOW</p>
                <p className="multiple-text">Udemy 2022</p>
              </div>
            </div>

            <div className="education-multiple">
              <div className="multiple-container">
                <p className="multiple-title">UX/UI DESIGNER</p>
                <p className="multiple-text">Udemy 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCV;
