import React from "react"
import { Link } from "@reach/router"

import styles from "./button.module.sass"

const Button = ({ link, className, type, buttonType, children, form }) => {
  return !form ? (
    <Link to={link} className={className}>
      <button
        className={
          buttonType === "primary"
            ? styles.buttonPrimary
            : styles.buttonSecondary
        }
        type={type}
      >
        {children}
      </button>
    </Link>
  ) : (
    <button
      className={
        buttonType === "primary" ? styles.buttonPrimary : styles.buttonSecondary
      }
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
