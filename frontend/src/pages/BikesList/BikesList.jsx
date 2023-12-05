import styles from "./BikesList.module.css";
import globalStyles from "../GlobalPageStyle.module.css";

export default function BikesList() {
  return (
    <div>
      <main className={globalStyles.main_container}>
        <h1 className={styles.test}>Bike List</h1>
      </main>
    </div>
  );
}
