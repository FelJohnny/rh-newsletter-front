import React from 'react'
import Title from '../Title/Title'
import style from './NewUser.module.css'

import Button from '../Forms/Button/Button'
import InputForm from '../Forms/InputForm/InputForm'
import SelectForm from '../Forms/InputForm/SelectForm'
const NewUser = () => {

    function handleSubmit(){

    }
  return (
    <section className={`${style.containerNewUser} container`}>
      <Title title={"Novo Usuario"} subtitle={"Preencha os dados a seguir:"}/>

      <form action="" onSubmit={handleSubmit} className={style.form}>
        <div className={style.nome}>
            <InputForm label={'Nome Completo: '} name={'nome'} type={'text'}/>
        </div>
        <InputForm label={'Email: '} name={'email'} type={'email'}/>
        <InputForm label={'Usuario: '} name={'user'} type={'text'}/>
        <InputForm label={'Senha: '} name={'senha'} type={'password'}/>
        <InputForm label={'Confirmar Senha: '} name={'senha2'} type={'password'}/>
        <SelectForm label={"Nivel de Permissão: "}/>
        <Button>Cadastrar</Button>
      </form>
    </section>
  )
}

export default NewUser
