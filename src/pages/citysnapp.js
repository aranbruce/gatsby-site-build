import React from "react"
import Layout from "../layouts/layout"
import WorkHero from "../components/work-hero"
import WorkImage from "../components/work-image"
import WorkText from "../components/work-text"

import WebappMobileImage from "../images/citysnapp-app-1--mobile.png"
import WebappLaptopImage from "../images/citysnapp-app-1--laptop.png"
import WebsiteMobileImage from "../images/citysnapp-website--mobile.svg"
import WebsiteLaptopImage from "../images/citysnapp-website--laptop.png"

const pageMetaData = {
  title: "Work - CitySnapp",
  description:
    "Work done for CitySnapp - Native and Web Application, and Marketing Website",
  URL: "https://www.aranbc.com/citysnapp",
}

const WorkHeroProps = {
  class: "section--work-peach",
  heroTitle: "Certius",
  heroSubtitle: "Discover. Plan. Share.",
  context:
    "CitySnapp is a native and web app, designed to make activity planning easier than ever before. The app helps users discover exciting events and venues in cities around the world. Once a user finds an activity they’re interested in they can then save them to come back to later, or share them with their friends.",
  keyDeliverables: [
    {
      id: 1,
      text: "Native and Web Application",
    },
    {
      id: 2,
      text: "Marketing Website",
    },
  ],
  title: "Designing A Best-in-Class App Experience for Native and the Web",
  text:
    "Finding events and activities around you, or for an upcoming holiday, can be a drag. No matter the review site, there’s always the question of how much you can trust a strangers opinion. Wouldn’t it be great if you could see the places recommended solely by your friends and wider network? This is the idea behind CitySnapp. The app is designed to allow users to quickly find activities endorsed by people they trust. It then helps them plan what to do on which days. It’s social functionality allows users to invite their friends to join them, as well as share, review their past activities, and follow what their friends and other influencers are up to.",
}

const FirstImages = {
  class: "section--light-peach",
  mobileImage: {
    src: WebappMobileImage,
    alt: "Web App on Mobile",
  },
  laptopImage: {
    src: WebappLaptopImage,
    alt: "Web App on Laptop",
  },
}

const FirstText = {
  title: "A Marketing Site to Test Demand and Generate Leads",
  text: [
    {
      id: 1,
      paragraph:
        "Whilst the app was in build, a marketing site was created to test the value proposition of the product and analyse the most effective language to market to target consumers. The site also served as a potential lead generation source, with visitors being offered the option to sign up for early access to the app whilst it was still in build.",
    },
    {
      id: 2,
      paragraph:
        "To accomplish this, the website needed to clearly and concisely explain the purpose of the app, its key features, and how it could improve the lives of its potential users. In addition to this it's calls-to-action were all then tailored towards convincing people to sign up for early access to the app.",
    },
  ],
}

const SecondImages = {
  class: "section--light-peach",
  mobileImage: {
    src: WebsiteMobileImage,
    alt: "Website on Mobile",
  },
  laptopImage: {
    src: WebsiteLaptopImage,
    alt: "Website on Laptop",
  },
}

const CitySnappPage = () => {
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
      </Layout>
    </div>
  )
}

export default CitySnappPage
