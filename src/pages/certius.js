import React from "react"
import Layout from "../layouts/layout"
import Section from "../components/section/section"
import TextColumn from "../components/textColumn/textColumn"
import WorkImage from "../components/workImage/workImage"

import AudiencesMobileImage from "../images/certius-audiences--mobile.svg"
import AudiencesLaptopImage from "../images/certius-audiences--laptop.svg"
import SiteStructureMobileImage from "../images/certius-sitemap--mobile.svg"
import SiteStructureLaptopImage from "../images/certius-sitemap--laptop.svg"
import WebsiteMobileImage from "../images/certius-website--mobile.png"
import WebsiteLaptopImage from "../images/certius-website--laptop.png"

const pageMetaData = {
  title: "Work - Certius",
  description:
    "Work done for Certius - Market Research, Competitor Analysis, and Website Design",
  URL: "https://www.aranbc.com/certius/",
}

const CeritusPage = () => {
  return (
    <Layout
      pageTitle={pageMetaData.title}
      pageDescription={pageMetaData.description}
      pageURL={pageMetaData.URL}
    >
      <Section hero background="blueSmall">
        <TextColumn
          title="Certius"
          subtitle="Helping your business unlock the potential of Iran"
          sideTextTitle="Key Deliverables"
          sideText={
            <p>
              Market Research <br /> Competitor Analysis
              <br /> Website Design
            </p>
          }
        >
          <h5>Context</h5>
          <p>
            Working with international and Iranian companies, Certius provide
            the services needed to assess the market opportunity in Iran.
            Whether a business is looking to enter the market, or develop their
            capabilities into a growing, sustainable operation, Cerius are able
            to leverage their vast network across Iran’s business community and
            public administration to help companies thrive.
          </p>
        </TextColumn>
        <TextColumn>
          <h5>Identifying Certius’ Key Audiences</h5>
          <p>
            By conducting market research and reviewing Certius’ current
            business model, it became clear that the company had two distinct
            audience segments: Iranian businesses looking to improve their
            market access and international businesses looking to enter or grow
            their presents in the Iranian market. Both of these could then be
            further broken down by their objective when interacting with
            Certius. Firstly, senior managers and executives looking to assess
            the credibility of Certius as a key business partner as well as
            understand its authority within the Iranian market and secondly
            C-suite employees looking to determine the feasibility of exploiting
            Iran as an under-utilised market.
          </p>
        </TextColumn>
      </Section>
      <WorkImage
        backgroundColor="blue"
        mobileImageSrc={AudiencesMobileImage}
        mobileImageAlt={"Audiences on Mobile"}
        laptopImageSrc={AudiencesLaptopImage}
        laptopImageAlt={"Audiences on Laptop"}
      />
      <Section>
        <TextColumn>
          <h5>
            Understanding Audience Objectives to inform the New Website
            Structure
          </h5>
          <p>
            With Certius looking to extend its services it offered, increase its
            digital presence and improve its lead generation, the decision was
            taken to relaunch the website based upon defined audience segments
            and key business objectives.
          </p>
          <p>
            Through workshops with Certius and a thorough analysis of similar
            and competing businesses, both in Iran and abroad, primary
            objectives were established for each of the key audience segments.
            This then informed the information architecture, user flow and page
            structure that the new site would need to follow.
          </p>
        </TextColumn>
      </Section>
      <WorkImage
        backgroundColor="blue"
        mobileImageSrc={SiteStructureMobileImage}
        mobileImageAlt={"Site Structure on Mobile"}
        laptopImageSrc={SiteStructureLaptopImage}
        laptopImageAlt={"Site Structure on Laptop"}
      />
      <Section>
        <TextColumn>
          <h5>
            Designing a Site that Exuded Authority and Generated Inbound Leads
          </h5>
          <p>
            Using the proposed page strucutre, the website was wireframed and
            then designed incorporating key commonalities identified during the
            competitor analysis. This included aspects such as a prominent
            company descriptor, engaging visual elements, minimalistic design,
            showcasing of previous work or case studies, and enquiry forms
            displayed on multiple pages.
          </p>
          <p>
            The final design incorporates abstract shapes contained within the
            logo, whilst using imagery of Iran to convey the companies expertise
            and experience within the country. Key calls-to-action where placed
            throughout each page, inviting users to view Certius’
            accomplishments and previous work, before making inbound enquires.
          </p>
        </TextColumn>
      </Section>
      <WorkImage
        backgroundColor="blue"
        mobileImageSrc={WebsiteMobileImage}
        mobileImageAlt={"Website on Mobile"}
        laptopImageSrc={WebsiteLaptopImage}
        laptopImageAlt={"Website on Laptop"}
      />
    </Layout>
  )
}

export default CeritusPage
