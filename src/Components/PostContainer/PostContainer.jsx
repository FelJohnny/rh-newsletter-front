import React, { useEffect, useState } from "react";
import style from "./PostContainer.module.css";
import { formataData } from "../../functions/formataData";
import { GET_FILE, GET_TO_ID } from "../../Api/api";
import useFetch from "../../Api/useFetch";

const PostContainer = ({
  content,
  setCurrentPost,
  postModal,
  setPostModal,
}) => {
  const [patchImage, setPathImage] = React.useState(null);
  const [tagPost, setTagPost] = React.useState(null);
  const { data, request } = useFetch();

  React.useEffect(() => {
    const { url } = GET_FILE("files", content.img_post);
    setPathImage(url);
  }, []);

  React.useEffect(() => {
    const fetchTag = async () => {
      const { url, options } = GET_TO_ID("tags", content.tag_id);
      const { json } = await request(url, options);
      if (json) {
        setTagPost(json.nome); 
      }
    };
    fetchTag();
  }, []);

  function handleClick() {
    setPostModal(!postModal);
    setCurrentPost(content.id); // atualiza o click do post atual para a id do post
  }

  return (
    <div className={style.boxPost}>
      <h3>{content.titulo_post}</h3>
      <img src={patchImage} alt="ImagemPost" />
      <span className={style.tag}>{tagPost}</span>
      <div>
        <h4>{formataData(content.createdAt)}</h4>
        <button onClick={handleClick}>Ver Noticia</button>
      </div>
    </div>
  );
};

export default PostContainer;
