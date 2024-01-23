import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import SideBar from "./SideBar";
import styles from "./NavBar.module.css";
import { useUserContext } from "../../contexts/userContext";

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const { userData, logout } = useUserContext();
  // const navigate = useNavigate();
  const notifySuccess = (text) => toast.success(text);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const handleLogin = () => {
    setOpenLogin(!openLogin);
  };
  const handleLoginclose = () => {
    setOpenLogin(false);
  };

  const logoutFromSession = () => {
    logout();
    handleLoginclose();
    notifySuccess("Vous avez été correctement déconnecté");
    //  navigate("/login");
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
      {!userData ? (
        <div
          className={
            openLogin ? `${styles.input_box}` : `${styles.input_box_close}`
          }
        >
          {" "}
          <Link to="/login">
            <Button
              type="submit"
              color="primary"
              variant="contained"
              sx={{ my: 2 }}
            >
              se connecter
            </Button>
          </Link>
          <Link
            onClick={handleLoginclose}
            to="/register"
            className={styles.neutral_link}
          >
            Je n'ai pas encore de compte
          </Link>
        </div>
      ) : (
        <div
          className={
            openLogin ? `${styles.input_box}` : `${styles.input_box_close}`
          }
        >
          <p className={styles.logAsUser}>
            connecté en tant que : {userData?.user?.firstname}
          </p>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            onClick={logoutFromSession}
            sx={{ my: 2 }}
          >
            se déconnecter
          </Button>
        </div>
      )}

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
          <Link to="/admin">Admin</Link>
          <Link to="/">Accueil</Link>
          <Link to="/bikes">Motos</Link>
          <Link to="/about">À propos</Link>
          <Link to="/contact">Contact</Link>
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
