import React from "react";
import PreviewBikes from "../../components/Home/PreviewBikes";
import PreviewCategory from "../../components/Home/PreviewCategory";
import PreviewAbout from "../../components/Home/PreviewAbout";
import Statistics from "../../components/Home/Statistics";
import styles from "./Home.module.css";
// import { useUserContext } from "../../contexts/userContext";

export default function Home() {
  // const { user } = useUserContext();

  // console.log(user);
  return (
    <>
      <header className={styles.header_home} />
      <main>
        <PreviewBikes />
        <PreviewCategory />
        <PreviewAbout />
        <Statistics />
      </main>
    </>
  );
}
