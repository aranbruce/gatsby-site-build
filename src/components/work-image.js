import React from "react"

const WorkImage = props => {
  return (
    <section className={props.class}>
      <div className="section__content no-padding-bottom no-padding-top">
        <div className="project-image--mobile">
          <img src={props.mobileImageSrc} alt={props.mobileImageAlt} />
        </div>
        <div className="project-image--laptop">
          <img src={props.laptopImageSrc} alt={props.laptopImageAlt} />
        </div>
      </div>
    </section>
  )
}

export default WorkImage
