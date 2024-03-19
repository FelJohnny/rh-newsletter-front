import React from "react";
import styles from "./Button.module.css";
const Button = ({ buttonState, children, ...props }) => {
  return (
    <button {...props} disabled={buttonState} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
