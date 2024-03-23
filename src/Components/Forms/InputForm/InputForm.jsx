import React from "react";
import style from "./InputForm.module.css";

const InputForm = ({
  name,
  label,
  type,
  value,
  onChange,
  error,
  onBlur,
  setAnexoFile,
}) => {
  function handleChange(event) {
    if (type === "file") {
      const selectFile = event.target.files[0];
      setAnexoFile(selectFile);
    }
    onChange(event);
  }

  return (
    <div className={style.wrapper}>
      <label htmlFor={name} className={style.label}>
        {label}
      </label>
      <input
        className={style.input}
        type={type}
        id={name}
        name={name}
        onChange={handleChange}
        value={value}
        onBlur={onBlur}
      />
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
};

export default InputForm;
