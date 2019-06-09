import React from "react"
import ContactForm from "./contact-form"

const GetInTouchSection = () => {
  return (
    <section id={"form"}>
      <div className="section__content">
        <div className="section__title centre-text">
          <h5>Got an Interesting Project or Idea?</h5>
          <h2>Get in Touch</h2>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}

export default GetInTouchSection
