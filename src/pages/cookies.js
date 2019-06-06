import React from "react"
import Layout from "../layouts/layout"

const CookiesPage = () => {
  return (
    <div>
      <Layout
        pageTitle="Cookies"
        pageDescription="Page describing the site's cookie policy "
        pageURL="https://www.aranbc.com/cookies"
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
