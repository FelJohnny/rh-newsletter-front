import React, { useEffect, useState } from 'react'
import style from './PostContainer.module.css'

const PostContainer = (props) => {
if(props.dadosPost)
  return (
        
    <div className={style.boxPost}>
      <h3>{props.dadosPost.titulo_post}</h3>
      <img src={props.dadosPost.img_post} alt="ImagemPost" />
      <div>
        <h4>Criado: {props.dadosPost.createdAt}</h4>
        <button onClick={()=> props.setPostModal(!props.postModal)}>Ver Noticia</button>
      </div>
    </div>
  )
}

export default PostContainer
