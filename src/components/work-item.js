import React from "react"
import { Link } from "gatsby"
// import DynamoImage from "../images/work--dynamo.svg"
// import CitySnappImage from "../images/work--citysnapp.svg"
// import KoodooImage from "../images/work--koodoo.svg"
// import CertiusImage from "../images/work--certius.svg"

const WorkItem = props => {
  return (
    <div
      className="work-item"
      worktitle={props.worktitle}
      worklink={props.worklink}
      workimage={props.workimage}
    >
      <Link to={props.worklink}>
        <img src={props.workimage} alt="Koodoo" />
        <h3>{props.worktitle}</h3>
        <h5>View Project</h5>
      </Link>
    </div>
  )
}

export default WorkItem
