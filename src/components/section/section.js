import React from "react"

import styles from "./section.module.sass"

const Section = ({
  hero,
  background,
  align,
  color,
  id,
  children,
  subtitle,
  title,
}) => {
  return (
    <section
      className={
        hero
          ? background === "blueLarge"
            ? styles.sectionHeroBlueLarge
            : background === "blueSmall"
            ? styles.sectionHeroBlueSmall
            : styles.sectionHero
          : color === "grey"
          ? styles.sectionGrey
          : color === "greyGradient"
          ? styles.sectionGreyGradient
          : styles.section
      }
      id={id}
    >
      <div
        className={
          align === "center"
            ? styles.sectionContentCenter
            : styles.sectionContent
        }
      >
        {subtitle ? <h5>{subtitle}</h5> : ""}
        {title ? <h2 className={styles.title}>{title}</h2> : ""}
        {children}
      </div>
    </section>
  )
}

export default Section
