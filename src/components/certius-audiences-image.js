import React from "react"

import AudiencesMobileImage from "../images/certius-audiences--mobile.svg"
import AudiencesLaptopImage from "../images/certius-audiences--laptop.svg"

const CertiusAudiencesImage = () => {
  return (
    <section className="section--light-blue">
      <div className="section__content no-padding-bottom no-padding-top">
        <div className="project-image--mobile">
          <img src={AudiencesMobileImage} alt="Audiences on Mobile" />
        </div>
        <div className="project-image--laptop">
          <img src={AudiencesLaptopImage} alt="Audiences on Laptop" />
        </div>
      </div>
    </section>
  )
}

export default CertiusAudiencesImage
