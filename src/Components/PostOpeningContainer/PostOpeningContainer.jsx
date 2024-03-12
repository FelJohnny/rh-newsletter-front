import React from 'react'
import style from './PostOpeningContainer.module.css'

const PostOpeningContainer = (props) => {

    function closeModal(event){
        event.preventDefault()
        props.setPostModal(!props.postModal)
      }
  return (
    <div className={style.containerPostOp}>
        <div className={style.modalPostOp}>
        <button className={style.close} onClick={closeModal}>X</button>

        </div>
    </div>
  )
}

export default PostOpeningContainer
