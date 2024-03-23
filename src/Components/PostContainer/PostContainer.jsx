import React, { useEffect, useState } from "react";
import style from "./PostContainer.module.css";
import { formataData } from "../../functions/formataData";
import { GET_FILE } from "../../Api/api";
import useFetch from "../../Api/useFetch";

const PostContainer = ({
  content,
  setCurrentPost,
  postModal,
  setPostModal,
}) => {
  const [patchImage,setPathImage] = React.useState(null)


  React.useEffect(() => {
    const { url } = GET_FILE('files',content.img_post);
    setPathImage(url)
  }, []);


  function handleClick() {
    setPostModal(!postModal);
    setCurrentPost(content.id); // atualiza o click do post atual para a id do post
  }

  return (
    <div className={style.boxPost}>
      <h3>{content.titulo_post}</h3>
      <img src={patchImage} alt="ImagemPost" />
      <div>
        <h4>{formataData(content.createdAt)}</h4>
        <button onClick={handleClick}>Ver Noticia</button>
      </div>
    </div>
  );
};

export default PostContainer;
