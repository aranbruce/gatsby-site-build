import React from "react"
import Helmet from "react-helmet"

const Head = ({ pageTitle, pageDescription, pageURL }) => {
  return (
    <Helmet>
      <html lang="en" />
      {/* <!-- Primary Meta Tags --> */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={pageURL} />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageURL} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta name="apple-mobile-web-app-title" content="Aran Bruce-Caddick" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="white" />
    </Helmet>
  )
}

export default Head
