import React from "react"
import Helmet from "react-helmet"

const Head = () => {
  return (
    <Helmet>
      {/* <!-- Primary Meta Tags --> */}
      <title>Aran Bruce-Caddick</title>
      <meta name="title" content="Aran Bruce-Caddick" />
      <meta
        name="description"
        content="Crafting Stunning Digital Experiences. Specialising in developing and executing creative projects across digital mediums."
      />
      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://aranbc.com/" />
      <meta property="og:title" content="Aran" />
      <meta
        property="og:description"
        content="This website is so awesome that I really don't think you can handle how much awesome that is happening here."
      />
      {/* <meta property="og:image" content="http://myawesomewebsite.com/facebookimage.png" /> */}
      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      {/* <meta property="twitter:url" content="http://myawesomewebsite.com/"> */}
      <meta property="twitter:title" content="My Awesome Website" />
      <meta
        property="twitter:description"
        content="This website is so awesome that I really don't think you can handle how much awesome that is happening here."
      />
      {/* <meta property="twitter:image" content="http://myawesomewebsite.com/twitterimage.png" /> */}
    </Helmet>
  )
}

export default Head
