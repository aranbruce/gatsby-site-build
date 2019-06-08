import React from "react"
import Layout from "../layouts/layout"
import WorkHero from "../components/work-hero"
import CertiusAudiencesImage from "../components/certius-audiences-image"
import CertiusSiteStructure from "../components/certius-site-structure"
import CertiusSiteStructureImage from "../components/certius-site-structure-image"
import CertiusWebsite from "../components/certius-website"
import CertiusWebsiteImage from "../components/certius-website-image"

const pageMetaData = {
  title: "Work - Certius",
  description:
    "Work done for Certius - Market Research, Competitor Analysis, and Website Design",
  URL: "https://www.aranbc.com/certius",
}

const sectionStyle = {
  class: "section--work",
}

const WorkHeroText = {
  heroTitle: "Certius",
  heroSubtitle: "Helping your business unlock the potential of Iran",
  context:
    "Working with international and Iranian companies, Certius provide the services needed to assess the market opportunity in Iran. Whether a business is looking to enter the market, or develop their capabilities into a growing, sustainable operation, Cerius are able to leverage their vast network across Iran’s business community and public administration to help companies thrive.",
  keyDeliverables: [
    {
      id: 1,
      text: "Marketing Research",
    },
    {
      id: 2,
      text: "Competitor Analysis",
    },
    {
      id: 3,
      text: "Website Design",
    },
  ],
  firstWorkTitle: "Identifying Certius’ Key Audiences",
  firstWorkText:
    "By conducting market research and reviewing Certius’ current business model, it became clear that the company had two distinct audience segments: Iranian businesses looking to improve their market access and international businesses looking to enter or grow their presents in the Iranian market. Both of these could then be further broken down by their objective when interacting with Certius. Firstly, senior managers and executives looking to assess the credibility of Certius as a key business partner as well as understand its authority within the Iranian market and secondly C-suite employees looking to determine the feasibility of exploiting Iran as an under-utilised market.",
}

const CeritusPage = () => {
  return (
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
      <CertiusAudiencesImage />
      <CertiusSiteStructure />
      <CertiusSiteStructureImage />
      <CertiusWebsite />
      <CertiusWebsiteImage />
    </Layout>
  )
}

export default CeritusPage
