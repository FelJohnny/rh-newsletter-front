import React from "react";
import Title from "../Title/Title";
import style from "./NewUser.module.css";
import Button from "../Forms/Button/Button";
import InputForm from "../Forms/InputForm/InputForm";
import SelectForm from "../Forms/InputForm/SelectForm";
import useForm from "../../Hooks/useForm/useForm";
import PopUp from "../PopUp/PopUp";
import { useState } from "react";
import useFetch from "../../Api/useFetch";
import { POST_DATA } from "../../Api/api";
//mport { validaDuplicidadeDB } from "../../functions/validaDuplicidadeDB.jsx";

const NewUser = () => {
  const [popUp, setPopUp] = useState(false);
  const { data, loading, error, request } = useFetch();
  //validaDuplicidadeDB('usuarios',emailForm.value)//ARRUMAR
  const nameForm = useForm("name");
  const emailForm = useForm("email");
  const userForm = useForm("user");
  const senhaForm = useForm("senha");
  const senha2Form = useForm("senha2");
  const selectForm = useForm("select");

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (
      nameForm.validate() &&
      emailForm.validate() &&
      userForm.validate() &&
      senhaForm.validate() &&
      senha2Form.validate() &&
      selectForm.validate() === true
    ) {
      if (senhaForm.value !== senha2Form.value) {
        senha2Form.setError("As senhas nao conferem, favor verifique");
      } else {
        const dados = {
          nome_completo: nameForm.value,
          senha: senhaForm.value,
          status: true,
          email: emailForm.value,
          usuario: userForm.value,
          rule_id: +selectForm.value.slice(0, 2),
        };

        
        const { url, options } = POST_DATA("usuarios", dados);
        request(url, options);

        setPopUp(true);
        setTimeout(() => {
          setPopUp(false);
        }, 4000);
      }
    }
  }

  return (
    <section className={`${style.containerNewUser} container`}>
      <Title title={"Novo Usuario"} subtitle={"Preencha os dados a seguir:"} />
      <div className={style.containerForm}>
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
          <SelectForm
            label={"Nivel de Permissão: "}
            name="rules"
            {...selectForm}
          />

          <Button>Cadastrar</Button>
        </form>
      </div>
      <PopUp popUp={popUp}>Cadastro realizado</PopUp>
    </section>
  );
};

export default NewUser;
