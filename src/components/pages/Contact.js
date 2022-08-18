import React from "react";

import "./styles/Contact.css";

import * as FaIcons from "react-icons/fa";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-page">
        <h2 className="contact-title">
          <span className="hover-contact">A project, </span>
          <span className="hover-contact idea">an idea...</span>
          <br></br>Let's chat !
        </h2>

        <div className="contact-card">
          <a
            href="mailto:barrere.lucas@icloud.com?subject=formulaire de contact"
            className="contact-mailto"
          >
            Send an email
          </a>
          <FaIcons.FaEnvelope className="contact-icon" />
        </div>
      </div>
    </div>
  );
}

// corriger contact-title

export default Contact;
