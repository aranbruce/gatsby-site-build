import React from "react"

import Layout from "../layouts/layout"
import KoodooHero from "../components/koodoo-hero"
import KoodooWebsiteImage from "../components/koodoo-website-image"
import KoodooApi from "../components/koodoo-api"

const KoodooPage = () => {
  return (
    <Layout
      pageTitle="Work | Koodoo"
      pageDescription="Work done for Koodoo - Website, API Suite."
      pageURL="https://www.aranbc.com/koodoo"
    >
      <KoodooHero />
      <KoodooWebsiteImage />
      <KoodooApi />
    </Layout>
  )
}

export default KoodooPage
