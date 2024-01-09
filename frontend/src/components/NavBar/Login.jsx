import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import styles from "./Login.module.css";
import { useUserContext } from "../../contexts/userContext";

export default function Login({ setOpenLogin }) {
  // Références pour les champs email et mot de passe
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useUserContext();

  const notifySuccess = (text) => toast.success(text);
  const notifyFail = () => toast.error("Un problème est survenu");

  // Hook pour la navigation
  const navigate = useNavigate();

  // Gestionnaire de soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Appel à l'API pour demander une connexion
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/login`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
          }),
        }
      );

      // Redirection vers la page de connexion si la création réussit
      if (response.status === 200) {
        const auth = await response.json();
        login(auth);
        setOpenLogin(false);
        notifySuccess("Connexion réussi. Bon retour parmi nous !");
        navigate("/");
      } else {
        // Log des détails de la réponse en cas d'échec
        console.info(response);
      }
    } catch (err) {
      // Log des erreurs possibles
      console.error(err);
      notifyFail();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.input_box}>
      <input
        ref={emailRef}
        type="email"
        id="email"
        placeholder="Adresse mail"
      />
      <input
        type="password"
        id="password"
        ref={passwordRef}
        placeholder="Mot de passe"
      />

      <Button
        type="submit"
        color="secondary"
        variant="contained"
        sx={{ my: 2 }}
      >
        se connecter
      </Button>
    </form>
  );
}

Login.propTypes = {
  setOpenLogin: PropTypes.func.isRequired,
};
