import React from "react";
import style from "../Input/Input.module.css";
import InputText from "./InputText";
import InputOptions from "./InputOptions";
import InputTextArea from "./InputTextArea";
import InputImage from "./InputImage";
import InputFile from "./InputFile";

const Input = ({ dados }) => {
  const { name, label, type } = dados;

  const RenderInput = () => {
    switch (type) {
      case "text":
        return <InputText id={name} />;
      case "select":
        return <InputOptions options={dados.options} />;
      case "textarea":
        return <InputTextArea />
      case "image":
        return <InputImage />
      case "file":
        return <InputFile />
    }
  };

  return (
    <div className={style.input}>
      <label className={style.label} htmlFor={name}>{label}</label>
      <RenderInput />
    </div>
  );
};

export default Input;
