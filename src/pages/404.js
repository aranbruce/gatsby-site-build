import React from "react"
import Layout from "../layouts/layout"
import Section from "../components/section/section"
import Error from "../components/error/error"

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
      <Section hero background="blueSmall" align="center">
        <Error />
      </Section>
    </Layout>
  )
}

export default ErrorPage
