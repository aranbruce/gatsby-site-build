import React, { Component } from "react"

class ContactForm extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      sending: false,
    }
  }

  toggleSending(submit) {
    this.setState({ sending: !this.state.sending })
  }

  handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.target)
    this.toggleSending()
    fetch(
      "https://script.google.com/macros/s/AKfycbwcGSl46eEqo95KJ5_PpeVrFzLurzwG8IzI5VuQmIhmHzU7gyI/exec",
      {
        method: "POST",
        body: data,
      }
    )
      .then(response => console.log("Success!", response))
      .catch(error => console.error("Error!", error.message))
      .then(function thankYouRedirect(response) {
        if ((response = true)) {
          window.location.href = "/thank-you"
          console.log("yep")
        }
      })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
            disabled={this.state.sending}
            id={"formButton"}
            type="submit"
            value="Send"
            // onClick={submit => this.toggleSending(submit)}
          >
            {!this.state.sending ? "Send" : "Sending"}
          </button>
        </div>
      </form>
    )
  }
}

export default ContactForm
