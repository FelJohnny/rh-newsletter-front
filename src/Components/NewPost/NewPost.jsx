import React from "react";
import Title from "../Title/Title.jsx";
import style from "../NewPost/NewPost.module.css";
import Button from "../Forms/Button/Button.jsx";
import InputForm from "../Forms/InputForm/InputForm.jsx";
import useForm from "../../Hooks/useForm/useForm.jsx";
import SelectForm from "../Forms/InputForm/SelectForm.jsx";
import ImagemForm from "../Forms/InputForm/ImagemForm.jsx";
import TextAreaForm from "../Forms/InputForm/TextAreaForm.jsx";

const NewPost = () => {
  const titleForm = useForm();
  const descricaoForm = useForm();
  const tagForm = useForm();
  const anexoImage = useForm();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(anexoImage);
  }

  return (
    <section className={`${style.newPost} container`}>
      <Title title="+Novo Post" />

      <form action="" onSubmit={handleSubmit} className={style.form}>
        <div className={style.titulo}>
          <InputForm label="Titulo" name="titulo" type="text" {...titleForm} />
        </div>
        <div className={style.descricao}>
          <TextAreaForm label="Descrição" name="descrição" {...descricaoForm} />
        </div>
        <SelectForm label="Tag" name="tags" {...tagForm} />
        <InputForm label="Anexo" name="anexo_post" type="file" />
        <div className={style.imagem}>
          <ImagemForm label="Imagem" name="imagem" {...anexoImage} />
        </div>
        <Button>Postar</Button>
      </form>
    </section>
  );
};

export default NewPost;
