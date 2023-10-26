import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import styles from "./SideBar.module.css";

export default function SideBar({ closeModal }) {
  const handleClose = () => {
    closeModal(false);
  };
  return (
    <div className={styles.sidebar_container}>
      <div className={`${styles.side_item_list} ${styles.side_btn_class}`}>
        <Link to="/" className={styles.side_link_class}>
          <button
            onClick={handleClose}
            type="button"
            className={styles.btn_class}
          >
            Accueil
          </button>
        </Link>
        <Link to="/" className={styles.side_link_class}>
          <button
            onClick={handleClose}
            type="button"
            className={styles.btn_class}
          >
            Motos
          </button>
        </Link>
        <Link to="/" className={styles.side_link_class}>
          <button
            onClick={handleClose}
            type="button"
            className={styles.btn_class}
          >
            À propos
          </button>
        </Link>
        <Link to="/" className={styles.side_link_class}>
          <button
            onClick={handleClose}
            type="button"
            className={styles.btn_class}
          >
            Contact
          </button>
        </Link>
        <div className={styles.login_box}>
          <div className={styles.input_box}>
            <input type="mail" placeholder="Adresse mail" />
            <input type="password" placeholder="Mot de passe" />
          </div>
          <Button color="secondary" variant="contained" sx={{ my: 2 }}>
            se connecter
          </Button>
        </div>
      </div>
    </div>
  );
}

SideBar.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
