import React from "react";
import Title from "../Title/Title.jsx";
import style from "../NewPost/NewPost.module.css";
import Button from "../Forms/Button/Button.jsx";
import InputForm from "../Forms/InputForm/InputForm.jsx";
import useForm from "../../Hooks/useForm/useForm.jsx";
import SelectForm from "../Forms/InputForm/SelectForm.jsx";
import ImagemForm from "../Forms/InputForm/ImagemForm.jsx";
import TextAreaForm from "../Forms/InputForm/TextAreaForm.jsx";
import { POST_DATA, POST_FILE } from "../../Api/api.js";
import useFetch from "../../Api/useFetch.jsx";
import { setFileName } from "../../functions/setFileName.js";

const NewPost = () => {
  const [fileImage, setFileImage] = React.useState(null);
  const [imgFileName, setImgFileName] = React.useState(null);
  const { data, error, loading, request } = useFetch();

  const titleForm = useForm();
  const descricaoForm = useForm();
  const tagForm = useForm();
  const anexoImage = useForm();

  async function handleSubmit(e) {
    e.preventDefault();
    //=============API===================//
    const { url, options } = POST_FILE("upload", fileImage);
    request(url, options);
    setImgFileName(data);
    //====================================//

    if (imgFileName) postApi();
  }

  function postApi() {
    const dadosParaApi = {
      titlo_post: titleForm.value,
      descricao_post: descricaoForm.value,
      anexo_post: "teste",
      usuario_post_id: 1,
      img_post: imgFileName,
      tag_id: +tagForm.value.slice(0, 3),
    };

    const { url, options } = POST_DATA("posts", dadosParaApi);
    request(url, options);


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
          <ImagemForm
            label="Imagem"
            name="imagem"
            setFileImage={setFileImage}
            {...anexoImage}
          />
        </div>
        <Button>Postar</Button>
      </form>
    </section>
  );
};

export default NewPost;
