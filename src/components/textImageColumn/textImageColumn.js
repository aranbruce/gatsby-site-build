import React from "react"

import styles from "./textImageColumn.module.sass"

const TextImageColumn = ({ hero, reverse, children, image, imageAlt }) => {
  return (
    <div
      className={!hero ? styles.textImageColumn : styles.textImageColumnHero}
      style={!reverse ? { flexWrap: "reverseWrap" } : { flexWrap: "wrap" }}
    >
      <div
        className={styles.text}
        style={!reverse ? { order: 1 } : { order: 2 }}
      >
        {children}
      </div>
      <div
        className={styles.image}
        style={!reverse ? { order: 2 } : { order: 1 }}
      >
        <img src={image} alt={imageAlt} />
      </div>
    </div>
  )
}

export default TextImageColumn
