import React from "react"

import Layout from "../layouts/layout"
import HomeHero from "../components/home-hero"
import WorkSection from "../components/work"
import SkillsSection from "../components/skills"
import AboutMeSection from "../components/about-me"
import GetInTouchSection from "../components/get-in-touch"

const IndexPage = () => {
  return (
    <Layout
      pageTitle="Aran Bruce-Caddick"
      pageDescription="Crafting Stunning Digital Experiences. Specialising in developing and executing creative projects across digital mediums."
      pageURL="https://www.aranbc.com"
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
