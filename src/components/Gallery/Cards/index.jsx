import React from "react";
import favorite from "./favorito.png";
import open from "./open.png";

export default function Cards({ photos, styles }) {
    return (
        <ul className={styles.gallery__cards}>
            {photos.map((photo) => {
                return (
                    <li key={photo.id} className={styles.gallery__card}>
                        <img
                            className={styles.gallery__image}
                            src={photo.imagem}
                            alt={photo.titulo}
                        />
                        <p className={styles.gallery__description}>{photo.titulo}</p>
                        <div>
                            <p>{photo.creditos}</p>
                            <span>
                                <img src={favorite} alt="Ícone de coração de curtir" />
                                <img src={open} alt="Ícone de abrir modal" />
                            </span>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}