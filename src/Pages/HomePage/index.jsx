import React from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import styles from "./HomePage.module.scss";
// import banner from "./banner.png"
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";
import Popular from "../../components/Popular";

export default function HomePage() {
    return (
        <>
            <Header />
            <main>
            <div className={styles.principal}>
                <Menu />
                <Banner />
            </div>
            {/* <Footer/> */}
            <div className={styles.gallery}>
                <Gallery />
                <Popular />
            </div>

            </main>
        </>
    )
}