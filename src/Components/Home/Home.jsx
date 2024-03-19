import React, { useState, useEffect } from "react";
import style from "./Home.module.css";
import PostContainer from "../PostContainer/PostContainer";
import PostOpeningContainer from "../PostOpeningContainer/PostOpeningContainer";
import useFetch from "../../Api/useFetch";
import { GET_ALL } from "../../Api/api.js";
import { Loading } from "../Helper/Loading/Loading.jsx";
import Title from "../Title/Title.jsx";
import SeeMore from "../SeeMore/SeeMore.jsx";

const Home = () => {
  //===========API===============//
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = GET_ALL("posts");
    request(url, options);
  }, []);
  //============================//

  const [postModal, setPostModal] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const [visibleItens,setVisibleItens] = useState(3)
  const [activeButton,setActiveButton] = useState(false)

 
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <section className={`${style.home} container`}>
      <Title title="Amalfis News" subtitle="Ultimas Noticias"/>
      <div className={`${style.filtrar} container`}>
        <h3>Filtrar</h3>
      </div>

  
      <div className={style.postList}>
        {data &&
          data.slice(0,visibleItens).map((post, id) => {
            return (
              <PostContainer
                key={id}
                content={post}
                setPostModal={setPostModal}
                postModal={postModal}
                setCurrentPost={setCurrentPost}
              />
            );
          })}
      </div>

      {postModal ? (
        <PostOpeningContainer
          currentPost={currentPost}
          setPostModal={setPostModal}
          postModal={postModal}
        />
      ) : (
        ""
      )}
     <SeeMore 
       setVisibleItens={setVisibleItens} 
       visibleItens={visibleItens}
       activeButton={activeButton}
       />
    </section>
  );
 
};
export default Home;
