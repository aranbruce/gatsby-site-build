import React from "react"
import Layout from "../layouts/layout"
import CertiusHero from "../components/certius-hero"
import CertiusAudiencesImage from "../components/certius-audiences-image"
import CertiusSiteStructure from "../components/certius-site-structure"
import CertiusSiteStructureImage from "../components/certius-site-structure-image"
import CertiusWebsite from "../components/certius-website"
import CertiusWebsiteImage from "../components/certius-website-image"

const CeritusPage = () => {
  return (
    <Layout>
      <CertiusHero />
      <CertiusAudiencesImage />
      <CertiusSiteStructure />
      <CertiusSiteStructureImage />
      <CertiusWebsite />
      <CertiusWebsiteImage />
    </Layout>
  )
}

export default CeritusPage
