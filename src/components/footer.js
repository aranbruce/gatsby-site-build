import React from "react"
import { Link } from "gatsby"

import Logo from "../images/logo--black.svg"
import LinkedIn from "../images/linkedIn.inline.svg"
import Github from "../images/github.inline.svg"
import Share from "../images/share.inline.svg"

const Footer = () => {
  return (
    <footer>
      <div className="footer__content">
        <div className="footer__left">
          <img className="logo--black" src={Logo} alt="website logo" />
          <h4 className="extra-margin-top">Aran Bruce-Caddick</h4>
          <div className="social extra-margin-top">
            <a
              href="https://www.linkedin.com/in/aran-bruce-caddick-a67b6790/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn alt="LinkedIn Icon" />
            </a>
            <a
              href="https://www.github.com/aranbruce"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github alt="Github Icon" />
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              id={"share-icon"}
            >
              <Share alt="Share Icon" />
            </a>
          </div>
        </div>
        <div className="footer__right">
          <div className="footer-subsection">
            <div className="footer-subsection-title extra-margin-bottom">
              Site
            </div>
            <div className="footer-subsection-content">
              <ul>
                <li>
                  <Link to="/#work">Work</Link>
                </li>
                <li>
                  <Link to="/#skills">Skills</Link>
                </li>
                <li>
                  <Link to="/#form">Get In Touch</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-subsection">
            <div className="footer-subsection-title extra-margin-bottom">
              Legals
            </div>
            <div className="footer-subsection-content">
              <ul>
                <li>
                  <Link to="/cookies">Cookie Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
