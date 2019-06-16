import React from "react"
import Layout from "../layouts/layout"
import Section from "../components/section/section"
import TextColumn from "../components/textColumn/textColumn"
import WorkImage from "../components/workImage/workImage"

import WebsiteMobileImage from "../images/koodoo-website--mobile.svg"
import WebsiteLaptopImage from "../images/koodoo-website--laptop.svg"

const pageMetaData = {
  title: "Work - Koodoo",
  description: "Work done for Koodoo - Website, API Suite",
  URL: "https://www.aranbc.com/koodoo/",
}

const KoodooPage = () => {
  return (
    <Layout
      pageTitle={pageMetaData.title}
      pageDescription={pageMetaData.description}
      pageURL={pageMetaData.URL}
    >
      <Section hero background="blueSmall">
        <TextColumn
          title="Koodoo"
          subtitle="Powering the future of mortgages"
          sideTextTitle="Key Deliverables"
          sideText={
            <p>
              Marketing Website <br /> API Suite
            </p>
          }
        >
          <h5>Context</h5>
          <p>
            Koodoo’s goal is to create a world where securing home financing is
            seamless and transparent. They partner with industry leaders to
            unlock the potential of mortgages, harness personal data, and
            connect borrowers with their next mortgage. Building technology to
            power mortgage journeys for their partners, Koodoo helps them
            acquire and activate leads, segment and engage their customers, and
            streamline mortgage applications.
          </p>
        </TextColumn>
        <TextColumn>
          <h5>A Marketing Site that Showcases Koodoo’s Offering</h5>
          <p>
            With the launch of the business, Koodoo needed a marketing website
            to help position them as a leading authority in the mortgage
            technology space. The website needed to clearly outline the pain
            points the business addresses for its customers, as well as explain
            its various solutions. In addition to conveying an authoritative
            tone, it was essential that the website present Koodoo as a software
            solution that is easy to integrate with, as well as an attractive
            place to work for potential new talent.
          </p>
        </TextColumn>
      </Section>
      <WorkImage
        backgroundColor="purple"
        mobileImageSrc={WebsiteMobileImage}
        mobileImageAlt={"Website on Mobile"}
        laptopImageSrc={WebsiteLaptopImage}
        laptopImageAlt={"Website on Laptop"}
      />
      <Section>
        <TextColumn>
          <h5>An Elegant API Suite to Deliver Seemless Mortgage Journeys</h5>
          <p>
            Working with our customers, Koodoo created a suite of APIs which
            provide developers with the tools they need to create easy and
            accessible experiences for their users. Koodoo’s APIs are able to
            interrogate users’ credit files, and use the data they identify to
            suggest mortgage products.
          </p>
          <p>
            Koodoo’s API-first services also monitor the mortgage market each
            day, and notify our partners when their users can save by
            remortgaging. We then send mortgage product data to our partners,
            enabling them to deliver highly personalised email campaigns to
            their users.
          </p>
        </TextColumn>
      </Section>
    </Layout>
  )
}

export default KoodooPage
