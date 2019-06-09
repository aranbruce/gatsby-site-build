import React from "react"
import Helmet from "react-helmet"

const Head = props => {
  return (
    <Helmet
      pageTitle={props.pageTitle}
      pageDescription={props.pageDescription}
      pageURL={props.pageURL}
    >
      {/* <!-- Primary Meta Tags --> */}
      <title>{props.pageTitle}</title>
      <meta name="title" content={props.pageTitle} />
      <meta name="description" content={props.pageDescription} />
      <link rel="canonical" href={props.pageURL} />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={props.pageURL} />
      <meta property="og:title" content={props.pageTitle} />
      <meta property="og:description" content={props.pageDescription} />
      <meta name="apple-mobile-web-app-title" content="Aran Bruce-Caddick" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="white" />
    </Helmet>
  )
}

export default Head
