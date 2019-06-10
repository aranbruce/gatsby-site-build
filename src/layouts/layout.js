import React from "react"
import PropTypes from "prop-types"

import Transition from "../components/transition"

import Head from "../components/head"
import Header from "../components/header"
import Footer from "../components/footer"

import "../styles/styles.sass"

const Layout = props => {
  return (
    <div>
      <Head
        pageTitle={props.pageTitle}
        pageDescription={props.pageDescription}
        pageURL={props.pageURL}
      />
      <Header />
      <Transition location={props.location}>{props.children}</Transition>
      <Footer />
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
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
