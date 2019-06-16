import React from "react"

import Layout from "../layouts/layout"
import Section from "../components/section/section"
import TextImageColumnGroup from "../components/textImageColumnGroup/textImageColumnGroup"
import TileGroup from "../components/tileGroup/tileGroup"

import ContactForm from "../components/contactForm/contactForm"

import HeaderImage from "../images/header--home-image.svg"

import DynamoImage from "../images/work--dynamo.svg"
import CitySnappImage from "../images/work--citysnapp.svg"
import KoodooImage from "../images/work--koodoo.svg"
import CertiusImage from "../images/work--certius.svg"

import DataDrivenImage from "../images/data-driven.svg"
import DeliveryImage from "../images/delivery.svg"
import DevelopmentFrameworksImage from "../images/development-frameworks.svg"

import AboutMeImage from "../images/about-me.svg"

const pageMetaData = {
  title: "Aran Bruce-Caddick",
  description:
    "Crafting Stunning Digital Experiences. Specialising in developing and executing creative projects across digital mediums.",
  URL: "https://www.aranbc.com/",
}

const IndexPage = () => {
  return (
    <Layout
      pageTitle={pageMetaData.title}
      pageDescription={pageMetaData.description}
      pageURL={pageMetaData.URL}
    >
      <Section hero background="blueLarge">
        <TextImageColumnGroup
          textImageColumns={[
            {
              id: 1,
              hero: true,
              image: HeaderImage,
              imageAlt: "Building sites",
              children: (
                <div>
                  <h1>Crafting Stunning Digital Experiences</h1>
                  <h4>Aran Bruce-Caddick</h4>
                </div>
              ),
            },
          ]}
        />
      </Section>
      <Section color="grey" id="work" subtitle="Some of" title="My Work">
        <TileGroup
          tiles={[
            {
              id: 1,
              title: "Dynamo",
              link: "/dynamo",
              image: DynamoImage,
              imageAlt: "Dynamo",
            },
            {
              id: 2,
              title: "CitySnapp",
              link: "/citysnapp",
              image: CitySnappImage,
              imageAlt: "CitySnapp",
            },
            {
              id: 3,
              title: "Koodoo",
              link: "/koodoo",
              image: KoodooImage,
              imageAlt: "Koodoo",
            },
            {
              id: 4,
              title: "Certius",
              link: "/certius",
              image: CertiusImage,
              imageAlt: "Certius",
            },
          ]}
        />
      </Section>
      <Section id={"skills"} subtitle="A Summary of" title="My Skills">
        <TextImageColumnGroup
          textImageColumns={[
            {
              id: 1,
              children: (
                <div>
                  <h3>Lean Product Development</h3>
                  <p>
                    Led by lean principles, I deliver value by creating roadmaps
                    that mean products ship early and often. Working with
                    cross-functional teams, I drive customer value, test
                    hypotheses and amplifying learnings throughout the business.
                  </p>
                </div>
              ),
              image: DataDrivenImage,
              imageAlt: "Data driven",
            },
            {
              id: 2,
              reverse: true,
              children: (
                <div>
                  <h3>Agile, Data-Driven Delivery</h3>
                  <p>
                    Coupling market research skills with a foundation in
                    statistics and a passion for SMART KPIs, I use product and
                    customer data to drive feature prioritisation, and compare
                    value propositions.
                  </p>
                </div>
              ),
              image: DeliveryImage,
              imageAlt: "Agile delivery",
            },
            {
              id: 3,
              children: (
                <div>
                  <h3>Modern Development Frameworks</h3>
                  <p>
                    With a background in website and webapp development, I have
                    experience working with modern development frameworks
                    including React, Express, Node JS and Mongo DB. This is
                    complemented by a strong grounding in HTML, Pug, CSS, SASS,
                    JS, React and Git.
                  </p>
                </div>
              ),
              image: DevelopmentFrameworksImage,
              imageAlt: "Development frameworks",
            },
          ]}
        />
      </Section>
      <Section color="grey" id={"about-me"}>
        <TextImageColumnGroup
          textImageColumns={[
            {
              id: 1,
              reverse: true,
              image: AboutMeImage,
              imageAlt: "About me",
              children: (
                <div>
                  <div style={{ marginBottom: "2rem" }}>
                    <h5>A Bit</h5>
                    <h2>About Me</h2>
                  </div>
                  <p>Hello, I'm Aran</p>
                  <p>
                    I work and live in London. I specialise in{" "}
                    <strong>developing</strong> and <strong>executing</strong>{" "}
                    creative <strong>projects</strong> across{" "}
                    <strong>digital</strong> mediums. I complement a background
                    in <strong>product management</strong> with strong{" "}
                    <strong>marketing</strong>, creative, and{" "}
                    <strong>technical</strong> development skills.
                  </p>
                </div>
              ),
            },
          ]}
        />
      </Section>
      <Section
        id={"form"}
        align="center"
        subtitle="Got an Interesting Project or Idea?"
        title="Get in Touch"
      >
        <ContactForm />
      </Section>{" "}
    </Layout>
  )
}

export default IndexPage
