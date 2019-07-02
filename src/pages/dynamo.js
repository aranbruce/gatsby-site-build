import React from "react"
import Layout from "../layouts/layout"
import Section from "../components/section/section"
import TextColumn from "../components/textColumn/textColumn"
import WorkImage from "../components/workImage/workImage"

import WebsiteMobileImage from "../images/website--mobile.svg"
import WebsiteLaptopImage from "../images/website--laptop.svg"
import WebappMobileImage from "../images/webapp--mobile.svg"
import WebappLaptopImage from "../images/webapp--laptop.svg"
import CrmMobileImage from "../images/crm--mobile.svg"
import CrmLaptopImage from "../images/crm--laptop.svg"

const pageMetaData = {
  title: "Work - Dynamo",
  description: "Work done for Dynamo - Website, Web App, and CRM",
  URL: "https://www.aranbc.com/dynamo/",
}

const DynamoPage = () => {
  return (
    <div>
      <Layout
        pageTitle={pageMetaData.title}
        pageDescription={pageMetaData.description}
        pageURL={pageMetaData.URL}
      >
        <Section hero background="blueSmall">
          <TextColumn
            title="Dynamo"
            subtitle="Get Mortgage Power"
            sideTextTitle="Key Deliverables"
            sideText={
              <p>
                Marketing Website <br /> Web Application
                <br /> Internal CRM Application
              </p>
            }
          >
            <h5>Context</h5>
            <p>
              Developed in partnership with Blenheim Chalcot (the UK’s leading
              venture builder) and Countrywide (the UK’s largest mortgage
              broker), Dynamo is a brand new way to sort your mortgage
              digitally. With the firmly held belief that everyone deserves to
              get the best deal on their mortgage, Dynamo is on a mission to
              help people get expert mortgage advice, for free.
            </p>
          </TextColumn>
          <TextColumn>
            <h5>Creating a Website that Drives Customer Acquisition</h5>
            <p>
              In support of its web application, Dynamo needed a marketing
              website whose primary purpose was to drive customer acquisition.
              To achieve this, the website features multiple calls-to-action
              inviting users to ‘Get Started’. These are supplemented by clearly
              outlined value propositions, and lender partner logos to convey an
              authoritative tone. Dynamo’s price point for the customer is also
              clearly refered to in the heading, in the line “No fees, no fuss.”
            </p>
          </TextColumn>
        </Section>
        <WorkImage
          backgroundColor="aqua"
          mobileImageSrc={WebsiteMobileImage}
          mobileImageAlt={"Website on Mobile"}
          laptopImageSrc={WebsiteLaptopImage}
          laptopImageAlt={"Website on Laptop"}
        />
        <Section>
          <TextColumn>
            <h5>
              A Web Application that Delivered a Seamless Mortgage Journey
            </h5>
            <p>
              Dynamo’s ambition was to build a customer-facing digital fact-find
              that transitioned smoothly into an advice call with a mortgage
              expert. Information submitted by the customer would then be used
              to brief mortgage experts on a customer’s circumstances, helping
              them tailor the advice they gave.
            </p>
            <p>
              To deliver on this, Dynamo created a web application on the MERN
              stack (MongoDB, Express.js, React, Node.js), using a combination
              of co-located and near-shore developers.
            </p>
            <p>
              Together, we created a customer journey that was intuitive for our
              customers, with the ability for someone to track their application
              through to completion. It also synchronised instantly with our
              bespoke CRM system, allowing our customer support to instantly
              understand where someone was in their application.
            </p>
          </TextColumn>
        </Section>
        <WorkImage
          backgroundColor="purple"
          mobileImageSrc={WebappMobileImage}
          mobileImageAlt={"Webapp on Mobile"}
          laptopImageSrc={WebappLaptopImage}
          laptopImageAlt={"Webapp on Laptop"}
        />
        <Section>
          <TextColumn>
            <h5>Building a Bespoke CRM System for Mortgages</h5>
            <p>
              To ensure back-office efficiency and great customer service, we
              created our own internal software that managed customer
              interactions and data throughout the customer lifecycle.
            </p>
            <p>
              Our solution was tailored specifically to the mortgage process,
              with user permissions, case progression, and the information
              architecture created to ensure we could progress mortgage
              applications quickly and compliantly.
            </p>
            <p>
              Building our own CRM system also allowed us to move at speed when
              it came to prioritising and executing on opportunities to automate
              many areas of our processes. This resulted in our daily operations
              running more efficiently whilst ensuring our different departments
              were all able to benefit from the results.
            </p>
          </TextColumn>
        </Section>
        <WorkImage
          backgroundColor="yellow"
          mobileImageSrc={CrmMobileImage}
          mobileImageAlt={"CRM on Mobile"}
          laptopImageSrc={CrmLaptopImage}
          laptopImageAlt={"CRM on Laptop"}
        />
      </Layout>
    </div>
  )
}

export default DynamoPage
