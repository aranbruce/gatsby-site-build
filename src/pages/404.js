import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts/layout"

import ErrorMobileImage from "../images/404-image--mobile.svg"
import ErrorLaptopImage from "../images/404-image--laptop.svg"

const pageMetaData = {
  title: "404",
  description: "This Page cannot be found",
  URL: "https://www.aranbc.com/404/",
}

const ErrorPage = () => {
  return (
    <Layout
      pageTitle={pageMetaData.title}
      pageDescription={pageMetaData.description}
      pageURL={pageMetaData.URL}
    >
      <section className="section--404">
        <div className="section__content-vertical-center">
          <h1 className="centre-text extra-margin-bottom">Error</h1>
          <h4 className="centre-text extra-margin-bottom">
            Looks like something went wrong, how embarrasing
          </h4>
          <img className="error--mobile" src={ErrorMobileImage} alt="404" />
          <img className="error--laptop" src={ErrorLaptopImage} alt="404" />
          <Link to="/">
            <button className="button--primary">Back to Safety</button>
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default ErrorPage
