import React, { useRef } from 'react'
import style from './PostOpeningContainer.module.css'
import useFetch from '../../Api/useFetch'
import { GET_TO_ID } from '../../Api/api'
import Button from '../Forms/Button/Button'

const PostOpeningContainer = (props) => {
const modalContainerPost = useRef(null)
const {data,loading,error,request} = useFetch()

React.useEffect(()=>{
const {url,options} = GET_TO_ID('posts',14)
request(url,options)
},[])


    function closeModal(event){
        event.preventDefault()
        if(event.target !== modalContainerPost.current){
          console.log(event.target,modalContainerPost.current);
          props.setPostModal(!props.postModal)
        } 

      }
  return (
    <div onClick={closeModal} className={style.containerPostOp}>
        <section ref={modalContainerPost} className={style.modalPostOp}>
          <button className={style.close} onClick={closeModal}>X</button>

          <h3>Aniversariantes do Mês de Março</h3>
          <div className={style.title}>
            <img src="https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg" alt="" />
          </div>
          
          <div className={style.description}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Similique iure laborum magni mollitia minima nostrum voluptatem 
              fuga asperiores ullam placeat, modi non et ea doloribus nisi!</p>
          </div>
            <Button>Baixar Anexos</Button>
          
        </section>
    </div>
  )
}

export default PostOpeningContainer
