import React from "react";
import Title from "../Title/Title";
import style from "./NewUser.module.css";


import Button from '../Forms/Button/Button'
import InputForm from '../Forms/InputForm/InputForm'
import SelectForm from '../Forms/InputForm/SelectForm'
import useForm from '../../Hooks/useForm/useForm'
import PopUp from '../PopUp/PopUp'
import { useState } from 'react'
import useFetch from '../../Api/useFetch'
import { POST_DATA } from '../../Api/api'

const NewUser = () => {
  const [popUp, setPopUp]=useState(false)
  const {data,loading,e,request} = useFetch()

  const nameForm = useForm ('name')
  const emailForm = useForm ('email')
  const userForm = useForm ('user')
  const senhaForm = useForm ('senha')
  const senha2Form = useForm ('senha2')
  const selectForm = useForm ('select')
  
  

  async function handleSubmit(e){
      e.preventDefault();
      


      if(nameForm.validate() && emailForm.validate() && userForm.validate() && senhaForm.validate() && senha2Form.validate() && selectForm.validate() ===true){
        if(senhaForm.value !==senha2Form.value){
          senha2Form.setError('As senhas nao conferem, favor verifique')
        }else{
          const dados={
            nome_completo: nameForm.value,
            senha: senhaForm.value,
            status: true,
            email: emailForm.value,
            usuario: userForm.value,
            rule: selectForm.value
          }
          console.log(dados);
          const {url,options} = POST_DATA('usuarios',dados)
          request(url,options)
          
          setPopUp(true)
          setTimeout(() => {
            setPopUp(false)
          }, 4000);
          //colocar fecth
        }
      }
    }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className={`${style.containerNewUser} container`}>
      <Title title={"Novo Usuario"} subtitle={"Preencha os dados a seguir:"} />
      <form action="" onSubmit={handleSubmit} className={style.form}>
        <div className={style.nome}>
          <InputForm
            label={"Nome Completo: "}
            name={"nome"}
            type={"text"}
            {...nameForm}
          />
        </div>
        <InputForm
          label={"Email: "}
          name={"email"}
          type={"email"}
          {...emailForm}
        />
        <InputForm
          label={"Usuario: "}
          name={"user"}
          type={"text"}
          {...userForm}
        />
        <InputForm
          label={"Senha: "}
          name={"senha"}
          type={"password"}
          {...senhaForm}
        />
        <InputForm
          label={"Confirmar Senha: "}
          name={"senha2"}
          type={"password"}
          {...senha2Form}
        />
        <SelectForm label={"Nivel de Permissão: "} name="rules" />
        <Button>Cadastrar</Button>

      </form>
          <PopUp popUp={popUp}>Cadastro realizado</PopUp>
    </section>
  );
};

export default NewUser;
