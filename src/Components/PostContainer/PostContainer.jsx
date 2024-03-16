import React from 'react'
import style from './PostContainer.module.css'
import { formataData } from '../../functions/formataData';

const PostContainer = (props) => {
  const {content,setCurrentPost} = props
  
  function handleClick(){
    props.setPostModal(!props.postModal)
    setCurrentPost(content.id)
  }

  return (
    <div className={style.boxPost}>
      <h3>{content.titulo_post}</h3>
      <img src={content.img_post} alt="ImagemPost" />
      <div>
        <h4>{formataData(content.createdAt)}</h4>
        <button onClick={handleClick}>Ver Noticia</button>
      </div>
    </div>
  )
}

export default PostContainer
