import React from 'react'
import style from './ModalLogin.module.css'


const ModalLogin = (props) => {

  function closeModal(event){
    event.preventDefault()
    props.setAtivaModal(!props.ativaModal)
  }

  if(props.ativaModal === true)
  return (
  <div className={style.containerModal}>
      <form className={style.modal}>
        <button className={style.close} onClick={closeModal}>X</button>

      </form>
  </div>
  )
}

export default ModalLogin
