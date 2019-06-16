import React from "react"

import Tile from "../../components/tile/tile"

import styles from "./tileGroup.module.sass"

const TileGroup = ({ tiles }) => {
  return (
    <div className={styles.container}>
      {tiles.map(tile => {
        return (
          <Tile
            tile={tile}
            key={tile.id}
            title={tile.title}
            link={tile.link}
            image={tile.image}
            imagealt={tile.imageAlt}
          />
        )
      })}
    </div>
  )
}

export default TileGroup
