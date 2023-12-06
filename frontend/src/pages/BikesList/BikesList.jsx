import AllMotorcycles from "../../components/AllMotorcycles/AllMotorcycles";
// import styles from "./BikesList.module.css";
import globalStyles from "../GlobalPageStyle.module.css";

export default function BikesList() {
  return (
    <div>
      <main className={globalStyles.main_container}>
        <AllMotorcycles />
      </main>
    </div>
  );
}
