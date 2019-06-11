import React from "react"

import Head from "../components/head"
import Header from "../components/header"
import Footer from "../components/footer"

import "../styles/styles.sass"

const Layout = ({ pageTitle, pageDescription, pageURL, children }) => {
  return (
    <div>
      <Head
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageURL={pageURL}
      />
      <Header />
      {children}
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
