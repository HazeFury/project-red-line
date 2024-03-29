import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TextField, Button } from "@mui/material";
import globalStyles from "../GlobalPageStyle.module.css";
import styles from "./Auth.module.css";

export default function Register() {
  // États pour le mot de passe et la confirmation du mot de passe
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const matchingPassword =
    password === confirmPassword && password.length !== 0;
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
  // Gestionnaire de changement du prénom
  const handleFirstnameChange = (event) => {
    setFirstname(event.target.value);
  };

  // Gestionnaire de changement de la confirmation du mot de passe
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const notifySuccess = (text) => toast.success(text);
  const notifyFail = () => toast.error("Un problème est survenu");

  // Gestionnaire de soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Appel à l'API pour créer un nouvel utilisateur
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/users`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password,
            firstname,
          }),
        }
      );

      // Redirection vers la page de connexion si la création réussit
      if (response.status === 201) {
        navigate("/login");
        notifySuccess("Votre compte a bien été créé !");
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
          <p className={styles.register_title}>Créer votre compte</p>
          <TextField
            required
            name="firstname"
            id="firstname"
            label="Entrez votre prénom"
            value={firstname}
            onChange={handleFirstnameChange}
            sx={{ my: 4, width: 300 }}
          />
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

          <TextField
            required
            name="confirmPassword"
            id="confirmPassword"
            label="Entrez votre mot de passe"
            color={matchingPassword ? "success" : "error"}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            sx={{
              my: 4,
              width: 300,
            }}
            type="password"
          />
          <Button
            type="submit"
            variant="contained"
            disabled={
              email === "" ||
              password === "" ||
              confirmPassword === "" ||
              !matchingPassword
            }
            onClick={handleSubmit}
            sx={{ mt: 3, mb: 2, backgroundColor: "rgb(51, 153, 51)" }}
          >
            S'inscrire
          </Button>
        </form>
      </main>
    </div>
  );
}
