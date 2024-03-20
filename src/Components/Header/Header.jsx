import React, { useState } from 'react'
import styles from './Header.module.css'
import Button from '../Forms/Button/Button'
import ModalLogin from '../Forms/ModalLogin/ModalLogin'
import { Link } from 'react-router-dom';
const Header = () => {

  const [ativaModal, setAtivaModal] = useState(false)

  return (
    <>
      <header className={styles.header}>
          <nav className={`${styles.nav} container`}>
              <Link to="/">
                <img src="./src/images/LogoAzul.png" alt="logo" />
              </Link>
              <input type="text" placeholder='Buscar Noticias..'/>
              <Button onClick={()=> setAtivaModal(!ativaModal)}>Entrar</Button>
          </nav>
      
        
      </header>
      <ModalLogin ativaModal={ativaModal} setAtivaModal={setAtivaModal}/>
    </>
  )
}

export default Header
