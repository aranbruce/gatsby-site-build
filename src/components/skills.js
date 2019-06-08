import React from "react"

import DataDrivenImage from "../images/data-driven.svg"
import DeliveryImage from "../images/delivery.svg"
import DevelopmentFrameworksImage from "../images/development-frameworks.svg"

const Skills = () => {
  return (
    <section id={"skills"}>
      <div className="section__content no-padding-bottom">
        <div className="section__title">
          <h5>A Summary of</h5>
          <h2>My Skills</h2>
        </div>
      </div>
      <div className="section__content no-padding-top flex--reverse">
        <div className="content--small">
          <h3>Lean Product Development</h3>
          <p>
            Led by lean principles, I deliver value by creating roadmaps that
            mean products ship early and often. Working with cross-functional
            teams, I drive customer value, test hypotheses and amplifying
            learnings throughout the business.
          </p>
        </div>
        <div className="content--large">
          <img src={DataDrivenImage} alt="Data Driven" />
        </div>
      </div>
      <div className="section__content no-padding-top flex">
        <div className="content--large">
          <img src={DeliveryImage} alt="Agile Delivery" />
        </div>
        <div className="content--small">
          <h3>Agile, Data-Driven Delivery</h3>
          <p>
            Coupling market research skills with a foundation in statistics and
            a passion for SMART KPIs, I use product and customer data to drive
            feature prioritisation, and compare value propositions.
          </p>
        </div>
      </div>
      <div className="section__content no-padding-top flex--reverse">
        <div className="content--small">
          <h3>Modern Development Frameworks</h3>
          <p>
            With a background in website and webapp development, I have
            experience working with modern development frameworks including
            React, Express, Node JS and Mongo DB. This is complemented by a
            strong grounding in HTML, Pug, CSS, SASS, JS, React and Git.
          </p>
        </div>
        <div className="content--large">
          <img src={DevelopmentFrameworksImage} alt="Development Frameworks" />
        </div>
      </div>
    </section>
  )
}

export default Skills
