import React, { useRef } from "react";
import style from "./PostOpeningContainer.module.css";
import useFetch from "../../Api/useFetch";
import { GET_TO_ID } from "../../Api/api";
import Button from "../Forms/Button/Button";
import { Loading } from "../Helper/Loading/Loading";

const PostOpeningContainer = (props) => {
  const modalContainerPost = useRef(null);
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = GET_TO_ID("posts", props.currentPost);
    request(url, options);
  }, []);

  function closeModal(event) {
    event.preventDefault();
    if (event.target !== modalContainerPost.current) {
      props.setPostModal(!props.postModal);
    }
  }

  if (loading) <Loading />;
  if (data)
    return (
      <div onClick={closeModal} className={style.containerPostOp}>
        <section ref={modalContainerPost} className={style.modalPostOp}>
          <button className={style.close} onClick={closeModal}>
            X
          </button>

          <h3>{data.titulo_post}</h3>
          <div className={style.imagem}>
            <img src={data.img_post} alt="" />
          </div>

          <div className={style.description}>
            <p>{data.descricao_post}</p>
          </div>
          <Button>Baixar Anexos</Button>
        </section>
      </div>
    );
};

export default PostOpeningContainer;
