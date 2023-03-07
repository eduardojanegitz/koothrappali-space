import React from "react";
import logo from "../../assets/icons/logo(1).png";
import search from "../../assets/icons/search.png";
import styles from "./Header.module.scss";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <img src={logo} alt='Imagem do logo do Koothrappali' />
                <h3>Kootrappali Space</h3>
            </div>
            <div className={styles.header__container}>
                <input className={styles.header__input} placeholder="O que você procura?" />
                <img src={search} alt='Imagem do ícone de pesquisar' />
            </div>
        </header>
    )
}