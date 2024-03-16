import React, { useRef } from 'react'
import style from './PostOpeningContainer.module.css'
import useFetch from '../../Api/useFetch'
import { GET_TO_ID } from '../../Api/api'

const PostOpeningContainer = (props) => {
const modalContainerPost = useRef(null)
const {data,loading,error,request} = useFetch()
console.log(props);

React.useEffect(()=>{
const {url,options} = GET_TO_ID('posts',14)
request(url,options)
},[])


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
