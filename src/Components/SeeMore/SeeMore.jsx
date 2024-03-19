import React from "react";
import Button from "../Forms/Button/Button";
import style from "../SeeMore/SeeMore.module.css";

const SeeMore = ({ setVisibleItens, visibleItens,activeButton }) => {
  function handleClick() {
    setVisibleItens(visibleItens + 3);
  }

  return (
    <div onClick={handleClick} className={style.seeMore}>
      <Button activeButton={activeButton}>Ver Mais</Button>
    </div>
  );
};

export default SeeMore;
