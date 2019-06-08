import React from "react"
import WorkHero from "../components/work-hero"
import Layout from "../layouts/layout"
import KoodooWebsiteImage from "../components/koodoo-website-image"
import KoodooApi from "../components/koodoo-api"

const pageMetaData = {
  title: "Work - Koodoo",
  description: "Work done for Koodoo - Website, API Suite",
  URL: "https://www.aranbc.com/koodoo",
}

const sectionStyle = {
  class: "section--work-orange",
}

const WorkHeroText = {
  heroTitle: "Koodoo",
  heroSubtitle: "Powering the future of mortgages",
  context:
    "Koodoo’s goal is to create a world where securing home financing is seamless and transparent. They partner with industry leaders to unlock the potential of mortgages, harness personal data, and connect borrowers with their next mortgage. Building technology to power mortgage journeys for their partners, Koodoo helps them acquire and activate leads, segment and engage their customers, and streamline mortgage applications.",
  keyDeliverables: [
    {
      id: 1,
      text: "Marketing Website",
    },
    {
      id: 2,
      text: "API Suite",
    },
  ],
  firstWorkTitle: "A Marketing Site that Showcases Koodoo’s Offering",
  firstWorkText:
    "With the launch of the business, Koodoo needed a marketing website to help position them as a leading authority in the mortgage technology space. The website needed to clearly outline the pain points the business addresses for its customers, as well as explain its various solutions. In addition to conveying an authoritative tone, it was essential that the website present Koodoo as a software solution that is easy to integrate with, as well as an attractive place to work for potential new talent.",
}

const KoodooPage = () => {
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
      <KoodooWebsiteImage />
      <KoodooApi />
    </Layout>
  )
}

export default KoodooPage
