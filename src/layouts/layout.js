import React, { Component } from "react"
import posed, { PoseGroup } from "react-pose"

import Head from "../components/head/head"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"

import "../styles/styles.sass"

const FadeContent = posed.div({
  enter: { opacity: 1, transition: { duration: 500 } },
  exit: { opacity: 0, transition: { duration: 500 } },
})

class Layout extends Component {
  state = { isVisible: false }

  componentDidMount() {
    this.setState({
      isVisible: true,
    })
  }
  componentWillUnmount() {
    this.setState({
      isVisible: false,
    })
  }

  render() {
    return (
      <div>
        <Head
          pageTitle={this.props.pageTitle}
          pageDescription={this.props.pageDescription}
          pageURL={this.props.pageURL}
        />
        <Header />
        <PoseGroup>
          {this.state.isVisible && [
            <FadeContent
              pose={this.state.isVisible ? "visible" : "hidden"}
              key="FadeContent"
            >
              {this.props.children}
            </FadeContent>,
          ]}
        </PoseGroup>
        <Footer />
      </div>
    )
  }
}

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]', {
    speed: 700,
    speedAsDuration: true,
    easing: "easeInOutCubic",
  })
}

export default Layout
