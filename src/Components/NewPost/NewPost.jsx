import React from "react";
import Title from "../Title/Title.jsx";
import style from "../NewPost/NewPost.module.css";
import Button from "../Forms/Button/Button.jsx";
import Input from "../Forms/Input/Input.jsx";

const NewPost = () => {
  const inputs = [
    {
      label: "Titulo do Post",
      type: "text",
      name: "titulo_post",
    },
    {
      label: "Descrição do post",
      type: "textarea",
      name: "descricao_post",
    },
    {
      label: "Tag's",
      type: "select",
      name: "tags",
      options: ["Tecnologia", "Entreterimento", "Noticias"],
    },
    {
      label: "Anexo",
      type: "file",
      name: "anexo_post",
    },
    {
      label: "Imagem",
      type: "image",
      name: "img_post",
    },
  ];

  return (
    <section className={`${style.newPost} container`}>
      <Title title="+Novo Post" />
      <div className={style.form}>
        {inputs.map((dados, id) => {
          return <Input dados={dados} />;
        })}
        <Button>Enviar</Button>
      </div>
    </section>
  );
};

export default NewPost;
