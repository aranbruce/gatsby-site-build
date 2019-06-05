import React from "react"

import SiteStructureMobileImage from "../images/certius-sitemap--mobile.svg"
import SiteStructureLaptopImage from "../images/certius-sitemap--laptop.svg"

const CertiusSiteStructureImage = () => {
  return (
    <section className="section--light-blue">
      <div className="section__content no-padding-bottom no-padding-top">
        <div className="project-image--mobile">
          <img src={SiteStructureMobileImage} alt="Site Structure on Mobile" />
        </div>
        <div className="project-image--laptop">
          <img src={SiteStructureLaptopImage} alt="Site Structure on Laptop" />
        </div>
      </div>
    </section>
  )
}

export default CertiusSiteStructureImage
