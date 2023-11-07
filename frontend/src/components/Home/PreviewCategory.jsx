import React from "react";
import styles from "./PreviewCategory.module.css";

export default function PreviewCategory() {
  return (
    <>
      <h3 className={styles.section_title}>Nos catégories</h3>
      <div className={styles.category_container}>
        <div className={`${styles.category_roadster} ${styles.category}`}>
          <div className={styles.bg_color}>
            <h3 className={styles.category_title}>Roadster</h3>
          </div>
        </div>
        <div className={`${styles.category_sport} ${styles.category}`}>
          <div className={styles.bg_color}>
            <h3 className={styles.category_title}>Sportive</h3>
          </div>
        </div>
        <div className={`${styles.category_custom} ${styles.category}`}>
          <div className={styles.bg_color}>
            <h3 className={styles.category_title}>Custom</h3>
          </div>
        </div>
      </div>
    </>
  );
}
