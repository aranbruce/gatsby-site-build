import React from "react"
import { Link } from "gatsby"

const WorkItem = props => {
  return (
    <div className="work-item">
      <Link to={props.worklink}>
        <img src={props.workimage} alt={props.workimagealt} />
        <h3>{props.worktitle}</h3>
        <h5>View Project</h5>
      </Link>
    </div>
  )
}

export default WorkItem
