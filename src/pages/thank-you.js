import React from "react"
import Button from "../components/button/button"
import Layout from "../layouts/layout"
import Section from "../components/section/section"

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
      <Section hero background="blueLarge" align="center">
        <h1 className="extra-margin-bottom">Thank You</h1>
        <h4 className="extra-margin-bottom"> We'll be in touch soon</h4>
        <Button buttonType="primary" link="/">
          Go Back
        </Button>
      </Section>
    </Layout>
  )
}

export default ThankYouPage
