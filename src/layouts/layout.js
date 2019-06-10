import React from "react"

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
      {props.children}
      <Footer />
    </div>
  )
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
