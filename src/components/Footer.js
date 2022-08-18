import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer_nav">
        <a
          href="mailto:barrere.lucas@icloud.com?subject=formulaire de contact du portfolio"
          className="footer_contact">a project ? let's talk</a>
        <div className="footer_link">
          <a href="https://www.instagram.com/lubrre/" className="social_link">instagram</a>
          <a href="https://www.behance.net/lubrre" className="social_link">behance</a>
          <p className="social_link">privacy policy</p>
        </div>
      </div>
      <p className="footer_rights">2022 LUBRRE - ALL RIGHTS RESERVED</p>
    </div>
  )
}

export default Footer