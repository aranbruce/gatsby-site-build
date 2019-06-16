import React from "react"

import Layout from "../layouts/layout"
import Section from "../components/section/section"
import TextImageColumn from "../components/textImageColumn/textImageColumn"
import ContactForm from "../components/contactForm/contactForm"

import HeaderImage from "../images/header--home-image.svg"

import DynamoImage from "../images/work--dynamo.svg"
import CitySnappImage from "../images/work--citysnapp.svg"
import KoodooImage from "../images/work--koodoo.svg"
import CertiusImage from "../images/work--certius.svg"
import Tile from "../components/tile/tile"

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

const tiles = [
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
]

const IndexPage = () => {
  return (
    <Layout
      pageTitle={pageMetaData.title}
      pageDescription={pageMetaData.description}
      pageURL={pageMetaData.URL}
    >
      <Section hero background="blueLarge">
        <TextImageColumn hero image={HeaderImage} imageAlt="Building sites">
          <h1 className="extra-margin-bottom">
            Crafting Stunning Digital Experiences
          </h1>
          <h4>Aran Bruce-Caddick</h4>
        </TextImageColumn>
      </Section>
      <Section color="grey" id="work" subtitle="Some of" title="My Work">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {tiles.map(tile => {
            return (
              <Tile
                tile={tile}
                key={tile.id}
                title={tile.title}
                link={tile.link}
                image={tile.image}
                imagealt={tile.imageAlt}
              />
            )
          })}
        </div>
      </Section>
      <Section id={"skills"} subtitle="A Summary of" title="My Skills">
        <TextImageColumn image={DataDrivenImage} imageAlt={"Data driven"}>
          <h3>Lean Product Development</h3>
          <p>
            Led by lean principles, I deliver value by creating roadmaps that
            mean products ship early and often. Working with cross-functional
            teams, I drive customer value, test hypotheses and amplifying
            learnings throughout the business.
          </p>
        </TextImageColumn>
        <TextImageColumn
          reverse
          image={DeliveryImage}
          imageAlt={"Agile delivery"}
        >
          <h3>Agile, Data-Driven Delivery</h3>
          <p>
            Coupling market research skills with a foundation in statistics and
            a passion for SMART KPIs, I use product and customer data to drive
            feature prioritisation, and compare value propositions.
          </p>
        </TextImageColumn>
        <TextImageColumn
          image={DevelopmentFrameworksImage}
          imageAlt={"Development frameworks"}
        >
          <h3>Modern Development Frameworks</h3>
          <p>
            With a background in website and webapp development, I have
            experience working with modern development frameworks including
            React, Express, Node JS and Mongo DB. This is complemented by a
            strong grounding in HTML, Pug, CSS, SASS, JS, React and Git.
          </p>
        </TextImageColumn>
      </Section>
      <Section color="grey" id={"about-me"}>
        <TextImageColumn reverse image={AboutMeImage} imageAlt={"About me"}>
          <div style={{ marginBottom: "2rem" }}>
            <h5>A Bit</h5>
            <h2>About Me</h2>
          </div>
          <p>Hello, I'm Aran</p>
          <p>
            I work and live in London. I specialise in{" "}
            <strong>developing</strong> and <strong>executing</strong> creative{" "}
            <strong>projects</strong> across <strong>digital</strong> mediums. I
            complement a background in <strong>product management</strong> with
            strong <strong>marketing</strong>, creative, and{" "}
            <strong>technical</strong> development skills.
          </p>
        </TextImageColumn>
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
