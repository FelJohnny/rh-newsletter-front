import React, { useEffect } from "react";
import useFetch from "../../../Api/useFetch";
import { GET_ALL } from "../../../Api/api";
import style from "./InputForm.module.css";


const SelectForm = ({ name, label, value, onChange, onBlur }) => {
  const { data, loading, error, request } = useFetch();


  useEffect(() => {
    const { url, options } = GET_ALL(name);
    request(url, options);
  }, []);

  if (data)
    return (
      <div>
        <label htmlFor={name} className={style.label}>
          {label}
        </label>

        <select 
          className={style.select}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        >
          <option 
            disabled
            value=""
          >Selecione</option>
            
        {data.map((option, index)=>{
            return <option key={option.id}>{option.id} - {option.nome}</option>
            })}
        </select>
        {error && <p className={style.error}>{error}</p>}
    </div>
  )
}


export default SelectForm;
