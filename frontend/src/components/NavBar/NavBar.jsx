import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import SideBar from "./SideBar";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const handleLogin = () => {
    setOpenLogin(!openLogin);
  };

  useEffect(() => {
    const handleResize = () => {
      setOpenMenu(false);
      setOpenLogin(false);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div
        className={
          openLogin ? `${styles.input_box}` : `${styles.input_box_close}`
        }
      >
        <input type="mail" placeholder="Adresse mail" />
        <input type="password" placeholder="Mot de passe" />
        <Button color="secondary" variant="contained" sx={{ my: 2 }}>
          se connecter
        </Button>
      </div>

      <div
        className={
          openMenu ? `${styles.sidebar_open}` : `${styles.sidebar_close}`
        }
      >
        <SideBar closeModal={setOpenMenu} />
      </div>
      <nav className={styles.navbar_container}>
        <img
          className={styles.pb_logo}
          src="src/assets/PB-logo.png"
          alt="Proxima-Bike logo"
        />
        <div className={styles.menu_box}>
          <p>Accueil</p>
          <p>Motos</p>
          <p>À propos</p>
          <p>Contact</p>
        </div>
        <div className={styles.burger_btn}>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleLogin}
            className={styles.btn_login}
            sx={{ mx: 3, height: 60, width: 50 }}
          >
            <AccountCircleIcon sx={{ height: 50, width: 100 }} />
          </Button>
        </div>

        <div className={styles.menu_burger}>
          <Button onClick={handleMenu} sx={{ height: 60, borderRadius: 40 }}>
            {openMenu ? (
              <CloseOutlinedIcon
                sx={{ color: "white", height: 50, width: 50 }}
              />
            ) : (
              <MenuOutlinedIcon
                sx={{ color: "white", height: 50, width: 50 }}
              />
            )}
          </Button>
        </div>
      </nav>
    </>
  );
}
