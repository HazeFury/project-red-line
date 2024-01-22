import Login from "../../pages/Auth/Login";
import { useUserContext } from "../../contexts/userContext";
import styles from "./AdminHome.module.css";

export default function AdminHome() {
  const { user } = useUserContext();

  return (
    <div>
      {user?.id != null ? (
        <div className={styles.admin_home}>
          <div className={styles.admin_home_container}>
            <h1>
              Cette page est accessible car vous êtes connecté en tant que{" "}
              {user?.email}, sinon vous seriez redirigé sur le login
            </h1>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}
