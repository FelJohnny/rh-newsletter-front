import React, { useRef } from 'react'
import style from './ModalLogin.module.css'


const ModalLogin = (props) => {
  const modalLoginContainer = useRef(null)

  function closeModal(event){
    event.preventDefault()
    if(event.target !== modalLoginContainer.current){
      props.setAtivaModal(!props.ativaModal)
    }

  }

  if(props.ativaModal === true)
  return (
  <div onClick={closeModal} className={style.containerModal}>
      <form ref={modalLoginContainer} className={style.modal}>
        <button className={style.close} onClick={closeModal}>X</button>

      </form>
  </div>
  )
}

export default ModalLogin
