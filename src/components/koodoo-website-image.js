import React from "react"

import WebsiteMobileImage from "../images/koodoo-website--mobile.svg"
import WebsiteLaptopImage from "../images/koodoo-website--laptop.svg"

const KoodooWebsiteImage = () => {
  return (
    <section className="section--light-purple">
      <div className="section__content no-padding-bottom no-padding-top">
        <div className="project-image--mobile">
          <img src={WebsiteMobileImage} alt="CRM on Mobile" />
        </div>
        <div className="project-image--laptop">
          <img src={WebsiteLaptopImage} alt="CRM on Laptop" />
        </div>
      </div>
    </section>
  )
}

export default KoodooWebsiteImage
