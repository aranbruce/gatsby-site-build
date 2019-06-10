import React from "react"
import Layout from "../layouts/layout"
import WorkHero from "../components/work-hero"
import WorkImage from "../components/work-image"
import WorkText from "../components/work-text"

import WebsiteMobileImage from "../images/website--mobile.svg"
import WebsiteLaptopImage from "../images/website--laptop.svg"
import WebappMobileImage from "../images/webapp--mobile.svg"
import WebappLaptopImage from "../images/webapp--laptop.svg"
import CrmMobileImage from "../images/crm--mobile.svg"
import CrmLaptopImage from "../images/crm--laptop.svg"

const pageMetaData = {
  title: "Work - Dynamo",
  description: "Work done for Dynamo - Website, Web App, and CRM",
  URL: "https://www.aranbc.com/dynamo/",
}

const WorkHeroProps = {
  class: "section--work",
  heroTitle: "Dynamo",
  heroSubtitle: "Get Mortgage Power",
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
  title: "Creating a Website that Drives Customer Acquisition",
  text:
    "In support of its web application, Dynamo needed a marketing website whose primary purpose was to drive customer acquisition. To achieve this, the website features multiple calls-to-action inviting users to ‘Get Started’. These are supplemented by clearly outlined value propositions, and lender partner logos to convey an authoritative tone. Dynamo’s price point for the customer is also clearly refered to in the heading, in the line “No fees, no fuss.”",
}

const FirstImages = {
  class: "section--aqua",
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
  title: "A Web Application that Delivered a Seamless Mortgage Journey",
  text: [
    {
      id: 1,
      paragraph:
        "Dynamo’s ambition was to build a customer-facing digital fact find that trasitioned smoothly into an advice call with a mortgage expert. Information submitted by the customer would then be used to brief mortgage experts on a customer’s circumstances, helping them tailor the advice they gave.",
    },
    {
      id: 2,
      paragraph:
        "To deliver on this, Dynamo created a web application on the MERN stack (MongoDB, Express.js, React, Node.js), using a combination of co-located and near-shore developers.",
    },
    {
      id: 3,
      paragraph:
        "Together, we created a customer journey that was intuitive for our customers, with the ability for someone to track their application through to completion. It also synchronised instantly with our bespoke CRM system, allowing our customer support to instantly understand where someone was in their application.",
    },
  ],
}

const SecondImages = {
  class: "section--light-purple",
  mobileImage: {
    src: WebappMobileImage,
    alt: "Web App on Mobile",
  },
  laptopImage: {
    src: WebappLaptopImage,
    alt: "Web App on Laptop",
  },
}

const SecondText = {
  title: "Building a Bespoke CRM System for Mortgages",
  text: [
    {
      id: 1,
      paragraph:
        "To ensure back-office efficiency and great customer service,we created our own internal software that managed customer interactions and data throughout the customer lifecycle.",
    },
    {
      id: 2,
      paragraph:
        "Our solution was tailored specifically to the mortgage process, with user permissions, case progression, and the information architecture created to the ensure we could progress mortgage applications quickly and compliantly.",
    },
    {
      id: 3,
      paragraph:
        "Building our own CRM system also allowed us to move at speed when it came to prioritising and executing on opportunities to automate many areas of our processes. This resulted in our daily operations running more efficiently whilst ensuring our different departments where all able to benefit from the results.",
    },
  ],
}

const ThirdImages = {
  class: "section--light-yellow",
  mobileImage: {
    src: CrmMobileImage,
    alt: "CRM on Mobile",
  },
  laptopImage: {
    src: CrmLaptopImage,
    alt: "CRM on Laptop",
  },
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
          title={SecondText.title}
          id={SecondText.id}
          text={SecondText.text}
        />
        <WorkImage
          class={ThirdImages.class}
          mobileImageSrc={ThirdImages.mobileImage.src}
          mobileImageAlt={ThirdImages.mobileImage.alt}
          laptopImageSrc={ThirdImages.laptopImage.src}
          laptopImageAlt={ThirdImages.laptopImage.alt}
        />
      </Layout>
    </div>
  )
}

export default DynamoPage
