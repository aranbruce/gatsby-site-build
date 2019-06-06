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
      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={props.pageURL} />
      <meta property="og:title" content={props.pageTitle} />
      <meta property="og:description" content={props.pageDescription} />
      {/* <meta property="og:image" content="http://myawesomewebsite.com/facebookimage.png" /> */}
      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      {/* <meta property="twitter:url" content="http://myawesomewebsite.com/"> */}
      <meta property="twitter:title" content={props.pageTitle} />
      <meta property="twitter:description" content={props.pageDescription} />
      <meta
        property="twitter:image"
        // content="http://myawesomewebsite.com/twitterimage.png"
      />
    </Helmet>
  )
}

export default Head
