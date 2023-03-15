import React from "react";
import Tags from "../Tags";
import styles from "./Gallery.module.scss";
import photos from "./photos.json";

import Cards from "./Cards";

export default function Gallery() {
    return (
        <section className={styles.gallery}>
            <h2>Navegue pela Galeria</h2>
            <Tags />
            <Cards photos={photos} styles={styles}/>
        </section>
    )
}