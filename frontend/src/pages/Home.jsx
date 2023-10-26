import React from "react";
import NavBar from "../components/NavBar/NavBar";
import PreviewBikes from "../components/Home/PreviewBikes";
import PreviewCategory from "../components/Home/PreviewCategory";
import PreviewAbout from "../components/Home/PreviewAbout";
import Footer from "../components/Footer/Footer";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <NavBar />
      <header className={styles.header_home} />
      <main>
        <PreviewBikes />
        <PreviewCategory />
        <PreviewAbout />
      </main>
      <Footer />
    </>
  );
}
