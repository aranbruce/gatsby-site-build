import React from "react"
import Layout from "../layouts/layout"
import DynamoHero from "../components/dynamo-hero"
import DynamoWebsite from "../components/dynamo-website"
import DynamoWebapp from "../components/dynamo-webapp"
import DynamoWebappImage from "../components/dynamo-webapp-image"
import DynamoCrm from "../components/dynamo-crm"
import DynamoCrmImage from "../components/dynamo-crm-image"

const DynamoPage = () => {
  return (
    <div>
      <Layout
        pageTitle="Work | Dynamo"
        pageDescription="Work done for Dynamo - Website, Web App, and CRM."
        pageURL="https://www.aranbc.com/dynamo"
      >
        <DynamoHero />
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
