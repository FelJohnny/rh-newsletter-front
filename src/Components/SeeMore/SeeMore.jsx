import React, { useState } from "react";
import Button from "../Forms/Button/Button";
import style from "../SeeMore/SeeMore.module.css";

const SeeMore = ({ setVisibleItens, visibleItens, data }) => {
  const [buttonState, setButtonState] = useState(false);

  React.useEffect(() => {
    // se o numero de itens da API for maior que o estado 
    // visibleItens, deixa o botão inativo
    if (data &&   visibleItens >= data.length) {
      setButtonState(true); 
    }
  }, [visibleItens]);


  function handleClick() {
    setVisibleItens(visibleItens + 3);
    // itens sendo exibidos de 3 em 3
  }

  return (
    <div onClick={handleClick} className={style.seeMore}>
      <Button buttonState={buttonState}>Ver Mais</Button>
    </div>
  );
};

export default SeeMore;
