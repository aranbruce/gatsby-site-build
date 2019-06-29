import React, { Component } from "react"

import Head from "../components/head/head"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"

import "../styles/styles.sass"

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
        {this.props.children}
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
