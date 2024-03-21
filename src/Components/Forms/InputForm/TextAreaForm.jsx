import React from "react";
import style from "../InputForm/InputForm.module.css";

const TextAreaForm = ({
  name,
  label,
  type,
  value,
  onChange,
  error,
  onBlur,
}) => {
  return (
    <div className={style.wrapper}>
      <label htmlFor={name} className={style.label}>
        {label}
      </label>
      <textarea
        className={style.input}
        type={type}
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      ></textarea>
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
};

export default TextAreaForm;
