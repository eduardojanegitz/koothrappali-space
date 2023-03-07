import React from "react";
import home from "./assets/icons/home-ativo.png";
import mostLiked from "./assets/icons/mais-curtidas-inativo.png";
import mostViewed from "./assets/icons/mais-vistas-inativo.png";
import news from "./assets/icons/novas-inativo.png";
import surpriseMe from "./assets/icons/surpreenda-me-inativo.png";
import styles from "./Menu.module.scss";

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__list}>
                <li className={styles.menu__item}>
                    <img src={home} alt="Ícone do início" />
                    <a href="/">Início</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={mostViewed} alt="Ícone dos mais vistos" />
                    <a href="/">Mais vistas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={mostLiked} alt="Ícone dos mais curtidos" />
                    <a href="/">Mais curtidas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={news} alt="Ícone das novas imagens" />
                    <a href="/">Novas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={surpriseMe} alt="Ícone do surpreenda-me" />
                    <a href="/">Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}