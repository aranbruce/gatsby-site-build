import React from "react"
import Layout from "../layouts/layout"

import WorkHero from "../components/work-hero"
import WorkImage from "../components/work-image"
import WorkText from "../components/work-text"

import WebsiteMobileImage from "../images/koodoo-website--mobile.svg"
import WebsiteLaptopImage from "../images/koodoo-website--laptop.svg"

const pageMetaData = {
  title: "Work - Koodoo",
  description: "Work done for Koodoo - Website, API Suite",
  URL: "https://www.aranbc.com/koodoo/",
}

const WorkHeroProps = {
  class: "section--work-orange",
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
  title: "A Marketing Site that Showcases Koodoo’s Offering",
  text:
    "With the launch of the business, Koodoo needed a marketing website to help position them as a leading authority in the mortgage technology space. The website needed to clearly outline the pain points the business addresses for its customers, as well as explain its various solutions. In addition to conveying an authoritative tone, it was essential that the website present Koodoo as a software solution that is easy to integrate with, as well as an attractive place to work for potential new talent.",
}

const FirstImages = {
  class: "section--light-purple",
  mobileImage: {
    src: WebsiteMobileImage,
    alt: "Website on Mobile",
  },
  laptopImage: {
    src: WebsiteLaptopImage,
    alt: "Website on Laptop",
  },
}

const FirstText = {
  title: "An Elegant API Suite to Deliver Seemless Mortgage Journeys",
  text: [
    {
      id: 1,
      paragraph:
        "Working with our customers, Koodoo created a suite of APIs which provide developers with the tools they need to create easy and accessible experiences for their users. Koodoo’s APIs are able to interrogate users’ credit files, and use the data they identify to suggest mortgage products.",
    },
    {
      id: 2,
      paragraph:
        "Koodoo’s API-first services also monitor the mortgage market each day, and notify our partners when their users can save by remortgaging. We then send mortgage product data to our partners, enabling them to deliver highly personalised email campaigns to their users.",
    },
  ],
}

const KoodooPage = () => {
  return (
    <Layout
      pageTitle={pageMetaData.title}
      pageDescription={pageMetaData.description}
      pageURL={pageMetaData.URL}
      location={pageMetaData.title.split("/")}
    >
      <WorkHero
        class={WorkHeroProps.class}
        heroTitle={WorkHeroProps.heroTitle}
        heroSubtitle={WorkHeroProps.heroSubtitle}
        context={WorkHeroProps.context}
        keyDeliverables={WorkHeroProps.keyDeliverables}
        title={WorkHeroProps.title}
        text={WorkHeroProps.text}
      />
      <WorkImage
        class={FirstImages.class}
        mobileImageSrc={FirstImages.mobileImage.src}
        mobileImageAlt={FirstImages.mobileImage.alt}
        laptopImageSrc={FirstImages.laptopImage.src}
        laptopImageAlt={FirstImages.laptopImage.alt}
      />
      <WorkText
        title={FirstText.title}
        id={FirstText.id}
        text={FirstText.text}
      />
    </Layout>
  )
}

export default KoodooPage
