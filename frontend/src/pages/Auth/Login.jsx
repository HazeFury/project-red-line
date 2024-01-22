import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TextField, Button } from "@mui/material";
import { useUserContext } from "../../contexts/userContext";
import globalStyles from "../GlobalPageStyle.module.css";
import styles from "./Auth.module.css";

export default function Login() {
  // États pour le mot de passe et la confirmation du mot de passe
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useUserContext();

  // Hook pour la navigation
  const navigate = useNavigate();

  // Gestionnaire de changement de l'email
  const handleMailChange = (event) => {
    setEmail(event.target.value);
  };
  // Gestionnaire de changement du mot de passe
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const notifySuccess = (text) => toast.success(text);
  const notifyFail = () => toast.error("Un problème est survenu");

  // Gestionnaire de soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Appel à l'API pour créer un nouvel utilisateur
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/login`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      // Redirection vers la page de connexion si la création réussit
      if (response.status === 200) {
        const user = await response.json();
        login(user);
        notifySuccess("Connexion réussi. Bon retour parmi nous !");
        navigate("/");
      } else {
        // Log des détails de la réponse en cas d'échec
        console.info(response);
        notifyFail();
      }
    } catch (err) {
      // Log des erreurs possibles
      console.error(err);
    }
  };
  return (
    <div>
      <main className={globalStyles.main_container}>
        <form className={styles.register_form} onSubmit={handleSubmit}>
          <p className={styles.register_title}>Connectez-vous</p>
          <TextField
            required
            name="email"
            id="email"
            label="Entrez votre adresse mail"
            value={email}
            onChange={handleMailChange}
            sx={{ my: 4, width: 300 }}
          />
          <TextField
            required
            name="password"
            id="password"
            label="Entrez votre mot de passe"
            value={password}
            onChange={handlePasswordChange}
            sx={{
              my: 4,
              width: 300,
            }}
            type="password"
          />

          <Button
            type="submit"
            variant="contained"
            disabled={password === "" || email === ""}
            onClick={handleSubmit}
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Se connecter
          </Button>
        </form>
      </main>
    </div>
  );
}
