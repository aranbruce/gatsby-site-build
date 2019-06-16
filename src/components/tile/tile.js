import React from "react"
import { Link } from "gatsby"

import styles from "./tile.module.sass"

const Tile = ({ link, image, imagealt, title }) => {
  return (
    <div className={styles.workTile}>
      <Link to={link}>
        <img src={image} alt={imagealt} />
        <h3>{title}</h3>
        <h5>View Project</h5>
      </Link>
    </div>
  )
}

export default Tile
