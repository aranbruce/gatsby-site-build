import React from "react"

import Layout from "../layouts/layout"
import HomeHero from "../components/home-hero"
import WorkSection from "../components/work"
import SkillsSection from "../components/skills"
import AboutMeSection from "../components/about-me"
import GetInTouchSection from "../components/get-in-touch"

const pageMetaData = {
  title: "Aran Bruce-Caddick",
  description:
    "Crafting Stunning Digital Experiences. Specialising in developing and executing creative projects across digital mediums.",
  URL: "https://www.aranbc.com",
}

const IndexPage = () => {
  return (
    <Layout
      pageTitle={pageMetaData.title}
      pageDescription={pageMetaData.description}
      pageURL={pageMetaData.URL}
    >
      <HomeHero />
      <WorkSection />
      <SkillsSection />
      <AboutMeSection />
      <GetInTouchSection />
    </Layout>
  )
}

export default IndexPage
