import React, { useState, useEffect } from 'react'
import style from './Home.module.css'
import PostContainer from '../PostContainer/PostContainer'
import PostOpeningContainer from '../PostOpeningContainer/PostOpeningContainer';
import PaginationContainer from '../Pagination/PaginationContainer';
import useFetch from '../../Api/useFetch'
import {GET_ALL} from '../../Api/api.js'
import { Loading } from '../Helper/Loading/Loading.jsx';
const Home = () => {

//===========API===============//
  const{data,loading,error,request} = useFetch()

  React.useEffect(()=>{
    const {url,options} = GET_ALL('posts')
    request(url,options)
  },[])
//============================//

  const [postModal, setPostModal] = useState(false);
  const [currentPost,setCurrentPost] = useState(null)
  
  if(loading) return <Loading />
  if(error) return <Error error={error} />

  return (
    <section className={`${style.home} container`}>
      <h1>Amalfis News</h1>
      <h2>Ultimas Noticias:</h2>
      <div className={`${style.filtrar} container`}>
        <h3>Filtrar</h3>
      </div>
      
      <div className={style.postList}>
          {data && data.map((post,id)=>{
          return <PostContainer key={id}
           content={post} 
           setPostModal={setPostModal} 
           postModal={postModal}
           setCurrentPost={setCurrentPost}
           />
        
          })}
       
        {postModal ? <PostOpeningContainer currentPost={currentPost} setPostModal={setPostModal} postModal={postModal}/> : ''}
        <PaginationContainer />
    </section>
  )
}
export default Home
