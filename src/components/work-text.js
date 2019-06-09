import React from "react"

const WorkText = props => {
  return (
    <section>
      <div className="section__content">
        <div className="content--extra-large">
          <h5>{props.title}</h5>
          {props.text.map(paraphraph => {
            return <p key={paraphraph.id}>{paraphraph.paragraph}</p>
          })}
        </div>
      </div>
    </section>
  )
}

export default WorkText
