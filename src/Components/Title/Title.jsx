import React from "react";
import style from '../Title/Title.module.css'

const Title = ({ title,subtitle }) => {
  return (
    <span className={style.title}>
      <h1>{title}</h1>
      {subtitle ? <h2>{subtitle}</h2> : null}
    </span>
  );
};

export default Title;
