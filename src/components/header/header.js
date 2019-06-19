import React, { Component } from "react"
import { Link } from "gatsby"

import styles from "./header.module.sass"

import Logo from "./logo.svg"
import Button from "../button/button"

class Header extends Component {
  constructor() {
    super()
    this.state = {
      scrolled: false,
      burgerOpen: false,
    }
  }
  toggleBurgerMenu(burger) {
    this.setState({ burgerOpen: !this.state.burgerOpen })
  }
  handleScroll = () => {
    const currentScrollPos = window.pageYOffset
    const scrolled = currentScrollPos > 0
    this.setState({
      scrolled,
    })
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
    window.addEventListener("burger toggle", this.toggleBurgerMenu)
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
    window.removeEventListener("burger toggle", this.toggleBurgerMenu)
  }

  render() {
    return (
      <nav className={this.state.scrolled ? styles.navScroll : styles.nav}>
        <div className={styles.navContent}>
          <div className={styles.navLeft}>
            <Link className={styles.navItem} to="/">
              <img src={Logo} alt="website logo" />
            </Link>
          </div>
          <div className={styles.navRight}>
            <div
              className={
                !this.state.burgerOpen && !this.state.scrolled
                  ? styles.burgerContainer
                  : this.state.burgerOpen
                  ? styles.burgerContainerClose
                  : !this.state.burgerOpen && this.state.scrolled
                  ? styles.burgerContainerScroll
                  : ""
              }
              onClick={burger => this.toggleBurgerMenu(burger)}
            >
              <div className={styles.allBars}>
                <div className={styles.bar1} />
                <div className={styles.bar2} />
                <div className={styles.bar3} />
              </div>
            </div>
            <div className={this.state.burgerOpen ? styles.show : styles.menu}>
              <Link
                to="/#work"
                className={styles.navItem}
                onClick={burger => this.toggleBurgerMenu(burger)}
              >
                Work
              </Link>
              <Link
                to="/#skills"
                className={styles.navItem}
                onClick={burger => this.toggleBurgerMenu(burger)}
              >
                Skills
              </Link>
              <Link
                to="/#about-me"
                className={styles.navItem}
                onClick={burger => this.toggleBurgerMenu(burger)}
              >
                About Me
              </Link>

              <Button
                link="/#form"
                className={styles.navItem}
                onClick={burger => this.toggleBurgerMenu(burger)}
                buttonType={
                  this.state.scrolled
                    ? "primary"
                    : this.state.burgerOpen
                    ? "primary"
                    : "secondary"
                }
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
