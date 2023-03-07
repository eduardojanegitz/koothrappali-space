import React from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import styles from "./HomePage.module.scss";
// import banner from "./banner.png"
import Banner from "../../components/Banner";

export default function HomePage() {
    return (
        <>
            <Header />
            <main>
            <div className={styles.principal}>
                <Menu />
                <Banner />
            </div>

            </main>
        </>
    )
}