import React from "react"
import Layout from "../layouts/layout"
import WorkHero from "../components/work-hero"
import DynamoWebsite from "../components/dynamo-website"
import DynamoWebapp from "../components/dynamo-webapp"
import DynamoWebappImage from "../components/dynamo-webapp-image"
import DynamoCrm from "../components/dynamo-crm"
import DynamoCrmImage from "../components/dynamo-crm-image"

const pageMetaData = {
  title: "Work - Dynamo",
  description: "Work done for Dynamo - Website, Web App, and CRM",
  URL: "https://www.aranbc.com/dynamo",
}

const sectionStyle = {
  class: "section--work",
}

const WorkHeroText = {
  heroTitle: "Dynamo",
  heroSubtitle: "Get Mortgages",
  context:
    "Developed in partnership with Blenheim Chalcot (the UK’s leading venture builder) and Countrywide (the UK’s largest mortgage broker), Dynamo is a brand new way to sort your mortgage digitally. With the firmly held belief that everyone deserves to get the best deal on their mortgage, Dynamo is on a mission to help people get expert mortgage advice, for free.",
  keyDeliverables: [
    {
      id: 1,
      text: "Marketing Website",
    },
    {
      id: 2,
      text: "Web Application",
    },
    {
      id: 3,
      text: "Internal CRM Application",
    },
  ],
  firstWorkTitle: "Creating a Website that Drives Customer Acquisition",
  firstWorkText:
    "In support of its web application, Dynamo needed a marketing website whose primary purpose was to drive customer acquisition. To achieve this, the website features multiple calls-to-action inviting users to ‘Get Started’. These are supplemented by clearly outlined value propositions, and lender partner logos to convey an authoritative tone. Dynamo’s price point for the customer is also clearly refered to in the heading, in the line “No fees, no fuss.”",
}

const DynamoPage = () => {
  return (
    <div>
      <Layout
        pageTitle={pageMetaData.title}
        pageDescription={pageMetaData.description}
        pageURL={pageMetaData.URL}
      >
        <WorkHero
          sectionStyle={sectionStyle.class}
          heroTitle={WorkHeroText.heroTitle}
          heroSubtitle={WorkHeroText.heroSubtitle}
          context={WorkHeroText.context}
          keyDeliverables={WorkHeroText.keyDeliverables}
          firstWorkTitle={WorkHeroText.firstWorkTitle}
          firstWorkText={WorkHeroText.firstWorkText}
        />
        <DynamoWebsite />
        <DynamoWebapp />
        <DynamoWebappImage />
        <DynamoCrm />
        <DynamoCrmImage />
      </Layout>
    </div>
  )
}

export default DynamoPage
