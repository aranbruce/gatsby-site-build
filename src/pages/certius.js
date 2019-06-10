import React from "react"
import Layout from "../layouts/layout"
import WorkHero from "../components/work-hero"
import WorkImage from "../components/work-image"
import WorkText from "../components/work-text"

import AudiencesMobileImage from "../images/certius-audiences--mobile.svg"
import AudiencesLaptopImage from "../images/certius-audiences--laptop.svg"
import SiteStructureMobileImage from "../images/certius-sitemap--mobile.svg"
import SiteStructureLaptopImage from "../images/certius-sitemap--laptop.svg"
import WebsiteMobileImage from "../images/certius-website--mobile.png"
import WebsiteLaptopImage from "../images/certius-website--laptop.png"

const pageMetaData = {
  title: "Work - Certius",
  description:
    "Work done for Certius - Market Research, Competitor Analysis, and Website Design",
  URL: "https://www.aranbc.com/certius/",
}

const WorkHeroProps = {
  class: "section--work",
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
  title: "Identifying Certius’ Key Audiences",
  text:
    "By conducting market research and reviewing Certius’ current business model, it became clear that the company had two distinct audience segments: Iranian businesses looking to improve their market access and international businesses looking to enter or grow their presents in the Iranian market. Both of these could then be further broken down by their objective when interacting with Certius. Firstly, senior managers and executives looking to assess the credibility of Certius as a key business partner as well as understand its authority within the Iranian market and secondly C-suite employees looking to determine the feasibility of exploiting Iran as an under-utilised market.",
}

const FirstImages = {
  class: "section--light-blue",
  mobileImage: {
    src: AudiencesMobileImage,
    alt: "Audiences on Mobile",
  },
  laptopImage: {
    src: AudiencesLaptopImage,
    alt: "Audiences on Laptop",
  },
}

const FirstText = {
  title:
    "Understanding Audience Objectives to inform the New Website Structure",
  text: [
    {
      id: 1,
      paragraph:
        "With Certius looking to extend its services it offered, increase its digital presence and improve its lead generation, the decision was taken to relaunch the website based upon defined audience segments and key business objectives.",
    },
    {
      id: 2,
      paragraph:
        "Through workshops with Certius and a thorough analysis of similar and competing businesses, both in Iran and abroad, primary objectives were established for each of the key audience segments. This then informed the information architecture, user flow and page structure that the new site would need to follow.",
    },
  ],
}

const SecondImages = {
  class: "section--light-blue",
  mobileImage: {
    src: SiteStructureMobileImage,
    alt: "Site Structure on Mobile",
  },
  laptopImage: {
    src: SiteStructureLaptopImage,
    alt: "Site Structure on Laptop",
  },
}

const SecondWorkText = {
  title: "Designing a Site that Exuded Authority and Generated Inbound Leads",
  text: [
    {
      id: 1,
      paragraph:
        "Using the proposed page strucutre, the website was wireframed and then designed incorporating key commonalities identified during the competitor analysis. This included aspects such as a prominent company descriptor, engaging visual elements, minimalistic design, showcasing of previous work or case studies, and enquiry forms displayed on multiple pages.",
    },
    {
      id: 2,
      paragraph:
        "The final design incorporates abstract shapes contained within the logo, whilst using imagery of Iran to convey the companies expertise and experience within the country. Key calls-to-action where placed throughout each page, inviting users to view Certius’ accomplishments and previous work, before making inbound enquires.",
    },
  ],
}

const ThirdImages = {
  class: "section--light-blue",
  mobileImage: {
    src: WebsiteMobileImage,
    alt: "Website on Mobile",
  },
  laptopImage: {
    src: WebsiteLaptopImage,
    alt: "Website on Laptop",
  },
}

const CeritusPage = () => {
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
      <WorkImage
        class={SecondImages.class}
        mobileImageSrc={SecondImages.mobileImage.src}
        mobileImageAlt={SecondImages.mobileImage.alt}
        laptopImageSrc={SecondImages.laptopImage.src}
        laptopImageAlt={SecondImages.laptopImage.alt}
      />
      <WorkText
        title={SecondWorkText.title}
        id={SecondWorkText.id}
        text={SecondWorkText.text}
      />
      <WorkImage
        class={ThirdImages.class}
        mobileImageSrc={ThirdImages.mobileImage.src}
        mobileImageAlt={ThirdImages.mobileImage.alt}
        laptopImageSrc={ThirdImages.laptopImage.src}
        laptopImageAlt={ThirdImages.laptopImage.alt}
      />
    </Layout>
  )
}

export default CeritusPage
