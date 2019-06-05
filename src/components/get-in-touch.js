import React from "react"

const GetInTouchSection = () => {
  return (
    <section id={"form"}>
      <div className="section__content">
        <div className="section__title centre-text">
          <h5>Got an Interesting Project or Idea?</h5>
          <h2>Get in Touch</h2>
        </div>
        <form id={"enquiryForm"}>
          <div className="form__wrapper">
            <input
              type="text"
              name="NAME"
              aria-label="Name"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="EMAIL"
              aria-label="Email"
              placeholder="Email"
              required
            />
            <input
              type="text"
              name="SUBJECT"
              aria-label="Subject"
              placeholder="Subject"
              required
            />
            <textarea
              name="MESSAGE"
              placeholder="Message"
              aria-label="Message"
              required
            />
            <button
              className="button--primary"
              id={"formButton"}
              type="submit"
              value="Send"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default GetInTouchSection
