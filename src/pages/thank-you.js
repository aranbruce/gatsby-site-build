import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts/layout"

const pageMetaData = {
  title: "Thank You",
  description: "Thank you for signing up, we'll be in touch shortly.",
  URL: "https://www.aranbc.com/thank-you/",
}

const ThankYouPage = () => {
  return (
    <Layout
      pageTitle={pageMetaData.title}
      pageDescription={pageMetaData.description}
      pageURL={pageMetaData.URL}
    >
      <section className="section--thank-you">
        <div className="section__content-vertical-center">
          <h1 className="extra-margin-bottom">Thank You</h1>
          <h4 className="extra-margin-bottom"> We'll be in touch soon</h4>
          <Link to="/">
            <button className="button--primary">Go Back</button>
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default ThankYouPage
