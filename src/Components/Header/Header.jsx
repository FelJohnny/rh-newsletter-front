import React from 'react'
import styles from './Header.module.css'
import Button from '../Forms/Button/Button'
const Header = () => {
  return (
    <header className={styles.header}>
        <nav className={`${styles.nav} container`}>
            <img src="./src/images/LogoAzul.png" alt="logo" />
            <input type="text" placeholder='Buscar Noticias..'/>
            <Button>Entrar</Button>
        </nav>
      
    </header>
  )
}

export default Header
