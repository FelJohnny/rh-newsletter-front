import React, { useState } from "react";
import style from "../InputForm/InputForm.module.css";
import plus from "../../../images/plus.svg";

const ImagemForm = ({ label, name }) => {
  const [image, setImage] = useState(null);

  function handleChange(event) {
    const selectImage = event.target.files[0];

    if (selectImage) {
      const reader = new FileReader();

      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selectImage);
    }
  }

  return (
    <div className={style.wrapper}>
      <label htmlFor={name} className={style.label}>
        {label}
     
      <div className={style.preview}>
        <input
          className={style.inputImage}
          id={name}
          type="file"
          onChange={handleChange}
        />
        <img htmlFor={name} className={style.plus} src={plus} alt="" />
        {image && (
          <img className={style.previewImg} src={image} alt="preview" />
        )}
      </div>
      </label>
    </div>
  );
};

export default ImagemForm;
