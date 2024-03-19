import React from 'react'
import style from './InputForm.module.css'

const InputForm = ({name, label, type}) => {
  return (
    <div className={style.wrapper}>
        <label 
            htmlFor={name}
            className={style.label}    
        >{label}</label>
        <input
            className={style.input}
            type={type}
            id={name}
            name={name}
        />
        <p className={style.error}>Error</p>
    </div>
  )
}

export default InputForm
