import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/userContext";
import styles from "./AdminHome.module.css";

export default function AdminHome() {
  const [message, setMessage] = useState(null);
  const { userData } = useUserContext();
  const navigate = useNavigate();

  const autorisation = async () => {
    try {
      // Appel à l'API pour demander une connexion
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/welcomeadmin`,
        {
          method: "get",
          headers: {
            "Content-Type": "application/json",

            // Authorization: `Bearer ${token}`,  // Inclusion du jeton JWT (ancienne version)
          },
          credentials: "same-origin",
        }
      );

      if (response.status === 200) {
        const data = await response.json();
        // console.log("la réponse à la requête est :", data);
        setMessage(data);
      } else if (response.status === 401) {
        console.error(response);
        navigate("/login");
      } else {
        // Log des détails de la réponse en cas d'échec

        console.info(response);
      }
    } catch (err) {
      // Log des erreurs possibles
      console.error(err);
    }
  };

  useEffect(() => {
    autorisation();
  }, []);

  return (
    <div className={styles.admin_home}>
      <div className={styles.admin_home_container}>
        <h1>Connecté en tant que {userData?.user.email}</h1>
        <br />
        <p>{message}</p>
      </div>
    </div>
  );
}
