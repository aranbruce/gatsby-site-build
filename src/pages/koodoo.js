import React from "react"

import Layout from "../layouts/layout"
import KoodooHero from "../components/koodoo-hero"
import KoodooWebsiteImage from "../components/koodoo-website-image"
import KoodooApi from "../components/koodoo-api"

const KoodooPage = () => {
  return (
    <Layout>
      <KoodooHero />
      <KoodooWebsiteImage />
      <KoodooApi />
    </Layout>
  )
}

export default KoodooPage
