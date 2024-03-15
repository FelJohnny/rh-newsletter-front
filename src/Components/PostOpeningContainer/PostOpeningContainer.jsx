import React, { useRef } from 'react'
import style from './PostOpeningContainer.module.css'

const PostOpeningContainer = (props) => {
const modalContainerPost = useRef(null)

    function closeModal(event){
        event.preventDefault()
        if(event.target !== modalContainerPost.current){
          props.setPostModal(!props.postModal)
        } 

      }
  return (
    <div onClick={closeModal} className={style.containerPostOp}>
        <div ref={modalContainerPost} className={style.modalPostOp}>
        <button className={style.close} onClick={closeModal}>X</button>
        </div>
    </div>
  )
}

export default PostOpeningContainer
