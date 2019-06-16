import React from "react"

import styles from "./workImage.module.sass"

const WorkImage = ({
  backgroundColor,
  mobileImageSrc,
  mobileImageAlt,
  laptopImageSrc,
  laptopImageAlt,
}) => {
  return (
    <section
      className={
        backgroundColor === "aqua"
          ? styles.aqua
          : backgroundColor === "blue"
          ? styles.blue
          : backgroundColor === "peach"
          ? styles.peach
          : backgroundColor === "purple"
          ? styles.purple
          : backgroundColor === "yellow"
          ? styles.yellow
          : ""
      }
    >
      <div className={styles.imageMobile}>
        <img src={mobileImageSrc} alt={mobileImageAlt} />
      </div>
      <div className={styles.imageLaptop}>
        <img src={laptopImageSrc} alt={laptopImageAlt} />
      </div>
    </section>
  )
}

export default WorkImage
