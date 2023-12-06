import RecentMotorcycles from "../../components/RecentMotorcycles/RecentMotorcycles";
import { MotorcyclesProvider } from "../../contexts/motorcyclesContext";
import styles from "./About.module.css";
// import globalStyles from "../GlobalPageStyle.module.css";

export default function About() {
  return (
    <div>
      <main className={styles.main_container}>
        <MotorcyclesProvider>
          <RecentMotorcycles />
        </MotorcyclesProvider>
      </main>
    </div>
  );
}
