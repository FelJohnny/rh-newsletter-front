import React, { useState, useEffect } from 'react'
import style from './Home.module.css'
import PostContainer from '../PostContainer/PostContainer'
import PostOpeningContainer from '../PostOpeningContainer/PostOpeningContainer';
import PaginationContainer from '../Pagination/PaginationContainer';

const Home = () => {

  return (
    <section className={`${style.home} container`}>
      <h1>Amalfis News</h1>
      <h2>Ultimas Noticioas:</h2>
      <div className={`${style.filtrar} container`}>
        <h3>Filtrar</h3>
      </div>
        <div className={style.postList}>
        {loading ?<h3>Carregando...</h3>:''}       
          {dadosPost.map(dado=>(
            <div key={dado.id}>
              <PostContainer setPostModal={setPostModal} postModal={postModal} dadosPost={dado}/>
            </div>
        ))}
        </div>
        {postModal ? <PostOpeningContainer setPostModal={setPostModal} postModal={postModal}/> : ''}
        <PaginationContainer />
      
    </section>
  )
}
export default Home
