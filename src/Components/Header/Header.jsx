import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (
    <header className={styles.header}>
        <nav className={`${styles.nav} container`}>
            <img src="./src/images/LogoAzul.png" alt="logo" />
            <input type="text" placeholder='Buscar Noticias..'/>
            <button>Entrar</button>
        </nav>
      
    </header>
  )
}

export default Header
