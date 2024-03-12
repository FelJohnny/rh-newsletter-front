import React, { useState } from 'react'
import style from './Home.module.css'
import PostContainer from '../PostContainer/PostContainer'
import PostOpeningContainer from '../PostOpeningContainer/PostOpeningContainer';
const Home = () => {

  const [postModal, setPostModal] = useState(false);
  
  return (
    <section className={`${style.home} container`}>
      <h1>Amalfis News</h1>
      <h2>Ultimas Noticioas:</h2>
      <div className={`${style.filtrar} container`}>
        <h3>Filtrar</h3>
      </div>
        <div className={style.postList}>
          <PostContainer setPostModal={setPostModal} postModal={postModal}/>
          <PostContainer setPostModal={setPostModal} postModal={postModal}/>
          <PostContainer setPostModal={setPostModal} postModal={postModal}/>
          <PostContainer setPostModal={setPostModal} postModal={postModal}/>
          <PostContainer setPostModal={setPostModal} postModal={postModal}/>
          <PostContainer setPostModal={setPostModal} postModal={postModal}/>
        </div>
        {postModal ? <PostOpeningContainer setPostModal={setPostModal} postModal={postModal}/> : ''}
    </section>
  )
}

export default Home
