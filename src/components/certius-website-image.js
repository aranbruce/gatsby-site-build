import React from "react"

import WebsiteMobileImage from "../images/certius-website--mobile.png"
import WebsiteLaptopImage from "../images/certius-website--laptop.png"

const CertiusWebsiteImage = () => {
  return (
    <section className="section--light-blue">
      <div className="section__content no-padding-bottom no-padding-top">
        <div className="project-image--mobile">
          <img src={WebsiteMobileImage} alt="Website on Mobile" />
        </div>
        <div className="project-image--laptop">
          <img src={WebsiteLaptopImage} alt="Website on Laptop" />
        </div>
      </div>
    </section>
  )
}

export default CertiusWebsiteImage
