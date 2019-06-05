import React from "react"
import Layout from "../layouts/layout"
import CitySnappHero from "../components/citysnapp-hero"
import CitySnappWebappImage from "../components/citysnapp-webapp-image"
import CitySnappWebsite from "../components/citysnapp-website"
import CitySnappWebsiteImage from "../components/citysnapp-website-image"

const CitySnappPage = () => {
  return (
    <div>
      <Layout>
        <CitySnappHero />
        <CitySnappWebappImage />
        <CitySnappWebsite />
        <CitySnappWebsiteImage />
      </Layout>
    </div>
  )
}

export default CitySnappPage
