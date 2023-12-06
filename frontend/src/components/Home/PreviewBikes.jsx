import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import BikeCard from "./BikeCard";
import styles from "./PreviewBikes.module.css";
import Data from "../../DataBase/db.json";

export default function PreviewBikes() {
  const bikes = Data;

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
