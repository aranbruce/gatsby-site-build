import React from "react"
import Layout from "../layouts/layout"
import Section from "../components/section/section"
import TextColumn from "../components/textColumn/textColumn"
import WorkImage from "../components/workImage/workImage"

import WebappMobileImage from "../images/citysnapp-app-1--mobile.png"
import WebappLaptopImage from "../images/citysnapp-app-1--laptop.png"
import WebsiteMobileImage from "../images/citysnapp-website--mobile.svg"
import WebsiteLaptopImage from "../images/citysnapp-website--laptop.png"

const pageMetaData = {
  title: "Work - CitySnapp",
  description:
    "Work done for CitySnapp - Native and Web Application, and Marketing Website",
  URL: "https://www.aranbc.com/citysnapp/",
}

const CitySnappPage = () => {
  return (
    <div>
      <Layout
        pageTitle={pageMetaData.title}
        pageDescription={pageMetaData.description}
        pageURL={pageMetaData.URL}
      >
        <Section hero background="blueSmall">
          <TextColumn
            title="CitySnapp"
            subtitle="Discover. Plan. Share."
            sideTextTitle="Key Deliverables"
            sideText={
              <p>
                Native and Web Application
                <br /> Marketing Website
              </p>
            }
          >
            <h5>Context</h5>
            <p>
              CitySnapp is a native and web app, designed to make activity
              planning easier than ever before. The app helps users discover
              exciting events and venues in cities around the world. Once a user
              finds an activity they’re interested in they can then save them to
              come back to later, or share them with their friends.
            </p>
          </TextColumn>
          <TextColumn>
            <h5>
              Designing A Best-in-Class App Experience for Native and the Web
            </h5>
            <p>
              Finding events and activities around you, or for an upcoming
              holiday, can be a drag. No matter the review site, there’s always
              the question of how much you can trust a strangers opinion.
              Wouldn’t it be great if you could see the places recommended
              solely by your friends and wider network? This is the idea behind
              CitySnapp.
            </p>
            <p>
              The app is designed to allow users to quickly find activities
              endorsed by people they trust. It then helps them plan what to do
              on which days. It’s social functionality allows users to invite
              their friends to join them, as well as share, review their past
              activities, and follow what their friends and other influencers
              are up to.
            </p>
          </TextColumn>
        </Section>
        <WorkImage
          backgroundColor="peach"
          mobileImageSrc={WebappMobileImage}
          mobileImageAlt={"Webapp on Mobile"}
          laptopImageSrc={WebappLaptopImage}
          laptopImageAlt={"Webapp on Laptop"}
        />
        <Section>
          <TextColumn>
            <h5>A Marketing Site to Test Demand and Generate Leads</h5>
            <p>
              Whilst the app was in build, a marketing site was created to test
              the value proposition of the product and analyse the most
              effective language to market to target consumers. The site also
              served as a potential lead generation source, with visitors being
              offered the option to sign up for early access to the app whilst
              it was still in build.
            </p>
            <p>
              To accomplish this, the website needed to clearly and concisely
              explain the purpose of the app, its key features, and how it could
              improve the lives of its potential users. In addition to this it's
              calls-to-action were all then tailored towards convincing people
              to sign up for early access to the app.
            </p>
          </TextColumn>
        </Section>
        <WorkImage
          backgroundColor="peach"
          mobileImageSrc={WebsiteMobileImage}
          mobileImageAlt={"Website on Mobile"}
          laptopImageSrc={WebsiteLaptopImage}
          laptopImageAlt={"Website on Laptop"}
        />
      </Layout>
    </div>
  )
}

export default CitySnappPage
