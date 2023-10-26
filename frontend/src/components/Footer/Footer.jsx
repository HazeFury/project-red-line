import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer_container}>
      <p>Wild Code School 2023</p>
      <img
        className={styles.pb_logo}
        src="src/assets/PB-logo.png"
        alt="Proxima-Bike logo"
      />
    </footer>
  );
}
