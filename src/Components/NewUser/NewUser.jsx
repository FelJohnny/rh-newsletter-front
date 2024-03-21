import React from "react";
import Title from "../Title/Title";
import style from "./NewUser.module.css";

import Button from "../Forms/Button/Button";
import InputForm from "../Forms/InputForm/InputForm";
import SelectForm from "../Forms/InputForm/SelectForm";
import useForm from "../../Hooks/useForm/useForm";

const NewUser = () => {
  const nameForm = useForm();
  const emailForm = useForm("email");
  const userForm = useForm();
  const senhaForm = useForm("senha");
  const senha2Form = useForm();

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
    </section>
  );
};

export default NewUser;
