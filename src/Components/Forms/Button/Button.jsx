import React from 'react'
import styles from './Button.module.css'
const Button = (props) => {
  return (
    <button {...props} disabled={props.activeButton} className={styles.button}>
      {props.children}
    </button >
  )
}

export default Button
