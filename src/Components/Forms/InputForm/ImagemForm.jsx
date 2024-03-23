import React, { useState } from "react";
import style from "../InputForm/InputForm.module.css";
import plus from "../../../images/plus.svg";
import useFetch from "../../../Api/useFetch";
import { POST_FILE } from "../../../Api/api";

const ImagemForm = ({ label, name, type, value, onChange,setFileImage }) => {
  const [image, setImage] = useState(null);

  function handleChange(event) {
    const selectImage = event.target.files[0];
    setFileImage(selectImage)

    if (selectImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selectImage);
    }
    onChange(event);
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
            value={value}
          />
          {image ? (
            <img className={style.previewImg} src={image} alt="preview" />
          ) : (
            <img htmlFor={name} className={style.plus} src={plus} alt="" />
          )}
        </div>
      </label>
    </div>
  );
};

export default ImagemForm;
