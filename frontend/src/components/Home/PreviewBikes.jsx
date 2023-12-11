import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import BikeCard from "./BikeCard";
import styles from "./PreviewBikes.module.css";

export default function PreviewBikes() {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3310/api/bikes")
      .then((res) => {
        setBikes(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.preview_bike_component}>
      <h1 className={styles.preview_bike_title}>Les motos à la une</h1>
      <div className={styles.preview_bike_container}>
        {bikes.slice(0, 4).map((bike) => (
          <BikeCard key={bike.id} bike={bike} />
        ))}
      </div>
      <Link to="/bikes">
        <Button
          color="secondary"
          variant="contained"
          sx={{ my: 2 }}
          onClick={scrollToTop}
        >
          Voir plus
        </Button>
      </Link>
    </section>
  );
}
