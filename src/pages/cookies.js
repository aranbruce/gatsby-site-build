import React from "react"
import Layout from "../layouts/layout"

const pageMetaData = {
  title: "Cookies",
  description: "Page describing the site's cookie policy",
  URL: "https://www.aranbc.com/cookies",
}

const CookiesPage = () => {
  return (
    <div>
      <Layout
        pageTitle={pageMetaData.title}
        pageDescription={pageMetaData.description}
        pageURL={pageMetaData.URL}
      >
        <h1>Cookies</h1>
        <p>
          <span role="img" aria-label="cookie">
            🍪
          </span>
        </p>
      </Layout>
    </div>
  )
}

export default CookiesPage
