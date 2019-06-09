import React from "react"
import DynamoImage from "../images/work--dynamo.svg"
import CitySnappImage from "../images/work--citysnapp.svg"
import KoodooImage from "../images/work--koodoo.svg"
import CertiusImage from "../images/work--certius.svg"
import WorkItem from "./work-item"

const workItems = [
  {
    id: 1,
    title: "Dynamo",
    link: "/dynamo",
    image: DynamoImage,
    imageAlt: "Dynamo",
  },
  {
    id: 2,
    title: "CitySnapp",
    link: "/citysnapp",
    image: CitySnappImage,
    imageAlt: "CitySnapp",
  },
  {
    id: 3,
    title: "Koodoo",
    link: "/koodoo",
    image: KoodooImage,
    imageAlt: "Koodoo",
  },
  {
    id: 4,
    title: "Certius",
    link: "/certius",
    image: CertiusImage,
    imageAlt: "Certius",
  },
]

const Work = () => {
  return (
    <section className="section--grey" id={"work"}>
      <div className="section__content no-padding-bottom">
        <div className="section__title">
          <h5>Some of</h5>
          <h2>My Work</h2>
        </div>
      </div>
      <div className="section__content no-padding-top flex--wrap">
        {workItems.map(workitem => {
          return (
            <WorkItem
              workitem={workitem}
              key={workitem.id}
              worktitle={workitem.title}
              worklink={workitem.link}
              workimage={workitem.image}
              workimagealt={workitem.imageAlt}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Work
