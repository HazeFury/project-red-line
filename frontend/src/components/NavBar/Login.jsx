import React from "react";
// import axios from "axios";
import { Button } from "@mui/material";
import styles from "./Login.module.css";

export default function Login() {
  // const handleLogin = () => {
  //     try {
  //         axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/login`, ).then((res) => {
  //             if (res.status === 200)
  //         })
  //     }
  // }

  return (
    <div className={styles.input_box}>
      <input type="mail" placeholder="Adresse mail" />
      <input type="password" placeholder="Mot de passe" />
      <Button color="secondary" variant="contained" sx={{ my: 2 }}>
        se connecter
      </Button>
    </div>
  );
}
