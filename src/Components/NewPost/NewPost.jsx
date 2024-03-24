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
import PopUp from "../PopUp/PopUp.jsx";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const [fileImage, setFileImage] = React.useState(null);
  const [anexoFile, setAnexoFile] = React.useState(null);
  const [popUp, setPopUp] = React.useState(false);
  let navigate = useNavigate();
  const { data, error, loading, request } = useFetch();

  const titleForm = useForm("titulo");
  const descricaoForm = useForm("descrição");
  const tagForm = useForm();
  const anexoImage = useForm();
  const anexoArquivo = useForm(false);

  async function handleSubmit(e) {
    e.preventDefault();
    //=============API===================//
    const { url, options } = POST_FILE("upload", fileImage);
    const uploadDataImage = await request(url, options);
    const uploadDataAnexo = await postArquivo(anexoFile);
    //====================================//

    if (
      uploadDataImage &&
      uploadDataImage.json &&
      titleForm.validate() &&
      tagForm.validate() &&
      descricaoForm.validate()
    ) {
      // Define o nome do arquivo retornado na resposta do upload
      const uploadImageName = uploadDataImage.json;
      const uploadAnexoName = uploadDataAnexo.json;

      const dadosParaApi = {
        titulo_post: titleForm.value,
        descricao_post: descricaoForm.value,
        anexo_post: uploadAnexoName,
        usuario_post_id: 1,
        img_post: uploadImageName, // Usando o valor retornado do upload
        tag_id: +tagForm.value.slice(0, 3),
      };

      // Posta os dados para a API após o upload da imagem
      postApi(dadosParaApi);
      setPopUp(true);
      limpaForm();
      navigate('/')

      setTimeout(() => {
        setPopUp(false);
      }, 4000);
    }
  }

  async function postArquivo(anexoFile) {
    const { url, options } = POST_FILE("upload", anexoFile);
    const uploadData = await request(url, options);
    return uploadData;
  }

  async function postApi(dadosParaApi) {
    const { url, options } = POST_DATA("posts", dadosParaApi);
    await request(url, options);
  }

  function limpaForm() {
    titleForm.reset();
    descricaoForm.reset();
    tagForm.reset();
    anexoArquivo.reset();
    anexoImage.reset();
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
        <InputForm
          label="Anexo"
          name="anexo_post"
          type="file"
          setAnexoFile={setAnexoFile}
          {...anexoArquivo}
        />
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
      <PopUp popUp={popUp}>Cadastro realizado</PopUp>
    </section>
  );
};

export default NewPost;
