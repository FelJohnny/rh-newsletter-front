import React from 'react'
import style from './PostContainer.module.css'

const PostContainer = (props) => {
  return (
    <div className={style.boxPost}>
      <h3>Titulo</h3>
      <img src="https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg" alt="ImagemPost" />
      <div>
        <h4>10/03/2024</h4>
        <button onClick={()=> props.setPostModal(!props.postModal)}>Ver Noticia</button>
      </div>
    </div>
  )
}

export default PostContainer
