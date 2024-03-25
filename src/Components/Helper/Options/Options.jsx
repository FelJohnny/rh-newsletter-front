import React from "react";
import style from "./Options.module.css";
import trash from "../../../images/trash.svg";
import pen from "../../../images/alter.svg";
import useFetch from "../../../Api/useFetch";
import { DELETE_DATA } from "../../../Api/api";
import { useNavigate } from "react-router-dom";

export const Options = ({ dataId }) => {
  const { data, error, request } = useFetch();
  const navigate = useNavigate();

  function handleDelete() {
    console.log(dataId);
    const { url, options } = DELETE_DATA("posts", dataId);
    request(url, options);
    navigate("/");
  }

  return (
    <ul className={`${style.options} showRigth`}>
      <li onClick={handleDelete}>
        <img src={trash} alt="" />
        Deletar
      </li>
      <li>
        <img src={pen} alt="" />
        Alterar
      </li>
    </ul>
  );
};
