import React from "react"
import Button from "../../components/button/button"

import styles from "./error.module.sass"

import ErrorMobileImage from "./404-image--mobile.svg"
import ErrorLaptopImage from "./404-image--laptop.svg"

const Error = () => {
  return (
    <div>
      <h1>Error</h1>
      <h4>Looks like something went wrong, how embarrasing</h4>
      <img className={styles.errorMobile} src={ErrorMobileImage} alt="404" />
      <img className={styles.errorLaptop} src={ErrorLaptopImage} alt="404" />
      <Button buttonType="primary" link="/">
        Back to Safety
      </Button>
    </div>
  )
}

export default Error
