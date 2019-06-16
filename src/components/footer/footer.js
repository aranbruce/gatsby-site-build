import React, { Component } from "react"
import { Link } from "gatsby"

import styles from "./footer.module.sass"

import Logo from "./logo--black.svg"
import LinkedIn from "./linkedIn.inline.svg"
import Github from "./github.inline.svg"
import Share from "./share.inline.svg"

class Footer extends Component {
  constructor() {
    super()
    this.state = {
      showShareIcon: true,
    }
  }
  share(shareIcon) {
    if (navigator.share) {
      navigator
        .share({
          title: "Aran Bruce-Caddick 's Website",
          text: "Check out this great portfolio website",
          url: window.location.href,
        })
        .then(() => {
          console.log("Thanks for sharing!")
        })
        .catch(err => {
          console.log(`Couldn't share because of`, err.message)
        })
    } else {
      console.log("web share not supported")
    }
  }
  setShareIconState() {
    if (!navigator.share) {
      this.setState({ showShareIcon: false })
    } else if (navigator.share) {
      this.setState({ showShareIcon: true })
    } else {
      console.log("exception")
    }
  }

  componentDidMount() {
    this.setShareIconState()
  }

  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            <img className={styles.logoBlack} src={Logo} alt="website logo" />
            <h4>Aran Bruce-Caddick</h4>
            <div className={styles.social}>
              <a
                className={styles.link}
                href="https://www.linkedin.com/in/aran-bruce-caddick-a67b6790/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn alt="LinkedIn Icon" className={styles.icon} />
              </a>
              <a
                className={styles.link}
                href="https://www.github.com/aranbruce"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github alt="Github Icon" className={styles.icon} />
              </a>
              <a
                href="/"
                onClick={shareIcon => this.share(shareIcon)}
                className={this.state.showShareIcon ? styles.link : styles.hide}
                alt="Share Icon"
              >
                <Share alt="Share Icon" className={styles.icon} />
              </a>
            </div>
          </div>
          <div className={styles.footerRight}>
            <div className={styles.footerSubsection}>
              <div className={styles.footerSubsectionTitle}>Site</div>
              <div className={styles.footerSubsectionContent}>
                <ul>
                  <li>
                    <Link to="/#work" className={styles.link}>
                      Work
                    </Link>
                  </li>
                  <li>
                    <Link to="/#skills" className={styles.link}>
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link to="/#form" className={styles.link}>
                      Get In Touch
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.footerSubsection}>
              <div className={styles.footerSubsectionTitle}>Legals</div>
              <div className={styles.footerSubsectionContent}>
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
}

export default Footer
