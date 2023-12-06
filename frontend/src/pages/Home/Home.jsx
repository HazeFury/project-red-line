import React from "react";
import PreviewBikes from "../../components/Home/PreviewBikes";
import PreviewCategory from "../../components/Home/PreviewCategory";
import PreviewAbout from "../../components/Home/PreviewAbout";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <header className={styles.header_home} />
      <main>
        <PreviewBikes />
        <PreviewCategory />
        <PreviewAbout />
      </main>
    </>
  );
}
