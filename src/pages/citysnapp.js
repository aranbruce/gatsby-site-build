import React from "react"
import Layout from "../layouts/layout"
import WorkHero from "../components/work-hero"
import CitySnappWebappImage from "../components/citysnapp-webapp-image"
import CitySnappWebsite from "../components/citysnapp-website"
import CitySnappWebsiteImage from "../components/citysnapp-website-image"

const pageMetaData = {
  title: "Work - CitySnapp",
  description:
    "Work done for CitySnapp - Native and Web Application, and Marketing Website",
  URL: "https://www.aranbc.com/citysnapp",
}

const sectionStyle = {
  class: "section--work-peach",
}

const WorkHeroText = {
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
  firstWorkTitle:
    "Designing A Best-in-Class App Experience for Native and the Web",
  firstWorkText:
    "Finding events and activities around you, or for an upcoming holiday, can be a drag. No matter the review site, there’s always the question of how much you can trust a strangers opinion. Wouldn’t it be great if you could see the places recommended solely by your friends and wider network? This is the idea behind CitySnapp. The app is designed to allow users to quickly find activities endorsed by people they trust. It then helps them plan what to do on which days. It’s social functionality allows users to invite their friends to join them, as well as share, review their past activities, and follow what their friends and other influencers are up to.",
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
          sectionStyle={sectionStyle.class}
          heroTitle={WorkHeroText.heroTitle}
          heroSubtitle={WorkHeroText.heroSubtitle}
          context={WorkHeroText.context}
          keyDeliverables={WorkHeroText.keyDeliverables}
          firstWorkTitle={WorkHeroText.firstWorkTitle}
          firstWorkText={WorkHeroText.firstWorkText}
        />
        <CitySnappWebappImage />
        <CitySnappWebsite />
        <CitySnappWebsiteImage />
      </Layout>
    </div>
  )
}

export default CitySnappPage
