import React from "react"

const WorkHero = props => {
  return (
    <section className={props.class}>
      <div className="section__content-full-width">
        <div className="extra-padding-bottom extra-padding-top">
          <h1 className="extra-margin-bottom">{props.heroTitle}</h1>
          <h4>{props.heroSubtitle}</h4>
        </div>
        <div className="flex--reverse extra-padding-bottom extra-padding-top flex--end">
          <div className="content--extra-large">
            <h5>Context</h5>
            <p>{props.context}</p>
          </div>
          <div className="content--extra-small">
            <h5>Key Deliverables</h5>
            <p>
              {props.keyDeliverables.map(keyDeliverable => {
                return (
                  <span key={keyDeliverable.id}>
                    {keyDeliverable.text}
                    <br />
                  </span>
                )
              })}
            </p>
          </div>
        </div>
        <div className="flex extra-padding-top">
          <div className="content--extra-large">
            <h5>{props.title}</h5>
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkHero
