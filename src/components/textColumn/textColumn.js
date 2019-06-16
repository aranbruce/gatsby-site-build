import React from "react"

import styles from "./textColumn.module.sass"

const TextColumn = ({ title, subtitle, children, sideTextTitle, sideText }) => {
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <h4 className={styles.subtitle}>{subtitle}</h4>
      <div className={styles.wrapper}>
        <div className={styles.main}>{children}</div>
        {sideText || sideTextTitle ? (
          <div className={styles.side}>
            <h5>{sideTextTitle}</h5>
            <div>{sideText}</div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default TextColumn
