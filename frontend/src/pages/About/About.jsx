import styles from "./About.module.css";
import globalStyles from "../GlobalPageStyle.module.css";

export default function About() {
  return (
    <div>
      <main className={globalStyles.main_container}>
        <h1 className={styles.test}>About</h1>
      </main>
    </div>
  );
}
