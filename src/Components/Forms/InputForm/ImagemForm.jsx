import React, { useState } from "react";
import style from "../InputForm/InputForm.module.css";

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
      </label>
        <input className={style.inputImage} type="file" onChange={handleChange} />
        <div className={style.preview}>
         {image && <img src={image} alt="preview" /> } 
        </div>
    </div>
  );
};

export default ImagemForm;
